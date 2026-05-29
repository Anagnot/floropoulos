import React from 'react';
import PageHero from '../components/PageHero.jsx';
import Lessons from '../components/Lessons.jsx';
import Extras from '../components/Extras.jsx';

export default function LessonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Τα μαθήματα"
        title={<>Τι <span style={{ fontStyle: 'italic' }}>διδάσκουμε.</span></>}
        intro="Όλα τα μαθήματα διδάσκονται από καθηγητές με αποκλειστική ειδίκευση στο αντικείμενό τους — όχι «γενικών καθηκόντων» εκπαιδευτικοί."
        image="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1800&q=85"
        imageAlt="Πίνακας με μαθηματικούς τύπους"
      />

      <Lessons hideHeading />

      <Extras />

      <section style={{
        background: 'var(--paper-2)',
        paddingTop: 'clamp(56px, 8vw, 112px)',
        paddingBottom: 'clamp(56px, 8vw, 112px)'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="h-2" style={{
            fontSize: 'clamp(28px, 3.6vw, 40px)',
            lineHeight: 1.2,
            fontWeight: 600,
            marginBottom: 24,
            maxWidth: '28ch',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Έχετε ερώτηση για συγκεκριμένο μάθημα;
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 17,
            color: 'var(--ink-500)',
            lineHeight: 1.7,
            maxWidth: '50ch',
            margin: '0 auto 32px'
          }}>
            Ελάτε στο φροντιστήριο για μια κουβέντα. Θα σας πούμε αναλυτικά
            πώς οργανώνεται κάθε μάθημα στο τμήμα του παιδιού σας.
          </p>
          <a href="#/epikoinonia" className="btn btn--primary">Κλείστε ραντεβού γνωριμίας</a>
        </div>
      </section>
    </>
  );
}
