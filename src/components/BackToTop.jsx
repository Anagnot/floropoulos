import React, { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollUp() {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  }

  return (
    <button
      type="button"
      onClick={scrollUp}
      aria-label="Επιστροφή στην κορυφή"
      title="Επιστροφή στην κορυφή"
      className="back-to-top"
      style={{
        position: 'fixed',
        right: 'clamp(16px, 2.4vw, 28px)',
        bottom: 'clamp(16px, 2.4vw, 28px)',
        width: 48,
        height: 48,
        borderRadius: '50%',
        background: 'var(--ink-900)',
        color: 'var(--paper)',
        border: '1px solid var(--ink-900)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 6px 20px rgba(11, 31, 58, 0.18)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity var(--t-med), transform var(--t-med), background var(--t-fast)',
        zIndex: 900,
        padding: 0
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
           stroke="currentColor" strokeWidth="1.75"
           strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="3,9 8,4 13,9" />
        <line x1="8" y1="4" x2="8" y2="13" />
      </svg>
    </button>
  );
}
