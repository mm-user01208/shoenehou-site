import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ESTA(エスタ)の申請料金 | US ESTA Apply Website',
  description: '当サイトではESTAの申請手続きの代行サービスを行います。当サイトにおける申請サービスの料金やお支払い方法、領収書の発行、キャンセルポリシーについて解説します。',
};

const BODY_HTML = `
<section class="article-hero">
  <div class="article-hero__inner">
    <nav class="crumb" aria-label="パンくず">
      <a href="/">HOME</a><span>›</span>
      <a href="/list-esta-application">ESTA申請関連情報一覧</a><span>›</span>
      <em>ESTA(エスタ)の申請料金</em>
    </nav>
    <p class="article__eyebrow">Application Fee</p>
    <h1 class="article__title">ESTA(エスタ)の申請料金</h1>
    <p class="article__lede">当サイトにてESTA(エスタ)を申請される場合の申請手数料、支払い方法、領収書の発行、キャンセルポリシー、申請代行サービスの内容について詳しく解説します。</p>
  </div>
</section>

<section class="article-main">
  <div class="article-main__inner">
    <aside class="toc">
      <p class="toc__head">目次</p>
      <ol>
        <li><a href="#sec-01">支払い時に利用可能なクレジットカード</a></li>
        <li><a href="#sec-02">申請料の内訳</a></li>
        <li><a href="#sec-03">領収書の発行方法</a></li>
        <li><a href="#sec-04">キャンセル方法について</a></li>
        <li><a href="#sec-05">当サイトの申請代行サービスについて</a></li>
      </ol>
    </aside>

    <article class="article-body">

      <section id="sec-01" class="fade-up">
        <h2>支払い時に利用可能なクレジットカード</h2>
        <p>手数料のお支払いには、クレジットカード(Visa、MasterCard、JCB、American Express、Diners Club)のみご利用いただけます。申請情報の入力後にクレジットカード決済画面が表示されますので、フォームの案内に従って必要事項を正確にご入力ください。</p>
      </section>

      <section id="sec-02" class="fade-up">
        <h2>申請料の内訳</h2>
        <p>当サイトにてESTA(エスタ)を申請される場合、申請手数料のお支払いが必要です。申請料金には、ESTAを管轄するDHS(米国国土安全保障省)への申請料に加え、当サイトでの申請代行サービス料が含まれます。以下では、ESTA申請手数料(申請代行サービス料を含む)およびDHS(米国国土安全保障省)への申請料の内訳について解説します。</p>
        <h3>ESTA申請手数料の内訳</h3>
        <p>DHS(米国国土安全保障省)申請手数料 ($40.27) ＋ 申請代行サービス手数料 = 24,200円(税込)</p>
        <h3>DHS(Department of Homeland Security / 米国国土安全保障省)への申請手数料($40.27)の内訳</h3>
        <ul>
          <li>Processing Fee / ESTA運用手数料($10.27)：電子渡航認証システムESTAの申請手続き、システム管理にかかる費用</li>
          <li>Travel Promotion Fee / 旅行促進手数料($17)：電子渡航認証システムESTAを利用して渡米する観光客の誘致にかかる費用</li>
          <li>General fund of the Treasury / 米国財務省一般基金への拠出分($13)：電子渡航認証システムESTAの運営に関係し、アメリカ財務省の一般基金へ充当される費用</li>
        </ul>
        <p>なお、ESTAの申請が拒否された場合は、ESTA運用手数料($10.27)のみが請求されます。料金はクレジットカードによる前払いとなり、申込が完了し「申請料お支払いページ」にて「今すぐ支払う」ボタンを押した時点で決済が行われます。お支払い方法の詳細については、「支払い方法解説」をご確認ください。</p>
      </section>

      <section id="sec-03" class="fade-up">
        <h2>領収書の発行方法</h2>
        <p>当サイトでは、ESTA申請料の領収書をPDF形式にて発行しております。ご希望の場合は、お問い合わせフォームより、問い合わせ種別「領収書について」を選択し、氏名などの必要事項をご入力のうえ送信してください。</p>
        <p>内容を確認し、ご本人確認が完了次第、領収書をメールにてお送りいたします。なお、領収書の宛名や但し書きにご指定がある場合は、あわせてご記載ください。</p>
      </section>

      <section id="sec-04" class="fade-up">
        <h2>キャンセル方法について</h2>
        <p>お客様からお預かりした情報をもとに、DHS（アメリカ合衆国国土安全保障省）のシステム上でESTA(エスタ)申請の登録を開始する前にキャンセルのご連絡をいただいた場合は、決済手数料900円のみをご負担いただき、差額の金額を返金させていただきます。</p>
        <p>なお、適格性や国籍に関する質問などへのご回答内容によっては、申請手続き継続のために、メールにて追加のご質問をさせていただく場合があります。この場合、お客様からのご回答をいただくまで、申請手続きは一時保留とさせていただきます。また、当サイトからの追加質問に対し、2週間以内にご回答を確認できなかった場合は、申請のお申し込みをキャンセル扱いとさせていただきます。その際も、すでに頂戴している料金から決済手数料900円を差し引いた金額を返金いたします。</p>
        <p>一方で、申請の登録が完了し、当該システムに申請状況が反映された後は、キャンセルおよび返金を承ることはできません。これは、申請状況が「認証保留中」の場合も同様です。DHS（アメリカ合衆国国土安全保障省）のシステム仕様上、申請後に申請内容や認証そのものを取り消すことはできません。</p>
      </section>

      <section id="sec-05" class="fade-up">
        <h2>当サイトの申請代行サービスについて</h2>
        <p>US ESTA Apply Websiteでは、複雑なESTA申請手続きをお客様に代わって代行・サポートいたします。ESTAは、ビザ免除プログラム(VWP)の一環として、日本を含む42か国の市民が、ビザを取得せずに90日以内の観光・商用・乗り継ぎ目的でアメリカへ渡航する際に事前申請が必要な電子渡航認証制度です。</p>
        <h3>サポート内容</h3>
        <ul>
          <li>日本語表記の申請フォームで手続きが可能。申請結果も日本語のメールでご案内</li>
          <li>日本語による丁寧なアドバイスで、申請やお問い合わせを年中無休・24時間体制でサポート</li>
          <li>ESTA申請時のエラーや米国CBP公式サイトのメンテナンス時にも対応可能</li>
          <li>ESTA認証情報の紛失時には、申請ID等を再通知</li>
          <li>お名前・生年月日・当サイト発行の申請ID(33桁の英数字)で、申請状況の照会が可能</li>
          <li>申請内容に誤りがあった場合、1回まで無料で修正を承ります</li>
        </ul>
        <h3>修正方法について</h3>
        <p><strong>氏名またはパスポート番号に誤りがある場合：</strong>お問い合わせフォームより、氏名・メールアドレス・申請ID・修正内容をご入力のうえ送信してください。</p>
        <p><strong>上記以外の内容に誤りがある場合：</strong>お手数ですが、改めて当サイトのESTA申請フォームより再申請をお願いいたします。</p>
        <p>当サイトは、簡潔で分かりやすい申請フォームと記入例の充実が特長です。申請中の不明点やエラーにも、日本語で丁寧に対応いたします。ESTA申請に不安がある方は、ぜひ当サイトの申請代行サービスをご利用ください。</p>
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
