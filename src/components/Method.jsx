import React from 'react';
import SectionHead from './SectionHead.jsx';

function MethodCard({ n, title, body }) {
  return (
    <article className="method-card" style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      paddingTop: 32,
      borderTop: '1px solid var(--ink-900)'
    }}>
      <div style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 36,
        lineHeight: 1,
        color: 'var(--accent)',
        fontWeight: 500,
        fontVariantNumeric: 'lining-nums tabular-nums',
        letterSpacing: '-0.01em'
      }}>
        {n}
      </div>
      <h3 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 26,
        lineHeight: 1.2,
        letterSpacing: '-0.01em',
        fontWeight: 500,
        color: 'var(--ink-900)',
        margin: 0
      }}>
        {title}
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

export default function Method({ hideHeading = false } = {}) {
  const principles = [
    {
      n: '01',
      title: 'Θεωρία με βάθος',
      body: 'Δεν μαθαίνουμε τύπους — εξηγούμε γιατί ισχύουν. Όταν ο μαθητής καταλάβει την ουσία, η άσκηση γίνεται συνέπεια, όχι αγκάθι.'
    },
    {
      n: '02',
      title: 'Άσκηση με στόχο',
      body: 'Επιλεγμένες ασκήσεις, διαβαθμισμένης δυσκολίας, που χτίζουν σταδιακά την ικανότητα του μαθητή να αντιμετωπίζει οποιοδήποτε θέμα — και τα δυσκολότερα των Πανελλαδικών.'
    },
    {
      n: '03',
      title: 'Διαρκής αξιολόγηση',
      body: 'Συχνά τρίωρα διαγωνίσματα προσομοίωσης σε συνθήκες εξετάσεων. Ο μαθητής γνωρίζει πού βρίσκεται κάθε στιγμή, χωρίς εκπλήξεις τον Ιούνιο.'
    },
    {
      n: '04',
      title: 'Ανοιχτή επικοινωνία',
      body: 'Τακτική επαφή με τους γονείς. Όχι μόνο για βαθμούς — για το πραγματικό πρόσωπο της προετοιμασίας.'
    }
  ];

  return (
    <section id="method">
      <div className="container">
        {!hideHeading && (
          <SectionHead
            eyebrow="Η μέθοδος μας"
            title={<>Πώς δουλεύουμε.</>}
            intro="Τέσσερις αρχές που διαμορφώνουν κάθε ώρα διδασκαλίας."
          />
        )}
        <div className="method-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 32
        }}>
          {principles.map(p => <MethodCard key={p.n} {...p} />)}
        </div>
      </div>
    </section>
  );
}
