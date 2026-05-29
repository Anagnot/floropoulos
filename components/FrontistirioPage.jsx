function FrontistirioPage() {
  return (
    <React.Fragment>
      <PageHero
        eyebrow="Το φροντιστήριο"
        title={<React.Fragment>Σοβαρή προετοιμασία,<br /><span style={{ color: "var(--ink-500)" }}>χωρίς θόρυβο.</span></React.Fragment>}
        intro="Στο φροντιστήριό μας λειτουργούν ολιγομελή τμήματα για όλες τις τάξεις του Γενικού Λυκείου, τη Γ′ Γυμνασίου, καθώς και τμήματα αποφοίτων που προετοιμάζονται να δώσουν ξανά τις Πανελλαδικές."
        image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1800&q=85"
        imageAlt="Σημειώσεις μαθηματικών και τύποι"
      />

      <section style={{ paddingTop: "clamp(56px, 8vw, 112px)", paddingBottom: "clamp(56px, 8vw, 112px)" }}>
        <div className="container">
          <div className="intro-detail-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: 24,
            alignItems: "start"
          }}>
            <div className="intro-detail-head" style={{ gridColumn: "1 / span 5" }}>
              <div className="eyebrow eyebrow-rule" style={{ marginBottom: 24 }}>Η ταυτότητά μας</div>
              <h2 className="h-2" style={{
                fontSize: "clamp(28px, 3.6vw, 44px)",
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
                fontWeight: 600
              }}>
                Δύο πράγματα που<br />
                <span style={{ fontStyle: "italic" }}>δεν αλλάζουν.</span>
              </h2>
            </div>

            <div className="intro-detail-body" style={{ gridColumn: "7 / span 6" }}>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: 18,
                lineHeight: 1.75,
                color: "var(--ink-900)",
                margin: 0,
                maxWidth: "60ch"
              }}>
                Η δουλειά μας στηρίζεται σε δύο πράγματα που δεν αλλάζουν με
                τις μόδες: <strong style={{ fontWeight: 600 }}>σταθερή μεθοδολογία</strong> και
                {" "}<strong style={{ fontWeight: 600 }}>προσωπική επαφή</strong> με κάθε μαθητή.
              </p>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: 18,
                lineHeight: 1.75,
                color: "var(--ink-500)",
                margin: 0,
                marginTop: 24,
                maxWidth: "60ch"
              }}>
                Από το 1985 προετοιμάζουμε μαθητές για τις Πανελλαδικές με
                ιστορική δύναμη στις θετικές επιστήμες — Μαθηματικά, Φυσική,
                Χημεία, Βιολογία — και με την ίδια σοβαρότητα τα μαθήματα
                προσανατολισμού Οικονομίας και Πληροφορικής, και τη
                Νεοελληνική Γλώσσα.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyUs />

      <section style={{
        background: "var(--paper-2)",
        paddingTop: "clamp(56px, 8vw, 112px)",
        paddingBottom: "clamp(56px, 8vw, 112px)"
      }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="h-2" style={{
            fontSize: "clamp(28px, 3.6vw, 44px)",
            lineHeight: 1.2,
            fontWeight: 600,
            marginBottom: 24,
            maxWidth: "24ch",
            marginLeft: "auto",
            marginRight: "auto"
          }}>
            Δείτε τη μέθοδο διδασκαλίας μας.
          </h2>
          <div style={{ display: "inline-flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 16 }}>
            <a href="#/methodos" className="btn btn--primary">Δείτε τη μέθοδο</a>
            <a href="#/epikoinonia" className="btn btn--ghost">Κλείστε ραντεβού</a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

window.FrontistirioPage = FrontistirioPage;
