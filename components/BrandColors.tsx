"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Theme {
  name: string;
  tagline: string;
  primary: string;
  secondary: string;
  primarySoft: string;
  secondarySoft: string;
}

const themes: Theme[] = [
  {
    name: "Ocean",
    tagline: "Blue primaries",
    primary: "#38bdf8",
    secondary: "#2563eb",
    primarySoft: "rgba(56,189,248,0.14)",
    secondarySoft: "rgba(37,99,235,0.12)",
  },
  {
    name: "Ember",
    tagline: "Red primaries",
    primary: "#f87171",
    secondary: "#dc2626",
    primarySoft: "rgba(248,113,113,0.14)",
    secondarySoft: "rgba(220,38,38,0.12)",
  },
  {
    name: "Citrus",
    tagline: "Orange × cyan",
    primary: "#fb923c",
    secondary: "#22d3ee",
    primarySoft: "rgba(251,146,60,0.14)",
    secondarySoft: "rgba(34,211,238,0.12)",
  },
];

function FlowScene({ t, delay }: { t: Theme; delay: number }) {
  const loop = (duration: number, extra = 0) => ({
    duration,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay: delay + extra,
  });

  return (
    <svg viewBox="0 0 280 190" width="100%" fill="none" aria-label={`Flowchart in ${t.tagline.toLowerCase()}`}>
      {/* Start pill */}
      <motion.g animate={{ y: [0, -5, 0] }} transition={loop(4.5)}>
        <rect x="24" y="28" width="78" height="34" rx="17" fill={t.primarySoft} stroke={t.primary} strokeWidth="1.5" />
        <motion.rect
          x="42" y="43" width="42" height="4" rx="2"
          animate={{ fill: [t.primary, t.secondary, t.primary] }}
          transition={loop(5)}
        />
      </motion.g>

      {/* Connector: start → diamond */}
      <motion.path
        d="M102 45 C 132 45, 126 95, 152 95"
        stroke={t.primary}
        strokeWidth="1.5"
        strokeLinecap="round"
        animate={{ pathLength: [0, 1, 1], opacity: [0.3, 1, 1] }}
        transition={{ duration: 3.2, times: [0, 0.55, 1], repeat: Infinity, ease: "easeInOut", delay }}
      />

      {/* Decision diamond */}
      <motion.g
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        animate={{ scale: [1, 1.07, 1], rotate: [0, 3, 0] }}
        transition={loop(4, 0.4)}
      >
        <motion.path
          d="M178 65 L208 95 L178 125 L148 95 Z"
          fill={t.secondarySoft}
          strokeWidth="1.5"
          animate={{ stroke: [t.secondary, t.primary, t.secondary] }}
          transition={loop(5, 0.6)}
        />
        <motion.circle
          cx="178" cy="95" r="5"
          animate={{ fill: [t.primary, t.secondary, t.primary] }}
          transition={loop(5, 0.6)}
        />
      </motion.g>

      {/* Connector: diamond → circle */}
      <motion.path
        d="M208 95 C 232 95, 226 48, 240 48"
        stroke={t.secondary}
        strokeWidth="1.5"
        strokeLinecap="round"
        animate={{ pathLength: [0, 1, 1], opacity: [0.3, 1, 1] }}
        transition={{ duration: 3.2, times: [0, 0.55, 1], repeat: Infinity, ease: "easeInOut", delay: delay + 0.8 }}
      />

      {/* Result circle */}
      <motion.g animate={{ y: [0, -4, 0] }} transition={loop(3.6, 0.9)}>
        <motion.circle
          cx="252" cy="48" r="14"
          fill={t.primarySoft}
          strokeWidth="1.5"
          animate={{ stroke: [t.primary, t.secondary, t.primary] }}
          transition={loop(5, 0.9)}
        />
        <path d="M246 48 l4 4 8 -8" stroke={t.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>

      {/* Connector: diamond → end card */}
      <motion.path
        d="M178 125 C 178 152, 110 152, 92 152"
        stroke={t.secondary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 6"
        animate={{ pathLength: [0, 1, 1], opacity: [0.3, 0.8, 0.8] }}
        transition={{ duration: 3.2, times: [0, 0.55, 1], repeat: Infinity, ease: "easeInOut", delay: delay + 1.2 }}
      />

      {/* End card */}
      <motion.g animate={{ y: [0, 4, 0] }} transition={loop(4.2, 1.1)}>
        <rect x="24" y="136" width="64" height="32" rx="8" fill={t.secondarySoft} stroke={t.secondary} strokeWidth="1.5" />
        <motion.rect
          x="36" y="150" width="32" height="4" rx="2"
          animate={{ fill: [t.secondary, t.primary, t.secondary] }}
          transition={loop(5, 1.1)}
        />
      </motion.g>
    </svg>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function BrandColors() {
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-10% 0px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-15% 0px" });

  return (
    <section id="brand" className="section">
      <div className="wrap">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut" as const }}
          className="section-head"
        >
          <span className="overline">Brand-matched</span>
          <h2 className="h2">Icons in your company colors</h2>
          <p style={{
            maxWidth: "34rem",
            margin: "1.5rem auto 0",
            fontFamily: "var(--font-body), sans-serif",
            fontWeight: 300,
            fontSize: "0.95rem",
            color: "rgba(240,237,232,0.45)",
            lineHeight: 1.85,
          }}>
            Send us your palette and every icon, node and arrow gets recolored to
            your primary and secondary colors. Same flow, three different brands:
          </p>
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
          {themes.map((t, i) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              style={{
                padding: "1.75rem",
                borderRadius: "1rem",
                background: "#0d0d0d",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div style={{
                borderRadius: "0.75rem",
                background: "#080808",
                border: "1px solid rgba(255,255,255,0.04)",
                padding: "0.75rem",
                marginBottom: "1.5rem",
              }}>
                <FlowScene t={t} delay={i * 0.5} />
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <p style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#f0ede8",
                    letterSpacing: "-0.01em",
                  }}>
                    {t.name}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontWeight: 300,
                    fontSize: "0.78rem",
                    color: "rgba(240,237,232,0.35)",
                    marginTop: "0.2rem",
                  }}>
                    {t.tagline}
                  </p>
                </div>
                <div style={{ display: "flex", gap: "0.4rem" }}>
                  <span style={{
                    width: 18, height: 18, borderRadius: "50%",
                    background: t.primary,
                    border: "2px solid rgba(255,255,255,0.1)",
                  }} />
                  <span style={{
                    width: 18, height: 18, borderRadius: "50%",
                    background: t.secondary,
                    border: "2px solid rgba(255,255,255,0.1)",
                  }} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
