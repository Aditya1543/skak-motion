"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";

interface DemoItem {
  label: string;
  title: string;
  description: string;
  tags: string[];
  reverse: boolean;
}

const demos: DemoItem[] = [
  {
    label: "Vercel · Deploy flow",
    title: "From commit to live in 30 seconds.",
    description:
      "A cinematic walkthrough of Vercel's deploy pipeline — animated transitions, live metrics, and clean motion typography.",
    tags: ["Screen recording", "Animated", "60s"],
    reverse: false,
  },
  {
    label: "Linear · Issue tracker",
    title: "Project management, reimagined.",
    description:
      "Showcasing Linear's keyboard-first workflow with smooth motion sequences that capture the speed of the product.",
    tags: ["Explainer", "UI Motion", "45s"],
    reverse: true,
  },
  {
    label: "Loom · Async video",
    title: "Record. Share. Done.",
    description:
      "A punchy 30-second demo that shows exactly how Loom replaces meetings — tight editing, snappy cuts.",
    tags: ["Product demo", "Animated", "30s"],
    reverse: false,
  },
];

function VideoPlaceholder() {
  return (
    <div style={{
      width: "100%",
      aspectRatio: "16/9",
      borderRadius: "1rem",
      background: "#0f0f0f",
      border: "1px solid rgba(255,255,255,0.06)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem",
      cursor: "pointer",
      transition: "border-color 0.3s",
    }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(125,211,252,0.2)")}
      onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
    >
      <div style={{
        width: 64, height: 64, borderRadius: "50%",
        border: "1px solid rgba(125,211,252,0.25)",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.3s",
      }}>
        <Play style={{ width: 22, height: 22, color: "rgba(125,211,252,0.7)", fill: "rgba(125,211,252,0.7)", marginLeft: 3 }} />
      </div>
      <p style={{
        fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase",
        color: "rgba(240,237,232,0.2)", fontFamily: "var(--font-body), sans-serif",
      }}>
        Demo coming soon
      </p>
    </div>
  );
}

function DemoRow({ item }: { item: DemoItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const ease = "easeOut" as const;

  return (
    <div ref={ref} style={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "4rem",
    }}>
      {/* Video */}
      <motion.div
        style={{ flex: "1 1 340px", order: item.reverse ? 2 : 1 }}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.75, ease }}
      >
        <VideoPlaceholder />
      </motion.div>

      {/* Text */}
      <motion.div
        style={{ flex: "1 1 340px", order: item.reverse ? 1 : 2 }}
        initial={{ opacity: 0, x: item.reverse ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: item.reverse ? -50 : 50 }}
        transition={{ duration: 0.75, ease, delay: 0.1 }}
      >
        <p style={{
          fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase",
          color: "#7dd3fc", marginBottom: "1rem",
          fontFamily: "var(--font-body), sans-serif",
        }}>
          {item.label}
        </p>
        <h3 style={{
          fontFamily: "var(--font-display), sans-serif",
          fontWeight: 700,
          fontSize: "clamp(1.6rem, 3vw, 2.3rem)",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          color: "#f0ede8",
          marginBottom: "1.25rem",
        }}>
          {item.title}
        </h3>
        <p style={{
          fontFamily: "var(--font-body), sans-serif",
          fontWeight: 300,
          fontSize: "0.95rem",
          color: "rgba(240,237,232,0.45)",
          lineHeight: 1.85,
          marginBottom: "1.75rem",
        }}>
          {item.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {item.tags.map(tag => (
            <span key={tag} style={{
              padding: "0.4rem 0.9rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontFamily: "var(--font-body), sans-serif",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(240,237,232,0.45)",
            }}>
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Work() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-10% 0px" });

  return (
    <section id="work" className="section">
      <div className="wrap">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut" as const }}
          className="section-head"
        >
          <span className="overline">Portfolio</span>
          <h2 className="h2">Selected work</h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8rem" }}>
          {demos.map((item, i) => (
            <DemoRow key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
