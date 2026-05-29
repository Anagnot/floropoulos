/* Section heading block — shared layout for eyebrow + h2 + subintro */
function SectionHead({ eyebrow, title, intro, narrow = false }) {
  return (
    <div className="section-head" style={{
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gap: 24,
      marginBottom: "clamp(48px, 7vw, 80px)"
    }}>
      <div className="section-head__title" style={{ gridColumn: "1 / span 6" }}>
        <div className="eyebrow eyebrow-rule" style={{ marginBottom: 24 }}>{eyebrow}</div>
        <h2 className="h-2" style={{
          fontSize: "clamp(32px, 4.4vw, 56px)",
          lineHeight: 1.1,
          letterSpacing: "-0.015em"
        }}>{title}</h2>
      </div>
      {intro && (
        <div className="section-head__intro" style={{ gridColumn: narrow ? "8 / span 5" : "7 / span 5" }}>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 17,
            lineHeight: 1.7,
            color: "var(--ink-500)",
            margin: 0,
            marginTop: 32,
            maxWidth: "48ch"
          }}>{intro}</p>
        </div>
      )}
    </div>
  );
}

window.SectionHead = SectionHead;
