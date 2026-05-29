function Hero() {
  return (
    <section id="top" style={{
      paddingTop: "clamp(64px, 12vw, 160px)",
      paddingBottom: "clamp(64px, 12vw, 160px)"
    }}>
      <div className="container">
        {/* Eyebrow */}
        <div style={{
          fontFamily: "var(--font-sans)",
          fontSize: 12,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--ink-500)",
          fontWeight: 500,
          marginBottom: "clamp(32px, 5vw, 56px)",
          display: "inline-flex",
          alignItems: "center",
          gap: 16
        }}>
          <span style={{ width: 32, height: 1, background: "var(--ink-900)" }} />
          Καλλιθέα · Από το 1985
        </div>

        {/* Hero heading */}
        <h1 className="h-hero" style={{
          marginBottom: "clamp(28px, 4vw, 40px)",
          maxWidth: "14ch"
        }}>
          Το φροντιστήριο<br />
          των μεγάλων<br />
          <span style={{
            fontStyle: "italic",
            fontWeight: 500
          }}>επιτυχιών.</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: "clamp(17px, 1.6vw, 20px)",
          lineHeight: 1.6,
          color: "var(--ink-500)",
          maxWidth: "60ch",
          margin: 0
        }}>
          Προετοιμασία για το Λύκειο, τις Πανελλαδικές και το Γυμνάσιο.
          Με βαθιά παράδοση στις θετικές επιστήμες και πλήρη κάλυψη
          όλων των μαθημάτων προσανατολισμού.
        </p>

        {/* CTAs */}
        <div style={{
          display: "flex",
          gap: 12,
          marginTop: "clamp(40px, 6vw, 64px)",
          flexWrap: "wrap"
        }}>
          <a href="#contact"
             className="btn btn--primary"
             onClick={(e) => { e.preventDefault(); window.appNavigate?.("contact"); }}>
            Κλείστε ραντεβού γνωριμίας
          </a>
          <a href="#method"
             className="btn btn--ghost"
             onClick={(e) => { e.preventDefault(); window.appNavigate?.("method"); }}>
            Δείτε τη μέθοδο
          </a>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
