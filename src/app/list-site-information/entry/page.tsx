import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ESTA申請書記入 | US ESTA Apply Website',
  description: 'ESTA申請フォームへの入力ページ。準備が整い次第、当サイトから日本語サポート付きで申請いただけるようになります。',
};

const BODY_HTML = `
<section class="article-hero">
  <div class="article-hero__inner">
    <nav class="crumb">
      <a href="/">HOME</a><span>›</span>
      <a href="/list-site-information">サイト情報一覧</a><span>›</span>
      <em>ESTA申請書記入</em>
    </nav>
    <p class="article__eyebrow">Application Entry</p>
    <h1 class="article__title">ESTA申請書記入</h1>
    <p class="article__lede">アメリカ渡航に必要な電子渡航認証ESTAの申請フォームです。準備が整い次第、日本語サポート付きでご利用いただけます。</p>
  </div>
</section>

<section class="article-main">
  <div class="article-main__inner article-main__inner--no-toc">
    <article class="article-body">

      <section class="fade-up">
        <h2>ESTA申請書のご準備について</h2>
        <p>ESTA申請フォームは現在準備中です。準備が整い次第、当サイトの専用フォームから日本語サポート付きで申請手続きを行っていただけるようになります。</p>
        <p>ESTAの申請には、有効なパスポート、申請料の支払いに使用するクレジットカード、通知を受け取るためのメールアドレスをご準備ください。申請後の審査には最大で72時間かかる場合があるため、出発日の3日前までに申請を完了することを推奨いたします。</p>
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
`;

export default function Page() {
  return <div className="redesign-detail" dangerouslySetInnerHTML={{ __html: BODY_HTML }} />;
}
