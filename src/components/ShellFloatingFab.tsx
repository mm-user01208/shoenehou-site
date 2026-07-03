'use client';
import { useEffect } from 'react';

export default function ShellFloatingFab() {
  const HTML = `<div class="floating-cta "><button type="button" class="floating-cta__top " aria-label="ページ上部へ"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6" stroke-linecap="round" stroke-linejoin="round"></path></svg></button><a class="floating-cta__apply floating-cta__apply--2line" aria-label="ESTA申請をはじめる" href="/form/step1"><span class="fca-sub">アメリカ入国前に必須の事前手続き</span><span class="fca-main"><span>ESTA申請をはじめる</span><span class="fca-arrow">→</span></span></a></div>`;
  useEffect(() => {
    const cta = document.querySelector<HTMLDivElement>('.floating-cta');
    if (!cta) return;
    const topBtn = cta.querySelector<HTMLButtonElement>('.floating-cta__top');
    if (topBtn) {
      topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
    const isTopPage = window.location.pathname === '/' || window.location.pathname === '';
    const heroCta = document.querySelector<HTMLElement>('.hero__cta');
    const onScroll = () => {
      const y = window.scrollY;
      if (topBtn) topBtn.classList.toggle('is-visible', y > 600);
      // topページ: ヒーロー内CVボタンが画面から完全に見えなくなったらフローティング表示。
      // それ以外のページ: ページ表示時から常時表示。
      if (isTopPage && heroCta) {
        const r = heroCta.getBoundingClientRect();
        cta.classList.toggle('is-hidden', r.bottom > 0);
      } else {
        cta.classList.remove('is-hidden');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: HTML }} />;
}
