import type { Metadata } from 'next';
import { JsonLd, pageJsonLd, seoMetadata } from '@/lib/seo';

const PAGE_PATH = '/list-esta-guide/passport/';
const PAGE_TITLE = 'ESTAとパスポートの関係 更新時の再申請・残存有効期間の注意点 | US ESTA Apply Website';
const PAGE_DESCRIPTION = 'ESTAとパスポートの関係を解説。パスポート更新後のESTA再申請の必要性、残存有効期間の条件、パスポート番号が変わった場合の対応、ICチップ付きパスポートの必要性などを紹介。';

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
      <a href="/list-esta-guide">ESTA申請ガイド一覧</a><span>›</span>
      <em>ESTAとパスポートの関係 更新時の再申請・残存有効期間の注意点</em>
    </nav>
    <p class="article__eyebrow">Passport &amp; ESTA</p>
    <h1 class="article__title">ESTAとパスポートの関係｜更新時の再申請・残存有効期間の注意点</h1>
    <p class="article__lede">ESTA(エスタ)はパスポートに紐づけられた電子渡航認証であり、パスポートとESTAの関係を正しく理解しておくことが、スムーズなアメリカ渡航には不可欠です。パスポートを更新した場合はESTAの再申請が必要となること、パスポートの残存有効期間に一定の条件があること、ICチップ付きパスポート(eパスポート)が必須であることなど、注意すべきポイントがいくつかあります。本記事では、ESTAとパスポートの関係について、更新時の再申請の手順、残存有効期間の条件、パスポート番号が変わった場合の対応、そしてICチップ付きパスポートの必要性まで、詳しく解説します。</p>
  </div>
</section>

<section class="article-main">
  <div class="article-main__inner">
    <aside class="toc">
      <p class="toc__head">目次</p>
      <ol>
        <li><a href="#sec-01">ESTAとパスポートの紐づけ</a></li>
        <li><a href="#sec-02">パスポート更新後はESTAの再申請が必要</a></li>
        <li><a href="#sec-03">パスポートの残存有効期間の条件</a></li>
        <li><a href="#sec-04">パスポート番号が変わった場合の対応</a></li>
        <li><a href="#sec-05">パスポートの「unknown」表記について</a></li>
        <li><a href="#sec-06">ICチップ付きパスポートの必要性</a></li>
        <li><a href="#sec-07">よくある質問</a></li>
      </ol>
    </aside>

    <article class="article-body">

      <section id="sec-01" class="fade-up">
        <h2>ESTAとパスポートの紐づけ</h2>
        <p>ESTA(エスタ)は、申請時に使用したパスポートのパスポート番号に紐づけられる電子渡航認証です。ESTAの承認情報は、CBP(アメリカ合衆国税関・国境警備局)のシステム上でパスポート番号と関連付けて管理されています。そのため、ESTAとパスポートは一対一の関係にあり、1つのESTAは1つのパスポートに対してのみ有効です。</p>
        <p>アメリカへの入国審査では、パスポートのICチップに記録された情報とCBPのシステムに登録されたESTA情報が照合されます。この照合により、渡航者が有効なESTAを取得しているかどうかが確認されます。そのため、ESTA申請時に使用したパスポートと異なるパスポートで渡航した場合、ESTAの認証情報が照合できず、入国を拒否される可能性があります。</p>
        <p>ESTA承認後に確認できる主なパスポート関連情報は、パスポート番号、パスポート発行国、パスポート有効期限です。これらの情報が実際のパスポートの記載内容と一致していることが、ESTAを有効に利用するための前提条件です。なお、ESTAの有効期限は原則として承認日から2年間ですが、パスポートの有効期限が2年未満の場合は、パスポートの有効期限と同日にESTAも失効します。</p>
        <p>ESTAはパスポートに物理的にスタンプやシールが貼られるものではなく、すべて電子的に管理されています。したがって、パスポート上にESTAの承認を示す印は存在しません。ESTAの承認状況を確認するには、CBP公式サイト(esta.cbp.dhs.gov)にアクセスし、パスポート番号と生年月日などの情報を入力して照会する必要があります。</p>
      </section>

      <section id="sec-02" class="fade-up">
        <h2>パスポート更新後はESTAの再申請が必要</h2>
        <p>パスポートを更新(切替申請)した場合、新しいパスポートにはこれまでとは異なるパスポート番号が割り当てられます。前述のとおり、ESTAはパスポート番号に紐づけられているため、パスポート番号が変わると、それまで取得していたESTAは新しいパスポートでは使用できなくなります。したがって、パスポートを更新した場合は、新しいパスポートの情報を使用してESTAの再申請を行う必要があります。</p>
        <p>パスポートの更新が必要となる主なケースは以下のとおりです。有効期限が近づいている場合(残存有効期間が1年未満になった場合など)、氏名の変更(婚姻・離婚による姓の変更など)、本籍地の都道府県が変更になった場合、パスポートの査証欄の余白がなくなった場合、パスポートを紛失・盗難した場合、パスポートが損傷した場合などです。いずれの場合も、新しいパスポートが発行されるとパスポート番号が変わるため、ESTAの再申請が必要です。</p>
        <p>ESTAの再申請は、CBP公式サイト(esta.cbp.dhs.gov)または ESTA Mobileアプリから行うことができます。再申請の手順は初回の申請と同じで、新しいパスポートの情報を入力して申請手続きを行います。再申請にも1人あたり21ドル(2026年4月現在)の申請手数料が発生します。なお、ESTAには「更新」の制度はなく、再申請は新たな申請として扱われます。</p>
        <p>パスポートを更新してからESTAの再申請を行うまでの間は、有効なESTAがない状態となります。この期間中にアメリカへ渡航することはできませんので、渡航スケジュールに合わせてパスポートの更新とESTAの再申請を計画的に行ってください。ESTAの審査は通常72時間以内に完了しますが、余裕を持って出発日の3日以上前に再申請を行うことをおすすめします。</p>
        <p>なお、パスポートの更新前に取得していたESTAの有効期限が残っていた場合でも、新しいパスポートでは利用できません。古いパスポートのパスポート番号に紐づけられたESTAは、新しいパスポートの発行とともに実質的に無効となります。渡航の際は、必ず新しいパスポートに対応したESTAを取得してから出発してください。</p>
      </section>

      <section id="sec-03" class="fade-up">
        <h2>パスポートの残存有効期間の条件</h2>
        <p>アメリカへの入国にあたっては、パスポートの残存有効期間に関する条件があります。原則として、アメリカに入国する時点で、パスポートの有効期限が滞在予定期間の最終日から6か月以上先であることが求められます。つまり、アメリカに90日間滞在する予定であれば、入国時にパスポートの残存有効期間が少なくとも90日+6か月(約9か月)以上必要です。</p>
        <p>ただし、日本はアメリカとの間で「6か月クラブ(Six-Month Club)」に参加しているため、日本国籍者に対してはこの6か月ルールが免除されています。日本国籍者がアメリカへ渡航する場合、パスポートの有効期限はアメリカ滞在中に有効であれば(つまり、滞在期間をカバーしていれば)入国が認められます。しかし、万が一の延長滞在や緊急事態に備え、十分な残存有効期間があるパスポートで渡航することが望ましいです。</p>
        <p>ESTAとの関連でいえば、ESTAの有効期限は原則として承認日から2年間ですが、パスポートの有効期限が2年未満の場合は、パスポートの有効期限と同日にESTAも失効します。例えば、ESTA申請時にパスポートの残存有効期間が1年6か月であれば、ESTAの有効期限は2年間ではなく1年6か月後の、パスポートの有効期限と同日になります。そのため、ESTAの有効期間を最大限活用したい場合は、パスポートの残存有効期間が2年以上ある状態でESTAを申請することをおすすめします。</p>
        <p>パスポートの残存有効期間が短い場合は、先にパスポートを更新してから新しいパスポートでESTAを申請するとよいでしょう。日本のパスポートは、有効期限の1年前から更新(切替申請)が可能です。パスポートの更新は最寄りのパスポートセンター(旅券事務所)で手続きを行うことができ、通常1週間程度で新しいパスポートが発行されます。</p>
        <p>アメリカ以外の国への乗り継ぎ(トランジット)でアメリカを経由する場合は、乗り継ぎ先の国のパスポート残存有効期間の条件も確認する必要があります。多くの国では入国時に6か月以上の残存有効期間を求めていますので、乗り継ぎを含む旅程全体で必要なパスポートの残存有効期間を事前に確認してください。</p>
      </section>

      <section id="sec-04" class="fade-up">
        <h2>パスポート番号が変わった場合の対応</h2>
        <p>パスポート番号が変わるケースは主に、パスポートの更新(切替申請)、パスポートの紛失・盗難による再発行、氏名変更に伴う新規発行の3つです。いずれの場合も、新しいパスポートには新しいパスポート番号が割り当てられるため、ESTAの再申請が必要となります。</p>
        <p>パスポートの更新による番号変更の場合、古いパスポートのパスポート番号に紐づけられたESTAは、新しいパスポートでは照合できなくなります。CBPのシステムでは、ESTA情報がパスポート番号によって管理されているため、パスポート番号が変わった時点で、古いESTAは実質的に利用できなくなります。新しいパスポートの情報を使用して、改めてESTAの申請手続きを行ってください。</p>
        <p>パスポートの紛失・盗難による再発行の場合も同様です。パスポートを紛失または盗難に遭った場合は、まず最寄りの警察署に届け出を行い、その後パスポートセンター(旅券事務所)で再発行の手続きを行います。海外でパスポートを紛失した場合は、現地の日本大使館または総領事館で「帰国のための渡航書」の発行を受けるか、新たなパスポートの発行申請を行います。新しいパスポートが発行されたら、改めてESTAの再申請を行ってください。</p>
        <p>婚姻や養子縁組などによる氏名変更に伴いパスポートを新規発行した場合も、パスポート番号が変わるためESTAの再申請が必要です。氏名が変更された場合は、新しい氏名でESTAを申請してください。旧姓でESTAが承認されていたとしても、パスポートの氏名と一致しないESTAは入国審査で有効と認められません。渡航前に必ず新しいパスポートに対応したESTAを取得しておきましょう。</p>
        <p>なお、パスポートの査証欄の余白が不足した場合に行う「査証欄増補」では、パスポート番号は変わりません。ただし、2023年3月27日以降、日本のパスポートの査証欄増補制度は廃止されており、査証欄の余白がなくなった場合は新しいパスポートへの切替申請が必要です。切替申請を行うとパスポート番号が変わるため、ESTAの再申請も必要となります。</p>
      </section>

      <section id="sec-05" class="fade-up">
        <h2>パスポートの「unknown」表記について</h2>
        <p>ESTA申請フォームの入力項目の中で、パスポートに関する「unknown(不明)」という表記に関する疑問を持つ方が少なくありません。ここでは、ESTA申請時にパスポート情報を「unknown」と入力してもよいケースと、そうでないケースについて解説します。</p>
        <p>まず、パスポートの基本情報であるパスポート番号、発行日、有効期限、氏名、生年月日、国籍、発行国などは、「unknown」と入力することはできません。これらはESTA申請の必須項目であり、パスポートに記載されている正確な情報を入力する必要があります。パスポートを手元に用意し、記載内容を見ながら入力してください。</p>
        <p>一方、ESTA申請フォームには「National Identification Number(国民識別番号)」という入力欄があります。これは、各国が発行する国民識別番号(例：アメリカの社会保障番号、韓国の住民登録番号など)を入力する欄です。日本にはこれに直接対応する番号がないため、日本国籍者はこの欄に「UNKNOWN」と入力して問題ありません。マイナンバー(個人番号)を入力する必要はありません。</p>
        <p>また、「Personal Identification Number(個人識別番号)」という項目も同様に、日本国籍者は「UNKNOWN」と入力することができます。この項目は、パスポート以外の個人識別番号(運転免許証番号など)を指しており、必須入力項目ではありません。</p>
        <p>ESTA申請フォームで「UNKNOWN」と入力する際は、大文字で「UNKNOWN」と入力してください。「unknown」(小文字)や「N/A」と入力しても受け付けられる場合がありますが、公式の推奨表記は「UNKNOWN」(大文字)です。なお、「UNKNOWN」と入力することが認められている項目であっても、実際に情報が分かっている場合は正確な情報を入力することをおすすめします。</p>
      </section>

      <section id="sec-06" class="fade-up">
        <h2>ICチップ付きパスポートの必要性</h2>
        <p>ESTA(エスタ)を利用してアメリカへ渡航するためには、ICチップ付きのパスポート(eパスポート)が必要です。ICチップ付きパスポートとは、パスポートの表紙にICチップのマーク(長方形の中に円が描かれたマーク)が印字されており、パスポート内部のICチップに顔写真や生体情報が電子的に記録されているパスポートのことです。</p>
        <p>ビザ免除プログラム(VWP)を利用してアメリカへ渡航する場合、ICチップ付きパスポートの所持が必須条件とされています。ESTAはビザ免除プログラムに基づく渡航認証制度であるため、ESTAを申請・利用するにはICチップ付きパスポートが必要です。ICチップが搭載されていないパスポートではESTAの申請ができません。</p>
        <p>日本のパスポートは、2006年(平成18年)3月20日以降に発行されたものにICチップが搭載されています。2006年3月20日以前に発行された日本のパスポートにはICチップが搭載されていないため、該当する方はパスポートを更新する必要があります。ただし、2006年以前に発行されたパスポートの多くは既に有効期限が切れているため、現在有効な日本のパスポートのほとんどにはICチップが搭載されています。</p>
        <p>ICチップ付きパスポートかどうかを確認する方法は、パスポートの表紙(または裏表紙)にICチップのマークが印字されているかを確認することです。ICチップのマークは国際的に共通のデザインで、長方形(本のイメージ)の中に円が描かれた形状です。このマークが表紙に印字されていれば、ICチップ付きパスポートです。</p>
        <p>ICチップには、パスポートの顔写真ページに記載されている情報(氏名、生年月日、国籍、パスポート番号、有効期限など)に加えて、顔画像データが電子的に記録されています。入国審査では、ICチップに記録された情報とパスポートの記載内容、そしてCBPのシステムに登録されたESTA情報が照合されます。これにより、パスポートの偽造や他人のパスポートの不正使用を防止しています。</p>
        <p>ICチップ付きパスポートを取り扱う際の注意点として、パスポートを強く折り曲げたり、磁気を帯びたものの近くに長時間置いたりすることは避けてください。ICチップが損傷すると、入国審査でチップの読み取りができなくなる可能性があります。万が一、ICチップが読み取れなくなった場合は、パスポートの再発行が必要となります。</p>
      </section>

      <section id="sec-07" class="fade-up">
        <h2>よくある質問</h2>
        <div class="faq" style="margin-top:32px">
          <details open>
            <summary>パスポートを更新したらESTAも自動的に更新されますか？</summary>
            <div class="answer"><p>いいえ、パスポートを更新してもESTAは自動的に更新されません。ESTAはパスポート番号に紐づけられているため、パスポートを更新すると(パスポート番号が変わると)、それまで取得していたESTAは新しいパスポートでは使用できなくなります。新しいパスポートの情報を使用して、改めてESTAの再申請を行う必要があります。再申請にも1人あたり21ドルの申請手数料が発生します。</p></div>
          </details>
          <details>
            <summary>パスポートの有効期限が1年未満でもESTA申請はできますか？</summary>
            <div class="answer"><p>はい、パスポートの有効期限が1年未満であってもESTA申請は可能です。ただし、ESTAの有効期限は原則2年間ですが、パスポートの有効期限が2年未満の場合は、パスポートの有効期限と同日にESTAも失効します。例えば、パスポートの有効期限が6か月後の場合、ESTAの有効期限も6か月後になります。ESTAの有効期間を最大限活用したい場合は、先にパスポートを更新し、新しいパスポートでESTAを申請することをおすすめします。</p></div>
          </details>
          <details>
            <summary>旧パスポートのESTAが有効期限内でも、新しいパスポートでは使えませんか？</summary>
            <div class="answer"><p>使えません。ESTAはパスポート番号に紐づけられているため、パスポート番号が変わると、旧パスポートに紐づけられたESTAは新しいパスポートでは照合できません。旧ESTAの有効期限が残っていたとしても、新しいパスポートで渡航する場合は改めてESTAの再申請が必要です。再申請により新たにESTAが承認されると、旧パスポートに紐づけられたESTAは自動的に無効となります。</p></div>
          </details>
          <details>
            <summary>National Identification Numberの欄には何を入力しますか？</summary>
            <div class="answer"><p>日本国籍者の場合、National Identification Number(国民識別番号)の欄には「UNKNOWN」と入力して問題ありません。この項目は、各国が発行する国民識別番号(例：アメリカの社会保障番号、韓国の住民登録番号)を入力する欄です。日本のマイナンバー(個人番号)を入力する必要はありません。「UNKNOWN」(大文字)と入力してください。</p></div>
          </details>
          <details>
            <summary>ICチップが搭載されていないパスポートでESTAを申請できますか？</summary>
            <div class="answer"><p>いいえ、ICチップが搭載されていないパスポートではESTAの申請はできません。ESTAはビザ免除プログラム(VWP)に基づく渡航認証制度であり、VWPの利用にはICチップ付きパスポート(eパスポート)の所持が必須条件です。日本のパスポートは2006年3月20日以降に発行されたものにICチップが搭載されています。ICチップが搭載されていないパスポートをお持ちの場合は、パスポートを更新してICチップ付きパスポートを取得してください。なお、ICチップ付きパスポートを所持していない場合でも、在日米国大使館または総領事館でビザを取得すればアメリカへの渡航は可能です。</p></div>
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
  return (<><JsonLd data={PAGE_JSON_LD} /><div className="redesign-detail" dangerouslySetInnerHTML={{ __html: BODY_HTML }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "パスポートを更新したらESTAも自動的に更新されますか？", "acceptedAnswer": {"@type": "Answer", "text": "いいえ、パスポートを更新してもESTAは自動的に更新されません。ESTAはパスポート番号に紐づけられているため、パスポートを更新すると(パスポート番号が変わると)、それまで取得していたESTAは新しいパスポートでは使用できなくなります。新しいパスポートの情報を使用して、改めてESTAの再申請を行う必要があります。再申請にも1人あたり21ドルの申請手数料が発生します。"}}, {"@type": "Question", "name": "パスポートの有効期限が1年未満でもESTA申請はできますか？", "acceptedAnswer": {"@type": "Answer", "text": "はい、パスポートの有効期限が1年未満であってもESTA申請は可能です。ただし、ESTAの有効期限は原則2年間ですが、パスポートの有効期限が2年未満の場合は、パスポートの有効期限と同日にESTAも失効します。例えば、パスポートの有効期限が6か月後の場合、ESTAの有効期限も6か月後になります。ESTAの有効期間を最大限活用したい場合は、先にパスポートを更新し、新しいパスポートでESTAを申請することをおすすめします。"}}, {"@type": "Question", "name": "旧パスポートのESTAが有効期限内でも、新しいパスポートでは使えませんか？", "acceptedAnswer": {"@type": "Answer", "text": "使えません。ESTAはパスポート番号に紐づけられているため、パスポート番号が変わると、旧パスポートに紐づけられたESTAは新しいパスポートでは照合できません。旧ESTAの有効期限が残っていたとしても、新しいパスポートで渡航する場合は改めてESTAの再申請が必要です。再申請により新たにESTAが承認されると、旧パスポートに紐づけられたESTAは自動的に無効となります。"}}, {"@type": "Question", "name": "National Identification Numberの欄には何を入力しますか？", "acceptedAnswer": {"@type": "Answer", "text": "日本国籍者の場合、National Identification Number(国民識別番号)の欄には「UNKNOWN」と入力して問題ありません。この項目は、各国が発行する国民識別番号(例：アメリカの社会保障番号、韓国の住民登録番号)を入力する欄です。日本のマイナンバー(個人番号)を入力する必要はありません。「UNKNOWN」(大文字)と入力してください。"}}, {"@type": "Question", "name": "ICチップが搭載されていないパスポートでESTAを申請できますか？", "acceptedAnswer": {"@type": "Answer", "text": "いいえ、ICチップが搭載されていないパスポートではESTAの申請はできません。ESTAはビザ免除プログラム(VWP)に基づく渡航認証制度であり、VWPの利用にはICチップ付きパスポート(eパスポート)の所持が必須条件です。日本のパスポートは2006年3月20日以降に発行されたものにICチップが搭載されています。ICチップが搭載されていないパスポートをお持ちの場合は、パスポートを更新してICチップ付きパスポートを取得してください。なお、ICチップ付きパスポートを所持していない場合でも、在日米国大使館または総領事館でビザを取得すればアメリカへの渡航は可能です。"}}]}) }} /></>);
}
