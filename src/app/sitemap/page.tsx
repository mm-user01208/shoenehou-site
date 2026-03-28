import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '',
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6 md:p-10">
      <Breadcrumb items={[{"label": "サイトマップ"}]} />
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-2 pb-3 border-b-2 border-[#c41e3a]">サイトマップ</h1>
        <p className="text-gray-700 leading-relaxed mb-4">当サイト内の各ページへのリンクを一覧で掲載しています。目的の情報へスムーズにアクセスできるよう、カテゴリー別に整理しています。</p>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-bold text-[#1a2744] mb-4">関連記事</h3>
          <div className="grid gap-2">
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#1a2744]">TOPページ</span></div>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)とは？事前入国審査制度を解説</p>
        <p className="text-gray-700 leading-relaxed mb-4">【記入例付き】ESTAの申請方法を解説</p>
        <p className="text-gray-700 leading-relaxed mb-4">出生地や住所の書き方を紹介</p>
        <p className="text-gray-700 leading-relaxed mb-4">米国内の連絡先情報の記入方法</p>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAの申請料金</p>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAの有効期限と再申請・確認方法</p>
        <p className="text-gray-700 leading-relaxed mb-4">公式ウェブサイトについて解説</p>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA申請方法と取得手順を徹底解説</p>
        <p className="text-gray-700 leading-relaxed mb-4">アプリのESTA申請方法</p>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA申請状況の確認方法</p>
        <p className="text-gray-700 leading-relaxed mb-4">グアム入国にESTAは必要？</p>
        <p className="text-gray-700 leading-relaxed mb-4">申請書記入
申請状況確認
お問い合わせ
個人情報保護方針
特定商取引法に基づく表記・運営者情報
コンテンツポリシー
利用規約
推奨ブラウザ</p>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#1a2744]">ESTA(エスタ)とは？事前入国審査制度を解説</span></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#1a2744]">【記入例付き】ESTAの申請方法を解説</span></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#1a2744]">出生地や住所の書き方を紹介</span></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#1a2744]">米国内の連絡先情報の記入方法</span></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#1a2744]">ESTAの申請料金</span></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#1a2744]">ESTAの有効期限と再申請・確認方法</span></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#1a2744]">公式ウェブサイトについて解説</span></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#1a2744]">ESTA申請方法と取得手順を徹底解説</span></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#1a2744]">アプリのESTA申請方法</span></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#1a2744]">ESTA申請状況の確認方法</span></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#1a2744]">グアム入国にESTAは必要？</span></div>
          </div>
        </div>
      </div>
    </article>
  );
}