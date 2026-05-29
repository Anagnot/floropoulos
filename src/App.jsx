import React, { useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import CookieBanner from './components/CookieBanner.jsx';
import BackToTop from './components/BackToTop.jsx';
import ContactPopup from './components/ContactPopup.jsx';
import { RouterView, navigate, ROUTES } from './router.jsx';

const KNOWN_PATHS = new Set(ROUTES.map(r => r.path));

export default function App() {
  useEffect(() => {
    if (window.location.hash && window.location.hash.startsWith('#/')) {
      const target = window.location.hash.slice(1) || '/';
      const clean = target.startsWith('/') ? target : `/${target}`;
      window.history.replaceState({}, '', clean);
      window.dispatchEvent(new Event('floropoulos:navigate'));
    }
  }, []);

  useEffect(() => {
    function onClick(e) {
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest && e.target.closest('a');
      if (!a) return;
      if (a.target && a.target !== '' && a.target !== '_self') return;
      if (a.hasAttribute('download')) return;
      const href = a.getAttribute('href');
      if (!href) return;
      if (!href.startsWith('/') || href.startsWith('//')) return;
      const url = new URL(a.href, window.location.origin);
      if (url.origin !== window.location.origin) return;
      const path = url.pathname;
      if (!KNOWN_PATHS.has(path)) return;
      e.preventDefault();
      navigate(path);
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    const tick = () =>
      document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => obs.observe(el));
    tick();
    const onNav = () => setTimeout(tick, 50);
    window.addEventListener('floropoulos:navigate', onNav);
    window.addEventListener('popstate', onNav);
    return () => {
      window.removeEventListener('floropoulos:navigate', onNav);
      window.removeEventListener('popstate', onNav);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <RouterView />
      </main>
      <Footer />
      <BackToTop />
      <ContactPopup />
      <CookieBanner />
    </>
  );
}
