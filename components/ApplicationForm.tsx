"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";

const practiceAreas = [
  "Personal Injury",
  "Criminal Defense",
  "Family Law / Divorce",
  "Immigration Law",
  "Business / Commercial",
  "Tax & Bankruptcy",
  "Estate Planning",
  "Employment Law",
  "Other",
];

const budgetRanges = [
  "Under $2,000 / month",
  "$2,000 – $5,000 / month",
  "$5,000 – $10,000 / month",
  "$10,000+ / month",
];

const serviceOptions = [
  "Search Authority (SEO)",
  "Google Ads / Local Service Ads",
  "Facebook & Instagram Ads",
  "Website Design & Conversion",
  "Content Production",
  "Reputation Management",
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ApplicationForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    firmName: "",
    practiceArea: "",
    budget: "",
    services: [] as string[],
    challenge: "",
    email: "",
  });
  const [formState, setFormState] = useState<FormState>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleServiceToggle(service: string) {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("submitting");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setFormState("success");
    } catch {
      setFormState("error");
    }
  }

  const isValid =
    form.firmName.trim() &&
    form.practiceArea &&
    form.budget &&
    form.services.length > 0 &&
    form.challenge.trim() &&
    form.email.trim();

  return (
    <section
      id="apply"
      ref={ref}
      className="section-pad relative overflow-hidden bg-dark"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gold/4 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-site relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="label-tag mb-5 mx-auto">Limited Spots Available</div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-warm-white font-light leading-[1.05] tracking-tight mb-4">
            Apply to Work{" "}
            <span className="text-gradient font-semibold italic">With Us</span>
          </h2>
          <p className="body-lg max-w-xl mx-auto">
            We review every application personally. If it&apos;s a fit, you&apos;ll hear
            from us within one business day.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="bg-dark-2 border border-gold/10 rounded-2xl p-8 md:p-10">
            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  className="flex flex-col items-center text-center py-8"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12L10 17L19 7" stroke="#C8411C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl text-warm-white font-light mb-3">
                    Application Received
                  </h3>
                  <p className="text-sm text-muted leading-relaxed max-w-sm">
                    We review applications within 1 business day. If it&apos;s a fit,
                    you&apos;ll hear from us directly at{" "}
                    <span className="text-warm-white">{form.email}</span>.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Field label="Firm Name" required>
                    <input
                      type="text"
                      name="firmName"
                      value={form.firmName}
                      onChange={handleChange}
                      placeholder="e.g. Johnson & Associates"
                      required
                      className="form-input"
                    />
                  </Field>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Primary Practice Area" required>
                      <select name="practiceArea" value={form.practiceArea} onChange={handleChange} required className="form-input">
                        <option value="" disabled>Select area</option>
                        {practiceAreas.map((a) => <option key={a} value={a}>{a}</option>)}
                      </select>
                    </Field>

                    <Field label="Monthly Marketing Budget" required>
                      <select name="budget" value={form.budget} onChange={handleChange} required className="form-input">
                        <option value="" disabled>Select range</option>
                        {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </Field>
                  </div>

                  <Field label="Services you're interested in" required>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-0.5">
                      {serviceOptions.map((service) => {
                        const checked = form.services.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => handleServiceToggle(service)}
                            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border text-left text-sm font-sans transition-all duration-200 ${
                              checked
                                ? "border-gold/50 bg-gold/8 text-warm-white"
                                : "border-gold/10 bg-dark-3 text-muted hover:border-gold/25 hover:text-warm-white"
                            }`}
                          >
                            <span className={`w-4 h-4 shrink-0 rounded border flex items-center justify-center transition-all duration-200 ${checked ? "bg-gold border-gold" : "border-gold/25 bg-transparent"}`}>
                              {checked && (
                                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                                  <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                            </span>
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </Field>

                  <Field label="What's your biggest growth challenge right now?" required>
                    <textarea
                      name="challenge"
                      value={form.challenge}
                      onChange={handleChange}
                      placeholder="e.g. We're getting traffic but not converting it into consultations..."
                      required
                      rows={3}
                      className="form-input resize-none"
                    />
                  </Field>

                  <Field label="Your Email" required>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@yourfirm.com"
                      required
                      className="form-input"
                    />
                  </Field>

                  <div className="pt-2">
                    <MagneticButton
                      type="submit"
                      disabled={!isValid || formState === "submitting"}
                      className="btn-primary w-full justify-center py-4 text-sm disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {formState === "submitting" ? (
                        <><Spinner />Submitting…</>
                      ) : (
                        <>
                          Submit My Application
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </>
                      )}
                    </MagneticButton>
                  </div>

                  {formState === "error" && (
                    <p className="text-center text-xs text-red-400 font-sans">
                      Something went wrong. Please try again or reach us at{" "}
                      <a href="mailto:info@thebuildcounsel.com" className="underline">info@thebuildcounsel.com</a>
                      {" "}or{" "}
                      <a href="tel:+13658055602" className="underline">+1 (365) 805-5602</a>
                    </p>
                  )}

                  <p className="text-center text-[11px] text-muted/60 font-sans">
                    No commitment. We reach out only if it&apos;s a genuine fit.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Trust row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 text-xs text-muted font-sans">
            {["Law firms only", "Response within 1 business day", "No spam, ever"].map((text, i) => (
              <span key={text} className="flex items-center gap-2">
                {i > 0 && <span className="hidden sm:block w-px h-3 bg-gold/20" aria-hidden="true" />}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6L5 9L10 3" stroke="#C8411C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {text}
              </span>
            ))}
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
            <a
              href="mailto:info@thebuildcounsel.com"
              className="flex items-center gap-2.5 bg-dark-3 border border-gold/20 rounded-xl px-5 py-3 text-sm font-medium text-warm-white hover:border-gold/40 hover:bg-dark-4 transition-all duration-200 font-sans"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" className="text-gold shrink-0">
                <rect x="1" y="2.5" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
                <path d="M1 5L7.5 9L14 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              info@thebuildcounsel.com
            </a>
            <a
              href="tel:+13658055602"
              className="flex items-center gap-2.5 bg-dark-3 border border-gold/20 rounded-xl px-5 py-3 text-sm font-medium text-warm-white hover:border-gold/40 hover:bg-dark-4 transition-all duration-200 font-sans"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" className="text-gold shrink-0">
                <path d="M2.5 3C2.5 2.4 3 2 3.5 2H5.5L7 5.5L5 6.5C5.7 8 7.5 9.8 9 10.5L10 8.5L13.5 10V12C13.5 12.6 13 13 12.5 13C6 13 2.5 6.5 2.5 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
              +1 (365) 805-5602
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-sans font-medium text-muted tracking-wide">
        {label}{required && <span className="text-gold ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

function Spinner() {
  return (
    <svg className="animate-spin" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" />
      <path d="M7 1.5A5.5 5.5 0 0 1 12.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
