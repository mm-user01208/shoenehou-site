import type { Metadata } from 'next';
import { JsonLd, pageJsonLd, seoMetadata } from '@/lib/seo';

const PAGE_PATH = '/list-esta-application/place-of-birth/';
const PAGE_TITLE = 'ESTA(エスタ)申請時の出生地や住所の書き方を解説 | US ESTA Apply Website';
const PAGE_DESCRIPTION = 'ESTA(エスタ)の審査はアメリカCBPによって行われるため、申請フォームはすべて英語(ローマ字)での入力が必須です。出生地と現住所の入力方法を、記入例付きで解説します。';

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
<style>
/* ===== CTR改善パターン(角丸なし・サイト準拠) ===== */
.patlab{max-width:700px;margin:40px auto 12px!important;text-align:center;font-size:12px;font-weight:700;letter-spacing:.1em;color:#8a8f98}
.patlab b{display:inline-block;background:#0a2540;color:#fff!important;padding:3px 12px;border-radius:999px;letter-spacing:.06em}
.patlab .memo{display:block;margin-top:4px!important;font-weight:500;color:#a7abb2}
.cvbtn{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;width:277px;max-width:100%;min-height:69px;margin:14px auto 0;padding:12px 20px;text-decoration:none!important;color:#fff!important;box-sizing:border-box;border-radius:0}
.cvbtn .main{font-size:18px;font-weight:700;letter-spacing:1.3px;line-height:1.25;display:flex;align-items:center;gap:8px}
.cvbtn .main svg{flex:none}
.cvbtn .sub{font-size:11px;font-weight:400;letter-spacing:.02em;opacity:.9}
.cvbtn--red{background:#b91c30}
.cvbtn--navy{background:#0a2540}
/* A */
.patA{max-width:700px;margin:0 auto;padding:22px 18px 20px;background:#0a2540;border-radius:14px}
.patA__trust{display:grid;grid-template-columns:1fr 1fr;gap:12px 8px}
.patA__trust div{color:#fff;text-align:center;line-height:1.3}
.patA__trust b{display:block;font-size:15px;font-weight:800;color:#fff}
.patA__trust span{font-size:11px;opacity:.8}
@media(min-width:560px){.patA__trust{grid-template-columns:repeat(4,1fr)}}
.patA .cvbtn .main{font-size:1.7rem;margin-top:8px}
/* B */
.patB{max-width:700px;margin:0 auto;border:1px solid #d7dbe0;border-radius:14px;overflow:hidden;background:#fff}
.patB__head{padding:16px 20px;background:#0a2540;color:#fff}
.patB__eye{font-size:11px;letter-spacing:.14em;color:#c7b273;font-weight:700}
.patB__head b{display:block;font-size:17px;font-weight:700;margin-top:3px}
.patB__list{list-style:none!important;margin:0;padding:14px 20px 0}
.patB__list li{list-style:none!important;position:relative;padding:3px 0 3px 26px;font-size:13.5px;color:#2b3440;line-height:1.55}
.patB__list li::marker{content:""}
.patB__list li::before{content:"✓";position:absolute;left:0;top:3px;color:#0a7d33;font-weight:800}
.patBwrap{padding:0 20px 20px}
.patB .cvbtn{margin-top:0}
/* C */
.patC{max-width:700px;margin:0 auto;text-align:center}
.patC__note{margin-top:9px!important;font-size:12px;color:#5a626c;margin-bottom:0!important}
/* D */
.patD{max-width:700px;margin:0 auto;padding:20px 18px;background:#f7f5ef;border-radius:14px}
.patD__steps{display:flex;justify-content:center;gap:8px;margin-bottom:6px}
.patD__steps div{flex:1;max-width:150px;text-align:center;font-size:12px;color:#0a2540;font-weight:600}
.patD__steps .n{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:999px;background:#0a2540;color:#fff;font-weight:800;margin-bottom:5px}
/* E */
.patE{max-width:700px;margin:0 auto;text-align:center}
.patE__pay{margin:10px 0 5px!important;font-size:11.5px;color:#5a626c}
.patE__cards{display:flex;justify-content:center;gap:6px;margin-top:0;flex-wrap:wrap}
.patE__cards span{font-size:10px;font-weight:700;color:#0a2540;border:1px solid #cfd5dc;border-radius:4px;padding:2px 7px}
/* F */
.patF{max-width:700px;margin:0 auto;text-align:center;padding:22px 18px;border-top:2px solid #0a2540;border-bottom:2px solid #0a2540}
.patF h3{font-size:19px;color:#0a2540;font-weight:800;line-height:1.5;margin:0 0 4px!important}
.patF p{font-size:13px;color:#5a626c;margin:0!important}
.icons{max-width:700px;margin:0 auto;display:flex;flex-direction:column;gap:12px;align-items:center}
.icons .cap{font-size:11px;color:#8a8f98;font-weight:600}
</style>

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


      <p class="patlab"><b>パターンA</b> 実績・安心バー＋申請ボタン<span class="memo">（CVボタン文字を大きく／数字は控えめ）</span></p>
      <div class="patA">
        <div class="patA__trust">
          <div><b>最短5分</b><span>で入力完了</span></div>
          <div><b>日本語</b><span>のフォームで入力</span></div>
          <div><b>記入例つき</b><span>で迷わず入力</span></div>
          <div><b>SSL</b><span>暗号化で安全</span></div>
        </div>
        <a href="/form/step1" class="cvbtn cvbtn--red"><span class="main">✓ ESTA申請をはじめる</span><span class="sub">出発の3日前までにお手続きを</span></a>
      </div>

      <p class="patlab"><b>パターンB</b> 公式感カード＋チェックリスト</p>
      <div class="patB">
        <div class="patB__head"><span class="patB__eye">UNITED STATES ・ ESTA</span><b>アメリカ渡航のESTA申請</b></div>
        <ul class="patB__list">
          <li>日本語のフォームで、案内に沿ってそのまま入力</li>
          <li>入力内容は専任スタッフが確認</li>
          <li>SSL暗号化・最短5分で入力完了</li>
        </ul>
        <div class="patBwrap"><a href="/form/step1" class="cvbtn cvbtn--red"><span class="main">✓ ESTA申請をはじめる</span></a></div>
      </div>

      <p class="patlab"><b>パターンC</b> ミニマル（区切りに繰り返し置ける型）</p>
      <div class="patC">
        <a href="/form/step1" class="cvbtn cvbtn--navy"><span class="main">✓ ESTA申請をはじめる</span></a>
        <p class="patC__note">最短5分で入力 ・ 専任スタッフが確認</p>
      </div>

      <p class="patlab"><b>パターンD</b> ステップ型（申請の流れを見せて安心）</p>
      <div class="patD">
        <div class="patD__steps">
          <div><span class="n">1</span><br>情報入力<br>（最短5分）</div>
          <div><span class="n">2</span><br>お支払い</div>
          <div><span class="n">3</span><br>結果を受取</div>
        </div>
        <a href="/form/step1" class="cvbtn cvbtn--red"><span class="main">✓ ESTA申請をはじめる</span></a>
      </div>

      <p class="patlab"><b>パターンE</b> 決済・安全訴求型</p>
      <div class="patE">
        <a href="/form/step1" class="cvbtn cvbtn--red"><span class="main">✓ ESTA申請をはじめる</span></a>
        <p class="patE__pay">各種クレジットカード対応・SSL暗号化で安全に決済</p>
        <div class="patE__cards"><span>VISA</span><span>Mastercard</span><span>JCB</span><span>American Express</span><span>Diners Club</span></div>
      </div>

      <p class="patlab"><b>パターンF</b> ヘッドライン型（一言＋ボタン）</p>
      <div class="patF">
        <h3>アメリカ渡航には、ESTAの取得が必須です。</h3>
        <p>オンラインで完結・最短5分。この記事を見ながらそのまま入力できます。</p>
        <a href="/form/step1" class="cvbtn cvbtn--red"><span class="main">✓ ESTA申請をはじめる</span></a>
      </div>

      <p class="patlab"><b>CTA内アイコン案（第2弾）</b> ✓・矢印・飛行機以外<span class="memo">同じ赤ボタンで比較</span></p>
      <div class="icons">
        <a href="/form/step1" class="cvbtn cvbtn--red"><span class="main">ESTA申請をはじめる »</span></a><span class="cap">案6：シェブロン »（次へ進む・矢印より控えめ）</span>
        <a href="/form/step1" class="cvbtn cvbtn--red"><span class="main"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="5" y="11" width="14" height="10"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg> ESTA申請をはじめる</span></a><span class="cap">案7：鍵アイコン（安全・SSL訴求）</span>
        <a href="/form/step1" class="cvbtn cvbtn--red"><span class="main"><svg width="16" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="miter"><path d="M12 3l7 3v5c0 4-3 7-7 9-4-2-7-5-7-9V6z"/></svg> ESTA申請をはじめる</span></a><span class="cap">案8：盾アイコン（サイトのロゴが盾なので統一感）</span>
        <a href="/form/step1" class="cvbtn cvbtn--red"><span class="main"><svg width="15" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="5" y="3" width="14" height="18"/><circle cx="12" cy="9" r="2.4"/><path d="M9 15h6"/></svg> ESTA申請をはじめる</span></a><span class="cap">案9：パスポート風アイコン（渡航書類）</span>
      </div>

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
  return (<><JsonLd data={PAGE_JSON_LD} /><div className="redesign-detail" dangerouslySetInnerHTML={{ __html: BODY_HTML }} /></>);
}
