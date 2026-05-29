function Intro() {
  return (
    <section id="intro">
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: 24,
          alignItems: "start"
        }}>
          <div className="intro__head" style={{ gridColumn: "1 / span 5" }}>
            <div className="eyebrow eyebrow-rule" style={{ marginBottom: 24 }}>
              Το φροντιστήριο
            </div>
            <h2 className="h-2" style={{
              fontSize: "clamp(32px, 4.4vw, 56px)",
              lineHeight: 1.1,
              letterSpacing: "-0.015em"
            }}>
              Σοβαρή προετοιμασία,<br />
              <span style={{ color: "var(--ink-500)" }}>χωρίς θόρυβο.</span>
            </h2>
          </div>

          <div className="intro__body" style={{ gridColumn: "7 / span 6" }}>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: 18,
              lineHeight: 1.75,
              color: "var(--ink-900)",
              margin: 0,
              marginTop: 24,
              maxWidth: "65ch"
            }}>
              Στο φροντιστήριό μας λειτουργούν ολιγομελή τμήματα για όλες
              τις τάξεις του Γενικού Λυκείου, τη Γ′ Γυμνασίου, καθώς και
              τμήματα αποφοίτων που προετοιμάζονται να δώσουν ξανά τις
              Πανελλαδικές.
            </p>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: 18,
              lineHeight: 1.75,
              color: "var(--ink-500)",
              margin: 0,
              marginTop: 24,
              maxWidth: "65ch"
            }}>
              Η δουλειά μας στηρίζεται σε δύο πράγματα που δεν αλλάζουν
              με τις μόδες: σταθερή μεθοδολογία και προσωπική επαφή με
              κάθε μαθητή.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Intro = Intro;
