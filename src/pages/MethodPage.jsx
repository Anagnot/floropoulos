import React from 'react';
import PageHero from '../components/PageHero.jsx';
import Method from '../components/Method.jsx';

export default function MethodPage() {
  return (
    <>
      <PageHero
        eyebrow="Η μέθοδος μας"
        title={<>Πώς <span style={{ fontStyle: 'italic' }}>δουλεύουμε.</span></>}
        intro="Τέσσερις αρχές που διαμορφώνουν κάθε ώρα διδασκαλίας. Αυτό δεν αλλάζει με τις μόδες."
        image="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1800&q=85"
        imageAlt="Πίνακας με μαθηματικούς τύπους"
      />

      <Method hideHeading />

      <section style={{
        background: 'var(--paper-2)',
        paddingTop: 'clamp(56px, 8vw, 112px)',
        paddingBottom: 'clamp(56px, 8vw, 112px)'
      }}>
        <div className="container">
          <div className="method-deepen" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 24,
            alignItems: 'start'
          }}>
            <div style={{ gridColumn: '1 / span 5' }} className="method-deepen-head">
              <div className="eyebrow eyebrow-rule" style={{ marginBottom: 24 }}>Πέρα από τη θεωρία</div>
              <h2 className="h-2" style={{
                fontSize: 'clamp(28px, 3.6vw, 44px)',
                lineHeight: 1.15,
                fontWeight: 600,
                letterSpacing: '-0.015em'
              }}>
                Καθημερινή πράξη,<br />
                <span style={{ fontStyle: 'italic' }}>όχι υποσχέσεις.</span>
              </h2>
            </div>
            <div style={{ gridColumn: '7 / span 6' }} className="method-deepen-body">
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 18,
                lineHeight: 1.75,
                color: 'var(--ink-900)',
                margin: 0,
                maxWidth: '60ch'
              }}>
                Κάθε εβδομάδα ακολουθεί τον ίδιο ρυθμό. Νέα ύλη, στοχευμένη
                άσκηση, τακτικό διαγώνισμα, ανατροφοδότηση. Δεν υπάρχει
                «έκτακτη» οργάνωση πριν τις εξετάσεις — γιατί η οργάνωση
                υπάρχει από την πρώτη μέρα.
              </p>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 18,
                lineHeight: 1.75,
                color: 'var(--ink-500)',
                margin: 0,
                marginTop: 24,
                maxWidth: '60ch'
              }}>
                Ο μαθητής δεν χρειάζεται να εικάζει πού βρίσκεται. Τα τρίωρα
                διαγωνίσματα προσομοίωσης δίνουν αξιόπιστη εικόνα κάθε στιγμή
                της χρονιάς.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 'clamp(56px, 8vw, 112px)', paddingBottom: 'clamp(56px, 8vw, 112px)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="h-2" style={{
            fontSize: 'clamp(28px, 3.6vw, 40px)',
            lineHeight: 1.2,
            fontWeight: 600,
            marginBottom: 24,
            maxWidth: '26ch',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Θέλετε να δούμε μαζί την προετοιμασία του παιδιού σας;
          </h2>
          <div style={{ display: 'inline-flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginTop: 16 }}>
            <a href="#/epikoinonia" className="btn btn--primary">Κλείστε ραντεβού γνωριμίας</a>
            <a href="#/tmimata" className="btn btn--ghost">Δείτε τα τμήματα</a>
          </div>
        </div>
      </section>
    </>
  );
}
