"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="grain"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "0 1.5rem",
      }}
    >
      {/* Orbs */}
      <div style={{
        position: "absolute", top: "33%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 700, height: 700, borderRadius: "50%",
        background: "rgba(125,211,252,0.07)",
        filter: "blur(140px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: 0, right: "25%",
        width: 400, height: 400, borderRadius: "50%",
        background: "rgba(125,211,252,0.04)",
        filter: "blur(100px)", pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: "56rem", width: "100%", textAlign: "center", margin: "0 auto" }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" as const }}
          style={{ marginBottom: "2rem", display: "flex", justifyContent: "center" }}
        >
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.4rem 1rem", borderRadius: "9999px",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.03)",
            fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase",
            color: "rgba(240,237,232,0.4)",
            fontFamily: "var(--font-body), sans-serif",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#7dd3fc", display: "inline-block" }} />
            Remotion-powered motion studio
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" as const }}
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(3.2rem, 9vw, 6.5rem)",
            lineHeight: 0.96,
            letterSpacing: "-0.025em",
            color: "#f0ede8",
          }}
        >
          Your product,
          <br />
          <span style={{ color: "#7dd3fc" }}>animated.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
          style={{
            marginTop: "2rem",
            maxWidth: "36rem",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: "clamp(1rem, 2vw, 1.1rem)",
            fontFamily: "var(--font-body), sans-serif",
            color: "rgba(240,237,232,0.5)",
            lineHeight: 1.8,
          }}
        >
          We turn your screen recordings into cinematic product demos that convert.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" as const }}
          style={{
            marginTop: "3rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <a href="#work" className="btn-ghost">See our work</a>
          <a href="#pricing" className="btn-primary">Get in touch</a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={{
          position: "absolute", bottom: "3rem", left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem",
        }}
      >
        <span style={{
          fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase",
          color: "rgba(240,237,232,0.25)", fontFamily: "var(--font-body), sans-serif",
        }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(240,237,232,0.15), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
