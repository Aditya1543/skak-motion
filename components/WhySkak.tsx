"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RefreshCw, Zap, CreditCard } from "lucide-react";

const cards = [
  {
    icon: RefreshCw,
    title: "Multiple iterations",
    description:
      "We refine until it's exactly right. Revisions and tweaks are included — no extra charges on feedback rounds.",
  },
  {
    icon: Zap,
    title: "Fast delivery",
    description:
      "Most videos delivered within 3–5 business days. Need it faster? We can usually accommodate rush timelines.",
  },
  {
    icon: CreditCard,
    title: "Pay per video",
    description:
      "No retainers, no long-term contracts. Pay per project and own everything we make for you.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

export default function WhySkak() {
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-10% 0px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-15% 0px" });

  return (
    <section className="section">
      <div className="wrap">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut" as const }}
          className="section-head"
        >
          <span className="overline">Why us</span>
          <h2 className="h2">Why work with us</h2>
        </motion.div>

        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {cards.map(card => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                style={{
                  padding: "2.25rem",
                  borderRadius: "1rem",
                  background: "#0d0d0d",
                  border: "1px solid rgba(255,255,255,0.05)",
                  cursor: "default",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(125,211,252,0.2)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)")}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: "0.75rem",
                  background: "rgba(125,211,252,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1.5rem",
                }}>
                  <Icon style={{ width: 20, height: 20, color: "rgba(125,211,252,0.7)" }} strokeWidth={1.5} />
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "#f0ede8",
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.01em",
                }}>
                  {card.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontWeight: 300,
                  fontSize: "0.875rem",
                  color: "rgba(240,237,232,0.4)",
                  lineHeight: 1.85,
                }}>
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
