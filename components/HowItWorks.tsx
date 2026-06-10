"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    day: "Day 1",
    title: "We listen",
    description:
      "We get on a call and you tell us what's hard to explain. Send any screen recordings you have — and if your product is early or invisible, no footage needed.",
  },
  {
    day: "Day 2",
    title: "We verify & brainstorm",
    description:
      "We go through your footage, confirm what's usable, and brainstorm the angle and story that will make your product actually click.",
  },
  {
    day: "Day 3",
    title: "We brand & script",
    description:
      "We lock your brand colors and visual theme, then write a tight script and storyboard for you to sign off on before a single frame moves.",
  },
  {
    day: "Day 4",
    title: "We animate",
    description:
      "We build the animation — motion graphics, brand-matched icons, and the flow that carries your message from first frame to last.",
  },
  {
    day: "Day 5",
    title: "We polish & deliver",
    description:
      "We polish around the clock and hand you the final cut — then your first round of revisions is on us. All within five days.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
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
          <h2 className="h2">From brief to final cut in 5 days</h2>
          <p style={{
            maxWidth: "34rem",
            margin: "1.5rem auto 0",
            fontFamily: "var(--font-body), sans-serif",
            fontWeight: 300,
            fontSize: "0.95rem",
            color: "rgba(240,237,232,0.45)",
            lineHeight: 1.85,
          }}>
            No black box. Here&apos;s exactly what happens between your first
            message and your finished video.
          </p>
        </motion.div>

        <motion.div
          ref={bodyRef}
          variants={containerVariants}
          initial="hidden"
          animate={bodyInView ? "visible" : "hidden"}
          style={{ position: "relative" }}
        >
          {/* Connecting line */}
          <div style={{
            position: "absolute",
            left: "1.4rem",
            top: "0.6rem",
            bottom: "0.6rem",
            width: 1,
            background: "linear-gradient(to bottom, rgba(125,211,252,0.4), rgba(125,211,252,0.05))",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "2.75rem" }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.day}
                variants={itemVariants}
                style={{ display: "flex", gap: "1.75rem", alignItems: "flex-start", position: "relative" }}
              >
                {/* Node */}
                <div style={{ flexShrink: 0, position: "relative", zIndex: 1 }}>
                  <div style={{
                    width: "2.8rem",
                    height: "2.8rem",
                    borderRadius: "50%",
                    background: "#0a0a0a",
                    border: "1px solid rgba(125,211,252,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-display), sans-serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "#7dd3fc",
                  }}>
                    {i + 1}
                  </div>
                </div>

                {/* Text */}
                <div style={{ paddingTop: "0.15rem" }}>
                  <p style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.66rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#7dd3fc",
                    marginBottom: "0.5rem",
                  }}>
                    {step.day}
                  </p>
                  <h3 style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: "#f0ede8",
                    marginBottom: "0.6rem",
                    letterSpacing: "-0.01em",
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontWeight: 300,
                    fontSize: "0.92rem",
                    color: "rgba(240,237,232,0.45)",
                    lineHeight: 1.8,
                    maxWidth: "44rem",
                  }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
