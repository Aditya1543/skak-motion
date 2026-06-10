"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RefreshCw, CalendarClock, CreditCard, Palette } from "lucide-react";

const cards = [
  {
    icon: CalendarClock,
    title: "5-day turnaround",
    description:
      "Brief on Monday, final cut on Friday. A fixed five-day pipeline from first call to delivered video — rush timelines on request.",
  },
  {
    icon: Palette,
    title: "Always on-brand",
    description:
      "Every icon, node and arrow is recolored to your palette before we animate a single frame. Your video looks like your product, not a template.",
  },
  {
    icon: RefreshCw,
    title: "First revision free",
    description:
      "Feedback is part of the plan, not an upsell. Your first full revision round costs nothing, and we keep refining until it's right.",
  },
  {
    icon: CreditCard,
    title: "Per-minute pricing",
    description:
      "No retainers, no contracts, no upfront payment. You pay per finished minute and own everything we make for you — source files included.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
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
          <h2 className="h2">Why teams hand us the hard-to-explain stuff</h2>
        </motion.div>

        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
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
