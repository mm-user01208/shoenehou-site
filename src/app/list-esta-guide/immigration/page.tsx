import type { Metadata } from 'next';
import { JsonLd, pageJsonLd, seoMetadata } from '@/lib/seo';

const PAGE_PATH = '/list-esta-guide/immigration/';
const PAGE_TITLE = 'アメリカ入国審査の流れと質問例｜ESTAでの入国手続きガイド【2026年】 | US ESTA Apply Website';
const PAGE_DESCRIPTION = 'アメリカ入国審査の流れを到着から順に解説。よく聞かれる質問と英語フレーズ、必要な持ち物、二次審査になるケース、家族での並び方まで。ESTA渡航者向けの実践ガイドです。';

export const metadata: Metadata = seoMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'アメリカの入国審査で英語が話せないと入国できませんか？', acceptedAnswer: { '@type': 'Answer', text: '話せなくても入国は可能です。渡航目的・滞在先・滞在日数といった定番の質問に短く答えられれば十分で、事前に3〜4個の返答を用意しておくと安心です。滞在先の住所や復路の航空券をスマホですぐ見せられるようにしておき、必要に応じて審査官に通訳の手配を求めることもできます。' } },
    { '@type': 'Question', name: 'ESTAでビジネス（商用）目的の入国はできますか？', acceptedAnswer: { '@type': 'Answer', text: '会議・商談・視察・研修などの短期商用はESTAで入国できます。ただし報酬を伴う就労（現地での労働）は認められていません。審査では「Work（働く）」と誤解されないよう、「I am here for a business meeting.」のように具体的な目的を答えてください。' } },
    { '@type': 'Question', name: '二次審査（別室）に案内されたら入国できないということですか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ、二次審査は追加確認のための手続きで、そのまま入国できるケースも多くあります。過去の滞在期限超過や片道航空券、説明の食い違い、あるいは無作為抽出などがきっかけになります。案内されても落ち着いて、渡航目的や滞在先を正確に伝えてください。' } },
    { '@type': 'Question', name: 'ESTAの承認は印刷して持っていく必要がありますか？', acceptedAnswer: { '@type': 'Answer', text: '印刷は必須ではありません。ESTAはパスポートに電子的に紐づけて管理されるため、審査で紙の提示を求められることは基本的にありません。心配な場合は、承認画面のスクリーンショットを予備として保存しておけば十分です。' } },
  ],
};

const PAGE_JSON_LD = [
  ...pageJsonLd({
    path: PAGE_PATH,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  }),
  FAQ_SCHEMA,
];

const BODY_HTML = `
<section class="article-hero">
  <div class="article-hero__inner">
    <nav class="crumb" aria-label="パンくず">
      <a href="/">HOME</a><span>›</span>
      <a href="/list-esta-guide">ESTA申請ガイド一覧</a><span>›</span>
      <em>アメリカ入国審査の流れと質問例｜ESTAでの入国手続きガイド</em>
    </nav>
    <p class="article__eyebrow">US Immigration</p>
    <h1 class="article__title">アメリカ入国審査の流れと質問例｜ESTAでの入国手続きガイド</h1>
    <p class="article__lede">ESTA(エスタ)で承認を受けても、アメリカへの入国可否は現地の入国審査官が最終的に判断します。本記事では、到着から審査・荷物受け取り・税関までの流れ、審査でよく聞かれる質問と英語フレーズ、必要な持ち物、二次審査になりうるケース、家族での審査の受け方までを解説します。</p>
  </div>
</section>

<section class="article-main">
  <div class="article-main__inner">
    <aside class="toc">
      <p class="toc__head">目次</p>
      <ol>
        <li><a href="#sec-01">入国審査の全体の流れ</a></li>
        <li><a href="#sec-02">審査でよく聞かれる質問と英語フレーズ</a></li>
        <li><a href="#sec-03">入国審査に必要な持ち物</a></li>
        <li><a href="#sec-04">二次審査になりうるケース</a></li>
        <li><a href="#sec-05">子供連れ・家族での審査の受け方</a></li>
        <li><a href="#sec-faq">よくある質問</a></li>
      </ol>
    </aside>

    <article class="article-body">

      <section id="sec-01" class="fade-up">
        <h2>入国審査の全体の流れ</h2>
        <p>アメリカの空港に到着してから入国するまでは、おおむね次の順序で進みます。</p>
        <ol>
          <li><strong>到着・入国審査場へ移動</strong>：飛行機を降り、案内表示に従って入国審査(Immigration / Passport Control)へ向かいます。</li>
          <li><strong>入国審査</strong>：審査官にパスポートを提示し、渡航目的や滞在先などの質問に答えます。指紋の採取や顔写真の撮影が行われる場合があります。</li>
          <li><strong>荷物の受け取り</strong>：審査後、預けた手荷物をバゲージクレーム(Baggage Claim)で受け取ります。</li>
          <li><strong>税関(Customs)</strong>：申告が必要な物品の有無を確認し、税関を通過して到着ロビーへ出ます。</li>
        </ol>
        <p>ESTAはあくまで「渡航認証」であり、入国を保証するものではありません。最終的な入国の可否は、入国審査官の判断によって決定されます。多くの主要空港では、顔認証を使った入国手続き(Simplified Arrival)が導入されています。また、過去にビザ免除プログラム(VWP)でアメリカに渡航したことがあるESTA渡航者は、無料アプリ「<a href="https://www.cbp.gov/travel/us-citizens/mobile-passport-control" target="_blank" rel="noopener noreferrer">Mobile Passport Control(MPC)</a>」を使うと手続きを短縮できる場合があります（初回渡航のVWP利用者は対象外です）。</p>
        <p>まだESTAを申請していない場合は<a href="/list-esta-application/esta-flow/">ESTA申請の流れ（記入例つき）</a>を、承認の状況を確認したい場合は<a href="/list-esta-application/status-check/">ESTA申請状況の確認方法</a>もあわせてご覧ください。</p>

        <h3>税関(Customs)での申告について</h3>
        <p>荷物を受け取った後は税関を通過します。肉類・果物・植物などの飲食物や動植物は持ち込みが制限されている場合があり、該当する物品を持っている場合は正直に申告してください。また、合計1万米ドル（家族やグループで一緒に渡航する場合は合算した金額）を超える現金や小切手などを持ち込む・持ち出す場合は、税関での申告が必要です。申告の要否は品目によって異なり内容も更新されるため、最新の情報は<a href="https://www.cbp.gov/travel" target="_blank" rel="noopener noreferrer">CBP(米国税関・国境警備局)公式サイト</a>で確認してください。</p>
      </section>

      <section id="sec-02" class="fade-up">
        <h2>審査でよく聞かれる質問と英語フレーズ</h2>
        <p>入国審査では、渡航目的・滞在先・滞在日数など、確認される内容はおおむね決まっています。代表的な質問と回答の例です。</p>
        <ul>
          <li><strong>渡航目的：</strong>What is the purpose of your visit?（渡航の目的は？）→ Sightseeing.（観光です）／I am here for a business meeting.（会議・商談のためです）。<br>※ESTAでは報酬を伴う就労はできません。「Work（働く）」と受け取られると入国を断られる恐れがあるため、観光や会議など具体的な目的で答えてください。</li>
          <li><strong>滞在先：</strong>Where are you staying?（どこに滞在しますか？）→ 滞在先ホテル名や住所を伝えます。</li>
          <li><strong>滞在日数：</strong>How long will you stay?（どのくらい滞在しますか？）→ For five days.（5日間です）など。</li>
          <li><strong>同行者：</strong>Are you traveling alone?（一人での渡航ですか？）→ With my family.（家族と一緒です）など。</li>
          <li><strong>初回渡航か：</strong>Is this your first visit to the U.S.?（アメリカは初めてですか？）→ Yes, it is.／No, this is my second time.（いいえ、2回目です）</li>
          <li><strong>職業：</strong>What do you do?（お仕事は？）→ I'm a company employee.（会社員です）／I'm a student.（学生です）など</li>
          <li><strong>帰国予定：</strong>When are you leaving?（いつ帰国しますか？）→ 復路航空券の日付を伝えます。</li>
        </ul>
        <p>回答は短くて構いません。滞在先の住所や復路の航空券を手元に用意しておくと、スムーズに答えられます。</p>
      </section>

      <section id="sec-03" class="fade-up">
        <h2>入国審査に必要な持ち物</h2>
        <p>審査をスムーズに受けるために、次のものを手元（機内持ち込み手荷物）に用意しておきましょう。必須はパスポートのみで、その他は審査を円滑にするための補助です。</p>
        <div class="table-scroll">
          <table>
            <thead>
              <tr><th>持ち物</th><th>要否</th><th>ポイント</th></tr>
            </thead>
            <tbody>
              <tr><td>パスポート</td><td>必須</td><td>ICチップ付きの有効なもの。滞在中に有効期限が切れないか事前に確認しておきます。</td></tr>
              <tr><td>復路（帰国）の航空券</td><td>あると安心</td><td>短期滞在の証明として提示を求められることがあります。</td></tr>
              <tr><td>滞在先の情報</td><td>あると安心</td><td>ホテル名・住所など。ESTA申請時にも入力する項目なので、控えを見せられるようにしておきます。</td></tr>
              <tr><td>ESTA承認の控え</td><td>任意</td><td>ESTAはパスポートに電子的に紐づいて管理されるため、印刷や提示は基本的に不要です。心配な場合の予備として、承認画面のスクリーンショットを保存しておけば十分です。</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="sec-04" class="fade-up">
        <h2>二次審査になりうるケース</h2>
        <p>入国審査官が追加の確認が必要と判断した場合、別室での二次審査(Secondary Inspection)に案内されることがあります。二次審査は「入国拒否」を意味するものではなく、追加の確認を行うための手続きで、そのまま入国できるケースも多くあります。一般的には、次のような場合にきっかけとなることがあります。</p>
        <ul>
          <li>過去にアメリカでの滞在期限超過（オーバーステイ）や入国拒否の履歴がある</li>
          <li>復路（帰国）の航空券がなく、片道航空券のみで渡航している</li>
          <li>滞在日数や渡航目的の説明が一貫していない、書類との食い違いがある</li>
          <li>渡航目的に対して滞在期間が極端に長い、または資金の裏づけが不明確</li>
          <li>申告品や携行品について追加の確認が必要と判断された</li>
          <li>特段の理由なく無作為（ランダム）に選ばれる場合もある</li>
        </ul>
        <p>案内された場合は落ち着いて指示に従い、渡航目的や滞在先、帰国予定などを正確に伝えてください。虚偽の説明はかえって不利になるため避けましょう。</p>
      </section>

      <section id="sec-05" class="fade-up">
        <h2>子供連れ・家族での審査の受け方</h2>
        <p>家族での渡航では、まとめて審査を受けられる場合が多くあります。空港や審査官の案内に従い、家族単位で列に並んでください。子供の分もパスポートとESTA（または該当する渡航認証）が必要です。家族分をまとめて申請する方法は、<a href="/list-esta-guide/group-family/">家族・グループでのESTA申請</a>もあわせてご確認ください。</p>
      </section>

      <section id="sec-faq" class="fade-up">
        <h2>よくある質問</h2>
        <div class="faq" style="margin-top:32px">
          <details open>
            <summary>アメリカの入国審査で英語が話せないと入国できませんか？</summary>
            <div class="answer"><p>話せなくても入国は可能です。渡航目的・滞在先・滞在日数といった定番の質問に短く答えられれば十分で、事前に3〜4個の返答を用意しておくと安心です。滞在先の住所や復路の航空券をスマホですぐ見せられるようにしておき、必要に応じて審査官に通訳の手配を求めることもできます。</p></div>
          </details>
          <details>
            <summary>ESTAでビジネス（商用）目的の入国はできますか？</summary>
            <div class="answer"><p>会議・商談・視察・研修などの短期商用はESTAで入国できます。ただし報酬を伴う就労（現地での労働）は認められていません。審査では「Work（働く）」と誤解されないよう、「I am here for a business meeting.」のように具体的な目的を答えてください。</p></div>
          </details>
          <details>
            <summary>二次審査（別室）に案内されたら入国できないということですか？</summary>
            <div class="answer"><p>いいえ、二次審査は追加確認のための手続きで、そのまま入国できるケースも多くあります。過去の滞在期限超過や片道航空券、説明の食い違い、あるいは無作為抽出などがきっかけになります。案内されても落ち着いて、渡航目的や滞在先を正確に伝えてください。</p></div>
          </details>
          <details>
            <summary>ESTAの承認は印刷して持っていく必要がありますか？</summary>
            <div class="answer"><p>印刷は必須ではありません。ESTAはパスポートに電子的に紐づけて管理されるため、審査で紙の提示を求められることは基本的にありません。心配な場合は、承認画面のスクリーンショットを予備として保存しておけば十分です。</p></div>
          </details>
        </div>
      </section>

    </article>
  </div>
</section>

<section class="cta-strip cta-strip--solid">
  <p class="cta-strip__eyebrow">Start your application</p>
  <h2>アメリカ渡航には<br class="sp-br">ESTAの申請が必要です。</h2>
  <p>申請結果は通常72時間以内に通知されるため、<br class="sp-br">余裕をもってお手続きください。</p>
  <a href="/form/step1" class="cta-btn"><span class="cta-sub">アメリカ入国前に必須の事前手続き</span><span class="cta-main"><span class="cta-txt">ESTA申請をはじめる</span><span class="cta-arrow">→</span></span></a>
</section>

<section class="section section--cream">
  <div class="section__inner fade-up">
    <p class="section__eyebrow">№ — Related Articles</p>
    <h2 class="section__title">関連記事</h2>
    <div class="ornament"><span></span><em></em><span></span></div>
  </div>
  <div class="related fade-up" style="margin-top:56px">
    <a href="/list-esta-guide/hawaii/"><span class="related__media"><img src="/img/related/hawaii.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">01.</span><span class="related__title">ハワイ旅行にESTAは必要？</span><span class="related__more">Read more</span></span></a>
    <a href="/list-esta-guide/guam/"><span class="related__media"><img src="/img/related/01-esta-toha.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">02.</span><span class="related__title">グアム入国にESTAは必要？</span><span class="related__more">Read more</span></span></a>
    <a href="/list-esta-guide/transit/"><span class="related__media"><img src="/img/related/01-esta-toha.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">03.</span><span class="related__title">アメリカ乗り継ぎとESTA</span><span class="related__more">Read more</span></span></a>
    <a href="/list-esta-application/status-check/"><span class="related__media"><img src="/img/related/status-check.jpg" alt="" loading="lazy"></span><span class="related__body"><span class="related__num">04.</span><span class="related__title">ESTA申請状況の確認方法</span><span class="related__more">Read more</span></span></a>
  </div>
</section>
`;

export default function Page() {
  return (<><JsonLd data={PAGE_JSON_LD} /><div className="redesign-detail" dangerouslySetInnerHTML={{ __html: BODY_HTML }} /></>);
}
