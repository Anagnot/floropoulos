import React from 'react';

export default function Wordmark({ size = 'md', showSubline = true }) {
  const cfg = {
    xs: { name: 18, sub: 8,  gap: 4,  rule: 20, subSpacing: '0.18em' },
    sm: { name: 22, sub: 9,  gap: 4,  rule: 24, subSpacing: '0.18em' },
    md: { name: 28, sub: 10, gap: 6,  rule: 32, subSpacing: '0.18em' },
    lg: { name: 56, sub: 11, gap: 10, rule: 48, subSpacing: '0.2em'  },
  }[size];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: cfg.gap }}>
      <div style={{
        fontFamily: 'var(--font-serif)',
        fontSize: cfg.name,
        lineHeight: 1,
        letterSpacing: '-0.015em',
        fontWeight: 500,
        color: 'var(--ink-900)'
      }}>
        Θ.&nbsp;Φλωρόπουλος
      </div>
      {showSubline && (
        <>
          <div data-wordmark-sub style={{ width: cfg.rule, height: 1, background: 'var(--ink-900)' }} />
          <div data-wordmark-sub style={{
            fontFamily: 'var(--font-sans)',
            fontSize: cfg.sub,
            letterSpacing: cfg.subSpacing,
            textTransform: 'uppercase',
            color: 'var(--ink-500)',
            fontWeight: 500,
            whiteSpace: 'nowrap'
          }}>
            Φροντιστήριο&nbsp;&nbsp;Μέσης&nbsp;Εκπαίδευσης
          </div>
        </>
      )}
    </div>
  );
}
