import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X } from 'lucide-react';

export interface Position3D {
  x: number;
  y: number;
  z: number;
}

export interface SphericalPosition {
  theta: number;
  phi: number;
  radius: number;
}

export interface WorldPosition extends Position3D {
  scale: number;
  zIndex: number;
  isVisible: boolean;
  fadeOpacity: number;
  originalIndex: number;
}

export interface ImageData {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

export interface SphereImageGridProps {
  images?: ImageData[];
  containerSize?: number;
  sphereRadius?: number;
  dragSensitivity?: number;
  momentumDecay?: number;
  maxRotationSpeed?: number;
  baseImageScale?: number;
  hoverScale?: number;
  perspective?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  className?: string;
}

interface RotationState { x: number; y: number; z: number; }
interface VelocityState { x: number; y: number; }
interface MousePosition { x: number; y: number; }

const SPHERE_MATH = {
  degreesToRadians: (d: number) => d * (Math.PI / 180),
  normalizeAngle: (a: number) => {
    while (a > 180) a -= 360;
    while (a < -180) a += 360;
    return a;
  }
};

const SphereImageGrid: React.FC<SphereImageGridProps> = ({
  images = [],
  containerSize = 400,
  sphereRadius = 200,
  dragSensitivity = 0.5,
  momentumDecay = 0.95,
  maxRotationSpeed = 5,
  baseImageScale = 0.12,
  hoverScale = 1.2,
  perspective = 1000,
  autoRotate = false,
  autoRotateSpeed = 0.3,
  className = ''
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [rotation, setRotation] = useState<RotationState>({ x: 15, y: 15, z: 0 });
  const [velocity, setVelocity] = useState<VelocityState>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [imagePositions, setImagePositions] = useState<SphericalPosition[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const lastMousePos = useRef<MousePosition>({ x: 0, y: 0 });
  const animationFrame = useRef<number | null>(null);

  const actualSphereRadius = sphereRadius || containerSize * 0.5;
  const baseImageSize = containerSize * baseImageScale;

  const generateSpherePositions = useCallback((): SphericalPosition[] => {
    const positions: SphericalPosition[] = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const angleIncrement = 2 * Math.PI / goldenRatio;
    for (let i = 0; i < images.length; i++) {
      const t = i / images.length;
      const inclination = Math.acos(1 - 2 * t);
      const azimuth = angleIncrement * i;
      let phi = inclination * (180 / Math.PI);
      let theta = (azimuth * (180 / Math.PI)) % 360;
      const poleBonus = Math.pow(Math.abs(phi - 90) / 90, 0.6) * 35;
      phi = phi < 90 ? Math.max(5, phi - poleBonus) : Math.min(175, phi + poleBonus);
      phi = 15 + (phi / 180) * 150;
      theta = (theta + (Math.random() - 0.5) * 20) % 360;
      phi = Math.max(0, Math.min(180, phi + (Math.random() - 0.5) * 10));
      positions.push({ theta, phi, radius: actualSphereRadius });
    }
    return positions;
  }, [images.length, actualSphereRadius]);

  const clampRotationSpeed = useCallback((s: number) =>
    Math.max(-maxRotationSpeed, Math.min(maxRotationSpeed, s)),
  [maxRotationSpeed]);

  const calculateWorldPositions = useCallback((): WorldPosition[] => {
    const positions = imagePositions.map((pos, index) => {
      const thetaRad = SPHERE_MATH.degreesToRadians(pos.theta);
      const phiRad = SPHERE_MATH.degreesToRadians(pos.phi);
      const rotXRad = SPHERE_MATH.degreesToRadians(rotation.x);
      const rotYRad = SPHERE_MATH.degreesToRadians(rotation.y);

      let x = pos.radius * Math.sin(phiRad) * Math.cos(thetaRad);
      let y = pos.radius * Math.cos(phiRad);
      let z = pos.radius * Math.sin(phiRad) * Math.sin(thetaRad);

      const x1 = x * Math.cos(rotYRad) + z * Math.sin(rotYRad);
      const z1 = -x * Math.sin(rotYRad) + z * Math.cos(rotYRad);
      x = x1; z = z1;
      const y2 = y * Math.cos(rotXRad) - z * Math.sin(rotXRad);
      const z2 = y * Math.sin(rotXRad) + z * Math.cos(rotXRad);
      y = y2; z = z2;

      const fadeZoneStart = -10, fadeZoneEnd = -30;
      const isVisible = z > fadeZoneEnd;
      const fadeOpacity = z <= fadeZoneStart
        ? Math.max(0, (z - fadeZoneEnd) / (fadeZoneStart - fadeZoneEnd))
        : 1;

      const isPoleImage = pos.phi < 30 || pos.phi > 150;
      const distanceFromCenter = Math.sqrt(x * x + y * y);
      const distanceRatio = Math.min(distanceFromCenter / actualSphereRadius, 1);
      const distancePenalty = isPoleImage ? 0.4 : 0.7;
      const centerScale = Math.max(0.3, 1 - distanceRatio * distancePenalty);
      const depthScale = (z + actualSphereRadius) / (2 * actualSphereRadius);
      const scale = centerScale * Math.max(0.5, 0.8 + depthScale * 0.3);

      return { x, y, z, scale, zIndex: Math.round(1000 + z), isVisible, fadeOpacity, originalIndex: index };
    });

    const adjusted = [...positions];
    for (let i = 0; i < adjusted.length; i++) {
      if (!adjusted[i].isVisible) continue;
      let adjustedScale = adjusted[i].scale;
      const imageSize = baseImageSize * adjustedScale;
      for (let j = 0; j < adjusted.length; j++) {
        if (i === j || !adjusted[j].isVisible) continue;
        const otherSize = baseImageSize * adjusted[j].scale;
        const dx = adjusted[i].x - adjusted[j].x;
        const dy = adjusted[i].y - adjusted[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDistance = (imageSize + otherSize) / 2 + 25;
        if (distance < minDistance && distance > 0) {
          const overlap = minDistance - distance;
          adjustedScale = Math.min(adjustedScale, adjustedScale * Math.max(0.4, 1 - (overlap / minDistance) * 0.6));
        }
      }
      adjusted[i] = { ...adjusted[i], scale: Math.max(0.25, adjustedScale) };
    }
    return adjusted;
  }, [imagePositions, rotation, actualSphereRadius, baseImageSize]);

  const updateMomentum = useCallback(() => {
    if (isDragging) return;
    setVelocity(prev => {
      const nv = { x: prev.x * momentumDecay, y: prev.y * momentumDecay };
      if (!autoRotate && Math.abs(nv.x) < 0.01 && Math.abs(nv.y) < 0.01) return { x: 0, y: 0 };
      return nv;
    });
    setRotation(prev => ({
      x: SPHERE_MATH.normalizeAngle(prev.x + clampRotationSpeed(velocity.x)),
      y: SPHERE_MATH.normalizeAngle(prev.y + (autoRotate ? autoRotateSpeed : 0) + clampRotationSpeed(velocity.y)),
      z: prev.z
    }));
  }, [isDragging, momentumDecay, velocity, clampRotationSpeed, autoRotate, autoRotateSpeed]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setVelocity({ x: 0, y: 0 });
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;
    const rd = { x: -deltaY * dragSensitivity, y: deltaX * dragSensitivity };
    setRotation(prev => ({
      x: SPHERE_MATH.normalizeAngle(prev.x + clampRotationSpeed(rd.x)),
      y: SPHERE_MATH.normalizeAngle(prev.y + clampRotationSpeed(rd.y)),
      z: prev.z
    }));
    setVelocity({ x: clampRotationSpeed(rd.x), y: clampRotationSpeed(rd.y) });
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  }, [isDragging, dragSensitivity, clampRotationSpeed]);

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    const t = e.touches[0];
    setIsDragging(true);
    setVelocity({ x: 0, y: 0 });
    lastMousePos.current = { x: t.clientX, y: t.clientY };
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const t = e.touches[0];
    const deltaX = t.clientX - lastMousePos.current.x;
    const deltaY = t.clientY - lastMousePos.current.y;
    const rd = { x: -deltaY * dragSensitivity, y: deltaX * dragSensitivity };
    setRotation(prev => ({
      x: SPHERE_MATH.normalizeAngle(prev.x + clampRotationSpeed(rd.x)),
      y: SPHERE_MATH.normalizeAngle(prev.y + clampRotationSpeed(rd.y)),
      z: prev.z
    }));
    setVelocity({ x: clampRotationSpeed(rd.x), y: clampRotationSpeed(rd.y) });
    lastMousePos.current = { x: t.clientX, y: t.clientY };
  }, [isDragging, dragSensitivity, clampRotationSpeed]);

  const handleTouchEnd = useCallback(() => setIsDragging(false), []);

  useEffect(() => { setIsMounted(true); }, []);
  useEffect(() => { setImagePositions(generateSpherePositions()); }, [generateSpherePositions]);

  useEffect(() => {
    const animate = () => { updateMomentum(); animationFrame.current = requestAnimationFrame(animate); };
    if (isMounted) animationFrame.current = requestAnimationFrame(animate);
    return () => { if (animationFrame.current) cancelAnimationFrame(animationFrame.current); };
  }, [isMounted, updateMomentum]);

  useEffect(() => {
    if (!isMounted) return;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMounted, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  const worldPositions = calculateWorldPositions();

  const renderImageNode = useCallback((image: ImageData, index: number) => {
    const position = worldPositions[index];
    if (!position || !position.isVisible) return null;
    const imageSize = baseImageSize * position.scale;
    const isHovered = hoveredIndex === index;
    const finalScale = isHovered ? Math.min(hoverScale, hoverScale / position.scale) : 1;
    return (
      <div
        key={image.id}
        className="absolute cursor-pointer select-none transition-transform duration-200 ease-out"
        style={{
          width: `${imageSize}px`, height: `${imageSize}px`,
          left: `${containerSize / 2 + position.x}px`,
          top: `${containerSize / 2 + position.y}px`,
          opacity: position.fadeOpacity,
          transform: `translate(-50%, -50%) scale(${finalScale})`,
          zIndex: position.zIndex
        }}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        onClick={() => setSelectedImage(image)}
      >
        <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg border-2 border-white/20">
          <img src={image.src} alt={image.alt} className="w-full h-full object-cover" draggable={false} loading={index < 3 ? 'eager' : 'lazy'} />
        </div>
      </div>
    );
  }, [worldPositions, baseImageSize, containerSize, hoveredIndex, hoverScale]);

  if (!isMounted) return (
    <div className="bg-dark-3 rounded-lg animate-pulse flex items-center justify-center" style={{ width: containerSize, height: containerSize }}>
      <div className="text-muted text-sm">Loading...</div>
    </div>
  );

  if (!images.length) return null;

  return (
    <>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
      <div
        ref={containerRef}
        className={`relative select-none cursor-grab active:cursor-grabbing ${className}`}
        style={{ width: containerSize, height: containerSize, perspective: `${perspective}px` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="relative w-full h-full" style={{ zIndex: 10 }}>
          {images.map((image, index) => renderImageNode(image, index))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={() => setSelectedImage(null)} style={{ animation: 'fadeIn 0.3s ease-out' }}>
          <div className="bg-dark-2 border border-gold/20 rounded-2xl max-w-sm w-full overflow-hidden" onClick={e => e.stopPropagation()} style={{ animation: 'scaleIn 0.3s ease-out' }}>
            <div className="relative aspect-square">
              <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-full object-cover" />
              <button onClick={() => setSelectedImage(null)} className="absolute top-3 right-3 w-8 h-8 bg-black/50 rounded-full text-white flex items-center justify-center hover:bg-black/70 transition-all cursor-pointer">
                <X size={14} />
              </button>
            </div>
            {(selectedImage.title || selectedImage.description) && (
              <div className="p-5">
                {selectedImage.title && <h3 className="font-serif text-lg text-warm-white font-light mb-1">{selectedImage.title}</h3>}
                {selectedImage.description && <p className="text-xs text-muted font-sans leading-relaxed">{selectedImage.description}</p>}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SphereImageGrid;
