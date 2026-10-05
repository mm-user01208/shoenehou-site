import type { Metadata } from 'next';
import { JsonLd, pageJsonLd, seoMetadata } from '@/lib/seo';

const PAGE_PATH = '/list-esta-application/esta/';
const PAGE_TITLE = 'ESTA（エスタ）の対象者・申請要件｜ビザ免除プログラム（VWP）参加国一覧と対象外になるケース【2026年】 | US ESTA Apply Website';
const PAGE_DESCRIPTION = 'ESTAを申請できるのはビザ免除プログラム（VWP）参加国の市民で、90日以内の観光・商用・乗り継ぎが目的の方です。参加国一覧、申請要件、留学・就労や渡航歴など対象外になるケース、パスポートの条件を解説。申請手順は別記事で画面付きで案内。';

export const metadata: Metadata = {
  ...seoMetadata({ path: PAGE_PATH, title: PAGE_TITLE, description: PAGE_DESCRIPTION }),
};

const PAGE_JSON_LD = pageJsonLd({ path: PAGE_PATH, title: PAGE_TITLE, description: PAGE_DESCRIPTION });

const BODY_HTML = `<style>.article__title{white-space:normal!important;line-height:1.35}.kv{width:100%;border-collapse:collapse;margin:14px 0 22px}.kv th,.kv td{border:1px solid var(--line);padding:9px 12px;text-align:left;vertical-align:top;font-size:14.5px;line-height:1.7}.kv th{background:#f4f5f8;font-weight:700}</style>
<section class="article-hero">
  <div class="article-hero__inner">
    <nav class="crumb" aria-label="パンくず">
      <a href="/">HOME</a><span>›</span>
      <a href="/list-esta-application">ESTA申請関連情報一覧</a><span>›</span>
      <em>ESTA（エスタ）の対象者・申請要件｜VWP参加国一覧と対象外になるケース</em>
    </nav>
    <p class="article__eyebrow">ESTA Eligibility</p>
    <h1 class="article__title">ESTA（エスタ）の対象者・申請要件｜VWP参加国一覧と対象外になるケース</h1>
    <p class="article__lede">このページはESTAの<strong>対象者と要件</strong>をまとめた参照ページです。制度の概要と申請手順は <a href="/list-esta-application/esta-flow/">ESTA（エスタ）とは？申請方法を公式サイトの全画面・記入例付きで解説</a> をご覧ください。公式の申請先は <a href="https://esta.cbp.dhs.gov/" target="_blank" rel="noopener noreferrer">esta.cbp.dhs.gov</a>（申請料$40.27）です。</p>
    <div style="margin-top:28px;background:var(--paper);border:1px solid var(--line);padding:24px 26px">
      <p style="margin:0 0 16px;font-family:var(--sans);color:var(--gold);letter-spacing:.22em;text-transform:uppercase;font-size:12px;font-weight:700">目的別に読む</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:0 28px">
        <a href="/list-esta-application/esta-flow/" style="display:flex;align-items:center;gap:12px;padding:13px 0;border-bottom:1px solid var(--line-soft);color:var(--navy);font-family:var(--serif);font-weight:600;font-size:14px;text-decoration:none"><span style="color:var(--gold);flex-shrink:0">→</span>申請方法・手順を見る</a>
        <a href="/list-esta-application/esta-flow/" style="display:flex;align-items:center;gap:12px;padding:13px 0;border-bottom:1px solid var(--line-soft);color:var(--navy);font-family:var(--serif);font-weight:600;font-size:14px;text-decoration:none"><span style="color:var(--gold);flex-shrink:0">→</span>記入例つきで申請したい</a>
        <a href="/list-esta-application/expiration-date/" style="display:flex;align-items:center;gap:12px;padding:13px 0;border-bottom:1px solid var(--line-soft);color:var(--navy);font-family:var(--serif);font-weight:600;font-size:14px;text-decoration:none"><span style="color:var(--gold);flex-shrink:0">→</span>有効期限を確認したい</a>
        <a href="/list-esta-guide/cost/" style="display:flex;align-items:center;gap:12px;padding:13px 0;border-bottom:1px solid var(--line-soft);color:var(--navy);font-family:var(--serif);font-weight:600;font-size:14px;text-decoration:none"><span style="color:var(--gold);flex-shrink:0">→</span>料金を知りたい</a>
        <a href="/list-esta-application/status-check/" style="display:flex;align-items:center;gap:12px;padding:13px 0;border-bottom:1px solid var(--line-soft);color:var(--navy);font-family:var(--serif);font-weight:600;font-size:14px;text-decoration:none"><span style="color:var(--gold);flex-shrink:0">→</span>申請状況を確認したい</a>
        <a href="/list-esta-guide/group-family/" style="display:flex;align-items:center;gap:12px;padding:13px 0;border-bottom:1px solid var(--line-soft);color:var(--navy);font-family:var(--serif);font-weight:600;font-size:14px;text-decoration:none"><span style="color:var(--gold);flex-shrink:0">→</span>家族分をまとめて申請したい</a>
        <a href="/list-esta-guide/hawaii/" style="display:flex;align-items:center;gap:12px;padding:13px 0;border-bottom:1px solid var(--line-soft);color:var(--navy);font-family:var(--serif);font-weight:600;font-size:14px;text-decoration:none"><span style="color:var(--gold);flex-shrink:0">→</span>ハワイに行く</a>
        <a href="/list-esta-guide/guam/" style="display:flex;align-items:center;gap:12px;padding:13px 0;border-bottom:1px solid var(--line-soft);color:var(--navy);font-family:var(--serif);font-weight:600;font-size:14px;text-decoration:none"><span style="color:var(--gold);flex-shrink:0">→</span>グアムに行く</a>
              <a href="https://esta.cbp.dhs.gov/" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;gap:12px;padding:13px 0;border-bottom:1px solid var(--line-soft);color:var(--navy);font-family:var(--serif);font-weight:600;font-size:14px;text-decoration:none"><span style="color:var(--gold);flex-shrink:0">→</span>公式サイトで自分で申請する（esta.cbp.dhs.gov）</a>
      </div>
    </div>
  </div>
</section>
<section class="article-main">
  <div class="article-main__inner">
    <aside class="toc"><p class="toc__head">目次</p><ol><li><a href="#sec-01">ESTAの申請対象者</a></li><li><a href="#sec-02">ビザ免除プログラム（VWP）参加国一覧</a></li><li><a href="#sec-03">ESTAの申請要件</a></li><li><a href="#sec-04">対象外になるケースとビザが必要な場合</a></li><li><a href="#sec-05">必要な書類（要約）</a></li><li><a href="#sec-06">よくある質問</a></li></ol></aside>
    <article class="article-body">
      <section id="sec-01" class="fade-up"><h2>ESTAの申請対象者</h2><p>ESTAは、日本を含む「ビザ免除プログラム(VWP)」参加国の市民が申請対象となり、90日以内の観光、短期商用、または乗り継ぎを目的としてアメリカへ渡航する場合に限り利用できます。ただし、アメリカでの留学、就労、永住を目的とした渡航はESTAの利用対象外となるため、在日米国大使館および総領事館にて、渡航目的に応じたビザの取得をご検討ください。ビザの申請には、必要書類の準備や大使館・総領事館での面接が必要となり、申請から発給までに1か月以上かかる場合があるため、早めの手続きをお勧めします。なお、ESTAを取得できないまま渡航日を迎えた場合は、アメリカへの入国や飛行機への搭乗を拒否されるため注意が必要です。</p>

        

        <p>なお、VWP参加国の市民であっても、アメリカが指定する伝染病に罹患している方や、過去に重大な犯罪歴がある方は、ESTAの申請対象外となります。</p></section>
      <section id="sec-02" class="fade-up"><h2>ビザ免除プログラム（VWP）参加国一覧</h2><table class="kv"><thead><tr><th>国名（五十音順）</th><th>英語名</th></tr></thead><tbody><tr><td>アイスランド</td><td>Iceland</td></tr><tr><td>アイルランド</td><td>Ireland</td></tr><tr><td>アンドラ</td><td>Andorra</td></tr><tr><td>イギリス</td><td>United Kingdom</td></tr><tr><td>イスラエル</td><td>Israel</td></tr><tr><td>イタリア</td><td>Italy</td></tr><tr><td>エストニア</td><td>Estonia</td></tr><tr><td>オランダ</td><td>Netherlands</td></tr><tr><td>オーストラリア</td><td>Australia</td></tr><tr><td>オーストリア</td><td>Austria</td></tr><tr><td>カタール</td><td>Qatar</td></tr><tr><td>韓国</td><td>South Korea</td></tr><tr><td>ギリシャ</td><td>Greece</td></tr><tr><td>クロアチア</td><td>Croatia</td></tr><tr><td>サンマリノ</td><td>San Marino</td></tr><tr><td>シンガポール</td><td>Singapore</td></tr><tr><td>スイス</td><td>Switzerland</td></tr><tr><td>スウェーデン</td><td>Sweden</td></tr><tr><td>スペイン</td><td>Spain</td></tr><tr><td>スロバキア</td><td>Slovakia</td></tr><tr><td>スロベニア</td><td>Slovenia</td></tr><tr><td>台湾</td><td>Taiwan</td></tr><tr><td>チェコ</td><td>Czech Republic</td></tr><tr><td>チリ</td><td>Chile</td></tr><tr><td>デンマーク</td><td>Denmark</td></tr><tr><td>ドイツ</td><td>Germany</td></tr><tr><td>日本</td><td>Japan</td></tr><tr><td>ニュージーランド</td><td>New Zealand</td></tr><tr><td>ノルウェー</td><td>Norway</td></tr><tr><td>ハンガリー</td><td>Hungary</td></tr><tr><td>フィンランド</td><td>Finland</td></tr><tr><td>フランス</td><td>France</td></tr><tr><td>ブルネイ</td><td>Brunei</td></tr><tr><td>ベルギー</td><td>Belgium</td></tr><tr><td>ポルトガル</td><td>Portugal</td></tr><tr><td>ポーランド</td><td>Poland</td></tr><tr><td>マルタ</td><td>Malta</td></tr><tr><td>モナコ</td><td>Monaco</td></tr><tr><td>ラトビア</td><td>Latvia</td></tr><tr><td>リトアニア</td><td>Lithuania</td></tr><tr><td>リヒテンシュタイン</td><td>Liechtenstein</td></tr><tr><td>ルクセンブルク</td><td>Luxembourg</td></tr></tbody></table><p>※ 2026年10月5日 在日米国大使館／CBPの公開情報をもとに確認（全42か国）。</p></section>
      <section id="sec-03" class="fade-up"><h2>ESTAの申請要件</h2><ul class="bullets">
          <li>上記の“ビザ免除プログラム(VWP)”参加国の市民であること</li>
          <li>アメリカ滞在期間をカバーする有効期限のあるICチップ付きパスポートを所持していること（日本は6か月クラブ参加国のため6か月ルール免除。→<a href="/list-esta-guide/passport/">パスポートの条件</a>）</li>
          <li>渡航目的が、短期観光、短期商用、乗り継ぎのいずれかに該当すること</li>
          <li>アメリカでの滞在期間が90日以内であること</li>
          <li>過去に重大な犯罪歴やアメリカでのオーバーステイ歴がないこと</li>
          <li>精神疾患や、アメリカが指定する伝染病に罹患していないこと</li>
          <li>2011年3月1日以降にイラク、北朝鮮、イラン、シリア、スーダン、ソマリア、キューバ、イエメンへの渡航または滞在歴がないこと</li>
        </ul></section>
      <section id="sec-04" class="fade-up"><h2>対象外になるケースとビザが必要な場合</h2>
        <ul class="bullets">
          <li>留学、就労、永住などを目的とした渡航（渡航目的に応じたビザの取得が必要です）</li>
          <li>アメリカが指定する伝染病に罹患している方や、過去に重大な犯罪歴がある方</li>
          <li>2011年3月1日以降にイラク、北朝鮮、イラン、シリア、スーダン、ソマリア、キューバ、イエメンへの渡航または滞在歴がある方</li>
          <li>ESTAの審査結果が「渡航認証拒否」となった方（在日米大使館および総領事館にて渡航目的に応じたビザの取得をご検討ください）</li>
        </ul>
        <p>ビザの申請には、必要書類の準備や大使館・総領事館での面接が必要となり、申請から発給までに1か月以上かかる場合があるため、早めの手続きをお勧めします。なお、ESTAを取得できないまま渡航日を迎えた場合は、アメリカへの入国や飛行機への搭乗を拒否されるため注意が必要です。</p>
        <p>婚姻などで改姓し新たなパスポートを取得した際は、新しいパスポート番号でESTAを再申請する必要があります。その場合、既存のESTA認証情報は無効となりますのでご注意ください。</p>
      </section>
      <section id="sec-05" class="fade-up"><h2>必要な書類（要約）</h2>
        <p>ESTAの申請には、以下の書類が必要です。</p>
        <div class="doc-list">
          <div class="doc-list__item">
            <div class="doc-list__icon">01</div>
            <p>ICチップが搭載された有効なパスポート(アメリカ滞在期間をカバーする有効期限のあるもの。日本は6か月クラブ参加国のため6か月ルール免除)</p>
          </div>
          <div class="doc-list__item">
            <div class="doc-list__icon">02</div>
            <p>申請料の支払いに使用するクレジットカード</p>
          </div>
          <div class="doc-list__item">
            <div class="doc-list__icon">03</div>
            <p>通知を受け取るためのメールアドレス</p>
          </div>
        </div>
        <p>申請の手順（公式サイトの全画面・記入例付き）は <a href="/list-esta-application/esta-flow/">こちら</a> をご覧ください。有効期限と申請タイミングについても同ページで解説しています（<a href="/list-esta-application/expiration-date/">有効期限の詳細</a>）。</p>
      </section>
      <section id="sec-06" class="fade-up"><h2>よくある質問</h2>
        <h3>日本以外のVWP参加国の家族も同じ手続きですか？</h3>
        <p>はい。日本を含むVWP参加国の市民であれば、同じ手続きでESTAを申請します。年齢を問わず全員分の申請が必要で、家族やグループで渡米する場合は、忘れずに全員分の申請を行ってください（<a href="/list-esta-guide/group-family/">家族・グループでの申請</a>）。</p>
        <h3>ビザとESTAのどちらを選べばよいですか？</h3>
        <p>90日以内の観光・商用・乗り継ぎであればESTA、留学・就労・永住や90日を超える滞在であればビザが必要です。両者の違いは <a href="/list-esta-application/esta-flow/#sec-04">ESTAとビザの違い</a> で比較しています。</p>
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
