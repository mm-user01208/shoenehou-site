import type { Metadata } from 'next';
import { JsonLd, pageJsonLd, seoMetadata } from '@/lib/seo';

const PAGE_PATH = '/list-esta-guide/renewal/';
const PAGE_TITLE = 'ESTAの更新・延長方法を解説｜期限切れ前の再申請手順【2026年】 | US ESTA Apply Website';
const PAGE_DESCRIPTION = 'ESTAには更新機能がないため、期限切れ前に新規で再申請が必要です。再申請の手順、おすすめの申請時期、パスポート更新時の対応方法をわかりやすく解説します。';

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

const FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ESTAの有効期限を延長することはできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'いいえ、ESTAには更新や延長の機能はありません。有効期限が切れた場合は、新規で再申請する必要があります。再申請の手順は初回申請と同じで、すべての情報を改めて入力し、申請手数料を支払います。',
      },
    },
    {
      '@type': 'Question',
      name: 'ESTAの再申請はいつ行うべきですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'おすすめの再申請時期は、有効期限が切れる1ヶ月前、または次回の渡航予定日の1ヶ月前のいずれか早い方です。少なくとも渡航日の3日前（72時間前）までには申請を完了させてください。',
      },
    },
    {
      '@type': 'Question',
      name: '前回の申請データを使って再申請できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'いいえ、ESTAの再申請時に前回の申請データは引き継がれません。すべての情報（氏名、パスポート番号、連絡先、滞在先など）を最初から入力し直す必要があります。',
      },
    },
    {
      '@type': 'Question',
      name: 'パスポートを更新したらESTAはどうなりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'パスポートを更新すると、有効期間内のESTAであっても自動的に失効します。ESTAはパスポート番号に紐づけて管理されているため、新しいパスポートの情報でESTAを再申請する必要があります。',
      },
    },
    {
      '@type': 'Question',
      name: 'ESTAの有効期限が切れた状態でアメリカに行けますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'いいえ、ESTAの有効期限が切れた状態ではアメリカに渡航できません。航空会社のチェックインカウンターで搭乗を拒否される可能性があります。渡航前に必ずESTAの有効期限を確認してください。',
      },
    },
    {
      '@type': 'Question',
      name: 'ESTAの再申請にかかる費用はいくらですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ESTAの再申請にかかる費用は新規申請と同額で、米国国土安全保障省申請料として$40.27が必要です。前回のESTAが有効期間内であっても、再申請時には改めて申請料が発生します。',
      },
    },
    {
      '@type': 'Question',
      name: 'ESTAの有効期限内でも再申請はできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、ESTAの有効期限内であっても新規で再申請することは可能です。ただし、新しいESTAが承認された時点で以前のESTAは自動的に無効となります。有効期間の残日数が無駄になる可能性があるため、タイミングには注意が必要です。',
      },
    },
    {
      '@type': 'Question',
      name: '結婚などで氏名が変わった場合、ESTAの再申請は必要ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、結婚や離婚などで氏名が変わり新しいパスポートを取得した場合は、ESTAの再申請が必要です。ESTAはパスポート情報に紐づけて管理されているため、パスポート情報が変わった場合は新しい情報でESTAを再申請してください。',
      },
    },
    {
      '@type': 'Question',
      name: 'ESTAの期限切れ後、再申請しないまま放置するとペナルティはありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'いいえ、ESTAの有効期限が切れた後に再申請しなくてもペナルティは一切ありません。次回アメリカへ渡航する予定が決まった時点で、改めて新規申請を行ってください。',
      },
    },
  ],
};

const BODY_HTML = `
<section class="article-hero">
  <div class="article-hero__inner">
    <nav class="crumb" aria-label="パンくず">
      <a href="/">HOME</a><span>›</span>
      <a href="/list-esta-guide">ESTA申請ガイド一覧</a><span>›</span>
      <em>ESTAの更新・延長方法を解説｜期限切れ前の再申請手順【2026年】</em>
    </nav>
    <p class="article__eyebrow">Renewal &amp; Extension</p>
    <h1 class="article__title">ESTAの更新・延長方法を解説｜期限切れ前の再申請手順【2026年】</h1>
    <p class="article__lede">ESTA(エスタ)には更新や延長の機能がないため、有効期限が切れた場合は新規で再申請する必要があります。前回の申請データが自動的に引き継がれることもないため、すべての情報を改めて入力する必要があります。本記事では、ESTAの再申請手順やおすすめの申請時期、パスポート更新時の対応方法について詳しく解説します。</p>
  </div>
</section>

<section class="article-main">
  <div class="article-main__inner">
    <aside class="toc">
      <p class="toc__head">目次</p>
      <ol>
        <li><a href="#sec-01">ESTAに更新機能はない</a></li>
        <li><a href="#sec-02">再申請が必要なケース チェックリスト</a></li>
        <li><a href="#sec-03">期限切れ前の再申請手順（ステップ別）</a></li>
        <li><a href="#sec-04">再申請にかかる費用</a></li>
        <li><a href="#sec-05">前回のデータは引き継がれない</a></li>
        <li><a href="#sec-06">いつ再申請すべきか（タイムライン）</a></li>
        <li><a href="#sec-07">パスポート更新時のESTA対応</a></li>
        <li><a href="#sec-08">パスポート更新とESTA再申請の手順</a></li>
        <li><a href="#sec-09">よくある質問</a></li>
      </ol>
    </aside>

    <article class="article-body">

      <section id="sec-01" class="fade-up">
        <h2>ESTAに更新機能はない</h2>
        <p>ESTA(エスタ)には、有効期限を延長したり更新したりする機能は用意されていません。パスポートのように期限前に更新手続きを行って有効期間を延ばすことはできないため、ESTAの有効期限が切れた場合は、新規の申請として改めて手続きを行う必要があります。</p>
        <p>ESTAの有効期間は、申請が承認された日から2年間です。ただし、この2年間の有効期間は、パスポートの有効期限を超えることはできません。例えば、ESTAが承認された時点でパスポートの有効期限が1年後に到来する場合、ESTAの有効期間も1年間となります。つまり、パスポートの有効期限がESTAの有効期限に直接影響します。</p>
        <p>ESTAの有効期間中は、何度でもアメリカへの渡航が可能です。ただし、1回の滞在は90日以内に制限されており、ESTAの有効期限が切れるまでに出国する必要があります。有効期間が残っていれば、次回の渡航時に改めて申請する必要はありません。</p>
      </section>

      <section id="sec-02" class="fade-up">
        <h2>再申請が必要なケース チェックリスト</h2>
        <p>以下のいずれかに該当する場合は、ESTAの再申請が必要です。渡航前に確認しましょう。</p>
        <ul>
          <li>ESTAの有効期限が切れている</li>
          <li>パスポートを更新した（パスポート番号が変わった）</li>
          <li>結婚・離婚などで氏名が変わった</li>
          <li>国籍が変わった</li>
          <li>性別が変わった</li>
          <li>適格性に関する質問の回答内容が変わった</li>
          <li>前回のESTAが「渡航認証拒否」となったが、状況が変わった</li>
        </ul>
        <p><strong>注意：</strong>住所や勤務先の変更のみであれば、ESTA有効期間中は再申請の必要はありません。ただし、パスポート情報に紐づく変更（氏名変更等）がある場合は必ず再申請してください。</p>
      </section>

      <section id="sec-03" class="fade-up">
        <h2>期限切れ前の再申請手順（ステップ別）</h2>
        <p>ESTAの有効期限が近づいてきた場合は、渡航予定日に間に合うよう早めに再申請を行いましょう。再申請の手順は、初回の申請と同じです。以下の流れに沿って手続きを進めてください。</p>

        <h3>ステップ1：ESTA申請ページにアクセス</h3>
        <p>ESTA申請ページにアクセスし、「新規申請」を選択します。再申請の場合も「新規申請」から手続きを開始してください。「既存の申請の確認」では、有効期限の確認やステータスの確認のみが可能で、更新手続きは行えません。</p>

        <h3>ステップ2：申請情報の入力</h3>
        <p>パスポート情報、個人情報、連絡先、滞在先住所などのすべての情報を改めて入力します。前回の申請データは引き継がれないため、すべての項目を新たに入力する必要があります。住所のローマ字表記については「<a href="/list-esta-application/place-of-birth/">ESTA申請時の出生地や住所の書き方を解説</a>」をご確認ください。</p>

        <h3>ステップ3：適格性質問への回答・確認</h3>
        <p>セキュリティに関する質問に回答し、入力内容を確認します。前回と同じ内容であっても、改めて正確に回答してください。</p>

        <h3>ステップ4：申請手数料の支払い</h3>
        <p>申請手数料を支払い、申請を完了させます。再申請の場合も、新規申請と同額の手数料($40.27)が発生します。</p>

        <h3>ステップ5：審査結果の確認</h3>
        <p>CBP(アメリカ合衆国税関・国境警備局)による審査が行われ、通常72時間以内に結果が通知されます。新しいESTAが承認されると、以前のESTAは無効となり、新しいESTAに置き換えられます。</p>

        <p>申請方法の詳細な手順は「<a href="/list-esta-application/esta-flow/">ESTA申請方法を解説</a>」で全ステップを画像付きで確認できます。アプリでの申請をご希望の場合は「<a href="/list-esta-application/application/">アプリを使ったESTA申請方法を解説</a>」をご覧ください。</p>
      </section>

      <section id="sec-04" class="fade-up">
        <h2>再申請にかかる費用</h2>
        <p>ESTAの再申請にかかる費用は新規申請と同額です。再申請時にも改めて申請料が発生し、前回のESTAが有効期間内であっても割引や免除はありません。</p>
        <table>
          <thead>
            <tr>
              <th>費用項目</th>
              <th>金額</th>
              <th>説明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Processing Fee（ESTA運用手数料）</td>
              <td>$10.27</td>
              <td>ESTA申請手続き・システム管理費</td>
            </tr>
            <tr>
              <td>Travel Promotion Fee（旅行促進手数料）</td>
              <td>$17.00</td>
              <td>観光客誘致にかかる費用</td>
            </tr>
            <tr>
              <td>General Fund（米国財務省一般基金）</td>
              <td>$13.00</td>
              <td>ESTA運営に関する基金への拠出</td>
            </tr>
            <tr>
              <td><strong>合計</strong></td>
              <td><strong>$40.27</strong></td>
              <td>米国国土安全保障省申請料</td>
            </tr>
          </tbody>
        </table>
        <p>申請料金の詳細については「<a href="/list-esta-application/fee/">ESTAの申請料金</a>」のページをご確認ください。</p>
      </section>

      <section id="sec-05" class="fade-up">
        <h2>前回のデータは引き継がれない</h2>
        <p>ESTAの再申請時に注意すべき重要なポイントとして、前回の申請データが自動的に引き継がれないという点があります。再申請の際は、氏名、生年月日、パスポート番号、連絡先、滞在先住所、セキュリティ質問への回答など、すべての情報を最初から入力し直す必要があります。</p>
        <p>これは、CBPのシステムが各申請を独立したものとして処理しているためです。前回の申請情報は参照されず、新しい申請ごとに独自の審査が行われます。そのため、再申請時にも初回と同様に正確な情報を入力することが求められます。</p>
        <p>再申請をスムーズに進めるためのアドバイスとして、前回の申請時に入力した情報をメモやスクリーンショットで保存しておくことをおすすめします。特にパスポート番号や滞在先住所など、正確な入力が求められる項目は、事前に情報を準備しておくと入力ミスを防ぐことができます。</p>
        <p><strong>再申請時の準備リスト：</strong></p>
        <ul>
          <li>最新のパスポート（番号・有効期限を確認）</li>
          <li>現住所のローマ字表記</li>
          <li>勤務先情報（会社名・住所・電話番号）</li>
          <li>アメリカでの滞在先情報（ホテル名・住所）</li>
          <li>緊急連絡先の情報</li>
          <li>クレジットカード</li>
          <li>受信可能なメールアドレス</li>
        </ul>
      </section>

      <section id="sec-06" class="fade-up">
        <h2>いつ再申請すべきか（タイムライン）</h2>
        <p>ESTAの再申請は、有効期限が切れる前であればいつでも行うことが可能です。ただし、再申請のタイミングには注意が必要です。おすすめの再申請時期は、有効期限が切れる1ヶ月前、または次回の渡航予定日の1ヶ月前のいずれか早い方です。</p>
        <p>再申請を早すぎる時期に行うと、新しいESTAが承認された時点で前のESTAが無効となるため、有効期間の残日数が無駄になる可能性があります。一方、直前すぎると審査に時間がかかった場合に渡航に間に合わないリスクがあります。CBPでは審査結果の通知に最大72時間かかる場合があると公表しているため、少なくとも渡航日の3日前(72時間前)までには申請を完了させてください。</p>

        <h3>再申請のタイムラインガイド</h3>
        <table>
          <thead>
            <tr>
              <th>渡航までの期間</th>
              <th>推奨アクション</th>
              <th>備考</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3ヶ月以上前</td>
              <td>ESTAの有効期限を確認</td>
              <td>有効期限内であれば再申請不要</td>
            </tr>
            <tr>
              <td>1ヶ月前</td>
              <td>再申請を開始（おすすめ時期）</td>
              <td>余裕を持った申請が可能</td>
            </tr>
            <tr>
              <td>2週間前</td>
              <td>遅くともこの時期までに申請</td>
              <td>万が一の再申請にも対応可能</td>
            </tr>
            <tr>
              <td>3日前（72時間前）</td>
              <td>最低限このタイミングまでに申請完了</td>
              <td>CBP推奨の最終期限</td>
            </tr>
            <tr>
              <td>前日〜当日</td>
              <td>リスクあり</td>
              <td>審査が間に合わない可能性</td>
            </tr>
          </tbody>
        </table>

        <p>なお、ESTAの有効期限が切れた後であっても、新規申請は問題なく行えます。有効期限が切れた状態でアメリカに渡航しようとしなければ、ペナルティなどは一切ありません。次回の渡航予定が決まった時点で、改めて新規申請を行ってください。</p>
      </section>

      <section id="sec-07" class="fade-up">
        <h2>パスポート更新時のESTA対応</h2>
        <p>パスポートを更新(新しいパスポートに切り替え)した場合、有効期間内のESTAであっても自動的に失効します。これは、ESTAがパスポート番号に紐づけて管理されているためです。パスポート番号が変わると、以前のESTAは使用できなくなります。</p>
        <p>そのため、パスポートを更新した場合は、新しいパスポート番号でESTAを再申請する必要があります。パスポートの更新手続きが完了し、新しいパスポートを受け取った後に、速やかにESTAの再申請を行ってください。</p>

        <h3>パスポートとESTAの関係まとめ</h3>
        <table>
          <thead>
            <tr>
              <th>パスポートの状況</th>
              <th>ESTAへの影響</th>
              <th>必要な対応</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>パスポート番号が変わった</td>
              <td>ESTAは自動的に失効</td>
              <td>新番号でESTA再申請が必要</td>
            </tr>
            <tr>
              <td>パスポートの有効期限が切れた</td>
              <td>ESTAも同時に失効</td>
              <td>パスポート更新後にESTA再申請</td>
            </tr>
            <tr>
              <td>結婚で氏名が変わりパスポート更新</td>
              <td>ESTAは自動的に失効</td>
              <td>新パスポートでESTA再申請</td>
            </tr>
            <tr>
              <td>パスポートの残存有効期間が短い</td>
              <td>ESTAの有効期間も短くなる</td>
              <td>先にパスポート更新を推奨</td>
            </tr>
            <tr>
              <td>パスポートを紛失・再発行</td>
              <td>ESTAは自動的に失効</td>
              <td>再発行パスポートでESTA再申請</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="sec-08" class="fade-up">
        <h2>パスポート更新とESTA再申請の手順</h2>
        <p>パスポートとESTAの更新を同時期に行う場合は、以下の手順で進めることをおすすめします。</p>

        <h3>1. パスポートの更新手続きを完了させる</h3>
        <p>各都道府県のパスポートセンターで更新申請を行い、新しいパスポートを受け取ります。</p>

        <h3>2. 新しいパスポート情報を確認する</h3>
        <p>パスポート番号、有効期限、氏名のローマ字表記を確認してください。</p>

        <h3>3. 新しいパスポート情報でESTAを新規申請する</h3>
        <p>新しいパスポート番号を使ってESTAの新規申請を行います。古いパスポートの情報では申請しないでください。</p>

        <h3>4. 審査結果を確認する</h3>
        <p>通常72時間以内に審査結果が通知されます。「渡航認証許可」の通知を確認してください。</p>

        <p>この手順を守ることで、パスポート番号の不一致によるトラブルを防ぐことができます。</p>
        <p>なお、パスポートの残存有効期間にもご注意ください。アメリカへの渡航時には、帰国日までパスポートが有効であることが求められます。パスポートの有効期限が渡航期間中に切れる場合は、先にパスポートの更新を行い、新しいパスポートでESTAを申請してください。パスポートについての詳細は「<a href="/list-esta-application/passport/">ESTAとパスポートの関係</a>」で詳しく解説しています。</p>
      </section>

      <section id="sec-09" class="fade-up">
        <h2>よくある質問</h2>
        <div class="faq" style="margin-top:32px">
          <details open>
            <summary>ESTAの有効期限を延長することはできますか？</summary>
            <div class="answer"><p>いいえ、ESTAには更新や延長の機能はありません。有効期限が切れた場合は、新規で再申請する必要があります。再申請の手順は初回申請と同じで、すべての情報を改めて入力し、申請手数料を支払います。</p></div>
          </details>
          <details>
            <summary>ESTAの有効期限が切れた状態でアメリカに行けますか？</summary>
            <div class="answer"><p>いいえ、ESTAの有効期限が切れた状態ではアメリカに渡航できません。航空会社のチェックインカウンターで搭乗を拒否される可能性があります。渡航前に必ずESTAの有効期限を確認し、期限が切れている場合は新規で再申請を行ってください。</p></div>
          </details>
          <details>
            <summary>前回の申請データを使って再申請できますか？</summary>
            <div class="answer"><p>いいえ、ESTAの再申請時に前回の申請データは引き継がれません。すべての情報(氏名、パスポート番号、連絡先、滞在先など)を最初から入力し直す必要があります。再申請をスムーズに進めるため、前回の申請情報をメモやスクリーンショットで保存しておくことをおすすめします。</p></div>
          </details>
          <details>
            <summary>パスポートを更新したらESTAはどうなりますか？</summary>
            <div class="answer"><p>パスポートを更新すると、有効期間内のESTAであっても自動的に失効します。ESTAはパスポート番号に紐づけて管理されているため、パスポート番号が変わると以前のESTAは使用できなくなります。新しいパスポートの情報でESTAを再申請してください。</p></div>
          </details>
          <details>
            <summary>ESTAの再申請にかかる費用はいくらですか？</summary>
            <div class="answer"><p>ESTAの再申請にかかる費用は新規申請と同額で、米国国土安全保障省申請料として$40.27が必要です。前回のESTAが有効期間内であっても、再申請時には改めて申請料が発生します。割引や免除はありません。</p></div>
          </details>
          <details>
            <summary>ESTAの有効期限内でも再申請はできますか？</summary>
            <div class="answer"><p>はい、ESTAの有効期限内であっても新規で再申請することは可能です。ただし、新しいESTAが承認された時点で以前のESTAは自動的に無効となります。有効期間の残日数が無駄になる可能性があるため、渡航予定の1ヶ月前を目安に再申請することをおすすめします。</p></div>
          </details>
          <details>
            <summary>結婚などで氏名が変わった場合、ESTAの再申請は必要ですか？</summary>
            <div class="answer"><p>はい、結婚や離婚などで氏名が変わり新しいパスポートを取得した場合は、ESTAの再申請が必要です。ESTAはパスポート情報に紐づけて管理されているため、パスポート情報が変わった場合は新しい情報でESTAを再申請してください。</p></div>
          </details>
          <details>
            <summary>ESTAの期限切れ後、再申請しないまま放置するとペナルティはありますか？</summary>
            <div class="answer"><p>いいえ、ESTAの有効期限が切れた後に再申請しなくてもペナルティは一切ありません。次回アメリカへ渡航する予定が決まった時点で、改めて新規申請を行ってください。ただし、有効期限が切れた状態でアメリカに渡航しようとすると搭乗拒否の可能性がありますのでご注意ください。</p></div>
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
    <a href="/list-esta-application/esta/"><span class="related__media"><img src="/img/related/01-esta-toha.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">01.</span><span class="related__title">ESTA(エスタ)とは？</span><span class="related__more">Read more</span></span></a>
    <a href="/list-esta-application/esta-flow/"><span class="related__media"><img src="/img/related/04-apply-method.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">02.</span><span class="related__title">ESTAの申請方法を解説</span><span class="related__more">Read more</span></span></a>
    <a href="/list-esta-application/place-of-birth/"><span class="related__media"><img src="/img/related/03-address-writing.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">03.</span><span class="related__title">出生地や住所の書き方</span><span class="related__more">Read more</span></span></a>
    <a href="/list-esta-application/us-contact-details/"><span class="related__media"><img src="/img/related/06-us-contact.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">04.</span><span class="related__title">米国内の連絡先の記入方法</span><span class="related__more">Read more</span></span></a>
  </div>
</section>
`;

export default function Page() {
  return (
    <>
      <JsonLd data={PAGE_JSON_LD} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <div className="redesign-detail" dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
    </>
  );
}
