import React from 'react';
import PageHero from '../components/PageHero.jsx';
import Programs from '../components/Programs.jsx';
import { useSeo } from '../seo/useSeo.js';

export default function ProgramsPage() {
  useSeo({
    title: 'Τμήματα Προσανατολισμού · Φροντιστήριο Καλλιθέα Φλωρόπουλος',
    description: 'Τμήματα Γ′ Γυμνασίου, Α′-Β′-Γ′ Λυκείου και αποφοίτων στην Καλλιθέα. Πλήρης κάλυψη Θετικών Σπουδών, Σπουδών Υγείας και Οικονομίας & Πληροφορικής για τις Πανελλαδικές.',
    path: '/tmimata',
    breadcrumbs: [
      { name: 'Αρχική', path: '/' },
      { name: 'Τμήματα', path: '/tmimata' }
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Τμήματα Προσανατολισμού — Φροντιστήριο Καλλιθέα',
      description: 'Πλήρης κάλυψη και των τριών επιστημονικών πεδίων του Γενικού Λυκείου στο φροντιστήριο μας στην Καλλιθέα.',
      inLanguage: 'el-GR',
      isPartOf: { '@id': 'https://floropoulos.gr/#website' },
      about: { '@id': 'https://floropoulos.gr/#organization' },
      hasPart: [
        { '@type': 'Course', name: 'Θετικών Σπουδών — Μαθηματικά, Φυσική, Χημεία', provider: { '@id': 'https://floropoulos.gr/#organization' }, inLanguage: 'el-GR' },
        { '@type': 'Course', name: 'Σπουδών Υγείας — Βιολογία, Χημεία, Φυσική', provider: { '@id': 'https://floropoulos.gr/#organization' }, inLanguage: 'el-GR' },
        { '@type': 'Course', name: 'Σπουδών Οικονομίας & Πληροφορικής — Μαθηματικά, ΑΟΘ, Πληροφορική', provider: { '@id': 'https://floropoulos.gr/#organization' }, inLanguage: 'el-GR' }
      ]
    }
  });

  return (
    <>
      <PageHero
        eyebrow="Ομάδες προσανατολισμού · Καλλιθέα"
        title={<>Σε τι <span style={{ fontStyle: 'italic' }}>προετοιμάζουμε.</span></>}
        intro="Πλήρης κάλυψη και των τριών επιστημονικών πεδίων του Γενικού Λυκείου, με ιδιαίτερη παράδοση στις θετικές επιστήμες. Παρακολουθούμε τον μαθητή στην Καλλιθέα από τη Γ′ Γυμνασίου ως την τελευταία εβδομάδα προετοιμασίας — με συνέχεια ύλης, σταθερό προσωπικό και πλήρη γνώση της διαδρομής του."
        image="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1800&q=85"
        imageAlt="Χημικός εξοπλισμός — Τμήματα Σπουδών Υγείας στο Φροντιστήριο Καλλιθέα"
      />

      <Programs hideHeading />

      <section style={{ paddingTop: 'clamp(56px, 8vw, 112px)', paddingBottom: 'clamp(56px, 8vw, 112px)' }}>
        <div className="container">
          <div className="programs-meta" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 24,
            alignItems: 'start'
          }}>
            <div style={{ gridColumn: '1 / span 5' }} className="programs-meta-head">
              <div className="eyebrow eyebrow-rule" style={{ marginBottom: 24 }}>Δομή σπουδών</div>
              <h2 className="h-2" style={{
                fontSize: 'clamp(28px, 3.6vw, 44px)',
                lineHeight: 1.15,
                fontWeight: 600,
                letterSpacing: '-0.015em'
              }}>
                Τάξεις<br />
                <span style={{ fontStyle: 'italic' }}>που λειτουργούν.</span>
              </h2>
            </div>
            <div style={{ gridColumn: '7 / span 6' }} className="programs-meta-body">
              <ul className="v-list" style={{ borderTop: '1px solid var(--rule)' }}>
                {[
                  'Γ′ Γυμνασίου — προετοιμασία βάσης',
                  'Α′ Λυκείου',
                  'Β′ Λυκείου',
                  'Γ′ Λυκείου — εστιασμένη προετοιμασία Πανελλαδικών',
                  'Τμήματα αποφοίτων'
                ].map(it => (
                  <li key={it} style={{
                    padding: '20px 0',
                    fontFamily: 'var(--font-serif)',
                    fontSize: 20,
                    fontWeight: 600,
                    letterSpacing: '-0.005em',
                    color: 'var(--ink-900)',
                    lineHeight: 1.35
                  }}>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

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
            Δείτε αναλυτικά τα μαθήματα κάθε πεδίου.
          </h2>
          <div style={{ display: 'inline-flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginTop: 16 }}>
            <a href="/mathimata" className="btn btn--primary">Δείτε τα μαθήματα</a>
            <a href="/epikoinonia" className="btn btn--ghost">Επικοινωνία</a>
          </div>
        </div>
      </section>
    </>
  );
}
