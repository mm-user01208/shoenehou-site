import type { Metadata } from 'next';
import { JsonLd, pageJsonLd, seoMetadata, faqPageSchema, articleJsonLd } from '@/lib/seo';

const PAGE_PATH = '/list-esta-application/esta-flow/';
const PAGE_TITLE = 'ESTA（エスタ）とは？申請方法を公式サイトの全画面・記入例付きで解説【2026年10月最新】 | US ESTA Apply Website';
const PAGE_DESCRIPTION = 'ESTA（エスタ）はビザなしで90日以内の観光・商用・乗り継ぎでアメリカへ渡航する際に必要な電子渡航認証です。制度・対象者・申請料$40.27・有効期限2年を解説し、公式サイト（esta.cbp.dhs.gov）の申請手順を実際の画面と全項目の記入例つきで案内。2026年10月時点。';

export const metadata: Metadata = seoMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const FAQ_ITEMS = [{q: 'ESTAの有効期限', a: 'ESTA(エスタ)の有効期限は2年間で、この期間内であれば複数回の渡米が可能です。ただし、申請時に登録したパスポートの有効期限が2年未満の場合は、ESTAもそのパスポートの有効期限と同日に失効しますのでご注意ください。事前にパスポートの有効期限を確認し、2年未満である場合は、更新後にESTAを申請することをおすすめします。 なお、アメリカへ入国する際に有効なESTAを所持している必要がありますが、出国時にESTAの有効期限が切れていても問題はありません。'}, {q: 'ESTA申請ステータスの確認方法', a: '当サイトでは、ESTA(エスタ)の申請状況を確認することができます。ただし、CBP(アメリカ合衆国税関・国境警備局)の公式サイトなど、当サイト以外でESTAを申請された場合は確認できません。また、ESTAの申請状況を確認する際は、「申請内容確認画面」にて、氏名・生年月日・33桁の申請IDの入力が必要です。申請IDは、ESTA申請完了後に当サイトから送信される「申請受付完了メール」に記載されています。なお、申請IDによる申請状況の確認は、ESTA申請完了日から90日間のみ可能です。90日を過ぎると、個人情報保護の観点から確認ができなくなるためご注意ください。'}, {q: 'アメリカ経由で第三国へ乗り継ぐ場合のESTA要否', a: 'ESTAは、乗り換えや乗り継ぎを目的としてアメリカへ渡航する場合にも申請が必要です。万が一、ESTAを取得せずに出発日を迎えた場合、飛行機への搭乗やアメリカへの入国を拒否されるためご注意ください。また、ESTAを管轄するCBP(アメリカ合衆国税関・国境警備局)では、渡航日の3日前までにESTAを取得することが推奨されています。そのため、アメリカへの渡航が決まり次第、早めに申請することをお勧めします。'}, {q: '幼児・未成年者のESTA申請要否', a: 'ESTAは、90日以内の観光・商用・乗り継ぎを目的としてアメリカへ渡航する、ビザ免除プログラム(VWP)参加国の市民を対象に申請が義務付けられています。そのため、未就学児(乳幼児を含む)や未成年者であっても、渡航前にESTAの申請が必要です。未成年者のESTA申請は、保護者が代理で手続きを行ってください。また、申請時には保護者の情報ではなく、お子様本人のパスポート情報の入力が必要となります。なお、未成年者が単独でアメリカへ渡航する場合には、保護者や親族の方が作成した「渡航同意書」の提示を求められることがありますので、あらかじめご準備いただくことをおすすめします。'}];

const PAGE_JSON_LD = [
  ...pageJsonLd({ path: PAGE_PATH, title: PAGE_TITLE, description: PAGE_DESCRIPTION }),
  faqPageSchema(PAGE_PATH, FAQ_ITEMS),
  articleJsonLd(PAGE_PATH, PAGE_TITLE, PAGE_DESCRIPTION),
];

const BODY_HTML = `<style>.article__title{white-space:normal!important;line-height:1.35}.shot{margin:18px auto 28px;max-width:640px}.shot img{width:100%;height:auto;border:1px solid var(--line);box-shadow:0 6px 22px rgba(20,32,70,.08)}.shot figcaption{margin-top:8px;font-size:13px;color:#555;line-height:1.7}.kv{width:100%;border-collapse:collapse;margin:14px 0 22px}.kv th,.kv td{border:1px solid var(--line);padding:10px 12px;text-align:left;vertical-align:top;font-size:14.5px;line-height:1.7}.kv th{background:#f4f5f8;width:32%;font-weight:700}.update-log{border:1px solid var(--line);background:#fafaf7;padding:16px 20px;margin:10px 0 24px}.update-log p{margin:4px 0;font-size:14px}.ex{display:block;margin-top:6px;padding:8px 12px;background:#f4f5f8;border-left:3px solid var(--gold);font-size:14px;line-height:1.7}.ex b{color:var(--navy)}.tscroll{overflow-x:auto;-webkit-overflow-scrolling:touch;margin:14px 0 22px}.tscroll table.quick{min-width:760px;margin:0;table-layout:fixed}.quick th,.quick td{font-size:13.5px;line-height:1.6;padding:9px 10px;word-break:break-word}.quick td a{white-space:nowrap}</style>
<section class="article-hero">
  <div class="article-hero__inner">
    <nav class="crumb" aria-label="パンくず">
      <a href="/">HOME</a><span>›</span>
      <a href="/list-esta-application">ESTA申請関連情報一覧</a><span>›</span>
      <em>ESTA（エスタ）とは？申請方法を公式サイトの全画面・記入例付きで解説</em>
    </nav>
    <p class="article__eyebrow">ESTA Complete Guide</p>
    <h1 class="article__title">ESTA（エスタ）とは？申請方法・料金・有効期限を公式サイトの全画面・記入例付きで解説【2026年10月最新】</h1>
    <p class="article__lede">ESTAは、アメリカを観光する際に必要な電子渡航認証です。日本国籍の方がアメリカへ渡航するには、オンラインでのESTA申請が必須で、「渡航認証許可」を取得することで最大90日間の滞在が認められます。渡航目的は短期間の観光・商用・乗り継ぎに限定され、ESTAを利用しての留学や就労などは認められていません。また、ESTAは年齢を問わず全ての渡航者に対して申請が義務付けられるため、家族やグループで渡米する場合は、忘れずに全員分の申請を行ってください。</p>
  </div>
</section>
<section class="article-main">
  <div class="article-main__inner">
    <aside class="toc"><p class="toc__head">目次</p><ol><li><a href="#sec-01">2026年10月時点の最新情報</a></li><li><a href="#sec-02">ESTA（エスタ）とは｜30秒でわかる要点</a></li><li><a href="#sec-03">申請できる人（対象者・要件の要約）</a></li><li><a href="#sec-04">ESTAとビザの違い</a></li><li><a href="#sec-05">申請前に用意するもの</a></li><li><a href="#sec-06">公式サイト（esta.cbp.dhs.gov）での申請手順【全画面】</a></li><li><a href="#sec-07">公式アプリ（ESTA Mobile App）で申請する場合</a></li><li><a href="#sec-08">料金と支払い</a></li><li><a href="#sec-09">有効期限と申請タイミング</a></li><li><a href="#sec-10">申請後の流れ（承認時間・ステータス確認・保留／拒否）</a></li><li><a href="#sec-11">全入力項目の記入例 早見表</a></li><li><a href="#sec-12">申請時の注意点（公式と代行の違い・偽サイト）</a></li><li><a href="#sec-13">よくある質問</a></li><li><a href="#sec-14">当サイトの申請代行を利用する場合</a></li></ol></aside>
    <article class="article-body">
      <section id="sec-01" class="fade-up"><h2>2026年10月時点の最新情報</h2>
        <div class="update-log">
          <p>・申請料は <strong>$40.27</strong>（米国国土安全保障省申請料）。公式サイトの「The Travel Promotion Act of 2009」の画面に、One Big Beautiful Bill Act (PL 119-21) により $40.27 に改定された旨と内訳（VWP申請者1人あたり$17.00＋処理手数料$10.27＋Treasury General Fund Fee $13.00、却下時は$10.27のみ）が記載されています（2026年10月5日 公式サイトで確認）。</p>
          <p>・公式アプリ（ESTA Mobile App）での申請に対応しています（<a href="/list-esta-application/application/">アプリでの申請方法</a>）。</p>
          <p>・本ページの公式サイト画面は 2026年10月5日 に撮影したものです（ダミー情報で入力。支払いは行っていません）。</p>
        </div>
      </section>
      <section id="sec-02" class="fade-up"><h2>ESTA（エスタ）とは｜30秒でわかる要点</h2>
        <p>日本国籍者がアメリカへ渡航する際には、事前に電子渡航認証ESTA(エスタ)の取得が求められます。これはアメリカ政府が定めるビザ免除プログラム(VWP)に基づくもので、ESTA申請により「渡航認証許可」を取得した場合に限り、ビザなしでの渡米が可能です。ESTAは、日本を含むVWP参加国の市民が90日以内の短期観光、商用、乗り継ぎを目的として渡米する場合に限り利用できます。留学、就労、永住などを希望する場合はESTAの対象外となるため、渡米には在日米国大使館または総領事館にて、渡航目的に応じたビザの取得をご検討ください。なお、VWP参加国の市民であっても、過去にアメリカへの入国を拒否された方や重大な犯罪歴がある方は、ESTAの利用が認められない場合があります。</p>
        
        <table class="kv"><tbody>
<tr><th>正式名称</th><td>電子渡航認証システム（Electronic System for Travel Authorization）</td></tr>
<tr><th>対象</th><td>日本を含むビザ免除プログラム（VWP）参加国の市民</td></tr>
<tr><th>渡航目的</th><td>短期間の観光・商用・乗り継ぎ（留学・就労・永住は対象外）</td></tr>
<tr><th>滞在日数</th><td>最大90日間</td></tr>
<tr><th>申請料</th><td>$40.27（米国国土安全保障省申請料）</td></tr>
<tr><th>有効期限</th><td>2年間（パスポートの有効期限が先に来る場合はその日まで）</td></tr>
<tr><th>審査時間</th><td>通常は数時間以内、最大72時間</td></tr>
<tr><th>申請先</th><td><a href="https://esta.cbp.dhs.gov/" target="_blank" rel="noopener noreferrer">esta.cbp.dhs.gov</a>（CBP公式サイト）</td></tr>
</tbody></table>
      </section>
      <section id="sec-03" class="fade-up"><h2>申請できる人（対象者・要件の要約）</h2>
        <p>ESTAを申請できるのは、日本を含むビザ免除プログラム（VWP）参加国の市民で、90日以内の観光・商用・乗り継ぎを目的としてアメリカへ渡航する方です。ICチップ付きの有効なパスポートが必要で、留学・就労・永住を目的とする渡航はESTAの対象外（ビザが必要）です。パスポートの有効期限の条件は <a href="/list-esta-guide/passport/">パスポートの条件</a>、家族・グループでまとめて申請する場合は <a href="/list-esta-guide/group-family/">家族・グループでの申請</a> をご覧ください。また、VWP参加国の市民であっても、過去にアメリカへの入国を拒否された方や重大な犯罪歴がある方、指定国への渡航歴がある方はESTAの利用が認められない場合があります。</p>
        <p>VWP参加国一覧と申請要件の詳細、対象外になるケースは <a href="/list-esta-application/esta/">ESTA（エスタ）の対象者・申請要件｜VWP参加国一覧と対象外になるケース</a> をご覧ください。</p>
      </section>
      <section id="sec-04" class="fade-up"><h2>ESTAとビザの違い</h2>
        <table class="kv"><thead><tr><th>　</th><th>ESTA</th><th>ビザ</th></tr></thead><tbody>
        <tr><th>取得先</th><td>CBP公式サイト（オンライン）</td><td>在日米国大使館・総領事館</td></tr>
        <tr><th>費用</th><td>$40.27</td><td>ビザの種類により異なる</td></tr>
        <tr><th>滞在</th><td>最大90日</td><td>ビザの種類による（90日超も可）</td></tr>
        <tr><th>目的</th><td>観光・商用・乗り継ぎ</td><td>留学・就労・永住など</td></tr>
        <tr><th>審査</th><td>通常数時間〜最大72時間</td><td>面接が必要。申請から発給まで1か月以上かかる場合あり</td></tr>
        </tbody></table>
        <p>ESTA(エスタ)とは、90日以内の短期間の観光、商用、または乗り継ぎを目的としてアメリカへ渡航する際に必要となる電子渡航認証制度です。これはビザ免除プログラム(VWP)の一環として運用されており、日本を含むVWP参加国の市民は事前にESTAを取得することで、ビザなしでの渡米が認められます。なお、ESTAの審査には一定の時間を要するため、出発日の3日前までに申請することが推奨されています。一方、留学・就労・永住、または90日間を超える滞在などを目的としてアメリカへ渡航する場合にはビザの取得が必要です。ビザの種類によって申請条件や滞在可能期間が異なりますので、申請を行う際は在日米国大使館または総領事館の公式ウェブサイトで詳細をご確認ください。</p>
      </section>
      <section id="sec-05" class="fade-up"><h2>申請前に用意するもの</h2>
        <p>ESTA申請はオンラインで完結しますが、事前に必要な情報や書類を準備しておくことで、入力が正確かつスムーズに行えます。特に、パスポート情報の入力ミスは、ESTAが無効となる原因になるため十分な注意が必要です。以下では、ESTA申請時に必要となる情報や書類について詳しく解説します。</p>

        <h3>パスポート(有効期限内・ICチップ付き)</h3>
        <p>ESTA申請時には、ICチップ付きで有効期限内のパスポートが必須です。 申請フォームには、パスポート番号や発行国、発行日、有効期限、氏名、生年月日といったパスポート情報を正確に入力する必要があります。これらの情報は、パスポートに記載されている内容と完全に一致していることが重要なため、申請時は必ず手元にパスポートを準備しておきましょう。</p>
        <p>なお、ESTAの有効期限が残っている場合でも、パスポートを更新・再発行した場合はESTAを再申請する必要があります。パスポート番号が変更されると、ESTAは自動的に失効するため注意が必要です。また、未成年者のESTA申請を保護者が行う場合でも、申請には本人(未成年者)のパスポート情報を入力してください。</p>

        <h3>クレジットカード(またはデビッドカード)</h3>
        <p>ESTA申請には手数料の支払いが必要です。申請料金は40.27ドルで、クレジットカードまたはデビットカードによる決済が可能です。対応しているカードブランドは、Visa、Master Card、JCB、American Express、Diners Clubとなります。</p>
        <p>料金の支払いは、申請プロセスの最終段階で行われます。カード名義は申請者本人である必要はなく、家族や友人名義のカードも使用可能です。ただし、決済が完了しない限り申請は正式に受理されないため、カードの有効期限や利用限度額を事前に確認しておくことをおすすめします。</p>

        <h3>有効なメールアドレス</h3>
        <p>ESTA申請時には、有効なメールアドレスの登録が必要です。申請番号や審査結果、承認通知などの重要な情報は、すべて登録したメールアドレス宛に送信されます。また、申請状況の確認やESTAの再申請時にも必要となるため、登録メールアドレスは大切に保管しておきましょう。</p>
        <p>メールアドレスは、日常的に使用している信頼性の高いアドレスの利用をおすすめします。迷惑メール対策を行っている場合は、アメリカ政府のドメインからのメールを受信できるように設定しておくと安心です。なお、フリーメールアドレスも使用可能ですが、メールが迷惑メールフォルダに振り分けられることがあります。メールが届かない場合は、迷惑メールフォルダも忘れずに確認してください。</p>
      </section>
      <section id="sec-06" class="fade-up"><h2>公式サイト（esta.cbp.dhs.gov）での申請手順【全画面】</h2>
        <p>ESTAは、申請フォームの案内に従って入力を進める必要があります。申請時は入力間違いがないよう、正確に情報を入力することが重要です。以下では、ESTA申請の手順について詳しく解説します。</p>

        <h3>1.　公式サイトへアクセス（日本語表示→新規申請→個人）</h3><figure class="shot"><img src="/img/esta-flow/002_ja_top.jpg" alt="ESTA公式サイト トップページ（日本語表示）" loading="lazy"><figcaption>公式サイトのトップページ。右上の「言語の変換」で日本語を選び、「新規に申請を作成する」から進みます。</figcaption></figure><figure class="shot"><img src="/img/esta-flow/003_ja_new_application_menu.jpg" alt="ESTA公式サイト 新規に申請を作成する→個人による申請" loading="lazy"><figcaption>「新規に申請を作成する」を押すと「個人による申請」「グループによる申請」が表示されます。1人で申請する場合は「個人による申請」を選びます。</figcaption></figure><figure class="shot"><img src="/img/esta-flow/004_security_notice.jpg" alt="ESTA公式サイト セキュリティに関する通告" loading="lazy"><figcaption>最初に「セキュリティに関する通告」が表示されるので「確認して続行」を押します。</figcaption></figure><figure class="shot"><img src="/img/esta-flow/005_disclaimer.jpg" alt="ESTA公式サイト 免責事項" loading="lazy"><figcaption>免責事項を読み、「はい、私は上記の説明を読み、内容を理解し、これらの条件に合意します。」を選択します。</figcaption></figure><figure class="shot"><img src="/img/esta-flow/006_travel_promotion_act.jpg" alt="ESTA公式サイト The Travel Promotion Act of 2009（申請料の説明）" loading="lazy"><figcaption>続けて「The Travel Promotion Act of 2009」を開き、同じく「はい」を選んで「次へ」。この画面に申請料$40.27の内訳が記載されています。</figcaption></figure>
        <p>米国国土安全保障省(DHS)が運営する公式ウェブサイトにアクセスし、画面右上の言語選択欄から「日本語」を選択してください。ただし、パスポート情報や渡航情報などの入力は英語(ローマ字)で行う必要があるため、パスポートを手元に用意してから進めましょう。</p>
        <p>TOPページの「新規に申請を作成する」をクリックし、「個人による申請」を選択します。その後、免責事項を確認し内容に問題がなければ同意して、次のステップへ進んでください。</p>

        <h3>2.　パスポート情報（手入力／画像アップロード）＋4桁確認コード・申請番号メール</h3><figure class="shot"><img src="/img/esta-flow/007_passport_upload.jpg" alt="ESTA公式サイト 旅券をアップロード" loading="lazy"><figcaption>申請者情報の画面を開くと「旅券をアップロード」の案内が出ます。パスポートの顔写真ページを撮影してアップロードすると、氏名・パスポート番号などが自動入力されます（手入力も可能）。</figcaption></figure><figure class="shot"><img src="/img/esta-flow/008_passport_upload_options.jpg" alt="ESTA公式サイト アップロード方法の選択（カメラ／ファイル）" loading="lazy"><figcaption>「カメラ」か「ファイル」を選んで画像を取り込みます。</figcaption></figure><figure class="shot"><img src="/img/esta-flow/009_passport_upload_confirm.jpg" alt="ESTA公式サイト パスポート読み取り結果の確認" loading="lazy"><figcaption>読み取られた内容が表示されるので、パスポートと照合して「申請への追加」を押します。</figcaption></figure><figure class="shot"><img src="/img/esta-flow/010b_face_photo_upload_full_modal.jpg" alt="ESTA公式サイト 応募者の自撮り写真をアップロード" loading="lazy"><figcaption>次に顔写真（自撮り）をアップロードします。無地の背景・正面・中立な表情など、画面の条件を満たす写真を使います。</figcaption></figure><figure class="shot"><img src="/img/esta-flow/012_face_photo_confirm.jpg" alt="ESTA公式サイト 顔写真の確認" loading="lazy"><figcaption>アップロードした顔写真を確認し、必要なら回転して「写真を再撮影する」か、そのまま進みます。</figcaption></figure><figure class="shot"><img src="/img/esta-flow/014_applicant_info_verify_popup_surname.jpg" alt="ESTA公式サイト 入力された情報を確認して下さい（姓の再入力）" loading="lazy"><figcaption>「次へ」を押すと、姓・名・パスポート番号・生年月日を順に再入力して確認するポップアップが出ます。</figcaption></figure><figure class="shot"><img src="/img/esta-flow/015_email_verify_popup.jpg" alt="ESTA公式サイト 電子メールの確認" loading="lazy"><figcaption>登録したメールアドレスに4桁コードを送るための確認画面。「コードを送る」を押します。</figcaption></figure><figure class="shot"><img src="/img/esta-flow/016b_cbp_email_code.jpg" alt="ESTA公式サイト CBPから届く4桁コードのメール" loading="lazy"><figcaption>No-reply-esta1@cbp.dhs.gov から「Validate Email Address with 4 Digit Code」という件名でコードが届きます（有効期限25分）。</figcaption></figure><figure class="shot"><img src="/img/esta-flow/016_email_code_entry.jpg" alt="ESTA公式サイト コードを入力する" loading="lazy"><figcaption>届いた4桁コードを入力して「コードを送信する」を押すと申請者情報の登録が完了します。</figcaption></figure>
        <p>次に、申請者情報を入力します。ここでは、パスポートに記載されている情報をそのまま入力することが重要です。情報はすべて英語(ローマ字)で入力する必要があるため、ご注意ください。入力項目には、姓名、性別、生年月日、国籍、パスポート番号、発行国、パスポート発行日・有効期限などが含まれます。</p>
        <p>入力方法は手入力のほかに、パスポートの顔写真ページをアップロードして自動読み取りを行う方法もあります。PC、スマートフォン、またはタブレットで該当ページを撮影し、画像データをアップロードしてください。アップロード完了後、自動的にパスポート情報が反映されます。ただし、自動入力された内容が必ずしも正確とは限らないため、読み取り後は必ずパスポートと照合し、必要に応じて修正しましょう。</p>
        <p>続いて、申請者の現住所、電話番号、有効なメールアドレスなど個人情報を入力します。出生した市区町村名が空欄の場合はご自身で入力してください。不明な場合は「UNKNOWN」と記入しましょう。申請情報の入力が完了したら、市民権や国籍に関する質問に「はい」または「いいえ」で回答してください。</p>
        <p>最後に、入力内容とメールアドレスに間違いがないかを再確認し、登録済みのメールアドレスに届いた4桁の「確認コード」を入力します。確認コード入力後に以下のメールが届きますので、申請番号を確認して必ず保存しておきましょう。</p>
        <div class="quote-box">
          <p class="quote-box__en">Thank you for applying for ESTA. Your application number is 〇〇〇〇××××△△△△. You will need this number to retrieve your application. You can check the status of your ESTA at https://esta.cbp.dhs.gov.</p>
          <p class="quote-box__jp">訳：ESTAを申請していただきありがとうございます。あなたの申請番号は〇〇〇〇××××△△△△となります。この番号はあなたの申請を検索するために必要です。申請のステータスは https://esta.cbp.dhs.govをクリックしてご確認ください。</p>
        </div>

        <p class="ex"><b>記入例の詳細：</b><a href="/list-esta-guide/upload/">パスポート・顔写真のアップロード</a>／<a href="/list-esta-application/place-of-birth/">出生地・住所の書き方</a></p><h3>3.　個人情報・住所・両親の氏名・勤務先</h3><figure class="shot"><img src="/img/esta-flow/018_personal_info_blank.jpg" alt="ESTA公式サイト 個人情報の入力" loading="lazy"><figcaption>別名の有無・他国の身分証の有無・自宅住所と電話番号・SNS（任意）・GE/NEXUS/SENTRI・両親の氏名・勤務先情報を入力します。</figcaption></figure><figure class="shot"><img src="/img/esta-flow/019_personal_info_all_yes.jpg" alt="ESTA公式サイト 個人情報（「はい」を選んだ場合に表示される追加欄）" loading="lazy"><figcaption>各質問で「はい」を選ぶと追加の入力欄が開きます。該当しない場合は「いいえ」で進みます。</figcaption></figure>
        <p>続いて、申請者の個人情報(住所、電話番号、両親の氏名、勤務先情報など)を入力します。住所は、都道府県、市区町村、番地を入力する必要があります。ただし、日本の住所表記とは順序が逆になるため注意が必要です。アパート名やマンション名は必須項目ではありませんが、入力する場合は正確に記載してください。</p>
        <p>電話番号は、プルダウンから「自宅」または「携帯電話」を選択し、その後にハイフンを除いた数字のみを入力します。ソーシャルメディアに関する項目は任意入力ですので、空白のままで問題ありません。</p>
        <p>次に、両親の氏名をローマ字で入力してください。続いて、勤務先情報に関する「勤務経験がありますか？」の質問に対して、「はい」または「いいえ」のいずれかを選択します。「はい」を選択した方は、会社名、会社住所、連絡先を入力することで、勤務先情報の登録は完了です。</p>

        <p class="ex"><b>記入例の詳細：</b><a href="/list-esta-guide/address-guide/">住所の英語表記ガイド</a>／<a href="/list-esta-application/place-of-birth/">出生地・住所の書き方</a></p><h3>4.　渡航情報・米国内の連絡先・滞在先</h3><figure class="shot"><img src="/img/esta-flow/020_travel_info_transit_yes.jpg" alt="ESTA公式サイト 渡航情報（乗り継ぎ＝はい）" loading="lazy"><figcaption>「米国への渡航目的は、他国へ乗り継ぐためですか？」で「はい」を選ぶと緊急連絡先のみの入力になります。</figcaption></figure><figure class="shot"><img src="/img/esta-flow/021_travel_info_transit_no.jpg" alt="ESTA公式サイト 渡航情報（乗り継ぎ＝いいえ）" loading="lazy"><figcaption>「いいえ」を選ぶと、米国内の連絡先・米国滞在中の住所・緊急連絡先の欄が表示されます。</figcaption></figure>
        <p>ここでは、アメリカへの渡航に関する具体的な情報(米国内での滞在先や連絡先など)を登録します。まず、渡航目的に関する質問「米国への渡航目的は、他国へ乗り継ぐためですか？」に回答し、「いいえ」を選択した方は米国内の連絡先欄に宿泊先情報を入力してください。氏名の項目にはホテル名、都道府県の項目は都市名または州名を入力します。滞在先が未定であってもESTAの申請は可能です、その場合は「UNKNOWN」と記載してください。</p>
        <p>続いて、「米国滞在中の住所」は、米国内の連絡先と所在地が同一かどうかを確認するものです。同一の場合は、「はい」を選択してください。なお、渡航情報の欄には自動で米国内の連絡先の内容が入力されるため、事前にホテルの住所などを確認しておくと安心です。</p>

        <p class="ex"><b>記入例の詳細：</b><a href="/list-esta-application/us-contact-details/">米国内の連絡先・滞在先の記入方法</a></p><h3>5.　適格性に関する9項目</h3><figure class="shot"><img src="/img/esta-flow/022_eligibility_questions.jpg" alt="ESTA公式サイト 適格性についての質問（9項目）" loading="lazy"><figcaption>9項目の質問に「はい」「いいえ」で回答し、権利の放棄と申請内容に関する証明にチェックを入れて「次へ」。</figcaption></figure>
        <p>ESTA申請における適格性に関する質問は、特に重要な項目です。質問内容は、過去の犯罪歴、ビザの却下や入国拒否の経験、感染症の有無など、全部で9項目あります。いずれか1つでも「はい」に該当する場合、ESTAによる渡航認証が許可されない可能性があるため注意が必要です。また、虚偽の申告を行った場合には、ESTAが無効になるだけでなく、今後のアメリカ入国に支障をきたす可能性もあるため正確に回答しましょう。</p>
        <p>すべての回答に不備がなければ、権利放棄に関する2つの確認項目にチェックを入れ、次に進んでください。なお、2つ目の項目については、自身の申請のみ行う場合はチェック不要です。</p>

        <h3>6.　申請料$40.27の支払い</h3><figure class="shot"><img src="/img/esta-flow/023_review_application.jpg" alt="ESTA公式サイト 申請内容の確認" loading="lazy"><figcaption>申請者情報・個人情報・渡航情報・適格性の各セクションを開いて確認し、「確認して続行」を押します。</figcaption></figure><figure class="shot"><img src="/img/esta-flow/024_payment.jpg" alt="ESTA公式サイト 今すぐ支払い手続きを行い、申請を完了する" loading="lazy"><figcaption>申請番号が表示され、支払い内容の概要に申請費用$40.27が出ます。免責事項にチェックを入れて「今すぐ支払う」へ。支払い期限（申請日を含め1週間）もここに表示されます。</figcaption></figure>
        <p>すべての情報を入力し、申請内容を確認した後は決済画面へ進みます。申請費用は40.27ドルです。支払い方法は、クレジットカード、デビッドカード、またはオンライン決済サービス"Paypal(ペイパル)"から選択できます。なお、申請者本人のカードである必要はなく、家族や友人のカードを使用しても問題ありません。決済に必要な情報を入力後、「続行」をクリックし、「支払い手続きが実行されました」と表示されたら決済は完了です。</p>
        <p>申請費用の支払いには、申請日を含めて1週間以内の猶予期間があります。支払いを後回しにする場合は、再度公式ウェブサイトにアクセスして決済画面に進み、期日までに支払いを完了させてください。期日を過ぎると申請内容は破棄されるため、できるだけ早めの決済をおすすめします。</p>
        <p>決済が完了すると、申請番号が表示されます。この番号は、後に申請状況を確認する際などに必要となるため、メモを取るかスクリーンショットで保存しておきましょう。</p>

        <p class="ex"><b>詳細：</b><a href="/list-esta-application/fee/">ESTAの申請料金</a>／<a href="/list-esta-guide/cost/">公式サイトの費用と代行サイトの違い</a></p><h3>7.　審査結果を待つ（最大72時間）</h3><figure class="shot"><img src="/img/esta-flow/025_status_check.jpg" alt="ESTA公式サイト ESTAのステータス確認（個人申請の検索）" loading="lazy"><figcaption>審査結果は「ESTAのステータス確認」→「個人による申請のステータス確認」から、パスポート番号・生年月日と申請番号（または国籍・発行日・有効期限）で確認できます。</figcaption></figure>
        <p>申請完了後、CBP(米国税関・国境警備局)によって審査が行われます。ESTAの審査には一定の時間を要するため、最長で72時間を目安にお待ちください。審査結果には、以下の3つのステータスがあります。</p>
        <ul>
          <li>認証許可</li>
          <li>保留中</li>
          <li>渡航認証拒否</li>
        </ul>
        <p>「審査保留中」と表示された場合は、現在審査が進行中であることを意味しますので、時間をおいて再度ご確認ください。申請状況に変化があった際には、次のようなメールが届きます。公式ウェブサイトにアクセスしステータスを確認しましょう。審査状況に応じてステータスは更新されますが、申請内容に不備があった際は再申請が必要となる場合があります。</p>
        <div class="quote-box">
          <p class="quote-box__en">There has been an update to your ESTA Travel Authorization Status submitted on March 06, 2025.<br>Please visit https://esta.cbp.dhs.gov/esta to check your application.</p>
          <p class="quote-box__jp">訳：2025年3月6日に提出されたESTAの渡航認証ステータスに更新がありました。<br>https://esta.cbp.dhs.gov/esta にてご確認ください。</p>
        </div><p class="ex"><b>詳細：</b><a href="/list-esta-application/status-check/">ESTA申請状況の確認方法</a>／<a href="/list-esta-guide/denied/">渡航認証拒否となった場合</a></p>
      </section>
      <section id="sec-07" class="fade-up"><h2>公式アプリ（ESTA Mobile App）で申請する場合</h2>
        <p>CBPが提供する公式アプリ「ESTA Mobile」からも申請できます。スマートフォンのカメラでパスポートを読み取り、顔写真を撮影して申請者情報を登録する流れで、入力内容や申請料はウェブサイトからの申請と同じです。アプリの入手方法と画面ごとの操作は <a href="/list-esta-application/application/">アプリを使ったESTA申請方法</a> で解説しています。</p>
      </section>
      <section id="sec-08" class="fade-up"><h2>料金と支払い</h2>
        
        <p>すべての情報を入力し、申請内容を確認した後は決済画面へ進みます。申請費用は40.27ドルです。支払い方法は、クレジットカード、デビッドカード、またはオンライン決済サービス"Paypal(ペイパル)"から選択できます。なお、申請者本人のカードである必要はなく、家族や友人のカードを使用しても問題ありません。決済に必要な情報を入力後、「続行」をクリックし、「支払い手続きが実行されました」と表示されたら決済は完了です。</p>
        <p>申請費用の支払いには、申請日を含めて1週間以内の猶予期間があります。支払いを後回しにする場合は、再度公式ウェブサイトにアクセスして決済画面に進み、期日までに支払いを完了させてください。期日を過ぎると申請内容は破棄されるため、できるだけ早めの決済をおすすめします。</p>
        <p>決済が完了すると、申請番号が表示されます。この番号は、後に申請状況を確認する際などに必要となるため、メモを取るかスクリーンショットで保存しておきましょう。</p>

        
        <p>申請料は2025年9月30日に$21から$40.27へ改定されました（公式サイト「The Travel Promotion Act of 2009」の記載を2026年10月5日に確認）。料金の詳細は <a href="/list-esta-application/fee/">ESTAの申請料金</a>、公式サイトと代行サイトの費用の違いは <a href="/list-esta-guide/cost/">ESTA申請の料金はいくら？</a> をご覧ください。</p>
      </section>
      <section id="sec-09" class="fade-up"><h2>有効期限と申請タイミング</h2>
        <p>ESTAの審査には最大3日間かかる場合があります。そのため、DHS(アメリカ国土安全保障省)では、出発日の72時間前までにESTAを申請し、「渡航認証許可」を取得することが推奨されています。申請後は、CBP(アメリカ合衆国税関・国境警備局)による審査が行われ、審査結果が確認され次第、当サイトより「渡航認証可否メール」が送信されます。審査結果は、「渡航認証許可」または「渡航認証拒否」のいずれかとなります。通知内容によって対応が異なりますので、必ず「渡航認証可否メール」をご確認ください。渡航認証が承認された場合は「渡航認証許可」の通知が届きますが、申請内容に不備があった場合などには「渡航認証拒否」と通知されます。「渡航認証拒否」の通知を受けた場合、ESTAを利用した渡航は認められませんのでご注意ください。</p>
        <p>ESTAの有効期限は2年間で、この期間内であれば複数回の渡米が可能です。ただし、パスポートの有効期限が2年未満の場合、ESTAもパスポートの有効期限と同時に失効します。あらかじめパスポートの有効期限をご確認いただき、2年未満である場合は更新後にESTAを申請することをおすすめします。</p>
        <h3>申請のタイミング</h3>
        <p>ESTAは渡航直前でも申請可能ですが、審査には一定の時間がかかるため、余裕を持って手続きすると安心です。米国政府は、出発の72時間前までに申請することを強く推奨しています。多くの場合、申請後数時間以内に承認されますが、入力情報に不備があった場合や、追加審査が必要と判断された場合には、承認までに時間を要する可能性があります。また、ESTAが不許可となった場合は、代替手段としてビザの申請が必要となるため、時間的な余裕を持って準備することが重要です。なお、ESTA申請は滞在先や宿泊先が未定でも手続きを行うことができます。</p>

        <h3>有効期限</h3>
        <p>一度承認されたESTAの有効期限は、「2年間」または「パスポートの有効期限が切れるまで」のいずれか早い方となります。有効期限内でも、パスポートの期限が切れた時点でESTAも失効となるためご注意ください。パスポートの有効期限が近付いている場合は、渡航前に余裕を持って更新の手続きを行うことをおすすめします。</p>
        <p>なお、ESTAの有効期限内であれば、何度でもアメリカへの渡航が可能です。ただし、パスポートを更新した場合や、氏名、性別、国籍などの基本情報に変更があった場合は、新たにESTAを申請する必要があります。</p>
        <p>詳細は <a href="/list-esta-application/expiration-date/">ESTAの有効期限</a>・<a href="/list-esta-application/when-to-apply/">ESTAはいつまでに申請すべきか</a> をご覧ください。</p>
      </section>
      <section id="sec-10" class="fade-up"><h2>申請後の流れ（承認時間・ステータス確認・保留／拒否）</h2>
        <p>ESTA申請の審査結果は、申請時に登録したメールアドレスに届く通知を確認する方法が一般的です。ただし、メールが届かない場合やすぐに結果を確認したい場合は、ESTA公式ウェブサイトからも確認することができます。公式ウェブサイト上の「ESTAのステータス確認」をクリックし、「個人による申請のステータス確認」を選択してください。申請番号、パスポート番号、生年月日などを入力することで、現在の申請状況を確認できます。</p>
        <p>ESTA申請が承認された場合、画面上には「認証は承認されました」というメッセージとともに、ESTA番号、有効期限、パスポート情報などが表示されます。なお、申請番号が不明な場合でも、国籍、パスポート発行日、有効期限を入力することで検索が可能です。ESTAの審査には最長72時間かかるため、申請日の翌日以降を目安に結果をご確認ください。</p>
        <h3>当サイトで申請した場合のステータス確認</h3>
        <p>ESTA(エスタ)申請後は、申請ステータスおよび審査結果を確認することができます。ただし、これは当サイトでESTAを申請された方に限られます。米国CBP(アメリカ合衆国税関・国境警備局)の公式サイトで申請された場合は、当サイトでの確認はできませんのでご注意ください。申請ステータスおよび審査結果を確認する際には、氏名・生年月日・申請IDの入力が必要です。申請IDは33桁の英数字で構成されており、「申請受付完了メール」に記載されています。このメールは、申請時に登録したメールアドレス宛に送信されますので、該当のメールフォルダをご確認ください。なお、申請IDは審査結果の確認に必要となるため、「申請受付完了メール」を大切に保存しておきましょう。また、申請IDによるステータス確認は、申請日から90日間のみ有効です。</p>

        <h3>審査結果が通知されるまでの所要時間</h3>
        <p>ESTA申請情報の入力が完了すると、米国CBP(アメリカ合衆国税関・国境警備局)による審査が開始されます。審査中は、申請ステータスが「渡航認証保留」と表示され、最大72時間以内に審査結果が通知されます。そのため、申請後すぐに渡航認証が承認されるとは限りませんのでご注意ください。また、申請日にステータスが変更されない場合は、翌日以降にあらためて確認しましょう。</p>
        <p>審査結果は「渡航認証許可」または「渡航認証拒否」のいずれかとなります。申請内容に不備がなければ「渡航認証許可」と通知され、ESTA申請は完了です。その場合は、ESTAの申請番号と有効期限を渡航日まで大切に保管しておきましょう。一方、「渡航認証拒否」と通知された場合は、ESTAの利用は認められません。在日米国大使館または総領事館にて、渡航目的に応じたアメリカのビザを取得してください。</p>
        <p>詳細は <a href="/list-esta-application/status-check/">ESTA申請状況の確認方法</a>・<a href="/list-esta-guide/denied/">渡航認証拒否となった場合</a> をご覧ください。</p>
      </section>
      <section id="sec-11" class="fade-up"><h2>全入力項目の記入例 早見表</h2>
        <p>ESTA(エスタ)申請フォームでは、住所をローマ字(大文字)で入力する必要があります。申請時にスペルミスがあると、入力不備とみなされる可能性がありますのでご注意ください。入力後は、スペルに誤りがないか必ず確認しましょう。</p>
        <p>以下では、住所の記入例について解説します。</p>
        <p>住所："東京都目黒区青葉台2-5-4　SBコート303号"の記入例</p>
        <table>
          <tbody>
            <tr><th>都道府県/東京都</th><td>TOKYO</td></tr>
            <tr><th>市区町村/目黒区青葉台</th><td>MEGURO-KU AOBADAI</td></tr>
            <tr><th>丁番地/2-5-4</th><td>2-5-4</td></tr>
            <tr><th>建物名/SBコート</th><td>SB KOUTO</td></tr>
            <tr><th>部屋番号/303号</th><td>303</td></tr>
          </tbody>
        </table>
        <div class="tscroll"><table class="kv quick"><colgroup><col style="width:22%"><col style="width:34%"><col style="width:30%"><col style="width:14%"></colgroup><thead><tr><th>項目</th><th>入力例（ローマ字）</th><th>注意</th><th>詳細</th></tr></thead><tbody>
<tr><th>姓／名</th><td>YAMADA ／ TARO</td><td>パスポートの表記どおり大文字で。FU・JI・SHA・CHAなど間違えやすい綴りに注意</td><td><a href="/list-esta-guide/upload/">詳細を見る</a></td></tr>
<tr><th>出生した市区町村名／出生国</th><td>TOKYO ／ JAPAN (JPN)</td><td>都市名はローマ字（大文字）。不明な場合は空欄可</td><td><a href="/list-esta-application/place-of-birth/">詳細を見る</a></td></tr>
<tr><th>自宅住所（東京都目黒区青葉台2-5-4 SBコート303号）</th><td>住所1: 2-5-4 AOBADAI／住所2: SB KOUTO 303／市区町村: MEGURO-KU／都道府県: TOKYO</td><td>日本の表記と順序が逆（番地→建物→市区町村→都道府県）</td><td><a href="/list-esta-guide/address-guide/">詳細を見る</a></td></tr>
<tr><th>自宅住所（北海道札幌市北区北8条西1丁目1-1 ABCハイツ101）</th><td>Address Line 1: 1-1 Nishi 1-Chome Kita 8-Jo／Address Line 2: #101 ABC Heights／City: Kita-ku, Sapporo-shi／State: Hokkaido</td><td>丁目・条はそのままローマ字で</td><td><a href="/list-esta-application/place-of-birth/">詳細を見る</a></td></tr>
<tr><th>電話番号</th><td>国番号 JAPAN (+81)／9012345678</td><td>ハイフンなし。先頭の0は国番号を選ぶ場合も入力して問題ありません（公式画面の指示に従う）</td><td>—</td></tr>
<tr><th>米国内の連絡先（ホテル）</th><td>氏名: The Plaza Hotel／住所1: 768 5th Ave／市区町村: New York／都道府県: New York／電話: 212-759-3000</td><td>未定の場合は「UNKNOWN」。都市名・電話は未記入でも可</td><td><a href="/list-esta-application/us-contact-details/">詳細を見る</a></td></tr>
<tr><th>勤務先</th><td>役職名: MANAGER／雇用主名: ABC CORPORATION／住所1: 1-1 SHIBAURA 1-CHOME／市区町村: MINATO-KU／都道府県: TOKYO</td><td>勤務経験がなければ「いいえ」</td><td><a href="/list-esta-guide/address-guide/">詳細を見る</a></td></tr>
<tr><th>両親の氏名</th><td>YAMADA ／ ICHIRO、YAMADA ／ HANAKO</td><td>不明な場合は「UNKNOWN」</td><td>—</td></tr>
</tbody></table></div>
<p>上記は当サイトの各解説ページに掲載している記入例をまとめたものです。実際の入力は、必ずパスポート・各書類の表記に合わせてください。</p>
      </section>
      <section id="sec-12" class="fade-up"><h2>申請時の注意点（公式と代行の違い・偽サイト）</h2>
        <p>公式サイト（esta.cbp.dhs.gov）で申請する場合の費用は$40.27で、入力はすべて英語（ローマ字）です。当サイトの申請代行は、申請手数料24,200円（税込・米国政府への申請料$40.27を含む）で、日本語のフォームから申請できます。公式サイトに似せた偽サイトも存在するため、公式サイトのURLと見分け方は <a href="/list-esta-guide/official-vs-fake/">公式サイトと偽サイトの見分け方</a> をご確認ください。</p>
        <p>ESTA(エスタ)は、短期間の観光などを目的にアメリカへ渡航する際に必要な申請です。ただし、日本を含むビザ免除プログラム(VWP)参加国の市民であっても、以下のいずれかに該当する場合は、ESTAを利用することができません。</p>
        <ul>
          <li>VWP参加国の国籍者で、2021年1月12日以降にキューバへの滞在または渡航歴がある方</li>
          <li>VWP参加国の国籍者で、スーダン、キューバ、北朝鮮、イラン、シリア、イラクのいずれかの国籍を有する二重国籍者の方</li>
          <li>VWP参加国の国籍者で、北朝鮮、スーダン、ソマリア、イエメン、リビア、イラン、イラク、シリアへの滞在または渡航歴がある方(VWP参加国の政府職員または軍としての公務による渡航は除く)</li>
        </ul>
        <p>ESTAを申請する際は、事前にビザ免除プログラムの詳細およびESTAの申請条件について確認することをお勧めします。上記に該当する場合は、申請しても渡航認証を拒否される可能性があるためご注意ください。</p>
        <p>ESTA 申請をスムーズに進めるためには、いくつかの注意点があります。事前に理解しておくことで、申請ミスや却下のリスクを最小限に抑えることが可能です。</p>
        <p>1.　ESTA申請では、入力内容の正確性が非常に重要です。特にパスポート情報は、一文字でも間違えると申請が承認されない、または入国時にトラブルとなる可能性があります。氏名、パスポート番号、生年月日、有効期限などの情報は、承認後に修正できません。そのため、慎重に入力し、送信前に複数回見直すことをおすすめします。</p>
        <p>2.　ESTAの申請は、出発の72時間前までに行うことが推奨されています。ただし、「渡航認証拒否」と通知された場合は、アメリカ大使館・領事館でビザの取得が必要となりますので、渡航が決まり次第できるだけ早めに申請しましょう。また、不法滞在(オーバーステイ)の履歴がある方、逮捕歴がある方、過去に入国や渡航認証を拒否された方は、ESTAの申請対象外となるためご注意ください。</p>
        <p>3.　家族で申請する場合は、年齢にかかわらずすべての方(子どもを含む)が個別にESTAを申請する必要があります。この際、グループ申請機能を使用することで、複数人分の申請を一括で進められるため便利です。なお、未成年者(18歳未満の方)が単独、または片親同伴で渡米する場合は渡航同意書の提出が求められることがあります。渡航同意書はすべて英語で記入する必要があり、離婚や死別などで法的親権者がいない場合は、戸籍謄本、出生証明書、死亡診断書(いずれも英語)の提出も必要です。</p>
        <p>4.　ESTAの有効期限は2年間ですが、パスポートの有効期限が2年未満の場合はパスポートの有効期限を以て失効します。そのため、アメリカへの渡航が決まった時点で、パスポートの有効期限を確認しておくと安心です。また、パスポートを更新した場合は、新しいパスポート番号で改めてESTAを申請する必要があります。</p>
      </section>
      <section id="sec-13" class="fade-up"><h2>よくある質問</h2>
        <h3>ESTAの有効期限</h3>
        <p>ESTA(エスタ)の有効期限は2年間で、この期間内であれば複数回の渡米が可能です。ただし、申請時に登録したパスポートの有効期限が2年未満の場合は、ESTAもそのパスポートの有効期限と同日に失効しますのでご注意ください。事前にパスポートの有効期限を確認し、2年未満である場合は、更新後にESTAを申請することをおすすめします。</p>
        <p>なお、アメリカへ入国する際に有効なESTAを所持している必要がありますが、出国時にESTAの有効期限が切れていても問題はありません。</p>

        <h3>ESTA申請ステータスの確認方法</h3>
        <p>当サイトでは、ESTA(エスタ)の申請状況を確認することができます。ただし、CBP(アメリカ合衆国税関・国境警備局)の公式サイトなど、当サイト以外でESTAを申請された場合は確認できません。また、ESTAの申請状況を確認する際は、「申請内容確認画面」にて、氏名・生年月日・33桁の申請IDの入力が必要です。申請IDは、ESTA申請完了後に当サイトから送信される「申請受付完了メール」に記載されています。なお、申請IDによる申請状況の確認は、ESTA申請完了日から90日間のみ可能です。90日を過ぎると、個人情報保護の観点から確認ができなくなるためご注意ください。</p>

        <h3>アメリカ経由で第三国へ乗り継ぐ場合のESTA要否</h3>
        <p>ESTAは、乗り換えや乗り継ぎを目的としてアメリカへ渡航する場合にも申請が必要です。万が一、ESTAを取得せずに出発日を迎えた場合、飛行機への搭乗やアメリカへの入国を拒否されるためご注意ください。また、ESTAを管轄するCBP(アメリカ合衆国税関・国境警備局)では、渡航日の3日前までにESTAを取得することが推奨されています。そのため、アメリカへの渡航が決まり次第、早めに申請することをお勧めします。</p>

        <h3>幼児・未成年者のESTA申請要否</h3><p>ESTAは、90日以内の観光・商用・乗り継ぎを目的としてアメリカへ渡航する、ビザ免除プログラム(VWP)参加国の市民を対象に申請が義務付けられています。そのため、未就学児(乳幼児を含む)や未成年者であっても、渡航前にESTAの申請が必要です。未成年者のESTA申請は、保護者が代理で手続きを行ってください。また、申請時には保護者の情報ではなく、お子様本人のパスポート情報の入力が必要となります。なお、未成年者が単独でアメリカへ渡航する場合には、保護者や親族の方が作成した「渡航同意書」の提示を求められることがありますので、あらかじめご準備いただくことをおすすめします。</p>
      </section>
      <section id="sec-14" class="fade-up"><h2>当サイトの申請代行を利用する場合</h2>
        <p>当サイト（US ESTA Apply Website）では、日本語の申請フォームに入力いただいた内容をもとに、スタッフがCBP公式サイトへの申請を代行します。手順はおおむね次のとおりです。</p>
        <ol class="bullets">
          <li>フォームでパスポート情報・連絡先・住所などを入力し、パスポート画像と顔写真をアップロードします。</li>
          <li>渡航目的・滞在先・就労・緊急連絡先・両親の氏名・適格性に関する9項目などの選択項目に回答します。</li>
          <li>入力内容を確認し、免責事項・利用規約に同意のうえ申請料（24,200円・税込）をクレジットカードで支払います。</li>
          <li>「申請受付完了メール」が届きます。</li>
          <li>審査後、「渡航認証可否メール」で結果をお知らせします（最大72時間）。</li>
        </ol>
        <p>フォームの各画面の入力方法は <a href="/list-site-information/form-guide/">当サイト申請フォームの使い方</a> をご覧ください。</p>
        <div class="merits-panel">
          <p class="merits-panel__title">US ESTA Apply Website を利用するメリット</p>
          <ol>
            <li>24時間・年中無休のサポート体制</li>
            <li>パソコン・スマートフォン・タブレットなど各種端末に対応</li>
            <li>申請時のエラーやイレギュラー発生時のサポート対応</li>
            <li>米国CBP公式サイトのメンテナンス時にも対応</li>
            <li>申請ステータスおよび認証状況の照会が可能</li>
            <li>申請結果を日本語のメールでご案内</li>
            <li>お問い合わせは日本語で対応</li>
            <li>ESTA認証情報の紛失時や再通知など、アフターサービスにも対応</li>
            <li>登録内容の修正を1回まで無料対応</li>
            <li>日本語表記の申請フォームで簡単に手続きが可能</li>
          </ol>
        </div>
      </section>
    </article>
  </div>
</section>
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
