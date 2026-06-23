import type { Metadata } from 'next';
import { JsonLd, pageJsonLd, seoMetadata } from '@/lib/seo';

const PAGE_PATH = '/list-esta-guide/upload/';
const PAGE_TITLE = 'ESTA申請のパスポート画像・顔写真のアップロード方法【撮影のコツ・エラー対処】 | US ESTA Apply Website';
const PAGE_DESCRIPTION = 'ESTA申請に必要なパスポート画像と顔写真のアップロード方法を解説。対応ファイル形式・サイズ上限、撮影のコツ、OK/NG例、申請フォームでの操作手順、容量オーバーやMRZ読み取りエラーの対処法まで分かりやすく紹介します。';

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
      <em>パスポート画像・顔写真のアップロード方法</em>
    </nav>
    <p class="article__eyebrow">Passport &amp; Photo Upload Guide</p>
    <h1 class="article__title">ESTA申請のパスポート画像・顔写真のアップロード方法</h1>
    <p class="article__lede">ESTA(エスタ)の申請では、個人情報やパスポート情報などの入力に加えて、パスポートの顔写真ページ画像と顔写真のアップロードが必要です。2025年5月29日より顔写真のアップロードが必須化され、いずれかの画像に不備があると申請が受理されない場合があります。本記事では、当サイトの申請フォームを例に、アップロードできる画像の条件、パスポート画像・顔写真それぞれの撮影のコツとOK/NG例、フォームでの操作手順、そしてよくあるエラーと対処法を分かりやすく解説します。</p>
  </div>
</section>

<section class="article-main">
  <div class="article-main__inner">
    <aside class="toc">
      <p class="toc__head">目次</p>
      <ol>
        <li><a href="#sec-01">アップロードが必要なもの・画像の条件</a></li>
        <li><a href="#sec-02">パスポート画像のアップロード方法</a></li>
        <li><a href="#sec-03">顔写真のアップロード方法</a></li>
        <li><a href="#sec-04">よくあるエラーと対処法</a></li>
        <li><a href="#sec-05">よくある質問</a></li>
      </ol>
    </aside>

    <article class="article-body">

      <section id="sec-01" class="fade-up">
        <h2>アップロードが必要なもの・画像の条件</h2>
        <p>ESTA(エスタ)は、2025年5月29日より申請時に顔写真のアップロードが必須となりました。そのため、ESTAを申請する際は「パスポートの顔写真ページ」と「ご本人の顔写真」の2点の画像を提出する必要があります。どちらも申請フォームの「基本情報(STEP1)」でアップロードします。</p>
        <p>アップロードできる画像の条件は次のとおりです。記載内容が明瞭に写っていない画像は、申請が受理されなかったり、受付後に再提出を求められたりする場合があるため、明るい場所で撮影し、見切れやぼやけがないか確認してください。</p>
        <div class="table-scroll"><table>
          <thead><tr><th>項目</th><th>① パスポート画像</th><th>② 顔写真</th></tr></thead>
          <tbody>
            <tr><td>対応ファイル形式</td><td>jpg / jpeg / png / gif</td><td>jpg / jpeg / png</td></tr>
            <tr><td>ファイルサイズ上限</td><td>10MB</td><td>10MB</td></tr>
            <tr><td>必要な写り方</td><td>顔写真ページ全体（機械読み取り部分＝MRZを含む）が写っていること</td><td>肩から頭部まで・無地の背景・正面（パスポートの顔写真は使用不可）</td></tr>
          </tbody>
        </table></div>
        <p>撮影にはスマートフォンとパスポート本体を用意し、明るい場所で撮影します。顔写真は無地の壁を背景にすると認識されやすくなります。当サイトの申請フォームでは、下図のように「パスポートのアップロード」「顔写真のアップロード」の欄が用意されています。</p>
        <figure class="upload-figure upload-figure--wide">
          <picture>
            <source media="(max-width:720px)" srcset="/img/upload/upload-form-sp.jpg">
            <img src="/img/upload/upload-form-pc.jpg" alt="申請フォームのパスポート画像・顔写真アップロード欄" loading="lazy">
          </picture>
          <figcaption>当サイト申請フォーム（STEP1 基本情報）のアップロード欄</figcaption>
        </figure>
      </section>

      <section id="sec-02" class="fade-up">
        <h2>パスポート画像のアップロード方法</h2>
        <p>パスポートの顔写真ページ画像は、記載された情報が読み取れるように撮影することが重要です。撮影のコツ、OK/NG例、フォームでの操作手順の順に解説します。</p>

        <h3>撮影のコツ</h3>
        <p>パスポートは机などの平らな場所で見開きにしてから撮影します。ページやスマートフォンの影が入り込むと不明瞭な画像とみなされるため、角度や位置を調整してください。照明の反射で文字が読み取れない場合は受付後に再提出が必要となるため、フラッシュの使用や、直射日光・照明の真下での撮影は避けましょう。スマートフォンはページの真上から垂直に構えるのがおすすめです。</p>
        <p>また、パスポート下部の機械読み取り部分（MRZコード＝下2行）を含めて、ページ全体が写っていることが必須です。MRZコードはICチップの情報と照合して本人確認に使われるため、途切れたり見切れたりしないよう、少し離して全体を画面に収めて撮影してください。</p>

        <h3>OK / NG例</h3>
        <div class="merits-panel">
          <p class="merits-panel__title">✓ OKな例</p>
          <ul class="bullets">
            <li>正面から撮影し、氏名・生年月日・国籍・パスポート番号などが鮮明に写っている</li>
            <li>顔写真ページ全体とMRZコード（下2行）まで収まっている</li>
            <li>影・指の写り込みや反射がなく、ピントが合っている（縦・横どちらの向きでも可）</li>
          </ul>
        </div>
        <div class="merits-panel">
          <p class="merits-panel__title">✕ NGな例（再提出になります）</p>
          <ul class="bullets">
            <li>一部が見切れている・指などで隠れている</li>
            <li>ページ全体（特にMRZコード）が写っていない</li>
            <li>ピントが合わずぼやけている／フラッシュ・照明の反射で文字が読めない</li>
          </ul>
        </div>

        <h3>操作手順</h3>
        <p>明るい場所でパスポートの顔写真ページを撮影し、氏名・生年月日・性別・国籍・パスポート情報（番号、発行国、発行日、有効期間満了日）とMRZコードが写っていることを確認します。次に、申請フォームの「パスポートのアップロード」欄の「画像を選択してください」から画像を選び、内容を確認して「アップロード」を押します。パソコンに画像がない場合は「スマホから送信（QR）」を使えば、スマートフォンで撮影した画像をその場でアップロードできます。</p>
        <figure class="upload-figure">
          <img src="/img/upload/upload-method.jpg" alt="申請フォームのアップロード方法の選択画面" loading="lazy">
          <figcaption>「写真ライブラリから選択」または「カメラで撮影」を選べます</figcaption>
        </figure>
      </section>

      <section id="sec-03" class="fade-up">
        <h2>顔写真のアップロード方法</h2>
        <p>顔写真はパスポートの顔写真ページとは別の画像を提出します。パスポート画像より規定が厳しいため、提出前に条件を満たしているか必ず確認してください。</p>

        <h3>撮影のコツ</h3>
        <p>照明が明るく、無地の壁を背景にした場所で撮影します。顔が画面の中央に来るように調整し、正面を向いた自然な表情（口は閉じた状態）で撮影しましょう。スマートフォンを持つ手の肘を脇に固定すると手ブレを防げます。タイマー機能を使うと、カメラを正面から見た自然な状態で撮影しやすくなります。メガネ・帽子・マスクなどは外して撮影してください（特にメガネの反射で目元が隠れると本人確認ができません）。</p>

        <h3>OK / NG例</h3>
        <div class="merits-panel">
          <p class="merits-panel__title">✓ OKな例</p>
          <ul class="bullets">
            <li>無地の背景で、肩から頭部までが写っている</li>
            <li>正面を向き、顔全体に均一に光が当たっている（影が入っていない）</li>
            <li>加工・フィルターのない、自然な表情のカラー写真</li>
          </ul>
        </div>
        <div class="merits-panel">
          <p class="merits-panel__title">✕ NGな例（却下されます）</p>
          <ul class="bullets">
            <li>肩から頭部までが写っていない／背景が無地ではない</li>
            <li>白黒写真、加工・フィルターを使用している</li>
            <li>帽子・サングラス・マスク・マフラーなどを着用している</li>
            <li>パスポートの顔写真を切り取ったもの／横顔・斜めから撮影したもの</li>
          </ul>
        </div>

        <h3>アップロード手順</h3>
        <p>枠内に顔が収まるようカメラの位置を調節し、目の高さをカメラに合わせて撮影します。撮影した写真に不備がないか（背景・装飾品・加工の有無など）を確認したうえで、申請フォームの「顔写真のアップロード」欄の「写真を選択してください」から画像を選び、「アップロード」を押します。こちらも「スマホから送信（QR）」に対応しています。なお、顔写真の対応形式は jpg / jpeg / png（サイズ上限10MB）で、パスポートの顔写真は使用できません。</p>
      </section>

      <section id="sec-04" class="fade-up">
        <h2>よくあるエラーと対処法</h2>
        <p>画像のアップロード時に、容量が規定を超えている場合や、画像の内容が確認できなかった場合にはエラーになります。代表的なエラーと対処法を紹介します。</p>

        <h3>容量オーバー（10MBを超えている）</h3>
        <p>アップロードできるファイルサイズは10MBまでです。これを超えるとエラーになります。高画質で保存された画像はサイズが大きくなりがちなので、必要に応じて画質や解像度を下げて、ファイル容量を10MB以下に減らしてください。</p>

        <h3>照明の反射で読み取れない</h3>
        <p>画像の一部が照明の反射で確認できないとエラーになります。カメラのフラッシュは使わず、直射日光が当たる場所や照明の真下を避けて撮り直してください。パスポートは机に見開きで置き、スマートフォンを真上から垂直に構えると反射を抑えられます。</p>

        <h3>MRZコードが読み取れない</h3>
        <p>パスポート下部のMRZコード（下2行）が読み取れないと、パスポート情報を取得できずエラーになります。MRZコードを含めてページ全体が画面に収まるよう、スマートフォンを少し離して撮影してください。MRZ部分が途切れたり、指や影で隠れたりしていないかも確認しましょう。</p>
      </section>

      <section id="sec-05" class="fade-up">
        <h2>よくある質問</h2>
        <div class="faq" style="margin-top:32px">
          <details open>
            <summary>顔写真のアップロードは必ず必要ですか？</summary>
            <div class="answer"><p>はい。2025年5月29日より、ESTA申請時の顔写真のアップロードが必須となりました。パスポートの顔写真ページ画像とあわせて、ご本人の顔写真の2点が必要です。いずれかが不足していると申請を完了できません。</p></div>
          </details>
          <details>
            <summary>アップロードできるファイル形式とサイズを教えてください</summary>
            <div class="answer"><p>パスポート画像は jpg・jpeg・png・gif、顔写真は jpg・jpeg・png に対応しています。いずれもファイルサイズの上限は10MBです。10MBを超える場合はエラーになるため、画質を下げて容量を小さくしてからアップロードしてください。</p></div>
          </details>
          <details>
            <summary>パスポートの顔写真を、そのまま顔写真として使えますか？</summary>
            <div class="answer"><p>使えません。顔写真は、パスポートの顔写真ページとは別に撮影した画像を提出する必要があります。パスポートの写真を切り取ったものや、同じ画像の流用は規定違反となり、申請が却下される可能性があります。</p></div>
          </details>
          <details>
            <summary>メガネや帽子を着けたまま撮影してもよいですか？</summary>
            <div class="answer"><p>いいえ。顔写真はメガネ・帽子・サングラス・マスクなどを外して撮影してください。特にメガネのフレームやレンズの反射で目元が隠れると、顔写真による本人確認が難しくなり却下の原因になります。無地の背景で、正面・自然な表情（口は閉じる）で撮影しましょう。</p></div>
          </details>
          <details>
            <summary>スマートフォンで撮影した画像でも申請できますか？</summary>
            <div class="answer"><p>はい、スマートフォンで撮影した画像で問題ありません。明るい場所で、見切れ・ぼやけ・反射がないように撮影してください。パソコンで申請中にスマートフォンの画像を使いたい場合は、アップロード欄の「スマホから送信（QR）」からその場でアップロードできます。</p></div>
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
    <a href="/list-esta-guide/address-guide/"><span class="related__media"><img src="/img/related/address-guide.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">03.</span><span class="related__title">住所・出生地・勤務先ガイド</span><span class="related__more">Read more</span></span></a>
    <a href="/list-esta-application/place-of-birth/"><span class="related__media"><img src="/img/related/03-address-writing.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">04.</span><span class="related__title">出生地や住所の書き方</span><span class="related__more">Read more</span></span></a>
  </div>
</section>
`;

export default function Page() {
  return (<><JsonLd data={PAGE_JSON_LD} /><div className="redesign-detail" dangerouslySetInnerHTML={{ __html: BODY_HTML }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "顔写真のアップロードは必ず必要ですか？", "acceptedAnswer": {"@type": "Answer", "text": "はい。2025年5月29日より、ESTA申請時の顔写真のアップロードが必須となりました。パスポートの顔写真ページ画像とあわせて、ご本人の顔写真の2点が必要です。いずれかが不足していると申請を完了できません。"}}, {"@type": "Question", "name": "アップロードできるファイル形式とサイズを教えてください", "acceptedAnswer": {"@type": "Answer", "text": "パスポート画像は jpg・jpeg・png・gif、顔写真は jpg・jpeg・png に対応しています。いずれもファイルサイズの上限は10MBです。10MBを超える場合はエラーになるため、画質を下げて容量を小さくしてからアップロードしてください。"}}, {"@type": "Question", "name": "パスポートの顔写真を、そのまま顔写真として使えますか？", "acceptedAnswer": {"@type": "Answer", "text": "使えません。顔写真は、パスポートの顔写真ページとは別に撮影した画像を提出する必要があります。パスポートの写真を切り取ったものや、同じ画像の流用は規定違反となり、申請が却下される可能性があります。"}}, {"@type": "Question", "name": "メガネや帽子を着けたまま撮影してもよいですか？", "acceptedAnswer": {"@type": "Answer", "text": "いいえ。顔写真はメガネ・帽子・サングラス・マスクなどを外して撮影してください。特にメガネのフレームやレンズの反射で目元が隠れると、顔写真による本人確認が難しくなり却下の原因になります。無地の背景で、正面・自然な表情（口は閉じる）で撮影しましょう。"}}, {"@type": "Question", "name": "スマートフォンで撮影した画像でも申請できますか？", "acceptedAnswer": {"@type": "Answer", "text": "はい、スマートフォンで撮影した画像で問題ありません。明るい場所で、見切れ・ぼやけ・反射がないように撮影してください。パソコンで申請中にスマートフォンの画像を使いたい場合は、アップロード欄の「スマホから送信（QR）」からその場でアップロードできます。"}}]}) }} /></>);
}
