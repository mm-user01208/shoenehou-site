import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '推奨ブラウザについて | US ESTA Apply Website',
  description: '本サイトを快適にご利用いただくため、推奨ブラウザをご案内しております。推奨環境以外では、一部機能が正しく動作しない場合があります。',
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{"label": "サイト情報一覧", "href": "/list-site-information"}, {"label": "推奨ブラウザについて"}]} />
        <h1 className="text-3xl font-bold text-gray-900 mb-6">推奨ブラウザ・推奨環境について</h1>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">推奨ブラウザ一覧</h2>
        <p className="text-gray-600 leading-relaxed mb-4">Google Chrome（最新版）</p>
        <p className="text-gray-600 leading-relaxed mb-4">Microsoft Edge（最新版）</p>
        <p className="text-gray-600 leading-relaxed mb-4">Safari（最新版）</p>
        <p className="text-gray-600 leading-relaxed mb-4">※ 常に最新版のご利用を推奨します。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">推奨環境</h2>
        <p className="text-gray-600 leading-relaxed mb-4">対応デバイス</p>
        <p className="text-gray-600 leading-relaxed mb-4">パソコン（Windows / macOS）</p>
        <p className="text-gray-600 leading-relaxed mb-4">スマートフォン（iOS / Android）</p>
        <p className="text-gray-600 leading-relaxed mb-4">推奨設定</p>
        <p className="text-gray-600 leading-relaxed mb-4">JavaScript：有効</p>
        <p className="text-gray-600 leading-relaxed mb-4">Cookie：有効</p>
        <p className="text-gray-600 leading-relaxed mb-4">ポップアップブロック：無効（当サイトのみ）</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">非推奨ブラウザ・環境</h2>
        <p className="text-gray-600 leading-relaxed mb-4">動作保証外の環境</p>
        <p className="text-gray-600 leading-relaxed mb-4">Internet Explorer</p>
        <p className="text-gray-600 leading-relaxed mb-4">古いバージョンのブラウザ</p>
        <p className="text-gray-600 leading-relaxed mb-4">推奨外のOS・独自ブラウザ</p>
        <p className="text-gray-600 leading-relaxed mb-4">※ 上記環境では正常に表示・動作しない場合があります。</p>
        <p className="text-gray-600 leading-relaxed mb-4">注意事項
推奨環境以外でのご利用による不具合については、当サイトでは責任を負いかねます。あらかじめご了承ください。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">動作環境に関する補足事項</h2>
        <p className="text-gray-600 leading-relaxed mb-4">表示が崩れる場合は、ブラウザのキャッシュクリアをお試しください</p>
        <p className="text-gray-600 leading-relaxed mb-4">セキュリティソフトや拡張機能により動作が制限される場合があります</p>
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