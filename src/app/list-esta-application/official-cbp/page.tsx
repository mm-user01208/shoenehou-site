import type { Metadata } from 'next';
import { JsonLd, pageJsonLd, seoMetadata } from '@/lib/seo';

const PAGE_PATH = '/list-esta-application/official-cbp/';
const PAGE_TITLE = 'ESTA公式ウェブサイト(https://esta.cbp.dhs.gov)について解説 | US ESTA Apply Website';
const PAGE_DESCRIPTION = 'ESTA申請を行う公式ウェブサイトは、DHS(米国国土安全保障省)の一部門であるCBP(米国税関・国境警備局)が運営しています。本記事では申請方法からお問い合わせ方法まで詳しく解説します。';

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
      <a href="/list-esta-application">ESTA申請関連情報一覧</a><span>›</span>
      <em>ESTA公式ウェブサイトについて解説</em>
    </nav>
    <p class="article__eyebrow">Official Website</p>
    <h1 class="article__title">ESTA公式ウェブサイト(https://esta.cbp.dhs.gov)について解説</h1>
    <p class="article__lede">ESTAは、ビザ免除プログラム(VWP)を利用してアメリカへ渡航する際に必要となる電子渡航認証制度です。日本国籍の方が、90日以内の観光や短期商用目的でアメリカに滞在する場合は、ビザではなく事前にESTAの申請・取得が必要となります。<a href="https://esta.cbp.dhs.gov/" target="_blank" rel="noopener noreferrer">ESTAの公式ウェブサイト</a>は、DHS(アメリカ国土安全保障省)配下のCBP(米国税関・国境警備局)によって管理・運営されています。URLの末尾が、アメリカ政府機関のみが使用できるドメイン「.gov」である点が特徴です。</p>
  </div>
</section>

<section class="article-main">
  <div class="article-main__inner">
    <aside class="toc">
      <p class="toc__head">目次</p>
      <ol>
        <li><a href="#sec-01">米国国土安全保障省(DHS：United States Department of Homeland Security)</a></li>
        <li><a href="#sec-02">DHSとESTAの関係</a></li>
        <li><a href="#sec-03">米国税関・国境警備局(CBP：United States Customs and Border Protection)</a></li>
        <li><a href="#sec-04">CBPとESTAの関係</a></li>
        <li><a href="#sec-05">ESTA公式サイトでの申請方法について</a></li>
        <li><a href="#sec-06">ESTA公式サイトでのお問い合わせ方法について</a></li>
        <li><a href="#sec-07">アメリカ合衆国税関・国境警備局(CBP) お問い合わせ先</a></li>
      </ol>
    </aside>

    <article class="article-body">

      <section id="sec-01" class="fade-up">
        <h2>米国国土安全保障省(DHS：United States Department of Homeland Security)</h2>
        <p>米国国土安全保障省(DHS)は、2001年9月11日に発生したアメリカ同時多発テロ事件を受け、2002年11月に設立されたアメリカ連邦政府機関です。アメリカ国内の安全保障を統括する組織として、テロ対策、国境管理、災害対応、サイバーセキュリティなど、幅広い分野を所管しています。</p>
      </section>

      <section id="sec-02" class="fade-up">
        <h2>DHSとESTAの関係</h2>
        <p>ESTAはDHS(米国国土安全保障省)の管轄下にあり、具体的にはその一部門であるCBP(税関・国境警備局)がESTAの運営および管理を担当しています。そのため、ESTA申請を行う際はアメリカ政府の正式な国境管理システムに直接情報を提供し、審査を受けることになります。</p>
        <p>DHSは、申請者の情報を複数のデータベースと照合し、アメリカへの入国が安全保障上のリスクを伴わないどうかを評価します。なお、ESTAの申請内容には、パスポート情報や渡航履歴などの重要な個人情報が含まれるため、DHSは高度なセキュリティ基準に基づいて情報を管理しています。</p>
      </section>

      <section id="sec-03" class="fade-up">
        <h2>米国税関・国境警備局(CBP：United States Customs and Border Protection)</h2>
        <p>CBP(米国税関・国境警備局)は約6万人の職員を擁する、DHS(米国国土安全保障省)傘下で最大の法執行機関です。対テロ作戦の実施や人身売買・麻薬密輸の取締り、違法または危険な活動からアメリカ国内の安全を守ることを任務としています。また、国境管理と税関業務を担い、空港、港湾、国境検問所など、すべての入国地点に職員が配置されています。</p>
      </section>

      <section class="cta-strip cta-strip--solid cta-mid">
        <p class="cta-strip__eyebrow">Start your application</p>
        <h2><span class="h2l1">アメリカ渡航には</span><br class="sp-br">ESTAの申請が必要です。</h2>
        <p>申請完了まで最大3日ほどかかるため、<br class="sp-br">余裕をもってお手続きください。</p>
        <a href="/form/step1" class="cta-btn"><span class="cta-sub">アメリカ入国前に必須の事前手続き</span><span class="cta-main"><span class="cta-txt">ESTA申請をはじめる</span><span class="cta-arrow">→</span></span></a>
      </section>

      <section id="sec-04" class="fade-up">
        <h2>CBPとESTAの関係</h2>
        <p>CBPは、ESTA申請の審査およびアメリカへの入国可否の判断も担っています。ESTAの申請結果はCBPのシステムと連動しており、申請時に提供される情報は入国審査の判断材料として使用されます。そのため、ESTAの承認を得たとしてもアメリカへの入国が保証されるわけではありません。最終的な入国の可否は、入国審査時にCBP職員が行う判断に委ねられています。</p>
      </section>

      <section id="sec-05" class="fade-up">
        <h2>ESTA公式サイトでの申請方法について</h2>
        <p>ESTAの公式ウェブサイトで申請手続きを行う際は、申請者情報や渡航情報をすべて英語(ローマ字)で入力する必要があります。入力内容に誤りがあると、"ESTAが承認されない"または"入国時にトラブルが発生する"などの可能性があります。</p>
        <p>一般的なESTA申請の流れは以下の通りです。</p>
        <ol class="article-body__ol">
          <li><a href="https://esta.cbp.dhs.gov/" target="_blank" rel="noopener noreferrer">公式ウェブサイト</a>にアクセスし、申請者情報や個人情報を正確に入力します。この際、英語(ローマ字)表記はパスポートの記載と完全に一致させる必要があります。</li>
          <li>渡航情報を入力します。滞在先住所や連絡先が未定の場合でも、申請手続きを進めることは可能です。</li>
          <li>犯罪歴、逮捕歴、過去のビザ却下歴など、適格性に関する質問に回答します。これらの情報は、審査に直接影響する項目のため、虚偽の情報を入力しないことが重要です。</li>
          <li>最後に、申請料金($40.27)をクレジットカード(VISA、JCB、MasterCard、American Express)またはデビットカードで支払い申請完了となります。</li>
        </ol>
        <p>ESTAの公式ウェブサイトは、英語のほか日本語を含む複数の言語に対応しています。トップページ右上のプルダウンメニューから希望の言語を選択してください。ただし、公式ウェブサイトからのお問い合わせは英語のみの対応となりますのでご注意ください。</p>
      </section>

      <section id="sec-06" class="fade-up">
        <h2>ESTA公式サイトでのお問い合わせ方法について</h2>
        <p>ESTAに関する質問は、CBP(米国税関・国境警備局)の公式ウェブサイトを通じて、Eメールで問い合わせることが可能です。ただし、メールでの問い合わせは回答までに数日かかる場合があるため、緊急の場合は電話での問い合わせもご検討ください。いずれの方法も英語のみの対応となるため、翻訳ツールなどを利用するとスムーズです。</p>
        <p>なお、米国大使館・領事館ではESTAに関する問い合わせを受け付けていません。ESTAはDHSの下部機関であるCBPの管轄であり、申請後の審査状況や渡航拒否の理由などの確認は大使館では対応していません。そのため、ESTAを公式ウェブサイトから申請された方は、CBP(米国税関・国境警備局)の公式ウェブサイトにアクセスし、該当する問い合わせ方法をご利用ください。</p>
      </section>

      <section id="sec-07" class="fade-up">
        <h2>アメリカ合衆国税関・国境警備局(CBP) お問い合わせ先</h2>
        <table>
          <tbody>
            <tr><th>受付時間</th><td>午前8時30分～午後8時（月～金曜日） ※東部標準時間</td></tr>
            <tr><th>電話番号</th><td>1-877-227-5511</td></tr>
            <tr><th>メールアドレス</th><td>Ask a Question</td></tr>
            <tr><th>公式ウェブサイト</th><td><a href="https://www.cbp.gov/about/contact" target="_blank" rel="noopener noreferrer">CBP INFO CENTER</a></td></tr>
          </tbody>
        </table>
        <p>ESTAに関する一般的な質問と回答は、<a href="https://www.help.cbp.gov/s/?language=en_US" target="_blank" rel="noopener noreferrer">CBP(米国税関・国境警備局)の公式ウェブサイト</a>に英語で公開されています。多くの疑問はこのセクションで解決できるため、お問い合わせ前に一度ご確認いただくことをおすすめします。また、<a href="https://jp.usembassy.gov/ja/" target="_blank" rel="noopener noreferrer">在日アメリカ大使館・領事館の公式ウェブサイト</a>では、ESTAに関する解説が日本語で掲載されていますので、併せてご参照ください。</p>
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
    <a href="/list-esta-application/place-of-birth/"><span class="related__media"><img src="/img/related/03-address-writing.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">03.</span><span class="related__title">出生地や住所の書き方</span><span class="related__more">Read more</span></span></a>
    <a href="/list-esta-application/us-contact-details/"><span class="related__media"><img src="/img/related/06-us-contact.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">04.</span><span class="related__title">米国内の連絡先の記入方法</span><span class="related__more">Read more</span></span></a>
  </div>
</section>
`;

export default function Page() {
  return (<><JsonLd data={PAGE_JSON_LD} /><div className="redesign-detail" dangerouslySetInnerHTML={{ __html: BODY_HTML }} /></>);
}
