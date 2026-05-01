import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'サイトマップ | US ESTA Apply Website',
};

const estaLinks = [
  { title: 'TOPページ', href: '/' },
  { title: 'ESTA(エスタ)とは？事前入国審査制度を解説', href: '/list-esta-application/esta' },
  { title: '【記入例付き】ESTAの申請方法を解説', href: '/list-esta-application/esta-flow' },
  { title: '出生地や住所の書き方を紹介', href: '/list-esta-application/place-of-birth' },
  { title: '米国内の連絡先情報の記入方法', href: '/us-contact-details' },
  { title: 'ESTAの申請料金', href: '/list-esta-application/fee' },
  { title: 'ESTAの有効期限と再申請・確認方法', href: '/list-esta-application/expiration-date' },
  { title: '公式ウェブサイトについて解説', href: '/list-esta-application/official-cbp' },
  { title: 'ESTA申請方法と取得手順を徹底解説', href: '/list-esta-application/cbp-flow' },
  { title: 'アプリのESTA申請方法', href: '/list-esta-application/application' },
  { title: 'ESTA申請状況の確認方法', href: '/list-esta-application/status-check' },
  { title: 'グアム入国にESTAは必要？', href: '/list-esta-application/guam' },
  { title: 'ESTA公式サイトと偽サイトの見分け方', href: '/list-esta-application/official-vs-fake' },
  { title: 'ESTA申請の住所・出生地・勤務先の書き方', href: '/list-esta-application/address-guide' },
  { title: 'ESTAのグループ申請・家族申請の方法', href: '/list-esta-application/group-family' },
  { title: 'ESTAとパスポートの関係', href: '/list-esta-application/passport' },
  { title: '子供・未成年のESTA申請方法', href: '/list-esta-application/children' },
  { title: 'ESTA申請が却下・拒否された場合の対処法', href: '/list-esta-application/denied' },
  { title: 'ハワイ旅行とESTA', href: '/list-esta-application/hawaii' },
  { title: 'アメリカ乗り継ぎ(トランジット)とESTA', href: '/list-esta-application/transit' },
  { title: 'ESTAの更新・延長方法', href: '/list-esta-application/renewal' },
  { title: 'ESTA申請の料金・費用ガイド', href: '/list-esta-application/cost' },
];

const siteLinks = [
  { title: '申請書記入', href: '/list-site-information/entry' },
  { title: '申請状況確認', href: '/list-site-information/status' },
  { title: 'お問い合わせ', href: '/list-site-information/contact' },
  { title: '個人情報保護方針', href: '/list-site-information/privacy-policy' },
  { title: '特定商取引法に基づく表記・運営者情報', href: '/list-site-information/aboutus' },
  { title: 'コンテンツポリシー', href: '/list-site-information/contents-policy' },
  { title: '利用規約', href: '/list-site-information/agreement' },
  { title: '推奨ブラウザ', href: '/list-site-information/browser' },
];

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6 md:p-10">
        <Breadcrumb items={[{"label": "サイトマップ"}]} />
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-2 pb-3 border-b-2 border-[#c41e3a]">サイトマップ</h1>
        <p className="text-gray-700 leading-relaxed mb-8">当サイト内の各ページへのリンクを一覧で掲載しています。目的の情報へスムーズにアクセスできるよう、カテゴリー別に整理しています。</p>

        <h2 className="text-lg font-bold text-[#1a2744] mb-4">ESTA申請関連情報</h2>
        <div className="grid gap-2 mb-10">
          {estaLinks.map((item) => (
            <Link key={item.href} href={item.href} className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors">
              <span className="text-[#c41e3a] text-xs">●</span>
              <span className="text-sm text-[#1a2744] hover:text-[#c41e3a] transition-colors">{item.title}</span>
            </Link>
          ))}
        </div>

        <h2 className="text-lg font-bold text-[#1a2744] mb-4">サイト情報</h2>
        <div className="grid gap-2">
          {siteLinks.map((item) => (
            <Link key={item.href} href={item.href} className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors">
              <span className="text-[#c41e3a] text-xs">●</span>
              <span className="text-sm text-[#1a2744] hover:text-[#c41e3a] transition-colors">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
