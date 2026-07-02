import type { Metadata } from 'next';
import { JsonLd, pageJsonLd, seoMetadata } from '@/lib/seo';

const PAGE_PATH = '/list-esta-application/status-check/';
const PAGE_TITLE = 'ESTA(エスタ)申請状況 | US ESTA Apply Website';
const PAGE_DESCRIPTION = 'ESTAの申請状況と審査結果、登録情報を確認する方法を解説します。ESTA申請の認証可否を確認する際は、ローマ字表記の姓名・生年月日・申請IDの入力が必要です。';

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
      <a href="/list-esta-application">ESTA申請関連情報一覧</a><span>›</span>
      <em>ESTA(エスタ)申請状況</em>
    </nav>
    <p class="article__eyebrow">Status Check</p>
    <h1 class="article__title">ESTA(エスタ)申請状況</h1>
    <p class="article__lede">ESTAの申請状況と審査結果、登録情報を確認する方法を解説します。ESTA申請の認証可否を確認する際は、ローマ字表記の姓名・生年月日・申請IDの入力が必要です。</p>
  </div>
</section>

<section class="article-main">
  <div class="article-main__inner">
    <aside class="toc">
      <p class="toc__head">目次</p>
      <ol>
        <li><a href="#sec-01">ESTA申請の認証可否確認に必要な情報</a></li>
        <li><a href="#sec-02">ESTA申請状況の確認方法・手順</a></li>
        <li><a href="#sec-03">申請状況確認時のステータス</a></li>
        <li><a href="#sec-04">申請フォーム入力時の注意点</a></li>
        <li><a href="#sec-05">申請状況確認ページで知ることができる情報</a></li>
      </ol>
    </aside>

    <article class="article-body">

      <section id="sec-01" class="fade-up">
        <h2>ESTA申請の認証可否確認に必要な情報</h2>
        <p>ESTA申請後は、「<a href="/status/">申請状況の確認</a>」ページから、現在の申請状況を確認することができます。審査には最大72時間(3日間)かかる場合があるため、申請後にステータスが「渡航認証保留中」と表示される場合は、時間をおいて再度ご確認ください。</p>
        <p>申請状況を確認する際には、以下の情報の入力が必要です。</p>

        <h3>姓 / Surname</h3>
        <p>パスポートに記載されているローマ字の姓を入力します。</p>

        <h3>名 / Given name</h3>
        <p>パスポートに記載されているローマ字の名前を入力します。</p>

        <h3>生年月日</h3>
        <p>プルダウンメニューから「年・月・日」を選択します。</p>

        <h3>申請ID(33桁の英数字)</h3>
        <p>ESTA申請完了後に送信される「申請受付完了メール」に記載されています。</p>

        <p>申請IDは、渡航認証の承認可否の確認だけでなく、登録情報の照会にも必要となる重要な番号です。「申請受付完了メール」は削除せず、スクリーンショットやメモなどで大切に保管しておくことをおすすめします。なお、申請IDを使用しての検索は、申請日から90日間のみ有効ですのでご注意ください。</p>
      </section>

      <section id="sec-02" class="fade-up">
        <h2>ESTA申請状況の確認方法・手順</h2>
        <p>ESTA(エスタ)の申請状況は、「US ESTA Apply Website」にて申請手続きを行ったお客様に限り、「申請状況の確認」ページからご確認いただけます。申請後にきちんと承認されているか、追加手続きが必要かを正確に把握することで、安心してアメリカ渡航の準備を進めることができます。</p>
        <p>申請状況の確認手順は、以下の通りです。</p>
        <p><strong>STEP1</strong>：「US ESTA Apply Website」にアクセスし、「申請状況の確認」ページをクリックします。</p>
        <p><strong>STEP2</strong>：申請状況確認フォームが表示されたら、以下の情報を入力してください。</p>
        <ul>
          <li>ローマ字の姓・名</li>
          <li>生年月日</li>
          <li>申請ID(33桁の英数字)</li>
        </ul>
        <p>※申請IDは、申請完了後に送付される「申請受付完了メール」に記載されています。</p>
        <p><strong>STEP3</strong>：すべての情報を入力し終えたら、「申請状況確認」ボタンをクリックしてください。</p>
        <p>入力情報が正しければ、現在のESTA審査ステータスおよび登録情報が表示されます。</p>
      </section>

      <section class="cta-strip cta-strip--solid cta-mid">
        <p class="cta-strip__eyebrow">Start your application</p>
        <h2><span class="h2l1">アメリカ渡航には</span><br class="sp-br">ESTAの申請が必要です。</h2>
        <p>申請完了まで最大3日ほどかかるため、<br class="sp-br">余裕をもってお手続きください。</p>
        <a href="/form/step1" class="cta-btn">✓ ESTA申請をはじめる</a>
      </section>

      <section id="sec-03" class="fade-up">
        <h2>申請状況確認時のステータス</h2>
        <p>ESTA申請状況は、「渡航認証許可」、「渡航認証保留」、「渡航認証拒否」のいずれかが表示されます。</p>

        <h3>渡航認証許可</h3>
        <p>申請内容に不備がなく、米国への渡航が許可されたことを意味します。このステータスが表示された場合、有効期限内であればいつでもアメリカへの渡航が可能です。表示された承認画面は、必ず保存しておきましょう。</p>

        <h3>渡航認証保留</h3>
        <p>申請内容が現在、確認・審査中であることを意味します。何らかのエラーや、追加書類の確認などに時間を要している可能性があります。このステータスが表示された場合は、最大72時間(3日間)待ってから再度ご確認ください。多くの場合は、時間をおいて確認すると「渡航認証許可」まはた「渡航認証拒否」のいずれかの最終結果が表示されます。</p>

        <h3>渡航認証拒否</h3>
        <p>米国への渡航が拒否されたことを意味します。このステータスが表示された場合、ESTAを利用してアメリカに入国することはできません。</p>
        <p>主な拒否理由としては、以下のようなものが考えられます。</p>
        <ul>
          <li>申請内容の不備</li>
          <li>過去の渡航歴に関する問題</li>
          <li>犯罪歴</li>
          <li>過去のビザやESTAの拒否歴</li>
        </ul>
        <p>「渡航認証拒否」の通知を受けた方は、ビザ免除プログラムを利用できません。そのため、在日米国大使館または領事館にて、渡航目的に応じたビザの申請が必要です。</p>
      </section>

      <section id="sec-04" class="fade-up">
        <h2>申請フォーム入力時の注意点</h2>
        <p>ESTAの申請状況が表示されない原因の多くは、入力フォームでの情報の誤りによるものです。申請状況を確認する際は、以下の点にご注意ください。</p>
        <ul>
          <li>姓名は、パスポートに記載されているローマ字表記の通りに入力してください。</li>
          <li>生年月日は「年・月・日」の順で、プルダウンメニューから該当の数字を選択してください。</li>
          <li>申請IDは、33桁の英数字を正確に入力し、英語と数字の打ち間違いに注意してください。</li>
          <li>申請IDは、「申請受付完了メール」に記載されている英数字をご確認ください。</li>
          <li>申請IDを紛失または申請受付完了メールが見つからない場合は、「お問い合わせ」ページより、お問い合わせ内容・氏名・メールアドレスを入力のうえ送信してください。</li>
        </ul>
      </section>

      <section id="sec-05" class="fade-up">
        <h2>申請状況確認ページで知ることができる情報</h2>
        <p>申請状況確認ページでは、ESTA認証の可否だけでなく、申請時に登録した個人情報や渡航関連情報の内容も確認することが可能です。確認できる内容の詳細は、以下の通りです。</p>

        <h3>ESTA申請時の登録情報</h3>
        <p>申請時に登録したご本人の基本情報を確認できます。</p>
        <ul>
          <li>姓/名(ローマ字表記)</li>
          <li>別名や旧姓の有無</li>
          <li>性別</li>
          <li>生年月日</li>
          <li>国籍</li>
        </ul>

        <h3>連絡先情報</h3>
        <p>ESTAの申請完了通知や重要な連絡を受け取るために登録した連絡先情報です。</p>
        <ul>
          <li>登録したメールアドレス</li>
          <li>電話番号</li>
        </ul>

        <h3>住所情報</h3>
        <p>現在お住まいの住所情報(申請時に入力した住所)が確認可能です。</p>
        <ul>
          <li>住所</li>
        </ul>

        <h3>パスポート情報</h3>
        <p>アメリカ渡航の際に使用するパスポート情報が確認できます。</p>
        <ul>
          <li>パスポート番号</li>
          <li>パスポートの発行日、有効期限</li>
          <li>他国のパスポート有無(複数の国籍を持つ場合)</li>
          <li>出生国、都市</li>
          <li>現在および過去の国籍</li>
          <li>GE/NEXUS/SENTRのメンバーシップ</li>
        </ul>

        <h3>旅行・渡航関連情報</h3>
        <p>アメリカ渡航に関する具体的な情報を確認できます。</p>
        <ul>
          <li>第三国への乗り継ぎ(アメリカを経由して他国へ向かうかどうか)</li>
          <li>アメリカでの滞在先住所や連絡先</li>
          <li>就労経験の有無(職歴・実務経験)</li>
          <li>SNSアカウント情報</li>
          <li>緊急連絡先</li>
          <li>両親の氏名</li>
        </ul>

        <h3>アンケート</h3>
        <p>渡航資格に関わる質問への回答内容を確認できます。</p>
        <ul>
          <li>質問事項</li>
          <li>質問事項への回答</li>
        </ul>
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
  return (<><JsonLd data={PAGE_JSON_LD} /><div className="redesign-detail" dangerouslySetInnerHTML={{ __html: BODY_HTML }} /></>);
}
