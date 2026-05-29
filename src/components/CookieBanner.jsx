import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'flo-cookies-consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        const t = setTimeout(() => setVisible(true), 600);
        return () => clearTimeout(t);
      }
    } catch (_) {
      setVisible(true);
    }
  }, []);

  function accept() {
    try { localStorage.setItem(STORAGE_KEY, 'accepted'); } catch (_) {}
    setVisible(false);
  }

  function decline() {
    try { localStorage.setItem(STORAGE_KEY, 'declined'); } catch (_) {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Ειδοποίηση cookies"
      className="cookie-banner"
      style={{
        position: 'fixed',
        left: 'clamp(16px, 3vw, 32px)',
        right: 'clamp(16px, 3vw, 32px)',
        bottom: 'clamp(16px, 3vw, 28px)',
        zIndex: 1000,
        background: 'var(--paper)',
        border: '1px solid var(--ink-900)',
        borderRadius: 4,
        boxShadow: '0 12px 40px rgba(11, 31, 58, 0.18)',
        padding: 'clamp(20px, 2.6vw, 28px)',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: 'clamp(16px, 2.4vw, 32px)',
        alignItems: 'center',
        maxWidth: 1100,
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
      <div>
        <div className="eyebrow" style={{ marginBottom: 8 }}>Cookies</div>
        <p style={{
          margin: 0,
          fontFamily: 'var(--font-sans)',
          fontSize: 14,
          lineHeight: 1.6,
          color: 'var(--ink-500)',
          maxWidth: '70ch'
        }}>
          Χρησιμοποιούμε cookies για τη σωστή λειτουργία του ιστότοπου και για να
          βελτιώνουμε την εμπειρία σας. Συνεχίζοντας την περιήγηση, αποδέχεστε
          τη χρήση τους.
        </p>
      </div>
      <div className="cookie-banner__actions" style={{
        display: 'flex',
        gap: 12,
        flexShrink: 0,
        flexWrap: 'wrap',
        justifyContent: 'flex-end'
      }}>
        <button
          type="button"
          onClick={decline}
          className="btn btn--ghost"
          style={{ padding: '10px 18px', fontSize: 13 }}
        >
          Άρνηση
        </button>
        <button
          type="button"
          onClick={accept}
          className="btn btn--primary"
          style={{ padding: '10px 22px', fontSize: 13 }}
        >
          Αποδοχή
        </button>
      </div>
    </div>
  );
}
