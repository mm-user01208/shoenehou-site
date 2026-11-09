import type { Metadata } from 'next';
import { JsonLd, pageJsonLd, seoMetadata } from '@/lib/seo';

const PAGE_PATH = '/list-esta-application/expiration-date/';
const PAGE_TITLE = 'ESTAの有効期限は何年？残り期限の確認方法【2026年版】 | US ESTA Apply Website';
const PAGE_DESCRIPTION = 'ESTAの有効期限は原則2年（申請時のパスポート有効期限が先に切れる場合はそこまで）。公式サイトで残りの有効期限を確認する手順を2026年最新情報で解説します。';

export const metadata: Metadata = seoMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'ESTAの有効期限は何年ですか？', acceptedAnswer: { '@type': 'Answer', text: '承認日から原則2年です。ただし申請時に使用したパスポートの有効期限が2年未満の場合は、パスポートの有効期限までとなります。' } },
    { '@type': 'Question', name: 'ESTAの有効期限を確認する方法は？', acceptedAnswer: { '@type': 'Answer', text: '公式サイトの申請状況確認ページで、パスポート番号・生年月日等を入力すると残り期限を確認できます（本文の手順参照）。' } },
    { '@type': 'Question', name: '有効期限が切れたらどうすればいいですか？', acceptedAnswer: { '@type': 'Answer', text: 'ESTAに更新手続きはありません。新規に再申請してください。再申請の手順は「ESTAの更新・延長方法｜期限切れ前の再申請手順」のページで解説しています。' } },
    { '@type': 'Question', name: 'パスポートを更新したらESTAはどうなりますか？', acceptedAnswer: { '@type': 'Answer', text: 'ESTAはパスポート番号に紐づくため、パスポートを更新した場合は有効期限内でもESTAの再申請が必要です。' } },
    { '@type': 'Question', name: '渡航中にESTAの期限が切れても大丈夫ですか？', acceptedAnswer: { '@type': 'Answer', text: '入国時にESTAが有効であれば、滞在中に期限が切れても許可された滞在期間内は問題ありません（出国まで有効である必要はありません）。' } },
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
      <a href="/list-esta-application/">ESTA申請関連情報一覧</a><span>›</span>
      <em>ESTAの有効期限は何年？残り期限の確認方法【2026年版】</em>
    </nav>
    <p class="article__eyebrow">Validity Period</p>
    <h1 class="article__title">ESTAの有効期限は何年？残り期限の確認方法【2026年版】</h1>
    <p class="article__lede">ESTA(エスタ)の有効期限は2年間で、この期間内であれば何度でも渡米することが可能です。本記事では、ESTAの有効期限の考え方と、残りの有効期限を確認する方法について詳しく解説します。</p>
    <div style="margin-top:24px;padding:20px 22px;background:#fbf7ee;border:1px solid #e3d6b8;border-left:4px solid #b8974a;border-radius:8px">
      <p style="margin:0 0 8px;font-size:13px;font-weight:700;letter-spacing:.08em;color:#b8974a">結論</p>
      <p style="margin:0 0 8px;font-size:16px;font-weight:700;line-height:1.7;color:#1c2733">ESTAの有効期限は承認日から原則2年。ただし申請時のパスポートの有効期限が2年より先に切れる場合は、その時点まで。</p>
      <p style="margin:0;font-size:14.5px;line-height:1.9;color:#3a4753">期限内は何度でも渡米できます。期限切れ後は「更新」ではなく新規の再申請が必要です。残り期限は公式サイトで今すぐ確認できます（下の手順へ）。</p>
    </div>
  </div>
</section>

<section class="article-main">
  <div class="article-main__inner">
    <aside class="toc">
      <p class="toc__head">目次</p>
      <ol>
        <li><a href="#sec-01">ESTAの有効期限は原則2年間</a></li>
        <li><a href="#sec-03">ESTAの申請手順</a></li>
        <li><a href="#sec-05">ESTA有効期限のまとめ</a></li>
        <li><a href="#sec-06">ESTAなしでもグアムおよびサイパンへの渡航は可能</a></li>
        <li><a href="#sec-faq">ESTAの有効期限に関するよくある質問</a></li>
      </ol>
    </aside>

    <article class="article-body">

      <section id="sec-01" class="fade-up">
        <h2>ESTAの有効期限は原則2年間</h2>
        <p>ESTA(エスタ)の有効期限は2年間です。ただし、ESTA申請時に使用したパスポートの有効期限が2年未満の場合は、ESTAもそのパスポートの有効期限と同日に失効するため注意が必要です。そのため、ESTAを申請する前に、必ずパスポートの有効期限を確認することをおすすめします。有効期限が2年未満の場合は、事前にパスポートを更新したうえでESTAを申請しましょう。また、ESTAの審査には一定の時間を要するため、出発日の3日前までに申請することが推奨されています。</p>
        <p>ESTAを取得してからアメリカへ渡航するまでに期間が空く場合は、渡航前に必ず有効期限を確認してください。ESTAを取得済みであっても、有効期限が切れている場合は利用できません。万が一、有効期限が切れた状態のESTAを取得したまま出発日を迎えた場合、飛行機への搭乗やアメリカへの入国を拒否されるためご注意ください。</p>
        <h3>ESTAの再申請が必要なケース</h3>
        <p>婚姻などにより新たにパスポートを取得した場合や、取得済みのESTA(エスタ)の有効期限が失効した場合は再申請が必要です。ESTAには登録情報や有効期限を更新する制度はありません。これらのケースでは、新たに申請手続きを行う必要があります。今後ESTAを利用してアメリカへの渡航を予定している方は、パスポート情報に変更がないか、またESTAの有効期限が切れていないかを事前に必ず確認してください。パスポート情報と不一致があると判断されたESTAは利用できないため注意が必要です。</p>
        <h3>アメリカ滞在中にESTAの有効期限が切れた場合の対応</h3>
        <p>ESTAは、<a href="https://www.cbp.gov/" target="_blank" rel="noopener noreferrer">CBP(アメリカ合衆国税関・国境警備局)</a>およびDHS(アメリカ国土安全保障省)が管轄する入国審査制度です。ESTAの有効性が確認されるのはアメリカ入国時であるため、滞在中や出国時にESTAの有効期限が切れていても、原則として影響はありません。入国時に承認されていれば、最長90日間のアメリカ滞在が認められます。ただし、アメリカへ入国する際には、滞在期間に加えて原則6か月以上の残存有効期間があるパスポートが必要です。また、ESTAを利用して渡航する場合は、少なくとも出国日まで有効なパスポートを所持していることが求められます。</p>
        <p>なお、アメリカで乗り継ぎを行う場合は、有効なESTAに加えて1年以上の有効期限があるパスポートの所持を求められるケースがあります。必要なパスポートの残存有効期限は、乗り継ぎ先の国や航空会社によって異なるため、渡航前に必ず各国の入国条件を確認することをおすすめします。万が一、入国条件を満たさずに乗り継ぎを行った際には、飛行機への搭乗および入国を拒否される可能性があるため注意が必要です。</p>
        <h3>ESTAの有効期限が切れていてもグアム・サイパンへ渡航できる条件</h3>
        <p>日本国籍者が90日以内の観光や商用、または乗り継ぎを目的としてグアムまたはサイパン(マリアナ諸島)へ渡航する場合、原則としてESTA(エスタ)の申請が求められます。ただし、「グアム-北マリアナ諸島連邦ビザ免除プログラム(Guam-CNMI VWP)」を利用することで、ESTAやビザを取得せずにグアムやサイパンへの渡航が認められる場合があります。Guam-CNMI VWPは、日本を含むアメリカ政府が指定する国の市民を対象とした制度で、45日以内のグアムおよびサイパンへの滞在が認められます。本制度は観光または商用目的に限って利用可能で、渡航前に電子渡航認証「G-CNMI ETA」を申請し、「渡航認証許可」を取得する必要があります。G-CNMI ETAの申請には、有効期限内のパスポートとメールアドレスをご用意ください。一方、45日を超えてのグアムまたはサイパンに滞在する場合は、ESTAの申請か目的に応じたビザの取得が必要となります。</p>
        <p>このように、ESTAの有効期限が切れている場合でも、渡航目的や滞在日数によってはGuam-CNMI VWPやアメリカビザを利用することで、グアムまたはサイパンへの渡航が認められます。いずれの入国制度もESTAとは利用条件や申請要件が異なるため、渡航前に必ず内容を確認したうえで申請しましょう。</p>
        <h3>乳幼児・未成年者が同伴する渡航にはESTA申請が必要</h3>
        <p>90日以内の観光、短期商用、または乗り継ぎを目的としてアメリカへ渡航する場合は、ESTA(エスタ)の申請が求められます。ESTAは年齢を問わず申請対象となるため、乳幼児や未成年者であっても、事前に渡航認証許可を取得しなければなりません。そのため、未成年者のESTA申請は、保護者が代理で手続きを行ってください。また、家族やグループでアメリカへ渡航する場合は、出発日までに全員分のESTAが有効であるかを必ず確認しましょう。万が一、1人でも有効なESTAが確認できない場合、飛行機への搭乗やアメリカへの入国を拒否される可能性があるため注意が必要です。</p>
        <h3>ESTAの有効期限の確認方法</h3>
        <p>ESTA(エスタ)取得後に有効期限の確認を希望する方は、当サイトまでお問い合わせください。当サイトを通じてESTAを申請された方に限り、有効期限の照会を行い、結果をお知らせします。有効期限を確認する際は、こちらの「お問い合わせ」より手続きを行ってください。お問い合わせフォームに進みましたら、必要事項(氏名・申請ID・メールアドレス)を入力し、お問い合わせ内容欄に「ESTAの有効期限の照会を希望」と記入のうえ送信してください。なお、「申請ID」はESTA申請完了後に当サイトから送信される「申請受付完了メール」にて確認できます。該当するメールが見つからず、申請IDが不明な場合は、省略していただいても問題ありません。</p>
        <p>一方、CBP(アメリカ合衆国税関・国境警備局)公式サイトからESTAを申請された方は、当サイトでは有効期限の確認はできません。ESTA申請公式サイトの運営は、CBPおよびDHSの管轄となっているため、当サイトでは認証情報を照会できない仕組みとなっています。そのため、公式サイトから申請された場合は、該当するESTA申請公式サイトへ直接お問い合わせください。</p>
      </section>

      <section id="sec-02" class="fade-up">
        <p>ESTAに更新機能はなく、期限切れの前に新規で再申請します。手順と費用は「<a href="/list-esta-guide/renewal/">ESTAの更新・延長方法｜期限切れ前の再申請手順</a>」で解説しています。</p>
      </section>

      <section class="cta-strip cta-strip--solid cta-mid">
        <p class="cta-strip__eyebrow">Start your application</p>
        <h2><span class="h2l1">アメリカ渡航には</span><br class="sp-br">ESTAの申請が必要です。</h2>
        <p>申請完了まで最大3日ほどかかるため、<br class="sp-br">余裕をもってお手続きください。</p>
        <a href="/form/step1" class="cta-btn"><span class="cta-sub">アメリカ入国前に必須の事前手続き</span><span class="cta-main"><span class="cta-txt">ESTA申請をはじめる</span><span class="cta-arrow">→</span></span></a>
      </section>

      <section id="sec-03" class="fade-up">
        <h2>ESTAの申請手順</h2>
        <p>ESTA(エスタ)の申請は、スマートフォンやパソコンからオンラインで行うことができます。申請にあたっては、有効なパスポート・申請料の支払いに使用するクレジットカード・審査結果を受け取るためのメールアドレスが必要です。申請フォームでは、申請者情報(名前、性別、生年月日)・連絡先(電話番号、メールアドレス)・住所などの基本情報に加え、犯罪歴や健康状態に関する質問への回答が求められます。また、パスポートの顔写真ページの画像と、パスポートとは別に撮影した顔写真のアップロードも必要です。すべての入力が完了した後、申請手数料の支払い手続きを行うことで、ESTAの申請は完了となります。</p>
        <p>申請手数料の支払いには、各種クレジットカード(Visa、Master Card、JCB、American Express、Diners Club)が利用できます。なお、家族やグループで申請し代表者がまとめて支払う場合は、申請者本人名義以外のクレジットカードでも支払いが可能です。</p>
      </section>

      <section id="sec-05" class="fade-up">
        <h2>ESTA有効期限のまとめ</h2>
        <h3>ESTAの有効期限は原則2年間</h3>
        <p>ESTA(エスタ)の有効期限は、原則として2年間です。ただし、ESTA申請時に使用したパスポートの有効期限が2年未満の場合は、ESTAもそのパスポートの有効期限と同日に失効するため注意が必要です。事前にパスポートの有効期限を確認し、残存期間が2年未満の場合は更新後にESTAを申請しましょう。</p>
        <h3>ESTAの有効期限が切れた場合は再申請が必要</h3>
        <p>取得済みのESTA(エスタ)の有効期限が切れており、今後もアメリカへの渡航を予定している場合はESTAを再申請してください。また、アメリカへの入国には、原則として残存有効期間が6か月以上あるパスポートが必要となるため、事前に確認することをおすすめします。残存有効期間が6か月未満の場合は、あらかじめパスポートを更新しておきましょう。なお、有効なアメリカビザを利用して渡航する場合は、ESTAを再申請する必要はありません。</p>
        <h3>ESTAに更新制度はありません</h3>
        <p>ESTA(エスタ)には、パスポートの切替申請のような更新制度はなく、有効期限を延長することはできません。そのため、ESTAの有効期限が近づいている場合や失効した場合、新たにパスポートを取得した場合、または申請情報の変更が必要になった場合には、ESTAを再申請する必要があります。なお、「ESTAの再申請」は既存の登録情報を更新する手続きではなく、新たに申請を行うものとなるため、再申請の際には別途申請手数料の支払いが必要です。一方で、アメリカでの滞在先住所や連絡先は重要情報に該当しないため、申請後であっても修正することが可能です。氏名やパスポート番号などの重要事項の修正を希望する場合は、当サイトのお問い合わせフォームよりご連絡ください。</p>
        <h3>有効期限内でもESTAの再申請は可能</h3>
        <p>取得済みのESTA(エスタ)の有効期限が残っている場合でも、ESTAを再申請することは可能です。例えば、ESTAを取得した翌日に再申請することもでき、再申請の回数に制限は設けられていません。ただし、新たにESTAが承認された時点で、新しい有効期限と申請番号が発行され、最新のESTAのみが有効となります。そのため、それまで取得していたESTAの認証情報は失効するため注意が必要です。なお、ESTAの認証情報は渡航時に必要となるため、紛失しないよう大切に保管しておきましょう。</p>
        <h3>ESTA再申請後は既存の認証情報が無効になります</h3>
        <p>ESTA(エスタ)の有効期限が切れた場合や、新たにパスポートを取得した場合には、ESTAの再申請が必要です。再申請手続きを行い、新たに渡航認証が承認されると、新しい有効期限と申請番号が発行されます。その時点で、既存のESTA認証情報は取り消され、無効となるため注意が必要です。そのため、有効期限が残っている状態でESTAを再申請する場合は、今後の旅行日程を確認したうえで手続きを行うことをおすすめします。</p>
        <h3>ESTAが有効期限切れでもアメリカから出国することは可能</h3>
        <p>ESTA(エスタ)は、短期観光や商用、または乗り継ぎを目的としてアメリカへ渡航する際に必要となる事前渡航認証制度です。有効なESTAは入国時に必要となりますが、出国時にESTAの有効期限が切れていても、原則として出国審査には影響ありません。ただし、アメリカへ入国する際には、有効なESTAに加えて、原則として残存有効期間が6か月以上あるパスポートが必要となります。また、アメリカで乗り継ぎ(トランジット)を行う場合も、有効なESTAが必要となるため注意が必要です。</p>
        <h3>ESTA再申請のポイント</h3>
        <p>ESTA(エスタ)の有効期限が切れた場合や、婚姻などにより新たにパスポートを取得した場合は、ESTAの再申請が必要となります。なお、「ESTAの再申請」は更新手続きではなく、新たに申請を行うものとなるため、申請時には別途手数料の支払いが求められます。また、ESTAの有効期限が残っている状態でも再申請が可能ですが、新たにESTAが承認された時点で、既存の認証情報は失効します。そのため、再申請を行う際は、今後の旅行日程を確認したうえで手続きを進めましょう。なお、アメリカへ入国する際には、有効なESTAに加え、残存有効期間が6か月以上あるパスポートが必要となるため、事前に準備しておくことをおすすめします。</p>
      </section>

      <section id="sec-06" class="fade-up">
        <h2>ESTAなしでもグアムおよびサイパンへの渡航は可能</h2>
        <p>日本国籍者がグアムおよびサイパン(北マリアナ諸島)へ渡航する場合、条件を満たせばESTA(エスタ)を取得せずに入国が認められる場合があります。アメリカが定める「グアム‐北マリアナ諸島ビザ免除プログラム(Guam-CNMI)」を利用することで、ESTA(エスタ)やビザを取得せずに、グアムおよびサイパン(北マリアナ諸島)への渡航が可能です。ただし、Guam-CNMIはハワイやアメリカ本土への渡航には利用できません。これらの地域へ渡航する場合は、事前にESTAまたは渡航目的に応じたアメリカビザを申請してください。</p>
        <h3>グアムおよびサイパン渡航時の注意点</h3>
        <p>日本国籍者が45日以内の観光または短期商用を目的として、グアムおよびサイパン(北マリアナ諸島)へ渡航する場合、「グアム‐北マリアナ諸島ビザ免除プログラム(Guam-CNMI)」を利用することができます。本プログラムの利用条件を満たした場合に限り、ビザやESTA(エスタ)を取得せずに渡航が認められます。Guam-CNMIを利用する際は、事前に電子渡航認証G-CNMI ETAを申請し、渡航認証許可を取得してください。審査には一定の期間を要するため、グアム政府観光局では出発日の7日前までにG-CNMI ETAを申請することを推奨しています。</p>
        <p>なお、45日を超えてのグアムまたはサイパン(北マリアナ諸島)に滞在する場合は、ESTA(エスタ)または渡航目的に応じたビザの取得が必要です。また、電子渡航認証G-CNMI ETAおよびESTAはいずれも、観光や短期商用を目的とした渡航に限って利用可能であり、就労や留学は認められていません。</p>
      </section>

      <section id="sec-faq" class="fade-up">
        <h2>ESTAの有効期限に関するよくある質問</h2>
        <div class="faq" style="margin-top:32px">
          <details open>
            <summary>ESTAの有効期限は何年ですか？</summary>
            <div class="answer"><p>承認日から原則2年です。ただし申請時に使用したパスポートの有効期限が2年未満の場合は、パスポートの有効期限までとなります。</p></div>
          </details>
          <details>
            <summary>ESTAの有効期限を確認する方法は？</summary>
            <div class="answer"><p>公式サイトの申請状況確認ページで、パスポート番号・生年月日等を入力すると残り期限を確認できます（本文の手順参照）。</p></div>
          </details>
          <details>
            <summary>有効期限が切れたらどうすればいいですか？</summary>
            <div class="answer"><p>ESTAに更新手続きはありません。新規に再申請してください。再申請の手順は「<a href="/list-esta-guide/renewal/">ESTAの更新・延長方法｜期限切れ前の再申請手順</a>」のページで解説しています。</p></div>
          </details>
          <details>
            <summary>パスポートを更新したらESTAはどうなりますか？</summary>
            <div class="answer"><p>ESTAはパスポート番号に紐づくため、パスポートを更新した場合は有効期限内でもESTAの再申請が必要です。</p></div>
          </details>
          <details>
            <summary>渡航中にESTAの期限が切れても大丈夫ですか？</summary>
            <div class="answer"><p>入国時にESTAが有効であれば、滞在中に期限が切れても許可された滞在期間内は問題ありません（出国まで有効である必要はありません）。</p></div>
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

<!-- ===== Related articles (reused) ===== -->
<section class="section section--cream">
  <div class="section__inner fade-up">
    <p class="section__eyebrow">№ — Related Articles</p>
    <h2 class="section__title">関連記事</h2>
    <div class="ornament"><span></span><em></em><span></span></div>
  </div>
  <div class="related fade-up" style="margin-top:56px">
    <a href="/list-esta-application/when-to-apply/"><span class="related__media"><img src="/img/related/when-to-apply.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">01.</span><span class="related__title">ESTAの申請タイミング（いつまでに・いつから）</span><span class="related__more">Read more</span></span></a>
    <a href="/list-esta-application/esta/"><span class="related__media"><img src="/img/related/01-esta-toha.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">02.</span><span class="related__title">ESTA(エスタ)とは？</span><span class="related__more">Read more</span></span></a>
    <a href="/list-esta-application/esta-flow/"><span class="related__media"><img src="/img/related/04-apply-method.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">03.</span><span class="related__title">ESTAの申請方法を解説</span><span class="related__more">Read more</span></span></a>
    <a href="/list-esta-application/us-contact-details/"><span class="related__media"><img src="/img/related/06-us-contact.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">04.</span><span class="related__title">米国内の連絡先の記入方法</span><span class="related__more">Read more</span></span></a>
  </div>
</section>
`;

export default function Page() {
  return (<><JsonLd data={PAGE_JSON_LD} /><div className="redesign-detail" dangerouslySetInnerHTML={{ __html: BODY_HTML }} /></>);
}
