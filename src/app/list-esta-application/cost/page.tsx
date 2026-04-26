import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ESTA申請の料金はいくら？公式サイトの費用と代行サイトの違い【2026年】 | US ESTA Apply Website',
  description: 'ESTA申請の料金を徹底解説。公式サイトでの申請費用は$21(約3,200円)、代行サイトの相場は5,000〜15,000円です。支払い方法や代行サイトのメリットもご紹介します。',
  alternates: { canonical: 'https://shoenehou-online.jp/list-esta-application/cost/' },
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6 md:p-10">
      <Breadcrumb items={[{"label": "ESTA申請関連情報一覧", "href": "/list-esta-application"}, {"label": "ESTA申請の料金はいくら？公式サイトの費用と代行サイトの違い【2026年】"}]} />
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-2 pb-3 border-b-2 border-[#c41e3a]">ESTA申請の料金はいくら？
公式サイトの費用と代行サイトの違い【2026年】</h1>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)の申請には手数料がかかります。公式サイト(CBP)から直接申請する場合の料金は$21(約3,200円)ですが、日本語対応の代行サイトを利用する場合は別途サービス料が加算されるため、費用が異なります。本記事では、ESTA申請にかかる料金の内訳、代行サイトとの料金比較、支払い方法について詳しく解説します。</p>
        <div className="bg-[#f8fafc] border border-gray-200 rounded-lg p-5 my-6">
          <p className="text-base font-bold text-[#1a2744] mb-3 flex items-center gap-2"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>目次</p>
          <ul className="space-y-2 text-sm">
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-1" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">公式サイト(CBP)の申請料金</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-2" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">代行サイトの料金相場</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-3" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">代行サイトを利用するメリット</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-4" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">支払い方法について</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-5" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">為替レートの影響</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-6" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">よくある質問</a></li>
          </ul>
        </div>
        <h3 id="section-1" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">公式サイト(CBP)の申請料金</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)の公式申請サイトは、CBP(アメリカ合衆国税関・国境警備局)が運営する「ESTA Online Center」です。公式サイトからESTAを申請した場合の手数料は$21(米ドル)です。日本円に換算すると約3,200円前後となりますが、為替レートの変動により金額は多少前後します。</p>
        <p className="text-gray-700 leading-relaxed mb-4">この$21の内訳は、審査手数料(Processing Fee)の$4と、渡航認証手数料(Authorization Fee)の$17で構成されています。審査手数料の$4は、ESTA申請の審査結果に関わらず発生します。つまり、申請が承認された場合も拒否された場合も、$4は返金されません。一方、渡航認証手数料の$17は、ESTAが承認された場合にのみ課金されます。ESTAが拒否された場合は、審査手数料の$4のみが請求されます。</p>
        <p className="text-gray-700 leading-relaxed mb-4">なお、ESTAの申請料金は渡航者1名ごとに発生します。家族4人でアメリカに渡航する場合は、4名分の申請手数料として合計$84(約12,800円)が必要です。グループ申請を利用した場合でも、1名ごとの料金に変わりはありません。</p>
        <h3 id="section-2" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">代行サイトの料金相場</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA申請代行サイトとは、公式サイト(CBP)に代わってESTAの申請手続きを代行するサービスを提供するウェブサイトです。代行サイトの料金は、公式サイトの申請手数料に加えてサービス料(代行手数料)が上乗せされるため、公式サイトよりも高額になります。</p>
        <p className="text-gray-700 leading-relaxed mb-4">代行サイトの料金相場は、1名あたり5,000円～15,000円程度です。料金はサイトによって大きく異なりますが、一般的には以下のような価格帯に分かれています。</p>
        <p className="text-gray-700 leading-relaxed mb-4">5,000円～8,000円の価格帯：基本的な代行サービスを提供するサイトが多く、申請フォームの日本語対応や入力サポートが含まれます。メールでの問い合わせ対応が中心で、電話サポートは含まれない場合があります。</p>
        <p className="text-gray-700 leading-relaxed mb-4">8,000円～12,000円の価格帯：日本語での申請サポートに加え、入力内容の確認・チェックサービス、電話やチャットでのサポートが含まれることが一般的です。申請内容に不備があった場合の修正対応が含まれるサイトもあります。</p>
        <p className="text-gray-700 leading-relaxed mb-4">12,000円～15,000円の価格帯：手厚いサポートを提供するサイトで、申請から承認までの一貫したサポートが含まれます。急ぎの申請に対応する「特急サービス」や、24時間対応のカスタマーサポートが含まれる場合があります。</p>
        <h3 id="section-3" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">代行サイトを利用するメリット</h3>
        <p className="text-gray-700 leading-relaxed mb-4">代行サイトは公式サイトよりも料金が高くなりますが、以下のようなメリットがあります。英語が苦手な方や、申請手続きに不安がある方にとっては、代行サイトの利用が安心感につながる場合があります。</p>
        <p className="text-gray-700 leading-relaxed mb-4">日本語での完全対応：公式サイト(CBP)は基本的に英語で構成されています。日本語表示に切り替えることも可能ですが、翻訳が不自然な箇所や分かりにくい表現が含まれている場合があります。代行サイトでは、申請フォームが分かりやすい日本語で作成されているため、入力ミスのリスクを低減できます。</p>
        <p className="text-gray-700 leading-relaxed mb-4">入力内容の事前チェック：代行サイトでは、申請者が入力した情報をスタッフが事前にチェックするサービスが含まれていることがあります。パスポート番号や氏名のスペルなど、入力ミスが起きやすい項目を専門スタッフが確認するため、申請が拒否されるリスクを軽減できます。</p>
        <p className="text-gray-700 leading-relaxed mb-4">カスタマーサポート：申請中に疑問点や不明点があった場合に、日本語で問い合わせができるカスタマーサポートが利用できます。メールや電話、チャットなど、複数のサポートチャネルが用意されているサイトもあります。</p>
        <p className="text-gray-700 leading-relaxed mb-4">ただし、代行サイトはCBP(アメリカ合衆国税関・国境警備局)とは無関係の民間企業が運営しています。代行サイトを利用する場合は、信頼性の高いサイトを選ぶことが重要です。料金が極端に高いサイトや、公式サイトと紛らわしいデザインのサイトには注意してください。</p>
        <h3 id="section-4" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">支払い方法について</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAの申請手数料の支払いには、クレジットカードまたはPayPalが利用可能です。利用できるクレジットカードのブランドは以下のとおりです。</p>
        <p className="text-gray-700 leading-relaxed mb-4">Visa、MasterCard、JCB、American Express、Diners Clubの各ブランドが利用可能です。デビットカードやプリペイドカードについても、上記のブランドのロゴが付いているカードであれば使用できる場合がありますが、カードの種類や発行元によっては決済が承認されないケースもあります。</p>
        <p className="text-gray-700 leading-relaxed mb-4">なお、ESTA申請の支払いに使用するクレジットカードは、申請者本人名義である必要はありません。家族や同行者のカードでも支払いが可能です。グループ申請の場合は、代表者のクレジットカードですべての申請者の手数料をまとめて支払うことも可能です。</p>
        <p className="text-gray-700 leading-relaxed mb-4">PayPalを利用して支払う場合は、PayPalアカウントに登録済みの銀行口座またはクレジットカードから引き落としが行われます。PayPalアカウントをお持ちでない方は、事前にアカウントを作成しておく必要があります。</p>
        <h3 id="section-5" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">為替レートの影響</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAの公式申請手数料は$21(米ドル)で固定されていますが、日本円での支払い金額は為替レートの影響を受けます。クレジットカードで支払う場合、カード会社の為替レートが適用されるため、決済日の為替レートによって実際の請求金額が変動します。</p>
        <p className="text-gray-700 leading-relaxed mb-4">2026年4月時点の為替レートで換算すると、$21は約3,200円前後となります。ただし、円安が進んだ場合は支払い金額が増加し、円高の場合は減少します。例えば、1ドル=160円の場合は約3,360円、1ドル=140円の場合は約2,940円となります。</p>
        <p className="text-gray-700 leading-relaxed mb-4">また、クレジットカード会社によっては、海外取引に対して為替手数料(通常1.6%～2.5%程度)が別途加算される場合があります。この手数料はカード会社やカードの種類によって異なるため、正確な金額についてはご利用のカード会社にお問い合わせください。</p>
        <p className="text-gray-700 leading-relaxed mb-4">一方、代行サイトの場合は、料金が日本円で固定されているケースがほとんどです。為替レートの変動を気にせずに申請できる点は、代行サイトの利点の一つといえます。</p>
        <h3 id="section-6" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">よくある質問</h3>
        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">Q. ESTA申請の公式料金はいくらですか？</p>
            <p className="text-gray-700 leading-relaxed">公式サイト(CBP)からESTAを申請した場合の手数料は$21(米ドル)です。日本円に換算すると約3,200円前後ですが、為替レートの変動により金額は前後します。この料金は渡航者1名ごとに発生します。</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">Q. ESTA申請が拒否された場合でも料金はかかりますか？</p>
            <p className="text-gray-700 leading-relaxed">はい、申請が拒否された場合でも審査手数料の$4は返金されません。ただし、渡航認証手数料の$17は、ESTAが承認された場合にのみ課金されるため、拒否された場合は請求されません。</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">Q. 代行サイトと公式サイトの違いは何ですか？</p>
            <p className="text-gray-700 leading-relaxed">公式サイトはCBP(アメリカ合衆国税関・国境警備局)が直接運営しており、申請料金は$21です。代行サイトは民間企業が運営しており、公式の申請手数料に加えてサービス料が上乗せされるため、料金は5,000円～15,000円程度になります。代行サイトでは日本語サポートや入力チェックなどのサービスが含まれます。</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">Q. ESTA申請の支払いにデビットカードは使えますか？</p>
            <p className="text-gray-700 leading-relaxed">Visa、MasterCard、JCBなどのブランドロゴが付いたデビットカードであれば使用できる場合があります。ただし、カードの種類や発行元によっては決済が承認されないケースもあるため、クレジットカードの利用をおすすめします。PayPalでの支払いも可能です。</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">Q. 家族分のESTAをまとめて支払うことはできますか？</p>
            <p className="text-gray-700 leading-relaxed">はい、グループ申請を利用すれば、代表者のクレジットカードで家族全員分の申請手数料をまとめて支払うことが可能です。ESTA申請の支払いに使用するクレジットカードは、申請者本人名義でなくても利用できます。</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-bold text-[#1a2744] mb-4">関連記事</h3>
          <div className="grid gap-2">
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/fee" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">ESTAの申請料金</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/esta" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">ESTA(エスタ)とは？事前入国審査制度を解説</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/official-cbp" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">公式ウェブサイトについて解説</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/official-vs-fake" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">公式サイトと模倣サイトの見分け方</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/esta-flow" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">【記入例付き】ESTAの申請方法を解説</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/cbp-flow" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">ESTA申請方法と取得手順を徹底解説</Link></div>
          </div>
        </div>
      </div>
    </article>
  );
}
