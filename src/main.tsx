import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// ── Smooth Anchor Scroll dengan Offset ───────────────────────
// Pakai Lenis scrollTo jika tersedia, fallback ke window.scrollTo
const NAV_HEIGHT = 72;

type LenisInstance = { scrollTo: (target: HTMLElement, opts: { offset: number; duration: number }) => void };

function smoothScrollTo(targetId: string) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const lenis = (window as Window & { __lenis?: LenisInstance }).__lenis;
  if (lenis) {
    lenis.scrollTo(el, { offset: -NAV_HEIGHT, duration: 1.4 });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }
}

document.addEventListener('click', (e) => {
  const anchor = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
  if (!anchor) return;
  const hash = anchor.getAttribute('href') ?? '';
  if (hash === '#' || hash === '') return;
  const id = hash.slice(1);
  if (!document.getElementById(id)) return;
  e.preventDefault();
  smoothScrollTo(id);
});

// ── Staggered Section Reveal ─────────────────────────────────
// Single global IntersectionObserver untuk semua [data-reveal] & [data-reveal-children]
function initRevealObserver() {
  const targets = document.querySelectorAll('[data-reveal], [data-reveal-children]');
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}

// Jalankan setelah React selesai render pertama kali
requestAnimationFrame(() => setTimeout(initRevealObserver, 100));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
