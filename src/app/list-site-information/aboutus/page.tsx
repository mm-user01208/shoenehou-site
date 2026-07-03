import type { Metadata } from 'next';
import { JsonLd, pageJsonLd, seoMetadata } from '@/lib/seo';

const PAGE_PATH = '/list-site-information/aboutus/';
const PAGE_TITLE = '特定商取引法に基づく表記・運営者情報 | US ESTA Apply Website';
const PAGE_DESCRIPTION = 'US ESTA Apply Websiteの運営者情報・特定商取引法に基づく表記です。サイト名、運営責任者、所在地、連絡先、販売価格、お支払い方法、サービス提供時期、キャンセル・返金ポリシーを掲載しています。';

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
      <a href="/list-site-information">サイト情報一覧</a><span>›</span>
      <em>特定商取引法に基づく表記</em>
    </nav>
    <p class="article__eyebrow">Business Information</p>
    <h1 class="article__title">特定商取引法に基づく表記</h1>
    <p class="article__lede">本ページでは、特定商取引法に基づき、当サイトの運営者情報および取引条件を表示しています。</p>
  </div>
</section>

<section class="article-main">
  <div class="article-main__inner">
    <aside class="toc">
      <p class="toc__head">目次</p>
      <ol>
        <li><a href="#sec-01">運営者情報</a></li>
        <li><a href="#sec-02">サービス内容</a></li>
        <li><a href="#sec-03">販売価格・お支払い</a></li>
        <li><a href="#sec-04">キャンセル・返金について</a></li>
      </ol>
    </aside>
    <article class="article-body">
      <section id="sec-01" class="fade-up">
        <h2>運営者情報</h2>
        <table>
          <tbody>
            <tr><th>サイト名</th><td>US ESTA Apply Website</td></tr>
            <tr><th>運営会社</th><td>株式会社M2 Agency</td></tr>
            <tr><th>運営責任者</th><td>森 美咲</td></tr>
            <tr><th>所在地</th><td>東京都港区港南2-3-1 大信秋山ビル</td></tr>
            <tr><th>電話番号</th><td>03-6899-5503</td></tr>
            <tr><th>メールアドレス</th><td><!--email_off--><a href="mailto:info@usesta-apply.net">info@usesta-apply.net</a><!--/email_off--></td></tr>
            <tr><th>受付時間</th><td>申請のご依頼および各種お問い合わせは24時間受け付けております。</td></tr>
            <tr><th>お問い合わせ方法</th><td>原則としてメールでの対応とさせていただいております。申請内容の確認や修正、キャンセルなど正確性が求められるご連絡につきましては、メールでのお問い合わせをお願いいたします。</td></tr>
          </tbody>
        </table>
      </section>
      <section id="sec-02" class="fade-up">
        <h2>サービス内容</h2>
        <p>当サイトは、米国渡航に必要な電子渡航認証（ESTA）の申請手続きをサポートするサービスを提供しています。申請内容の入力補助や確認を行い、ESTA取得までをサポートします。英語での申請に不安がある方や、手続きに時間を割けない方に向けたサポートを目的としています。</p>
      </section>
      <section id="sec-03" class="fade-up">
        <h2>販売価格・お支払い</h2>
        <table>
          <tbody>
            <tr><th>販売価格</th><td>22,000円（税込24,200円）</td></tr>
            <tr><th>商品代金以外の必要料金</th><td>記載の金額以外に追加費用は発生いたしません。</td></tr>
            <tr><th>申込み方法</th><td>当サイト上の申請フォームよりお申し込みください。</td></tr>
            <tr><th>お支払い時期</th><td>申請フォーム送信後、決済画面にて「今すぐ支払う」ボタンを押した時点でお支払いが確定します。料金はクレジットカードによる前払いとなります。</td></tr>
            <tr><th>お支払い方法</th><td>クレジットカード（Visa、Master Card、JCB、American Express、Diners Club）</td></tr>
            <tr><th>サービス提供時期</th><td>原則としてお申込み完了後、翌営業日以内にご案内いたします。ただし、申請内容の確認状況により最大72時間程度お時間をいただく場合があります。</td></tr>
          </tbody>
        </table>
      </section>
      <section id="sec-04" class="fade-up">
        <h2>キャンセル・返金について</h2>
        <p>お客様からお預かりした情報をもとに、米国国土安全保障省（DHS）のシステム上でESTA申請の登録作業を開始する前にキャンセルのご連絡をいただいた場合、決済手数料900円を差し引いた金額を返金いたします。</p>
        <p>「ESTA申請の登録」とは、アメリカ合衆国税関・国境警備局のESTAシステムへ申請情報を入力し、申請状況が同システム上に反映された時点を指します。</p>
        <p>申請内容の確認過程において、適格性や国籍等に関する追加確認が必要と判断された場合、メールにて追加質問を行うことがあります。当該質問に対するご回答をいただくまで、申請手続きを一時保留とする場合があります。</p>
        <p>当サイトからの追加確認のご連絡後、2週間を経過してもご返信が確認できない場合は、申込みをキャンセル扱いとし、決済手数料900円を差し引いた金額を返金いたします。</p>
        <p>ESTA申請の登録が完了し、DHSシステム上に申請状況が反映された後は、理由の如何を問わずキャンセルおよび返金には応じられません。申請状況が「認証保留中」の場合も同様です。米国政府システムの仕様上、申請後に申請や認証自体を取り消すことはできません。また、申請代行手続きは、申請結果通知のメール送信をもって完了となります。</p>
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
`;

export default function Page() {
  return (<><JsonLd data={PAGE_JSON_LD} /><div className="redesign-detail" dangerouslySetInnerHTML={{ __html: BODY_HTML }} /></>);
}
