import React, { useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { RouterView } from './router.jsx';

export default function App() {
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
    const onHash = () => setTimeout(tick, 50);
    window.addEventListener('hashchange', onHash);
    return () => {
      window.removeEventListener('hashchange', onHash);
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
    </>
  );
}
