"use client";

import { useId, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const PATH = "M400 0 C 400 70, 150 58, 150 120 C 150 182, 400 170, 400 240";

export default function FlowConnector({ flip = false }: { flip?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const gradId = `fc-grad-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 92%", "end 32%"],
  });
  const pathLength = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const midDot = useTransform(scrollYProgress, [0.42, 0.55], [0, 1]);
  const endDot = useTransform(scrollYProgress, [0.82, 0.97], [0, 1]);

  return (
    <div ref={ref} aria-hidden style={{ overflow: "hidden" }}>
      <svg
        viewBox="0 0 800 240"
        width="100%"
        height="220"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        style={{ display: "block", margin: "0 auto", transform: flip ? "scaleX(-1)" : undefined }}
      >
        <defs>
          <linearGradient id={gradId} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="240">
            <stop offset="0" stopColor="rgba(125,211,252,0)" />
            <stop offset="0.5" stopColor="#7dd3fc" />
            <stop offset="1" stopColor="rgba(125,211,252,0.25)" />
          </linearGradient>
        </defs>

        {/* Faint flowing dashed track */}
        <path
          d={PATH}
          stroke="rgba(125,211,252,0.12)"
          strokeWidth="2"
          strokeDasharray="3 10"
          className="flow-dash"
        />

        {/* Scroll-drawn line */}
        <motion.path
          d={PATH}
          stroke={`url(#${gradId})`}
          strokeWidth="2"
          strokeLinecap="round"
          style={{ pathLength }}
        />

        <motion.circle cx="150" cy="120" r="5" fill="#7dd3fc" style={{ opacity: midDot }} />
        <motion.circle cx="150" cy="120" r="10" stroke="rgba(125,211,252,0.35)" style={{ opacity: midDot }} />
        <motion.circle cx="400" cy="234" r="4" fill="#7dd3fc" style={{ opacity: endDot }} />
      </svg>
    </div>
  );
}
