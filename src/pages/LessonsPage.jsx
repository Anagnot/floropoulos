import React from 'react';
import PageHero from '../components/PageHero.jsx';
import Lessons from '../components/Lessons.jsx';
import Extras from '../components/Extras.jsx';
import { useSeo } from '../seo/useSeo.js';

export default function LessonsPage() {
  useSeo({
    title: 'Μαθήματα — Μαθηματικά, Φυσική, Χημεία · Φροντιστήριο Καλλιθέα',
    description: 'Μαθηματικά, Φυσική, Χημεία, Βιολογία, ΑΟΘ, Πληροφορική και Νεοελληνική Γλώσσα στο φροντιστήριό μας στην Καλλιθέα. Κάθε μάθημα από καθηγητή με αποκλειστική ειδίκευση στο αντικείμενό του.',
    path: '/mathimata',
    breadcrumbs: [
      { name: 'Αρχική', path: '/' },
      { name: 'Μαθήματα', path: '/mathimata' }
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Μαθήματα στο Φροντιστήριο Καλλιθέα Φλωρόπουλος',
      description: 'Τα μαθήματα που διδάσκονται στο φροντιστήριο μας στην Καλλιθέα.',
      inLanguage: 'el-GR',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Μαθηματικά' },
        { '@type': 'ListItem', position: 2, name: 'Φυσική' },
        { '@type': 'ListItem', position: 3, name: 'Χημεία' },
        { '@type': 'ListItem', position: 4, name: 'Βιολογία' },
        { '@type': 'ListItem', position: 5, name: 'Αρχές Οικονομικής Θεωρίας (ΑΟΘ)' },
        { '@type': 'ListItem', position: 6, name: 'Πληροφορική' },
        { '@type': 'ListItem', position: 7, name: 'Νεοελληνική Γλώσσα & Λογοτεχνία' }
      ]
    }
  });

  return (
    <>
      <PageHero
        eyebrow="Τα μαθήματα · Καλλιθέα"
        title={<>Τι <span style={{ fontStyle: 'italic' }}>διδάσκουμε.</span></>}
        intro="Όλα τα μαθήματα στο φροντιστήριό μας στην Καλλιθέα διδάσκονται από καθηγητές με αποκλειστική ειδίκευση στο αντικείμενό τους — όχι «γενικών καθηκόντων» εκπαιδευτικοί."
        image="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1800&q=85"
        imageAlt="Πίνακας με μαθηματικούς τύπους — Μαθήματα Φροντιστηρίου Καλλιθέα"
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
          <a href="/epikoinonia" className="btn btn--primary">Κλείστε ραντεβού γνωριμίας</a>
        </div>
      </section>
    </>
  );
}
