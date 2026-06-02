import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ESTA(エスタ)とは？事前入国審査制度を解説【アメリカ渡航】 | US ESTA Apply Website',
  description: 'ESTA(エスタ)とは、90日以内の観光、短期商用、または乗り継ぎを目的としてアメリカへ渡航する際に必要となる電子渡航認証です。申請対象者・要件・必要書類・有効期限・申請タイミングまで完全解説。',
};

const BODY_HTML = `<section class="article-hero">
  <div class="article-hero__inner">
    <nav class="crumb" aria-label="パンくず">
      <a href="/">HOME</a><span>›</span>
      <a href="/list-esta-application">ESTA申請関連情報一覧</a><span>›</span>
      <em>ESTA(エスタ)とは？事前入国審査制度を解説【アメリカ渡航】</em>
    </nav>
    <p class="article__eyebrow">ESTA Application Article</p>
    <h1 class="article__title">ESTA(エスタ)とは？ 事前入国審査制度を解説【アメリカ渡航】</h1>
  </div>
</section>

<!-- ===== Article main ===== -->
<section class="article-main">
  <div class="article-main__inner">
    <!-- TOC -->
    <aside class="toc">
      <p class="toc__head">目次</p>
      <ol>
        <li><a href="#sec-01">アメリカの電子渡航認証“ESTA”の概要を解説</a></li>
        <li><a href="#sec-02">ESTAの申請対象者</a></li>
        <li><a href="#sec-03">ESTAの申請要件</a></li>
        <li><a href="#sec-04">ESTA申請に必要な書類と申請手順</a></li>
        <li><a href="#sec-05">ESTAの有効期限と申請タイミング</a></li>
        <li><a href="#sec-06">ESTA申請時に注意すべき点</a></li>
        <li><a href="#sec-07">ESTA申請サポートのメリット</a></li>
      </ol>
    </aside>

    <!-- Article body -->
    <article class="article-body">

      <section id="sec-01" class="fade-up">
        <h2>アメリカの電子渡航認証“ESTA”の概要を解説</h2>
        <p>ESTA(エスタ)とは、90日以内の観光、短期商用、または乗り継ぎを目的としてアメリカへ渡航する際に必要となる電子渡航認証です。ESTAは「ビザ免除プログラム(VWP)」の一環として運用されており、日本を含むVWP参加国の市民はビザを取得せずに渡米する場合、事前にESTAを申請・取得することが義務付けられています。ESTA申請の審査には一定の時間を要するため、<a href="https://www.dhs.gov/" target="_blank" rel="noopener noreferrer">DHS(アメリカ国土安全保障省)</a>では出発日の3日前までにESTAを申請し、「渡航認証許可」を取得することを推奨しています。出発日にESTAを申請することも可能ですが、当日中に渡航認証が許可されない可能性があるため注意が必要です。</p>
        <p>なお、ESTAはDHSおよび<a href="https://www.cbp.gov/" target="_blank" rel="noopener noreferrer">CBP(アメリカ合衆国税関・国境警備局)</a>の管轄となっており、日本の外務省や在日米国大使館・総領事館では問い合わせに一切対応していません。</p>
      </section>

      <section id="sec-02" class="fade-up">
        <h2>ESTAの申請対象者</h2>
        <p>ESTAは、日本を含む「ビザ免除プログラム(VWP)」参加国の市民が申請対象となり、90日以内の観光、短期商用、または乗り継ぎを目的としてアメリカへ渡航する場合に限り利用できます。ただし、アメリカでの留学、就労、永住を目的とした渡航はESTAの利用対象外となるため、在日米国大使館および総領事館にて、渡航目的に応じたビザの取得をご検討ください。ビザの申請には、必要書類の準備や大使館・総領事館での面接が必要となり、申請から発給までに1か月以上かかる場合があるため、早めの手続きをお勧めします。なお、ESTAを取得できないまま渡航日を迎えた場合は、アメリカへの入国や飛行機への搭乗を拒否されるため注意が必要です。</p>

        <div class="country-list">
          <p class="country-list__title">ビザ免除プログラム(VWP)参加国一覧</p>
          <p class="country-list__body">日本、アイスランド、アイルランド、アンドラ、イギリス、イスラエル、イタリア、エストニア、オーストラリア、オーストリア、オランダ、カタール、韓国、ギリシャ、クロアチア、サンマリノ、シンガポール、スイス、スウェーデン、スペイン、スロバキア、スロベニア、台湾、チリ、チェコ、デンマーク、ドイツ、ニュージーランド、ノルウェー、ハンガリー、フィンランド、フランス、ブルネイ、ベルギー、ポーランド、ポルトガル、マルタ、モナコ、ラトビア、リトアニア、リヒテンシュタイン、ルクセンブルク</p>
        </div>

        <p>なお、VWP参加国の市民であっても、アメリカが指定する伝染病に罹患している方や、過去に重大な犯罪歴がある方は、ESTAの申請対象外となります。</p>
      </section>

      <section id="sec-03" class="fade-up">
        <h2>ESTAの申請要件</h2>
        <ul class="bullets">
          <li>上記の“ビザ免除プログラム(VWP)”参加国の市民であること</li>
          <li>残存有効期間が90日以上あるパスポートを所持していること</li>
          <li>渡航目的が、短期観光、短期商用、乗り継ぎのいずれかに該当すること</li>
          <li>アメリカでの滞在期間が90日以内であること</li>
          <li>過去に重大な犯罪歴やアメリカでのオーバーステイ歴がないこと</li>
          <li>精神疾患や、アメリカが指定する伝染病に罹患していないこと</li>
          <li>2011年3月1日以降にイラク、北朝鮮、イラン、シリア、スーダン、ソマリア、キューバ、イエメンへの渡航または滞在歴がないこと</li>
        </ul>
      </section>

      <section id="sec-04" class="fade-up">
        <h2>ESTA申請に必要な書類と申請手順</h2>
        <p>ESTAの申請には、以下の書類が必要です。</p>
        <div class="doc-list">
          <div class="doc-list__item">
            <div class="doc-list__icon">01</div>
            <p>ICチップが搭載された有効なパスポート(残存有効期間が6か月以上あるもの)</p>
          </div>
          <div class="doc-list__item">
            <div class="doc-list__icon">02</div>
            <p>申請料の支払いに使用するクレジットカード</p>
          </div>
          <div class="doc-list__item">
            <div class="doc-list__icon">03</div>
            <p>メールアドレス・通知を受け取るための</p>
          </div>
        </div>
        <p>ESTA申請時には、別途手数料の支払いが必要です。支払いには各種クレジットカード(Visa、MasterCard、JCB、American Express、Diners Club)が利用可能で、カードは申請者ご本人名義でなくても審査に影響ありません。ESTAの申請は、パソコンまたはスマートフォンから約10分で完了します。申請フォームでは、氏名・生年月日・性別・パスポート情報などの基本情報に加え、犯罪歴や健康状態に関する質問への回答が求められます。なお、氏名や住所はすべてローマ字(英語)で入力する必要があるため、入力の際はスペルミスにご注意ください。</p>
      </section>

      <section id="sec-05" class="fade-up">
        <h2>ESTAの有効期限と申請タイミング</h2>
        <p>ESTAの有効期限は2年間で、この期間内であれば複数回の渡米が認められます。ただし、パスポートの有効期限が2年未満の場合は、ESTAもパスポートと同日に失効するためご注意ください。そのため、渡航前には必ずパスポートの有効期限を確認し、6か月未満の場合は更新後にESTAを申請することをお勧めします。有効期限が切れる前に再申請を行うことは可能ですが、新たにESTAが承認されると、既存の認証情報は無効となるため注意が必要です。</p>
        <p>また、ESTAの審査には最大で72時間かかることがあります。<a href="https://www.cbp.gov/" target="_blank" rel="noopener noreferrer">CBP(アメリカ合衆国税関・国境警備局)</a>では出発日の3日前までに申請を完了することを推奨しています。万が一、ESTAを取得しないまま出発日を迎えた場合は、アメリカへの入国および飛行機への搭乗が認められません。渡航が決まり次第、早めに申請手続きを行ってください。</p>
      </section>

      <section id="sec-06" class="fade-up">
        <h2>ESTA申請時に注意すべき点</h2>
        <p>ESTAの申請はオンラインのみで受け付けています。パソコン、スマートフォン、タブレット端末などを使用してESTAの申請サイトから手続きを行ってください。申請後は<a href="https://www.dhs.gov/" target="_blank" rel="noopener noreferrer">DHS(米国国土安全保障省)</a>にて審査が行われ、申請日から3日以内を目安に審査結果が通知されます。審査中はステータスが「渡航認証保留」と表示され、必ずしも即時に承認されるとは限りませんのでご注意ください。</p>
        <p>ESTAの有効期限は2年間です。ただし、パスポートの有効期限が2年未満の場合は、ESTAもパスポートと同日に失効します。渡航前に必ずパスポートを確認し、有効期限が短い場合は更新後にESTAを申請してください。</p>
        <p>婚姻などで改姓し新たなパスポートを取得した際は、新しいパスポート番号でESTAを再申請する必要があります。その場合、既存のESTA認証情報は無効となりますのでご注意ください。</p>
        <p>ESTAの審査結果が「渡航認証拒否」となった場合、在日米大使館および総領事館にて渡航目的に応じたビザの取得をご検討ください。</p>
      </section>

      <section id="sec-07" class="fade-up">
        <h2>ESTA申請サポートのメリット</h2>
        <p>US ESTA Apply Websiteでは、お客様に代わりESTAの複雑な申請手続きを行います。専門スタッフが年中無休・24時間体制でサポートいたしますので、ESTAの申請に不安がある方や、初めて渡米される方は当サイトの申請代行サービスをご利用ください。</p>
        <div class="merits-panel">
          <p class="merits-panel__title">US ESTA Apply Website を利用するメリット</p>
          <ol>
            <li>24時間・年中無休のサポート体制</li>
            <li>パソコン・スマートフォン・タブレットなど各種端末に対応</li>
            <li>申請時のエラーやイレギュラー発生時のサポート対応</li>
            <li>米国CBP公式サイトのメンテナンス時にも対応</li>
            <li>申請ステータスおよび認証状況の照会が可能</li>
            <li>申請結果を日本語のメールでご案内</li>
            <li>お問い合わせは日本語で対応</li>
            <li>ESTA認証情報の紛失時や再通知など、アフターサービスにも対応</li>
            <li>登録内容の修正を1回まで無料対応</li>
            <li>日本語表記の申請フォームで簡単に手続きが可能</li>
          </ol>
        </div>

      </section>
    </article>
  </div>
</section>

<!-- ===== Big CTA ===== -->
<section class="cta-strip" id="apply">
  <p class="cta-strip__eyebrow">Start your application</p>
  <h2>アメリカ渡航にはESTAの申請が必要です。</h2>
  <p>申請完了まで最大3日ほどかかるため、<br class="sp-br">余裕をもってお手続きください。</p>
  <a href="/list-site-information/entry" class="cta-btn">✓ESTA申請をはじめる</a>
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
    <a href="/list-esta-application/esta-flow/"><span class="related__media"><img src="/img/related/02-official-website.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">02.</span><span class="related__title">ESTAの申請方法を解説</span><span class="related__more">Read more</span></span></a>
    <a href="/list-esta-application/place-of-birth/"><span class="related__media"><img src="/img/related/03-address-writing.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">03.</span><span class="related__title">出生地や住所の書き方</span><span class="related__more">Read more</span></span></a>
    <a href="/list-esta-application/us-contact-details/"><span class="related__media"><img src="/img/related/04-apply-method.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">04.</span><span class="related__title">米国内の連絡先の記入方法</span><span class="related__more">Read more</span></span></a>
  </div>
</section>

<!-- ===== Footer (reused) ===== -->`;

export default function Page() {
  return <div className="redesign-detail" dangerouslySetInnerHTML={{ __html: BODY_HTML }} />;
}
