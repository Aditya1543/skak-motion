"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const CYAN = "rgba(125,211,252,0.55)";
const CYAN_SOFT = "rgba(125,211,252,0.14)";
const LINE = "rgba(240,237,232,0.3)";
const FILL = "rgba(255,255,255,0.05)";

function FlowchartTile() {
  return (
    <svg viewBox="0 0 220 140" width="100%" fill="none">
      <rect x="12" y="20" width="52" height="26" rx="6" stroke={CYAN} fill={CYAN_SOFT} />
      <path d="M64 33 H82 M78 29 l8 4 -8 4" stroke={LINE} />
      <path d="M114 12 L142 33 L114 54 L86 33 Z" stroke={LINE} fill={FILL} />
      <path d="M142 33 H160 M156 29 l8 4 -8 4" stroke={LINE} />
      <rect x="164" y="20" width="44" height="26" rx="13" stroke={CYAN} fill={CYAN_SOFT} />
      <path d="M114 54 V80 M110 76 l4 8 4 -8" stroke={LINE} />
      <rect x="88" y="84" width="52" height="26" rx="6" stroke={LINE} fill={FILL} />
      <path d="M140 97 H164" stroke={LINE} strokeDasharray="4 5" />
      <circle cx="178" cy="97" r="12" stroke={CYAN} fill={CYAN_SOFT} />
    </svg>
  );
}

function DashboardTile() {
  return (
    <svg viewBox="0 0 220 140" width="100%" fill="none">
      <rect x="10" y="12" width="200" height="116" rx="8" stroke={LINE} />
      <path d="M10 30 H210" stroke={LINE} />
      <circle cx="22" cy="21" r="3" fill={LINE} />
      <circle cx="33" cy="21" r="3" fill={LINE} />
      <circle cx="44" cy="21" r="3" fill={LINE} />
      <path d="M58 30 V128" stroke={LINE} />
      <rect x="20" y="42" width="28" height="5" rx="2.5" fill={CYAN} opacity="0.6" />
      <rect x="20" y="56" width="22" height="5" rx="2.5" fill={LINE} />
      <rect x="20" y="70" width="26" height="5" rx="2.5" fill={LINE} />
      <rect x="70" y="44" width="92" height="8" rx="4" fill={CYAN_SOFT} stroke={CYAN} />
      <rect x="70" y="60" width="64" height="8" rx="4" fill={FILL} stroke={LINE} />
      <rect x="70" y="76" width="112" height="8" rx="4" fill={FILL} stroke={LINE} />
      <path d="M70 116 L94 100 L116 108 L142 90 L168 98 L196 84" stroke={CYAN} />
    </svg>
  );
}

function KanbanTile() {
  return (
    <svg viewBox="0 0 220 140" width="100%" fill="none">
      {[14, 81, 148].map((x, col) => (
        <g key={x}>
          <rect x={x} y="16" width="58" height="108" rx="8" stroke={LINE} />
          <rect x={x + 8} y="24" width="26" height="5" rx="2.5" fill={LINE} />
          {[0, 1, 2].slice(0, 3 - col).map(i => (
            <rect
              key={i}
              x={x + 8}
              y={38 + i * 28}
              width="42"
              height="20"
              rx="5"
              stroke={col === 1 && i === 0 ? CYAN : LINE}
              fill={col === 1 && i === 0 ? CYAN_SOFT : FILL}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}

function ChartTile() {
  return (
    <svg viewBox="0 0 220 140" width="100%" fill="none">
      <path d="M22 16 V114 H204" stroke={LINE} />
      <path d="M22 86 H204 M22 56 H204" stroke={LINE} strokeDasharray="3 6" opacity="0.5" />
      <path d="M22 102 L52 72 L82 86 L112 50 L142 62 L172 32 L204 40" stroke={CYAN} strokeWidth="1.5" />
      <circle cx="112" cy="50" r="4" fill={CYAN} />
      <circle cx="172" cy="32" r="4" fill={CYAN} />
      <path d="M22 102 L52 72 L82 86 L112 50 L142 62 L172 32 L204 40 V114 H22 Z" fill={CYAN_SOFT} stroke="none" />
    </svg>
  );
}

function TerminalTile() {
  return (
    <svg viewBox="0 0 220 140" width="100%" fill="none">
      <rect x="10" y="14" width="200" height="112" rx="8" stroke={LINE} />
      <circle cx="24" cy="26" r="3" fill={LINE} />
      <circle cx="35" cy="26" r="3" fill={LINE} />
      <path d="M24 46 l8 5 -8 5" stroke={CYAN} />
      <rect x="40" y="47" width="74" height="5" rx="2.5" fill={LINE} />
      <rect x="24" y="64" width="118" height="5" rx="2.5" fill={FILL} stroke={LINE} />
      <rect x="24" y="78" width="88" height="5" rx="2.5" fill={FILL} stroke={LINE} />
      <path d="M24 96 l8 5 -8 5" stroke={CYAN} />
      <rect x="40" y="97" width="48" height="5" rx="2.5" fill={CYAN} opacity="0.55" />
      <rect x="94" y="97" width="8" height="8" fill={CYAN} opacity="0.8" />
    </svg>
  );
}

function VideoTile() {
  return (
    <svg viewBox="0 0 220 140" width="100%" fill="none">
      <rect x="10" y="14" width="200" height="112" rx="10" stroke={LINE} />
      <circle cx="110" cy="62" r="20" stroke={CYAN} fill={CYAN_SOFT} />
      <path d="M104 52 l18 10 -18 10 Z" fill={CYAN} />
      <rect x="24" y="106" width="172" height="4" rx="2" fill={FILL} stroke={LINE} />
      <rect x="24" y="106" width="72" height="4" rx="2" fill={CYAN} opacity="0.7" />
      <circle cx="96" cy="108" r="4" fill={CYAN} />
    </svg>
  );
}

function NodeGraphTile() {
  return (
    <svg viewBox="0 0 220 140" width="100%" fill="none">
      <path d="M52 42 L104 26 M116 28 L172 46 M48 52 L66 92 M80 98 L140 102 M152 98 L172 56 M62 44 L142 96" stroke={LINE} strokeDasharray="4 5" />
      <circle cx="44" cy="44" r="13" stroke={CYAN} fill={CYAN_SOFT} />
      <circle cx="110" cy="24" r="11" stroke={LINE} fill={FILL} />
      <circle cx="178" cy="48" r="12" stroke={LINE} fill={FILL} />
      <circle cx="70" cy="100" r="12" stroke={LINE} fill={FILL} />
      <circle cx="150" cy="102" r="13" stroke={CYAN} fill={CYAN_SOFT} />
      <circle cx="44" cy="44" r="4" fill={CYAN} />
      <circle cx="150" cy="102" r="4" fill={CYAN} />
    </svg>
  );
}

function FunnelTile() {
  return (
    <svg viewBox="0 0 220 140" width="100%" fill="none">
      <path d="M30 22 H190 L160 54 H60 Z" stroke={LINE} fill={FILL} />
      <path d="M62 62 H158 L136 90 H84 Z" stroke={LINE} fill={FILL} />
      <path d="M86 98 H134 L120 122 H100 Z" stroke={CYAN} fill={CYAN_SOFT} />
      <rect x="92" y="32" width="36" height="5" rx="2.5" fill={LINE} />
      <rect x="96" y="70" width="28" height="5" rx="2.5" fill={LINE} />
    </svg>
  );
}

const tiles = [
  FlowchartTile,
  DashboardTile,
  ChartTile,
  KanbanTile,
  VideoTile,
  TerminalTile,
  NodeGraphTile,
  FunnelTile,
];

function Row({ reverse, duration, shift }: { reverse?: boolean; duration: number; shift: number }) {
  const seq = [...tiles.slice(shift), ...tiles.slice(0, shift)];
  const half = (key: number) => (
    <div key={key} style={{ display: "flex", gap: "1.25rem", paddingRight: "1.25rem" }}>
      {seq.map((Tile, i) => (
        <div key={i} className="hero-tile">
          <Tile />
        </div>
      ))}
    </div>
  );
  return (
    <div
      className="hero-row"
      style={{
        display: "flex",
        width: "max-content",
        animation: `${reverse ? "hero-row-right" : "hero-row-left"} ${duration}s linear infinite`,
      }}
    >
      {half(0)}
      {half(1)}
    </div>
  );
}

export default function HeroBackdrop() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 180]);

  return (
    <div aria-hidden style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      <motion.div
        style={{
          position: "absolute",
          inset: "-14%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1.5rem",
          transform: "rotate(-4deg)",
          filter: "blur(3.5px)",
          opacity: 0.65,
          y,
        }}
      >
        <Row duration={74} shift={0} />
        <Row duration={56} reverse shift={3} />
        <Row duration={88} shift={5} />
        <Row duration={64} reverse shift={2} />
      </motion.div>

      {/* Legibility overlays */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 72% 56% at 50% 44%, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.45) 58%, rgba(8,8,8,0.62) 100%)",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, rgba(8,8,8,0.92), transparent 28%, transparent 68%, #080808 100%)",
      }} />
    </div>
  );
}
