"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";

const CYAN = "#7dd3fc";
const CYAN_LINE = "rgba(125,211,252,0.5)";
const CYAN_SOFT = "rgba(125,211,252,0.12)";
const LINE = "rgba(240,237,232,0.3)";
const FILL = "rgba(255,255,255,0.04)";

/* ── Thumbnail 1 · Flowchart of what SKAK offers ── */
function FlowchartThumb() {
  return (
    <svg aria-hidden viewBox="0 0 640 360" fill="none" preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.55 }}>
      {/* connectors */}
      {["M210 180 C 290 180, 300 90, 380 90",
        "M210 180 H 380",
        "M210 180 C 290 180, 300 270, 380 270"].map((d, i) => (
        <motion.path key={i} d={d} stroke={CYAN_LINE} strokeWidth="1.5" strokeLinecap="round"
          animate={{ pathLength: [0, 1, 1], opacity: [0.2, 1, 1] }}
          transition={{ duration: 3, times: [0, 0.5, 1], repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }} />
      ))}
      {/* root */}
      <motion.g animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <rect x="110" y="152" width="100" height="56" rx="14" fill={CYAN_SOFT} stroke={CYAN} strokeWidth="1.5" />
        <rect x="132" y="174" width="56" height="6" rx="3" fill={CYAN} opacity="0.8" />
      </motion.g>
      {/* branches */}
      {[68, 248].map((cy, i) => (
        <g key={cy}>
          <rect x="380" y={cy} width="150" height="44" rx="10" fill={FILL} stroke={LINE} strokeWidth="1.5" />
          <rect x="400" y={cy + 18} width="80" height="6" rx="3" fill={LINE} />
          <motion.circle cx="392" cy={cy + 22} r="4" fill={CYAN}
            animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.4 }} />
        </g>
      ))}
      <rect x="380" y="158" width="150" height="44" rx="10" fill={CYAN_SOFT} stroke={CYAN} strokeWidth="1.5" />
      <rect x="400" y="176" width="92" height="6" rx="3" fill={CYAN} opacity="0.7" />
    </svg>
  );
}

/* ── Thumbnail 2 · SaaS invoicing demo ── */
function InvoiceThumb() {
  return (
    <svg aria-hidden viewBox="0 0 640 360" fill="none" preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.6 }}>
      {/* window */}
      <rect x="150" y="48" width="340" height="264" rx="16" fill="#0c0e10" stroke={LINE} strokeWidth="1.5" />
      <path d="M150 88 H490" stroke={LINE} strokeWidth="1.5" />
      <circle cx="172" cy="68" r="4" fill={LINE} /><circle cx="186" cy="68" r="4" fill={LINE} /><circle cx="200" cy="68" r="4" fill={LINE} />
      <rect x="330" y="64" width="62" height="8" rx="4" fill={CYAN} opacity="0.6" />
      {/* invoice title + rows */}
      <rect x="178" y="110" width="84" height="9" rx="4.5" fill={CYAN} opacity="0.8" />
      {[150, 178, 206].map((y, i) => (
        <g key={y}>
          <rect x="178" y={y} width="150" height="7" rx="3.5" fill={LINE} opacity={0.7 - i * 0.12} />
          <rect x="392" y={y} width="44" height="7" rx="3.5" fill={LINE} opacity={0.7 - i * 0.12} />
        </g>
      ))}
      <path d="M178 234 H462" stroke={LINE} strokeWidth="1" strokeDasharray="3 5" />
      <rect x="178" y="250" width="60" height="9" rx="4.5" fill={LINE} />
      <rect x="402" y="250" width="60" height="9" rx="4.5" fill={CYAN} opacity="0.85" />
      {/* Send → Paid button */}
      <motion.g>
        <motion.rect x="350" y="276" width="112" height="26" rx="13" fill={CYAN}
          animate={{ opacity: [1, 1, 0.85, 1] }} transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.45, 0.55, 1] }} />
        {/* cursor click */}
        <motion.circle cx="406" cy="289" r="0" fill="#fff"
          animate={{ r: [0, 18, 0], opacity: [0, 0.4, 0] }} transition={{ duration: 3.2, repeat: Infinity, times: [0.35, 0.5, 0.6] }} />
      </motion.g>
      {/* "Paid" toast */}
      <motion.g animate={{ opacity: [0, 0, 1, 1, 0], y: [8, 8, 0, 0, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.55, 0.65, 0.9, 1] }}>
        <rect x="300" y="20" width="120" height="34" rx="10" fill="#0c0e10" stroke={CYAN} strokeWidth="1.5" />
        <circle cx="322" cy="37" r="9" fill={CYAN_SOFT} stroke={CYAN} strokeWidth="1.5" />
        <path d="M318 37 l3 3 5 -6" stroke={CYAN} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="340" y="33" width="62" height="8" rx="4" fill={CYAN} opacity="0.8" />
      </motion.g>
    </svg>
  );
}

/* ── Thumbnail 3 · 5-day process ── */
function ProcessThumb() {
  const xs = [110, 230, 350, 470, 540];
  return (
    <svg aria-hidden viewBox="0 0 640 360" fill="none" preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.6 }}>
      <path d="M90 180 H560" stroke={LINE} strokeWidth="1.5" strokeDasharray="4 7" />
      <motion.path d="M90 180 H560" stroke={CYAN} strokeWidth="2" strokeLinecap="round"
        animate={{ pathLength: [0, 1, 1] }} transition={{ duration: 4, times: [0, 0.85, 1], repeat: Infinity, ease: "easeInOut" }} />
      {xs.slice(0, 5).map((x, i) => (
        <g key={x}>
          <motion.circle cx={x} cy="180" r="14" fill="#0c0e10" stroke={CYAN} strokeWidth="1.5"
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 4, repeat: Infinity, times: [i * 0.17, i * 0.17 + 0.08, i * 0.17 + 0.2], ease: "easeInOut" }}
            style={{ transformBox: "fill-box", transformOrigin: "center" }} />
          <text x={x} y="185" textAnchor="middle" fill={CYAN} fontSize="13" fontFamily="var(--font-display), sans-serif" fontWeight="700">{i + 1}</text>
          <rect x={x - 26} y={i % 2 ? 214 : 136} width="52" height="6" rx="3" fill={LINE} />
        </g>
      ))}
    </svg>
  );
}

interface DemoItem {
  label: string;
  title: string;
  description: string;
  tags: string[];
  reverse: boolean;
  Thumb: () => React.ReactElement;
  /** YouTube video ID — when set, the card becomes a click-to-play embed. */
  videoId?: string;
}

const demos: DemoItem[] = [
  {
    label: "Flowchart explainer · priced per finished minute",
    title: "Everything we make — as a flowchart.",
    description:
      "We mapped our own services into an animated decision tree: nodes light up, paths draw in, the logic unfolds. It's the exact treatment we'd give your onboarding, your pricing rules, or your API.",
    tags: ["Flowchart", "Decision tree", "Brand-matched"],
    reverse: false,
    Thumb: FlowchartThumb,
    videoId: "7Lz1LQB6ybE",
  },
  {
    label: "Product demo · priced per finished minute",
    title: "An invoice, created and sent in 30 seconds.",
    description:
      "A screen-recorded walkthrough of a SaaS invoicing flow — fill it in, hit send, watch it land as paid — cleaned up with motion graphics and snappy cuts. The kind of demo that earns a spot on your landing page.",
    tags: ["Screen recording", "SaaS demo", "Motion graphics"],
    reverse: true,
    Thumb: InvoiceThumb,
    videoId: "7g69GG5CltA",
  },
  {
    label: "From-scratch animation · priced per finished minute",
    title: "How we turn your product into a video in 5 days.",
    description:
      "No screen recording at all — a fully animated explainer of our own 5-day process. Proof that we can bring an idea to life even when there's nothing to record yet, perfect for early or invisible products.",
    tags: ["From-scratch", "Explainer", "No footage needed"],
    reverse: false,
    Thumb: ProcessThumb,
  },
];

function VideoCard({ Thumb, videoId }: { Thumb: () => React.ReactElement; videoId?: string }) {
  const [playing, setPlaying] = useState(false);

  if (videoId && playing) {
    return (
      <div style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16/9",
        borderRadius: "1rem",
        background: "#0f0f0f",
        border: "1px solid rgba(125,211,252,0.2)",
        overflow: "hidden",
      }}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title="SKAK Motion demo video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
        />
      </div>
    );
  }

  return (
    <div
      role={videoId ? "button" : undefined}
      aria-label={videoId ? "Play video" : undefined}
      onClick={videoId ? () => setPlaying(true) : undefined}
      style={{
        position: "relative",
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
        overflow: "hidden",
        transition: "border-color 0.3s",
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(125,211,252,0.2)")}
      onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
    >
      <Thumb />
      <div style={{
        position: "relative",
        width: 64, height: 64, borderRadius: "50%",
        border: `1px solid rgba(125,211,252,${videoId ? 0.5 : 0.25})`,
        background: "rgba(8,8,8,0.55)",
        backdropFilter: "blur(4px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.3s",
      }}>
        <Play style={{ width: 22, height: 22, color: "rgba(125,211,252,0.9)", fill: "rgba(125,211,252,0.9)", marginLeft: 3 }} />
      </div>
      <p style={{
        position: "relative",
        fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase",
        color: "rgba(240,237,232,0.3)", fontFamily: "var(--font-body), sans-serif",
      }}>
        {videoId ? "Watch the video" : "Coming soon"}
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
        <VideoCard Thumb={item.Thumb} videoId={item.videoId} />
      </motion.div>

      {/* Text */}
      <motion.div
        style={{ flex: "1 1 340px", order: item.reverse ? 1 : 2 }}
        initial={{ opacity: 0, x: item.reverse ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: item.reverse ? -50 : 50 }}
        transition={{ duration: 0.75, ease, delay: 0.1 }}
      >
        <p style={{
          fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase",
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
          <span className="overline">What we make</span>
          <h2 className="h2">Three ways we explain a product</h2>
          <p style={{
            maxWidth: "34rem",
            margin: "1.5rem auto 0",
            fontFamily: "var(--font-body), sans-serif",
            fontWeight: 300,
            fontSize: "0.95rem",
            color: "rgba(240,237,232,0.45)",
            lineHeight: 1.85,
          }}>
            One style per service — flowchart, product demo, and pure animation.
            Each is billed per finished minute, so what you see is what you order.
          </p>
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
