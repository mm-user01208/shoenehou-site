import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ | US ESTA Apply Website',
  description: 'ESTA申請やサービスに関するご質問はお問い合わせフォームよりお寄せください。日本語サポート対応です。',
};

const BODY_HTML = `
<section class="article-hero">
  <div class="article-hero__inner">
    <nav class="crumb">
      <a href="/">HOME</a><span>›</span>
      <a href="/list-site-information">サイト情報一覧</a><span>›</span>
      <em>お問い合わせ</em>
    </nav>
    <p class="article__eyebrow">Contact Us</p>
    <h1 class="article__title">お問い合わせ</h1>
    <p class="article__lede">ESTA申請に関するご質問や当サイトのサービスに関するお問い合わせはこちらからお願いします。</p>
  </div>
</section>

<section class="article-main">
  <div class="article-main__inner article-main__inner--no-toc">
    <article class="article-body">

      <section class="fade-up">
        <h2>お問い合わせのご案内</h2>
        <p>お問い合わせフォームは現在準備中です。準備が整い次第、ESTA申請に関するご質問、申請状況の確認、当サイトサービスに関するご相談など、日本語にてお受けいたします。</p>
        <p>お急ぎの場合は、CBP(米国税関・国境警備局)の公式情報や、在日米国大使館・総領事館の案内ページもあわせてご確認ください。</p>
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
