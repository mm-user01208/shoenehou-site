import type { Metadata } from 'next';
import { JsonLd, pageJsonLd, seoMetadata } from '@/lib/seo';

const PAGE_PATH = '/list-esta-guide/children/';
const PAGE_TITLE = '子供・未成年・赤ちゃんのESTA申請方法【2026年最新】代理申請ガイド | US ESTA Apply Website';
const PAGE_DESCRIPTION = '子供や赤ちゃんにもESTAは必要です。0歳から申請が必要なESTAの代理申請方法、必要書類、申請フォームの記入例を詳しく解説。グループ申請での家族追加方法もご紹介します。';

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
      <em>子供・未成年・赤ちゃんのESTA申請方法【2026年最新】代理申請ガイド</em>
    </nav>
    <p class="article__eyebrow">Minor Application</p>
    <h1 class="article__title">子供・未成年・赤ちゃんのESTA申請方法【2026年最新】代理申請ガイド</h1>
    <p class="article__lede">アメリカへ渡航する際は、年齢を問わずすべての渡航者がESTA(エスタ)を取得する必要があります。生後間もない赤ちゃんから未成年者まで、子供であっても例外なくESTAの申請が求められます。本記事では、子供のESTA申請に必要な情報や代理申請の方法、申請フォームの記入時に注意すべきポイントについて詳しく解説します。</p>
  </div>
</section>

<section class="article-main">
  <div class="article-main__inner">
    <aside class="toc">
      <p class="toc__head">目次</p>
      <ol>
        <li><a href="#sec-01">子供にもESTAは必要？</a></li>
        <li><a href="#sec-02">子供のESTA代理申請の方法</a></li>
        <li><a href="#sec-03">子供のESTA申請に必要な情報と書類</a></li>
        <li><a href="#sec-04">申請フォームの子供向け記入時の注意点</a></li>
        <li><a href="#sec-05">グループ申請での子供の追加方法</a></li>
        <li><a href="#sec-06">よくある質問</a></li>
      </ol>
    </aside>

    <article class="article-body">

      <section id="sec-01" class="fade-up">
        <h2>子供にもESTAは必要？</h2>
        <p>はい、子供にもESTAは必要です。アメリカへの渡航においては、年齢に関係なくすべての渡航者がESTA(エスタ)を取得しなければなりません。これは0歳の赤ちゃんであっても同様です。生後間もない乳児であっても、有効なパスポートを所持していれば、保護者が代理でESTAを申請することが可能です。</p>
        <p>ESTAはビザ免除プログラム(VWP)の一環として、90日以内の短期滞在を目的とした渡航者に対して義務付けられている電子渡航認証です。日本国籍の子供がアメリカ本土やハワイ、グアムなどへ渡航する場合、出発前に必ずESTAを申請し、「渡航認証許可」のステータスを取得しておく必要があります。ESTAを取得していない場合、航空機への搭乗を拒否される可能性があるため十分ご注意ください。</p>
      </section>

      <section id="sec-02" class="fade-up">
        <h2>子供のESTA代理申請の方法</h2>
        <p>子供のESTAは、保護者(親権者)が代理で申請することが可能です。代理申請の手順は、基本的に大人の申請と同様ですが、申請者の情報として子供本人のパスポート情報や個人情報を入力する点が異なります。代理申請を行う際は、子供のパスポートを手元に準備したうえで、以下の流れに沿って手続きを進めてください。</p>
        <p>まず、ESTA申請ページにアクセスし、「新規申請」を選択します。次に、申請者の情報として子供本人のパスポートに記載されている氏名、生年月日、パスポート番号などを正確に入力します。続いて、連絡先やメールアドレス、滞在先の情報を入力し、セキュリティに関する質問に回答します。すべての情報を入力・確認したら、申請手数料の支払いを行い、申請を完了させます。</p>
        <p>なお、代理申請を行う場合でも、申請内容の責任は保護者にあります。入力した情報に誤りがあった場合、渡航認証が拒否される可能性があるため、パスポートに記載されている情報と申請フォームの入力内容が一致していることを必ず確認してください。</p>
      </section>

      <section id="sec-03" class="fade-up">
        <h2>子供のESTA申請に必要な情報と書類</h2>
        <p>子供のESTA申請には、以下の情報および書類が必要です。申請前に事前に準備しておくことで、スムーズに手続きを進めることができます。</p>
        <p>子供本人の有効なICチップ搭載パスポート：ESTAの申請には、ICチップが搭載されたパスポート(eパスポート)が必須です。子供が自身のパスポートを所持していない場合は、まずパスポートの取得手続きを行ってください。なお、親のパスポートに子供の情報が併記されている場合でも、子供専用のパスポートが別途必要となります。</p>
        <p>保護者のメールアドレス：申請完了後の確認メールや審査結果の通知を受け取るために、メールアドレスの登録が必要です。子供がメールアドレスを持っていない場合は、保護者のメールアドレスを使用してください。</p>
        <p>クレジットカード(申請手数料の支払い用)：ESTA申請手数料の支払いには、クレジットカードまたはPayPalが利用可能です。クレジットカードは申請者本人名義でなくても使用できるため、保護者名義のカードで問題ありません。</p>
        <p>滞在先の住所情報：アメリカでの滞在先住所(ホテル名や住所)の入力が求められます。宿泊先が未定の場合は、「UNKNOWN」と入力することも可能です。</p>
      </section>

      <section id="sec-04" class="fade-up">
        <h2>申請フォームの子供向け記入時の注意点</h2>
        <p>子供のESTA申請フォームを記入する際には、大人の申請とは異なるいくつかの注意点があります。以下のポイントを確認し、正確に入力してください。</p>
        <p>勤務先情報の入力欄：ESTA申請フォームには、勤務先の名称や住所を入力する欄があります。子供は就労していないため、勤務先名の欄には「N/A」(該当なし)と入力してください。勤務先の住所や電話番号の入力欄も同様に「N/A」と記入します。学生の場合も同様に「N/A」と入力して問題ありません。</p>
        <p>メールアドレスの入力欄：子供が自身のメールアドレスを持っていない場合は、保護者(親)のメールアドレスを入力してください。申請完了通知や審査結果のメールは、入力したメールアドレスに送信されます。なお、複数の子供の申請で同じメールアドレスを使用しても問題ありません。</p>
        <p>電話番号の入力欄：子供が自身の電話番号を持っていない場合は、保護者の電話番号を入力してください。</p>
        <p>セキュリティに関する質問：申請フォームには、犯罪歴や感染症に関するセキュリティ質問が含まれています。子供の場合、通常はすべて「いいえ」と回答することになりますが、内容をよく確認したうえで正確に回答してください。虚偽の回答は渡航認証の拒否につながる可能性があります。</p>
      </section>

      <section id="sec-05" class="fade-up">
        <h2>グループ申請での子供の追加方法</h2>
        <p>家族でアメリカへ渡航する場合は、ESTA(エスタ)のグループ申請機能を利用することで、複数の渡航者の申請をまとめて手続きすることが可能です。グループ申請では、代表者が最初に自身のESTA申請を行った後、同じグループに子供や家族を追加していきます。</p>
        <p>グループ申請で子供を追加する手順は以下のとおりです。まず、ESTA申請ページで「グループによる申請」を選択し、代表者(保護者)のESTA申請を完了させます。代表者の申請が完了したら、「申請者を追加」ボタンを選択し、子供のパスポート情報を入力します。この手順を繰り返すことで、複数の子供を同じグループに追加できます。</p>
        <p>グループ申請のメリットとして、すべての申請者のステータスをひとつの画面で確認できる点が挙げられます。家族全員の審査状況を一括で管理できるため、個別に確認する手間が省けます。ただし、グループ申請であっても、申請手数料は渡航者1名ごとに発生する点にご注意ください。また、グループ内の1名が渡航認証を拒否された場合でも、他の申請者の審査結果には影響しません。</p>
      </section>

      <section id="sec-06" class="fade-up">
        <h2>よくある質問</h2>
        <div class="faq" style="margin-top:32px">
          <details open>
            <summary>Q. 赤ちゃん(0歳)でもESTAの申請は必要ですか？</summary>
            <div class="answer"><p>はい、0歳の赤ちゃんであってもESTAの申請は必要です。アメリカへ渡航するすべての方は、年齢に関係なくESTAを取得しなければなりません。赤ちゃんの場合は、保護者が代理で申請手続きを行ってください。なお、赤ちゃん自身のパスポートが必要となるため、パスポートを取得していない場合は、先にパスポートの申請を行いましょう。</p></div>
          </details>
          <details>
            <summary>Q. 子供のESTA申請で勤務先には何と入力すればよいですか？</summary>
            <div class="answer"><p>子供が就労していない場合は、勤務先名の欄に「N/A」と入力してください。住所や電話番号の欄も同様に「N/A」と入力します。学生であっても勤務先は「N/A」で問題ありません。学校名を入力する必要はありません。</p></div>
          </details>
          <details>
            <summary>Q. 子供のESTA申請に使うメールアドレスは親のものでも大丈夫ですか？</summary>
            <div class="answer"><p>はい、子供が自身のメールアドレスを持っていない場合は、保護者のメールアドレスを使用して申請できます。複数のお子様の申請に同じメールアドレスを使用しても問題ありません。申請完了通知や審査結果の通知は、入力したメールアドレスに送信されます。</p></div>
          </details>
          <details>
            <summary>Q. 子供のESTAは親のパスポートで申請できますか？</summary>
            <div class="answer"><p>いいえ、子供のESTA申請には子供本人のパスポートが必要です。親のパスポートに子供の情報が併記されている場合でも、子供専用のICチップ搭載パスポートを別途取得する必要があります。パスポートの取得には数週間かかる場合があるため、渡航日から逆算して余裕をもって手続きを行ってください。</p></div>
          </details>
          <details>
            <summary>Q. 家族全員のESTAをまとめて申請できますか？</summary>
            <div class="answer"><p>はい、ESTAのグループ申請機能を利用することで、家族全員の申請をまとめて手続きすることが可能です。代表者が最初に申請を行い、その後「申請者を追加」ボタンから家族を追加していきます。ただし、申請手数料は1名ごとに発生します。グループ申請を利用すると、全員のステータスを一括で確認できるため便利です。</p></div>
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
  return (<><JsonLd data={PAGE_JSON_LD} /><div className="redesign-detail" dangerouslySetInnerHTML={{ __html: BODY_HTML }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Q. 赤ちゃん(0歳)でもESTAの申請は必要ですか？", "acceptedAnswer": {"@type": "Answer", "text": "はい、0歳の赤ちゃんであってもESTAの申請は必要です。アメリカへ渡航するすべての方は、年齢に関係なくESTAを取得しなければなりません。赤ちゃんの場合は、保護者が代理で申請手続きを行ってください。なお、赤ちゃん自身のパスポートが必要となるため、パスポートを取得していない場合は、先にパスポートの申請を行いましょう。"}}, {"@type": "Question", "name": "Q. 子供のESTA申請で勤務先には何と入力すればよいですか？", "acceptedAnswer": {"@type": "Answer", "text": "子供が就労していない場合は、勤務先名の欄に「N/A」と入力してください。住所や電話番号の欄も同様に「N/A」と入力します。学生であっても勤務先は「N/A」で問題ありません。学校名を入力する必要はありません。"}}, {"@type": "Question", "name": "Q. 子供のESTA申請に使うメールアドレスは親のものでも大丈夫ですか？", "acceptedAnswer": {"@type": "Answer", "text": "はい、子供が自身のメールアドレスを持っていない場合は、保護者のメールアドレスを使用して申請できます。複数のお子様の申請に同じメールアドレスを使用しても問題ありません。申請完了通知や審査結果の通知は、入力したメールアドレスに送信されます。"}}, {"@type": "Question", "name": "Q. 子供のESTAは親のパスポートで申請できますか？", "acceptedAnswer": {"@type": "Answer", "text": "いいえ、子供のESTA申請には子供本人のパスポートが必要です。親のパスポートに子供の情報が併記されている場合でも、子供専用のICチップ搭載パスポートを別途取得する必要があります。パスポートの取得には数週間かかる場合があるため、渡航日から逆算して余裕をもって手続きを行ってください。"}}, {"@type": "Question", "name": "Q. 家族全員のESTAをまとめて申請できますか？", "acceptedAnswer": {"@type": "Answer", "text": "はい、ESTAのグループ申請機能を利用することで、家族全員の申請をまとめて手続きすることが可能です。代表者が最初に申請を行い、その後「申請者を追加」ボタンから家族を追加していきます。ただし、申請手数料は1名ごとに発生します。グループ申請を利用すると、全員のステータスを一括で確認できるため便利です。"}}]}) }} /></>);
}
