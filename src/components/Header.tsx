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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-800">US ESTA Apply Website</span>
        </Link>
        <button className="md:hidden text-gray-600 text-2xl" onClick={() => setOpen(!open)} aria-label="メニュー">☰</button>
        <nav className="hidden md:flex gap-8">
          {navItems.map((l) => (
            <Link key={l.href} href={l.href} className="text-gray-600 hover:text-gray-900 text-sm font-medium">{l.label}</Link>
          ))}
        </nav>
      </div>
      {open && (
        <nav className="md:hidden border-t px-4 py-3 space-y-2 bg-white">
          {navItems.map((l) => (
            <Link key={l.href} href={l.href} className="block text-gray-600 text-sm py-1" onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
