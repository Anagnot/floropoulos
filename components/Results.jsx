function Results() {
  return (
    <section id="results" style={{ background: "var(--paper-2)" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: 24,
          alignItems: "start"
        }}>
          <div className="results__head" style={{ gridColumn: "1 / span 5" }}>
            <div className="eyebrow eyebrow-rule" style={{ marginBottom: 24 }}>
              Οι επιτυχίες μας
            </div>
            <h2 className="h-2" style={{
              fontSize: "clamp(32px, 4.4vw, 56px)",
              lineHeight: 1.1,
              letterSpacing: "-0.015em"
            }}>
              Δεκαετίες<br />
              εισαγωγών σε<br />
              <span style={{ fontStyle: "italic" }}>δημόσιες σχολές.</span>
            </h2>
          </div>

          <div className="results__body" style={{ gridColumn: "7 / span 6" }}>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: 18,
              lineHeight: 1.75,
              color: "var(--ink-900)",
              margin: 0,
              marginTop: 24,
              maxWidth: "55ch"
            }}>
              Στα χρόνια λειτουργίας του φροντιστηρίου, εκατοντάδες μαθητές
              μας έχουν περάσει σε πανεπιστημιακές σχολές της επιλογής τους
              — με ιδιαίτερη παρουσία σε Πολυτεχνικές, Ιατρικές και Σχολές
              Θετικών Επιστημών.
            </p>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: 18,
              lineHeight: 1.75,
              color: "var(--ink-500)",
              margin: 0,
              marginTop: 24,
              maxWidth: "55ch"
            }}>
              Δεν μετράμε ονόματα· μετράμε διαδρομές μαθητών που μπήκαν
              στο φροντιστήριό μας στη Γ′ Γυμνασίου και βγήκαν φοιτητές.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Results = Results;
