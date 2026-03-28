'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'ESTA申請関連情報一覧', href: '/list-esta-application' },
    { label: 'サイト情報一覧', href: '/list-site-information' },
  ];
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
        <nav className="hidden md:flex gap-8">
          {navItems.map((l) => (
            <Link key={l.href} href={l.href} className="text-gray-200 hover:text-white text-sm font-medium transition-colors">{l.label}</Link>
          ))}
        </nav>
      </div>
      {open && (
        <div className="mobile-nav" onClick={() => setOpen(false)}>
          <button className="absolute top-4 right-4 text-white text-3xl" onClick={() => setOpen(false)}>✕</button>
          {navItems.map((l) => (
            <Link key={l.href} href={l.href} className="text-white text-xl font-medium" onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
