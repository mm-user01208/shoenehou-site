import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ESTA申請関連情報一覧 | US ESTA Apply Website',
  description: 'ESTA申請に関する要件や最新情報、注意点、申請手順、よくある質問を各ページでまとめています。渡航前に確認しておきたい重要なポイントを分かりやすく解説します。',
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6 md:p-10">
      <Breadcrumb items={[{"label": "ESTA申請関連情報一覧"}]} />
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-bold text-[#1a2744] mb-4">関連記事</h3>
          <div className="grid gap-2">
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#1a2744]">ESTA(エスタ)とは？事前入国審査制度を解説</span></div>
        <p className="text-gray-700 leading-relaxed mb-4">短期間の観光や商用を目的としてアメリカへ渡航する場合は、電子渡航認証ESTA(エスタ)の申請が必要です。</p>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#1a2744]">【記入例付き】ESTAの申請方法を解説</span></div>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAを申請するには、有効なパスポート、クレジットカード、メールアドレスが必要です。記入例を交えながら、申請方法を解説します。</p>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#1a2744]">ESTA申請時の出生地や住所の書き方を解説</span></div>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA申請時に求められる出生地（出生都市）および現住所の入力方法について、正しい記載例を用いて分かりやすくご案内します。</p>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#1a2744]">米国内の連絡先情報の記入方法</span></div>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA申請時に必要な米国内の連絡先(住所・電話番号)の記入方法について、記入例を交えて分かりやすく紹介します。</p>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#1a2744]">ESTA(エスタ)の申請料金</span></div>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA申請の際に必要となる手数料をはじめ、当サイトでのお支払い方法やサービスの料金、領収書の発行方法について詳しく解説しています。</p>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#1a2744]">ESTAの有効期限と再申請・確認の方法</span></div>
        <p className="text-gray-700 leading-relaxed mb-4">アメリカへ渡航する前にESTAの有効期限が切れている場合は、再申請が必要です。ESTAの再申請が必要となる場合や修正方法について解説します。</p>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#1a2744]">ESTA公式ウェブサイトについて解説</span></div>
        <p className="text-gray-700 leading-relaxed mb-4">CBP（米国税関・国境警備局）が運営するESTA申請の公式ウェブサイトについて、その役割や利用方法を詳しくわかりやすく解説します。</p>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#1a2744]">ESTA申請方法と取得手順を徹底解説</span></div>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAを管轄するCBP（米国税関・国境警備局）は、出発72時間前までの申請を推奨しています。必要な情報と申請手順を解説します。</p>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#1a2744]">アプリを使ったESTA申請方法を解説</span></div>
        <p className="text-gray-700 leading-relaxed mb-4">CBP（アメリカ合衆国税関・国境警備局）が提供する電子渡航認証システムESTAの公式アプリについて詳しく解説します。</p>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#1a2744]">ESTA申請状況の確認方法</span></div>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA申請後に申請状況と審査結果を確認する方法・手順を解説します。確認には姓名・生年月日・申請IDの入力が必要です</p>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><span className="text-sm text-[#1a2744]">グアム入国にESTAは必要？</span></div>
        <p className="text-gray-700 leading-relaxed mb-4">グアムまたは北マリアナ諸島への渡航では、ESTA(エスタ)の事前申請が必要な場合があります。ESTAの申請手順や、グアム入国時に必要な書類などについて解説します。</p>
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