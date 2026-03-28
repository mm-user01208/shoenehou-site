import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記・運営者情報 | US ESTA Apply Website',
  description: 'ESTA USA Entryでは、お問い合わせは原則としてお問い合わせフォームからのみ受け付けております。ESTA申請に関する内容は正確性が求められるため、記録を残したうえで誤りのない対応を行うことを目的としています。',
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6 md:p-10">
      <Breadcrumb items={[{"label": "サイト情報一覧", "href": "/list-site-information"}, {"label": "特定商取引法に基づく表記・運営者情報"}]} />
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-2 pb-3 border-b-2 border-[#c41e3a]">特定商取引法に基づく表記・運営者情報</h1>
        <p className="text-gray-700 leading-relaxed mb-4">サイト名</p>
        <p className="text-gray-700 leading-relaxed mb-4">運営責任者</p>
        <p className="text-gray-700 leading-relaxed mb-4">大山 由美子</p>
        <p className="text-gray-700 leading-relaxed mb-4">所在地</p>
        <p className="text-gray-700 leading-relaxed mb-4">東京都港区港南2-3-1 大信秋山ビル</p>
        <p className="text-gray-700 leading-relaxed mb-4">メールアドレス</p>
        <p className="text-gray-700 leading-relaxed mb-4">info@usesta-apply.net</p>
        <p className="text-gray-700 leading-relaxed mb-4">お問い合わせ方法</p>
        <p className="text-gray-700 leading-relaxed mb-4">原則としてメールでの対応とさせていただいております。</p>
        <p className="text-gray-700 leading-relaxed mb-4">申請内容の確認や修正、キャンセルなど正確性が求められるご連絡につきましては、メールでのお問い合わせをお願いいたします。</p>
        <p className="text-gray-700 leading-relaxed mb-4">販売価格</p>
        <p className="text-gray-700 leading-relaxed mb-4">22,000円（税込24,200円）</p>
        <p className="text-gray-700 leading-relaxed mb-4">商品代金以外の必要料金</p>
        <p className="text-gray-700 leading-relaxed mb-4">記載の金額以外に追加費用は発生いたしません。</p>
        <p className="text-gray-700 leading-relaxed mb-4">受付時間</p>
        <p className="text-gray-700 leading-relaxed mb-4">申請のご依頼および各種お問い合わせは24時間受け付けております。</p>
        <p className="text-gray-700 leading-relaxed mb-4">申込み方法</p>
        <p className="text-gray-700 leading-relaxed mb-4">当サイト上の申請フォームよりお申し込みください。</p>
        <p className="text-gray-700 leading-relaxed mb-4">お支払い時期</p>
        <p className="text-gray-700 leading-relaxed mb-4">申請フォーム送信後、決済画面にて「今すぐ支払う」ボタンを押した時点でお支払いが確定します。料金はクレジットカードによる前払いとなります。</p>
        <p className="text-gray-700 leading-relaxed mb-4">お支払い方法</p>
        <p className="text-gray-700 leading-relaxed mb-4">クレジットカード</p>
        <p className="text-gray-700 leading-relaxed mb-4">(Visa、Master Card、JCB、American Express、Diners Club)</p>
        <p className="text-gray-700 leading-relaxed mb-4">サービス提供時期</p>
        <p className="text-gray-700 leading-relaxed mb-4">原則としてお申込み完了後、翌営業日以内にご案内いたします。</p>
        <p className="text-gray-700 leading-relaxed mb-4">ただし、申請内容の確認状況により最大72時間程度お時間をいただく場合があります。</p>
        <p className="text-gray-700 leading-relaxed mb-4">電話番号</p>
        <p className="text-gray-700 leading-relaxed mb-4">03-6899-5503</p>
        <p className="text-gray-700 leading-relaxed mb-4">サービス内容</p>
        <p className="text-gray-700 leading-relaxed mb-4">当サイトは、米国渡航に必要な電子渡航認証（ESTA）の申請手続きをサポートするサービスを提供しています。</p>
        <p className="text-gray-700 leading-relaxed mb-4">申請内容の入力補助や確認を行い、ESTA取得までをサポートします。</p>
        <p className="text-gray-700 leading-relaxed mb-4">英語での申請に不安がある方や、手続きに時間を割けない方に向けたサポートを目的としています。</p>
        <p className="text-gray-700 leading-relaxed mb-4">キャンセル・返金について</p>
        <p className="text-gray-700 leading-relaxed mb-4">お客様からお預かりした情報をもとに、米国国土安全保障省（DHS）のシステム上でESTA申請の登録作業を開始する前にキャンセルのご連絡をいただいた場合、決済手数料900円を差し引いた金額を返金いたします。</p>
        <p className="text-gray-700 leading-relaxed mb-4">申請内容の確認過程において、適格性や国籍等に関する追加確認が必要と判断された場合、メールにて追加質問を行うことがあります。当該質問に対するご回答をいただくまで、申請手続きを一時保留とする場合があります。</p>
        <p className="text-gray-700 leading-relaxed mb-4">当サイトからの追加確認のご連絡後、2週間を経過してもご返信が確認できない場合は、申込みをキャンセル扱いとし、決済手数料900円を差し引いた金額を返金いたします。</p>
        <p className="text-gray-700 leading-relaxed mb-4">なお、ESTA申請の登録が完了し、DHSシステム上に申請状況が反映された後は、理由の如何を問わずキャンセルおよび返金には応じられません。申請状況が「認証保留中」の場合も同様です。</p>
        <p className="text-gray-700 leading-relaxed mb-4">米国政府システムの仕様上、申請後に申請や認証自体を取り消すことはできません。</p>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-bold text-[#1a2744] mb-4">関連記事</h3>
          <div className="grid gap-2">
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