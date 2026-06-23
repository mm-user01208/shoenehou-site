'use client';
import { useEffect } from 'react';

const INNER = `<div class="gnav__inner"><a class="gnav__logo" aria-label="US ESTA Apply Website Home" href="/"><span class="gnav__seal" aria-hidden="true"><img src="/img/logo-shield.png" alt="" width="50" height="50"/></span><span class="gnav__brand"><strong>US ESTA Apply Website</strong><small>Electronic System for Travel Authorization</small></span></a><nav class="gnav__menu"><a class="gnav__menu-link" href="/">HOME</a><a class="gnav__menu-link" href="/form/step1">申請をはじめる</a><a class="gnav__menu-link" href="/status/">申請状況の確認</a><a class="gnav__menu-link" href="/contact/">お問い合わせ</a><div class="gnav__dropdown gnav__dropdown--faq"><button type="button" class="gnav__menu-link gnav__dropdown-trigger">FAQ<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round"></path></svg></button><div class="gnav__dropdown-panel gnav__dropdown-panel--faq"><div class="gnav__dropdown-col"><a class="gnav__dropdown-category" href="/list-esta-application">ESTA申請関連情報一覧</a><a class="gnav__dropdown-link" href="https://shoenehou-online.jp">TOPページ</a><a class="gnav__dropdown-link" href="/list-esta-application/esta">ESTA(エスタ)とは？</a><a class="gnav__dropdown-link" href="/list-esta-application/esta-flow">ESTA(エスタ)の申請方法</a><a class="gnav__dropdown-link" href="/list-esta-application/place-of-birth">出生地や住所の書き方</a><a class="gnav__dropdown-link" href="/list-esta-application/us-contact-details">米国内の連絡先情報</a><a class="gnav__dropdown-link" href="/list-esta-application/fee">ESTA(エスタ)の申請料金</a><a class="gnav__dropdown-link" href="/list-esta-application/expiration-date">ESTA(エスタ)の有効期限</a><a class="gnav__dropdown-link" href="/list-esta-application/official-cbp">ESTA公式ウェブサイト</a><a class="gnav__dropdown-link" href="/list-esta-application/cbp-flow">ESTA申請方法と取得手順</a><a class="gnav__dropdown-link" href="/list-esta-application/application">アプリでのESTA申請</a><a class="gnav__dropdown-link" href="/list-esta-application/status-check">ESTA(エスタ)申請状況</a></div><div class="gnav__dropdown-col"><a class="gnav__dropdown-category" href="/list-esta-guide">ESTA申請ガイド一覧</a><a class="gnav__dropdown-link" href="/list-esta-guide/cost">ESTAの申請料金 公式比較</a><a class="gnav__dropdown-link" href="/list-esta-guide/address-guide">住所・出生地・勤務先ガイド</a><a class="gnav__dropdown-link" href="/list-esta-guide/upload">パスポート・顔写真のアップロード方法</a><a class="gnav__dropdown-link" href="/list-esta-guide/group-family">ESTAのグループ・家族申請</a><a class="gnav__dropdown-link" href="/list-esta-guide/children">未成年のESTA申請方法</a><a class="gnav__dropdown-link" href="/list-esta-guide/renewal">ESTAの更新・延長方法</a><a class="gnav__dropdown-link" href="/list-esta-guide/denied">却下・拒否された場合の対処法</a><a class="gnav__dropdown-link" href="/list-esta-guide/transit">アメリカ乗り継ぎでのESTA</a><a class="gnav__dropdown-link" href="/list-esta-guide/passport">ESTAとパスポートの関係</a><a class="gnav__dropdown-link" href="/list-esta-guide/official-vs-fake">公式サイトと偽サイトの見分け方</a><a class="gnav__dropdown-link" href="/list-esta-guide/hawaii">ハワイ入国にESTAは必要？</a><a class="gnav__dropdown-link" href="/list-esta-guide/guam">グアム入国にESTAは必要？</a></div><div class="gnav__dropdown-col"><a class="gnav__dropdown-category" href="/list-site-information">サイト情報一覧</a><a class="gnav__dropdown-link" href="/form/step1">申請をはじめる</a><a class="gnav__dropdown-link" href="/status/">申請状況の確認</a><a class="gnav__dropdown-link" href="/contact/">お問い合わせ</a><a class="gnav__dropdown-link" href="/list-site-information/privacy-policy">個人情報保護方針</a><a class="gnav__dropdown-link" href="/list-site-information/aboutus">特定商取引法に基づく表記</a><a class="gnav__dropdown-link" href="/list-site-information/contents-policy">コンテンツポリシー</a><a class="gnav__dropdown-link" href="/list-site-information/agreement">利用規約</a><a class="gnav__dropdown-link" href="/list-site-information/browser">推奨ブラウザ</a><a class="gnav__dropdown-link" href="/sitemap">サイトマップ</a></div></div></div><a class="gnav__cta" href="/form/step1">ESTA申請をはじめる</a></nav><button class="gnav__burger" type="button" aria-label="メニュー"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button></div>`;

export default function ShellHeader() {
  useEffect(() => {
    const burger = document.querySelector<HTMLButtonElement>('.gnav__burger');
    const menu = document.querySelector<HTMLElement>('.gnav__menu');
    if (!burger || !menu) return;
    const toggle = () => {
      const open = menu.classList.toggle('is-open');
      burger.classList.toggle('is-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    };
    const close = () => {
      menu.classList.remove('is-open');
      burger.classList.remove('is-open');
      document.body.style.overflow = '';
    };
    burger.addEventListener('click', toggle);
    // Close on link click in mobile
    const handleLink = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (window.innerWidth > 1180) return;
      // SP: カテゴリ名タップは遷移せずアコーディオン開閉
      const cat = t.closest('.gnav__dropdown-category') as HTMLElement | null;
      if (cat) {
        e.preventDefault();
        const col = cat.closest('.gnav__dropdown-col');
        if (col) col.classList.toggle('is-open');
        return;
      }
      if (t.closest('a')) close();
    };
    menu.addEventListener('click', handleLink);
    return () => {
      burger.removeEventListener('click', toggle);
      menu.removeEventListener('click', handleLink);
    };
  }, []);
  return <header className="gnav" dangerouslySetInnerHTML={{ __html: INNER }} />;
}
