import type { Metadata } from 'next';
import { JsonLd, pageJsonLd, seoMetadata } from '@/lib/seo';

const PAGE_PATH = '/list-esta-guide/hawaii/';
const PAGE_TITLE = 'ハワイ旅行にESTAは必要？申請方法と入国審査の流れ【2026年】 | US ESTA Apply Website';
const PAGE_DESCRIPTION = 'ハワイ旅行にESTAは必要？ハワイはアメリカ合衆国の一部のため、渡航にはESTAの取得が必須です。ホノルル空港での入国審査の流れや注意点、滞在先住所の書き方を解説します。';

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
      <em>ハワイ旅行にESTAは必要？申請方法と入国審査の流れ【2026年】</em>
    </nav>
    <p class="article__eyebrow">Hawaii Travel ESTA</p>
    <h1 class="article__title">ハワイ旅行にESTAは必要？申請方法と入国審査の流れ【2026年】</h1>
    <p class="article__lede">ハワイはアメリカ合衆国の50番目の州であるため、日本からハワイへ渡航する際にもESTA(エスタ)の取得が必要です。本記事では、ハワイ旅行に必要なESTAの申請方法、ダニエル・K・イノウエ国際空港(ホノルル空港)での入国審査の流れ、ハワイ特有の注意点について詳しく解説します。</p>
  </div>
</section>

<section class="article-main">
  <div class="article-main__inner">
    <aside class="toc">
      <p class="toc__head">目次</p>
      <ol>
        <li><a href="#sec-01">ハワイ渡航にESTAが必要な理由</a></li>
        <li><a href="#sec-02">ハワイ旅行のためのESTA申請方法</a></li>
        <li><a href="#sec-03">ホノルル空港での入国審査の流れ</a></li>
        <li><a href="#sec-04">入国審査で聞かれること</a></li>
        <li><a href="#sec-05">ハワイ特有の注意点</a></li>
        <li><a href="#sec-06">ESTA申請時の滞在先住所の書き方</a></li>
        <li><a href="#sec-07">よくある質問</a></li>
      </ol>
    </aside>

    <article class="article-body">

      <section id="sec-01" class="fade-up">
        <h2>ハワイ渡航にESTAが必要な理由</h2>
        <p>ハワイは日本から最も身近なアメリカのリゾート地として人気がありますが、ハワイ州はアメリカ合衆国の正式な州の一つです。そのため、日本からハワイへ渡航する場合も、アメリカ本土への渡航と同様にESTA(エスタ)の取得が必要となります。</p>
        <p>日本国籍者がビザなしでアメリカ(ハワイを含む)に入国するためには、ビザ免除プログラム(VWP)に基づき、事前にESTAを申請・取得しておく必要があります。ESTAを取得していない場合、航空会社のチェックインカウンターで搭乗を拒否される可能性があるため、出発前に必ず申請を完了させてください。</p>
        <p>ESTAの有効期間は取得日から2年間(またはパスポートの有効期限まで)で、有効期間内であれば何度でもアメリカへの渡航が可能です。ただし、1回の滞在は最大90日以内に制限されています。ハワイ旅行の場合、一般的な観光であれば数日から2週間程度の滞在が多いため、この制限が問題になることはほとんどありません。</p>
      </section>

      <section id="sec-02" class="fade-up">
        <h2>ハワイ旅行のためのESTA申請方法</h2>
        <p>ハワイ旅行のためのESTA申請手順は、アメリカ本土への渡航時と同じです。ESTAの申請はオンラインで完結し、所要時間はおよそ10分程度です。申請に必要なものは、有効なICチップ搭載パスポート、クレジットカード(申請手数料の支払い用)、メールアドレスの3つです。</p>
        <p>申請フォームでは、氏名、生年月日、国籍、パスポート番号などの個人情報を入力します。その後、アメリカでの滞在先住所や連絡先を入力し、セキュリティに関する質問に回答します。すべての情報を入力し終えたら、申請内容を確認して手数料の支払いを行います。支払いが完了すると申請手続きは終了となり、CBP(アメリカ合衆国税関・国境警備局)による審査が開始されます。</p>
        <p>審査結果は通常72時間以内に通知されますが、多くの場合は数分から数時間で「渡航認証許可」の結果が得られます。CBPでは渡航日の72時間前までにESTAを申請することを推奨しているため、ハワイ旅行の出発日が決まったら早めに申請を済ませておきましょう。</p>
      </section>

      <section id="sec-03" class="fade-up">
        <h2>ホノルル空港での入国審査の流れ</h2>
        <p>日本からの直行便でハワイに到着した場合、ダニエル・K・イノウエ国際空港(旧ホノルル国際空港)にて入国手続きを行います。入国審査の流れは以下のとおりです。</p>
        <p>1. 飛行機を降りた後、「Immigration(入国審査)」または「Arrivals(到着)」の案内表示に従って入国審査場へ向かいます。入国審査場では、外国籍者用のレーンに並んでください。</p>
        <p>2. 順番が来たら、審査官にパスポートを提示します。審査官による質問(滞在目的、滞在日数、宿泊先など)に英語で回答し、カメラによる顔写真の撮影と指紋の採取が行われます。</p>
        <p>3. 入国審査が完了したら、手荷物受取エリアに移動し、フライトの便名が表示されているターンテーブルで預け入れ荷物を受け取ります。</p>
        <p>4. 手荷物を受け取った後は、税関検査を通過します。申告するものがない場合でも税関申告は必要です。税関職員に税関申告書(または電子申告のQRコード)を提出し、手荷物検査を受けて到着ロビーへ進みます。</p>
        <p>ホノルル空港の入国審査は、特に日本からの便が集中する午前中に混雑することがあります。混雑時は入国審査に1時間以上かかる場合もあるため、乗り継ぎ便がある場合は十分な時間を確保しておくことが重要です。</p>
      </section>

      <section id="sec-04" class="fade-up">
        <h2>入国審査で聞かれること</h2>
        <p>ハワイの入国審査では、審査官から以下のような質問をされることが一般的です。英語での受け答えが必要ですが、観光目的の短期滞在であれば簡単な英語で回答できる内容がほとんどです。</p>
        <p>「What is the purpose of your visit?(渡航の目的は何ですか？)」：観光の場合は「Sightseeing」または「Vacation」と回答します。</p>
        <p>「How long will you stay?(どのくらい滞在しますか？)」：滞在日数を回答します。例えば5泊の場合は「5 days」または「5 nights」と答えます。</p>
        <p>「Where are you staying?(どこに滞在しますか？)」：宿泊先のホテル名を回答します。例えば「Hilton Hawaiian Village」などと答えてください。</p>
        <p>「What is your occupation?(職業は何ですか？)」：会社員であれば「Office worker」や「Company employee」、学生であれば「Student」と回答します。</p>
        <p>質問にスムーズに回答できるよう、滞在先のホテル名や滞在日数は事前にメモしておくことをおすすめします。また、往復の航空券やホテルの予約確認書をスマートフォンに保存しておくと、審査官に提示を求められた際にすぐ対応できます。</p>
      </section>

      <section id="sec-05" class="fade-up">
        <h2>ハワイ特有の注意点</h2>
        <p>ハワイへの入国時には、アメリカ本土への渡航とは異なるいくつかの注意点があります。特に農産物や食品の持ち込み制限についてはハワイ独自の規制があるため、事前に確認しておきましょう。</p>
        <p>農産物の持ち込み制限：ハワイは独自の生態系を保護するため、農産物の持ち込みについて厳格な規制を設けています。果物、野菜、植物、種子、土のついた物品などは、原則としてハワイへの持ち込みが禁止されています。検疫検査で発見された場合は没収・廃棄の対象となるため、日本からの手土産として果物や生鮮食品を持参しないようご注意ください。</p>
        <p>肉製品の持ち込み制限：肉類やその加工品(ジャーキー、ソーセージ、ハムなど)もハワイへの持ち込みが制限されています。日本のお土産として人気のある肉まんやカレーなど、肉を含む加工食品も規制の対象となる場合があるため注意が必要です。</p>
        <p>現金の持ち込み申告：1万ドル(約150万円)以上の現金を持ち込む場合は、税関申告が義務付けられています。申告せずに持ち込んだ場合、現金が没収される可能性があります。</p>
        <p>時差への対応：日本とハワイの時差は19時間(日本が19時間進んでいます)。到着日の体調管理にご注意ください。</p>
      </section>

      <section id="sec-06" class="fade-up">
        <h2>ESTA申請時の滞在先住所の書き方</h2>
        <p>ESTA申請フォームでは、アメリカでの滞在先住所の入力が求められます。ハワイのホテルに宿泊する場合は、ホテルの名前と住所を入力してください。以下に、ハワイの主要ホテルの住所の記入例を紹介します。</p>
        <p>滞在先の住所(Address Line 1)には、ホテルの番地と通り名を入力します。例えば、「2005 Kalia Road」のように記入します。市区町村(City)には「Honolulu」、州(State)には「Hawaii(HI)」と入力してください。</p>
        <p>滞在先が複数ある場合は、最初に宿泊するホテルの情報を入力すれば問題ありません。また、宿泊先が未定の場合は「UNKNOWN」と入力することも可能ですが、できる限り具体的な滞在先を入力することをおすすめします。ホテルの予約確認書に記載されている英語の住所をそのまま転記すると、入力ミスを防ぐことができます。</p>
      </section>

      <section id="sec-07" class="fade-up">
        <h2>よくある質問</h2>
        <div class="faq" style="margin-top:32px">
          <details open>
            <summary>ハワイ旅行にESTAは本当に必要ですか？</summary>
            <div class="answer"><p>はい、ハワイはアメリカ合衆国ハワイ州であるため、日本国籍者がビザなしで渡航するにはESTAの取得が必要です。ESTAを取得していない場合、チェックインカウンターで搭乗を拒否される可能性があります。出発の72時間前までに申請を済ませておくことをおすすめします。</p></div>
          </details>
          <details>
            <summary>ハワイへの食品の持ち込みで注意することは何ですか？</summary>
            <div class="answer"><p>ハワイは独自の生態系保護のため、果物、野菜、植物、種子、肉製品などの持ち込みが厳しく制限されています。日本からのお土産として生鮮食品や肉を含む加工食品を持参しないようご注意ください。検疫検査で発見された場合は没収・廃棄されます。</p></div>
          </details>
          <details>
            <summary>ホノルル空港の入国審査にはどれくらい時間がかかりますか？</summary>
            <div class="answer"><p>入国審査の所要時間は混雑状況により異なりますが、日本からの便が集中する午前中は特に混雑する傾向があります。スムーズに進めば15〜30分程度ですが、混雑時は1時間以上かかる場合もあります。乗り継ぎ便がある場合は十分な時間を確保しておきましょう。</p></div>
          </details>
          <details>
            <summary>ESTA申請時にハワイの滞在先住所はどう書けばよいですか？</summary>
            <div class="answer"><p>ESTA申請フォームの滞在先住所には、宿泊するホテルの住所を入力してください。ホテルの予約確認書に記載されている英語の住所をそのまま入力するのが最も確実です。市区町村は「Honolulu」、州は「Hawaii」と入力します。宿泊先が未定の場合は「UNKNOWN」と入力することも可能です。</p></div>
          </details>
          <details>
            <summary>ハワイ旅行で使ったESTAは他のアメリカの都市への旅行にも使えますか？</summary>
            <div class="answer"><p>はい、ESTAは有効期間(2年間またはパスポートの有効期限まで)内であれば、ハワイだけでなくアメリカ本土やグアムなど、アメリカのすべての地域への渡航に使用できます。新たに申請し直す必要はありません。</p></div>
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
  return (<><JsonLd data={PAGE_JSON_LD} /><div className="redesign-detail" dangerouslySetInnerHTML={{ __html: BODY_HTML }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Q. ハワイ旅行にESTAは本当に必要ですか？", "acceptedAnswer": {"@type": "Answer", "text": "はい、ハワイはアメリカ合衆国ハワイ州であるため、日本国籍者がビザなしで渡航するにはESTAの取得が必要です。ESTAを取得していない場合、チェックインカウンターで搭乗を拒否される可能性があります。出発の72時間前までに申請を済ませておくことをおすすめします。"}}, {"@type": "Question", "name": "Q. ハワイへの食品の持ち込みで注意することは何ですか？", "acceptedAnswer": {"@type": "Answer", "text": "ハワイは独自の生態系保護のため、果物、野菜、植物、種子、肉製品などの持ち込みが厳しく制限されています。日本からのお土産として生鮮食品や肉を含む加工食品を持参しないようご注意ください。検疫検査で発見された場合は没収・廃棄されます。"}}, {"@type": "Question", "name": "Q. ホノルル空港の入国審査にはどれくらい時間がかかりますか？", "acceptedAnswer": {"@type": "Answer", "text": "入国審査の所要時間は混雑状況により異なりますが、日本からの便が集中する午前中は特に混雑する傾向があります。スムーズに進めば15〜30分程度ですが、混雑時は1時間以上かかる場合もあります。乗り継ぎ便がある場合は十分な時間を確保しておきましょう。"}}, {"@type": "Question", "name": "Q. ESTA申請時にハワイの滞在先住所はどう書けばよいですか？", "acceptedAnswer": {"@type": "Answer", "text": "ESTA申請フォームの滞在先住所には、宿泊するホテルの住所を入力してください。ホテルの予約確認書に記載されている英語の住所をそのまま入力するのが最も確実です。市区町村は「Honolulu」、州は「Hawaii」と入力します。宿泊先が未定の場合は「UNKNOWN」と入力することも可能です。"}}, {"@type": "Question", "name": "Q. ハワイ旅行で使ったESTAは他のアメリカの都市への旅行にも使えますか？", "acceptedAnswer": {"@type": "Answer", "text": "はい、ESTAは有効期間(2年間またはパスポートの有効期限まで)内であれば、ハワイだけでなくアメリカ本土やグアムなど、アメリカのすべての地域への渡航に使用できます。新たに申請し直す必要はありません。"}}]}) }} /></>);
}
