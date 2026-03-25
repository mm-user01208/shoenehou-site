import Link from 'next/link';

export default function FixedCTA() {
  return (
    <div className="fixed-cta">
      <div className="max-w-4xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-3">
        <p className="text-sm text-gray-700 font-medium">出発の3日前までにお済ませください。</p>
        <Link
          href="/list-site-information/entry"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg text-sm transition-colors"
        >
          ESTA申請をはじめる
        </Link>
      </div>
    </div>
  );
}
