import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '申請状況確認 | US ESTA Apply Website',
  description: '当サイトを通じて行ったESTA申請の審査状況や認証結果を確認できるページです。準備が整い次第ご利用いただけます。',
};

const BODY_HTML = `<div class="redesign-detail">
<section class="article-hero">
  <div class="article-hero__inner">
    <nav class="crumb">
      <a href="/">HOME</a><span>›</span>
      <a href="/list-site-information">サイト情報一覧</a><span>›</span>
      <em>申請状況確認</em>
    </nav>
    <p class="article__eyebrow">Application Status</p>
    <h1 class="article__title">申請状況確認</h1>
    <p class="article__lede">当サイトを通じてお申し込みいただいた方が、申請状況や認証結果を確認するためのページです。</p>
  </div>
</section>

<section class="article-main">
  <div class="article-main__inner article-main__inner--no-toc">
    <article class="article-body">

      <section class="fade-up">
        <h2>申請状況確認のご利用について</h2>
        <p>申請状況確認フォームは現在準備中です。準備が整い次第、姓名・生年月日・申請IDを入力することで、ESTAの審査ステータスおよび認証結果をご確認いただけるようになります。</p>
        <p>個人情報保護の観点から、申請状況の確認はお申し込み日から90日以内に限ります。確認時に必要となる申請IDは、申請完了時に登録メールアドレスへ送信されますので、大切に保管してください。</p>
      </section>

    </article>
  </div>
</section>

<section class="cta-strip cta-strip--solid">
  <p class="cta-strip__eyebrow">Start your application</p>
  <h2>アメリカ渡航には<br class="sp-br">ESTAの申請が必要です</h2>
  <p>申請には最大3日かかるため、<br class="sp-br">余裕を持ってお手続きください。</p>
  <a href="/list-site-information/entry" class="cta-btn">✓ ESTA申請をはじめる</a>
</section>
</div><!--$--><!--/$-->`;

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />;
}
