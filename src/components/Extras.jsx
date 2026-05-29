import React from 'react';
import SectionHead from './SectionHead.jsx';

function IconSun(props) {
  return (
    <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" {...props}>
      <circle cx="16" cy="16" r="6" />
      <line x1="16" y1="2"  x2="16" y2="6" />
      <line x1="16" y1="26" x2="16" y2="30" />
      <line x1="2"  y1="16" x2="6"  y2="16" />
      <line x1="26" y1="16" x2="30" y2="16" />
      <line x1="6"  y1="6"  x2="9"  y2="9"  />
      <line x1="23" y1="23" x2="26" y2="26" />
      <line x1="26" y1="6"  x2="23" y2="9"  />
      <line x1="9"  y1="23" x2="6"  y2="26" />
    </svg>
  );
}

function IconDiamond(props) {
  return (
    <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="miter" {...props}>
      <polygon points="16,3 29,16 16,29 3,16" />
      <line x1="16" y1="3"  x2="16" y2="29" />
      <line x1="3"  y1="16" x2="29" y2="16" />
    </svg>
  );
}

function ExtraRow({ icon, title, body }) {
  return (
    <div className="extra-row" style={{
      display: 'grid',
      gridTemplateColumns: '64px 1fr',
      gap: 32,
      paddingTop: 48,
      paddingBottom: 48,
      borderBottom: '1px solid var(--rule)',
      alignItems: 'start'
    }}>
      <div style={{ color: 'var(--ink-900)', paddingTop: 6 }}>
        {icon}
      </div>
      <div>
        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 28,
          lineHeight: 1.25,
          letterSpacing: '-0.01em',
          fontWeight: 500,
          color: 'var(--ink-900)',
          margin: 0,
          marginBottom: 12
        }}>
          {title}
        </h3>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 16,
          lineHeight: 1.7,
          color: 'var(--ink-500)',
          margin: 0,
          maxWidth: '60ch'
        }}>
          {body}
        </p>
      </div>
    </div>
  );
}

export default function Extras() {
  return (
    <section id="extras">
      <div className="container">
        <SectionHead
          eyebrow="Επιπλέον"
          title={<>Όλα όσα μπορεί να<br />χρειαστεί ένας <span style={{ fontStyle: 'italic' }}>μαθητής.</span></>}
        />

        <div style={{ borderTop: '1px solid var(--rule)' }}>
          <ExtraRow
            icon={<IconSun />}
            title="Καλοκαιρινή προετοιμασία για τις Πανελλαδικές"
            body="Εντατικά τμήματα τους θερινούς μήνες για όσους θέλουν να μπουν στη χρονιά με πλεονέκτημα. Καλύπτουμε ύλη της νέας τάξης, ανατρέχουμε σε ενότητες που χρειάζονται εμπέδωση και δίνουμε διαγνωστικό test ώστε ο μαθητής να ξεκινήσει τον Σεπτέμβριο με καθαρή εικόνα."
          />
          <ExtraRow
            icon={<IconDiamond />}
            title="Ιδιαίτερα μαθήματα"
            body="Παραδίδονται και ιδιαίτερα σε όλα τα μαθήματα, για στοχευμένη υποστήριξη όπου χρειάζεται. Ιδανική λύση για ενίσχυση συγκεκριμένης ενότητας, ταχύρρυθμη ανάκτηση χαμένης ύλης ή προετοιμασία αποφοίτων με ιδιαίτερες απαιτήσεις."
          />
        </div>
      </div>
    </section>
  );
}
