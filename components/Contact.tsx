"use client";

import { useRef, FormEvent, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Loader2 } from "lucide-react";

const perks = ["Reply within 24 hours", "First revision free", "No upfront payment"];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

type Status = "idle" | "sending" | "sent" | "error";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.875rem 1rem",
  borderRadius: "0.75rem",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "#f0ede8",
  fontSize: "0.9rem",
  fontFamily: "var(--font-body), sans-serif",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.68rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(240,237,232,0.3)",
  marginBottom: "0.5rem",
  fontFamily: "var(--font-body), sans-serif",
};

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section section-dark">
      <div className="wrap">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* Form */}
          <motion.div variants={itemVariants}>
            <span className="overline">Contact &amp; pricing</span>
            <h2 style={{
              fontFamily: "var(--font-display), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem,4vw,2.8rem)",
              color: "#f0ede8",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}>
              Tell us what&apos;s hard to explain
            </h2>
            <p style={{
              fontFamily: "var(--font-body), sans-serif",
              fontWeight: 300,
              fontSize: "0.925rem",
              color: "rgba(240,237,232,0.4)",
              lineHeight: 1.85,
              marginBottom: "2.5rem",
            }}>
              Describe your product and what people struggle to understand about
              it. We&apos;ll reply within 24 hours with an exact quote and a
              delivery date — most projects ship in 5 days.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                <div>
                  <label htmlFor="name" style={labelStyle}>Name</label>
                  <input id="name" name="name" type="text" required placeholder="Alex Johnson" style={inputStyle} />
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle}>Email</label>
                  <input id="email" name="email" type="email" required placeholder="alex@company.com" style={inputStyle} />
                </div>
              </div>
              <div>
                <label htmlFor="message" style={labelStyle}>Tell us about your project</label>
                <textarea
                  id="message" name="message" required rows={5}
                  placeholder="Our onboarding confuses new users — we need a 60-second video that walks them through it..."
                  style={{ ...inputStyle, resize: "none", lineHeight: 1.75 }}
                />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="btn-primary"
                >
                  {status === "sending" && <Loader2 style={{ width: 16, height: 16, animation: "spin 1s linear infinite" }} />}
                  {status === "sent" ? "Message sent!" : "Send message"}
                </button>
                {status === "error" && (
                  <p style={{ fontSize: "0.85rem", color: "#f87171", fontFamily: "var(--font-body), sans-serif" }}>
                    Something went wrong. Try again.
                  </p>
                )}
              </div>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div variants={itemVariants} style={{ paddingTop: "4rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
              {perks.map(perk => (
                <div key={perk} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{
                    flexShrink: 0, width: 28, height: 28, borderRadius: "50%",
                    background: "rgba(125,211,252,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Check style={{ width: 14, height: 14, color: "#7dd3fc" }} strokeWidth={2.5} />
                  </div>
                  <p style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.925rem",
                    color: "rgba(240,237,232,0.6)",
                  }}>
                    {perk}
                  </p>
                </div>
              ))}
            </div>

            <div style={{
              padding: "2rem",
              borderRadius: "1rem",
              background: "#0d0d0d",
              border: "1px solid rgba(255,255,255,0.05)",
            }}>
              <p style={{
                fontFamily: "var(--font-display), sans-serif",
                fontWeight: 700,
                fontSize: "1.05rem",
                color: "#f0ede8",
                marginBottom: "0.75rem",
              }}>
                How we price
              </p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {[
                  { item: "Flowchart explainer videos", unit: "per minute" },
                  { item: "Screen-recorded product demos", unit: "per minute" },
                  { item: "From-scratch animation, no recording", unit: "per minute" },
                  { item: "Custom icons & logo animation", unit: "add-on" },
                ].map(({ item, unit }, i) => (
                  <div key={item} style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: "1rem",
                    padding: "0.85rem 0",
                    borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.05)",
                  }}>
                    <span style={{
                      fontFamily: "var(--font-body), sans-serif",
                      fontWeight: 300,
                      fontSize: "0.875rem",
                      color: "rgba(240,237,232,0.55)",
                    }}>
                      {item}
                    </span>
                    <span style={{
                      flexShrink: 0,
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: "0.72rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#7dd3fc",
                    }}>
                      {unit}
                    </span>
                  </div>
                ))}
              </div>
              <p style={{
                marginTop: "1.25rem",
                paddingTop: "1.25rem",
                borderTop: "1px solid rgba(255,255,255,0.05)",
                fontFamily: "var(--font-body), sans-serif",
                fontWeight: 300,
                fontSize: "0.8rem",
                color: "rgba(240,237,232,0.3)",
                lineHeight: 1.7,
              }}>
                Detailed rate card (PDF) coming soon — until then, just ask and
                we&apos;ll break it down for your project.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
