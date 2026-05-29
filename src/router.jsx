import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage.jsx';
import FrontistirioPage from './pages/FrontistirioPage.jsx';
import MethodPage from './pages/MethodPage.jsx';
import ProgramsPage from './pages/ProgramsPage.jsx';
import LessonsPage from './pages/LessonsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

export const ROUTES = [
  { path: '#/',             label: 'Αρχική',       nav: false },
  { path: '#/frontistirio', label: 'Φροντιστήριο', nav: true  },
  { path: '#/methodos',     label: 'Μέθοδος',      nav: true  },
  { path: '#/tmimata',      label: 'Τμήματα',      nav: true  },
  { path: '#/mathimata',    label: 'Μαθήματα',     nav: true  },
  { path: '#/epikoinonia',  label: 'Επικοινωνία',  nav: true  },
];

export function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash || '#/');
  useEffect(() => {
    function onHash() {
      setHash(window.location.hash || '#/');
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    }
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return hash;
}

export function RouterView() {
  const hash = useHashRoute();
  const route = ROUTES.find(r => r.path === hash) || ROUTES[0];
  switch (route.path) {
    case '#/frontistirio': return <FrontistirioPage />;
    case '#/methodos':     return <MethodPage />;
    case '#/tmimata':      return <ProgramsPage />;
    case '#/mathimata':    return <LessonsPage />;
    case '#/epikoinonia':  return <ContactPage />;
    default:               return <HomePage />;
  }
}

export function navigate(path) {
  if (window.location.hash === path) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.location.hash = path;
  }
}
