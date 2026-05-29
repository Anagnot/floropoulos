import React from 'react';
import SectionHead from './SectionHead.jsx';

function ProgramCard({ field, num, kind, body, tag }) {
  const isFeature = !!tag;
  return (
    <article className="program-card" style={{
      position: 'relative',
      paddingTop: 40,
      paddingBottom: 40,
      borderTop: isFeature ? '1px solid var(--ink-900)' : '1px solid var(--rule)',
      borderBottom: '1px solid var(--rule)',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 360
    }}>
      {tag && (
        <div style={{
          position: 'absolute',
          top: -10,
          left: 0,
          background: 'var(--paper)',
          paddingRight: 10,
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          fontWeight: 500
        }}>
          ◆ Η ειδικότητά μας
        </div>
      )}

      <span className="field-num" style={{ fontSize: 84, marginBottom: 16 }} aria-hidden="true">
        {num}<span className="ord">ο</span>
      </span>

      <div className="eyebrow" style={{ marginBottom: 12 }}>{kind}</div>

      <h3 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 28,
        lineHeight: 1.2,
        letterSpacing: '-0.01em',
        fontWeight: 500,
        color: 'var(--ink-900)',
        margin: 0,
        marginBottom: 16
      }}>
        {field}
      </h3>

      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        lineHeight: 1.7,
        color: 'var(--ink-500)',
        margin: 0,
        maxWidth: '32ch'
      }}>
        {body}
      </p>
    </article>
  );
}

export default function Programs({ hideHeading = false } = {}) {
  const programs = [
    {
      num: '2',
      field: 'Θετικών Σπουδών',
      kind: 'Επιστημονικό πεδίο',
      body: 'Μαθηματικά, Φυσική, Χημεία. Το πεδίο που ορίζει την ταυτότητα του φροντιστηρίου εδώ και δεκαετίες — με μαθητές που στοχεύουν Πολυτεχνικές, Μαθηματικά, Φυσικής και άλλες θετικές σχολές.',
      tag: true
    },
    {
      num: '3',
      field: 'Σπουδών Υγείας',
      kind: 'Επιστημονικό πεδίο',
      body: 'Βιολογία, Χημεία, Φυσική. Στοχευμένη προετοιμασία για τις απαιτητικές σχολές υγείας, με τη Βιολογία να διδάσκεται σε βάθος ως το διαφοροποιό μάθημα του πεδίου.'
    },
    {
      num: '4',
      field: 'Σπουδών Οικονομίας & Πληροφορικής',
      kind: 'Επιστημονικό πεδίο',
      body: 'Μαθηματικά, ΑΟΘ, Πληροφορική. Για όσους κοιτούν Οικονομικά, Διοίκηση Επιχειρήσεων, ΟΠΑ, Πειραιά, καθώς και σχολές Πληροφορικής και Μηχανικών Η/Υ.'
    }
  ];

  return (
    <section id="programs" style={{ background: 'var(--paper-2)' }}>
      <div className="container">
        {!hideHeading && (
          <SectionHead
            eyebrow="Ομάδες προσανατολισμού"
            title="Σε τι προετοιμάζουμε."
            intro="Πλήρης κάλυψη και των τριών επιστημονικών πεδίων, με ιδιαίτερη παράδοση στις θετικές επιστήμες."
          />
        )}
        <div className="program-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32
        }}>
          {programs.map(p => <ProgramCard key={p.num} {...p} />)}
        </div>
      </div>
    </section>
  );
}
