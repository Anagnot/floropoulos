function ContactInfo({ eyebrow, value, mono = false, href }) {
  const valStyle = {
    fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)",
    fontSize: 17,
    color: "var(--ink-900)",
    lineHeight: 1.5,
    letterSpacing: mono ? "0.01em" : "0"
  };
  return (
    <div>
      <div className="eyebrow" style={{ marginBottom: 6 }}>{eyebrow}</div>
      {href ? (
        <a href={href} className="text-link" style={valStyle}>{value}</a>
      ) : (
        <div style={valStyle}>{value}</div>
      )}
    </div>
  );
}

function Contact({ showHeading = true } = {}) {
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.Tally) { window.Tally.loadEmbeds(); return; }
    document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((el) => {
      el.src = el.dataset.tallySrc;
    });
  }, []);

  return (
    <section id="contact">
      <div className="container">
        {showHeading && (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: 24,
            marginBottom: "clamp(48px, 7vw, 80px)"
          }}>
            <div style={{ gridColumn: "1 / span 6" }}>
              <div className="eyebrow eyebrow-rule" style={{ marginBottom: 24 }}>Επικοινωνία</div>
              <h2 className="h-2" style={{
                fontSize: "clamp(32px, 4.4vw, 56px)",
                lineHeight: 1.1,
                letterSpacing: "-0.015em"
              }}>
                Κλείστε ένα ραντεβού<br />
                <span style={{ fontStyle: "italic" }}>γνωριμίας.</span>
              </h2>
            </div>
            <div style={{ gridColumn: "8 / span 5" }}>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: 17,
                lineHeight: 1.7,
                color: "var(--ink-500)",
                margin: 0,
                marginTop: 32,
                maxWidth: "44ch"
              }}>
                Ελάτε να γνωριστούμε και να συζητήσουμε την προετοιμασία
                του παιδιού σας. Χωρίς δέσμευση, χωρίς πίεση.
              </p>
            </div>
          </div>
        )}

        <div className="contact-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: 24
        }}>
          {/* LEFT — contact details */}
          <div className="contact-info" style={{ gridColumn: "1 / span 5" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
              <ContactInfo eyebrow="Τηλέφωνο" value="210 9563911" mono href="tel:+302109563911" />
              <ContactInfo eyebrow="Κινητό"   value="697 7990840" mono href="tel:+306977990840" />
              <ContactInfo eyebrow="Email"    value="aflo55@otenet.gr" href="mailto:aflo55@otenet.gr" />
              <ContactInfo eyebrow="Διεύθυνση" value={<span>Ιφιγένειας 89<br />Καλλιθέα</span>} />
            </div>
          </div>

          {/* RIGHT — Tally form */}
          <div className="contact-form" style={{ gridColumn: "7 / span 6" }}>
            <iframe
              data-tally-src="https://tally.so/embed/ZjDaEv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="588"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Επικοινωνία"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

window.Contact = Contact;
