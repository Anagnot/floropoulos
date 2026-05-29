function ContactPage() {
  return (
    <React.Fragment>
      <PageHero
        eyebrow="Επικοινωνία"
        title={<React.Fragment>Κλείστε ένα ραντεβού<br /><span style={{ fontStyle: "italic" }}>γνωριμίας.</span></React.Fragment>}
        intro="Ελάτε να γνωριστούμε και να συζητήσουμε την προετοιμασία του παιδιού σας. Χωρίς δέσμευση, χωρίς πίεση."
      />

      <Contact showHeading={false} />
    </React.Fragment>
  );
}

window.ContactPage = ContactPage;
