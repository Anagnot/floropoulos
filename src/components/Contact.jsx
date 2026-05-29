import React, { useEffect } from 'react';

function ContactInfo({ eyebrow, value, mono = false, href }) {
  const valStyle = {
    fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
    fontSize: 17,
    color: 'var(--ink-900)',
    lineHeight: 1.5,
    letterSpacing: mono ? '0.01em' : '0'
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

export default function Contact({ showHeading = true } = {}) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.Tally) { window.Tally.loadEmbeds(); return; }
    document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((el) => {
      el.src = el.dataset.tallySrc;
    });
  }, []);

  return (
    <section id="contact">
      <div className="container">
        {showHeading && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 24,
            marginBottom: 'clamp(48px, 7vw, 80px)'
          }}>
            <div style={{ gridColumn: '1 / span 6' }}>
              <div className="eyebrow eyebrow-rule" style={{ marginBottom: 24 }}>Επικοινωνία</div>
              <h2 className="h-2" style={{
                fontSize: 'clamp(32px, 4.4vw, 56px)',
                lineHeight: 1.1,
                letterSpacing: '-0.015em'
              }}>
                Κλείστε ένα ραντεβού<br />
                <span style={{ fontStyle: 'italic' }}>γνωριμίας.</span>
              </h2>
            </div>
            <div style={{ gridColumn: '8 / span 5' }}>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 17,
                lineHeight: 1.7,
                color: 'var(--ink-500)',
                margin: 0,
                marginTop: 32,
                maxWidth: '44ch'
              }}>
                Ελάτε να γνωριστούμε και να συζητήσουμε την προετοιμασία
                του παιδιού σας. Χωρίς δέσμευση, χωρίς πίεση.
              </p>
            </div>
          </div>
        )}

        <div className="contact-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 24
        }}>
          <div className="contact-info" style={{ gridColumn: '1 / span 5' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
              <ContactInfo eyebrow="Τηλέφωνο"  value="210 9563911" mono href="tel:+302109563911" />
              <ContactInfo eyebrow="Κινητό"    value="697 7990840" mono href="tel:+306977990840" />
              <ContactInfo eyebrow="Email"     value="aflo55@otenet.gr" href="mailto:aflo55@otenet.gr" />
              <ContactInfo
                eyebrow="Διεύθυνση"
                value={<span>Ιφιγένειας 89<br />Καλλιθέα</span>}
                href="https://maps.app.goo.gl/NJfHMiaTbVzqzBbi6"
              />

              <div className="contact-map" style={{
                marginTop: 8,
                border: '1px solid var(--ink-900)',
                borderRadius: 4,
                overflow: 'hidden',
                aspectRatio: '4 / 3'
              }}>
                <a
                  href="https://maps.app.goo.gl/NJfHMiaTbVzqzBbi6"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Άνοιγμα διεύθυνσης στο Google Maps"
                  style={{ display: 'block', width: '100%', height: '100%' }}
                >
                  <iframe
                    title="Χάρτης — Ιφιγένειας 89, Καλλιθέα"
                    src="https://www.google.com/maps?q=%CE%99%CF%86%CE%B9%CE%B3%CE%B5%CE%BD%CE%B5%CE%AF%CE%B1%CF%82%2089%2C%20%CE%9A%CE%B1%CE%BB%CE%BB%CE%B9%CE%B8%CE%AD%CE%B1&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: 'block', pointerEvents: 'none' }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form" style={{ gridColumn: '7 / span 6' }}>
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
