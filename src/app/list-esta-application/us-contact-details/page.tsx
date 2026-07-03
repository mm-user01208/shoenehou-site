import type { Metadata } from 'next';
import { JsonLd, pageJsonLd, seoMetadata } from '@/lib/seo';

const PAGE_PATH = '/list-esta-application/us-contact-details/';
const PAGE_TITLE = '米国内の連絡先情報の記入方法 | US ESTA Apply Website';
const PAGE_DESCRIPTION = 'ESTA申請時に必要な米国内の滞在先情報や緊急連絡先の入力方法、変更方法、都市別記入例を詳しく解説します。';

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
      <em>米国内の連絡先情報の記入方法</em>
    </nav>
    <p class="article__eyebrow">US Contact Details</p>
    <h1 class="article__title">ESTA申請時に必要な米国内の連絡先(住所・電話番号)の記入方法</h1>
    <p class="article__lede">ESTAは米国内での滞在先や宿泊先が未定の場合でも申請が可能です。本ページではESTA申請時に必要となる米国内の滞在先情報および緊急連絡先情報の入力方法について、画面表示に沿って詳しく解説します。</p>
  </div>
</section>

<section class="article-main">
  <div class="article-main__inner">
    <aside class="toc">
      <p class="toc__head">目次</p>
      <ol>
        <li><a href="#sec-01">滞在先・宿泊先の入力方法</a></li>
        <li><a href="#sec-02">滞在先/宿泊先が決定している場合</a></li>
        <li><a href="#sec-03">滞在先/宿泊先が未定の場合</a></li>
        <li><a href="#sec-04">緊急連絡先を登録する重要性・入力方法</a></li>
        <li><a href="#sec-05">緊急連絡先を登録する場合</a></li>
        <li><a href="#sec-06">緊急連絡先を登録しない場合</a></li>
        <li><a href="#sec-07">連絡先や滞在先を変更・訂正する方法</a></li>
        <li><a href="#sec-08">滞在先情報の記入例【都市別】</a></li>
        <li><a href="#sec-09">ニューヨークに滞在する場合</a></li>
        <li><a href="#sec-10">ロサンゼルスに滞在する場合</a></li>
        <li><a href="#sec-11">ハワイ(ホノルル)に滞在する場合</a></li>
        <li><a href="#sec-12">ハワイ(ホノルル以外)に滞在する場合</a></li>
      </ol>
    </aside>

    <article class="article-body">

      <section id="sec-01" class="fade-up">
        <h2>滞在先・宿泊先の入力方法</h2>
        <p>米国への渡航が決まった際は、出発日までに余裕を持ってESTA申請を行うことをおすすめします。ESTA申請では入力内容に不備がある場合や、渡航情報の確認が必要と判断された場合に審査結果が一時的に「保留」や「認証拒否」と表示されることがあります。このような場合、搭乗予定の航空機にチェックインできない、あるいは出発直前にスケジュール調整が必要になる可能性もあります。そのため、滞在先が未定であってもESTAを早めに申請し、審査結果を事前に確認しておくことが重要です。万が一、承認されなかった場合でも、渡航までに十分な時間があれば、再申請やビザ申請などの対応が可能となります。なお、申請情報は正確性が求められるため、滞在予定先が決まり次第、速やかにESTA申請情報を更新しましょう。</p>
        <p>ESTA申請画面を進めていくと、「米国への渡航目的は、他国へ乗り継ぐためですか？」という質問が表示されます。ここでは、米国に入国・滞在するのか、それとも乗り継ぎ(トランジェット)なのかによって選択すべき項目が異なります。</p>
        <ul>
          <li>はい：米国の空港を経由して他国へ向かう場合に選択します。</li>
          <li>いいえ：米国本土やハワイを最終目的地として旅行・滞在する場合に選択します。</li>
        </ul>
        <p>この選択内容によって、滞在先住所や電話番号の入力画面が表示されるかどうかが変わります。他国への乗り継ぎ(トランジェット)が目的で米国に立ち寄る場合は、連絡先情報の入力欄は表示されません。ただし、乗り継ぎ目的であってもESTAの申請は必須のため忘れずに手続きを行いましょう。</p>
      </section>

      <section id="sec-02" class="fade-up">
        <h2>滞在先/宿泊先が決定している場合</h2>
        <p>「米国への渡航目的は、他国へ乗り継ぐためですか？」の質問で「いいえ」を選択すると、続けて「滞在先の住所、電話番号を登録しますか?」という質問が表示されます。すでにホテルを予約済みである場合や、滞在先が決まっている場合には「はい」を選択してください。その後、滞在先または宿泊先の情報を入力する画面が表示されます。入力が必要となる主な項目は、以下の通りです。</p>
        <h3>滞在先 名称</h3>
        <p>予約しているホテル名、または知人宅に滞在する場合は知人の氏名を入力します。情報が不明な場合は、未記入(空欄)のままでも問題ありません。<br>記入例：○○ Hotel、○○ Residence など</p>
        <h3>滞在先 州</h3>
        <p>滞在予定の州を、プルダウンメニューから選択します。情報が不明な場合は、未選択のままでも次の画面へ進むことができます。</p>
        <h3>滞在先 都市名</h3>
        <p>滞在先の都市名を英語(ローマ字)表記で記入します。情報が不明の場合は空欄のままで問題ありません。<br>記入例：Los Angels、New York、Chicago など</p>
        <h3>滞在先 通り名 丁番地、建物名、部屋番号</h3>
        <p>滞在先のホテルや建物の住所情報は、分かる範囲で入力してください。通り名、丁目、番地、建物名、部屋番号などを記入します。詳細が不明な場合は、空欄のままでも問題ありません。<br>記入例：○○ blvd 1234 ○○ Building</p>
        <h3>滞在先 電話番号</h3>
        <p>滞在先や宿泊先の電話番号を入力してください。先頭の「0」は自動的に省略されます。情報が不明な場合は、空欄のままでも構いません。</p>
        <h3>スムーズに入力するためのポイント</h3>
        <div class="tip-cards">
          <div class="tip-cards__item">
            <p class="tip-cards__head">ホテルに宿泊する場合</p>
            <p>予約確認メールやホテルの公式ウェブサイトに記載されている住所と電話番号をそのまま入力するのが最も確実です。</p>
          </div>
          <div class="tip-cards__item">
            <p class="tip-cards__head">個人宅に滞在する場合</p>
            <p>友人宅やAirbnb（エアビー）などに滞在する場合は、事前にホストから正式な住所と電話番号を入手しておきましょう。</p>
          </div>
          <div class="tip-cards__item">
            <p class="tip-cards__head">任意の項目に回答する場合</p>
            <p>任意項目には、不確かな情報を入力する必要はありません。空欄でも差し支えないため、正確な情報を分かる範囲で入力しましょう。</p>
          </div>
          <div class="tip-cards__item">
            <p class="tip-cards__head">複数の宿泊施設を利用する場合</p>
            <p>最初に宿泊する施設の情報を優先して入力することをおすすめします。</p>
          </div>
        </div>
      </section>

      <section id="sec-03" class="fade-up">
        <h2>滞在先/宿泊先が未定の場合</h2>
        <p>滞在先や宿泊先がまだ決まっていない方、または登録を希望しない方は「滞在先の住所、電話番号を登録しますか?」の質問に対して「いいえ」を選択してください。この場合、滞在先情報の入力画面は表示されず、そのまま次の手順へ進むことができます。ただし、入国審査時に口頭で滞在先を尋ねられることもあるため、渡航までに宿泊先を決めておくと安心です。空港での説明とESTAの申請内容に大きな齟齬が生じないよう注意しましょう。ESTA取得後であっても、米国内の滞在先情報(住所や電話番号)は、後から変更・訂正することが可能です。</p>
      </section>

      <section id="sec-04" class="fade-up">
        <h2>緊急連絡先を登録する重要性・入力方法</h2>
        <p>ESTA申請では米国内の滞在先だけでなく、緊急時に連絡が取れる方の連絡先情報も登録することが可能です。この緊急連絡先情報は、米国滞在中に予期せぬトラブルが発生した際に使用されることがあります。たとえば、病気や事故、または入国審査時に追加確認が必要となった場合などです。信頼できる家族や友人、勤務先などをあらかじめ登録しておくことで、万が一の際にも迅速かつ円滑な対応が可能になります。</p>
      </section>

      <section id="sec-05" class="fade-up">
        <h2>緊急連絡先を登録する場合</h2>
        <p>「緊急連絡先を登録しますか？」の質問に対し、「はい」を選択してください。その後、姓名、メールアドレス、緊急時の電話番号を入力します。この連絡先は、米国在住者である必要はありません。日本の家族や友人、勤務先など渡航者以外の個人や団体を登録することができます。登録前に、緊急連絡先として使用することを相手に伝えておくと安心です。なお、登録を希望しない場合は空欄でも構いません。</p>
      </section>

      <section class="cta-strip cta-strip--solid cta-mid">
        <p class="cta-strip__eyebrow">Start your application</p>
        <h2><span class="h2l1">アメリカ渡航には</span><br class="sp-br">ESTAの申請が必要です。</h2>
        <p>申請完了まで最大3日ほどかかるため、<br class="sp-br">余裕をもってお手続きください。</p>
        <a href="/form/step1" class="cta-btn">ESTA申請をはじめる →</a>
      </section>

      <section id="sec-06" class="fade-up">
        <h2>緊急連絡先を登録しない場合</h2>
        <p>緊急連絡先の登録を希望しない場合は、「いいえ」を選択して申請手続きを進めることが可能です。ただし、緊急連絡先を登録しない場合には、いくつかのリスクが考えられます。米国滞在中に急病や事故が発生した場合、あるいは入国審査時に追加の確認が必要となった場合などに、本人以外の連絡先として参照される情報がないことが問題となる可能性があります。緊急連絡先は必須項目ではありませんが、短期滞在であっても万が一に備えて登録しておくことをおすすめします。</p>
        <h3>滞在先情報を登録するメリット</h3>
        <p>米国では、滞在先や宿泊先が未定の渡航者に対する入国審査が年々厳しくなっており、不法滞在や不法就労の疑いにより入国を拒否される可能性もあります。ESTA申請における渡航先情報は、入国審査時に参照される場合があり、渡航者がどこに滞在し、どのような目的で米国を訪れるのかを判断する重要な材料となります。そのため、宿泊先の住所や電話番号、および渡航者と確実に連絡が取れる電話番号を登録しておくことを強くおすすめします。ESTA申請時に正確な滞在先情報を申告しておくことで、スムーズかつ安全な米国渡航が可能になります。</p>
      </section>

      <section id="sec-07" class="fade-up">
        <h2>連絡先や滞在先を変更・訂正する方法</h2>
        <p>ESTA申請では、渡航情報(滞在先情報)の変更や誤りの訂正が可能です。当サイトの「ESTA申請はこちら」をクリックし、新しい滞在先情報を入力してください。入力後、「入力内容を確認する」をクリックすると、「過去の入力情報」と「新しい入力情報」が表示されます。内容に誤りがなければ、「変更内容を送信する」をクリックし、「申請完了」画面が表示されることを確認してください。</p>
        <p>なお、氏名・パスポート番号・生年月日などの基本情報に誤りがあった場合は、新たにESTA申請を行う必要があります。ただし、当サイトからESTA申請をされた方は、申請完了後でも１度に限り、内容の修正・変更を無料で承ります。</p>
      </section>

      <section id="sec-08" class="fade-up">
        <h2>滞在先情報の記入例【都市別】</h2>
        <p>実際の申請画面に沿った具体的な記入例を、訪問する都市別に詳しく紹介します。</p>
        <h3>記入時の基本的なルール</h3>
        <ul>
          <li>英語表記：すべての情報は英語(ローマ字)で入力します</li>
          <li>住所の記載順：アメリカの住所表記に従い、「番地→通り名→市→州」の順で記入します</li>
          <li>複数の都市を訪れる場合：初日に滞在する宿泊先の情報を入力します</li>
          <li>知人宅に滞在する場合：ホストの氏名と住所を入力します</li>
          <li>任意項目の扱い：不明な情報は、空欄のままでも申請可能です</li>
        </ul>
        <p>ESTA申請フォームでは、宿泊先情報の多くに「任意」と表示されています。任意項目について正確な情報が分からない場合は、無理に入力する必要はありません。</p>
      </section>

      <section id="sec-09" class="fade-up">
        <h2>ニューヨークに滞在する場合</h2>

        <h3>1. ザ プラザ ホテル / The Plaza Hotel</h3>
        <table><tbody>
          <tr><th>日本語名</th><td>ザ プラザ ホテル</td></tr>
          <tr><th>滞在先名称</th><td>The Plaza Hotel</td></tr>
          <tr><th>滞在先 州</th><td>New Yorkを選択 ※未選択でも可</td></tr>
          <tr><th>滞在先 都市名</th><td>New York ※未記入でも可</td></tr>
          <tr><th>滞在先 通り名 丁番地(ホームアドレスライン1)</th><td>768 5th Ave ※未記入でも可</td></tr>
          <tr><th>滞在先 建物名(ホームアドレスライン2)</th><td>未記入</td></tr>
          <tr><th>滞在先 部屋番号</th><td>未記入</td></tr>
          <tr><th>滞在先 電話番号</th><td>212-759-3000 ※未記入でも可</td></tr>
        </tbody></table>

        <h3>2. ザ セント レジス ニューヨーク / The St. Regis New York</h3>
        <table><tbody>
          <tr><th>日本語名</th><td>ザ セント レジス ニューヨーク</td></tr>
          <tr><th>滞在先名称</th><td>The St. Regis New York</td></tr>
          <tr><th>滞在先 州</th><td>New Yorkを選択 ※未選択でも可</td></tr>
          <tr><th>滞在先 都市名</th><td>New York ※未記入でも可</td></tr>
          <tr><th>滞在先 通り名 丁番地(ホームアドレスライン1)</th><td>2 E 55th St ※未記入でも可</td></tr>
          <tr><th>滞在先 建物名(ホームアドレスライン2)</th><td>未記入</td></tr>
          <tr><th>滞在先 部屋番号</th><td>未記入</td></tr>
          <tr><th>滞在先 電話番号</th><td>212-753-4500 ※未記入でも可</td></tr>
        </tbody></table>

        <h3>3. ザ・サリー ホテル / The Surrey Hotel</h3>
        <table><tbody>
          <tr><th>日本語名</th><td>ザ・サリー ホテル</td></tr>
          <tr><th>滞在先名称</th><td>The Surrey Hotel</td></tr>
          <tr><th>滞在先 州</th><td>New Yorkを選択 ※未選択でも可</td></tr>
          <tr><th>滞在先 都市名</th><td>New York ※未記入でも可</td></tr>
          <tr><th>滞在先 通り名 丁番地(ホームアドレスライン1)</th><td>20 E 76th St ※未記入でも可</td></tr>
          <tr><th>滞在先 建物名(ホームアドレスライン2)</th><td>未記入</td></tr>
          <tr><th>滞在先 部屋番号</th><td>未記入</td></tr>
          <tr><th>滞在先 電話番号</th><td>212-288-3700 ※未記入でも可</td></tr>
        </tbody></table>

        <h3>4. ザ スタンダード ハイライン / The Standard High Line</h3>
        <table><tbody>
          <tr><th>日本語名</th><td>ザ スタンダード ハイライン</td></tr>
          <tr><th>滞在先名称</th><td>The Standard, High Line</td></tr>
          <tr><th>滞在先 州</th><td>New Yorkを選択 ※未選択でも可</td></tr>
          <tr><th>滞在先 都市名</th><td>New York ※未記入でも可</td></tr>
          <tr><th>滞在先 通り名 丁番地(ホームアドレスライン1)</th><td>848 Washington St ※未記入でも可</td></tr>
          <tr><th>滞在先 建物名(ホームアドレスライン2)</th><td>未記入</td></tr>
          <tr><th>滞在先 部屋番号</th><td>未記入</td></tr>
          <tr><th>滞在先 電話番号</th><td>212-645-4646 ※未記入でも可</td></tr>
        </tbody></table>
      </section>

      <section id="sec-10" class="fade-up">
        <h2>ロサンゼルスに滞在する場合</h2>

        <h3>1. シェラトン グランド ロサンゼルス / Sheraton Grand Los Angeles</h3>
        <table><tbody>
          <tr><th>日本語名</th><td>シェラトン グランド ロサンゼルス</td></tr>
          <tr><th>滞在先名称</th><td>Sheraton Grand Los Angeles</td></tr>
          <tr><th>滞在先 州</th><td>Californiaを選択 ※未選択でも可</td></tr>
          <tr><th>滞在先 都市名</th><td>Los Angeles ※未記入でも可</td></tr>
          <tr><th>滞在先 通り名 丁番地(ホームアドレスライン1)</th><td>711 S Hope St ※未記入でも可</td></tr>
          <tr><th>滞在先 建物名(ホームアドレスライン2)</th><td>未記入</td></tr>
          <tr><th>滞在先 部屋番号</th><td>未記入</td></tr>
          <tr><th>滞在先 電話番号</th><td>213-488-3500 ※未記入でも可</td></tr>
        </tbody></table>

        <h3>2. ウェスティン・ボナヴェンチャー・ホテル＆スイート / Westin Bonaventure Hotel &amp; Suites</h3>
        <table><tbody>
          <tr><th>日本語名</th><td>ウェスティン・ボナヴェンチャー・ホテル＆スイート</td></tr>
          <tr><th>滞在先名称</th><td>The Westin Bonaventure Hotel &amp; Suites</td></tr>
          <tr><th>滞在先 州</th><td>Californiaを選択 ※未選択でも可</td></tr>
          <tr><th>滞在先 都市名</th><td>Los Angeles ※未記入でも可</td></tr>
          <tr><th>滞在先 通り名 丁番地(ホームアドレスライン1)</th><td>404 S Figueroa St ※未記入でも可</td></tr>
          <tr><th>滞在先 建物名(ホームアドレスライン2)</th><td>未記入</td></tr>
          <tr><th>滞在先 部屋番号</th><td>未記入</td></tr>
          <tr><th>滞在先 電話番号</th><td>213-624-1000 ※未記入でも可</td></tr>
        </tbody></table>

        <h3>3. ロウズ ハリウッド ホテル / Loews Hollywood Hotel</h3>
        <table><tbody>
          <tr><th>日本語名</th><td>ロウズ ハリウッド ホテル</td></tr>
          <tr><th>滞在先名称</th><td>Loews Hollywood Hotel</td></tr>
          <tr><th>滞在先 州</th><td>Californiaを選択 ※未選択でも可</td></tr>
          <tr><th>滞在先 都市名</th><td>Los Angeles ※未記入でも可</td></tr>
          <tr><th>滞在先 通り名 丁番地(ホームアドレスライン1)</th><td>1755 N Highland Ave ※未記入でも可</td></tr>
          <tr><th>滞在先 建物名(ホームアドレスライン2)</th><td>未記入</td></tr>
          <tr><th>滞在先 部屋番号</th><td>未記入</td></tr>
          <tr><th>滞在先 電話番号</th><td>323-856-1200 ※未記入でも可</td></tr>
        </tbody></table>

        <h3>4. ミヤコ ホテル ロサンゼルス / Miyako Hotel Los Angeles</h3>
        <table><tbody>
          <tr><th>日本語名</th><td>ミヤコ ホテル ロサンゼルス</td></tr>
          <tr><th>滞在先名称</th><td>Miyako Hotel Los Angeles</td></tr>
          <tr><th>滞在先 州</th><td>Californiaを選択 ※未選択でも可</td></tr>
          <tr><th>滞在先 都市名</th><td>Los Angeles ※未記入でも可</td></tr>
          <tr><th>滞在先 通り名 丁番地(ホームアドレスライン1)</th><td>328 E 1st St ※未記入でも可</td></tr>
          <tr><th>滞在先 建物名(ホームアドレスライン2)</th><td>未記入</td></tr>
          <tr><th>滞在先 部屋番号</th><td>未記入</td></tr>
          <tr><th>滞在先 電話番号</th><td>213-617-2000 ※未記入でも可</td></tr>
        </tbody></table>
      </section>

      <section id="sec-11" class="fade-up">
        <h2>ハワイ(ホノルル)に滞在する場合</h2>

        <h3>1. ザ ロイヤル・ハワイアン / The Royal Hawaiian</h3>
        <table><tbody>
          <tr><th>日本語名</th><td>ザ ロイヤル・ハワイアン</td></tr>
          <tr><th>滞在先名称</th><td>The Royal Hawaiian, a Luxury Collection Resort</td></tr>
          <tr><th>滞在先 州</th><td>Hawaiiを選択 ※未選択でも可</td></tr>
          <tr><th>滞在先 都市名</th><td>Honolulu ※未記入でも可</td></tr>
          <tr><th>滞在先 通り名 丁番地(ホームアドレスライン1)</th><td>2259 Kalakaua Ave ※未記入でも可</td></tr>
          <tr><th>滞在先 建物名(ホームアドレスライン2)</th><td>未記入</td></tr>
          <tr><th>滞在先 部屋番号</th><td>未記入</td></tr>
          <tr><th>滞在先 電話番号</th><td>808-923-7311 ※未記入でも可</td></tr>
        </tbody></table>

        <h3>2. ヒルトン・ハワイアン・ビレッジ / Hilton Hawaiian Village</h3>
        <table><tbody>
          <tr><th>日本語名</th><td>ヒルトン・ハワイアン・ビレッジ</td></tr>
          <tr><th>滞在先名称</th><td>Hilton Hawaiian Village Waikiki Beach Resort</td></tr>
          <tr><th>滞在先 州</th><td>Hawaiiを選択 ※未選択でも可</td></tr>
          <tr><th>滞在先 都市名</th><td>Honolulu ※未記入でも可</td></tr>
          <tr><th>滞在先 通り名 丁番地(ホームアドレスライン1)</th><td>2005 Kalia Rd ※未記入でも可</td></tr>
          <tr><th>滞在先 建物名(ホームアドレスライン2)</th><td>未記入</td></tr>
          <tr><th>滞在先 部屋番号</th><td>未記入</td></tr>
          <tr><th>滞在先 電話番号</th><td>808-949-4321 ※未記入でも可</td></tr>
        </tbody></table>

        <h3>3. ハレクラニ / Halekulani</h3>
        <table><tbody>
          <tr><th>日本語名</th><td>ハレクラニ</td></tr>
          <tr><th>滞在先名称</th><td>Halekulani</td></tr>
          <tr><th>滞在先 州</th><td>Hawaiiを選択 ※未選択でも可</td></tr>
          <tr><th>滞在先 都市名</th><td>Honolulu ※未記入でも可</td></tr>
          <tr><th>滞在先 通り名 丁番地(ホームアドレスライン1)</th><td>2199 Kalia Rd ※未記入でも可</td></tr>
          <tr><th>滞在先 建物名(ホームアドレスライン2)</th><td>未記入</td></tr>
          <tr><th>滞在先 部屋番号</th><td>未記入</td></tr>
          <tr><th>滞在先 電話番号</th><td>808-923-2311 ※未記入でも可</td></tr>
        </tbody></table>

        <h3>4. シェラトン・ワイキキ・ホテル / Sheraton Waikiki</h3>
        <table><tbody>
          <tr><th>日本語名</th><td>シェラトン・ワイキキ・ホテル</td></tr>
          <tr><th>滞在先名称</th><td>Sheraton Waikiki Beach Resort</td></tr>
          <tr><th>滞在先 州</th><td>Hawaiiを選択 ※未選択でも可</td></tr>
          <tr><th>滞在先 都市名</th><td>Honolulu ※未記入でも可</td></tr>
          <tr><th>滞在先 通り名 丁番地(ホームアドレスライン1)</th><td>2255 Kalakaua Ave ※未記入でも可</td></tr>
          <tr><th>滞在先 建物名(ホームアドレスライン2)</th><td>未記入</td></tr>
          <tr><th>滞在先 部屋番号</th><td>未記入</td></tr>
          <tr><th>滞在先 電話番号</th><td>808-922-4422 ※未記入でも可</td></tr>
        </tbody></table>

        <h3>5. モアナ サーフライダー ウェスティン リゾート＆スパ / Moana Surfrider, A Westin Resort &amp; Spa</h3>
        <table><tbody>
          <tr><th>日本語名</th><td>モアナ サーフライダー ウェスティン リゾート＆スパ</td></tr>
          <tr><th>滞在先名称</th><td>Moana Surfrider, A Westin Resort &amp; Spa</td></tr>
          <tr><th>滞在先 州</th><td>Hawaiiを選択 ※未選択でも可</td></tr>
          <tr><th>滞在先 都市名</th><td>Honolulu ※未記入でも可</td></tr>
          <tr><th>滞在先 通り名 丁番地(ホームアドレスライン1)</th><td>2365 Kalakaua Ave ※未記入でも可</td></tr>
          <tr><th>滞在先 建物名(ホームアドレスライン2)</th><td>未記入</td></tr>
          <tr><th>滞在先 部屋番号</th><td>未記入</td></tr>
          <tr><th>滞在先 電話番号</th><td>808-922-3111 ※未記入でも可</td></tr>
        </tbody></table>
      </section>

      <section id="sec-12" class="fade-up">
        <h2>ハワイ(ホノルル以外)に滞在する場合</h2>

        <h3>1. フォーシーズンズ・リゾート・オアフ・アット・コオリナ / Four Seasons Resort Oahu at Ko Olina</h3>
        <table><tbody>
          <tr><th>日本語名</th><td>フォーシーズンズ・リゾート・オアフ・アット・コオリナ</td></tr>
          <tr><th>滞在先名称</th><td>Four Seasons Resort Oahu at Ko Olina</td></tr>
          <tr><th>滞在先 州</th><td>Hawaiiを選択 ※未選択でも可</td></tr>
          <tr><th>滞在先 都市名</th><td>Kapolei ※未記入でも可</td></tr>
          <tr><th>滞在先 通り名 丁番地(ホームアドレスライン1)</th><td>92-1001 Olani St ※未記入でも可</td></tr>
          <tr><th>滞在先 建物名(ホームアドレスライン2)</th><td>未記入</td></tr>
          <tr><th>滞在先 部屋番号</th><td>未記入</td></tr>
          <tr><th>滞在先 電話番号</th><td>808-679-0079 ※未記入でも可</td></tr>
        </tbody></table>

        <h3>2. タートル・ベイ・リゾート / Turtle Bay Resort</h3>
        <table><tbody>
          <tr><th>日本語名</th><td>タートル・ベイ・リゾート</td></tr>
          <tr><th>滞在先名称</th><td>Turtle Bay Resort</td></tr>
          <tr><th>滞在先 州</th><td>Hawaiiを選択 ※未選択でも可</td></tr>
          <tr><th>滞在先 都市名</th><td>Kahuku ※未記入でも可</td></tr>
          <tr><th>滞在先 通り名 丁番地(ホームアドレスライン1)</th><td>57-091 Kamehameha Hwy ※未記入でも可</td></tr>
          <tr><th>滞在先 建物名(ホームアドレスライン2)</th><td>未記入</td></tr>
          <tr><th>滞在先 部屋番号</th><td>未記入</td></tr>
          <tr><th>滞在先 電話番号</th><td>808-293-6000 ※未記入でも可</td></tr>
        </tbody></table>

        <h3>3. アウラニ・ディズニー・リゾート＆スパ / Aulani, A Disney Resort &amp; Spa</h3>
        <table><tbody>
          <tr><th>日本語名</th><td>アウラニ・ディズニー・リゾート＆スパ</td></tr>
          <tr><th>滞在先名称</th><td>Aulani, A Disney Resort &amp; Spa</td></tr>
          <tr><th>滞在先 州</th><td>Hawaiiを選択 ※未選択でも可</td></tr>
          <tr><th>滞在先 都市名</th><td>Kapolei ※未記入でも可</td></tr>
          <tr><th>滞在先 通り名 丁番地(ホームアドレスライン1)</th><td>92-1185 Aliinui Dr ※未記入でも可</td></tr>
          <tr><th>滞在先 建物名(ホームアドレスライン2)</th><td>未記入</td></tr>
          <tr><th>滞在先 部屋番号</th><td>未記入</td></tr>
          <tr><th>滞在先 電話番号</th><td>808-674-6200 ※未記入でも可</td></tr>
        </tbody></table>
      </section>      </section>

    </article>
  </div>
</section>


<section class="cta-strip cta-strip--solid">
  <p class="cta-strip__eyebrow">Start your application</p>
  <h2>アメリカ渡航には<br class="sp-br">ESTAの申請が必要です。</h2>
  <p>申請完了まで最大3日ほどかかるため、<br class="sp-br">余裕をもってお手続きください。</p>
  <a href="/form/step1" class="cta-btn">ESTA申請をはじめる →</a>
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
