import type { Metadata } from 'next';
import { JsonLd, pageJsonLd, seoMetadata } from '@/lib/seo';

const PAGE_PATH = '/list-esta-guide/transit/';
const PAGE_TITLE = 'アメリカ乗り継ぎ(トランジット)にESTAは必要？【2026年最新】 | US ESTA Apply Website';
const PAGE_DESCRIPTION = 'アメリカでの乗り継ぎ(トランジット)にもESTAは必要です。アメリカ経由で第三国へ渡航する際の入国審査の流れ、最低乗り継ぎ時間の目安、カナダ経由との違いを解説します。';

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
      <em>アメリカ乗り継ぎ(トランジット)にESTAは必要？【2026年最新】</em>
    </nav>
    <p class="article__eyebrow">Transit ESTA</p>
    <h1 class="article__title">アメリカ乗り継ぎ(トランジット)にESTAは必要？【2026年最新】</h1>
    <p class="article__lede">日本から中南米やカリブ海諸国へ渡航する際に、アメリカの空港を経由して乗り継ぎ(トランジット)を行うケースは少なくありません。アメリカでは、たとえ乗り継ぎのみで入国する場合であっても、すべての渡航者にESTA(エスタ)の取得が義務付けられています。本記事では、アメリカでのトランジット時に必要なESTAの申請方法、乗り継ぎの流れ、注意点について詳しく解説します。</p>
  </div>
</section>

<section class="article-main">
  <div class="article-main__inner">
    <aside class="toc">
      <p class="toc__head">目次</p>
      <ol>
        <li><a href="#sec-01">アメリカ乗り継ぎでもESTAが必要な理由</a></li>
        <li><a href="#sec-02">アメリカでのトランジットの流れ</a></li>
        <li><a href="#sec-03">最低乗り継ぎ時間の目安</a></li>
        <li><a href="#sec-04">トランジット時のESTA申請の注意点</a></li>
        <li><a href="#sec-05">カナダ経由との違い</a></li>
        <li><a href="#sec-06">よくある質問</a></li>
      </ol>
    </aside>

    <article class="article-body">

      <section id="sec-01" class="fade-up">
        <h2>アメリカ乗り継ぎでもESTAが必要な理由</h2>
        <p>アメリカの空港では、乗り継ぎ(トランジット)のみの場合であっても、すべての渡航者が入国審査を受ける必要があります。これは、アメリカにはヨーロッパやアジアの多くの空港に存在する「国際線乗り継ぎエリア(トランジットゾーン)」が設けられていないためです。</p>
        <p>つまり、アメリカの空港で飛行機を乗り換えるだけの場合でも、一度アメリカに「入国」する扱いとなります。そのため、ビザ免除プログラム(VWP)対象国の国籍者は、乗り継ぎであってもESTA(エスタ)を取得しておく必要があります。ESTAを取得していない場合は、出発地の空港でチェックインを拒否される可能性があるため、必ず事前に申請を完了させてください。</p>
        <p>この規則は、最終目的地がアメリカ以外の国(メキシコ、カナダ、中南米諸国など)であっても同様に適用されます。アメリカの空港を経由するすべてのルートにおいて、ESTAの取得が必要です。</p>
      </section>

      <section id="sec-02" class="fade-up">
        <h2>アメリカでのトランジットの流れ</h2>
        <p>アメリカの空港での乗り継ぎは、他の国のトランジットとは異なり、入国審査や税関検査を経る必要があるため、手続きに時間がかかります。以下に、アメリカでのトランジットの一般的な流れを説明します。</p>
        <p>1. 入国審査(Immigration)：飛行機を降りたら、まず入国審査場に向かいます。外国籍者用のレーンに並び、パスポートを提示して審査を受けます。乗り継ぎの場合、入国目的を「Transit(乗り継ぎ)」と伝えてください。審査官からは、最終目的地や乗り継ぎ便の情報について質問されることがあります。</p>
        <p>2. 手荷物の受け取り(Baggage Claim)：アメリカでの乗り継ぎでは、最終目的地まで荷物がスルーされる場合でも、一度荷物を受け取る必要があります。これはアメリカの税関規定によるもので、乗り継ぎ客にも適用されます。ターンテーブルで自分の荷物を受け取ってください。</p>
        <p>3. 税関検査(Customs)：受け取った荷物を持って税関検査場を通過します。税関申告書を提出し、必要に応じて荷物の検査を受けます。乗り継ぎの場合、特に申告するものがなければスムーズに通過できることが一般的です。</p>
        <p>4. 荷物の再預け入れ(Baggage Re-check)：税関検査を通過した後、乗り継ぎ便に荷物を再度預け入れます。「Connecting Flights」や「Transfer Baggage」と表示されたカウンターで荷物を預けてください。</p>
        <p>5. セキュリティチェック(Security)：荷物を預けた後、国内線ターミナルまたは国際線ターミナルへ移動し、再度セキュリティチェック(保安検査)を受けます。その後、乗り継ぎ便のゲートへ向かいます。</p>
      </section>

      <section id="sec-03" class="fade-up">
        <h2>最低乗り継ぎ時間の目安</h2>
        <p>アメリカでの乗り継ぎは、入国審査・手荷物受取・税関・再チェックイン・セキュリティチェックと、複数の手続きを経る必要があるため、他の国でのトランジットに比べて時間がかかります。最低でも3時間以上の乗り継ぎ時間を確保することを強く推奨します。</p>
        <p>特に以下の場合は、さらに余裕を持った乗り継ぎ時間が必要です。入国審査が混雑する時間帯(午前中の国際線到着ラッシュ)に到着する場合や、大規模な空港(ロサンゼルス国際空港、ジョン・F・ケネディ国際空港など)で乗り継ぐ場合は、4時間以上の乗り継ぎ時間を見込んでおくと安心です。</p>
        <p>また、乗り継ぎの際にターミナルを移動する必要がある場合は、ターミナル間の移動時間も考慮してください。大規模空港では、ターミナル間をシャトルバスやモノレールで移動する必要があり、移動だけで20〜30分かかることがあります。</p>
        <p>航空券を予約する際は、乗り継ぎ時間が短すぎるフライトを避け、万が一遅延が発生した場合にも対応できるよう、余裕のあるスケジュールを組むことが重要です。乗り継ぎ便に間に合わなかった場合、航空会社のカウンターで次の便への振り替えを依頼する必要があります。</p>
      </section>

      <section id="sec-04" class="fade-up">
        <h2>トランジット時のESTA申請の注意点</h2>
        <p>アメリカでの乗り継ぎ(トランジット)目的でESTAを申請する際には、いくつかの注意点があります。</p>
        <p>ESTA申請フォームの滞在先住所について：乗り継ぎのみでアメリカに滞在しない場合でも、滞在先住所の入力が求められます。トランジットの場合は、乗り継ぎ先の空港のあるホテルの住所、または「TRANSIT」と入力することが可能です。一部の申請フォームでは、滞在先住所を空欄にできない仕様になっているため、乗り継ぎ空港の住所を入力する方法が一般的です。</p>
        <p>渡航目的の選択について：ESTA申請フォームの渡航目的では「トランジット(Transit)」を選択してください。「観光(Tourism)」や「商用(Business)」ではなく、正確な目的を選択することが重要です。</p>
        <p>ESTAの有効期限の確認：過去に取得したESTAの有効期限が切れていないか確認してください。ESTAの有効期間は取得日から2年間ですが、パスポートの有効期限が先に到来する場合はその時点で失効します。パスポートを更新した場合は、ESTAの再申請が必要です。</p>
      </section>

      <section id="sec-05" class="fade-up">
        <h2>カナダ経由との違い</h2>
        <p>中南米への渡航ルートとして、アメリカ経由の他にカナダ経由を選択するケースもあります。カナダ経由の場合とアメリカ経由の場合では、必要な渡航認証や手続きが異なります。</p>
        <p>カナダの空港で乗り継ぐ場合、日本国籍者は電子渡航認証「eTA(Electronic Travel Authorization)」の取得が必要です。eTAはカナダ版のESTAに相当する制度で、オンラインで簡単に申請できます。申請料金はCAD 7(約700円)で、ESTAよりも安価です。</p>
        <p>カナダでの乗り継ぎの大きな特徴として、一部の空港(バンクーバー国際空港やトロント・ピアソン国際空港など)では、アメリカ行きの便に限り「アメリカ事前入国審査(US Preclearance)」を受けることが可能です。この制度を利用すると、カナダの空港でアメリカの入国審査を事前に済ませることができるため、アメリカ到着後は国内線と同じ扱いとなり、入国審査を再度受ける必要がありません。</p>
        <p>ただし、カナダ経由でアメリカに入国する場合は、カナダのeTAに加えてアメリカのESTAも必要となる点にご注意ください。カナダを最終目的地としない乗り継ぎの場合でも、カナダに入国する扱いとなるため、eTAの取得は必須です。</p>
      </section>

      <section id="sec-06" class="fade-up">
        <h2>よくある質問</h2>
        <div class="faq" style="margin-top:32px">
          <details open>
            <summary>アメリカで乗り継ぎだけの場合でもESTAは必要ですか？</summary>
            <div class="answer"><p>はい、アメリカの空港で乗り継ぐだけの場合でもESTAの取得は必要です。アメリカには国際線乗り継ぎ専用エリア(トランジットゾーン)がないため、乗り継ぎ客も一度アメリカに入国する扱いとなります。ESTAを取得していない場合は搭乗を拒否される可能性があります。</p></div>
          </details>
          <details>
            <summary>アメリカでの乗り継ぎ時間はどれくらい必要ですか？</summary>
            <div class="answer"><p>最低でも3時間以上の乗り継ぎ時間を確保することを推奨します。アメリカでの乗り継ぎでは、入国審査、手荷物受取、税関検査、荷物の再預け入れ、セキュリティチェックと複数の手続きが必要です。大規模空港や混雑する時間帯の場合は4時間以上の余裕を見ておくと安心です。</p></div>
          </details>
          <details>
            <summary>乗り継ぎ時に預け荷物は最終目的地まで届きますか？</summary>
            <div class="answer"><p>アメリカで乗り継ぐ場合、航空会社や航空券の種類に関わらず、一度荷物を受け取る必要があります。税関検査を通過した後、「Transfer Baggage」カウンターで荷物を再度預け入れます。これはアメリカの税関規定により、すべての乗り継ぎ客に適用される規則です。</p></div>
          </details>
          <details>
            <summary>トランジット目的のESTA申請で滞在先住所は何と書けばよいですか？</summary>
            <div class="answer"><p>乗り継ぎのみでアメリカに宿泊しない場合でも、滞在先住所の入力が必要です。乗り継ぎ空港の住所を入力するか、「TRANSIT」と入力する方法が一般的です。渡航目的には「トランジット(Transit)」を選択してください。</p></div>
          </details>
          <details>
            <summary>カナダ経由とアメリカ経由、どちらが乗り継ぎしやすいですか？</summary>
            <div class="answer"><p>カナダの一部の空港(バンクーバー、トロントなど)では、アメリカ行きの便に限り事前入国審査(US Preclearance)を受けられるため、アメリカ到着後の手続きが簡略化されます。ただし、カナダ経由の場合はeTAとESTAの両方が必要になります。乗り継ぎのしやすさは空港や時間帯によって異なるため、総合的に判断してください。</p></div>
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
  return (<><JsonLd data={PAGE_JSON_LD} /><div className="redesign-detail" dangerouslySetInnerHTML={{ __html: BODY_HTML }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Q. アメリカで乗り継ぎだけの場合でもESTAは必要ですか？", "acceptedAnswer": {"@type": "Answer", "text": "はい、アメリカの空港で乗り継ぐだけの場合でもESTAの取得は必要です。アメリカには国際線乗り継ぎ専用エリア(トランジットゾーン)がないため、乗り継ぎ客も一度アメリカに入国する扱いとなります。ESTAを取得していない場合は搭乗を拒否される可能性があります。"}}, {"@type": "Question", "name": "Q. アメリカでの乗り継ぎ時間はどれくらい必要ですか？", "acceptedAnswer": {"@type": "Answer", "text": "最低でも3時間以上の乗り継ぎ時間を確保することを推奨します。アメリカでの乗り継ぎでは、入国審査、手荷物受取、税関検査、荷物の再預け入れ、セキュリティチェックと複数の手続きが必要です。大規模空港や混雑する時間帯の場合は4時間以上の余裕を見ておくと安心です。"}}, {"@type": "Question", "name": "Q. 乗り継ぎ時に預け荷物は最終目的地まで届きますか？", "acceptedAnswer": {"@type": "Answer", "text": "アメリカで乗り継ぐ場合、航空会社や航空券の種類に関わらず、一度荷物を受け取る必要があります。税関検査を通過した後、「Transfer Baggage」カウンターで荷物を再度預け入れます。これはアメリカの税関規定により、すべての乗り継ぎ客に適用される規則です。"}}, {"@type": "Question", "name": "Q. トランジット目的のESTA申請で滞在先住所は何と書けばよいですか？", "acceptedAnswer": {"@type": "Answer", "text": "乗り継ぎのみでアメリカに宿泊しない場合でも、滞在先住所の入力が必要です。乗り継ぎ空港の住所を入力するか、「TRANSIT」と入力する方法が一般的です。渡航目的には「トランジット(Transit)」を選択してください。"}}, {"@type": "Question", "name": "Q. カナダ経由とアメリカ経由、どちらが乗り継ぎしやすいですか？", "acceptedAnswer": {"@type": "Answer", "text": "カナダの一部の空港(バンクーバー、トロントなど)では、アメリカ行きの便に限り事前入国審査(US Preclearance)を受けられるため、アメリカ到着後の手続きが簡略化されます。ただし、カナダ経由の場合はeTAとESTAの両方が必要になります。乗り継ぎのしやすさは空港や時間帯によって異なるため、総合的に判断してください。"}}]}) }} /></>);
}
