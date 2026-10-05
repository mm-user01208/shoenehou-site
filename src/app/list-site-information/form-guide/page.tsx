import type { Metadata } from 'next';
import { JsonLd, pageJsonLd, seoMetadata } from '@/lib/seo';

const PAGE_PATH = '/list-site-information/form-guide/';
const PAGE_TITLE = '当サイト申請フォームの使い方（入力手順ガイド） | US ESTA Apply Website';
const PAGE_DESCRIPTION = 'US ESTA Apply Websiteの申請フォーム（日本語）の入力手順を、画面の順にご案内するサポート用ページです。';

export const metadata: Metadata = {
  ...seoMetadata({ path: PAGE_PATH, title: PAGE_TITLE, description: PAGE_DESCRIPTION }),
  robots: { index: false, follow: true },
};

const PAGE_JSON_LD = pageJsonLd({ path: PAGE_PATH, title: PAGE_TITLE, description: PAGE_DESCRIPTION });

const BODY_HTML = `<section class="article-hero">
  <div class="article-hero__inner">
    <nav class="crumb" aria-label="パンくず"><a href="/">HOME</a><span>›</span><a href="/list-site-information">サイト情報一覧</a><span>›</span><em>当サイト申請フォームの使い方（入力手順ガイド）</em></nav>
    <p class="article__eyebrow">Form Guide</p>
    <h1 class="article__title">当サイト申請フォームの使い方（入力手順ガイド）</h1>
    <p class="article__lede">このページは、当サイトの申請フォームで入力に迷った方向けのサポート用ガイドです。公式サイト（esta.cbp.dhs.gov）で直接申請する手順は <a href="/list-esta-application/esta-flow/">ESTA（エスタ）とは？申請方法を公式サイトの全画面・記入例付きで解説</a> をご覧ください。</p>
  </div>
</section>
<section class="article-main"><div class="article-main__inner">
  <aside class="toc"><p class="toc__head">目次</p><ol><li><a href="#sec-01">申請フォームの入力手順（21ステップ）</a></li><li><a href="#sec-02">申請後の流れ</a></li></ol></aside>
  <article class="article-body">
  <section id="sec-01" class="fade-up"><h2>申請フォームの入力手順（21ステップ）</h2><p>ESTA(エスタ)の申請手続きは、およそ10分で完了します。申請フォームは日本語で表示されますが、審査を行うのはCBP(アメリカ合衆国税関・国境警備局)であるため、氏名や住所などの情報はすべてローマ字(英語)で入力してください。申請フォームには、健康状態や過去の犯罪歴に関する9項目の質問があります。これらの質問に対し「はい」を選択した場合、ESTAの利用が認められない可能性があります。そのため、全項目の入力が完了したら、内容に不備がないかを必ず最終確認してください。審査結果は通常、申請完了後から数時間以内に通知されますが、最大で72時間かかる場合もあります。そのため、ESTAを管轄するCBPおよびDHS(アメリカ国土安全保障省)は、出発日の少なくとも3日前までに申請を行うことを推奨しています。</p>
        <p>ESTAの申請手順については、以下の内容を参考にしながら、申請フォームに正確な情報を入力してください。</p>

        <h3>01.　申請開始</h3>
        <p>TOP画面の「ESTA申請をはじめる」ボタンをクリックして、申請手続きを開始しましょう。</p>

        <h3>02.　個人情報</h3>
        <p>「姓/名」の欄には、パスポートに記載されている氏名をローマ字(大文字)で入力してください。「姓」に苗字を、「名」には名前を入力し、スペルミスがないか必ず確認しましょう。また、旧姓などの別名・別称がある方は「別名があります」を選択し、該当する名前を入力してください。入力時には、特にFU、JI、SHA、CHAなど、間違えやすいスペルに注意しましょう。</p>
        <p>なお、以下の国籍の方は「個人認識番号」を入力してください。こちらは任意項目のため、分からない場合は空欄でも構いません。ただし、台湾国籍の方は、パスポートに記載されている個人識別番号(英字1文字＋数字9桁)の入力が必須となります。</p>
        <p>Belgium(BEL)、Brunei(BRN)、Chile(CHL)、Croatia(HRV)、Czech republic(CZE)、Estonia(EST)、Germany(DEU)、Greece(GRC)、Hungary(HUN)、Israel(ISR)、Luxembourg(LUX)、Malta(MLT)、Monaco(MCO)、Netherlands(NLD)、Portugal(PRT)、Singapore(SGP)、Slovakia(SVK)、Slovenia(SVN)、South Korea(KOR)、Spain(ESP)、Taiwan(TWN)</p>

        <h3>03.　電話番号などの連絡先</h3>
        <p>「連絡先」の項目では、メールアドレスと電話番号の入力が必要です。特にメールアドレスについては、スペルミスがないよう正確にご入力ください。電話番号を入力する際は、最初にご自身の国籍を選択しましょう。申請が完了すると、当サイトより「申請受付完了メール」および「渡航認証可否メール」が、こちらの項目で登録されたメールアドレス宛に送信されます。</p>

        <h3>04.　居住地情報</h3>
        <p>各項目の記入例を参考にしながら、ご自身の居住している住所を入力しましょう。日本国内の住所であれば、郵便番号を入力することで都道府県以降の住所が自動的に反映されます。住所のスペルに不安がある方は、こちらの郵便番号の入力をご活用ください。</p>

        <h3>05.　パスポート・顔写真のアップロード</h3>
        <p>パスポートの顔写真掲載ページ全体の画像と、パスポートとは異なる顔写真をアップロードしてください。影の映り込みなどにより文字や画像が判別できない場合、申請後に再度画像の提出を求められるためご注意ください。</p>
        <p>日本国籍者のパスポート番号は、アルファベット2文字＋数字7桁の合計9桁です。入力後は、桁数や番号に誤りがないか確認しましょう。また、「発行年月日」および「有効期間満了日」は、日/月/年の順に選択してください。</p>

        <h3>06.　他国のパスポートの有無</h3>
        <p>「他国のパスポート有無」については、国民身分証明書またはパスポートを所有している二重国籍の方は「はい」を選択してください。該当する国民身分証明書またはパスポートの情報(発給国・有効期限・ID番号など)を入力しましょう。なお、ID番号や有効期限が不明な場合でも空欄にせず、必ず「UNKNOWN(不明)」と記入または選択してください。</p>

        <h3>07.　出生国・出生都市</h3>
        <p>該当する出生国をプルダウンメニューから選択し、「出生都市」欄にはご自身の出生地をローマ字(大文字)で入力してください。なお、「出生都市」の入力は任意のため、不明な場合は空欄でも構いません。</p>

        <h3>08.　他国の国籍・市民権の保有状況</h3>
        <p>「他国籍の有無(現在)」の欄では、現在保有している国籍以外に別の国籍または市民権を取得している方は、「はい」を選択してください。選択後、「国籍」と「取得した経緯」の入力欄が表示されますので、該当する項目を選びましょう。</p>
        <p>また、過去に現在とは異なる国籍または市民権を保有していた方は「他国籍の有無(過去)」の欄で「はい」を選択してください。そのうえで、「過去に保有していた国籍」、「他国籍の取得日」、「他国籍の放棄日」の各項目を正確に選択してください。これらはすべて必須項目となるため、入力後は記入漏れがないか必ず確認しましょう。</p>

        <h3>09.　GE/NEXUS/SENTRIのメンバー情報</h3>
        <p>CBP(アメリカ合衆国税関・国境警備局)が管轄する事前認証制度「トラステッド・トラベラー・プログラム(TTP)」では、現在5種類のプログラムが運用されています。これらのうち、「CBP Global Entry/NEXUS/SENTRI」のいずれに参加している方は、「はい」を選択し「PASS ID」欄に該当する9桁の番号を入力してください。</p>

        <h3>10.　渡航目的・滞在先の登録</h3>
        <p>最上部の「渡航目的の確認事項」では、アメリカを経由し他国へ乗り継ぐ方は「はい」、アメリカに入国し滞在する方は「いいえ」を選択してください。「いいえ」を選んだ場合、次の項目として「滞在先の住所、電話番号を登録しますか？」と表示されます。滞在先の連絡先が分かる方は「はい」を選択し、滞在先の詳細(名称や住所など)を入力しましょう。なお、詳細が分からない項目は空欄でも構いません。滞在先が未定の場合は、「いいえ」を選択してください。</p>

        <h3>11.　就労経験の申告</h3>
        <p>こちらの項目では、雇用状況に関する回答を求められます。現在または過去に就労経験がある方は「はい」を選択してください。雇用形態または勤務先のいずれかを回答し、勤務先の情報(住所や電話番号など)を入力しましょう。不明な項目については、空欄でも構いません。一度も就労した経験がない方は、「いいえ」を選択してください。</p>

        <h3>12.　SNSのアカウント情報</h3>
        <p>ご自身が利用しているSNSアカウントを登録する場合は「はい」を、登録を希望しない方やSNSを利用していない方は「いいえ」を選択してください。「はい」を選択した場合は、該当するSNSをプルダウンメニューから選び、SNS内で使用しているIDまたはアカウント名を入力しましょう。</p>

        <h3>13.　緊急連絡先の情報</h3>
        <p>緊急連絡先の登録について回答してください。登録を希望する方は「はい」を選択し、緊急時に連絡可能な家族や友人などの氏名、メールアドレス、電話番号を入力しましょう。これらはいずれも任意項目のため、連絡先が分かる場合のみ該当項目をご入力ください。不明な項目は、空欄でも構いません。</p>

        <h3>14.　両親の氏名</h3>
        <p>両親の名前が分かっており、登録を希望する方は「はい」を選択し、該当する方の氏名をローマ字で入力してください。なお、血縁上の両親に加え、養子や親族後見人の名前も登録可能です。両親の名前を登録しない場合は、「いいえ」と選択してください。</p>

        <h3>15.　適格性に関する質問事項</h3>
        <p>こちらの項目では、過去の犯罪歴や健康状態などに関する質問が含まれています。9つの質問内容をよく確認のうえ、「はい」または「いいえ」で回答してください。なお、いずれかの質問に「はい」と回答した場合、ESTAの利用は認められないため注意が必要です。</p>

        <h3>16.　同意事項の確認</h3>
        <p>「免責事項」および「利用規約」を確認のうえ、「同意する」のチェックボックスにチェックを入れてください。</p>

        <h3>17.　申請内容の最終確認</h3>
        <p>「入力内容の確認へ進む」をクリックし、申請内容に不備がないか確認してください。特に、氏名・パスポート情報・生年月日などの重要事項は、入力ミスがないよう十分ご注意ください。申請内容の確認が完了しましたら、申請料のお支払いへ進みましょう。</p>
        <p>以上で、ESTA申請情報の入力は完了です。</p>

        <h3>18.　申請料の支払い</h3>
        <p>申請料のお支払い方法はクレジットカードのみとなります。各種クレジットカード(Visa、Master Card、JCB、American Express、Diners Club)が利用可能です。なお、カードは申請者本人の名義でなくても審査には影響ありません。そのため、ご家族やグループでの申請において代表者がまとめて支払う場合も、申請者以外のカードでのお支払いが可能です。</p>
        <p>申請手数料の内訳は、アメリカ国土安全保障省申請料($40.27)に加え、申請代行サービス料として24,200円(税込)を頂戴いたします。</p>

        <h3>19.　申請手続きの完了</h3>
        <p>お支払いが完了し、「申請完了」と表示された時点でESTA申請の手続きはすべて終了となります。</p>

        <h3>20.　申請受付完了の通知</h3>
        <p>ESTA申請が完了しましたら、当サイトより「申請受付完了メール」が送信されます。申請時に登録したメールアドレス宛に送信されますので、申請後は該当のメールフォルダをご確認ください。なお、フリーメールをご利用の場合、迷惑メールフォルダなどに振り分けられる場合があります。万が一、「申請受付完了メール」が確認できない場合は、お問い合わせフォームより、登録したメールアドレス・お名前・パスポート番号を記載のうえご連絡ください。</p>

        <h3>21.　渡航認証可否の通知</h3>
        <p>ESTA申請後、登録済みのメールアドレス宛に「渡航認証可否メール」が送信されます。このメールには、ESTAの審査結果が記載されていますので、必ずご確認ください。なお、審査には最大72時間かかる場合があり、即時に承認されるとは限りません。審査中の申請ステータスは「渡航認証保留中」と表示されます。申請日に「渡航認証可否メール」が通知されなかった場合は、翌日に再度メールフォルダをご確認ください。審査後は「渡航認証許可」と「渡航認証拒否」のいずれかの結果が通知されます。</p></section>
  <section id="sec-02" class="fade-up"><h2>申請後の流れ</h2><p>申請完了後は「申請受付完了メール」、審査後に「渡航認証可否メール」が届きます。申請状況の確認方法は <a href="/list-esta-application/status-check/">ESTA申請状況の確認方法</a> をご覧ください。</p></section>
</article></div></section>
<section class="cta-strip cta-strip--solid" id="apply">
  <p class="cta-strip__eyebrow">Start your application</p>
  <h2 style="font-size:30px;line-height:1.4">日本語サポート付きで<br>申請代行を依頼する（当サイト）</h2>
  <p style="max-width:640px">当サイトの申請サポートは日本語フォームでの入力・内容確認・結果通知まで対応します<br class="pc-br">（申請手数料24,200円・税込、米国政府への申請料$40.27を含む）。<br>審査には最大3日ほどかかるため、余裕をもってお手続きください。</p>
  <a href="/form/step1" class="cta-btn"><span class="cta-sub">アメリカ入国前に必須の事前手続き</span><span class="cta-main"><span class="cta-txt">日本語サポート付きで申請を依頼する</span><span class="cta-arrow">→</span></span></a>
</section>
<!-- ===== Related articles (reused) ===== -->
<section class="section section--cream">
  <div class="section__inner fade-up">
    <p class="section__eyebrow">№ — Related Articles</p>
    <h2 class="section__title">関連記事</h2>
    <div class="ornament"><span></span><em></em><span></span></div>
  </div>
  <div class="related fade-up" style="margin-top:56px">
    <a href="/list-esta-application/esta/"><span class="related__media"><img src="/img/related/01-esta-toha.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">01.</span><span class="related__title">ESTAの対象者・申請要件（VWP参加国一覧）</span><span class="related__more">Read more</span></span></a>
    <a href="/list-esta-application/esta-flow/"><span class="related__media"><img src="/img/related/04-apply-method.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">02.</span><span class="related__title">ESTA（エスタ）とは？申請方法を公式画面・記入例付きで解説</span><span class="related__more">Read more</span></span></a>
    <a href="/list-esta-application/place-of-birth/"><span class="related__media"><img src="/img/related/03-address-writing.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">03.</span><span class="related__title">出生地や住所の書き方</span><span class="related__more">Read more</span></span></a>
    <a href="/list-esta-application/us-contact-details/"><span class="related__media"><img src="/img/related/06-us-contact.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">04.</span><span class="related__title">米国内の連絡先の記入方法</span><span class="related__more">Read more</span></span></a>
  </div>
</section>
`;

export default function Page() {
  return (<><JsonLd data={PAGE_JSON_LD} /><div className="redesign-detail" dangerouslySetInnerHTML={{ __html: BODY_HTML }} /></>);
}
