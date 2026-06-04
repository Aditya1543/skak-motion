"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s, border-color 0.3s",
        background: scrolled ? "rgba(8,8,8,0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div
        className="wrap"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "4.5rem" }}
      >
        <a
          href="#"
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontWeight: 700,
            fontSize: "1.2rem",
            letterSpacing: "-0.01em",
            color: "#f0ede8",
            textDecoration: "none",
          }}
        >
          SKAK<span style={{ color: "#7dd3fc" }}>Motion</span>
        </a>

        <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }} className="nav-links">
          {[
            { label: "Work", href: "#work" },
            { label: "How it works", href: "#how-it-works" },
            { label: "Pricing", href: "#pricing" },
          ].map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.9rem",
                  color: "rgba(240,237,232,0.55)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#f0ede8")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,237,232,0.55)")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#pricing" className="btn-primary" style={{ fontSize: "0.875rem", padding: "0.65rem 1.5rem" }}>
          Get in touch
        </a>
      </div>
    </motion.nav>
  );
}
