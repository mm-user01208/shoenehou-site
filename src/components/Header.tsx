'use client';
import Link from 'next/link';
import { useState } from 'react';

const estaLinks = [
  { label: 'ESTA(エスタ)とは？', href: '/list-esta-application/esta' },
  { label: 'ESTA(エスタ)の申請方法', href: '/list-esta-application/esta-flow' },
  { label: '出生地や住所の書き方', href: '/list-esta-application/place-of-birth' },
  { label: '米国内の連絡先情報', href: '/us-contact-details' },
  { label: 'ESTA(エスタ)の申請料金', href: '/list-esta-application/fee' },
  { label: 'ESTA(エスタ)の有効期限', href: '/list-esta-application/expiration-date' },
  { label: 'ESTA公式ウェブサイト', href: '/list-esta-application/official-cbp' },
  { label: 'ESTA申請方法と取得手順', href: '/list-esta-application/cbp-flow' },
  { label: 'アプリでのESTA申請', href: '/list-esta-application/application' },
  { label: 'ESTA(エスタ)申請状況', href: '/list-esta-application/status-check' },
  { label: 'グアム入国にESTAは必要？', href: '/list-esta-application/guam' },
];

const siteLinks = [
  { label: 'ESTA申請書記入', href: '/list-site-information/entry' },
  { label: '申請状況確認', href: '/list-site-information/status' },
  { label: 'お問い合わせ', href: '/list-site-information/contact' },
  { label: '個人情報保護方針', href: '/list-site-information/privacy-policy' },
  { label: '特定商取引法に基づく表記', href: '/list-site-information/aboutus' },
  { label: 'コンテンツポリシー', href: '/list-site-information/contents-policy' },
  { label: '利用規約', href: '/list-site-information/agreement' },
  { label: '推奨ブラウザ', href: '/list-site-information/browser' },
  { label: 'サイトマップ', href: '/sitemap' },
];

function DropdownItem({ label, href, subLinks }: { label: string; href: string; subLinks: { label: string; href: string }[] }) {
  return (
    <div className="relative group">
      <Link href={href} className="text-gray-200 hover:text-white text-sm font-medium transition-colors flex items-center gap-1">
        {label}
        <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </Link>
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="bg-white rounded-lg shadow-xl py-2 min-w-[280px] max-h-[70vh] overflow-y-auto">
          {subLinks.map((l) => (
            <Link key={l.href} href={l.href} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c41e3a] transition-colors whitespace-nowrap">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [estaOpen, setEstaOpen] = useState(false);
  const [siteOpen, setSiteOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50" style={{ background: '#1a2744' }}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-bold text-white tracking-wide" style={{ fontFamily: "'Noto Serif JP', serif" }}>US ESTA Apply Website</span>
        </Link>
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="メニュー"
        >
          {open ? '✕' : '☰'}
        </button>
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-gray-200 hover:text-white text-sm font-medium transition-colors">HOME</Link>
          <DropdownItem label="ESTA申請関連情報一覧" href="/list-esta-application" subLinks={estaLinks} />
          <DropdownItem label="サイト情報一覧" href="/list-site-information" subLinks={siteLinks} />
        </nav>
      </div>
      {open && (
        <div className="mobile-nav" onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
          <button className="absolute top-4 right-4 text-white text-3xl" onClick={() => setOpen(false)}>✕</button>
          <Link href="/" className="text-white text-xl font-medium" onClick={() => setOpen(false)}>HOME</Link>
          
          <div>
            <button className="text-white text-xl font-medium flex items-center gap-2" onClick={() => setEstaOpen(!estaOpen)}>
              ESTA申請関連情報一覧
              <span className="text-sm">{estaOpen ? '▲' : '▼'}</span>
            </button>
            {estaOpen && (
              <div className="mt-2 ml-4 space-y-2">
                {estaLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="block text-gray-300 text-base" onClick={() => setOpen(false)}>{l.label}</Link>
                ))}
              </div>
            )}
          </div>
          
          <div>
            <button className="text-white text-xl font-medium flex items-center gap-2" onClick={() => setSiteOpen(!siteOpen)}>
              サイト情報一覧
              <span className="text-sm">{siteOpen ? '▲' : '▼'}</span>
            </button>
            {siteOpen && (
              <div className="mt-2 ml-4 space-y-2">
                {siteLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="block text-gray-300 text-base" onClick={() => setOpen(false)}>{l.label}</Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
