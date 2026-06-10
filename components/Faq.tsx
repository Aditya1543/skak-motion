"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Do you write the script?",
    a: "Yes. On day 3 we write the script and storyboard from your brief and footage, and you sign off before anything is animated. If you already have a script, we'll tighten it for motion.",
  },
  {
    q: "What do you need from us to start?",
    a: "A short call or written brief about what's hard to explain, your brand colors or guidelines, and any screen recordings you have. That's it — we handle the rest.",
  },
  {
    q: "What if we don't have a screen recording?",
    a: "No problem. Our from-scratch animation service needs zero footage — we animate your product or concept entirely from the script. Perfect for early-stage or invisible products.",
  },
  {
    q: "How many revisions are included?",
    a: "Your first full revision round is free. After that we keep iterating in smaller paid rounds until it's exactly right — most projects never need more than one.",
  },
  {
    q: "How is pricing calculated?",
    a: "Per finished minute of video, with the rate depending on the style — flowchart explainer, screen-recorded demo, or from-scratch animation. Custom icons and logo animation are quoted as add-ons. Tell us your scope and we'll send an exact quote within 24 hours.",
  },
  {
    q: "Who owns the final video?",
    a: "You do — completely. Use it on your site, in ads, in your pitch deck, anywhere. Script and source files are available on request.",
  },
];

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <button
        onClick={onToggle}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          padding: "1.5rem 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{
          fontFamily: "var(--font-display), sans-serif",
          fontWeight: 600,
          fontSize: "1rem",
          color: open ? "#7dd3fc" : "#f0ede8",
          letterSpacing: "-0.01em",
          transition: "color 0.25s",
        }}>
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{ flexShrink: 0, display: "flex" }}
        >
          <Plus style={{ width: 18, height: 18, color: open ? "#7dd3fc" : "rgba(240,237,232,0.4)" }} strokeWidth={1.5} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ overflow: "hidden" }}
          >
            <p style={{
              fontFamily: "var(--font-body), sans-serif",
              fontWeight: 300,
              fontSize: "0.9rem",
              color: "rgba(240,237,232,0.45)",
              lineHeight: 1.85,
              paddingBottom: "1.5rem",
              maxWidth: "44rem",
            }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-10% 0px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="wrap" style={{ maxWidth: "52rem" }}>
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut" as const }}
          className="section-head"
          style={{ marginBottom: "3rem" }}
        >
          <span className="overline">FAQ</span>
          <h2 className="h2">Before you ask</h2>
        </motion.div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {faqs.map((f, i) => (
            <FaqItem
              key={f.q}
              q={f.q}
              a={f.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
