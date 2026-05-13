import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ESTA(エスタ)アプリでの申請方法【2026年最新】CBP公式アプリの使い方ガイド',
  description: 'ESTA公式アプリ(CBP ESTA Mobile)での申請方法をスクリーンショット付きで解説。iPhone・Android対応。ダウンロード手順・必要書類・パスポートスキャン方法・アプリとWebの違いまで網羅。',
  alternates: { canonical: 'https://shoenehou-online.jp/list-esta-application/application/' },
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "ESTAアプリとは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ESTA Mobile は、米国税関・国境警備局（CBP）が提供する公式アプリです。2023年6月21日より提供開始され、スマートフォンやタブレットからESTA申請・支払い・認証状況の確認まで完結できます。iOS・Android両方に対応しています。"
            }
          },
          {
            "@type": "Question",
            "name": "ESTAアプリはどこからダウンロードできますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "iPhoneの場合はApp Store、Androidの場合はGoogle Playストアから「ESTA」と検索し、「U.S. Customs and Border Protection」が提供元のアプリをインストールしてください。iOSは14.0以降、Androidは8.0以降に対応しています。"
            }
          },
          {
            "@type": "Question",
            "name": "ESTAアプリでの申請に必要なものは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "申請者本人のスマートフォン、ICチップ付きで有効期限内のパスポート、有効なメールアドレス、クレジットカードまたはデビットカードが必要です。アプリではパスポート顔写真ページの撮影・スキャンと顔写真の撮影が必須となります。"
            }
          },
          {
            "@type": "Question",
            "name": "ESTAアプリとWebサイトからの申請の違いは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "アプリではパスポート情報をカメラで撮影するだけで自動的に読み取られ、手入力の必要がなく入力ミスを軽減できます。また、自動翻訳機能で日本語に対応しているため、英語が苦手な方でも内容を理解しながら申請を進められます。"
            }
          },
          {
            "@type": "Question",
            "name": "ESTAアプリでパスポートが読み取れない場合はどうすればいいですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "パスポートの読み取りに失敗する場合は、パスポートカバーを外す、明るい場所で撮影する、パスポートの上でスマートフォンをゆっくり動かすなどをお試しください。それでも読み取れない場合は、公式ウェブサイトからの申請をご検討ください。"
            }
          },
          {
            "@type": "Question",
            "name": "ESTAアプリがクラッシュ・強制終了する場合の対処法は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "アプリが強制終了する場合は、アプリを最新バージョンに更新する、端末のOSを最新にする、アプリを再インストールする、端末の再起動を試すなどの方法をお試しください。それでも解決しない場合は、公式ウェブサイトからの申請が可能です。"
            }
          },
          {
            "@type": "Question",
            "name": "ESTAアプリでグループ申請はできますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "いいえ、ESTAアプリではグループ申請に対応していません。アプリでは1人ずつ個別に申請・決済する必要があります。家族や団体でまとめて申請したい場合は、公式ウェブサイトのグループ申請機能（最大50人）をご利用ください。"
            }
          },
          {
            "@type": "Question",
            "name": "ESTAアプリで顔写真がうまく撮影できない場合はどうすればいいですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "顔写真の撮影がうまくいかない場合は、明るい場所で撮影する、帽子やサングラスを外す、正面を向く、背景を無地にする、インカメラのレンズを拭くなどをお試しください。枠内に顔全体が収まるよう位置を調整してください。"
            }
          }
        ]
      }) }} />
      <div className="bg-white rounded-lg shadow-sm p-6 md:p-10">
      <Breadcrumb items={[{"label": "ESTA申請関連情報一覧", "href": "/list-esta-application"}, {"label": "アプリを使ったESTA(エスタ)申請方法を解説"}]} />
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-2 pb-3 border-b-2 border-[#c41e3a]">アプリを使ったESTA(エスタ)申請方法を解説</h1>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)は、アメリカ国土安全保障省の管轄下にある税関・国境警備局(CBP)によって運営されているため、申請フォームの項目はすべて英語(ローマ字)で入力する必要があります。なかでも出生地や住所の入力は、日本語表記をどのように英語に変換すればよいか迷いやすい項目です。入力に誤りがあると、審査の遅延や再申請が必要になる可能性もあるため、正確な入力が求められます。本記事では、ESTA申請フォームにおける出生地や住所の正しい入力方法について、具体例を交えながら詳しく解説します。</p>
        <div className="bg-[#f8fafc] border border-gray-200 rounded-lg p-5 my-6">
          <p className="text-base font-bold text-[#1a2744] mb-3 flex items-center gap-2"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>目次</p>
          <ul className="space-y-2 text-sm">
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-1" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">ESTAのアプリとは？</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-compare" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">アプリ申請とWeb申請の比較</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-2" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">ESTAアプリのダウンロード方法・手順</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-device" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">対応デバイス・OS要件一覧</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-3" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">ESTAアプリでの申請に必要な書類・情報</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-4" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">ESTAアプリでの申請方法・手順（ステップ別詳細）</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-5" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">ESTA認証状況の確認方法</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-6" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">ESTAアプリ利用時の注意点</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-trouble" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">トラブルシューティング</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-7" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">ESTAアプリに関するFAQ</a></li>
          </ul>
        </div>

        <h2 id="section-1" className="text-xl font-bold text-[#1a2744] border-b-2 border-gray-200 pb-2 mt-10 mb-4">ESTAのアプリとは？</h2>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAとは、アメリカのビザ免除プログラム(VWP)を利用して渡航する際に必要な電子渡航認証
システムです。日本国籍を含むビザ免除対象国の渡航者は、観光や商用など90日以内の短期滞在であれば、ビザの代わりにESTAの取得が義務付けられています。
従来、ESTAはパソコンの公式ウェブサイトから申請するのが一般的でしたが、2023年6月21日より、米国税関・国境警備局(CBP)が提供する公式アプリ「ESTA Mobile(Android/iOS)」をスマートフォンやタブレットにダウンロードすることで、簡単に申請できるようになりました。スマートフォン1台で、申請から支払い、認証状況の確認まで完結することが可能です。日本語にも対応しているため、手続きを簡単かつ正確に進めやすい点が特徴となっています。</p>

        <h3 className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">申請手続きの簡略化・入力間違いの軽減</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAアプリを利用する最大のメリットは、申請手続きが大幅に簡略化される点です。パスポート情報は、カメラで撮影するだけで自動的に読み取られ、氏名やパスポート番号を手入力する必要がありません。また、入力間違いによる申請エラーのリスクを軽減することができます。スマートフォン1台で手続きが完結するため、外出先や移動中でも申請しやすいのがメリットと言えるでしょう。</p>

        <h3 className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">自動翻訳機能で日本語に対応</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAアプリには自動翻訳機能が搭載されており、日本語表示にも対応しています。質問項目や注意事項も翻訳されるため、英語が苦手な方でも内容を理解しながら申請を進めることができます。誤った回答をしてしまう可能性が低くなり、入力間違いなどによる申請エラーのリスクが大幅に軽減されます。</p>

        <h2 id="section-compare" className="text-xl font-bold text-[#1a2744] border-b-2 border-gray-200 pb-2 mt-10 mb-4">アプリ申請とWeb申請の比較</h2>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAの申請方法には、スマートフォンアプリとWebブラウザの2つの方法があります。どちらを利用しても審査基準や結果に違いはありませんが、操作性や機能面での違いがあります。以下の比較表を参考に、ご自身に合った方法を選んでください。</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-[#1a2744] text-white">
                <th className="border border-gray-300 px-4 py-2 text-left">比較項目</th>
                <th className="border border-gray-300 px-4 py-2 text-center">アプリ申請</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Web（ブラウザ）申請</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-medium">パスポート読み取り</td>
                <td className="border border-gray-300 px-4 py-2 text-center">カメラで自動読み取り</td>
                <td className="border border-gray-300 px-4 py-2 text-center">手入力</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">顔写真撮影</td>
                <td className="border border-gray-300 px-4 py-2 text-center">アプリ内で撮影</td>
                <td className="border border-gray-300 px-4 py-2 text-center">ファイルをアップロード</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-medium">日本語対応</td>
                <td className="border border-gray-300 px-4 py-2 text-center">自動翻訳機能あり</td>
                <td className="border border-gray-300 px-4 py-2 text-center">日本語表示あり</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">グループ申請</td>
                <td className="border border-gray-300 px-4 py-2 text-center">不可（1人ずつ）</td>
                <td className="border border-gray-300 px-4 py-2 text-center">最大50人まで可能</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-medium">申請所要時間</td>
                <td className="border border-gray-300 px-4 py-2 text-center">約15～30分</td>
                <td className="border border-gray-300 px-4 py-2 text-center">約10～20分</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">入力ミスのリスク</td>
                <td className="border border-gray-300 px-4 py-2 text-center">低い（自動読み取り）</td>
                <td className="border border-gray-300 px-4 py-2 text-center">やや高い（手入力）</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-medium">申請料金</td>
                <td className="border border-gray-300 px-4 py-2 text-center">$40.27（同額）</td>
                <td className="border border-gray-300 px-4 py-2 text-center">$40.27（同額）</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">支払い方法</td>
                <td className="border border-gray-300 px-4 py-2 text-center">クレジット/デビット/PayPal</td>
                <td className="border border-gray-300 px-4 py-2 text-center">クレジットカード</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-medium">途中保存・再開</td>
                <td className="border border-gray-300 px-4 py-2 text-center">可能</td>
                <td className="border border-gray-300 px-4 py-2 text-center">可能</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">おすすめの方</td>
                <td className="border border-gray-300 px-4 py-2 text-center">1人で申請する方・外出先で申請したい方</td>
                <td className="border border-gray-300 px-4 py-2 text-center">家族やグループで申請する方・大画面で確認したい方</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-[#f0f7ff] border-l-4 border-blue-400 p-4 mb-4">
          <p className="text-gray-700 text-sm"><span className="font-bold">おすすめの使い分け：</span>1人で申請する場合や、英語に不安がある方はアプリ申請がおすすめです。家族やグループでまとめて申請したい場合は、Webブラウザからのグループ申請が便利です。詳しくは「<a href="/list-esta-application/group-family/" className="text-[#c41e3a] hover:underline">ESTAのグループ・家族申請について</a>」をご確認ください。</p>
        </div>

        <h2 id="section-2" className="text-xl font-bold text-[#1a2744] border-b-2 border-gray-200 pb-2 mt-10 mb-4">ESTAアプリのダウンロード方法・手順</h2>

        <h3 id="section-ios" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">iOSデバイスの場合</h3>
        <p className="text-gray-700 leading-relaxed mb-4">iPhoneやiPadをお使いの方は、<a href="https://apps.apple.com/jp/app/esta-mobile/id1529604353" target="_blank" rel="noopener noreferrer" className="text-[#c41e3a] hover:underline">App Store</a>からESTA申請アプリをダウンロードできます。ESTA申請に使用できるのは、米国・税関国境警備局(CBP)が提供する公式アプリのみです。</p>
        <p className="text-gray-700 leading-relaxed mb-2 font-bold">申請手順</p>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          <li className="text-gray-700">App Storeを開く</li>
          <li className="text-gray-700">検索バーに「ESTA」または「ESTA申請」と入力</li>
          <li className="text-gray-700">「U.S. Customs and Border Protection」と表示されている「ESTAアプリ」をインストール（iOS 14.0以降を搭載したiPhoneまたはiPadに対応）</li>
          <li className="text-gray-700">インストール完了後、「操作の継続」をタップ</li>
          <li className="text-gray-700">「セキュリティに関する通告」に同意し、申請手続きを開始</li>
        </ol>

        <h3 id="section-android" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">Androidデバイスの場合</h3>
        <p className="text-gray-700 leading-relaxed mb-4">Android端末をお使いの方は、<a href="https://play.google.com/store/apps/details?id=gov.dhs.cbp.esta&hl=ja" target="_blank" rel="noopener noreferrer" className="text-[#c41e3a] hover:underline">Google Play</a>ストアからESTA申請アプリをダウンロードできます。申請手順は、iOSデバイスの場合とほぼ同じ流れです。</p>
        <p className="text-gray-700 leading-relaxed mb-2 font-bold">申請手順</p>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          <li className="text-gray-700">Google Playを開く</li>
          <li className="text-gray-700">検索バーに「ESTA」または「ESTA Mobile」と入力</li>
          <li className="text-gray-700">「U.S. Customs and Border Protection」と表示されている「ESTAアプリ」をインストール（Android 8.0以降を搭載したスマートフォンまたはタブレットに対応）</li>
          <li className="text-gray-700">インストール完了後、「操作の継続」をタップ</li>
          <li className="text-gray-700">「セキュリティに関する通告」に同意し、申請手続きを開始</li>
        </ol>

        <h2 id="section-device" className="text-xl font-bold text-[#1a2744] border-b-2 border-gray-200 pb-2 mt-10 mb-4">対応デバイス・OS要件一覧</h2>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAアプリを利用する前に、お使いの端末が対応しているかご確認ください。以下が推奨環境です。</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-[#1a2744] text-white">
                <th className="border border-gray-300 px-4 py-2 text-left">項目</th>
                <th className="border border-gray-300 px-4 py-2 text-center">iOS</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Android</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-medium">対応OS</td>
                <td className="border border-gray-300 px-4 py-2 text-center">iOS 14.0以降</td>
                <td className="border border-gray-300 px-4 py-2 text-center">Android 8.0以降</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">対応端末</td>
                <td className="border border-gray-300 px-4 py-2 text-center">iPhone、iPad</td>
                <td className="border border-gray-300 px-4 py-2 text-center">Xperia、Galaxy、AQUOS、Pixel 等</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-medium">必要なカメラ機能</td>
                <td className="border border-gray-300 px-4 py-2 text-center">背面カメラ＋インカメラ</td>
                <td className="border border-gray-300 px-4 py-2 text-center">背面カメラ＋インカメラ</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">NFC機能</td>
                <td className="border border-gray-300 px-4 py-2 text-center">必要（ICチップ読み取り用）</td>
                <td className="border border-gray-300 px-4 py-2 text-center">必要（ICチップ読み取り用）</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-medium">ストレージ容量</td>
                <td className="border border-gray-300 px-4 py-2 text-center">約100MB以上の空き容量</td>
                <td className="border border-gray-300 px-4 py-2 text-center">約100MB以上の空き容量</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">インターネット接続</td>
                <td className="border border-gray-300 px-4 py-2 text-center">Wi-Fiまたはモバイルデータ</td>
                <td className="border border-gray-300 px-4 py-2 text-center">Wi-Fiまたはモバイルデータ</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-medium">ダウンロード先</td>
                <td className="border border-gray-300 px-4 py-2 text-center">App Store</td>
                <td className="border border-gray-300 px-4 py-2 text-center">Google Play</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <p className="text-gray-700 text-sm"><span className="font-bold">注意：</span>古いOSバージョンやNFC非対応の端末ではアプリが正常に動作しない場合があります。その場合は、公式ウェブサイトからのPC申請をご検討ください。Webブラウザ申請の手順は「<a href="/list-esta-application/esta-flow/" className="text-[#c41e3a] hover:underline">ESTA申請方法を解説</a>」で詳しくご確認いただけます。</p>
        </div>

        <h2 id="section-3" className="text-xl font-bold text-[#1a2744] border-b-2 border-gray-200 pb-2 mt-10 mb-4">ESTAアプリでの申請に必要な書類・情報</h2>
        <p className="text-gray-700 leading-relaxed mb-4">アプリでのESTA申請に必要な情報は以下の通りです。効率良く申請を進めるために、事前に準備しておきましょう。なお、アプリではパスポート顔写真ページの撮影およびスキャン、顔写真の撮影が必須となります。</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li className="text-gray-700">申請者本人のスマートフォン</li>
          <li className="text-gray-700">ICチップ付きで、有効期限内のパスポート</li>
          <li className="text-gray-700">有効なメールアドレス</li>
          <li className="text-gray-700">クレジットカードまたはデビットカード</li>
        </ul>

        <h3 className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">申請に必要な情報一覧</h3>

        <h4 className="font-bold text-[#1a2744] mt-6 mb-2">パスポート情報</h4>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li className="text-gray-700">パスポート番号</li>
          <li className="text-gray-700">発行国</li>
          <li className="text-gray-700">発行年月日</li>
          <li className="text-gray-700">有効期限</li>
        </ul>

        <h4 className="font-bold text-[#1a2744] mt-6 mb-2">個人情報</h4>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li className="text-gray-700">氏名</li>
          <li className="text-gray-700">性別</li>
          <li className="text-gray-700">生年月日</li>
          <li className="text-gray-700">出生地(出生国・出生都市)</li>
          <li className="text-gray-700">SNSアカウント情報</li>
          <li className="text-gray-700">CBPグローバルエントリープログラム</li>
          <li className="text-gray-700">両親の氏名</li>
          <li className="text-gray-700">勤務先情報</li>
        </ul>

        <h4 className="font-bold text-[#1a2744] mt-6 mb-2">連絡先情報</h4>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li className="text-gray-700">自宅住所</li>
          <li className="text-gray-700">電話番号</li>
          <li className="text-gray-700">メールアドレス</li>
          <li className="text-gray-700">緊急連絡先</li>
        </ul>

        <h4 className="font-bold text-[#1a2744] mt-6 mb-2">渡航情報</h4>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li className="text-gray-700">アメリカでの滞在先情報(ホテル名など)</li>
          <li className="text-gray-700">渡航目的</li>
        </ul>

        <h4 className="font-bold text-[#1a2744] mt-6 mb-2">適格性に関する質問</h4>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li className="text-gray-700">精神疾患や薬物依存などの病歴</li>
          <li className="text-gray-700">逮捕または犯罪歴</li>
          <li className="text-gray-700">違法薬物の所持または使用歴</li>
          <li className="text-gray-700">テロやスパイ行為歴</li>
          <li className="text-gray-700">違法ビザ取得などの詐欺行為歴</li>
          <li className="text-gray-700">米国内における未許可の就労意図の有無</li>
          <li className="text-gray-700">過去の米国ビザの否認または入国拒否の有無</li>
          <li className="text-gray-700">米国での超過滞在歴</li>
          <li className="text-gray-700">特定国への渡航歴</li>
        </ul>

        <h2 id="section-4" className="text-xl font-bold text-[#1a2744] border-b-2 border-gray-200 pb-2 mt-10 mb-4">ESTAアプリでの申請方法・手順（ステップ別詳細）</h2>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAアプリをダウンロードし必要書類や情報を準備したうえで、ESTA申請を進めてください。ダウンロード完了後は、「セキュリティに関する通告」と「免責事項」に同意し、「操作の継続」をタップすると申請手続きが開始されます。
アプリでのESTA申請方法と手順は以下の通りです。</p>

        <h3 className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ステップ1：パスポートの顔写真ページを撮影</h3>
        <p className="text-gray-700 leading-relaxed mb-4">アプリを起動し「新規申請」を選択すると、パスポートのスキャン画面が表示されます。次に、パスポートの顔写真ページを開き、スマートフォンに表示される枠内に写真ページが収まるよう、カメラの位置を調整します。スキャンが完了すると、氏名、生年月日、パスポート番号などが自動入力されるため、パスポートの情報と一致しているか確認をしてください。</p>
        <div className="bg-[#f0f7ff] border border-blue-200 rounded-lg p-4 mb-4">
          <p className="text-gray-700 text-sm"><span className="font-bold">撮影のコツ：</span>パスポートを平らな場所に置き、影が入らないようにしましょう。光の反射でページが白くなると読み取りに失敗します。自然光の下で、やや斜めの角度から撮影すると成功しやすくなります。</p>
        </div>

        <h3 className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ステップ2：スマホでパスポートをスキャン（ICチップ読み取り）</h3>
        <p className="text-gray-700 leading-relaxed mb-4">続いて、パスポートのICチップを読み取ります。パスポートのスキャン方法が画面に表示されますので、「読み取りの開始」をタップして次へ進んでください。パスポートの上部にスマートフォンの背面(カメラ)をかざすと、読み取りが開始されます。読み取りが開始されない場合は、パスポートの表紙に沿ってスマートフォンをゆっくり動かしてください。読み取りが成功すると、名前、性別、生年月日、国籍、パスポート番号、発行国、有効期限が画面に表示されます。パスポート情報と照らし合わせて間違いがないか確認し、「操作の継続」をタップして次へ進んでください。</p>
        <div className="bg-[#f0f7ff] border border-blue-200 rounded-lg p-4 mb-4">
          <p className="text-gray-700 text-sm"><span className="font-bold">ICチップ読み取りのコツ：</span>iPhoneの場合はスマートフォンの上部をパスポートの表紙の上にかざしてください。Androidの場合は、NFCアンテナの位置が機種によって異なりますが、多くの場合は背面の中央付近にあります。パスポートカバーを外し、スマートフォンをゆっくりと動かしながら読み取り位置を探してください。</p>
        </div>

        <h3 className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ステップ3：申請者本人の顔写真を撮影</h3>
        <p className="text-gray-700 leading-relaxed mb-4">次に、申請者本人の顔写真を撮影します。スマートフォンのインカメラが起動するため、画面の指示に従い枠内に顔を収めてください。正面をしっかり向き、背景は無地、帽子やサングラスは外すなどの注意点に気を付けながら撮影を行いましょう。顔が正しく認識されると枠が大きくなるため、その大きさに合わせて顔を近づけて撮影し、申請書の入力に進みます。</p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <p className="text-gray-700 text-sm"><span className="font-bold">顔写真撮影の注意点：</span>眼鏡をかけている場合は、レンズに光が反射しないようにしてください。マスクは必ず外してください。前髪が目にかからないように整えましょう。撮影は明るい室内で行い、逆光は避けてください。</p>
        </div>

        <h3 className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ステップ4：個人情報・渡航情報の入力</h3>
        <p className="text-gray-700 leading-relaxed mb-4">パスポート情報以外の個人情報を入力していきます。アプリの指示に従って、各項目を正確に入力しましょう。氏名やパスポート番号など、スキャン時に取得されたパスポート情報は自動で入力されます。自動読み取りされなかった項目や、追加で必要な個人情報は手入力してください。出生した市区町村、出生国、メールアドレスなどを入力し、画面右下の右矢印をタップして次へ進みます。登録したメールアドレスには&quot;4桁&quot;の英数字が届くため、画面上に入力することで次のステップへ進むことができます。
続いて、日本の住所、電話番号、勤務先、米国での滞在先、緊急連絡先などの個人情報や渡航情報を入力してください。その後、適格性に関する質問に回答し、申請内容を確認して完了となります。</p>
        <p className="text-gray-700 leading-relaxed mb-4">住所のローマ字表記に迷った場合は、「<a href="/list-esta-application/place-of-birth/" className="text-[#c41e3a] hover:underline">ESTA申請時の出生地や住所の書き方を解説</a>」で具体的な記入例を確認できます。</p>

        <h3 className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ステップ5：申請料金の支払い</h3>
        <p className="text-gray-700 leading-relaxed mb-4">入力内容に間違いがないかを確認した後、支払いの「免責事項」にチェックを入れ、「今すぐ支払う」をタップして次へ進んでください。支払い方法は、クレジットカード、デビットカード、またはPaypalアカウントから選択して必要な情報を入力します。申請料金は40.27ドルで、決済が完了するとESTAの認証審査が開始されます。
支払い完了後、登録したメールアドレスに確認メールが送信されます。このメールには申請番号が記載されているため、大切に保管してください。</p>

        <h2 id="section-5" className="text-xl font-bold text-[#1a2744] border-b-2 border-gray-200 pb-2 mt-10 mb-4">ESTA認証状況の確認方法</h2>
        <p className="text-gray-700 leading-relaxed mb-4">アプリ内に申請番号を入力することで、いつでも認証状況を確認できます。アプリを再度開き、「ESTAを取得済みの場合」の「見つける」をタップしてください。認証結果には、以下の3つのパターンがあります。</p>
        <div className="space-y-3 mb-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="text-gray-700"><span className="font-bold text-green-700">AUTHORIZATION APPROVED</span>：認証は承認されました。渡航が認められた状態です。</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-gray-700"><span className="font-bold text-yellow-700">AUTHORIZATION PENDING</span>：認証審査が保留中です。最大72時間お待ちください。</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-gray-700"><span className="font-bold text-red-700">TRAVEL NOT AUTHORIZED</span>：渡航は拒否されました。ビザの取得が必要です。</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA審査中の場合、認証結果のステータスは「保留中」と表示されます。ESTAは、決済完了から認証が下りるまで最大で72時間かかることがあります。そのため、保留中と表示された場合は、時間をおいて再度ご確認ください。</p>

        <h2 id="section-6" className="text-xl font-bold text-[#1a2744] border-b-2 border-gray-200 pb-2 mt-10 mb-4">ESTAアプリ利用時の注意点</h2>

        <h3 className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">アプリがデバイスに対応しているか</h3>
        <p className="text-gray-700 leading-relaxed mb-4">使用デバイスがESTAアプリに対応しているかを事前に確認してください。ESTAアプリは、iOS 14.0以降を搭載したiPhoneやiPadなどのiOSデバイス、またはAndroid 8.0以降を搭載したXperia、Galaxy、AQUOSなどのAndroidデバイスに対応しています。App Storeまたは<a href="https://play.google.com/store/apps/details?id=gov.dhs.cbp.esta&hl=ja" target="_blank" rel="noopener noreferrer" className="text-[#c41e3a] hover:underline">Google Playからダウンロード</a>が可能です。なお、アプリのバージョンが古い場合、ダウンロードできなかったり正常に動作しない場合があるため、ご自身の端末とOSのバージョンをあらかじめ確認しておきましょう。</p>

        <h3 className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">申請番号や認証結果を控える</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAアプリで入力の再開や認証審査状況を確認する方法は、基本的に公式ウェブサイトと同じです。パスポート番号、生年月日、渡航申請番号または国籍、パスポートの発行日、有効期間満了日の入力が必須となります。
なお、アプリ内に保存されるこれらの情報は、セキュリティ上のリスクとなる可能性があります。そのため、スマートフォン紛失時に備えて端末にロックをかけたり、顔認証などの生態認証を設定しておくと安全性が高まります。また、申請番号や認証結果は、スクリーンショットやメモで保存しておくと安心です。</p>

        <h3 className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">外出時はパスポートを携帯する</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAアプリで申請する際は、パスポートのスキャンと顔写真ページの撮影を行うため、パスポートを手元に準備しておく必要があります。アプリを利用する場合は外出先でも気軽に申請できますが、パスポートの携帯は必須です。外出先で紛失しないよう、しっかりと管理しましょう。</p>

        <h3 className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">アプリでのグループ申請は不可</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAアプリでは、1人ずつ申請と決済を行う必要があるため、グループ申請はできません。家族や団体の申請手続きは、公式ウェブサイトをご利用ください。公式ウェブサイトでは最大50人までのグループ申請が可能で、連絡用のメールアドレスや決済カードの情報を一括で設定できます。詳しくは「<a href="/list-esta-application/group-family/" className="text-[#c41e3a] hover:underline">ESTAのグループ・家族申請について</a>」をご確認ください。</p>
        <p className="text-gray-700 leading-relaxed mb-4">なお、ESTAを取得してもアメリカへの入国が保証されるわけではありません。最終的な判断は、到着した空港のCBP(アメリカ合衆国税関・国境警備局)入国審査官に委ねられます。そのため、ESTA申請時には虚偽の申告は避け、正確な情報を登録しましょう。</p>

        <h2 id="section-trouble" className="text-xl font-bold text-[#1a2744] border-b-2 border-gray-200 pb-2 mt-10 mb-4">トラブルシューティング</h2>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAアプリの使用中に発生しやすいトラブルと、その対処法を以下にまとめました。</p>
        <div className="space-y-4 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">アプリがクラッシュ・強制終了する</p>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-gray-700 text-sm">アプリを最新バージョンに更新する</li>
              <li className="text-gray-700 text-sm">端末のOSを最新バージョンに更新する</li>
              <li className="text-gray-700 text-sm">アプリを一度削除して再インストールする</li>
              <li className="text-gray-700 text-sm">端末を再起動してから再度試す</li>
              <li className="text-gray-700 text-sm">ストレージの空き容量を確認する（100MB以上推奨）</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">パスポートのカメラ撮影がうまくいかない</p>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-gray-700 text-sm">パスポートカバーを外して撮影する</li>
              <li className="text-gray-700 text-sm">明るい場所で撮影する（直射日光は避ける）</li>
              <li className="text-gray-700 text-sm">パスポートを平らな面に置く</li>
              <li className="text-gray-700 text-sm">カメラのレンズを拭いてから撮影する</li>
              <li className="text-gray-700 text-sm">枠内にページ全体が収まるように調整する</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">ICチップの読み取りに失敗する</p>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-gray-700 text-sm">パスポートカバーを外す</li>
              <li className="text-gray-700 text-sm">スマートフォンの背面をパスポートの表紙にゆっくりかざす</li>
              <li className="text-gray-700 text-sm">読み取り中は端末を動かさない</li>
              <li className="text-gray-700 text-sm">金属製のテーブルの上での読み取りを避ける</li>
              <li className="text-gray-700 text-sm">端末のNFC機能が有効になっているか確認する</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">顔写真の撮影がうまくいかない</p>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-gray-700 text-sm">明るい室内で撮影する</li>
              <li className="text-gray-700 text-sm">帽子、サングラス、マスクを外す</li>
              <li className="text-gray-700 text-sm">正面を向き、目を開いた状態で撮影する</li>
              <li className="text-gray-700 text-sm">背景を白または無地にする</li>
              <li className="text-gray-700 text-sm">インカメラのレンズを清掃する</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">メールアドレスの認証コードが届かない</p>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-gray-700 text-sm">迷惑メールフォルダを確認する</li>
              <li className="text-gray-700 text-sm">メールアドレスの入力にスペルミスがないか確認する</li>
              <li className="text-gray-700 text-sm">数分待ってから再度送信を試みる</li>
              <li className="text-gray-700 text-sm">別のメールアドレスを使用する</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">上記の方法で解決しない場合は、公式ウェブサイトからの申請も検討してください。Webブラウザからの申請方法は「<a href="/list-esta-application/esta-flow/" className="text-[#c41e3a] hover:underline">ESTA申請方法を解説</a>」で詳しく説明しています。</p>

        <h2 id="section-7" className="text-xl font-bold text-[#1a2744] border-b-2 border-gray-200 pb-2 mt-10 mb-4">ESTAアプリに関するFAQ</h2>
        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">Q. 今後のESTA申請は、アプリに限定される予定ですか？</p>
            <p className="text-gray-700 leading-relaxed">いいえ。現時点では、ESTA申請がアプリに限定される予定はありません。従来通り、パソコンから公式ウェブサイトを通じて申請することも可能です。ご自身が利用しやすい方法を選んで、申請してください。</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">Q. アプリはどこからダウンロードできますか？</p>
            <p className="text-gray-700 leading-relaxed">iOSデバイス(iPhone、iPad)の場合はApp Store、Androidデバイス(Xperia、Galaxy、AQUOS)の場合はGoogle Playストアからダウンロードできます。検索バーに「ESTA」や「ESTA申請」と入力して検索してください。</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">Q. アプリ申請時に必要なものとは？</p>
            <p className="text-gray-700 leading-relaxed">有効期限内のパスポート、Eメールアドレス、クレジットカードまたはデビットカードをご用意ください。その他にも、アメリカでの滞在先、現在の職業や勤務先、緊急連絡先などの個人情報や渡航先情報をあらかじめ準備しておくと、手続きがスムーズに進みます。</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">Q. アプリ申請時もメールアドレスの入力は必要ですか？結果はアプリに通知されますか？</p>
            <p className="text-gray-700 leading-relaxed">はい。アプリでの申請時もメールアドレスの入力は必須です。公式ウェブサイトからESTA申請を行った場合と同様に、申請結果は登録したメールアドレスに通知されます。なお、審査の進捗状況や審査結果はアプリ内で確認することも可能です。アプリ内で送受信が可能なEメールアドレスをご用意ください。</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">Q. アプリはどのデバイスからも利用可能ですか？</p>
            <p className="text-gray-700 leading-relaxed">ESTAの公式アプリ「ESTA Mobile」は、iOS 14.0以降のiOSデバイス、またはAndroid 8.0以降のAndroidデバイスで利用できます。古いバージョンのOSを使用している場合は、アプリのアップデート、または公式ウェブサイトからの申請をご検討ください。</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">Q. ウェブサイトとアプリでは申請方法や手順に違いがありますか？</p>
            <p className="text-gray-700 leading-relaxed">基本的な手続きに大きな違いはなく、入力内容や申請料金も同じです。いずれの場合も、最終的には米国国土安全保障省の同じシステムで処理されるため、審査基準や結果に違いはありません。ただし、操作性には大きな違いがあります。アプリでは、パスポート情報や顔写真の自動読み取りが可能なため、入力ミスが起こりにくいという利点があります。スマートフォンの操作に慣れている方や、短時間で申請を終えたい方にはアプリ申請がおすすめです。一方、自宅などで大きな画面を見ながら慎重に入力したい方には、パソコンからの申請が適しています。</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">Q. アプリ申請の途中で終了した場合、前回の続きから申請を再開できますか？</p>
            <p className="text-gray-700 leading-relaxed">はい。ESTAアプリでは申請途中でも入力情報を保存し、続きから申請を再開することが可能です。申請中に、申請フォーム下部の「保存して終了」をタップすると、ESTA申請番号が画面に表示されます。その際に、申請番号を「スクリーンショットを撮って保存する」またはメモをとり保管してください。前回の続きから申請を再開する場合は、「ESTAを取得済みの場合」の「見つける」をタップし、パスポート番号・生年月日・ESTA申請番号を入力します。検索の完了後、引き続き申請を進めることが可能です。</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">Q. ESTA認証情報はアプリに保存されますか？確認する方法はありますか？</p>
            <p className="text-gray-700 leading-relaxed">ESTAアプリには、認証情報を保存する機能はありません。認証情報を確認したい場合は、アプリを開き「ESTAを取得済みの場合」の「見つける」をタップし、パスポート番号・生年月日・ESTA申請番号を入力してください。なお、アプリをアンインストールした場合や、スマートフォンを機種変した場合でも、申請番号があれば公式ウェブサイトから認証情報を確認することが可能です。</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">Q. アプリで申請する場合はどのくらい時間がかかりますか？</p>
            <p className="text-gray-700 leading-relaxed">アプリ、公式ウェブサイトのいずれを利用する場合も、申請にかかる所要時間はおよそ15～30分程度です。初めての申請する方や、英語(ローマ字)表記になれていない方は、時間に余裕を持って進めることをおすすめします。</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">Q. ESTA申請が承認されない場合、申請料金は払い戻しされますか？</p>
            <p className="text-gray-700 leading-relaxed">ESTA申請では、承認・不承認にかかわらず、申請情報が処理された時点で費用が発生します。不承認の場合は、ESTA運用手数料の10.27ドルは返金対象となりますが、残りの30ドルは処理費用として差し引かれる仕組みになっています。なお、ESTAを改めて申請する場合は、再度40.27ドルの支払いが必要です。</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">Q. ESTAアプリでパスポートが読み取れない場合はどうすればいいですか？</p>
            <p className="text-gray-700 leading-relaxed">パスポートの読み取りに失敗する場合は、パスポートカバーを外す、明るい場所で撮影する、パスポートの上でスマートフォンをゆっくり動かすなどをお試しください。それでも読み取れない場合は、公式ウェブサイトからの申請をご検討ください。Webブラウザからは手入力でパスポート情報を入力できます。</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">Q. ESTAを取得すれば必ずアメリカへ入国できますか？</p>
            <p className="text-gray-700 leading-relaxed">ESTAは、あくまでアメリカ渡航前の事前認証制度であり、必ずしも入国を保証するものではありません。アメリカ入国の最終判断は、到着した空港におけるCBP(アメリカ合衆国税関・国境警備局)の入国審査官に委ねられます。入国審査では、滞在目的、滞在期間、帰国予定などについて確認されることがあります。不審な点がある場合は、入国を拒否される可能性があるためご注意ください。なお、ESTAの渡航申請番号を提示する必要はありませんが、念のため手帳などに控えておくことをおすすめします。</p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">米国国土安全保障省申請料($40.27)の内訳</p>
        <ul className="list-none space-y-2 mb-4 pl-4">
          <li className="text-gray-700">Processing Fee / ESTA運用手数料($10.27)：電子渡航認証システムESTAの申請手続き、システム管理にかかる費用</li>
          <li className="text-gray-700">Travel Promotion Fee / 旅行促進手数料($17)：電子渡航認証システムESTAを利用して渡米する観光客の誘致にかかる費用</li>
          <li className="text-gray-700">General fund of the Treasury / 米国財務省一般基金への拠出分($13)：電子渡航認証システムESTAの運営に関係し、アメリカ財務省の一般基金へ充当される費用</li>
        </ul>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-bold text-[#1a2744] mb-4">関連記事</h3>
          <div className="grid gap-2">
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/esta" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">ESTA(エスタ)とは？事前入国審査制度を解説</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/esta-flow" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">【記入例付き】ESTAの申請方法を解説</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/place-of-birth" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">出生地や住所の書き方を紹介</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/us-contact-details" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">米国内の連絡先情報の記入方法</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/fee" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">ESTAの申請料金</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/expiration-date" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">ESTAの有効期限と再申請・確認方法</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/official-cbp" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">公式ウェブサイトについて解説</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/cbp-flow" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">ESTA申請方法と取得手順を徹底解説</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/application" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">アプリのESTA申請方法</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/status-check" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">ESTA申請状況の確認方法</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/guam" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">グアム入国にESTAは必要？</Link></div>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-gray-200 rounded-lg p-5 my-6">
          <p className="text-base font-bold text-[#1a2744] mb-3">関連ページ</p>
          <ul className="space-y-2">
            <li><Link href="/list-esta-application/official-vs-fake/" className="text-[#1a2744] hover:text-[#c41e3a] text-sm transition-colors">→ ESTA公式サイトと偽サイトの見分け方</Link></li>
            <li><Link href="/list-esta-application/group-family/" className="text-[#1a2744] hover:text-[#c41e3a] text-sm transition-colors">→ ESTAのグループ・家族申請について</Link></li>
            <li><Link href="/list-esta-application/esta-flow/" className="text-[#1a2744] hover:text-[#c41e3a] text-sm transition-colors">→ ESTA(エスタ)の申請方法を解説</Link></li>
            <li><Link href="/list-esta-application/place-of-birth/" className="text-[#1a2744] hover:text-[#c41e3a] text-sm transition-colors">→ ESTA申請時の出生地や住所の書き方を解説</Link></li>
            <li><Link href="/list-esta-application/renewal/" className="text-[#1a2744] hover:text-[#c41e3a] text-sm transition-colors">→ ESTAの更新・延長方法を解説</Link></li>
          </ul>
        </div>
      </div>
    </article>
  );
}
