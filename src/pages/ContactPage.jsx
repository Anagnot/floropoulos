import React from 'react';
import PageHero from '../components/PageHero.jsx';
import Contact from '../components/Contact.jsx';
import { useSeo } from '../seo/useSeo.js';

export default function ContactPage() {
  useSeo({
    title: 'Επικοινωνία · Φροντιστήριο Καλλιθέα Φλωρόπουλος — Ιφιγένειας 89',
    description: 'Επικοινωνήστε με το Φροντιστήριο Θ. Φλωρόπουλος στην Καλλιθέα (Ιφιγένειας 89). Τηλέφωνο 210 9563911, κινητό 697 7990840, email aflo55@otenet.gr. Κλείστε ραντεβού γνωριμίας χωρίς δέσμευση.',
    path: '/epikoinonia',
    breadcrumbs: [
      { name: 'Αρχική', path: '/' },
      { name: 'Επικοινωνία', path: '/epikoinonia' }
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Επικοινωνία — Φροντιστήριο Καλλιθέα Φλωρόπουλος',
      description: 'Στοιχεία επικοινωνίας και φόρμα γνωριμίας για το φροντιστήριο μας στην Καλλιθέα.',
      inLanguage: 'el-GR',
      isPartOf: { '@id': 'https://floropoulosedu.gr/#website' },
      about: { '@id': 'https://floropoulosedu.gr/#organization' },
      mainEntity: {
        '@id': 'https://floropoulosedu.gr/#organization'
      }
    }
  });

  return (
    <>
      <PageHero
        eyebrow="Επικοινωνία · Καλλιθέα"
        title={<>Κλείστε ένα ραντεβού<br /><span style={{ fontStyle: 'italic' }}>γνωριμίας στην Καλλιθέα.</span></>}
        intro="Ελάτε να γνωριστούμε στο φροντιστήριό μας στην Ιφιγένειας 89, Καλλιθέα, και να συζητήσουμε την προετοιμασία του παιδιού σας. Χωρίς δέσμευση, χωρίς πίεση."
      />

      <Contact showHeading={false} />
    </>
  );
}
