import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ESTA(エスタ)の申請料金 | ESTA USA Entry',
  description: '当サイトではESTAの申請手続きの代行サービスを行います。当サイトにおける申請サービスの料金やお支払い方法、領収書の発行、キャンセルポリシーについて解説します。',
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6 md:p-10">
      <Breadcrumb items={[{"label": "ESTA申請関連情報一覧", "href": "/list-esta-application"}, {"label": "ESTA(エスタ)の申請料金"}]} />
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-2 pb-3 border-b-2 border-[#c41e3a]">ESTA(エスタ)の申請料金</h1>
        <div className="bg-[#f8fafc] border border-gray-200 rounded-lg p-5 my-6">
          <p className="text-base font-bold text-[#1a2744] mb-3 flex items-center gap-2"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>目次</p>
          <ul className="space-y-2 text-sm">
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><span>支払い時に利用可能なクレジットカード</span></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><span>申請料の内訳</span></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><span>領収書の発行方法</span></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><span>キャンセル方法について</span></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><span>当サイトの申請代行サービスについて</span></li>
          </ul>
        </div>
        <h3 className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">支払い時に利用可能なクレジットカード</h3>
        <h3 className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">申請料の内訳</h3>
        <p className="text-gray-700 leading-relaxed mb-4">当サイトにてESTA(エスタ)を申請される場合、申請手数料のお支払いが必要です。申請料金には、ESTAを管轄するDHS(米国国土安全保障省)への申請料に加え、当サイトでの申請代行サービス料が含まれます。
以下では、ESTA申請手数料(申請代行サービス料を含む)およびDHS(米国国土安全保障省)への申請料の内訳について解説します。</p>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA申請手数料の内訳</p>
        <p className="text-gray-700 leading-relaxed mb-4">DHS(米国国土安全保障省)申請手数料 ($40.27) ＋ 申請代行サービス手数料 = 24,200円(税込)</p>
        <p className="text-gray-700 leading-relaxed mb-4">DHS(Department of Homeland Security / 米国国土安全保障省)への申請手数料($40.27)の内訳</p>
        <p className="text-gray-700 leading-relaxed mb-4">Processing Fee / ESTA運用手数料($10.27)：
電子渡航認証システムESTAの申請手続き、システム管理にかかる費用</p>
        <p className="text-gray-700 leading-relaxed mb-4">Travel Promotion Fee / 旅行促進手数料($17)：
電子渡航認証システムESTAを利用して渡米する観光客の誘致にかかる費用</p>
        <p className="text-gray-700 leading-relaxed mb-4">General fund of the Treasury / 米国財務省一般基金への拠出分($13)：
電子渡航認証システムESTAの運営に関係し、アメリカ財務省の一般基金へ充当される費用</p>
        <p className="text-gray-700 leading-relaxed mb-4">なお、ESTAの申請が拒否された場合は、ESTA運用手数料($10.27)のみが請求されます。
料金はクレジットカードによる前払いとなり、申込が完了し「申請料お支払いページ」にて「今すぐ支払う」ボタンを押した時点で決済が行われます。
手数料のお支払いには、クレジットカード(Visa、MasterCard、JCB、American Express、Diners Club)のみご利用いただけます。申請情報の入力後にクレジットカード決済画面が表示されますので、フォームの案内に従って必要事項を正確にご入力ください。
お支払い方法の詳細については、「支払い方法解説」をご確認ください。</p>
        <h3 className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">領収書の発行方法</h3>
        <p className="text-gray-700 leading-relaxed mb-4">当サイトでは、ESTA申請料の領収書を PDF形式にて発行しております。
ご希望の場合は、お問い合わせフォームより、問い合わせ種別「領収書について」を選択し、氏名などの必要事項をご入力のうえ送信してください。</p>
        <p className="text-gray-700 leading-relaxed mb-4">内容を確認し、ご本人確認が完了次第、領収書をメールにてお送りいたします。
なお、領収書の宛名や但し書きにご指定がある場合は、あわせてご記載ください。</p>
        <h3 className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">キャンセル方法について</h3>
        <p className="text-gray-700 leading-relaxed mb-4">お客様からお預かりした情報をもとに、DHS（アメリカ合衆国国土安全保障省）のシステム上でESTA(エスタ)申請の登録を開始する前にキャンセルのご連絡をいただいた場合は、決済手数料900円のみをご負担いただき、差額の金額を返金させていただきます。
なお、適格性や国籍に関する質問などへのご回答内容によっては、申請手続き継続のために、メールにて追加のご質問をさせていただく場合があります。この場合、お客様からのご回答をいただくまで、申請手続きは一時保留とさせていただきます。また、当サイトからの追加質問に対し、2週間以内にご回答を確認できなかった場合は、申請のお申し込みをキャンセル扱いとさせていただきます。その際も、すでに頂戴している料金から決済手数料900円を差し引いた金額を返金いたします。
一方で、申請の登録が完了し、当該システムに申請状況が反映された後は、キャンセルおよび返金を承ることはできません。これは、申請状況が「認証保留中」の場合も同様です。DHS（アメリカ合衆国国土安全保障省）のシステム仕様上、申請後に申請内容や認証そのものを取り消すことはできません。</p>
        <h3 className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">当サイトの申請代行サービスについて</h3>
        <p className="text-gray-700 leading-relaxed mb-4">US ESTA Apply Website では、複雑なESTA申請手続きをお客様に代わって代行・サポートいたします。ESTAは、ビザ免除プログラム(VWP)の一環として、日本を含む42か国の市民が、ビザを取得せずに90日以内の観光・商用・乗り継ぎ目的でアメリカへ渡航する際に事前申請が必要な電子渡航認証制度です。</p>
        <p className="text-gray-700 leading-relaxed mb-4">サポート内容</p>
        <p className="text-gray-700 leading-relaxed mb-4">日本語表記の申請フォームで手続きが可能。申請結果も日本語のメールでご案内</p>
        <p className="text-gray-700 leading-relaxed mb-4">日本語による丁寧なアドバイスで、申請やお問い合わせを年中無休・24時間体制でサポート</p>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA申請時のエラーや米国CBP公式サイトのメンテナンス時にも対応可能</p>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA認証情報の紛失時には、申請ID等を再通知</p>
        <p className="text-gray-700 leading-relaxed mb-4">お名前・生年月日・当サイト発行の申請ID(33桁の英数字)で、申請状況の照会が可能</p>
        <p className="text-gray-700 leading-relaxed mb-4">申請内容に誤りがあった場合、1回まで無料で修正を承ります</p>
        <p className="text-gray-700 leading-relaxed mb-4">修正方法について</p>
        <p className="text-gray-700 leading-relaxed mb-4">氏名またはパスポート番号に誤りがある場合：
お問い合わせフォームより、氏名・メールアドレス・申請ID・修正内容をご入力のうえ送信してください。</p>
        <p className="text-gray-700 leading-relaxed mb-4">上記以外の内容に誤りがある場合：
お手数ですが、改めて当サイトのESTA申請フォームより再申請をお願いいたします。</p>
        <p className="text-gray-700 leading-relaxed mb-4">当サイトは、簡潔で分かりやすい申請フォームと記入例の充実が特長です。申請中の不明点やエラーにも、日本語で丁寧に対応いたします。ESTA申請に不安がある方は、ぜひ当サイトの申請代行サービスをご利用ください。</p>
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