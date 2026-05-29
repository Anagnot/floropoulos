/* Lightweight hash-based router. Works without any backend / SPA fallback. */

const ROUTES = [
  { path: "#/",              label: "Αρχική",        nav: false },
  { path: "#/frontistirio",  label: "Φροντιστήριο",  nav: true  },
  { path: "#/methodos",      label: "Μέθοδος",       nav: true  },
  { path: "#/tmimata",       label: "Τμήματα",       nav: true  },
  { path: "#/mathimata",     label: "Μαθήματα",      nav: true  },
  { path: "#/epikoinonia",   label: "Επικοινωνία",   nav: true  },
];

window.ROUTES = ROUTES;

function useHashRoute() {
  const [hash, setHash] = React.useState(() => window.location.hash || "#/");
  React.useEffect(() => {
    function onHash() {
      setHash(window.location.hash || "#/");
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    }
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return hash;
}

function RouterView() {
  const hash = useHashRoute();
  const route = ROUTES.find(r => r.path === hash) || ROUTES[0];

  let Page;
  switch (route.path) {
    case "#/frontistirio": Page = window.FrontistirioPage; break;
    case "#/methodos":     Page = window.MethodPage;       break;
    case "#/tmimata":      Page = window.ProgramsPage;     break;
    case "#/mathimata":    Page = window.LessonsPage;      break;
    case "#/epikoinonia":  Page = window.ContactPage;      break;
    default:               Page = window.HomePage;
  }

  return Page ? <Page /> : null;
}

function navigate(path) {
  if (window.location.hash === path) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    window.location.hash = path;
  }
}

window.useHashRoute = useHashRoute;
window.RouterView = RouterView;
window.navigate = navigate;
