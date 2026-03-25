import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '',
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{"label": "サイトマップ"}]} />
        <h1 className="text-3xl font-bold text-gray-900 mb-6">サイトマップ</h1>
        <p className="text-gray-600 leading-relaxed mb-4">当サイト内の各ページへのリンクを一覧で掲載しています。目的の情報へスムーズにアクセスできるよう、カテゴリー別に整理しています。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">TOPページ</h2>
        <p className="text-gray-600 leading-relaxed mb-4">ESTA(エスタ)とは？事前入国審査制度を解説</p>
        <p className="text-gray-600 leading-relaxed mb-4">【記入例付き】ESTAの申請方法を解説</p>
        <p className="text-gray-600 leading-relaxed mb-4">出生地や住所の書き方を紹介</p>
        <p className="text-gray-600 leading-relaxed mb-4">米国内の連絡先情報の記入方法</p>
        <p className="text-gray-600 leading-relaxed mb-4">ESTAの申請料金</p>
        <p className="text-gray-600 leading-relaxed mb-4">ESTAの有効期限と再申請・確認方法</p>
        <p className="text-gray-600 leading-relaxed mb-4">公式ウェブサイトについて解説</p>
        <p className="text-gray-600 leading-relaxed mb-4">ESTA申請方法と取得手順を徹底解説</p>
        <p className="text-gray-600 leading-relaxed mb-4">アプリのESTA申請方法</p>
        <p className="text-gray-600 leading-relaxed mb-4">ESTA申請状況の確認方法</p>
        <p className="text-gray-600 leading-relaxed mb-4">グアム入国にESTAは必要？</p>
        <p className="text-gray-600 leading-relaxed mb-4">申請書記入
申請状況確認
お問い合わせ
個人情報保護方針
特定商取引法に基づく表記・運営者情報
コンテンツポリシー
利用規約
推奨ブラウザ</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">ESTA(エスタ)とは？事前入国審査制度を解説</h2>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">【記入例付き】ESTAの申請方法を解説</h2>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">出生地や住所の書き方を紹介</h2>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">米国内の連絡先情報の記入方法</h2>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">ESTAの申請料金</h2>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">ESTAの有効期限と再申請・確認方法</h2>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">公式ウェブサイトについて解説</h2>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">ESTA申請方法と取得手順を徹底解説</h2>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">アプリのESTA申請方法</h2>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">ESTA申請状況の確認方法</h2>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">グアム入国にESTAは必要？</h2>
    </div>
  );
}