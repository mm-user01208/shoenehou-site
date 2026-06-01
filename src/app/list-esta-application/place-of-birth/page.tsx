import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ESTA(エスタ)申請時の出生地や住所の書き方を解説 | US ESTA Apply Website',
  description: 'ESTA(エスタ)の審査はアメリカCBPによって行われるため、申請フォームはすべて英語(ローマ字)での入力が必須です。出生地と現住所の入力方法を、記入例付きで解説します。',
};

const BODY_HTML = `
<section class="article-hero">
  <div class="article-hero__inner">
    <nav class="crumb" aria-label="パンくず">
      <a href="/">HOME</a><span>›</span>
      <a href="/list-esta-application">ESTA申請関連情報一覧</a><span>›</span>
      <em>ESTA(エスタ)申請時の出生地や住所の書き方を解説</em>
    </nav>
    <p class="article__eyebrow">Place of Birth</p>
    <h1 class="article__title">ESTA(エスタ)申請時の出生地や住所の書き方を解説</h1>
    <p class="article__lede">ESTA(エスタ)は、アメリカ国土安全保障省の管轄下にある税関・国境警備局(CBP)によって運営されているため、申請フォームの項目はすべて英語(ローマ字)で入力する必要があります。本記事ではESTA申請フォームにおける出生地や住所の正しい入力方法を、具体例を交えながら詳しく解説します。</p>
  </div>
</section>

<section class="article-main">
  <div class="article-main__inner">
    <aside class="toc">
      <p class="toc__head">目次</p>
      <ol>
        <li><a href="#sec-01">出生地(出生都市)について</a></li>
        <li><a href="#sec-02">国籍と出生国について</a></li>
        <li><a href="#sec-03">現住所の入力方法</a></li>
        <li><a href="#sec-04">北海道札幌市にお住まいの方の入力例</a></li>
        <li><a href="#sec-05">宮城県仙台市にお住まいの方の入力例</a></li>
        <li><a href="#sec-06">東京都港区にお住まいの方の入力例</a></li>
        <li><a href="#sec-07">大阪府大阪市にお住まいの方の入力例</a></li>
        <li><a href="#sec-08">福岡県福岡市にお住まいの方の入力例</a></li>
      </ol>
    </aside>

    <article class="article-body">

      <section id="sec-01" class="fade-up">
        <h2>出生地(出生都市)について</h2>
        <p>ESTA申請フォームにおける「出生地(Birthplace)」とは、申請者本人が実際に生まれた都市名を入力する項目です。本籍地や住民票の登録地ではなく、実際に出生した都道府県または市区町村を指します。</p>
        <p>米国の入国管理を担う米国税関・国境警備局(CBP)は、ESTA申請時に入力された個人情報をもとに事前審査を行います。出生地の情報は、同姓同名者との識別や過去の渡航履歴の照合などに利用される重要な情報の一つであるため、正確な都市名をローマ字で入力することが重要です。</p>
        <p>例えば、東京都千代田区で出生した方は「TOKYO」または「CHIYODA-KU」、神奈川県横浜市の方は、「KANAGAWA」または「YOKOHAMA-SHI」と入力します。出生地が不明な場合は、空欄でも申請は可能です。</p>
      </section>

      <section id="sec-02" class="fade-up">
        <h2>国籍と出生国について</h2>
        <p>ESTA申請フォームには、「国籍(Nationality)」と「出生国(Country of Birth)」を入力する項目があります。これらは意味が似ているため混同しやすいですが、それぞれ異なる情報を指します。国籍は現在法的に保有している国籍を、出生国は生まれた国を指します。</p>
        <p>日本国内で生まれ、日本国籍のみを保有している方はいずれもJAPANを選択してください。ただし、海外(アメリカ)で生まれた日本国籍者の場合は、「国籍：JAPAN」「出生国：USA」を選択します。この情報は、審査において二重国籍や帰化歴の確認にも利用されるため、虚偽の入力は避け正確な情報を選択してください。</p>
      </section>

      <section id="sec-03" class="fade-up">
        <h2>現住所の入力方法</h2>
        <p>ESTA申請フォームの「現住所(Current Address)」には、日本国内の住所を英語(ローマ字)表記に変換して入力する必要があります。米国での審査・照合を前提としているため、日本語や漢字での入力は認められていません。</p>
        <p>住所の入力方法は、日本の住所を英語(ローマ字)に変換したうえで、英語圏の書き方(小さい単位から大きい単位へ)で入力するのが一般的です。また、アパートやマンションにお住まいの場合は、建物名や部屋番号も入力することが推奨されています。その際の順番は、「部屋番号→建物名→番地→町名→市区町村→都道府県」と入力しましょう。</p>
        <p>日本の都道府県を英語で表す場合、通常は"Tokyo Prefecture(東京都)"や"Osaka Prefecture(大阪府)"のように「都道府県名+prefectures(プレフェクチャーズ)」と表記しますが、ESTA申請フォームでは"prefectures"を省略しても問題ありません。</p>
        <p>以下は、主な都市の英語(ローマ字)表記での住所記入例です。</p>
      </section>

      <section id="sec-04" class="fade-up">
        <h2>北海道札幌市にお住まいの方の入力例</h2>
        <p>日本語住所：北海道札幌市北区北8条西1丁目1-1　ABCハイツ101号</p>
        <table>
          <tbody>
            <tr><th>Address Line 1（番地）</th><td>1-1 Nishi 1-Chome Kita 8-Jo</td></tr>
            <tr><th>Address Line 2（建物名・部屋番号）</th><td>#101 ABC Heights</td></tr>
            <tr><th>City（市区町村）</th><td>Kita-ku, Sapporo-shi</td></tr>
            <tr><th>State（都道府県）</th><td>Hokkaido</td></tr>
            <tr><th>Postal Code（郵便番号）</th><td>060-0808</td></tr>
          </tbody>
        </table>
      </section>

      <section id="sec-05" class="fade-up">
        <h2>宮城県仙台市にお住まいの方の入力例</h2>
        <p>日本語住所：宮城県仙台市若林区五橋1丁目1-1 ABCアパート201号</p>
        <table>
          <tbody>
            <tr><th>Address Line 1（番地）</th><td>1-1 Itsutsubashi 1-Chome</td></tr>
            <tr><th>Address Line 2（建物名・部屋番号）</th><td>#201 ABC Apartment</td></tr>
            <tr><th>City（市区町村）</th><td>Wakabayashi-ku, Sendai-shi</td></tr>
            <tr><th>State（都道府県）</th><td>Miyagi</td></tr>
            <tr><th>Postal Code（郵便番号）</th><td>984-0072</td></tr>
          </tbody>
        </table>
      </section>

      <section id="sec-06" class="fade-up">
        <h2>東京都港区にお住まいの方の入力例</h2>
        <p>日本語住所：東京都港区芝浦1丁目1-1 ABCコーポ301号</p>
        <table>
          <tbody>
            <tr><th>Address Line 1（番地）</th><td>1-1 Shibaura 1-Chome</td></tr>
            <tr><th>Address Line 2（建物名・部屋番号）</th><td>#301 ABC Corp</td></tr>
            <tr><th>City（市区町村）</th><td>Minato-ku</td></tr>
            <tr><th>State（都道府県）</th><td>Tokyo</td></tr>
            <tr><th>Postal Code（郵便番号）</th><td>108-0023</td></tr>
          </tbody>
        </table>
      </section>

      <section id="sec-07" class="fade-up">
        <h2>大阪府大阪市にお住まいの方の入力例</h2>
        <p>日本語住所：大阪府大阪市西区江戸堀1丁目1-1 ABCビル401号</p>
        <table>
          <tbody>
            <tr><th>Address Line 1（番地）</th><td>1-1 Edobori 1-Chome</td></tr>
            <tr><th>Address Line 2（建物名・部屋番号）</th><td>#401 ABC Building</td></tr>
            <tr><th>City（市区町村）</th><td>Nishi-ku, Osaka-shi</td></tr>
            <tr><th>State（都道府県）</th><td>Osaka</td></tr>
            <tr><th>Postal Code（郵便番号）</th><td>550-0002</td></tr>
          </tbody>
        </table>
      </section>

      <section id="sec-08" class="fade-up">
        <h2>福岡県福岡市にお住まいの方の入力例</h2>
        <p>日本語住所：福岡県福岡市博多区中洲1丁目1-1　ABCマンション501号</p>
        <table>
          <tbody>
            <tr><th>Address Line 1（番地）</th><td>1-1 Nakasu 1-Chome</td></tr>
            <tr><th>Address Line 2（建物名・部屋番号）</th><td>#501 ABC Mansion</td></tr>
            <tr><th>City（市区町村）</th><td>Hakata-ku, Fukuoka-shi</td></tr>
            <tr><th>State（都道府県）</th><td>Fukuoka</td></tr>
            <tr><th>Postal Code（郵便番号）</th><td>810-0801</td></tr>
          </tbody>
        </table>
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
