import type { Metadata } from 'next';
import { JsonLd, pageJsonLd, seoMetadata } from '@/lib/seo';

const PAGE_PATH = '/list-esta-guide/';
const PAGE_TITLE = 'ESTA申請ガイド一覧 | US ESTA Apply Website';
const PAGE_DESCRIPTION = 'ESTA申請に役立つガイド一覧です。料金比較、住所表記、家族申請、未成年・パスポート関連、更新・延長、却下時の対処、ハワイ・乗り継ぎなど、シーン別に詳しく解説します。';

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
    <nav class="crumb">
      <a href="/">HOME</a><span>›</span>
      <em>ESTA申請ガイド一覧</em>
    </nav>
    <p class="article__eyebrow">ESTA Application Guides</p>
    <h1 class="article__title">ESTA申請ガイド一覧</h1>
    <p class="article__lede">ESTA(エスタ)の申請料金や住所・出生地の英語表記、家族やグループでの申請、未成年・パスポート関連、更新方法、却下時の対処、ハワイや乗り継ぎでの必要性など、<span style="white-space:nowrap">シーン別に詳しく解説します。</span></p>
  </div>
</section>

<section class="section" style="padding-top:72px;padding-bottom:96px">
  <div class="section__inner fade-up">
    <div class="related cat-grid" style="max-width:1240px">
      <a href="/list-esta-guide/cost"><span class="related__media"><img src="/img/related/cost.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">01.</span><span class="related__title">ESTAの申請料金 公式比較</span><span class="related__excerpt">公式サイト(CBP)の手数料と代行サイトの料金相場、支払い方法、為替レートの影響まで、料金面の違いを比較解説します。</span><span class="related__more">Read more</span></span></a>
      <a href="/list-esta-guide/address-guide"><span class="related__media"><img src="/img/related/address-guide.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">02.</span><span class="related__title">住所・出生地・勤務先の英語表記ガイド</span><span class="related__excerpt">ESTA申請時に必要な住所・出生地・勤務先の英語(ローマ字)表記ルールを、記入例を交えて分かりやすく解説します。</span><span class="related__more">Read more</span></span></a>
      <a href="/list-esta-guide/group-family"><span class="related__media"><img src="/img/related/group-family.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">03.</span><span class="related__title">ESTAのグループ申請・家族申請の方法</span><span class="related__excerpt">家族やグループで渡米する際のESTA申請方法、代理申請のポイント、複数名分の一括手続きの注意点を解説します。</span><span class="related__more">Read more</span></span></a>
      <a href="/list-esta-guide/children"><span class="related__media"><img src="/img/related/children.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">04.</span><span class="related__title">未成年のESTA申請方法</span><span class="related__excerpt">子供や赤ちゃんもESTAは必要です。代理申請の方法、必要書類、記入時の注意点を年齢別に詳しく解説します。</span><span class="related__more">Read more</span></span></a>
      <a href="/list-esta-guide/renewal"><span class="related__media"><img src="/img/related/renewal.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">05.</span><span class="related__title">ESTAの更新・延長方法を解説</span><span class="related__excerpt">ESTAには更新制度がないため再申請が必要です。期限切れ前後の再申請手順、申請料金、注意点を解説します。</span><span class="related__more">Read more</span></span></a>
      <a href="/list-esta-guide/denied"><span class="related__media"><img src="/img/related/denied.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">06.</span><span class="related__title">却下・拒否された場合の対処法</span><span class="related__excerpt">ESTAが「渡航認証拒否」となった場合の原因と対処法、再申請の可否、ビザ取得への切り替え手順を解説します。</span><span class="related__more">Read more</span></span></a>
      <a href="/list-esta-guide/transit"><span class="related__media"><img src="/img/related/transit.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">07.</span><span class="related__title">アメリカでの乗り継ぎにESTAは必要？</span><span class="related__excerpt">アメリカを経由して第三国へ渡航する場合のESTAの必要性、申請の有無、乗り継ぎ時の入国審査の流れを解説します。</span><span class="related__more">Read more</span></span></a>
      <a href="/list-esta-guide/passport"><span class="related__media"><img src="/img/related/passport.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">08.</span><span class="related__title">ESTAとパスポートの関係</span><span class="related__excerpt">パスポート更新時のESTA再申請の必要性、残存有効期間、申請時の注意点を分かりやすく解説します。</span><span class="related__more">Read more</span></span></a>
      <a href="/list-esta-guide/official-vs-fake"><span class="related__media"><img src="/img/related/official-vs-fake.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">09.</span><span class="related__title">公式サイトと偽サイトの見分け方</span><span class="related__excerpt">ESTA公式サイト(CBP)と偽サイト・詐欺サイトの見分け方を、URLや料金、運営者情報など複数の観点から解説します。</span><span class="related__more">Read more</span></span></a>
      <a href="/list-esta-guide/hawaii"><span class="related__media"><img src="/img/related/hawaii.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">10.</span><span class="related__title">ハワイ入国にESTAは必要？</span><span class="related__excerpt">ハワイ旅行でもESTAの取得は必要です。ハワイ渡航時のESTA申請方法、入国審査の流れ、注意点を解説します。</span><span class="related__more">Read more</span></span></a>
      <a href="/list-esta-guide/guam"><span class="related__media"><img src="/img/related/guam.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">11.</span><span class="related__title">グアム入国にESTAは必要？</span><span class="related__excerpt">グアムや北マリアナ諸島へ渡航する際のESTAの要否、必要書類、申請タイミング、入国時の注意点や乗継ぎ時のルールまでまとめて解説します。</span><span class="related__more">Read more</span></span></a>
    </div>
  </div>
</section>

<section class="cta-strip cta-strip--solid">
  <p class="cta-strip__eyebrow">Start your application</p>
  <h2>アメリカ渡航には<br class="sp-br">ESTAの申請が必要です。</h2>
  <p>申請完了まで最大3日ほどかかるため、<br class="sp-br">余裕をもってお手続きください。</p>
  <a href="/form/step1" class="cta-btn">✓ ESTA申請をはじめる</a>
</section>
`;

export default function Page() {
  return (<><JsonLd data={PAGE_JSON_LD} /><div className="redesign-detail" dangerouslySetInnerHTML={{ __html: BODY_HTML }} /></>);
}
