import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Project tokens
        gold: "#C8411C",
        "gold-light": "#e05a32",
        "gold-dim": "rgba(200,65,28,0.12)",
        black: "#080808",
        dark: "#0e0e0e",
        "dark-2": "#141414",
        "dark-3": "#1c1c1c",
        "dark-4": "#242424",
        "warm-white": "#f5f2f0",
        muted: "#8a8784",
        border: "rgba(200,65,28,0.2)",
        // shadcn/ui tokens
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
        },
        input: "var(--input)",
        ring: "var(--ring)",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-dancing)", "cursive"],
      },
      maxWidth: {
        site: "1280px",
      },
      animation: {
        "float-up": "floatUp 6s ease-in-out infinite",
        "banner-flow": "bannerFlow 20s linear infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        floatUp: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        bannerFlow: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C8411C 0%, #e05a32 50%, #C8411C 100%)",
        "dark-gradient": "linear-gradient(180deg, #080808 0%, #0e0e0e 100%)",
        "radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
