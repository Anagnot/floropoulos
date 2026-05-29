function WhyItem({ n, title, body }) {
  return (
    <article className="why-item" style={{
      display: "flex",
      flexDirection: "column",
      gap: 16,
      paddingTop: 32,
      borderTop: "1px solid var(--rule)"
    }}>
      <div style={{
        display: "flex",
        alignItems: "baseline",
        gap: 16
      }}>
        <div style={{
          fontFamily: "var(--font-serif)",
          fontSize: 32,
          lineHeight: 1,
          color: "var(--accent)",
          fontWeight: 500,
          fontVariantNumeric: "lining-nums tabular-nums"
        }}>
          {n}
        </div>
        <h3 style={{
          fontFamily: "var(--font-serif)",
          fontSize: 26,
          lineHeight: 1.2,
          letterSpacing: "-0.01em",
          fontWeight: 500,
          color: "var(--ink-900)",
          margin: 0
        }}>
          {title}
        </h3>
      </div>
      <p style={{
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        lineHeight: 1.75,
        color: "var(--ink-500)",
        margin: 0,
        maxWidth: "42ch"
      }}>
        {body}
      </p>
    </article>
  );
}

function WhyUs() {
  const items = [
    {
      n: "01",
      title: "Ολιγομελή τμήματα",
      body: "Μικρά τμήματα ώστε κανένας μαθητής να μη χάνεται. Ο καθηγητής προλαβαίνει να ακούσει, να εξηγήσει ξανά, να προσαρμοστεί."
    },
    {
      n: "02",
      title: "Έμπειροι καθηγητές",
      body: "Καθηγητές με χρόνια διδασκαλίας και βαθιά γνώση του αντικειμένου τους — όχι «γενικών καθηκόντων» εκπαιδευτικοί."
    },
    {
      n: "03",
      title: "Τρίωρα διαγωνίσματα προσομοίωσης",
      body: "Σε κάθε μάθημα, σε τακτά διαστήματα, σε συνθήκες πραγματικής εξέτασης. Έτσι η αίθουσα των Πανελλαδικών δεν είναι ποτέ άγνωστος τόπος."
    },
    {
      n: "04",
      title: "Επαφή με τους γονείς",
      body: "Συχνή και ουσιαστική ενημέρωση για την πρόοδο. Γιατί η προετοιμασία είναι υπόθεση που αφορά όλη την οικογένεια."
    }
  ];

  return (
    <section id="why">
      <div className="container">
        <SectionHead
          eyebrow="Τι μας ξεχωρίζει"
          title={<React.Fragment>Γιατί να μας <span style={{ color: "var(--ink-500)" }}>επιλέξετε.</span></React.Fragment>}
        />
        <div className="why-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 64,
          rowGap: 56
        }}>
          {items.map(it => <WhyItem key={it.n} {...it} />)}
        </div>
      </div>
    </section>
  );
}

window.WhyUs = WhyUs;
