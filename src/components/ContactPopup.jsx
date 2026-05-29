import React, { useEffect, useState } from 'react';
import { navigate } from '../router.jsx';

const STORAGE_KEY = 'flo-contact-popup-shown';
const TRIGGER_RATIO = 0.7;

export default function ContactPopup() {
  const [open, setOpen] = useState(false);
  const [alreadyShown, setAlreadyShown] = useState(true);

  useEffect(() => {
    try {
      const seen = localStorage.getItem(STORAGE_KEY);
      if (!seen) setAlreadyShown(false);
    } catch (_) {
      setAlreadyShown(false);
    }
  }, []);

  useEffect(() => {
    if (alreadyShown) return;

    function onScroll() {
      const doc = document.documentElement;
      const max = (doc.scrollHeight - window.innerHeight);
      if (max <= 0) return;
      const ratio = window.scrollY / max;
      if (ratio >= TRIGGER_RATIO) {
        try { localStorage.setItem(STORAGE_KEY, '1'); } catch (_) {}
        setAlreadyShown(true);
        setOpen(true);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [alreadyShown]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    function onKey(e) { if (e.key === 'Escape') close(); }
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  function goToContact() {
    close();
    navigate('/epikoinonia');
  }

  if (!open) return null;

  return (
    <div
      className="contact-popup__overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-popup-title"
      onClick={close}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(11, 31, 58, 0.55)',
        zIndex: 1100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(16px, 4vw, 32px)',
        animation: 'flo-popup-fade 240ms ease-out'
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        className="contact-popup__card"
        style={{
          position: 'relative',
          background: 'var(--paper)',
          border: '1px solid var(--ink-900)',
          borderRadius: 4,
          maxWidth: 520,
          width: '100%',
          padding: 'clamp(28px, 4vw, 48px)',
          boxShadow: '0 24px 60px rgba(11, 31, 58, 0.32)',
          animation: 'flo-popup-rise 280ms ease-out'
        }}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Κλείσιμο"
          style={{
            position: 'absolute',
            top: 14,
            right: 14,
            width: 32,
            height: 32,
            border: 'none',
            background: 'transparent',
            color: 'var(--ink-500)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" stroke="currentColor"
               strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <line x1="2" y1="2" x2="12" y2="12" />
            <line x1="12" y1="2" x2="2" y2="12" />
          </svg>
        </button>

        <div className="eyebrow eyebrow-rule" style={{ marginBottom: 20 }}>
          Ραντεβού γνωριμίας
        </div>

        <h3
          id="contact-popup-title"
          className="h-3"
          style={{
            fontSize: 'clamp(26px, 3.4vw, 36px)',
            lineHeight: 1.15,
            letterSpacing: '-0.015em',
            margin: 0,
            marginBottom: 16,
            color: 'var(--ink-900)'
          }}
        >
          Ας γνωριστούμε <span style={{ fontStyle: 'italic' }}>από κοντά.</span>
        </h3>

        <p style={{
          margin: 0,
          marginBottom: 28,
          fontFamily: 'var(--font-sans)',
          fontSize: 16,
          lineHeight: 1.7,
          color: 'var(--ink-500)',
          maxWidth: '52ch'
        }}>
          Συμπληρώστε τη φόρμα επικοινωνίας και θα κανονίσουμε ένα ραντεβού
          για να συζητήσουμε την προετοιμασία του παιδιού σας. Χωρίς δέσμευση.
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={goToContact}
            className="btn btn--primary"
            style={{ padding: '14px 24px' }}
          >
            Στη φόρμα επικοινωνίας
          </button>
          <button
            type="button"
            onClick={close}
            className="btn btn--ghost"
            style={{ padding: '14px 22px' }}
          >
            Αργότερα
          </button>
        </div>
      </div>
    </div>
  );
}
