function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const hash = (typeof window !== "undefined" && window.useHashRoute) ? window.useHashRoute() : "#/";

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer whenever hash changes
  React.useEffect(() => { setOpen(false); }, [hash]);

  const links = (window.ROUTES || []).filter(r => r.nav);

  const linkStyle = (active) => ({
    fontFamily: "var(--font-sans)",
    fontSize: 13,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: "var(--ink-900)",
    textDecoration: "none",
    fontWeight: 500,
    borderBottom: `1px solid ${active ? "var(--accent)" : "transparent"}`,
    paddingBottom: 2,
    transition: "border-color 200ms ease"
  });

  return (
    <header style={{
      borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
      background: "var(--paper)",
      position: "sticky", top: 0, zIndex: 30,
      transition: "border-color 200ms ease"
    }}>
      <div className="container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 20, paddingBottom: 20,
        gap: 32
      }}>
        <a href="#/" style={{ textDecoration: "none" }}>
          <Wordmark size="sm" />
        </a>

        {/* Desktop nav */}
        <nav className="nav-desktop" style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {links.map(l => {
            const active = hash === l.path;
            return (
              <a key={l.path}
                 href={l.path}
                 style={linkStyle(active)}
                 onMouseEnter={e => { if (!active) e.currentTarget.style.borderBottomColor = "var(--accent)"; }}
                 onMouseLeave={e => { if (!active) e.currentTarget.style.borderBottomColor = "transparent"; }}>
                {l.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className="nav-toggle"
          aria-label={open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
          style={{
            display: "none",
            background: "transparent",
            border: "1px solid var(--ink-900)",
            borderRadius: 2,
            padding: "10px 12px",
            cursor: "pointer",
            color: "var(--ink-900)"
          }}>
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <React.Fragment>
                <line x1="2" y1="2" x2="16" y2="12"/>
                <line x1="16" y1="2" x2="2" y2="12"/>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <line x1="1" y1="2" x2="17" y2="2"/>
                <line x1="1" y1="7" x2="17" y2="7"/>
                <line x1="1" y1="12" x2="17" y2="12"/>
              </React.Fragment>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="nav-mobile" style={{
          borderTop: "1px solid var(--rule)",
          background: "var(--paper)"
        }}>
          <div className="container" style={{ paddingTop: 16, paddingBottom: 24 }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {links.map(l => {
                const active = hash === l.path;
                return (
                  <li key={l.path} style={{ borderTop: "1px solid var(--rule)" }}>
                    <a href={l.path}
                       style={{ ...linkStyle(active), display: "block", padding: "16px 0", fontSize: 14 }}>
                      {l.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a href="#/epikoinonia"
               className="btn btn--primary"
               style={{ marginTop: 20, width: "100%" }}>
              Κλείστε ραντεβού γνωριμίας
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

window.Header = Header;
