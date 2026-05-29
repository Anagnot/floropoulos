import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage.jsx';
import FrontistirioPage from './pages/FrontistirioPage.jsx';
import MethodPage from './pages/MethodPage.jsx';
import ProgramsPage from './pages/ProgramsPage.jsx';
import LessonsPage from './pages/LessonsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

export const ROUTES = [
  { path: '/',             label: 'Αρχική',       nav: false },
  { path: '/frontistirio', label: 'Φροντιστήριο', nav: true  },
  { path: '/methodos',     label: 'Μέθοδος',      nav: true  },
  { path: '/tmimata',      label: 'Τμήματα',      nav: true  },
  { path: '/mathimata',    label: 'Μαθήματα',     nav: true  },
  { path: '/epikoinonia',  label: 'Επικοινωνία',  nav: true  },
];

function currentPath() {
  const p = window.location.pathname || '/';
  return p === '' ? '/' : p;
}

export function useHashRoute() {
  const [path, setPath] = useState(() => currentPath());
  useEffect(() => {
    function onPop() {
      setPath(currentPath());
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    }
    window.addEventListener('popstate', onPop);
    window.addEventListener('floropoulos:navigate', onPop);
    return () => {
      window.removeEventListener('popstate', onPop);
      window.removeEventListener('floropoulos:navigate', onPop);
    };
  }, []);
  return path;
}

export function RouterView() {
  const path = useHashRoute();
  const route = ROUTES.find(r => r.path === path) || ROUTES[0];
  switch (route.path) {
    case '/frontistirio': return <FrontistirioPage />;
    case '/methodos':     return <MethodPage />;
    case '/tmimata':      return <ProgramsPage />;
    case '/mathimata':    return <LessonsPage />;
    case '/epikoinonia':  return <ContactPage />;
    default:              return <HomePage />;
  }
}

export function navigate(path) {
  if (window.location.pathname === path) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  window.history.pushState({}, '', path);
  window.dispatchEvent(new Event('floropoulos:navigate'));
}
