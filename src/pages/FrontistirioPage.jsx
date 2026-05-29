import React from 'react';
import PageHero from '../components/PageHero.jsx';
import WhyUs from '../components/WhyUs.jsx';
import { useSeo } from '../seo/useSeo.js';

export default function FrontistirioPage() {
  useSeo({
    title: 'Το Φροντιστήριο μας στην Καλλιθέα · Θ. Φλωρόπουλος',
    description: 'Φροντιστήριο Μέσης Εκπαίδευσης στην Καλλιθέα από το 1985. Ολιγομελή τμήματα Λυκείου, Γ′ Γυμνασίου και αποφοίτων με σταθερή μεθοδολογία, έμπειρους καθηγητές και προσωπική επαφή. Ιφιγένειας 89, Καλλιθέα.',
    path: '/frontistirio',
    breadcrumbs: [
      { name: 'Αρχική', path: '/' },
      { name: 'Φροντιστήριο', path: '/frontistirio' }
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'Το Φροντιστήριο μας — Καλλιθέα',
      description: 'Παρουσίαση του φροντιστηρίου Θ. Φλωρόπουλος στην Καλλιθέα: ταυτότητα, αξίες και προσέγγιση.',
      inLanguage: 'el-GR',
      isPartOf: { '@id': 'https://floropoulos.gr/#website' },
      about: { '@id': 'https://floropoulos.gr/#organization' }
    }
  });

  return (
    <>
      <PageHero
        eyebrow="Το φροντιστήριο · Καλλιθέα"
        title={<>Σοβαρή προετοιμασία<br /><span style={{ color: 'var(--ink-500)' }}>στην Καλλιθέα, χωρίς θόρυβο.</span></>}
        intro="Στο φροντιστήριό μας στην Καλλιθέα λειτουργούν ολιγομελή τμήματα για όλες τις τάξεις του Γενικού Λυκείου, τη Γ′ Γυμνασίου, καθώς και τμήματα αποφοίτων που προετοιμάζονται να δώσουν ξανά τις Πανελλαδικές. Τα μικρά τμήματα δεν είναι σύνθημα — είναι η προϋπόθεση για να ακούγεται κάθε μαθητής και να γίνεται κατανοητή κάθε απορία."
        image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1800&q=85"
        imageAlt="Σημειώσεις μαθηματικών — Φροντιστήριο Καλλιθέα Φλωρόπουλος"
      />

      <section style={{ paddingTop: 'clamp(56px, 8vw, 112px)', paddingBottom: 'clamp(56px, 8vw, 112px)' }}>
        <div className="container">
          <div className="intro-detail-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 24,
            alignItems: 'start'
          }}>
            <div className="intro-detail-head" style={{ gridColumn: '1 / span 5' }}>
              <div className="eyebrow eyebrow-rule" style={{ marginBottom: 24 }}>Η ταυτότητά μας</div>
              <h2 className="h-2" style={{
                fontSize: 'clamp(28px, 3.6vw, 44px)',
                lineHeight: 1.15,
                letterSpacing: '-0.015em',
                fontWeight: 600
              }}>
                Δύο πράγματα που<br />
                <span style={{ fontStyle: 'italic' }}>δεν αλλάζουν.</span>
              </h2>
            </div>

            <div className="intro-detail-body" style={{ gridColumn: '7 / span 6' }}>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 18,
                lineHeight: 1.75,
                color: 'var(--ink-900)',
                margin: 0,
                maxWidth: '60ch'
              }}>
                Η δουλειά μας στηρίζεται σε δύο πράγματα που δεν αλλάζουν με
                τις μόδες: <strong style={{ fontWeight: 600 }}>σταθερή μεθοδολογία</strong> και
                {' '}<strong style={{ fontWeight: 600 }}>προσωπική επαφή</strong> με κάθε μαθητή.
                Αυτό σημαίνει ότι ο καθηγητής γνωρίζει πού δυσκολεύεται
                ο κάθε μαθητής, παρακολουθεί την πρόοδό του εβδομάδα με
                εβδομάδα και επεμβαίνει την ώρα που χρειάζεται.
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
                Από το 1985 προετοιμάζουμε μαθητές στην Καλλιθέα για τις
                Πανελλαδικές με ιστορική δύναμη στις θετικές επιστήμες —
                Μαθηματικά, Φυσική, Χημεία, Βιολογία — και με την ίδια
                σοβαρότητα τα μαθήματα προσανατολισμού Οικονομίας και
                Πληροφορικής, και τη Νεοελληνική Γλώσσα.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyUs />

      <section style={{
        background: 'var(--paper-2)',
        paddingTop: 'clamp(56px, 8vw, 112px)',
        paddingBottom: 'clamp(56px, 8vw, 112px)'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="h-2" style={{
            fontSize: 'clamp(28px, 3.6vw, 44px)',
            lineHeight: 1.2,
            fontWeight: 600,
            marginBottom: 24,
            maxWidth: '24ch',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Δείτε τη μέθοδο διδασκαλίας μας.
          </h2>
          <div style={{ display: 'inline-flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginTop: 16 }}>
            <a href="/methodos" className="btn btn--primary">Δείτε τη μέθοδο</a>
            <a href="/epikoinonia" className="btn btn--ghost">Κλείστε ραντεβού</a>
          </div>
        </div>
      </section>
    </>
  );
}
