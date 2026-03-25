import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ESTA申請関連情報一覧 | US ESTA Apply Website',
  description: 'ESTA申請に関する要件や最新情報、注意点、申請手順、よくある質問を各ページでまとめています。渡航前に確認しておきたい重要なポイントを分かりやすく解説します。',
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{"label": "ESTA申請関連情報一覧"}]} />
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">ESTA(エスタ)とは？事前入国審査制度を解説</h2>
        <p className="text-gray-600 leading-relaxed mb-4">短期間の観光や商用を目的としてアメリカへ渡航する場合は、電子渡航認証ESTA(エスタ)の申請が必要です。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">【記入例付き】ESTAの申請方法を解説</h2>
        <p className="text-gray-600 leading-relaxed mb-4">ESTAを申請するには、有効なパスポート、クレジットカード、メールアドレスが必要です。記入例を交えながら、申請方法を解説します。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">ESTA申請時の出生地や住所の書き方を解説</h2>
        <p className="text-gray-600 leading-relaxed mb-4">ESTA申請時に求められる出生地（出生都市）および現住所の入力方法について、正しい記載例を用いて分かりやすくご案内します。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">米国内の連絡先情報の記入方法</h2>
        <p className="text-gray-600 leading-relaxed mb-4">ESTA申請時に必要な米国内の連絡先(住所・電話番号)の記入方法について、記入例を交えて分かりやすく紹介します。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">ESTA(エスタ)の申請料金</h2>
        <p className="text-gray-600 leading-relaxed mb-4">ESTA申請の際に必要となる手数料をはじめ、当サイトでのお支払い方法やサービスの料金、領収書の発行方法について詳しく解説しています。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">ESTAの有効期限と再申請・確認の方法</h2>
        <p className="text-gray-600 leading-relaxed mb-4">アメリカへ渡航する前にESTAの有効期限が切れている場合は、再申請が必要です。ESTAの再申請が必要となる場合や修正方法について解説します。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">ESTA公式ウェブサイトについて解説</h2>
        <p className="text-gray-600 leading-relaxed mb-4">CBP（米国税関・国境警備局）が運営するESTA申請の公式ウェブサイトについて、その役割や利用方法を詳しくわかりやすく解説します。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">ESTA申請方法と取得手順を徹底解説</h2>
        <p className="text-gray-600 leading-relaxed mb-4">ESTAを管轄するCBP（米国税関・国境警備局）は、出発72時間前までの申請を推奨しています。必要な情報と申請手順を解説します。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">アプリを使ったESTA申請方法を解説</h2>
        <p className="text-gray-600 leading-relaxed mb-4">CBP（アメリカ合衆国税関・国境警備局）が提供する電子渡航認証システムESTAの公式アプリについて詳しく解説します。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">ESTA申請状況の確認方法</h2>
        <p className="text-gray-600 leading-relaxed mb-4">ESTA申請後に申請状況と審査結果を確認する方法・手順を解説します。確認には姓名・生年月日・申請IDの入力が必要です</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">グアム入国にESTAは必要？</h2>
        <p className="text-gray-600 leading-relaxed mb-4">グアムまたは北マリアナ諸島への渡航では、ESTA(エスタ)の事前申請が必要な場合があります。ESTAの申請手順や、グアム入国時に必要な書類などについて解説します。</p>
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