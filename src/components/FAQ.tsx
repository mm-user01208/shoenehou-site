'use client';
import { useState } from 'react';

type FAQItem = { q: string; a: string };

export default function FAQ({ items, title }: { items: FAQItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-10 text-center" style={{ color: '#1a2744', fontFamily: "'Noto Serif JP', serif" }}>
        {title || 'よくある質問'}
      </h2>
      <div className="max-w-3xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="faq-item">
            <button
              className="w-full px-5 py-5 text-left flex items-center justify-between gap-4"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="flex items-center gap-4">
                <span className="text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#c41e3a', color: 'white', fontSize: '0.75rem' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-medium" style={{ color: '#1a2744' }}>{item.q}</span>
              </span>
              <span className="text-xl flex-shrink-0" style={{ color: '#1a2744' }}>{openIndex === i ? '−' : '+'}</span>
            </button>
            <div className={`faq-answer ${openIndex === i ? 'open' : ''}`} style={{ padding: openIndex === i ? '0 1.25rem 1.25rem 3.75rem' : '0 1.25rem 0 3.75rem' }}>
              <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.a }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
