import React from 'react';

export default function PageHero({ eyebrow, title, intro, image, imageAlt }) {
  const hasImage = !!image;

  return (
    <section className={`page-hero${hasImage ? ' page-hero--image' : ''}`} style={{
      position: 'relative',
      paddingTop: hasImage ? 'clamp(120px, 16vw, 220px)' : 'clamp(64px, 9vw, 128px)',
      paddingBottom: hasImage ? 'clamp(120px, 16vw, 220px)' : 'clamp(56px, 8vw, 96px)',
      background: hasImage ? 'var(--ink-900)' : 'var(--paper)',
      color: hasImage ? 'var(--paper)' : 'var(--ink-900)',
      overflow: 'hidden',
      borderTop: 'none'
    }}>
      {hasImage && (
        <>
          <img
            src={image}
            alt={imageAlt || ''}
            loading="eager"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              opacity: 0.55
            }}
          />
          <div aria-hidden="true" style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(11,31,58,0.88) 0%, rgba(11,31,58,0.62) 55%, rgba(11,31,58,0.82) 100%)'
          }} />
        </>
      )}

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="eyebrow eyebrow-rule"
          style={{
            marginBottom: 28,
            color: hasImage ? 'var(--accent-soft)' : undefined
          }}
        >
          {eyebrow}
        </div>
        <h1 className="h-1" style={{
          fontSize: 'clamp(40px, 6vw, 84px)',
          lineHeight: 1.02,
          letterSpacing: '-0.025em',
          fontWeight: 600,
          color: hasImage ? 'var(--paper)' : 'var(--ink-900)',
          margin: 0,
          maxWidth: '22ch'
        }}>
          {title}
        </h1>
        {intro && (
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(17px, 1.6vw, 20px)',
            lineHeight: 1.65,
            color: hasImage ? 'rgba(250, 247, 242, 0.82)' : 'var(--ink-500)',
            maxWidth: '58ch',
            margin: 0,
            marginTop: 28
          }}>
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
