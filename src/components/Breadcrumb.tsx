import Link from 'next/link';

type BreadcrumbItem = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="bg-[#f0f4f8] py-3 px-4 -mx-6 md:-mx-10 mb-8 rounded-t-lg" aria-label="パンくずリスト">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-gray-500">
        <li><Link href="/" className="hover:text-[#1a2744] transition-colors">HOME</Link></li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <svg className="w-3 h-3 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            {item.href ? (
              <Link href={item.href} className="hover:text-[#1a2744] transition-colors">{item.label}</Link>
            ) : (
              <span className="text-gray-600">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
