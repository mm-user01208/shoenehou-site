import type { Metadata } from 'next';
import { JsonLd, pageJsonLd, seoMetadata } from '@/lib/seo';

const PAGE_PATH = '/list-esta-application/when-to-apply/';
const PAGE_TITLE = 'ESTAはいつまでに申請すべき？いつから申請できる？申請タイミング完全ガイド【2026年】 | US ESTA Apply Website';
const PAGE_DESCRIPTION = 'ESTA申請のタイミングを解説。結論、出発の72時間前までの申請が推奨されています。いつから申請できるか、直前申請のリスク、更新のタイミング、入国審査でいつ使うかまで、シーン別にまとめました。';

export const metadata: Metadata = seoMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'ESTAは出発の何日前までに申請すればいいですか？', acceptedAnswer: { '@type': 'Answer', text: '承認まで最大72時間（3日間）かかる場合があるため、遅くとも出発の72時間（3日）前までに申請することが推奨されています。余裕をもって早めの申請が安心です。' } },
    { '@type': 'Question', name: '出発の前日でも間に合いますか？', acceptedAnswer: { '@type': 'Answer', text: '多くの場合は短時間で承認されますが、審査に最大72時間（3日間）かかる場合があり、即時に承認されるとは限りません。前日・当日の申請は承認が間に合わないリスクがあるため推奨されません。' } },
    { '@type': 'Question', name: 'ESTAは何ヶ月前から申請できますか？', acceptedAnswer: { '@type': 'Answer', text: '渡航の予定が決まったら早めに申請しておくと安心です。ESTAの有効期限は原則2年間のため、その範囲であれば余裕をもって事前に申請できます（有効期限の詳細は有効期限ガイドをご確認ください）。' } },
    { '@type': 'Question', name: '申請した内容やステータスはいつ確認できますか？', acceptedAnswer: { '@type': 'Answer', text: '審査に最大72時間かかる場合があるため、申請日の翌日以降を目安に、公式サイトの申請状況確認ページでステータスをご確認ください。' } },
    { '@type': 'Question', name: '入国審査ではESTAをいつ使いますか？', acceptedAnswer: { '@type': 'Answer', text: 'ESTAはパスポートに電子的に紐づくため、入国審査でESTAの控えの提示は必須ではありません。入国審査の流れや質問例はアメリカ入国審査ガイドで解説しています。' } },
  ],
};

const PAGE_JSON_LD = [
  ...pageJsonLd({
    path: PAGE_PATH,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  }),
  FAQ_SCHEMA,
];

const BODY_HTML = `
<section class="article-hero">
  <div class="article-hero__inner">
    <nav class="crumb" aria-label="パンくず">
      <a href="/">HOME</a><span>›</span>
      <a href="/list-esta-application">ESTA申請関連情報一覧</a><span>›</span>
      <em>ESTAの申請タイミング（いつまでに・いつから）</em>
    </nav>
    <p class="article__eyebrow">When to apply</p>
    <h1 class="article__title">ESTAはいつまでに申請すべき？いつから申請できる？</h1>
    <p class="article__lede">ESTA(エスタ)の申請は「いつまでに」「いつから」行えばよいのでしょうか。承認までにかかる時間をふまえた申請タイミングの目安を、シーン別にわかりやすくまとめました。</p>
    <div style="margin-top:24px;padding:20px 22px;background:#fbf7ee;border:1px solid #e3d6b8;border-left:4px solid #b8974a;border-radius:8px">
      <p style="margin:0 0 8px;font-size:13px;font-weight:700;letter-spacing:.08em;color:#b8974a">結論</p>
      <p style="margin:0 0 8px;font-size:16px;font-weight:700;line-height:1.7;color:#1c2733">ESTAの審査は最大72時間（3日間）かかる場合があるため、遅くとも<strong>出発の72時間（3日）前まで</strong>に申請するのが安心です。</p>
      <p style="margin:0;font-size:14.5px;line-height:1.9;color:#3a4753">多くの場合は短時間で承認されますが、即時に承認されるとは限りません。渡航の予定が決まったら、余裕をもって早めに申請しておきましょう。<br>※ESTAの「有効期限・期限切れ・再申請」については <a href="/list-esta-application/expiration-date/" style="color:#b8974a;text-decoration:underline">ESTAの有効期限ガイド</a> をご覧ください。</p>
    </div>
  </div>
</section>

<section class="article-main">
  <div class="article-main__inner">
    <aside class="toc">
      <p class="toc__head">目次</p>
      <ol>
        <li><a href="#sec-01">いつまでに申請すべきか</a></li>
        <li><a href="#sec-02">いつから申請できるか</a></li>
        <li><a href="#sec-03">シーン別の申請タイミング</a></li>
        <li><a href="#sec-04">入国審査でESTAはいつ使うか</a></li>
        <li><a href="#sec-05">よくある質問</a></li>
      </ol>
    </aside>

    <article class="article-body">
      <section id="sec-01" class="fade-up">
        <h2>いつまでに申請すべきか</h2>
        <p>ESTA(エスタ)の申請後、承認までには<strong>最大72時間（3日間）かかる場合があります</strong>。多くの場合は短時間で結果が出ますが、即時に承認されるとは限りません。</p>
        <p>そのため、遅くとも<strong>出発の72時間（3日）前まで</strong>に申請を済ませておくのが安心です。旅行や出張の予定が決まったら、できるだけ早めに手続きしておきましょう。</p>
        <p>申請方法の全体像は <a href="/list-esta-application/application/">アプリを使ったESTA申請方法</a> で解説しています。</p>
      </section>

      <section id="sec-02" class="fade-up">
        <h2>いつから申請できるか</h2>
        <p>渡航の予定が決まったら、早めに申請しておくことができます。ESTAの有効期限は原則2年間のため、その範囲であれば余裕をもって事前に申請しておいても問題ありません。</p>
        <p>「まだ日程がはっきり決まっていない」という場合でも、渡航が決まった段階で早めに申請しておくと、承認待ちで慌てずに済みます。</p>
        <p>なお、有効期限や期限切れ後の再申請の詳しい条件は <a href="/list-esta-application/expiration-date/">ESTAの有効期限と再申請・確認の方法</a> にまとめています（本ページでは有効期限の詳細は扱いません）。</p>
      </section>

      <section id="sec-03" class="fade-up">
        <h2>シーン別の申請タイミング</h2>
        <h3>はじめて申請する場合</h3>
        <p>渡航予定が決まったら、承認まで最大72時間かかる可能性をふまえ、出発の3日前までを目安にできるだけ早く申請しましょう。</p>
        <h3>2回目以降・更新の場合</h3>
        <p>ESTAには「更新」の手続きはなく、有効期限が切れている場合や、申請時から情報が変わった場合は新規に再申請します。渡航が決まった時点で有効なESTAがあるかを確認し、無ければ早めに再申請してください。詳しくは <a href="/list-esta-application/expiration-date/">有効期限ガイド</a> をご覧ください。</p>
        <h3>出発直前になってしまった場合</h3>
        <p>前日・当日の申請は、審査に最大72時間かかる場合があるため承認が間に合わないリスクがあります。すでに申請済みで結果を急ぐ場合は、公式サイトの <a href="/list-esta-application/status-check/">申請状況の確認</a> でステータスをチェックしましょう。</p>
      </section>

      <section id="sec-04" class="fade-up">
        <h2>入国審査でESTAはいつ使うか</h2>
        <p>ESTAはパスポートに電子的に紐づくため、入国審査でESTAの控えを提示することは必須ではありません。承認済みのESTAがあれば、そのまま渡航・入国手続きに進めます。</p>
        <p>実際の入国審査で聞かれることや流れは <a href="/list-esta-guide/immigration/">アメリカ入国審査の流れと質問例</a> で詳しく解説しています。</p>
      </section>

      <section id="sec-05" class="fade-up">
        <h2>よくある質問</h2>
        <div class="faq">
          <details open>
            <summary>ESTAは出発の何日前までに申請すればいいですか？</summary>
            <div class="answer"><p>承認まで最大72時間（3日間）かかる場合があるため、遅くとも出発の72時間（3日）前までに申請することが推奨されています。余裕をもって早めの申請が安心です。</p></div>
          </details>
          <details>
            <summary>出発の前日でも間に合いますか？</summary>
            <div class="answer"><p>多くの場合は短時間で承認されますが、審査に最大72時間（3日間）かかる場合があり、即時に承認されるとは限りません。前日・当日の申請は承認が間に合わないリスクがあるため推奨されません。</p></div>
          </details>
          <details>
            <summary>ESTAは何ヶ月前から申請できますか？</summary>
            <div class="answer"><p>渡航の予定が決まったら早めに申請しておくと安心です。ESTAの有効期限は原則2年間のため、その範囲であれば余裕をもって事前に申請できます（有効期限の詳細は有効期限ガイドをご確認ください）。</p></div>
          </details>
          <details>
            <summary>申請した内容やステータスはいつ確認できますか？</summary>
            <div class="answer"><p>審査に最大72時間かかる場合があるため、申請日の翌日以降を目安に、公式サイトの申請状況確認ページでステータスをご確認ください。</p></div>
          </details>
          <details>
            <summary>入国審査ではESTAをいつ使いますか？</summary>
            <div class="answer"><p>ESTAはパスポートに電子的に紐づくため、入国審査でESTAの控えの提示は必須ではありません。入国審査の流れや質問例はアメリカ入国審査ガイドで解説しています。</p></div>
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
  <a href="/form/step1" class="cta-btn"><span class="cta-sub">アメリカ入国前に必須の事前手続き</span><span class="cta-main"><span class="cta-txt">ESTA申請をはじめる</span><span class="cta-arrow">→</span></span></a>
</section>

<!-- ===== Related articles ===== -->
<section class="section section--cream">
  <div class="section__inner fade-up">
    <p class="section__eyebrow">№ — Related Articles</p>
    <h2 class="section__title">関連記事</h2>
    <div class="ornament"><span></span><em></em><span></span></div>
  </div>
  <div class="related fade-up" style="margin-top:56px">
    <a href="/list-esta-application/application/"><span class="related__media"><img src="/img/related/04-apply-method.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">01.</span><span class="related__title">アプリを使ったESTA申請方法</span><span class="related__more">Read more</span></span></a>
    <a href="/list-esta-application/expiration-date/"><span class="related__media"><img src="/img/related/07-expiration.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">02.</span><span class="related__title">ESTAの有効期限と再申請・確認</span><span class="related__more">Read more</span></span></a>
    <a href="/list-esta-application/status-check/"><span class="related__media"><img src="/img/related/status-check.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">03.</span><span class="related__title">ESTA申請状況の確認方法</span><span class="related__more">Read more</span></span></a>
    <a href="/list-esta-guide/immigration/"><span class="related__media"><img src="/img/related/entry.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">04.</span><span class="related__title">アメリカ入国審査の流れと質問例</span><span class="related__more">Read more</span></span></a>
  </div>
</section>
`;

export default function Page() {
  return (<><JsonLd data={PAGE_JSON_LD} /><div className="redesign-detail" dangerouslySetInnerHTML={{ __html: BODY_HTML }} /></>);
}
