"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Send your recording",
    description:
      "Share your screen recording and tell us what you want to convey. Loom, MP4, QuickTime — whatever works for you.",
  },
  {
    number: "02",
    title: "We animate it",
    description:
      "Our Remotion-powered pipeline transforms your raw footage into a cinematic, polished product demo with motion graphics.",
  },
  {
    number: "03",
    title: "You get your video",
    description:
      "Receive your final video — ready to embed on your landing page, share on socials, or run as an ad.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function HowItWorks() {
  const headRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-10% 0px" });
  const bodyInView = useInView(bodyRef, { once: true, margin: "-15% 0px" });

  return (
    <section id="how-it-works" className="section section-dark">
      <div className="wrap">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut" as const }}
          className="section-head"
        >
          <span className="overline">Process</span>
          <h2 className="h2">A simple process</h2>
        </motion.div>

        <motion.div
          ref={bodyRef}
          variants={containerVariants}
          initial="hidden"
          animate={bodyInView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "3.5rem",
          }}
        >
          {steps.map(step => (
            <motion.div key={step.number} variants={itemVariants}>
              <p style={{
                fontFamily: "var(--font-display), sans-serif",
                fontWeight: 700,
                fontSize: "4.5rem",
                lineHeight: 1,
                color: "rgba(125,211,252,0.1)",
                marginBottom: "1.5rem",
                userSelect: "none",
              }}>
                {step.number}
              </p>
              <h3 style={{
                fontFamily: "var(--font-display), sans-serif",
                fontWeight: 700,
                fontSize: "1.2rem",
                color: "#f0ede8",
                marginBottom: "1rem",
                letterSpacing: "-0.01em",
              }}>
                {step.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-body), sans-serif",
                fontWeight: 300,
                fontSize: "0.9rem",
                color: "rgba(240,237,232,0.45)",
                lineHeight: 1.85,
              }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
