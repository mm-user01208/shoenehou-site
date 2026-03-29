import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '推奨ブラウザについて | US ESTA Apply Website',
  description: '本サイトを快適にご利用いただくため、推奨ブラウザをご案内しております。推奨環境以外では、一部機能が正しく動作しない場合があります。',
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6 md:p-10">
      <Breadcrumb items={[{"label": "サイト情報一覧", "href": "/list-site-information"}, {"label": "推奨ブラウザについて"}]} />
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-2 pb-3 border-b-2 border-[#c41e3a]">推奨ブラウザ・推奨環境について</h1>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-bold text-[#1a2744] mb-4">関連記事</h3>
          <div className="grid gap-2">
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#c41e3a] hover:underline">推奨ブラウザ一覧</span></div>
        <p className="text-gray-700 leading-relaxed mb-4">Google Chrome（最新版）</p>
        <p className="text-gray-700 leading-relaxed mb-4">Microsoft Edge（最新版）</p>
        <p className="text-gray-700 leading-relaxed mb-4">Safari（最新版）</p>
        <p className="text-gray-700 leading-relaxed mb-4">※ 常に最新版のご利用を推奨します。</p>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#c41e3a] hover:underline">推奨環境</span></div>
        <p className="text-gray-700 leading-relaxed mb-4">対応デバイス</p>
        <p className="text-gray-700 leading-relaxed mb-4">パソコン（Windows / macOS）</p>
        <p className="text-gray-700 leading-relaxed mb-4">スマートフォン（iOS / Android）</p>
        <p className="text-gray-700 leading-relaxed mb-4">推奨設定</p>
        <p className="text-gray-700 leading-relaxed mb-4">JavaScript：有効</p>
        <p className="text-gray-700 leading-relaxed mb-4">Cookie：有効</p>
        <p className="text-gray-700 leading-relaxed mb-4">ポップアップブロック：無効（当サイトのみ）</p>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#c41e3a] hover:underline">非推奨ブラウザ・環境</span></div>
        <p className="text-gray-700 leading-relaxed mb-4">動作保証外の環境</p>
        <p className="text-gray-700 leading-relaxed mb-4">Internet Explorer</p>
        <p className="text-gray-700 leading-relaxed mb-4">古いバージョンのブラウザ</p>
        <p className="text-gray-700 leading-relaxed mb-4">推奨外のOS・独自ブラウザ</p>
        <p className="text-gray-700 leading-relaxed mb-4">※ 上記環境では正常に表示・動作しない場合があります。</p>
        <p className="text-gray-700 leading-relaxed mb-4">注意事項
推奨環境以外でのご利用による不具合については、当サイトでは責任を負いかねます。あらかじめご了承ください。</p>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#c41e3a] hover:underline">動作環境に関する補足事項</span></div>
        <p className="text-gray-700 leading-relaxed mb-4">表示が崩れる場合は、ブラウザのキャッシュクリアをお試しください</p>
        <p className="text-gray-700 leading-relaxed mb-4">セキュリティソフトや拡張機能により動作が制限される場合があります</p>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#c41e3a] hover:underline">ESTA(エスタ)とは？事前入国審査制度を解説</span></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#c41e3a] hover:underline">【記入例付き】ESTAの申請方法を解説</span></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#c41e3a] hover:underline">出生地や住所の書き方を紹介</span></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#c41e3a] hover:underline">米国内の連絡先情報の記入方法</span></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#c41e3a] hover:underline">ESTAの申請料金</span></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#c41e3a] hover:underline">ESTAの有効期限と再申請・確認方法</span></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#c41e3a] hover:underline">公式ウェブサイトについて解説</span></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#c41e3a] hover:underline">ESTA申請方法と取得手順を徹底解説</span></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#c41e3a] hover:underline">アプリのESTA申請方法</span></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#c41e3a] hover:underline">ESTA申請状況の確認方法</span></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#c41e3a] hover:underline">グアム入国にESTAは必要？</span></div>
          </div>
        </div>
      </div>
    </article>
  );
}