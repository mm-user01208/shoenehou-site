import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '利用規約 | US ESTA Apply Website',
  description: 'US ESTA Apply Websiteの利用規約です。サービスの利用条件、禁止事項、料金・支払方法、キャンセル・返金条件、責任の範囲などを定めています。',
};

const BODY_HTML = `<div class="redesign-detail">
<section class="article-hero">
  <div class="article-hero__inner">
    <nav class="crumb">
      <a href="/">HOME</a><span>›</span>
      <a href="/list-site-information">サイト情報一覧</a><span>›</span>
      <em>利用規約</em>
    </nav>
    <p class="article__eyebrow">Terms of Service</p>
    <h1 class="article__title">利用規約</h1>
    <p class="article__lede">本利用規約は当サイトが提供するESTA申請代行サービスの利用条件を定めるものです。<br>当サイトをご利用いただく場合、本規約の内容に同意いただいたものとみなします。</p>
  </div>
</section>

<section class="article-main">
  <div class="article-main__inner">
    <aside class="toc">
      <p class="toc__head">目次</p>
      <ol>
        <li><a href="#sec-01">適用範囲</a></li>
        <li><a href="#sec-02">禁止事項</a></li>
        <li><a href="#sec-03">個人情報の取扱い</a></li>
        <li><a href="#sec-04">サービス内容</a></li>
        <li><a href="#sec-05">料金および支払方法</a></li>
        <li><a href="#sec-06">キャンセルおよび返金</a></li>
        <li><a href="#sec-07">責任の範囲</a></li>
        <li><a href="#sec-08">利用制限</a></li>
        <li><a href="#sec-09">知的財産権</a></li>
        <li><a href="#sec-10">お問い合わせ</a></li>
      </ol>
    </aside>
    <article class="article-body">
      <section id="sec-01" class="fade-up">
        <h2>第1条（適用範囲）</h2>
        <p>本規約は、当サイトが提供するすべてのサービスおよび関連情報の利用に適用されます。利用者は、当サイトの利用にあたり、法令および本規約を遵守するものとします。</p>
      </section>
      <section id="sec-02" class="fade-up">
        <h2>第2条（禁止事項）</h2>
        <p>利用者は、以下の行為を行ってはなりません。</p>
        <ul>
          <li>不正または不当な目的で当サイトを利用する行為</li>
          <li>虚偽または第三者の情報を用いた申請</li>
          <li>当サイトの運営を妨害する行為</li>
          <li>その他、当サイトが不適切と判断する行為</li>
        </ul>
      </section>
      <section id="sec-03" class="fade-up">
        <h2>第3条（個人情報の取扱い）</h2>
        <p>当サイトにおける個人情報の取扱いについては、別途定める「<a href="/list-site-information/privacy-policy">個人情報保護に関する基本方針</a>」に従って管理されます。利用者は、本規約とあわせて当該方針の内容についても同意したものとみなします。</p>
      </section>
      <section id="sec-04" class="fade-up">
        <h2>第4条（サービス内容）</h2>
        <ul>
          <li>当サイトは、利用者に代わりESTA（エスタ）の申請手続きを代行するサービスを提供します。</li>
          <li>1回のお申し込みにつき、申請対象者は1名とし、複数名の場合は人数分のお申し込みが必要となります。</li>
          <li>航空券、宿泊施設等の手配業務は行っておりません。</li>
          <li>ESTA申請システムの仕様上、申請手続き中に認証コード等を受信する必要があるため、米国DHS（アメリカ合衆国国土安全保障省）のシステムに登録するメールアドレスには、当サイトの管理するメールアドレスを使用します。申請完了後に表示される登録メールアドレスが当サイトのものとなる点について、あらかじめご了承ください。なお、申請完了後の登録メールアドレスの変更は、利用者ご自身で行っていただきます。</li>
          <li>サービスは、申請のご依頼および料金のお支払いが確認された時点で開始されます。</li>
          <li>申請結果は、当サイトよりメールにて通知し、当該通知をもって申請代行業務の完了とします。通常は翌営業日以内にご案内しますが、最大72時間を要する場合があります。</li>
          <li>申請状況確認ページは、当サイトを通じて申請された利用者のみが利用でき、照会可能期間は申込日から90日間とします。</li>
        </ul>
      </section>
      <section id="sec-05" class="fade-up">
        <h2>第5条（料金および支払方法）</h2>
        <ul>
          <li>当サイト所定の申請手数料24,200円（税込）には、米国国土安全保障省および旅行促進法に基づく費用として40.27米ドルが含まれます。</li>
          <li>料金はクレジットカードによる事前決済とし、申込手続き完了時点で支払いが確定します。</li>
          <li>利用可能なクレジットカードは、Visa、Mastercard、JCB、American Express、Diners Clubです。</li>
        </ul>
      </section>
      <section id="sec-06" class="fade-up">
        <h2>第6条（キャンセルおよび返金）</h2>
        <ul>
          <li>ESTA申請代行業務が完了した後のキャンセルはお受けできません。</li>
          <li>米国DHSのシステム上で申請登録を開始する前に、当サイト所定の方法によりキャンセルの申し出があった場合は決済手数料900円を差し引いた金額を返金します。</li>
          <li>申請内容の確認過程において、適格性や国籍等に関する追加確認が必要となる場合、当サイトよりメールで質問を行うことがあります。この場合、利用者からの回答があるまで申請手続きを一時停止します。</li>
          <li>当サイトからの問い合わせ後、2週間を経過しても回答が確認できない場合は、申込みをキャンセル扱いとし、決済手数料900円を控除した金額を返金します。</li>
          <li>米国DHSのシステムに申請情報が登録された後は、申請状況が「認証保留中」の場合を含め、キャンセルおよび返金には応じられません。</li>
        </ul>
      </section>
      <section id="sec-07" class="fade-up">
        <h2>第7条（責任の範囲）</h2>
        <p>当サイトのサービス利用に関連して利用者に損害が生じた場合、当サイトは誠意をもって対応しますが、その賠償責任の上限は、利用者が当サイトに支払ったサービス料金の総額を限度とします。</p>
      </section>
      <section id="sec-08" class="fade-up">
        <h2>第8条（利用制限）</h2>
        <p>利用者が本規約に違反した場合、または当サイトが不適切な利用と判断した場合、事前の通知なく当サイトへのアクセス制限やサービス提供の停止等の措置を講じることがあります。</p>
      </section>
      <section id="sec-09" class="fade-up">
        <h2>第9条（知的財産権）</h2>
        <p>当サイトに掲載されている文章、画像、デザイン、システム等に関する著作権およびその他の知的財産権は、当サイトまたは正当な権利者に帰属します。利用者は、これらを無断で複製、改変、配布、公開してはなりません。</p>
      </section>
      <section id="sec-10" class="fade-up">
        <h2>第10条（お問い合わせ）</h2>
        <p>当サイトのサービスに関するご質問やご連絡は、<a href="/list-site-information/contact">当サイトのお問い合わせフォーム</a>より受け付けています。</p>
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
</div><!--$--><!--/$-->`;

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />;
}
