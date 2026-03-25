import Link from 'next/link';

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

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="max-w-5xl mx-auto px-4 py-14">
        <div className="text-center mb-10">
          <h3 className="font-bold text-xl mb-4">US ESTA Apply Website</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-3xl mx-auto mb-4">
            当サイトはESTA(エスタ)の申請代行サービスを提供するウェブサイトです。民間企業による運営であり、いかなる政府機関とも提携または関係はありません。電子渡航認証は、本サービスを利用せず公式サイトから直接申請することも可能です。
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
          <div>
            <h4 className="font-bold text-sm mb-4 text-gray-300">ESTA申請関連情報一覧</h4>
            <ul className="space-y-2">
              {estaLinks.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-gray-400 hover:text-white text-sm">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4 text-gray-300">サイト情報一覧</h4>
            <ul className="space-y-2">
              {siteLinks.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-gray-400 hover:text-white text-sm">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-xs">
          <p>© US ESTA Apply Website All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
