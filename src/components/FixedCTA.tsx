import Link from 'next/link';

export default function FixedCTA() {
  return (
    <div className="fixed-cta">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <p className="text-xs sm:text-sm text-gray-300 font-medium">出発の3日前までにお済ませください。</p>
        <Link
          href="/list-site-information/entry"
          className="text-white font-bold py-3 px-8 rounded-lg text-sm sm:text-base transition-colors inline-flex items-center gap-2"
          style={{ background: '#c41e3a' }}
        >
          <span>✓</span>
          <span>ESTA申請をはじめる</span>
        </Link>
      </div>
    </div>
  );
}
