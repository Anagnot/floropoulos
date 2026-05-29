/* ============================================================
   Home — Bold Editorial redesign
   Strong contrasts: paper hero → dark stats → paper teasers →
   paper-2 image story → paper Extras → dark CTA.
   Each section has its own rhythm; images are large and unfiltered.
   ============================================================ */

function HomeHero() {
  return (
    <section id="top" className="home-hero" style={{
      position: "relative",
      paddingTop: "clamp(32px, 4vw, 64px)",
      paddingBottom: "clamp(32px, 4vw, 64px)",
      background: "var(--ink-900)",
      color: "var(--paper)",
      overflow: "hidden",
      minHeight: "calc(100svh - 80px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}>
      {/* Full-width background image */}
      <img
        src="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1800&q=85"
        alt="Πίνακας με μαθηματικούς τύπους"
        loading="eager"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          opacity: 0.5
        }}
      />
      {/* Dark gradient overlay */}
      <div aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(120deg, rgba(11,31,58,0.92) 0%, rgba(11,31,58,0.7) 45%, rgba(11,31,58,0.85) 100%)"
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          fontFamily: "var(--font-sans)",
          fontSize: 12,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--accent-soft)",
          fontWeight: 500,
          marginBottom: "clamp(20px, 2.6vw, 32px)",
          display: "inline-flex",
          alignItems: "center",
          gap: 16
        }}>
          <span style={{ width: 32, height: 1, background: "var(--accent)" }} />
          Καλλιθέα · 20 χρόνια επιτυχίες
        </div>

        <h1 className="h-hero" style={{
          fontSize: "clamp(36px, 5.4vw, 84px)",
          fontWeight: 600,
          letterSpacing: "-0.035em",
          lineHeight: 1.0,
          color: "var(--paper)",
          marginBottom: "clamp(18px, 2.4vw, 28px)",
          maxWidth: "14ch"
        }}>
          Το φροντιστήριο{" "}
          <span style={{ color: "var(--accent-soft)" }}>των μεγάλων</span>{" "}
          <span style={{ fontStyle: "italic", fontWeight: 500 }}>επιτυχιών.</span>
        </h1>

        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: "clamp(15px, 1.2vw, 17px)",
          lineHeight: 1.6,
          color: "rgba(250, 247, 242, 0.82)",
          maxWidth: "52ch",
          margin: 0
        }}>
          Προετοιμασία για το Λύκειο, τις Πανελλαδικές και το Γυμνάσιο,
          με βαθιά παράδοση στις θετικές επιστήμες και πλήρη κάλυψη
          όλων των μαθημάτων προσανατολισμού.
        </p>

        <div style={{
          display: "flex",
          gap: 12,
          marginTop: "clamp(22px, 3vw, 36px)",
          flexWrap: "wrap"
        }}>
          <a href="#/epikoinonia" className="btn home-hero-cta" style={{
            background: "var(--accent)",
            color: "var(--ink-900)",
            borderColor: "var(--accent)"
          }}>
            Κλείστε ραντεβού γνωριμίας
          </a>
          <a href="#/methodos" className="btn home-hero-ghost" style={{
            background: "transparent",
            color: "var(--paper)",
            borderColor: "var(--paper)"
          }}>
            Δείτε τη μέθοδο
          </a>
        </div>
      </div>
    </section>
  );
}

/* ----- Stats band: dark navy with massive bronze numerals ----- */
function StatsBand() {
  const stats = [
    { num: "40+", label: "Χρόνια λειτουργίας", sub: "Από το 1985" },
    { num: "3",   label: "Επιστημονικά πεδία", sub: "Πλήρης κάλυψη" },
    { num: "7",   label: "Μαθήματα προσανατολισμού", sub: "Από εξειδικευμένους καθηγητές" },
    { num: "∞",   label: "Εισαγωγές σε δημόσιες σχολές", sub: "Δεκαετίες διαδρομών" }
  ];

  return (
    <section className="stats-band" style={{
      background: "var(--ink-900)",
      color: "var(--paper)",
      paddingTop: "clamp(72px, 9vw, 128px)",
      paddingBottom: "clamp(72px, 9vw, 128px)",
      borderTop: "none"
    }}>
      <div className="container">
        <div style={{
          fontFamily: "var(--font-sans)",
          fontSize: 12,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--accent-soft)",
          fontWeight: 500,
          marginBottom: "clamp(32px, 5vw, 56px)",
          display: "inline-flex",
          alignItems: "center",
          gap: 16
        }}>
          <span style={{ width: 32, height: 1, background: "var(--accent)" }} />
          Σαράντα χρόνια διαδρομή
        </div>

        <h2 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(28px, 3.4vw, 44px)",
          lineHeight: 1.15,
          letterSpacing: "-0.015em",
          fontWeight: 500,
          color: "var(--paper)",
          margin: 0,
          marginBottom: "clamp(48px, 7vw, 80px)",
          maxWidth: "24ch"
        }}>
          Ένα φροντιστήριο που έχει μετρήσει
          <span style={{ color: "var(--accent-soft)", fontStyle: "italic" }}> γενιές μαθητών.</span>
        </h2>

        <div className="stats-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "clamp(24px, 3vw, 48px)",
          alignItems: "start"
        }}>
          {stats.map((s, i) => (
            <div key={i} className="stat-cell" style={{
              borderTop: "1px solid rgba(212, 185, 138, 0.35)",
              paddingTop: 24
            }}>
              <div style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(56px, 7vw, 96px)",
                lineHeight: 0.95,
                color: "var(--accent-soft)",
                fontWeight: 500,
                fontVariantNumeric: "lining-nums tabular-nums",
                letterSpacing: "-0.03em",
                marginBottom: 16
              }}>
                {s.num}
              </div>
              <div style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                lineHeight: 1.4,
                color: "var(--paper)",
                fontWeight: 500,
                marginBottom: 6,
                letterSpacing: "0.01em"
              }}>
                {s.label}
              </div>
              <div style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                lineHeight: 1.5,
                color: "rgba(250, 247, 242, 0.55)"
              }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----- Teasers: 1 featured card + 3 supporting (asymmetric) ----- */
function HomeFeaturedTeaser({ eyebrow, title, body, href, image, alt }) {
  return (
    <a href={href} className="home-teaser-featured" style={{
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 0,
      textDecoration: "none",
      color: "inherit",
      border: "1px solid var(--rule)",
      borderRadius: 2,
      overflow: "hidden",
      transition: "border-color 200ms ease, transform 300ms ease",
      background: "var(--paper)"
    }}>
      <div style={{
        position: "relative",
        minHeight: "clamp(280px, 38vw, 460px)",
        background: "var(--paper-2)"
      }}>
        <img
          src={image}
          alt={alt}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            position: "absolute",
            inset: 0
          }}
        />
      </div>
      <div style={{
        padding: "clamp(28px, 4vw, 56px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}>
        <div className="eyebrow" style={{ color: "var(--accent)", marginBottom: 20 }}>{eyebrow}</div>
        <h3 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(24px, 2.6vw, 36px)",
          lineHeight: 1.15,
          letterSpacing: "-0.015em",
          fontWeight: 600,
          color: "var(--ink-900)",
          margin: 0,
          marginBottom: 16
        }}>
          {title}
        </h3>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: 16,
          lineHeight: 1.65,
          color: "var(--ink-500)",
          margin: 0,
          maxWidth: "40ch"
        }}>
          {body}
        </p>
        <div style={{
          marginTop: 24,
          fontFamily: "var(--font-sans)",
          fontSize: 12,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--ink-900)",
          fontWeight: 600,
          display: "inline-flex",
          alignItems: "center",
          gap: 10
        }}>
          Διαβάστε περισσότερα
          <span aria-hidden="true">→</span>
        </div>
      </div>
    </a>
  );
}

function HomeMiniTeaser({ num, eyebrow, title, body, href }) {
  return (
    <a href={href} className="home-teaser-mini" style={{
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "clamp(24px, 3vw, 32px)",
      paddingTop: "clamp(28px, 3.4vw, 40px)",
      border: "1px solid var(--rule)",
      borderRadius: 2,
      textDecoration: "none",
      color: "inherit",
      background: "var(--paper)",
      transition: "border-color 200ms ease, background 200ms ease",
      height: "100%",
      position: "relative"
    }}>
      <div style={{
        position: "absolute",
        top: 16,
        right: 20,
        fontFamily: "var(--font-serif)",
        fontSize: 14,
        color: "var(--accent)",
        fontWeight: 500,
        letterSpacing: "0.04em",
        fontVariantNumeric: "lining-nums tabular-nums"
      }}>
        {num}
      </div>
      <div className="eyebrow" style={{ color: "var(--ink-500)" }}>{eyebrow}</div>
      <h3 style={{
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(20px, 2vw, 24px)",
        lineHeight: 1.2,
        letterSpacing: "-0.01em",
        fontWeight: 600,
        color: "var(--ink-900)",
        margin: 0
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: "var(--font-sans)",
        fontSize: 14.5,
        lineHeight: 1.6,
        color: "var(--ink-500)",
        margin: 0,
        flex: 1
      }}>
        {body}
      </p>
      <div style={{
        marginTop: 4,
        fontFamily: "var(--font-sans)",
        fontSize: 11.5,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--ink-900)",
        fontWeight: 600,
        display: "inline-flex",
        alignItems: "center",
        gap: 8
      }}>
        Περισσότερα <span aria-hidden="true">→</span>
      </div>
    </a>
  );
}

function HomeTeasers() {
  const minis = [
    { num: "02", eyebrow: "Η μέθοδος",  title: "Πώς δουλεύουμε.",     body: "Τέσσερις αρχές που διαμορφώνουν κάθε ώρα διδασκαλίας.",            href: "#/methodos"  },
    { num: "03", eyebrow: "Τα τμήματα", title: "Σε τι προετοιμάζουμε.", body: "Πλήρης κάλυψη και των τριών επιστημονικών πεδίων.",               href: "#/tmimata"   },
    { num: "04", eyebrow: "Τα μαθήματα",title: "Τι διδάσκουμε.",       body: "Κάθε μάθημα από καθηγητή με αποκλειστική ειδίκευση.",             href: "#/mathimata" }
  ];

  return (
    <section style={{ paddingTop: "clamp(72px, 10vw, 144px)", paddingBottom: "clamp(72px, 10vw, 144px)" }}>
      <div className="container">
        <div className="section-head" style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: 24,
          marginBottom: "clamp(40px, 6vw, 64px)"
        }}>
          <div style={{ gridColumn: "1 / span 7" }}>
            <div className="eyebrow eyebrow-rule" style={{ marginBottom: 20 }}>Τι θα βρείτε εδώ</div>
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(28px, 3.8vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 600,
              maxWidth: "18ch"
            }}>
              Όσα οφείλει να γνωρίζει
              ο <span style={{ fontStyle: "italic", color: "var(--ink-500)" }}>γονιός και ο μαθητής.</span>
            </h2>
          </div>
        </div>

        {/* Featured */}
        <HomeFeaturedTeaser
          eyebrow="01 — Το φροντιστήριο"
          title="Σοβαρή προετοιμασία, χωρίς θόρυβο."
          body="Ολιγομελή τμήματα, σταθερή μεθοδολογία, προσωπική επαφή με κάθε μαθητή. Σαράντα χρόνια εμπειρίας μεταφράζονται σε δουλειά που φαίνεται."
          href="#/frontistirio"
          image="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=85"
          alt="Χημικός εξοπλισμός εργαστηρίου"
        />

        {/* Mini grid below */}
        <div className="home-mini-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
          marginTop: 16
        }}>
          {minis.map(m => <HomeMiniTeaser key={m.href} {...m} />)}
        </div>
      </div>
    </section>
  );
}

/* ----- Results as image-led editorial story ----- */
function ResultsStory() {
  return (
    <section style={{
      background: "var(--paper-2)",
      paddingTop: "clamp(72px, 10vw, 144px)",
      paddingBottom: "clamp(72px, 10vw, 144px)"
    }}>
      <div className="container">
        <div className="results-story-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 6vw, 96px)",
          alignItems: "center"
        }}>
          {/* Image — left, large */}
          <div style={{
            position: "relative",
            aspectRatio: "4 / 5",
            borderRadius: 2,
            overflow: "hidden",
            background: "var(--paper)"
          }}>
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85"
              alt="Σημειώσεις μαθηματικών και τύποι"
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                position: "absolute",
                inset: 0
              }}
            />
          </div>

          {/* Story right */}
          <div>
            <div className="eyebrow eyebrow-rule" style={{ marginBottom: 24 }}>
              Οι επιτυχίες μας
            </div>
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(32px, 4.2vw, 56px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontWeight: 600,
              margin: 0,
              marginBottom: 32
            }}>
              Δεκαετίες<br />
              εισαγωγών σε<br />
              <span style={{ fontStyle: "italic", color: "var(--accent)" }}>δημόσιες σχολές.</span>
            </h2>

            {/* Pull quote */}
            <blockquote style={{
              margin: 0,
              marginBottom: 32,
              paddingLeft: 24,
              borderLeft: "2px solid var(--accent)",
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(20px, 2.2vw, 26px)",
              lineHeight: 1.4,
              letterSpacing: "-0.005em",
              fontWeight: 500,
              fontStyle: "italic",
              color: "var(--ink-900)"
            }}>
              «Δεν μετράμε ονόματα — μετράμε διαδρομές μαθητών
              που μπήκαν στο φροντιστήριο στη Γ′ Γυμνασίου
              και βγήκαν φοιτητές.»
            </blockquote>

            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: 17,
              lineHeight: 1.75,
              color: "var(--ink-500)",
              margin: 0,
              maxWidth: "50ch"
            }}>
              Στα χρόνια λειτουργίας του φροντιστηρίου, εκατοντάδες μαθητές
              μας έχουν περάσει σε πανεπιστημιακές σχολές της επιλογής τους
              — με ιδιαίτερη παρουσία σε Πολυτεχνικές, Ιατρικές και Σχολές
              Θετικών Επιστημών.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----- CTA: dark dramatic ----- */
function HomeCTA() {
  return (
    <section className="home-cta-dark" style={{
      background: "var(--ink-900)",
      color: "var(--paper)",
      paddingTop: "clamp(72px, 10vw, 144px)",
      paddingBottom: "clamp(72px, 10vw, 144px)",
      borderTop: "none"
    }}>
      <div className="container">
        <div className="home-cta-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 6vw, 96px)",
          alignItems: "center"
        }}>
          <div>
            <div style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--accent-soft)",
              fontWeight: 500,
              marginBottom: 24,
              display: "inline-flex",
              alignItems: "center",
              gap: 16
            }}>
              <span style={{ width: 32, height: 1, background: "var(--accent)" }} />
              Επικοινωνία
            </div>
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(36px, 5vw, 72px)",
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
              fontWeight: 600,
              color: "var(--paper)",
              margin: 0,
              marginBottom: 28,
              maxWidth: "14ch"
            }}>
              Κλείστε ένα ραντεβού<br />
              <span style={{ fontStyle: "italic", color: "var(--accent-soft)" }}>γνωριμίας.</span>
            </h2>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(16px, 1.4vw, 18px)",
              lineHeight: 1.7,
              color: "rgba(250, 247, 242, 0.72)",
              maxWidth: "44ch",
              margin: 0,
              marginBottom: 36
            }}>
              Ελάτε να γνωριστούμε και να συζητήσουμε την προετοιμασία
              του παιδιού σας. Χωρίς δέσμευση, χωρίς πίεση.
            </p>
            <a href="#/epikoinonia" className="btn home-cta-btn" style={{
              background: "var(--accent)",
              color: "var(--ink-900)",
              borderColor: "var(--accent)"
            }}>
              Κλείστε ραντεβού γνωριμίας
            </a>
          </div>

          {/* Right column: contact card on dark */}
          <div className="home-cta-card" style={{
            border: "1px solid rgba(212, 185, 138, 0.35)",
            borderRadius: 2,
            padding: "clamp(28px, 4vw, 44px)",
            background: "rgba(250, 247, 242, 0.03)"
          }}>
            <div style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--accent-soft)",
              fontWeight: 500,
              marginBottom: 24
            }}>
              Φροντιστήριο Θ. Φλωρόπουλος
            </div>

            <dl style={{ margin: 0, display: "grid", gap: 22 }}>
              <div>
                <dt style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(250, 247, 242, 0.55)",
                  fontWeight: 500,
                  marginBottom: 6
                }}>Διεύθυνση</dt>
                <dd style={{
                  margin: 0,
                  fontFamily: "var(--font-serif)",
                  fontSize: 18,
                  fontWeight: 500,
                  color: "var(--paper)"
                }}>Καλλιθέα, Αθήνα</dd>
              </div>

              <div>
                <dt style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(250, 247, 242, 0.55)",
                  fontWeight: 500,
                  marginBottom: 6
                }}>Ώρες επικοινωνίας</dt>
                <dd style={{
                  margin: 0,
                  fontFamily: "var(--font-serif)",
                  fontSize: 18,
                  fontWeight: 500,
                  color: "var(--paper)"
                }}>Δευτέρα – Παρασκευή · 17:00 – 21:00</dd>
              </div>

              <div>
                <dt style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(250, 247, 242, 0.55)",
                  fontWeight: 500,
                  marginBottom: 6
                }}>Από το</dt>
                <dd style={{
                  margin: 0,
                  fontFamily: "var(--font-serif)",
                  fontSize: 32,
                  fontWeight: 500,
                  color: "var(--accent-soft)",
                  fontVariantNumeric: "lining-nums tabular-nums",
                  letterSpacing: "-0.02em"
                }}>1985</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <React.Fragment>
      <HomeHero />
      <StatsBand />
      <HomeTeasers />
      <ResultsStory />
      <Extras />
      <HomeCTA />
    </React.Fragment>
  );
}

window.HomePage = HomePage;
