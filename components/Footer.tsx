export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "2.5rem 0" }}>
      <div
        className="wrap"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}
      >
        <p style={{
          fontFamily: "var(--font-display), sans-serif",
          fontWeight: 700,
          fontSize: "0.95rem",
          color: "rgba(240,237,232,0.5)",
        }}>
          SKAK<span style={{ color: "#7dd3fc" }}>Motion</span>{" "}
          <span style={{
            fontFamily: "var(--font-body), sans-serif",
            fontWeight: 300,
            fontSize: "0.8rem",
            color: "rgba(240,237,232,0.2)",
          }}>
            © 2025
          </span>
        </p>
        <p style={{
          fontFamily: "var(--font-body), sans-serif",
          fontWeight: 300,
          fontSize: "0.8rem",
          color: "rgba(240,237,232,0.25)",
        }}>
          Crafted frame by frame in Hyderabad, India
        </p>
      </div>
    </footer>
  );
}
