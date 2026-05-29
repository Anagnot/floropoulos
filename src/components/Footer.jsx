import React from 'react';
import Wordmark from './Wordmark.jsx';
import { ROUTES } from '../router.jsx';

export default function Footer() {
  const links = ROUTES.filter(r => r.nav);

  return (
    <footer style={{
      borderTop: '1px solid var(--rule)',
      paddingTop: 64,
      paddingBottom: 48,
      background: 'var(--paper)'
    }}>
      <div className="container">
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr',
          gap: 48,
          alignItems: 'start',
          marginBottom: 56
        }}>
          <div>
            <a href="/" style={{ textDecoration: 'none', display: 'inline-block' }}>
              <Wordmark size="sm" showSubline={false} />
            </a>
            <div style={{
              marginTop: 14,
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--ink-500)',
              fontWeight: 500
            }}>
              Φροντιστήριο&nbsp;Μέσης&nbsp;Εκπαίδευσης · Καλλιθέα
            </div>
            <p style={{
              marginTop: 20,
              fontFamily: 'var(--font-sans)',
              fontSize: 14,
              lineHeight: 1.7,
              color: 'var(--ink-500)',
              maxWidth: '38ch'
            }}>
              Προετοιμασία για το Λύκειο και τις Πανελλαδικές, από το 1985.
            </p>
          </div>

          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Πλοήγηση</div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {links.map(l => (
                <li key={l.path}>
                  <a href={l.path} className="text-link" style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 14,
                    color: 'var(--ink-900)'
                  }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Επικοινωνία</div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li>
                <a href="tel:+302109563911" className="text-link" style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 14,
                  color: 'var(--ink-900)'
                }}>
                  210 9563911
                </a>
              </li>
              <li>
                <a href="tel:+306977990840" className="text-link" style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 14,
                  color: 'var(--ink-900)'
                }}>
                  697 7990840
                </a>
              </li>
              <li>
                <a href="mailto:aflo55@otenet.gr" className="text-link" style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14,
                  color: 'var(--ink-900)'
                }}>
                  aflo55@otenet.gr
                </a>
              </li>
              <li style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                color: 'var(--ink-500)',
                lineHeight: 1.5,
                marginTop: 6
              }}>
                Ιφιγένειας 89, Καλλιθέα
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-row" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 24,
          flexWrap: 'wrap',
          paddingTop: 28,
          borderTop: '1px solid var(--rule)'
        }}>
          <div style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            letterSpacing: '0.04em',
            color: 'var(--ink-500)'
          }}>
            © 2026 · Όλα τα δικαιώματα διατηρούνται
          </div>
          <div style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            color: 'var(--ink-500)'
          }}>
            Φροντιστήριο Θ. Φλωρόπουλος
          </div>
        </div>
      </div>
    </footer>
  );
}
