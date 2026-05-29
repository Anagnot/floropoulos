import React from 'react';
import PageHero from '../components/PageHero.jsx';
import Contact from '../components/Contact.jsx';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Επικοινωνία"
        title={<>Κλείστε ένα ραντεβού<br /><span style={{ fontStyle: 'italic' }}>γνωριμίας.</span></>}
        intro="Ελάτε να γνωριστούμε και να συζητήσουμε την προετοιμασία του παιδιού σας. Χωρίς δέσμευση, χωρίς πίεση."
      />

      <Contact showHeading={false} />
    </>
  );
}
