import React from 'react';
import SectionHead from './SectionHead.jsx';

function LessonColumn({ heading, intro, items }) {
  return (
    <div className="lesson-col">
      <div className="eyebrow" style={{ marginBottom: 16 }}>{heading}</div>
      {intro && (
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 15,
          lineHeight: 1.7,
          color: 'var(--ink-500)',
          margin: 0,
          marginBottom: 24,
          maxWidth: '36ch'
        }}>
          {intro}
        </p>
      )}
      <ul className="v-list" style={{ borderTop: '1px solid var(--rule)' }}>
        {items.map(it => (
          <li key={it} style={{
            padding: '20px 0',
            fontFamily: 'var(--font-serif)',
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: '-0.005em',
            color: 'var(--ink-900)',
            lineHeight: 1.3
          }}>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Lessons({ hideHeading = false } = {}) {
  return (
    <section id="lessons">
      <div className="container">
        {!hideHeading && (
          <SectionHead
            eyebrow="Τα μαθήματα"
            title="Τι διδάσκουμε."
            intro="Όλα τα μαθήματα διδάσκονται από καθηγητές με αποκλειστική ειδίκευση στο αντικείμενό τους."
          />
        )}

        <div className="lesson-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1px 1fr',
          gap: 56,
          alignItems: 'start'
        }}>
          <LessonColumn
            heading="Θετικές επιστήμες"
            intro="Ο πυρήνας του φροντιστηρίου από το 1985. Διδάσκονται με βάθος θεωρίας και συστηματική άσκηση, από καθηγητές με αποκλειστική ειδίκευση στο αντικείμενό τους."
            items={[
              'Μαθηματικά',
              'Φυσική',
              'Χημεία',
              'Βιολογία'
            ]}
          />
          <div className="lesson-divider" style={{
            width: 1,
            background: 'var(--rule)',
            alignSelf: 'stretch',
            minHeight: 100
          }} />
          <LessonColumn
            heading="Λοιπά μαθήματα"
            intro="Διδάσκονται με την ίδια σοβαρότητα και σταθερότητα — από εκπαιδευτικούς που γνωρίζουν τις απαιτήσεις των Πανελλαδικών στο κάθε αντικείμενο."
            items={[
              'Αρχές Οικονομικής Θεωρίας',
              'Πληροφορική',
              'Νεοελληνική Γλώσσα & Λογοτεχνία'
            ]}
          />
        </div>
      </div>
    </section>
  );
}
