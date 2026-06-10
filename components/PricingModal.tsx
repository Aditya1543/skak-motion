"use client";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export const PRICING_EVENT = "skak:open-pricing";

export function openPricing() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(PRICING_EVENT));
  }
}

interface Row {
  service: string;
  detail: string;
  price: string;
}

const coreRows: Row[] = [
  {
    service: "Screen-recorded product demo",
    detail: "Your footage, cleaned up with motion graphics",
    price: "from $150 / min*",
  },
  {
    service: "Flowchart explainer",
    detail: "Animated decision trees, processes & logic",
    price: "from $250 / min*",
  },
  {
    service: "From-scratch animation",
    detail: "Fully animated, no recording needed",
    price: "from $350 / min*",
  },
];

const addonRows: Row[] = [
  {
    service: "Custom brand-matched icon set",
    detail: "Recolored to your exact palette",
    price: "from $60*",
  },
  {
    service: "Logo animation",
    detail: "An animated intro or outro sting",
    price: "from $90*",
  },
  {
    service: "Voiceover",
    detail: "AI voice included free · human voice quoted",
    price: "from $30*",
  },
  {
    service: "Rush delivery",
    detail: "Finished in under 5 days",
    price: "+30%*",
  },
];

const notes = [
  "Priced per finished minute — the length of the final video, not hours worked.",
  "Minimum project: $150.",
  "Your first revision round is free; further rounds are quoted.",
  "You own the final video; script and source files available on request.",
  "All figures in USD.",
];

function Table({ title, rows, accent }: { title: string; rows: Row[]; accent?: boolean }) {
  return (
    <div style={{ marginBottom: "1.75rem" }}>
      <p style={{
        fontFamily: "var(--font-body), sans-serif",
        fontSize: "0.66rem",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: accent ? "#7dd3fc" : "rgba(240,237,232,0.35)",
        marginBottom: "0.9rem",
      }}>
        {title}
      </p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {rows.map((r, i) => (
          <div key={r.service} style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: "1.5rem",
            padding: "0.85rem 0",
            borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.05)",
          }}>
            <div>
              <p style={{
                fontFamily: "var(--font-display), sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
                color: "#f0ede8",
                letterSpacing: "-0.01em",
              }}>
                {r.service}
              </p>
              <p style={{
                fontFamily: "var(--font-body), sans-serif",
                fontWeight: 300,
                fontSize: "0.8rem",
                color: "rgba(240,237,232,0.4)",
                marginTop: "0.2rem",
              }}>
                {r.detail}
              </p>
            </div>
            <span style={{
              flexShrink: 0,
              fontFamily: "var(--font-display), sans-serif",
              fontWeight: 700,
              fontSize: "0.95rem",
              color: "#7dd3fc",
              whiteSpace: "nowrap",
            }}>
              {r.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PricingModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(PRICING_EVENT, handler);
    return () => window.removeEventListener(PRICING_EVENT, handler);
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal forceMount>
        <AnimatePresence>
          {open && (
            <>
              <Dialog.Overlay asChild forceMount>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 100,
                    background: "rgba(4,4,4,0.7)",
                    backdropFilter: "blur(6px)",
                  }}
                />
              </Dialog.Overlay>

              <Dialog.Content asChild forceMount aria-describedby="pricing-desc">
                <div
                  style={{
                    position: "fixed",
                    zIndex: 101,
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1.5rem",
                    pointerEvents: "none",
                  }}
                >
                <motion.div
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 16, scale: 0.97 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  style={{
                    pointerEvents: "auto",
                    width: "100%",
                    maxWidth: "40rem",
                    maxHeight: "calc(100vh - 3rem)",
                    overflowY: "auto",
                    borderRadius: "1.25rem",
                    background: "#0c0c0c",
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: "2.25rem",
                    boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
                  }}
                >
                  {/* Header */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", marginBottom: "1.5rem" }}>
                    <div>
                      <span className="overline" style={{ marginBottom: "0.6rem" }}>Estimated pricing</span>
                      <Dialog.Title asChild>
                        <h2 style={{
                          fontFamily: "var(--font-display), sans-serif",
                          fontWeight: 700,
                          fontSize: "1.7rem",
                          color: "#f0ede8",
                          letterSpacing: "-0.02em",
                          lineHeight: 1.1,
                        }}>
                          What a video costs
                        </h2>
                      </Dialog.Title>
                    </div>
                    <Dialog.Close asChild>
                      <button
                        aria-label="Close pricing"
                        style={{
                          flexShrink: 0,
                          width: 36, height: 36,
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          cursor: "pointer",
                          color: "rgba(240,237,232,0.6)",
                        }}
                      >
                        <X style={{ width: 17, height: 17 }} />
                      </button>
                    </Dialog.Close>
                  </div>

                  {/* Estimate banner */}
                  <Dialog.Description asChild>
                    <p id="pricing-desc" style={{
                      fontFamily: "var(--font-body), sans-serif",
                      fontWeight: 300,
                      fontSize: "0.86rem",
                      color: "rgba(240,237,232,0.5)",
                      lineHeight: 1.7,
                      padding: "0.9rem 1.1rem",
                      borderRadius: "0.75rem",
                      background: "rgba(125,211,252,0.06)",
                      border: "1px solid rgba(125,211,252,0.15)",
                      marginBottom: "1.75rem",
                    }}>
                      <span style={{ color: "#7dd3fc" }}>Everything below is an estimate.</span> Nothing
                      is fixed — your final quote depends on length, complexity and revisions, and we
                      confirm it after a short scoping call. Figures marked <span style={{ color: "#7dd3fc" }}>*</span> are starting points.
                    </p>
                  </Dialog.Description>

                  <Table title="Per finished minute" rows={coreRows} accent />
                  <Table title="Add-ons" rows={addonRows} />

                  {/* Notes */}
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.5rem", marginBottom: "1.75rem" }}>
                    {notes.map(note => (
                      <li key={note} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                        <span style={{ color: "#7dd3fc", fontSize: "0.8rem", lineHeight: 1.7 }}>·</span>
                        <span style={{
                          fontFamily: "var(--font-body), sans-serif",
                          fontWeight: 300,
                          fontSize: "0.8rem",
                          color: "rgba(240,237,232,0.4)",
                          lineHeight: 1.7,
                        }}>
                          {note}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Dialog.Close asChild>
                    <a href="#contact" className="btn-primary" style={{ width: "100%" }}>
                      Get an exact quote
                    </a>
                  </Dialog.Close>

                  <p style={{
                    marginTop: "1rem",
                    textAlign: "center",
                    fontFamily: "var(--font-body), sans-serif",
                    fontWeight: 300,
                    fontSize: "0.72rem",
                    color: "rgba(240,237,232,0.28)",
                  }}>
                    A detailed rate-card PDF is on the way.
                  </p>
                </motion.div>
                </div>
              </Dialog.Content>
            </>
          )}
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
