import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ESTA申請関連情報一覧 | US ESTA Apply Website',
  description: 'ESTA申請に関する要件や最新情報、注意点、申請手順、よくある質問を各ページでまとめています。渡航前に確認しておきたい重要なポイントを分かりやすく解説します。',
};

const BODY_HTML = `<div class="redesign-detail">
<section class="article-hero">
  <div class="article-hero__inner">
    <nav class="crumb">
      <a href="/">HOME</a><span>›</span>
      <em>ESTA申請関連情報一覧</em>
    </nav>
    <p class="article__eyebrow">ESTA Application Articles</p>
    <h1 class="article__title">ESTA申請関連情報一覧</h1>
    <p class="article__lede">ESTA(エスタ)の申請対象・手順・料金・有効期限など、渡航前に確認しておきたい要点を各記事にまとめています。<span style="white-space:nowrap">気になるトピックからご確認ください。</span></p>
  </div>
</section>

<section class="section" style="padding-top:72px;padding-bottom:96px">
  <div class="section__inner fade-up">
    <div class="related cat-grid" style="max-width:1240px">
      <a href="/list-esta-application/esta"><span class="related__media"><img src="/img/related/01-esta-toha.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">01.</span><span class="related__title">ESTA(エスタ)とは？事前入国審査制度を解説</span><span class="related__excerpt">アメリカへ短期渡航する際に必要な電子渡航認証ESTA(エスタ)の概要を、申請対象者・必要要件・利用条件・取得後の有効期間まで詳しく解説します。</span><span class="related__more">Read more</span></span></a>
      <a href="/list-esta-application/esta-flow"><span class="related__media"><img src="/img/related/04-apply-method.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">02.</span><span class="related__title">【記入例付き】ESTAの申請方法を解説</span><span class="related__excerpt">ESTA申請フォームへの入力例を交えながら、姓名や住所、パスポート情報の記入手順や注意点、申請完了までの一連の流れを分かりやすく解説します。</span><span class="related__more">Read more</span></span></a>
      <a href="/list-esta-application/place-of-birth"><span class="related__media"><img src="/img/related/03-address-writing.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">03.</span><span class="related__title">ESTA申請時の出生地や住所の書き方を解説</span><span class="related__excerpt">ESTA申請時に求められる出生地(出生都市)や現住所のローマ字表記ルールを、市区町村レベルまでの実例を交えて具体的かつ分かりやすくご案内します。</span><span class="related__more">Read more</span></span></a>
      <a href="/us-contact-details"><span class="related__media"><img src="/img/related/06-us-contact.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">04.</span><span class="related__title">米国内の連絡先情報の記入方法</span><span class="related__excerpt">ESTA申請時に必要となる米国内の滞在先住所・電話番号の正しい記入方法を、宿泊先未定の場合の対応や具体的な記入例とともに詳しく紹介します。</span><span class="related__more">Read more</span></span></a>
      <a href="/list-esta-application/fee"><span class="related__media"><img src="/img/related/02-official-website.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">05.</span><span class="related__title">ESTA(エスタ)の申請料金</span><span class="related__excerpt">ESTAの公式申請手数料、当サイト経由でかかる代行手数料、対応している決済方法、領収書の発行手順と注意事項までをひとまとめに解説します。</span><span class="related__more">Read more</span></span></a>
      <a href="/list-esta-application/expiration-date"><span class="related__media"><img src="/img/related/07-expiration.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">06.</span><span class="related__title">ESTAの有効期限と再申請・確認の方法</span><span class="related__excerpt">ESTAの有効期限は発行から2年間です。パスポート期限との関係や再申請が必要となる条件、期限切れ前の更新手順や確認方法を詳しく解説します。</span><span class="related__more">Read more</span></span></a>
      <a href="/list-esta-application/official-cbp"><span class="related__media"><img src="/img/related/05-official-apply.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">07.</span><span class="related__title">ESTA公式ウェブサイトについて解説</span><span class="related__excerpt">CBP(米国税関・国境警備局)が運営するESTA申請の公式ウェブサイトの役割や利用方法、当サイト経由での申請との違いや注意点を詳しく解説します。</span><span class="related__more">Read more</span></span></a>
      <a href="/list-esta-application/cbp-flow"><span class="related__media"><img src="/img/related/04-apply-method.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">08.</span><span class="related__title">ESTA申請方法と取得手順を徹底解説</span><span class="related__excerpt">CBPは出発の72時間前までの申請を推奨しています。ESTA取得に必要な情報や申請ステップ、認証完了までの一連の流れを丁寧に解説します。</span><span class="related__more">Read more</span></span></a>
      <a href="/list-esta-application/application"><span class="related__media"><img src="/img/related/08-mobile-app.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">09.</span><span class="related__title">アプリを使ったESTA申請方法を解説</span><span class="related__excerpt">CBP One モバイルアプリを使ったESTA申請の手順や、アプリならではの便利機能、利用時の注意点・対応OSバージョンまで分かりやすく解説します。</span><span class="related__more">Read more</span></span></a>
      <a href="/list-esta-application/status-check"><span class="related__media"><img src="/img/related/02-official-website.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">10.</span><span class="related__title">ESTA申請状況の確認方法</span><span class="related__excerpt">ESTA申請後の審査状況や認証結果を確認する方法、姓名・生年月日・申請IDの入力手順、承認や保留・拒否となった場合の対応について解説します。</span><span class="related__more">Read more</span></span></a>
      <a href="/list-esta-application/guam"><span class="related__media"><img src="/img/related/09-guam.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">11.</span><span class="related__title">グアム入国にESTAは必要？</span><span class="related__excerpt">グアムや北マリアナ諸島へ渡航する際のESTAの要否、必要書類、申請タイミング、入国時の注意点や乗継ぎ時のルールまでまとめて解説します。</span><span class="related__more">Read more</span></span></a>
    </div>
  </div>
</section>

<section class="cta-strip cta-strip--solid">
  <p class="cta-strip__eyebrow">Start your application</p>
  <h2>アメリカ渡航には<br class="sp-br">ESTAの申請が必要です。</h2>
  <p>申請完了まで最大3日ほどかかるため、<br class="sp-br">余裕をもってお手続きください。</p>
  <a href="/list-site-information/entry" class="cta-btn">✓ ESTA申請をはじめる</a>
</section>
</div><!--$--><!--/$-->`;

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />;
}
