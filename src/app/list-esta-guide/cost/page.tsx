import type { Metadata } from 'next';
import { JsonLd, pageJsonLd, seoMetadata } from '@/lib/seo';

const PAGE_PATH = '/list-esta-guide/cost/';
const PAGE_TITLE = 'ESTA申請の料金はいくら？公式サイトの費用と代行サイトの違い【2026年】 | US ESTA Apply Website';
const PAGE_DESCRIPTION = 'ESTA申請の料金を徹底解説。公式サイトでの申請費用は$21(約3,200円)、代行サイトの相場は5,000〜15,000円です。支払い方法や代行サイトのメリットもご紹介します。';

export const metadata: Metadata = seoMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const PAGE_JSON_LD = pageJsonLd({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const BODY_HTML = `
<section class="article-hero">
  <div class="article-hero__inner">
    <nav class="crumb" aria-label="パンくず">
      <a href="/">HOME</a><span>›</span>
      <a href="/list-esta-guide">ESTA申請ガイド一覧</a><span>›</span>
      <em>ESTA申請の料金はいくら？公式サイトの費用と代行サイトの違い【2026年】</em>
    </nav>
    <p class="article__eyebrow">Application Fee Comparison</p>
    <h1 class="article__title">ESTA申請の料金はいくら？公式サイトの費用と代行サイトの違い【2026年】</h1>
    <p class="article__lede">ESTA(エスタ)の申請には手数料がかかります。公式サイト(CBP)から直接申請する場合の料金は$21(約3,200円)ですが、日本語対応の代行サイトを利用する場合は別途サービス料が加算されるため、費用が異なります。本記事では、ESTA申請にかかる料金の内訳、代行サイトとの料金比較、支払い方法について詳しく解説します。</p>
  </div>
</section>

<section class="article-main">
  <div class="article-main__inner">
    <aside class="toc">
      <p class="toc__head">目次</p>
      <ol>
        <li><a href="#sec-01">公式サイト(CBP)の申請料金</a></li>
        <li><a href="#sec-02">代行サイトの料金相場</a></li>
        <li><a href="#sec-03">代行サイトを利用するメリット</a></li>
        <li><a href="#sec-04">支払い方法について</a></li>
        <li><a href="#sec-05">為替レートの影響</a></li>
        <li><a href="#sec-06">よくある質問</a></li>
      </ol>
    </aside>

    <article class="article-body">

      <section id="sec-01" class="fade-up">
        <h2>公式サイト(CBP)の申請料金</h2>
        <p>ESTA(エスタ)の公式申請サイトは、CBP(アメリカ合衆国税関・国境警備局)が運営する「ESTA Online Center」です。公式サイトからESTAを申請した場合の手数料は$21(米ドル)です。日本円に換算すると約3,200円前後となりますが、為替レートの変動により金額は多少前後します。</p>
        <p>この$21の内訳は、審査手数料(Processing Fee)の$4と、渡航認証手数料(Authorization Fee)の$17で構成されています。審査手数料の$4は、ESTA申請の審査結果に関わらず発生します。つまり、申請が承認された場合も拒否された場合も、$4は返金されません。一方、渡航認証手数料の$17は、ESTAが承認された場合にのみ課金されます。ESTAが拒否された場合は、審査手数料の$4のみが請求されます。</p>
        <p>なお、ESTAの申請料金は渡航者1名ごとに発生します。家族4人でアメリカに渡航する場合は、4名分の申請手数料として合計$84(約12,800円)が必要です。グループ申請を利用した場合でも、1名ごとの料金に変わりはありません。</p>
      </section>

      <section id="sec-02" class="fade-up">
        <h2>代行サイトの料金相場</h2>
        <p>ESTA申請代行サイトとは、公式サイト(CBP)に代わってESTAの申請手続きを代行するサービスを提供するウェブサイトです。代行サイトの料金は、公式サイトの申請手数料に加えてサービス料(代行手数料)が上乗せされるため、公式サイトよりも高額になります。</p>
        <p>代行サイトの料金相場は、1名あたり5,000円〜15,000円程度です。料金はサイトによって大きく異なりますが、一般的には以下のような価格帯に分かれています。</p>
        <p>5,000円〜8,000円の価格帯：基本的な代行サービスを提供するサイトが多く、申請フォームの日本語対応や入力サポートが含まれます。メールでの問い合わせ対応が中心で、電話サポートは含まれない場合があります。</p>
        <p>8,000円〜12,000円の価格帯：日本語での申請サポートに加え、入力内容の確認・チェックサービス、電話やチャットでのサポートが含まれることが一般的です。申請内容に不備があった場合の修正対応が含まれるサイトもあります。</p>
        <p>12,000円〜15,000円の価格帯：手厚いサポートを提供するサイトで、申請から承認までの一貫したサポートが含まれます。急ぎの申請に対応する「特急サービス」や、24時間対応のカスタマーサポートが含まれる場合があります。</p>
      </section>

      <section id="sec-03" class="fade-up">
        <h2>代行サイトを利用するメリット</h2>
        <p>代行サイトは公式サイトよりも料金が高くなりますが、以下のようなメリットがあります。英語が苦手な方や、申請手続きに不安がある方にとっては、代行サイトの利用が安心感につながる場合があります。</p>
        <p>日本語での完全対応：公式サイト(CBP)は基本的に英語で構成されています。日本語表示に切り替えることも可能ですが、翻訳が不自然な箇所や分かりにくい表現が含まれている場合があります。代行サイトでは、申請フォームが分かりやすい日本語で作成されているため、入力ミスのリスクを低減できます。</p>
        <p>入力内容の事前チェック：代行サイトでは、申請者が入力した情報をスタッフが事前にチェックするサービスが含まれていることがあります。パスポート番号や氏名のスペルなど、入力ミスが起きやすい項目を専門スタッフが確認するため、申請が拒否されるリスクを軽減できます。</p>
        <p>カスタマーサポート：申請中に疑問点や不明点があった場合に、日本語で問い合わせができるカスタマーサポートが利用できます。メールや電話、チャットなど、複数のサポートチャネルが用意されているサイトもあります。</p>
        <p>ただし、代行サイトはCBP(アメリカ合衆国税関・国境警備局)とは無関係の民間企業が運営しています。代行サイトを利用する場合は、信頼性の高いサイトを選ぶことが重要です。料金が極端に高いサイトや、公式サイトと紛らわしいデザインのサイトには注意してください。</p>
      </section>

      <section id="sec-04" class="fade-up">
        <h2>支払い方法について</h2>
        <p>ESTAの申請手数料の支払いには、クレジットカードまたはPayPalが利用可能です。利用できるクレジットカードのブランドは以下のとおりです。</p>
        <p>Visa、MasterCard、JCB、American Express、Diners Clubの各ブランドが利用可能です。デビットカードやプリペイドカードについても、上記のブランドのロゴが付いているカードであれば使用できる場合がありますが、カードの種類や発行元によっては決済が承認されないケースもあります。</p>
        <p>なお、ESTA申請の支払いに使用するクレジットカードは、申請者本人名義である必要はありません。家族や同行者のカードでも支払いが可能です。グループ申請の場合は、代表者のクレジットカードですべての申請者の手数料をまとめて支払うことも可能です。</p>
        <p>PayPalを利用して支払う場合は、PayPalアカウントに登録済みの銀行口座またはクレジットカードから引き落としが行われます。PayPalアカウントをお持ちでない方は、事前にアカウントを作成しておく必要があります。</p>
      </section>

      <section id="sec-05" class="fade-up">
        <h2>為替レートの影響</h2>
        <p>ESTAの公式申請手数料は$21(米ドル)で固定されていますが、日本円での支払い金額は為替レートの影響を受けます。クレジットカードで支払う場合、カード会社の為替レートが適用されるため、決済日の為替レートによって実際の請求金額が変動します。</p>
        <p>2026年4月時点の為替レートで換算すると、$21は約3,200円前後となります。ただし、円安が進んだ場合は支払い金額が増加し、円高の場合は減少します。例えば、1ドル=160円の場合は約3,360円、1ドル=140円の場合は約2,940円となります。</p>
        <p>また、クレジットカード会社によっては、海外取引に対して為替手数料(通常1.6%〜2.5%程度)が別途加算される場合があります。この手数料はカード会社やカードの種類によって異なるため、正確な金額についてはご利用のカード会社にお問い合わせください。</p>
        <p>一方、代行サイトの場合は、料金が日本円で固定されているケースがほとんどです。為替レートの変動を気にせずに申請できる点は、代行サイトの利点の一つといえます。</p>
      </section>

      <section id="sec-06" class="fade-up">
        <h2>よくある質問</h2>
        <div class="faq" style="margin-top:32px">
          <details open>
            <summary>Q. ESTA申請の公式料金はいくらですか？</summary>
            <div class="answer"><p>公式サイト(CBP)からESTAを申請した場合の手数料は$21(米ドル)です。日本円に換算すると約3,200円前後ですが、為替レートの変動により金額は前後します。この料金は渡航者1名ごとに発生します。</p></div>
          </details>
          <details>
            <summary>Q. ESTA申請が拒否された場合でも料金はかかりますか？</summary>
            <div class="answer"><p>はい、申請が拒否された場合でも審査手数料の$4は返金されません。ただし、渡航認証手数料の$17は、ESTAが承認された場合にのみ課金されるため、拒否された場合は請求されません。</p></div>
          </details>
          <details>
            <summary>Q. 代行サイトと公式サイトの違いは何ですか？</summary>
            <div class="answer"><p>公式サイトはCBP(アメリカ合衆国税関・国境警備局)が直接運営しており、申請料金は$21です。代行サイトは民間企業が運営しており、公式の申請手数料に加えてサービス料が上乗せされるため、料金は5,000円〜15,000円程度になります。代行サイトでは日本語サポートや入力チェックなどのサービスが含まれます。</p></div>
          </details>
          <details>
            <summary>Q. ESTA申請の支払いにデビットカードは使えますか？</summary>
            <div class="answer"><p>Visa、MasterCard、JCBなどのブランドロゴが付いたデビットカードであれば使用できる場合があります。ただし、カードの種類や発行元によっては決済が承認されないケースもあるため、クレジットカードの利用をおすすめします。PayPalでの支払いも可能です。</p></div>
          </details>
          <details>
            <summary>Q. 家族分のESTAをまとめて支払うことはできますか？</summary>
            <div class="answer"><p>はい、グループ申請を利用すれば、代表者のクレジットカードで家族全員分の申請手数料をまとめて支払うことが可能です。ESTA申請の支払いに使用するクレジットカードは、申請者本人名義でなくても利用できます。</p></div>
          </details>
        </div>
      </section>

    </article>
  </div>
</section>


<section class="cta-strip cta-strip--solid">
  <p class="cta-strip__eyebrow">Start your application</p>
  <h2>アメリカ渡航には<br class="sp-br">ESTAの申請が必要です。</h2>
  <p>申請完了まで最大3日ほどかかるため、<br class="sp-br">余裕をもってお手続きください。</p>
  <a href="/form/step1" class="cta-btn">✓ ESTA申請をはじめる</a>
</section>

<!-- ===== Related articles (reused) ===== -->
<section class="section section--cream">
  <div class="section__inner fade-up">
    <p class="section__eyebrow">№ — Related Articles</p>
    <h2 class="section__title">関連記事</h2>
    <div class="ornament"><span></span><em></em><span></span></div>
  </div>
  <div class="related fade-up" style="margin-top:56px">
    <a href="/list-esta-application/esta/"><span class="related__media"><img src="/img/related/01-esta-toha.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">01.</span><span class="related__title">ESTA(エスタ)とは？</span><span class="related__more">Read more</span></span></a>
    <a href="/list-esta-application/esta-flow/"><span class="related__media"><img src="/img/related/04-apply-method.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">02.</span><span class="related__title">ESTAの申請方法を解説</span><span class="related__more">Read more</span></span></a>
    <a href="/list-esta-application/place-of-birth/"><span class="related__media"><img src="/img/related/03-address-writing.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">03.</span><span class="related__title">出生地や住所の書き方</span><span class="related__more">Read more</span></span></a>
    <a href="/list-esta-application/us-contact-details/"><span class="related__media"><img src="/img/related/06-us-contact.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">04.</span><span class="related__title">米国内の連絡先の記入方法</span><span class="related__more">Read more</span></span></a>
  </div>
</section>
`;

export default function Page() {
  return (<><JsonLd data={PAGE_JSON_LD} /><div className="redesign-detail" dangerouslySetInnerHTML={{ __html: BODY_HTML }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Q. ESTA申請の公式料金はいくらですか？", "acceptedAnswer": {"@type": "Answer", "text": "公式サイト(CBP)からESTAを申請した場合の手数料は$21(米ドル)です。日本円に換算すると約3,200円前後ですが、為替レートの変動により金額は前後します。この料金は渡航者1名ごとに発生します。"}}, {"@type": "Question", "name": "Q. ESTA申請が拒否された場合でも料金はかかりますか？", "acceptedAnswer": {"@type": "Answer", "text": "はい、申請が拒否された場合でも審査手数料の$4は返金されません。ただし、渡航認証手数料の$17は、ESTAが承認された場合にのみ課金されるため、拒否された場合は請求されません。"}}, {"@type": "Question", "name": "Q. 代行サイトと公式サイトの違いは何ですか？", "acceptedAnswer": {"@type": "Answer", "text": "公式サイトはCBP(アメリカ合衆国税関・国境警備局)が直接運営しており、申請料金は$21です。代行サイトは民間企業が運営しており、公式の申請手数料に加えてサービス料が上乗せされるため、料金は5,000円〜15,000円程度になります。代行サイトでは日本語サポートや入力チェックなどのサービスが含まれます。"}}, {"@type": "Question", "name": "Q. ESTA申請の支払いにデビットカードは使えますか？", "acceptedAnswer": {"@type": "Answer", "text": "Visa、MasterCard、JCBなどのブランドロゴが付いたデビットカードであれば使用できる場合があります。ただし、カードの種類や発行元によっては決済が承認されないケースもあるため、クレジットカードの利用をおすすめします。PayPalでの支払いも可能です。"}}, {"@type": "Question", "name": "Q. 家族分のESTAをまとめて支払うことはできますか？", "acceptedAnswer": {"@type": "Answer", "text": "はい、グループ申請を利用すれば、代表者のクレジットカードで家族全員分の申請手数料をまとめて支払うことが可能です。ESTA申請の支払いに使用するクレジットカードは、申請者本人名義でなくても利用できます。"}}]}) }} /></>);
}
