import type { Metadata } from 'next';
import { JsonLd, pageJsonLd, seoMetadata } from '@/lib/seo';

const PAGE_PATH = '/list-esta-guide/denied/';
const PAGE_TITLE = 'ESTA申請が却下・拒否された場合の対処法【渡航認証拒否】 | US ESTA Apply Website';
const PAGE_DESCRIPTION = 'ESTA申請が却下・拒否された場合の原因と対処法を解説。渡航認証拒否と表示された場合の再申請方法やビザ申請への切り替え、在日米国大使館への相談方法をご紹介します。';

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
      <a href="/list-esta-guide">ESTA申請ガイド一覧</a><span>›</span>
      <em>ESTA申請が却下・拒否された場合の対処法【渡航認証拒否】</em>
    </nav>
    <p class="article__eyebrow">Denied Case Guide</p>
    <h1 class="article__title">ESTA申請が却下・拒否された場合の対処法【渡航認証拒否】</h1>
    <p class="article__lede">ESTA(エスタ)の申請後、審査結果として「渡航認証拒否」と表示されるケースがあります。ESTAが却下された場合、そのままではアメリカへ渡航することができません。本記事では、ESTAが拒否される主な理由や、却下された場合の具体的な対処法について詳しく解説します。</p>
  </div>
</section>

<section class="article-main">
  <div class="article-main__inner">
    <aside class="toc">
      <p class="toc__head">目次</p>
      <ol>
        <li><a href="#sec-01">ESTAが却下される主な理由</a></li>
        <li><a href="#sec-02">「渡航認証拒否」と表示された場合</a></li>
        <li><a href="#sec-03">ESTA却下時の対処法</a></li>
        <li><a href="#sec-04">ビザ申請への切り替え方法</a></li>
        <li><a href="#sec-05">在日米国大使館・領事館への相談方法</a></li>
        <li><a href="#sec-06">よくある質問</a></li>
      </ol>
    </aside>

    <article class="article-body">

      <section id="sec-01" class="fade-up">
        <h2>ESTAが却下される主な理由</h2>
        <p>ESTA(エスタ)が却下される理由はさまざまですが、主に以下の5つの原因が考えられます。それぞれの原因を理解しておくことで、申請時のミスを未然に防ぐことができます。</p>
        <p>1. 申請情報の入力ミス：ESTA申請フォームに入力した情報に誤りがある場合、審査で不承認となることがあります。特に多いのが、パスポート番号の入力ミス、氏名のスペルミス、生年月日の誤入力です。パスポートに記載されている情報と申請フォームの内容が一致しない場合、CBP(アメリカ合衆国税関・国境警備局)のシステムで自動的に不一致が検出され、渡航認証が拒否される可能性があります。</p>
        <p>2. 特定の国への渡航歴：2011年3月1日以降に、イラン、イラク、シリア、スーダン、ソマリア、リビア、イエメン、北朝鮮のいずれかの国に渡航した経歴がある場合、ESTAの取得が認められないことがあります。これはアメリカのビザ免除プログラム改定法(Visa Waiver Program Improvement and Terrorist Travel Prevention Act)に基づく措置であり、該当する方はビザの取得が必要となります。</p>
        <p>3. 犯罪歴がある場合：過去に逮捕歴や犯罪歴がある場合、ESTAの審査で不承認となる可能性があります。申請フォームのセキュリティ質問で犯罪歴の有無を問われた際に「はい」と回答すると、CBPによる詳細な審査が行われます。軽微な犯罪であっても、アメリカの入国審査基準に該当する場合は渡航認証が拒否されることがあります。</p>
        <p>4. 過去にアメリカでの滞在期間を超過した経歴がある場合：以前のアメリカ滞在において、許可された滞在期間(90日)を超えて滞在した経歴(オーバーステイ)がある場合、ESTAが拒否される可能性が高くなります。オーバーステイはアメリカの移民法において重大な違反とみなされるため、CBPのデータベースに記録が残ります。</p>
        <p>5. セキュリティ質問への回答内容：ESTA申請フォームには、感染症や薬物、テロ活動への関与に関するセキュリティ質問が含まれています。これらの質問に対して「はい」と回答した場合、渡航認証が拒否される可能性があります。質問内容を十分に理解したうえで、正確に回答することが重要です。</p>
      </section>

      <section id="sec-02" class="fade-up">
        <h2>「渡航認証拒否」と表示された場合</h2>
        <p>ESTA申請後の審査結果画面に「渡航認証拒否(Authorization Denied)」と表示された場合、その申請は不承認となったことを意味します。渡航認証が拒否された場合、ESTAを利用したアメリカへの渡航はできません。</p>
        <p>なお、CBPはESTAが拒否された具体的な理由を申請者に開示していません。そのため、拒否の原因を正確に特定することは困難ですが、前述の5つの理由のいずれかに該当している可能性が高いと考えられます。渡航認証拒否の表示を確認した場合は、まず入力内容にミスがなかったかを確認し、適切な対処法を検討してください。</p>
        <p>「渡航認証拒否」と「渡航認証保留」の違いにも注意が必要です。「渡航認証保留(Authorization Pending)」は審査が進行中であることを示しており、最大72時間以内に結果が確定します。保留の段階では拒否が確定していないため、結果が出るまでお待ちください。</p>
      </section>

      <section id="sec-03" class="fade-up">
        <h2>ESTA却下時の対処法</h2>
        <p>ESTAが却下された場合の対処法は、拒否された原因によって異なります。以下では、主な対処法を紹介します。</p>
        <p>入力ミスが原因の場合：パスポート番号や氏名のスペルなど、入力情報に誤りがあった可能性がある場合は、正しい情報で再度ESTAを申請してください。ただし、再申請には新たに申請手数料が発生する点にご注意ください。再申請の際は、パスポートの記載内容をよく確認し、一文字ずつ正確に入力することが重要です。</p>
        <p>入力ミス以外の理由で拒否された場合：犯罪歴や渡航歴、オーバーステイ歴など、入力ミス以外の理由でESTAが拒否された場合は、再申請しても同じ結果となる可能性が高くなります。この場合は、在日米国大使館または領事館にてビザ(査証)を申請する必要があります。ビザの取得には面接予約や追加書類の準備が必要となるため、渡航予定日から十分な余裕をもって手続きを開始してください。</p>
      </section>

      <section id="sec-04" class="fade-up">
        <h2>ビザ申請への切り替え方法</h2>
        <p>ESTAが拒否された場合、アメリカに渡航するためにはビザ(査証)の取得が必要です。観光目的であればB-2ビザ、商用目的であればB-1ビザの申請が一般的です。ビザの申請手順は以下のとおりです。</p>
        <p>まず、オンラインでDS-160(非移民ビザ申請書)を作成し、提出します。次に、ビザ申請料金を支払い、在日米国大使館または領事館での面接予約を行います。面接当日は、パスポート、DS-160確認ページ、証明写真、渡航目的を証明する書類(往復航空券の予約確認書、ホテルの予約確認書、銀行の残高証明書など)を持参してください。</p>
        <p>ビザの審査期間は申請内容や時期によって異なりますが、面接から数日〜数週間で結果が通知されます。渡航予定日が近い場合は、面接予約が取れない可能性もあるため、早めの手続きをおすすめします。なお、ESTAが拒否されたことがビザ申請に直接的な不利益を与えるわけではありませんが、拒否の理由がビザ審査にも影響する場合があります。</p>
      </section>

      <section id="sec-05" class="fade-up">
        <h2>在日米国大使館・領事館への相談方法</h2>
        <p>ESTAが却下された理由が不明な場合や、ビザの申請手続きについて詳しく知りたい場合は、在日米国大使館または領事館に相談することが可能です。在日米国大使館は東京に所在しており、領事館は大阪、那覇、札幌、福岡にあります。</p>
        <p>相談方法としては、米国大使館のウェブサイトからオンラインで問い合わせを行う方法が一般的です。大使館の公式ウェブサイトには、ビザに関する情報やFAQが掲載されているため、まずはウェブサイトを確認することをおすすめします。なお、ESTAの拒否理由について大使館に問い合わせても、CBPの審査に関する詳細な回答は得られない場合があります。</p>
        <p>また、Traveler Compliance Inquiry(DHS TRIP)という制度を利用することで、渡航認証が拒否された理由の調査を依頼することも可能です。DHS TRIPは、米国国土安全保障省(DHS)が提供するオンラインサービスで、渡航時に問題が発生した方が是正措置を申請できる仕組みです。ただし、調査結果の回答には時間がかかる場合があるため、渡航予定が迫っている場合は、ビザ申請を並行して進めることをおすすめします。</p>
      </section>

      <section id="sec-06" class="fade-up">
        <h2>よくある質問</h2>
        <div class="faq" style="margin-top:32px">
          <details open>
            <summary>ESTAが却下された後、再申請はできますか？</summary>
            <div class="answer"><p>はい、ESTAの再申請は可能です。ただし、入力ミスが原因で拒否された場合は正しい情報で再申請することで承認される可能性がありますが、犯罪歴やオーバーステイ歴など、入力ミス以外の理由で拒否された場合は、再申請しても同じ結果となる可能性が高くなります。その場合は、ビザの取得を検討してください。</p></div>
          </details>
          <details>
            <summary>ESTA拒否の理由を確認することはできますか？</summary>
            <div class="answer"><p>CBP(アメリカ合衆国税関・国境警備局)は、ESTAが拒否された具体的な理由を申請者に開示していません。ただし、DHS TRIP(Traveler Compliance Inquiry)を利用して調査を依頼することは可能です。米国国土安全保障省のウェブサイトからオンラインで申請できます。</p></div>
          </details>
          <details>
            <summary>ESTAが拒否されたら、もうアメリカには行けませんか？</summary>
            <div class="answer"><p>ESTAが拒否された場合でも、ビザ(査証)を取得すればアメリカに渡航することが可能です。在日米国大使館または領事館にてビザの申請手続きを行ってください。観光目的の場合はB-2ビザ、商用目的の場合はB-1ビザを申請することになります。</p></div>
          </details>
          <details>
            <summary>ESTA却下後、どれくらいの期間を空ければ再申請できますか？</summary>
            <div class="answer"><p>ESTAの再申請に待機期間は定められていません。却下後すぐに再申請することも可能です。ただし、同じ情報で再申請した場合は同じ結果となる可能性が高いため、拒否された原因を特定・解消したうえで再申請することをおすすめします。入力ミスが原因であった場合は、正しい情報で速やかに再申請してください。</p></div>
          </details>
          <details>
            <summary>家族のうち1人だけESTAが拒否された場合はどうすればよいですか？</summary>
            <div class="answer"><p>グループ申請で家族のうち1名のみESTAが拒否された場合でも、他の家族の渡航認証には影響しません。拒否された方のみ、再申請またはビザの取得が必要となります。他の家族は承認されたESTAで問題なく渡航できます。</p></div>
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
  <a href="/form/step1" class="cta-btn">✓ ESTA申請をはじめる</a>
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
  return (<><JsonLd data={PAGE_JSON_LD} /><div className="redesign-detail" dangerouslySetInnerHTML={{ __html: BODY_HTML }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Q. ESTAが却下された後、再申請はできますか？", "acceptedAnswer": {"@type": "Answer", "text": "はい、ESTAの再申請は可能です。ただし、入力ミスが原因で拒否された場合は正しい情報で再申請することで承認される可能性がありますが、犯罪歴やオーバーステイ歴など、入力ミス以外の理由で拒否された場合は、再申請しても同じ結果となる可能性が高くなります。その場合は、ビザの取得を検討してください。"}}, {"@type": "Question", "name": "Q. ESTA拒否の理由を確認することはできますか？", "acceptedAnswer": {"@type": "Answer", "text": "CBP(アメリカ合衆国税関・国境警備局)は、ESTAが拒否された具体的な理由を申請者に開示していません。ただし、DHS TRIP(Traveler Compliance Inquiry)を利用して調査を依頼することは可能です。米国国土安全保障省のウェブサイトからオンラインで申請できます。"}}, {"@type": "Question", "name": "Q. ESTAが拒否されたら、もうアメリカには行けませんか？", "acceptedAnswer": {"@type": "Answer", "text": "ESTAが拒否された場合でも、ビザ(査証)を取得すればアメリカに渡航することが可能です。在日米国大使館または領事館にてビザの申請手続きを行ってください。観光目的の場合はB-2ビザ、商用目的の場合はB-1ビザを申請することになります。"}}, {"@type": "Question", "name": "Q. ESTA却下後、どれくらいの期間を空ければ再申請できますか？", "acceptedAnswer": {"@type": "Answer", "text": "ESTAの再申請に待機期間は定められていません。却下後すぐに再申請することも可能です。ただし、同じ情報で再申請した場合は同じ結果となる可能性が高いため、拒否された原因を特定・解消したうえで再申請することをおすすめします。入力ミスが原因であった場合は、正しい情報で速やかに再申請してください。"}}, {"@type": "Question", "name": "Q. 家族のうち1人だけESTAが拒否された場合はどうすればよいですか？", "acceptedAnswer": {"@type": "Answer", "text": "グループ申請で家族のうち1名のみESTAが拒否された場合でも、他の家族の渡航認証には影響しません。拒否された方のみ、再申請またはビザの取得が必要となります。他の家族は承認されたESTAで問題なく渡航できます。"}}]}) }} /></>);
}
