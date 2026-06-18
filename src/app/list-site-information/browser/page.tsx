import type { Metadata } from 'next';
import { JsonLd, pageJsonLd, seoMetadata } from '@/lib/seo';

const PAGE_PATH = '/list-site-information/browser/';
const PAGE_TITLE = '推奨ブラウザについて | US ESTA Apply Website';
const PAGE_DESCRIPTION = '本サイトを快適にご利用いただくため、推奨ブラウザをご案内しております。推奨環境以外では、一部機能が正しく動作しない場合があります。';

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
    <nav class="crumb">
      <a href="/">HOME</a><span>›</span>
      <a href="/list-site-information">サイト情報一覧</a><span>›</span>
      <em>推奨ブラウザ</em>
    </nav>
    <p class="article__eyebrow">Supported Browsers</p>
    <h1 class="article__title">推奨ブラウザ</h1>
    <p class="article__lede">本サイトを快適かつ安全にご利用いただくための推奨ブラウザ環境・必要設定・トラブル対処をまとめてご案内します。</p>
  </div>
</section>

<section class="article-main">
  <div class="article-main__inner">
    <aside class="toc">
      <p class="toc__head">目次</p>
      <ol>
        <li><a href="#sec-01">PC・デスクトップ向け推奨ブラウザ</a></li>
        <li><a href="#sec-02">スマートフォン・タブレット向け推奨ブラウザ</a></li>
        <li><a href="#sec-03">必要なブラウザ設定</a></li>
        <li><a href="#sec-04">推奨環境外でご利用の場合</a></li>
        <li><a href="#sec-05">表示・動作トラブルの対処</a></li>
        <li><a href="#sec-06">サポート対象外のブラウザ</a></li>
      </ol>
    </aside>
    <article class="article-body">
      <section id="sec-01" class="fade-up">
        <h2>PC・デスクトップ向け推奨ブラウザ</h2>
        <p>当サイトをPCでご利用いただく際は、下記いずれかの最新バージョンを推奨いたします。これらのブラウザでは、申請フォーム・決済画面・申請状況確認ページを含むすべての機能が正常に動作するよう動作確認を行っています。</p>
        <ul>
          <li>Google Chrome（最新版）</li>
          <li>Microsoft Edge（最新版）</li>
          <li>Mozilla Firefox（最新版）</li>
          <li>Safari（macOS Big Sur 以降の最新版）</li>
        </ul>
        <p>各ブラウザは公式サイトから最新バージョンのダウンロードまたはアップデートが可能です。古いバージョンのままご利用の場合、フォーム送信やクレジットカード決済時にエラーが発生する可能性があります。</p>
      </section>
      <section id="sec-02" class="fade-up">
        <h2>スマートフォン・タブレット向け推奨ブラウザ</h2>
        <p>スマートフォンやタブレットからご利用の場合は、下記の環境を推奨します。</p>
        <ul>
          <li>iOS Safari（iOS 15 以降）</li>
          <li>Android Chrome（最新版／Android 9.0 以降）</li>
          <li>iPad Safari（iPadOS 15 以降）</li>
        </ul>
        <p>古いiOSやAndroidのバージョンでは、暗号化通信に必要なTLSプロトコルへの対応が不十分で、決済処理が正常に行えない場合があります。OS自体のアップデートもあわせてご確認ください。</p>
      </section>
      <section id="sec-03" class="fade-up">
        <h2>必要なブラウザ設定</h2>
        <p>申請手続きおよび決済を正常に完了いただくため、お使いのブラウザで以下の設定が有効になっていることをご確認ください。</p>
        <ul>
          <li><strong>JavaScript の有効化</strong> — 申請フォームの入力チェックや決済画面の表示にJavaScriptを使用しています。</li>
          <li><strong>Cookie の有効化</strong> — ログイン状態の保持、申請内容の途中保存、決済セッションの維持にCookieを使用します。</li>
          <li><strong>TLS 1.2 以上</strong> — 通信の暗号化に必要な最小バージョンです。最新版のブラウザであれば自動的に対応しています。</li>
          <li><strong>ポップアップブロックの一時解除</strong> — 決済画面が新規ウィンドウで開く場合があるため、当サイトのみブロックを解除してください。</li>
        </ul>
      </section>
      <section id="sec-04" class="fade-up">
        <h2>推奨環境外でご利用の場合</h2>
        <p>推奨環境外のブラウザでも閲覧自体は可能ですが、以下のような不具合が発生する可能性があります。</p>
        <ul>
          <li>申請フォームの入力欄が正しく表示されない</li>
          <li>クレジットカード決済画面が開かない、または送信が完了しない</li>
          <li>申請状況確認ページで結果が取得できない</li>
          <li>レイアウトの崩れや一部の画像・アイコンが表示されない</li>
        </ul>
        <p>ご不便をおかけしないため、申請手続き時は推奨環境でのアクセスをお願いいたします。</p>
      </section>
      <section id="sec-05" class="fade-up">
        <h2>表示・動作トラブルの対処</h2>
        <p>推奨環境でご利用中にもかかわらず表示が崩れる、ボタンが反応しない等の症状が発生した場合は、下記の手順をお試しください。</p>
        <ul>
          <li>ブラウザを最新バージョンへ更新する</li>
          <li>ブラウザのキャッシュおよびCookieを削除する</li>
          <li>シークレットモード／プライベートブラウジングで開き直す</li>
          <li>機能拡張（アドブロック等）を一時的に無効化する</li>
          <li>別の推奨ブラウザに切り替えて再度アクセスする</li>
          <li>セキュリティソフトの設定で当サイトのアクセスがブロックされていないか確認する</li>
        </ul>
        <p>上記をお試しいただいても改善しない場合は、<a href="/contact/">お問い合わせフォーム</a>より、ご利用のOS・ブラウザ・発生状況をお知らせください。</p>
      </section>
      <section id="sec-06" class="fade-up">
        <h2>サポート対象外のブラウザ</h2>
        <p>下記のブラウザはサポートを終了しており、当サイトでの動作確認も行っておりません。これらをご利用中の場合は推奨ブラウザへの切り替えをお願いいたします。</p>
        <ul>
          <li>Internet Explorer（全バージョン）</li>
          <li>サポート終了済みの旧バージョン Chrome / Edge / Firefox / Safari</li>
          <li>各種ガラケー・フィーチャーフォン向け簡易ブラウザ</li>
        </ul>
        <p>サポート対象外のブラウザでは申請フォームの送信や決済が完了できない場合があります。あらかじめご了承ください。</p>
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
`;

export default function Page() {
  return (<><JsonLd data={PAGE_JSON_LD} /><div className="redesign-detail" dangerouslySetInnerHTML={{ __html: BODY_HTML }} /></>);
}
