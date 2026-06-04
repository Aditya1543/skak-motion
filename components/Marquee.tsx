export default function Marquee() {
  const chunk = "Remotion  ·  SaaS Demos  ·  Animated Explainers  ·  Flowcharts  ·  Product Walkthroughs  ·  ";
  const text = chunk.repeat(8);

  return (
    <div style={{
      overflow: "hidden",
      background: "#0b0b0b",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
      padding: "1.25rem 0",
    }}>
      <div className="animate-marquee" style={{ display: "flex", whiteSpace: "nowrap" }}>
        <span style={{
          fontFamily: "var(--font-display), sans-serif",
          fontWeight: 600,
          fontSize: "0.75rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(240,237,232,0.18)",
        }}>
          {text}
        </span>
        <span aria-hidden style={{
          fontFamily: "var(--font-display), sans-serif",
          fontWeight: 600,
          fontSize: "0.75rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(240,237,232,0.18)",
        }}>
          {text}
        </span>
      </div>
    </div>
  );
}
