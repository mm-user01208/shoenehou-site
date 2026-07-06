'use client';
import { useEffect } from 'react';

// .fade-up 要素を画面表示時に .is-in を付けて表示する（スクロール表示アニメ）。
// 重要: JSが何らかの理由で動かなくてもコンテンツが消えないよう、
//       IntersectionObserver 非対応や失敗時は全要素を即表示し、
//       さらに失敗時の最終保険として一定時間後に全要素を表示する。
export default function ShellReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.fade-up'));
    if (els.length === 0) return;
    const revealAll = () => els.forEach((e) => e.classList.add('is-in'));

    if (!('IntersectionObserver' in window)) {
      revealAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('is-in');
            io.unobserve(en.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
    );
    els.forEach((e) => io.observe(e));

    // 最終保険: 2.5秒後に未表示のものを必ず表示（IOが取りこぼしてもコンテンツを隠さない）
    const safety = window.setTimeout(revealAll, 2500);

    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, []);
  return null;
}
