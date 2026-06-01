'use client';
import { useEffect } from 'react';

export default function ShellFloatingFab() {
  const HTML = `<div class="floating-cta "><button type="button" class="floating-cta__top " aria-label="ページ上部へ"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6" stroke-linecap="round" stroke-linejoin="round"></path></svg></button><a class="floating-cta__apply" aria-label="ESTA申請をはじめる" href="/list-site-information/entry"><span>✓</span><span>ESTA申請をはじめる</span></a></div>`;
  useEffect(() => {
    const cta = document.querySelector<HTMLDivElement>('.floating-cta');
    if (!cta) return;
    const topBtn = cta.querySelector<HTMLButtonElement>('.floating-cta__top');
    if (topBtn) {
      topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
    const onScroll = () => {
      const y = window.scrollY;
      if (topBtn) topBtn.classList.toggle('is-visible', y > 600);
      cta.classList.toggle('is-hidden', y < 200);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: HTML }} />;
}
