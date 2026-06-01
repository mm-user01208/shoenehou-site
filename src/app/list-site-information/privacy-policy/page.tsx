import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '個人情報保護に関する基本方針 | US ESTA Apply Website',
  description: 'US ESTA Apply Websiteでは、個人情報を適切に取り扱うため個人情報保護方針を定め、管理体制の徹底に努めています。お客様が安心してESTAの申請手続きをご利用いただける環境づくりを行っています。',
};

const BODY_HTML = `
<section class="article-hero">
  <div class="article-hero__inner">
    <nav class="crumb">
      <a href="/">HOME</a><span>›</span>
      <a href="/list-site-information">サイト情報一覧</a><span>›</span>
      <em>個人情報保護に関する基本方針</em>
    </nav>
    <p class="article__eyebrow">Privacy Policy</p>
    <h1 class="article__title">個人情報保護に関する基本方針</h1>
    <p class="article__lede">当サイトはESTA申請代行サービスの提供にあたり、お客様の個人情報を適切に取り扱うため、個人情報保護に関する基本方針を定めています。</p>
  </div>
</section>

<section class="article-main">
  <div class="article-main__inner">
    <aside class="toc">
      <p class="toc__head">目次</p>
      <ol>
        <li><a href="#sec-01">個人情報の取得・利用目的について</a></li>
        <li><a href="#sec-02">取得する個人情報の内容</a></li>
        <li><a href="#sec-03">クッキー(Cookie)の使用について</a></li>
        <li><a href="#sec-04">個人情報の保管期間</a></li>
        <li><a href="#sec-05">個人情報の第三者提供について</a></li>
        <li><a href="#sec-06">個人情報の確認・訂正</a></li>
        <li><a href="#sec-07">外部サイトへのリンクについて</a></li>
        <li><a href="#sec-08">申請状況確認ページについて</a></li>
      </ol>
    </aside>
    <article class="article-body">
      <section id="sec-01" class="fade-up">
        <h2>個人情報の取得・利用目的について</h2>
        <p>当サイトは、個人情報保護法および関係法令、ならびに日本工業規格「個人情報保護マネジメントシステムの要求事項（JIS Q 15001）」を遵守し、ESTA申請手続きの代行および関連業務の遂行を目的として、お客様の個人情報を取得・利用します。取得した個人情報は、米国DHS（U.S. Department of Homeland Security：アメリカ合衆国国土安全保障省）が運営するシステムへの申請手続き、各種お問い合わせへの対応および確認、当サイトサービスの円滑な提供および管理業務の範囲内でのみ使用し、必要最小限にとどめます。</p>
        <p>なお、米国DHSへの個人情報の提供内容は以下のとおりです。</p>
        <h3>提供する個人データの項目</h3>
        <p>氏名（パスポート表記）、住所、生年月日、性別、国籍、出生情報、電話番号、滞在先情報、雇用情報、パスポート情報（顔写真ページ画像およびデータ、パスポート番号、発行日、有効期限）、顔写真、SNSアカウント情報、両親の氏名、精神疾患や薬物依存に関する履歴、逮捕歴・犯罪歴、違法薬物の所持・使用歴、テロ・スパイ行為への関与歴、ビザ不正取得等の詐欺行為歴、米国内での無許可就労意思の有無、過去の米国ビザ却下・入国拒否歴、超過滞在歴、特定国への渡航歴</p>
        <h3>提供方法</h3>
        <p>当サイトの運営責任者および管理体制のもと、オンラインシステムを通じて米国DHSへ提供します。</p>
        <h3>提供停止について</h3>
        <p>当サイトが定める「特定商取引法に基づく表記」に記載のキャンセルポリシーに基づき、ESTA申請情報を米国DHSのシステムへ登録する前に限り、第三者提供停止のご要望を受け付けます。なお、米国DHSのシステム仕様上、登録開始後の提供停止には対応できません。</p>
      </section>
      <section id="sec-02" class="fade-up">
        <h2>取得する個人情報の内容</h2>
        <p>当サイトが取得する情報は以下のとおりです。</p>
        <p>氏名（パスポート表記）、住所、生年月日、性別、国籍、出生情報、メールアドレス、電話番号、滞在先情報、雇用情報、パスポート情報（顔写真ページ画像およびデータ、パスポート番号、発行日、有効期限）、顔写真、SNSアカウント情報、両親の氏名、精神疾患・薬物依存に関する履歴、逮捕歴・犯罪歴、違法薬物関連情報、テロ・スパイ行為歴、不正ビザ取得歴、無許可就労意図の有無、米国での入国拒否・超過滞在歴、特定国への渡航歴、当サイトへのお問い合わせ履歴等</p>
      </section>
      <section id="sec-03" class="fade-up">
        <h2>クッキー(Cookie)の使用について</h2>
        <p>クッキーとは、お客様が当サイトを再訪問された際に閲覧をより便利にするため、利用端末に閲覧情報を保存する仕組みです。クッキーはブラウザ内に保存されサーバーから参照される場合がありますが、個人を特定する情報は含まれておらず、プライバシーを侵害するものではありません。また、端末やシステムに悪影響を及ぼすこともありません。</p>
        <p>当サイトでは、以下の目的でクッキーを使用します。</p>
        <ul>
          <li>ログイン状態の確認および各種機能提供</li>
          <li>サイト利用状況の統計的分析（Google Analyticsの利用）</li>
        </ul>
        <h3>Google Analyticsの利用について</h3>
        <p>当サイトでは、Google社が提供するGoogle Analyticsを利用し、サイトの利用状況を分析しています。Google Analyticsは、当サイトが発行するクッキーを通じてデータを収集・分析しますが、個人を特定できる情報は含まれていません。収集された情報は、Google社のプライバシーポリシーに基づき管理されます。</p>
        <p>Google Analyticsの利用規約およびGoogle社のプライバシーポリシーについては、以下をご確認ください。</p>
        <ul>
          <li><a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer">Google Analyticsの利用規約</a></li>
          <li><a href="https://policies.google.com/privacy?hl=ja" target="_blank" rel="noopener noreferrer">Googleのプライバシーポリシー</a></li>
        </ul>
        <h3>クッキーの管理・削除方法</h3>
        <p>ご利用のブラウザ設定を変更することで、クッキーの無効化や削除が可能です。クッキーを無効にした場合でも当サイトはご利用いただけますが、一部機能が制限される場合があります。設定方法は各ブラウザの提供元サイトをご参照ください。</p>
      </section>
      <section id="sec-04" class="fade-up">
        <h2>個人情報の保管期間</h2>
        <p>当サイトは、お客様から削除のご要望がない限り、ESTAの有効期間内に限り個人情報を保管します。</p>
        <p>ただし、法令、行政機関または裁判所からの要請があった場合、または当サイトの運営基準に基づき削除が必要と判断した場合は、この限りではありません。個人情報の削除をご希望の場合は、当サイトのお問い合わせフォームよりご連絡ください。</p>
      </section>
      <section id="sec-05" class="fade-up">
        <h2>個人情報の第三者提供について</h2>
        <p>当サイトは、サービス提供に必要な米国DHSへの情報提供を除き、取得した個人情報を第三者へ開示または提供することはありません。ただし、以下の場合を除きます。</p>
        <ul>
          <li>ご本人の同意がある場合</li>
          <li>法令、行政機関、裁判所からの要請があった場合</li>
        </ul>
      </section>
      <section id="sec-06" class="fade-up">
        <h2>個人情報の確認・訂正</h2>
        <p>お客様から個人情報の確認または訂正のご依頼があった場合、当サイト所定の利用規約に基づき本人確認を行ったうえで適切に対応します。</p>
      </section>
      <section id="sec-07" class="fade-up">
        <h2>外部サイトへのリンクについて</h2>
        <p>当サイトからリンクされている外部ウェブサイトにおける個人情報の取扱いについて、当サイトは一切の責任を負いません。リンク先の利用にあたっては、各サイトの個人情報保護方針等をご確認のうえ、ご自身の判断でご利用ください。</p>
      </section>
      <section id="sec-08" class="fade-up">
        <h2>申請状況確認ページについて</h2>
        <p>申請状況確認ページは、当サイトを通じてお申し込みいただいたお客様のみご利用いただけます。また、個人情報保護の観点から、申請状況の確認はお申し込み日から90日以内に限られます。</p>
      </section>
    </article>
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
