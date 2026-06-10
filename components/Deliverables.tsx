"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Film, Smartphone, Layers, FileText } from "lucide-react";

const items = [
  {
    icon: Film,
    title: "1080p + 4K masters",
    description: "Crisp exports for your landing page, app store and pitch deck.",
  },
  {
    icon: Smartphone,
    title: "Square & vertical cuts",
    description: "Re-framed versions for LinkedIn, Instagram, Shorts and Reels.",
  },
  {
    icon: Layers,
    title: "Transparent-background version",
    description: "Drop the animation straight over any page or slide background.",
  },
  {
    icon: FileText,
    title: "Script & source on request",
    description: "The storyboard, script and project files are yours to keep.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function Deliverables() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section className="section section-dark">
      <div className="wrap">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="section-head" style={{ marginBottom: "3.5rem" }}>
            <span className="overline">Deliverables</span>
            <h2 className="h2">What lands in your inbox</h2>
          </motion.div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
          }}>
            {items.map(item => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.9rem",
                    padding: "1.75rem",
                    borderRadius: "1rem",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <Icon style={{ width: 20, height: 20, color: "rgba(125,211,252,0.7)" }} strokeWidth={1.5} />
                  <h3 style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "#f0ede8",
                    letterSpacing: "-0.01em",
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontWeight: 300,
                    fontSize: "0.84rem",
                    color: "rgba(240,237,232,0.4)",
                    lineHeight: 1.75,
                  }}>
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
