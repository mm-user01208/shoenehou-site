import type { Metadata } from 'next';
import { JsonLd, pageJsonLd, seoMetadata } from '@/lib/seo';

const PAGE_PATH = '/list-esta-application/application/';
const PAGE_TITLE = 'アプリを使ったESTA(エスタ)申請方法を解説 | US ESTA Apply Website';
const PAGE_DESCRIPTION = 'CBP(アメリカ合衆国税関・国境警備局)は、電子渡航認証システムESTA(エスタ)の公式アプリを提供しています。アプリでの申請方法や必要書類、注意点などを詳しく解説します。';

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
      <em>アプリを使ったESTA(エスタ)申請方法を解説</em>
    </nav>
    <p class="article__eyebrow">Mobile Application</p>
    <h1 class="article__title">アプリを使ったESTA(エスタ)申請方法を解説</h1>
    <p class="article__lede">米国税関・国境警備局(CBP)は2023年6月より公式アプリ「ESTA Mobile」を提供しており、スマートフォン1台で申請から認証状況の確認まで完結できます。本記事ではアプリでの申請方法、必要書類、注意点を詳しく解説します。</p>
  </div>
</section>

<section class="article-main">
  <div class="article-main__inner">
    <aside class="toc">
      <p class="toc__head">目次</p>
      <ol>
        <li><a href="#sec-01">ESTAのアプリとは？</a></li>
        <li><a href="#sec-02">ESTAアプリのダウンロード方法・手順</a></li>
        <li><a href="#sec-03">ESTAアプリでの申請に必要な書類・情報</a></li>
        <li><a href="#sec-04">ESTAアプリでの申請方法・手順</a></li>
        <li><a href="#sec-05">ESTA認証状況の確認方法</a></li>
        <li><a href="#sec-06">ESTAアプリ利用時の注意点</a></li>
        <li><a href="#sec-07">ESTAアプリに関するFAQ</a></li>
      </ol>
    </aside>

    <article class="article-body">

      <section id="sec-01" class="fade-up">
        <h2>ESTAのアプリとは？</h2>
        <p>ESTAとは、アメリカのビザ免除プログラム(VWP)を利用して渡航する際に必要な電子渡航認証システムです。日本国籍を含むビザ免除対象国の渡航者は、観光や商用など90日以内の短期滞在であれば、ビザの代わりにESTAの取得が義務付けられています。従来、ESTAはパソコンの公式ウェブサイトから申請するのが一般的でしたが、2023年6月21日より、米国税関・国境警備局(CBP)が提供する公式アプリ「ESTA Mobile(Android/iOS)」をスマートフォンやタブレットにダウンロードすることで、簡単に申請できるようになりました。スマートフォン1台で、申請から支払い、認証状況の確認まで完結することが可能です。日本語にも対応しているため、手続きを簡単かつ正確に進めやすい点が特徴となっています。</p>
        <h3>申請手続きの簡略化・入力間違いの軽減</h3>
        <p>ESTAアプリを利用する最大のメリットは、申請手続きが大幅に簡略化される点です。パスポート情報は、カメラで撮影するだけで自動的に読み取られ、氏名やパスポート番号を手入力する必要がありません。また、入力間違いによる申請エラーのリスクを軽減することができます。スマートフォン1台で手続きが完結するため、外出先や移動中でも申請しやすいのがメリットと言えるでしょう。</p>
        <h3>自動翻訳機能で日本語に対応</h3>
        <p>ESTAアプリには自動翻訳機能が搭載されており、日本語表示にも対応しています。質問項目や注意事項も翻訳されるため、英語が苦手な方でも内容を理解しながら申請を進めることができます。誤った回答をしてしまう可能性が低くなり、入力間違いなどによる申請エラーのリスクが大幅に軽減されます。</p>
      </section>

      <section id="sec-02" class="fade-up">
        <h2>ESTAアプリのダウンロード方法・手順</h2>
        <h3>iOSデバイスの場合</h3>
        <p>iPhoneやiPadをお使いの方は、<a href="https://apps.apple.com/jp/app/esta-mobile/id1529604353" target="_blank" rel="noopener noreferrer">App Store</a>からESTA申請アプリをダウンロードできます。ESTA申請に使用できるのは、米国・税関国境警備局(CBP)が提供する公式アプリのみです。</p>
        <p>申請手順：</p>
        <ul>
          <li>App Storeを開く</li>
          <li>検索バーに「ESTA」または「ESTA申請」と入力</li>
          <li>「U.S. Customs and Border Protection」と表示されている「ESTAアプリ」をインストール（※iOS 14.0以降を搭載したiPhoneまたはiPadに対応）</li>
          <li>インストール完了後、「操作の継続」をタップ</li>
          <li>「セキュリティに関する通告」に同意し、申請手続きを開始</li>
        </ul>
        <h3>Androidデバイスの場合</h3>
        <p>Android端末をお使いの方は、<a href="https://play.google.com/store/apps/details?id=gov.dhs.cbp.esta&hl=ja" target="_blank" rel="noopener noreferrer">Google Play</a>ストアからESTA申請アプリをダウンロードできます。申請手順は、iOSデバイスの場合とほぼ同じ流れです。</p>
        <p>申請手順：</p>
        <ul>
          <li>Google Playを開く</li>
          <li>検索バーに「ESTA」または「ESTA Mobile」と入力</li>
          <li>「U.S. Customs and Border Protection」と表示されている「ESTAアプリ」をインストール（※Android 8.0以降を搭載したスマートフォンまたはタブレットに対応）</li>
          <li>インストール完了後、「操作の継続」をタップ</li>
          <li>「セキュリティに関する通告」に同意し、申請手続きを開始</li>
        </ul>
      </section>

      <section id="sec-03" class="fade-up">
        <h2>ESTAアプリでの申請に必要な書類・情報</h2>
        <p>アプリでのESTA申請に必要な情報は以下の通りです。効率良く申請を進めるために、事前に準備しておきましょう。なお、アプリではパスポート顔写真ページの撮影およびスキャン、顔写真の撮影が必須となります。</p>
        <ul>
          <li>申請者本人のスマートフォン</li>
          <li>ICチップ付きで、有効期限内のパスポート</li>
          <li>有効なメールアドレス</li>
          <li>クレジットカードまたはデビットカード</li>
        </ul>
        <h3>申請に必要な情報一覧</h3>
        <h3>パスポート情報</h3>
        <ul>
          <li>パスポート番号</li>
          <li>発行国</li>
          <li>発行年月日</li>
          <li>有効期限</li>
        </ul>
        <h3>個人情報</h3>
        <ul>
          <li>氏名</li>
          <li>性別</li>
          <li>生年月日</li>
          <li>出生地(出生国・出生都市)</li>
          <li>SNSアカウント情報</li>
          <li>CBPグローバルエントリープログラム</li>
          <li>両親の氏名</li>
          <li>勤務先情報</li>
        </ul>
        <h3>連絡先情報</h3>
        <ul>
          <li>自宅住所</li>
          <li>電話番号</li>
          <li>メールアドレス</li>
          <li>緊急連絡先</li>
        </ul>
        <h3>渡航情報</h3>
        <ul>
          <li>アメリカでの滞在先情報(ホテル名など)</li>
          <li>渡航目的</li>
        </ul>
        <h3>適格性に関する質問</h3>
        <ul>
          <li>精神疾患や薬物依存などの病歴</li>
          <li>逮捕または犯罪歴</li>
          <li>違法薬物の所持または使用歴</li>
          <li>テロやスパイ行為歴</li>
          <li>違法ビザ取得などの詐欺行為歴</li>
          <li>米国内における未許可の就労意図の有無</li>
          <li>過去の米国ビザの否認または入国拒否の有無</li>
          <li>米国での超過滞在歴</li>
          <li>特定国への渡航歴</li>
        </ul>
      </section>

      <section class="cta-strip cta-strip--solid cta-mid">
        <p class="cta-strip__eyebrow">Start your application</p>
        <h2><span class="h2l1">アメリカ渡航には</span><br class="sp-br">ESTAの申請が必要です。</h2>
        <p>申請完了まで最大3日ほどかかるため、<br class="sp-br">余裕をもってお手続きください。</p>
        <a href="/form/step1" class="cta-btn">ESTA申請をはじめる →</a>
      </section>

      <section id="sec-04" class="fade-up">
        <h2>ESTAアプリでの申請方法・手順</h2>
        <p>ESTAアプリをダウンロードし必要書類や情報を準備したうえで、ESTA申請を進めてください。ダウンロード完了後は、「セキュリティに関する通告」と「免責事項」に同意し、「操作の継続」をタップすると申請手続きが開始されます。アプリでのESTA申請方法と手順は以下の通りです。</p>
        <h3>1. パスポートの顔写真ページを撮影</h3>
        <p>アプリを起動し「新規申請」を選択すると、パスポートのスキャン画面が表示されます。次に、パスポートの顔写真ページを開き、スマートフォンに表示される枠内に写真ページが収まるよう、カメラの位置を調整します。スキャンが完了すると、氏名、生年月日、パスポート番号などが自動入力されるため、パスポートの情報と一致しているか確認をしてください。</p>
        <h3>2. スマホでパスポートをスキャン</h3>
        <p>続いて、パスポートのICチップを読み取ります。パスポートのスキャン方法が画面に表示されますので、「読み取りの開始」をタップして次へ進んでください。パスポートの上部にスマートフォンの背面(カメラ)をかざすと、読み取りが開始されます。読み取りが開始されない場合は、パスポートの表紙に沿ってスマートフォンをゆっくり動かしてください。読み取りが成功すると、名前、性別、生年月日、国籍、パスポート番号、発行国、有効期限が画面に表示されます。パスポート情報と照らし合わせて間違いがないか確認し、「操作の継続」をタップして次へ進んでください。</p>
        <h3>3. 申請者本人の顔写真を撮影</h3>
        <p>次に、申請者本人の顔写真を撮影します。スマートフォンのインカメラが起動するため、画面の指示に従い枠内に顔を収めてください。正面をしっかり向き、背景は無地、帽子やサングラスは外すなどの注意点に気を付けながら撮影を行いましょう。顔が正しく認識されると枠が大きくなるため、その大きさに合わせて顔を近づけて撮影し、申請書の入力に進みます。</p>
        <h3>4. 個人情報・渡航情報の入力</h3>
        <p>パスポート情報以外の個人情報を入力していきます。アプリの指示に従って、各項目を正確に入力しましょう。氏名やパスポート番号など、スキャン時に取得されたパスポート情報は自動で入力されます。自動読み取りされなかった項目や、追加で必要な個人情報は手入力してください。出生した市区町村、出生国、メールアドレスなどを入力し、画面右下の右矢印をタップして次へ進みます。登録したメールアドレスには"4桁"の英数字が届くため、画面上に入力することで次のステップへ進むことができます。続いて、日本の住所、電話番号、勤務先、米国での滞在先、緊急連絡先などの個人情報や渡航情報を入力してください。その後、適格性に関する質問に回答し、申請内容を確認して完了となります。</p>
        <h3>5. 申請料金の支払い</h3>
        <p>入力内容に間違いがないかを確認した後、支払いの「免責事項」にチェックを入れ、「今すぐ支払う」をタップして次へ進んでください。支払い方法は、クレジットカード、デビットカード、またはPaypalアカウントから選択して必要な情報を入力します。申請料金は40.27ドルで、決済が完了するとESTAの認証審査が開始されます。支払い完了後、登録したメールアドレスに確認メールが送信されます。このメールには申請番号が記載されているため、大切に保管してください。</p>
      </section>

      <section id="sec-05" class="fade-up">
        <h2>ESTA認証状況の確認方法</h2>
        <p>アプリ内に申請番号を入力することで、いつでも認証状況を確認できます。アプリを再度開き、「ESTAを取得済みの場合」の「見つける」をタップしてください。認証結果には、以下の3つのパターンがあります。</p>
        <ul>
          <li>AUTHORIZATION APPROVED：認証は承認されました</li>
          <li>AUTHORIZATION PENDING：認証審査が保留中です</li>
          <li>TRAVEL NOT AUTHORIZED：渡航は拒否されました</li>
        </ul>
        <p>ESTA審査中の場合、認証結果のステータスは「保留中」と表示されます。ESTAは、決済完了から認証が下りるまで最大で72時間かかることがあります。そのため、保留中と表示された場合は、時間をおいて再度ご確認ください。</p>
      </section>

      <section id="sec-06" class="fade-up">
        <h2>ESTAアプリ利用時の注意点</h2>
        <h3>アプリがデバイスに対応しているか</h3>
        <p>使用デバイスがESTAアプリに対応しているかを事前に確認してください。ESTAアプリは、iOS 14.0以降を搭載したiPhoneやiPadなどのiOSデバイス、またはAndroid 8.0以降を搭載したXperia、Galaxy、AQUOSなどのAndroidデバイスに対応しています。App Storeまたは<a href="https://play.google.com/store/apps/details?id=gov.dhs.cbp.esta&hl=ja" target="_blank" rel="noopener noreferrer">Google Playからダウンロード</a>が可能です。なお、アプリのバージョンが古い場合、ダウンロードできなかったり正常に動作しない場合があるため、ご自身の端末とOSのバージョンをあらかじめ確認しておきましょう。</p>
        <h3>申請番号や認証結果を控える</h3>
        <p>ESTAアプリで入力の再開や認証審査状況を確認する方法は、基本的に公式ウェブサイトと同じです。パスポート番号、生年月日、渡航申請番号または国籍、パスポートの発行日、有効期間満了日の入力が必須となります。なお、アプリ内に保存されるこれらの情報は、セキュリティ上のリスクとなる可能性があります。そのため、スマートフォン紛失時に備えて端末にロックをかけたり、顔認証などの生態認証を設定しておくと安全性が高まります。また、申請番号や認証結果は、スクリーンショットやメモで保存しておくと安心です。</p>
        <h3>外出時はパスポートを携帯する</h3>
        <p>ESTAアプリで申請する際は、パスポートのスキャンと顔写真ページの撮影を行うため、パスポートを手元に準備しておく必要があります。アプリを利用する場合は外出先でも気軽に申請できますが、パスポートの携帯は必須です。外出先で紛失しないよう、しっかりと管理しましょう。</p>
        <h3>アプリでのグループ申請は不可</h3>
        <p>ESTAアプリでは、1人ずつ申請と決済を行う必要があるため、グループ申請はできません。家族や団体の申請手続きは、公式ウェブサイトをご利用ください。公式ウェブサイトでは最大50人までのグループ申請が可能で、連絡用のメールアドレスや決済カードの情報を一括で設定できます。</p>
        <p>なお、ESTAを取得してもアメリカへの入国が保証されるわけではありません。最終的な判断は、到着した空港のCBP(アメリカ合衆国税関・国境警備局)入国審査官に委ねられます。そのため、ESTA申請時には虚偽の申告は避け、正確な情報を登録しましょう。</p>
      </section>

      <section id="sec-07" class="fade-up">
        <h2>ESTAアプリに関するFAQ</h2>
        <h3>今後のESTA申請は、アプリに限定される予定ですか？</h3>
        <p>いいえ。現時点では、ESTA申請がアプリに限定される予定はありません。従来通り、パソコンから公式ウェブサイトを通じて申請することも可能です。ご自身が利用しやすい方法を選んで、申請してください。</p>
        <h3>アプリはどこからダウンロードできますか？</h3>
        <p>iOSデバイス(iPhone、iPad)の場合はApp Store、Androidデバイス(Xperia、Galaxy、AQUOS)の場合はGoogle Playストアからダウンロードできます。検索バーに「ESTA」や「ESTA申請」と入力して検索してください。</p>
        <h3>アプリ申請時に必要なものとは？</h3>
        <p>有効期限内のパスポート、Eメールアドレス、クレジットカードまたはデビットカードをご用意ください。その他にも、アメリカでの滞在先、現在の職業や勤務先、緊急連絡先などの個人情報や渡航先情報をあらかじめ準備しておくと、手続きがスムーズに進みます。</p>
        <h3>アプリ申請時もメールアドレスの入力は必要ですか？結果はアプリに通知されますか？</h3>
        <p>はい。アプリでの申請時もメールアドレスの入力は必須です。公式ウェブサイトからESTA申請を行った場合と同様に、申請結果は登録したメールアドレスに通知されます。なお、審査の進捗状況や審査結果はアプリ内で確認することも可能です。アプリ内で送受信が可能なEメールアドレスをご用意ください。</p>
        <h3>アプリはどのデバイスからも利用可能ですか？</h3>
        <p>ESTAの公式アプリ「ESTA Mobile」は、iOS 14.0以降のiOSデバイス、またはAndroid 8.0以降のAndroidデバイスで利用できます。古いバージョンのOSを使用している場合は、アプリのアップデート、または公式ウェブサイトからの申請をご検討ください。</p>
        <h3>ウェブサイトとアプリでは申請方法や手順に違いがありますか？</h3>
        <p>基本的な手続きに大きな違いはなく、入力内容や申請料金も同じです。いずれの場合も、最終的には米国国土安全保障省の同じシステムで処理されるため、審査基準や結果に違いはありません。</p>
        <p>ただし、操作性には大きな違いがあります。アプリでは、パスポート情報や顔写真の自動読み取りが可能なため、入力ミスが起こりにくいという利点があります。スマートフォンの操作に慣れている方や、短時間で申請を終えたい方にはアプリ申請がおすすめです。一方、自宅などで大きな画面を見ながら慎重に入力したい方には、パソコンからの申請が適しています。</p>
        <h3>アプリ申請の途中で終了した場合、前回の続きから申請を再開できますか？</h3>
        <p>はい。ESTAアプリでは申請途中でも入力情報を保存し、続きから申請を再開することが可能です。申請中に、申請フォーム下部の「保存して終了」をタップすると、ESTA申請番号が画面に表示されます。その際に、申請番号を「スクリーンショットを撮って保存する」またはメモをとり保管してください。</p>
        <p>前回の続きから申請を再開する場合は、「ESTAを取得済みの場合」の「見つける」をタップし、パスポート番号・生年月日・ESTA申請番号を入力します。検索の完了後、引き続き申請を進めることが可能です。</p>
        <h3>ESTA認証情報はアプリに保存されますか？確認する方法はありますか？</h3>
        <p>ESTAアプリには、認証情報を保存する機能はありません。認証情報を確認したい場合は、アプリを開き「ESTAを取得済みの場合」の「見つける」をタップし、パスポート番号・生年月日・ESTA申請番号を入力してください。なお、アプリをアンインストールした場合や、スマートフォンを機種変した場合でも、申請番号があれば公式ウェブサイトから認証情報を確認することが可能です。</p>
        <h3>アプリで申請する場合はどのくらい時間がかかりますか？</h3>
        <p>アプリ、公式ウェブサイトのいずれを利用する場合も、申請にかかる所要時間はおよそ15～30分程度です。初めての申請する方や、英語(ローマ字)表記になれていない方は、時間に余裕を持って進めることをおすすめします。</p>
        <h3>ESTA申請が承認されない場合、申請料金は払い戻しされますか？</h3>
        <p>ESTA申請では、承認・不承認にかかわらず、申請情報が処理された時点で費用が発生します。不承認の場合は、ESTA運用手数料の10.27ドルは返金対象となりますが、残りの30ドルは処理費用として差し引かれる仕組みになっています。なお、ESTAを改めて申請する場合は、再度40.27ドルの支払いが必要です。</p>
        <p>米国国土安全保障省申請料($40.27)の内訳：</p>
        <ul>
          <li>Processing Fee / ESTA運用手数料($10.27)：電子渡航認証システムESTAの申請手続き、システム管理にかかる費用</li>
          <li>Travel Promotion Fee / 旅行促進手数料($17)：電子渡航認証システムESTAを利用して渡米する観光客の誘致にかかる費用</li>
          <li>General fund of the Treasury / 米国財務省一般基金への拠出分($13)：電子渡航認証システムESTAの運営に関係し、アメリカ財務省の一般基金へ充当される費用</li>
        </ul>
        <h3>ESTAを取得すれば必ずアメリカへ入国できますか？</h3>
        <p>ESTAは、あくまでアメリカ渡航前の事前認証制度であり、必ずしも入国を保証するものではありません。アメリカ入国の最終判断は、到着した空港におけるCBP(アメリカ合衆国税関・国境警備局)の入国審査官に委ねられます。入国審査では、滞在目的、滞在期間、帰国予定などについて確認されることがあります。不審な点がある場合は、入国を拒否される可能性があるためご注意ください。なお、ESTAの渡航申請番号を提示する必要はありませんが、念のため手帳などに控えておくことをおすすめします。</p>
      </section>

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
