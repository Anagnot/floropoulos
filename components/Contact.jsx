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
  const [submitted, setSubmitted] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [values, setValues] = React.useState({ name: "", phone: "", level: "", note: "" });
  const [touched, setTouched] = React.useState({});

  const levels = [
    "Γ′ Γυμνασίου",
    "Α′ Λυκείου",
    "Β′ Λυκείου",
    "Γ′ Λυκείου",
    "Απόφοιτος"
  ];

  function update(key, val) {
    setValues(v => ({ ...v, [key]: val }));
    if (errors[key]) {
      setErrors(e => { const n = { ...e }; delete n[key]; return n; });
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    const errs = {};
    if (!values.name.trim())  errs.name  = "Παρακαλούμε συμπληρώστε το ονοματεπώνυμό σας.";
    if (!values.phone.trim()) errs.phone = "Παρακαλούμε συμπληρώστε ένα τηλέφωνο επικοινωνίας.";
    if (!values.level)        errs.level = "Επιλέξτε την τάξη του μαθητή.";
    setTouched({ name: true, phone: true, level: true });
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
  }

  function fieldClass(name) {
    return `field ${errors[name] ? "field--error" : ""}`;
  }

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

          {/* RIGHT — form */}
          <div className="contact-form" style={{ gridColumn: "7 / span 6" }}>
            {submitted ? (
              <div style={{
                padding: 40,
                border: "1px solid var(--ink-900)",
                borderRadius: 4,
                display: "flex",
                flexDirection: "column",
                gap: 12
              }}>
                <div className="eyebrow" style={{ color: "var(--success)" }}>Στάλθηκε</div>
                <div style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 32,
                  fontWeight: 500,
                  color: "var(--ink-900)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em"
                }}>
                  Ευχαριστούμε.
                </div>
                <p style={{ color: "var(--ink-500)", margin: 0, fontSize: 16, lineHeight: 1.7 }}>
                  Θα επικοινωνήσουμε μαζί σας εντός μίας εργάσιμης ημέρας.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                <div className={fieldClass("name")}>
                  <label className="field-label" htmlFor="cf-name">Ονοματεπώνυμο</label>
                  <input id="cf-name" className="input"
                         placeholder="Πώς να σας αποκαλούμε"
                         value={values.name}
                         onChange={e => update("name", e.target.value)}
                         style={errors.name ? { borderBottomColor: "var(--error)" } : null} />
                  {errors.name && (
                    <div className="field-help" style={{ color: "var(--error)" }}>{errors.name}</div>
                  )}
                </div>

                <div className={fieldClass("phone")}>
                  <label className="field-label" htmlFor="cf-phone">Τηλέφωνο</label>
                  <input id="cf-phone" className="input" inputMode="tel"
                         placeholder="Για να επικοινωνήσουμε μαζί σας"
                         value={values.phone}
                         onChange={e => update("phone", e.target.value)}
                         style={errors.phone ? { borderBottomColor: "var(--error)" } : null} />
                  {errors.phone && (
                    <div className="field-help" style={{ color: "var(--error)" }}>{errors.phone}</div>
                  )}
                </div>

                <div className={fieldClass("level")}>
                  <label className="field-label" htmlFor="cf-level">Τάξη</label>
                  <div style={{ position: "relative" }}>
                    <select id="cf-level"
                            className="input"
                            value={values.level}
                            onChange={e => update("level", e.target.value)}
                            style={{
                              appearance: "none",
                              WebkitAppearance: "none",
                              paddingRight: 28,
                              color: values.level ? "var(--ink-900)" : "var(--ink-300)",
                              cursor: "pointer",
                              ...(errors.level ? { borderBottomColor: "var(--error)" } : null)
                            }}>
                      <option value="" disabled>Επιλέξτε τάξη</option>
                      {levels.map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none"
                         stroke="var(--ink-900)" strokeWidth="1.5"
                         style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                      <polyline points="1,1.5 6,6.5 11,1.5" />
                    </svg>
                  </div>
                  {errors.level && (
                    <div className="field-help" style={{ color: "var(--error)" }}>{errors.level}</div>
                  )}
                </div>

                <div className="field">
                  <label className="field-label" htmlFor="cf-note">Μήνυμα <span style={{ color: "var(--ink-300)" }}>(προαιρετικό)</span></label>
                  <textarea id="cf-note" className="input" rows="3"
                            placeholder="Πείτε μας τι θα θέλατε να συζητήσουμε"
                            style={{ resize: "vertical" }}
                            value={values.note}
                            onChange={e => update("note", e.target.value)} />
                </div>

                <div style={{ marginTop: 8 }}>
                  <button type="submit" className="btn btn--primary">Αποστολή αιτήματος</button>
                  <div style={{
                    marginTop: 16,
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    color: "var(--ink-500)",
                    lineHeight: 1.5
                  }}>
                    Θα επικοινωνήσουμε μαζί σας εντός μίας εργάσιμης ημέρας.
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

window.Contact = Contact;
