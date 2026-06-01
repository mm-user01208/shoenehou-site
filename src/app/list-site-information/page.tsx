import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'サイト情報一覧 | US ESTA Apply Website',
  description: '当サイトの利用に関する各種フォームや規約、運営者情報を一覧でご案内しています。ご利用前に確認しておきたい重要な内容を分かりやすくまとめています。',
};

const BODY_HTML = `
<section class="article-hero">
  <div class="article-hero__inner">
    <nav class="crumb">
      <a href="/">HOME</a><span>›</span>
      <em>サイト情報一覧</em>
    </nav>
    <p class="article__eyebrow">Site Information</p>
    <h1 class="article__title">サイト情報一覧</h1>
    <p class="article__lede">当サイトの利用に関する各種フォーム、規約、運営者情報を一覧にまとめています。<span style="white-space:nowrap">必要な項目からご確認ください。</span></p>
  </div>
</section>

<section class="section" style="padding-top:72px;padding-bottom:96px">
  <div class="section__inner fade-up">
    <div class="related cat-grid" style="max-width:1240px">
      <a href="/list-site-information/entry"><span class="related__media"><img src="/img/related/04-apply-method.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">01.</span><span class="related__title">ESTA申請書記入</span><span class="related__excerpt">アメリカ渡航に必要なESTA申請フォームへの入力手順を、各セクションごとに記入例つきで詳しくご案内します。</span><span class="related__more">Read more</span></span></a>
      <a href="/list-site-information/status"><span class="related__media"><img src="/img/related/02-official-website.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">02.</span><span class="related__title">申請状況確認</span><span class="related__excerpt">ESTA申請後の審査ステータスや認証結果を確認する手順、確認時に必要となる情報をまとめてご案内します。</span><span class="related__more">Read more</span></span></a>
      <a href="/list-site-information/contact"><span class="related__media"><img src="/img/related/06-us-contact.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">03.</span><span class="related__title">お問い合わせ</span><span class="related__excerpt">ESTA申請に関するご質問や、当サイトのサービスについてのお問い合わせはこちらの専用フォームからお願いします。</span><span class="related__more">Read more</span></span></a>
      <a href="/list-site-information/privacy-policy"><span class="related__media"><img src="/img/related/01-esta-toha.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">04.</span><span class="related__title">個人情報保護方針</span><span class="related__excerpt">お預かりした個人情報の取り扱い方針、利用目的、安全管理体制と継続的な見直しの方針について詳しくご案内します。</span><span class="related__more">Read more</span></span></a>
      <a href="/list-site-information/aboutus"><span class="related__media"><img src="/img/related/05-official-apply.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">05.</span><span class="related__title">特定商取引法に基づく表記</span><span class="related__excerpt">特定商取引法に基づくサービス内容、運営者情報、取引条件、返金ポリシーをまとめて明確に記載しています。</span><span class="related__more">Read more</span></span></a>
      <a href="/list-site-information/contents-policy"><span class="related__media"><img src="/img/related/03-address-writing.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">06.</span><span class="related__title">コンテンツポリシー</span><span class="related__excerpt">当サイトで掲載する情報の品質基準、編集方針、第三者リンクの取り扱いと運営方針について詳しく解説します。</span><span class="related__more">Read more</span></span></a>
      <a href="/list-site-information/agreement"><span class="related__media"><img src="/img/related/07-expiration.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">07.</span><span class="related__title">利用規約</span><span class="related__excerpt">当サイトのサービスをご利用いただくにあたっての利用規約、禁止事項、責任範囲、免責事項について明記しています。</span><span class="related__more">Read more</span></span></a>
      <a href="/list-site-information/browser"><span class="related__media"><img src="/img/related/08-mobile-app.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">08.</span><span class="related__title">推奨ブラウザ</span><span class="related__excerpt">本サイトを快適にご利用いただくために推奨するブラウザ環境、対応OS、動作確認済みのバージョンをご案内します。</span><span class="related__more">Read more</span></span></a>
      <a href="/sitemap"><span class="related__media"><img src="/img/related/09-guam.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">09.</span><span class="related__title">サイトマップ</span><span class="related__excerpt">当サイト内のすべてのページをカテゴリー別に整理して、目的の情報へすばやくアクセスできるようご案内します。</span><span class="related__more">Read more</span></span></a>
    </div>
  </div>
</section>

<section class="cta-strip cta-strip--solid">
  <p class="cta-strip__eyebrow">Start your application</p>
  <h2>アメリカ渡航には<br class="sp-br">ESTAの申請が必要です。</h2>
  <p>申請完了まで最大3日ほどかかるため、<br class="sp-br">余裕をもってお手続きください。</p>
  <a href="/list-site-information/entry" class="cta-btn">✓ ESTA申請をはじめる</a>
</section>
`;

export default function Page() {
  return <div className="redesign-detail" dangerouslySetInnerHTML={{ __html: BODY_HTML }} />;
}
