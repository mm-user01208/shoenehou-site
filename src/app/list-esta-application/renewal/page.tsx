import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ESTAの更新・延長方法を解説｜期限切れ前の再申請手順【2026年】 | US ESTA Apply Website',
  description: 'ESTAには更新機能がないため、期限切れ前に新規で再申請が必要です。再申請の手順、おすすめの申請時期、パスポート更新時の対応方法をわかりやすく解説します。',
  alternates: { canonical: 'https://shoenehou-online.jp/list-esta-application/renewal/' },
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
            "name": "ESTAの有効期限を延長することはできますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "いいえ、ESTAには更新や延長の機能はありません。有効期限が切れた場合は、新規で再申請する必要があります。再申請の手順は初回申請と同じで、すべての情報を改めて入力し、申請手数料を支払います。"
            }
          },
          {
            "@type": "Question",
            "name": "ESTAの再申請はいつ行うべきですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "おすすめの再申請時期は、有効期限が切れる1ヶ月前、または次回の渡航予定日の1ヶ月前のいずれか早い方です。少なくとも渡航日の3日前（72時間前）までには申請を完了させてください。"
            }
          },
          {
            "@type": "Question",
            "name": "前回の申請データを使って再申請できますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "いいえ、ESTAの再申請時に前回の申請データは引き継がれません。すべての情報（氏名、パスポート番号、連絡先、滞在先など）を最初から入力し直す必要があります。"
            }
          },
          {
            "@type": "Question",
            "name": "パスポートを更新したらESTAはどうなりますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "パスポートを更新すると、有効期間内のESTAであっても自動的に失効します。ESTAはパスポート番号に紐づけて管理されているため、新しいパスポートの情報でESTAを再申請する必要があります。"
            }
          },
          {
            "@type": "Question",
            "name": "ESTAの有効期限が切れた状態でアメリカに行けますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "いいえ、ESTAの有効期限が切れた状態ではアメリカに渡航できません。航空会社のチェックインカウンターで搭乗を拒否される可能性があります。渡航前に必ずESTAの有効期限を確認してください。"
            }
          },
          {
            "@type": "Question",
            "name": "ESTAの再申請にかかる費用はいくらですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ESTAの再申請にかかる費用は新規申請と同額で、米国国土安全保障省申請料として$40.27が必要です。前回のESTAが有効期間内であっても、再申請時には改めて申請料が発生します。"
            }
          },
          {
            "@type": "Question",
            "name": "ESTAの有効期限内でも再申請はできますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "はい、ESTAの有効期限内であっても新規で再申請することは可能です。ただし、新しいESTAが承認された時点で以前のESTAは自動的に無効となります。有効期間の残日数が無駄になる可能性があるため、タイミングには注意が必要です。"
            }
          },
          {
            "@type": "Question",
            "name": "結婚などで氏名が変わった場合、ESTAの再申請は必要ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "はい、結婚や離婚などで氏名が変わり新しいパスポートを取得した場合は、ESTAの再申請が必要です。ESTAはパスポート情報に紐づけて管理されているため、パスポート情報が変わった場合は新しい情報でESTAを再申請してください。"
            }
          },
          {
            "@type": "Question",
            "name": "ESTAの期限切れ後、再申請しないまま放置するとペナルティはありますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "いいえ、ESTAの有効期限が切れた後に再申請しなくてもペナルティは一切ありません。次回アメリカへ渡航する予定が決まった時点で、改めて新規申請を行ってください。"
            }
          }
        ]
      }) }} />
      <div className="bg-white rounded-lg shadow-sm p-6 md:p-10">
      <Breadcrumb items={[{"label": "ESTA申請関連情報一覧", "href": "/list-esta-application"}, {"label": "ESTAの更新・延長方法を解説｜期限切れ前の再申請手順【2026年】"}]} />
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-2 pb-3 border-b-2 border-[#c41e3a]">ESTAの更新・延長方法を解説
期限切れ前の再申請手順【2026年】</h1>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)には更新や延長の機能がないため、有効期限が切れた場合は新規で再申請する必要があります。前回の申請データが自動的に引き継がれることもないため、すべての情報を改めて入力する必要があります。本記事では、ESTAの再申請手順やおすすめの申請時期、パスポート更新時の対応方法について詳しく解説します。</p>
        <div className="bg-[#f8fafc] border border-gray-200 rounded-lg p-5 my-6">
          <p className="text-base font-bold text-[#1a2744] mb-3 flex items-center gap-2"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>目次</p>
          <ul className="space-y-2 text-sm">
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-1" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">ESTAに更新機能はない</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-checklist" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">再申請が必要なケース チェックリスト</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-2" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">期限切れ前の再申請手順（ステップ別）</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-cost" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">再申請にかかる費用</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-3" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">前回のデータは引き継がれない</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-4" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">いつ再申請すべきか（タイムライン）</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-5" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">パスポート更新時のESTA対応</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-passport-detail" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">パスポート更新とESTA再申請の手順</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-6" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">よくある質問</a></li>
          </ul>
        </div>

        <h2 id="section-1" className="text-xl font-bold text-[#1a2744] border-b-2 border-gray-200 pb-2 mt-10 mb-4">ESTAに更新機能はない</h2>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)には、有効期限を延長したり更新したりする機能は用意されていません。パスポートのように期限前に更新手続きを行って有効期間を延ばすことはできないため、ESTAの有効期限が切れた場合は、新規の申請として改めて手続きを行う必要があります。</p>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAの有効期間は、申請が承認された日から2年間です。ただし、この2年間の有効期間は、パスポートの有効期限を超えることはできません。例えば、ESTAが承認された時点でパスポートの有効期限が1年後に到来する場合、ESTAの有効期間も1年間となります。つまり、パスポートの有効期限がESTAの有効期限に直接影響します。</p>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAの有効期間中は、何度でもアメリカへの渡航が可能です。ただし、1回の滞在は90日以内に制限されており、ESTAの有効期限が切れるまでに出国する必要があります。有効期間が残っていれば、次回の渡航時に改めて申請する必要はありません。</p>

        <h2 id="section-checklist" className="text-xl font-bold text-[#1a2744] border-b-2 border-gray-200 pb-2 mt-10 mb-4">再申請が必要なケース チェックリスト</h2>
        <p className="text-gray-700 leading-relaxed mb-4">以下のいずれかに該当する場合は、ESTAの再申請が必要です。渡航前に確認しましょう。</p>
        <div className="bg-[#f0f7ff] border border-blue-200 rounded-lg p-5 mb-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-500 font-bold mt-0.5">&#9744;</span>ESTAの有効期限が切れている</li>
            <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-500 font-bold mt-0.5">&#9744;</span>パスポートを更新した（パスポート番号が変わった）</li>
            <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-500 font-bold mt-0.5">&#9744;</span>結婚・離婚などで氏名が変わった</li>
            <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-500 font-bold mt-0.5">&#9744;</span>国籍が変わった</li>
            <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-500 font-bold mt-0.5">&#9744;</span>性別が変わった</li>
            <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-500 font-bold mt-0.5">&#9744;</span>適格性に関する質問の回答内容が変わった</li>
            <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-500 font-bold mt-0.5">&#9744;</span>前回のESTAが「渡航認証拒否」となったが、状況が変わった</li>
          </ul>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <p className="text-gray-700 text-sm"><span className="font-bold">注意：</span>住所や勤務先の変更のみであれば、ESTA有効期間中は再申請の必要はありません。ただし、パスポート情報に紐づく変更（氏名変更等）がある場合は必ず再申請してください。</p>
        </div>

        <h2 id="section-2" className="text-xl font-bold text-[#1a2744] border-b-2 border-gray-200 pb-2 mt-10 mb-4">期限切れ前の再申請手順（ステップ別）</h2>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAの有効期限が近づいてきた場合は、渡航予定日に間に合うよう早めに再申請を行いましょう。再申請の手順は、初回の申請と同じです。以下の流れに沿って手続きを進めてください。</p>

        <div className="space-y-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">ステップ1：ESTA申請ページにアクセス</p>
            <p className="text-gray-700 leading-relaxed">ESTA申請ページにアクセスし、「新規申請」を選択します。再申請の場合も「新規申請」から手続きを開始してください。「既存の申請の確認」では、有効期限の確認やステータスの確認のみが可能で、更新手続きは行えません。</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">ステップ2：申請情報の入力</p>
            <p className="text-gray-700 leading-relaxed">パスポート情報、個人情報、連絡先、滞在先住所などのすべての情報を改めて入力します。前回の申請データは引き継がれないため、すべての項目を新たに入力する必要があります。住所のローマ字表記については「<a href="/list-esta-application/place-of-birth/" className="text-[#c41e3a] hover:underline">ESTA申請時の出生地や住所の書き方を解説</a>」をご確認ください。</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">ステップ3：適格性質問への回答・確認</p>
            <p className="text-gray-700 leading-relaxed">セキュリティに関する質問に回答し、入力内容を確認します。前回と同じ内容であっても、改めて正確に回答してください。</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">ステップ4：申請手数料の支払い</p>
            <p className="text-gray-700 leading-relaxed">申請手数料を支払い、申請を完了させます。再申請の場合も、新規申請と同額の手数料($40.27)が発生します。</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">ステップ5：審査結果の確認</p>
            <p className="text-gray-700 leading-relaxed">CBP(アメリカ合衆国税関・国境警備局)による審査が行われ、通常72時間以内に結果が通知されます。新しいESTAが承認されると、以前のESTAは無効となり、新しいESTAに置き換えられます。</p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">申請方法の詳細な手順は「<a href="/list-esta-application/esta-flow/" className="text-[#c41e3a] hover:underline">ESTA申請方法を解説</a>」で全ステップを画像付きで確認できます。アプリでの申請をご希望の場合は「<a href="/list-esta-application/application/" className="text-[#c41e3a] hover:underline">アプリを使ったESTA申請方法を解説</a>」をご覧ください。</p>

        <h2 id="section-cost" className="text-xl font-bold text-[#1a2744] border-b-2 border-gray-200 pb-2 mt-10 mb-4">再申請にかかる費用</h2>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAの再申請にかかる費用は新規申請と同額です。再申請時にも改めて申請料が発生し、前回のESTAが有効期間内であっても割引や免除はありません。</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-[#1a2744] text-white">
                <th className="border border-gray-300 px-4 py-2 text-left">費用項目</th>
                <th className="border border-gray-300 px-4 py-2 text-center">金額</th>
                <th className="border border-gray-300 px-4 py-2 text-left">説明</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2">Processing Fee（ESTA運用手数料）</td>
                <td className="border border-gray-300 px-4 py-2 text-center">$10.27</td>
                <td className="border border-gray-300 px-4 py-2">ESTA申請手続き・システム管理費</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Travel Promotion Fee（旅行促進手数料）</td>
                <td className="border border-gray-300 px-4 py-2 text-center">$17.00</td>
                <td className="border border-gray-300 px-4 py-2">観光客誘致にかかる費用</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2">General Fund（米国財務省一般基金）</td>
                <td className="border border-gray-300 px-4 py-2 text-center">$13.00</td>
                <td className="border border-gray-300 px-4 py-2">ESTA運営に関する基金への拠出</td>
              </tr>
              <tr className="bg-[#f0f7ff] font-bold">
                <td className="border border-gray-300 px-4 py-2">合計</td>
                <td className="border border-gray-300 px-4 py-2 text-center">$40.27</td>
                <td className="border border-gray-300 px-4 py-2">米国国土安全保障省申請料</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">申請料金の詳細については「<a href="/list-esta-application/fee/" className="text-[#c41e3a] hover:underline">ESTAの申請料金</a>」のページをご確認ください。</p>

        <h2 id="section-3" className="text-xl font-bold text-[#1a2744] border-b-2 border-gray-200 pb-2 mt-10 mb-4">前回のデータは引き継がれない</h2>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAの再申請時に注意すべき重要なポイントとして、前回の申請データが自動的に引き継がれないという点があります。再申請の際は、氏名、生年月日、パスポート番号、連絡先、滞在先住所、セキュリティ質問への回答など、すべての情報を最初から入力し直す必要があります。</p>
        <p className="text-gray-700 leading-relaxed mb-4">これは、CBPのシステムが各申請を独立したものとして処理しているためです。前回の申請情報は参照されず、新しい申請ごとに独自の審査が行われます。そのため、再申請時にも初回と同様に正確な情報を入力することが求められます。</p>
        <p className="text-gray-700 leading-relaxed mb-4">再申請をスムーズに進めるためのアドバイスとして、前回の申請時に入力した情報をメモやスクリーンショットで保存しておくことをおすすめします。特にパスポート番号や滞在先住所など、正確な入力が求められる項目は、事前に情報を準備しておくと入力ミスを防ぐことができます。</p>
        <div className="bg-[#f0f7ff] border-l-4 border-blue-400 p-4 mb-4">
          <p className="text-gray-700 text-sm"><span className="font-bold">再申請時の準備リスト：</span></p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm text-gray-700">
            <li>最新のパスポート（番号・有効期限を確認）</li>
            <li>現住所のローマ字表記</li>
            <li>勤務先情報（会社名・住所・電話番号）</li>
            <li>アメリカでの滞在先情報（ホテル名・住所）</li>
            <li>緊急連絡先の情報</li>
            <li>クレジットカード</li>
            <li>受信可能なメールアドレス</li>
          </ul>
        </div>

        <h2 id="section-4" className="text-xl font-bold text-[#1a2744] border-b-2 border-gray-200 pb-2 mt-10 mb-4">いつ再申請すべきか（タイムライン）</h2>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAの再申請は、有効期限が切れる前であればいつでも行うことが可能です。ただし、再申請のタイミングには注意が必要です。おすすめの再申請時期は、有効期限が切れる1ヶ月前、または次回の渡航予定日の1ヶ月前のいずれか早い方です。</p>
        <p className="text-gray-700 leading-relaxed mb-4">再申請を早すぎる時期に行うと、新しいESTAが承認された時点で前のESTAが無効となるため、有効期間の残日数が無駄になる可能性があります。一方、直前すぎると審査に時間がかかった場合に渡航に間に合わないリスクがあります。CBPでは審査結果の通知に最大72時間かかる場合があると公表しているため、少なくとも渡航日の3日前(72時間前)までには申請を完了させてください。</p>

        <h3 className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">再申請のタイムラインガイド</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-[#1a2744] text-white">
                <th className="border border-gray-300 px-4 py-2 text-left">渡航までの期間</th>
                <th className="border border-gray-300 px-4 py-2 text-left">推奨アクション</th>
                <th className="border border-gray-300 px-4 py-2 text-left">備考</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2">3ヶ月以上前</td>
                <td className="border border-gray-300 px-4 py-2">ESTAの有効期限を確認</td>
                <td className="border border-gray-300 px-4 py-2">有効期限内であれば再申請不要</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">1ヶ月前</td>
                <td className="border border-gray-300 px-4 py-2">再申請を開始（おすすめ時期）</td>
                <td className="border border-gray-300 px-4 py-2">余裕を持った申請が可能</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2">2週間前</td>
                <td className="border border-gray-300 px-4 py-2">遅くともこの時期までに申請</td>
                <td className="border border-gray-300 px-4 py-2">万が一の再申請にも対応可能</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">3日前（72時間前）</td>
                <td className="border border-gray-300 px-4 py-2">最低限このタイミングまでに申請完了</td>
                <td className="border border-gray-300 px-4 py-2">CBP推奨の最終期限</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-gray-300 px-4 py-2">前日～当日</td>
                <td className="border border-gray-300 px-4 py-2">リスクあり</td>
                <td className="border border-gray-300 px-4 py-2">審査が間に合わない可能性</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">なお、ESTAの有効期限が切れた後であっても、新規申請は問題なく行えます。有効期限が切れた状態でアメリカに渡航しようとしなければ、ペナルティなどは一切ありません。次回の渡航予定が決まった時点で、改めて新規申請を行ってください。</p>

        <h2 id="section-5" className="text-xl font-bold text-[#1a2744] border-b-2 border-gray-200 pb-2 mt-10 mb-4">パスポート更新時のESTA対応</h2>
        <p className="text-gray-700 leading-relaxed mb-4">パスポートを更新(新しいパスポートに切り替え)した場合、有効期間内のESTAであっても自動的に失効します。これは、ESTAがパスポート番号に紐づけて管理されているためです。パスポート番号が変わると、以前のESTAは使用できなくなります。</p>
        <p className="text-gray-700 leading-relaxed mb-4">そのため、パスポートを更新した場合は、新しいパスポート番号でESTAを再申請する必要があります。パスポートの更新手続きが完了し、新しいパスポートを受け取った後に、速やかにESTAの再申請を行ってください。</p>

        <h3 className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">パスポートとESTAの関係まとめ</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-[#1a2744] text-white">
                <th className="border border-gray-300 px-4 py-2 text-left">パスポートの状況</th>
                <th className="border border-gray-300 px-4 py-2 text-left">ESTAへの影響</th>
                <th className="border border-gray-300 px-4 py-2 text-left">必要な対応</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2">パスポート番号が変わった</td>
                <td className="border border-gray-300 px-4 py-2">ESTAは自動的に失効</td>
                <td className="border border-gray-300 px-4 py-2">新番号でESTA再申請が必要</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">パスポートの有効期限が切れた</td>
                <td className="border border-gray-300 px-4 py-2">ESTAも同時に失効</td>
                <td className="border border-gray-300 px-4 py-2">パスポート更新後にESTA再申請</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2">結婚で氏名が変わりパスポート更新</td>
                <td className="border border-gray-300 px-4 py-2">ESTAは自動的に失効</td>
                <td className="border border-gray-300 px-4 py-2">新パスポートでESTA再申請</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">パスポートの残存有効期間が短い</td>
                <td className="border border-gray-300 px-4 py-2">ESTAの有効期間も短くなる</td>
                <td className="border border-gray-300 px-4 py-2">先にパスポート更新を推奨</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2">パスポートを紛失・再発行</td>
                <td className="border border-gray-300 px-4 py-2">ESTAは自動的に失効</td>
                <td className="border border-gray-300 px-4 py-2">再発行パスポートでESTA再申請</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="section-passport-detail" className="text-xl font-bold text-[#1a2744] border-b-2 border-gray-200 pb-2 mt-10 mb-4">パスポート更新とESTA再申請の手順</h2>
        <p className="text-gray-700 leading-relaxed mb-4">パスポートとESTAの更新を同時期に行う場合は、以下の手順で進めることをおすすめします。</p>
        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
            <span className="bg-[#1a2744] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
            <div>
              <p className="font-bold text-[#1a2744] mb-1">パスポートの更新手続きを完了させる</p>
              <p className="text-gray-700 text-sm">各都道府県のパスポートセンターで更新申請を行い、新しいパスポートを受け取ります。</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
            <span className="bg-[#1a2744] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
            <div>
              <p className="font-bold text-[#1a2744] mb-1">新しいパスポート情報を確認する</p>
              <p className="text-gray-700 text-sm">パスポート番号、有効期限、氏名のローマ字表記を確認してください。</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
            <span className="bg-[#1a2744] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
            <div>
              <p className="font-bold text-[#1a2744] mb-1">新しいパスポート情報でESTAを新規申請する</p>
              <p className="text-gray-700 text-sm">新しいパスポート番号を使ってESTAの新規申請を行います。古いパスポートの情報では申請しないでください。</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
            <span className="bg-[#1a2744] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
            <div>
              <p className="font-bold text-[#1a2744] mb-1">審査結果を確認する</p>
              <p className="text-gray-700 text-sm">通常72時間以内に審査結果が通知されます。「渡航認証許可」の通知を確認してください。</p>
            </div>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">この手順を守ることで、パスポート番号の不一致によるトラブルを防ぐことができます。</p>

        <p className="text-gray-700 leading-relaxed mb-4">なお、パスポートの残存有効期間にもご注意ください。アメリカへの渡航時には、帰国日までパスポートが有効であることが求められます。パスポートの有効期限が渡航期間中に切れる場合は、先にパスポートの更新を行い、新しいパスポートでESTAを申請してください。パスポートについての詳細は「<a href="/list-esta-application/passport/" className="text-[#c41e3a] hover:underline">ESTAとパスポートの関係</a>」で詳しく解説しています。</p>

        <h2 id="section-6" className="text-xl font-bold text-[#1a2744] border-b-2 border-gray-200 pb-2 mt-10 mb-4">よくある質問</h2>
        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">Q. ESTAの有効期限を延長することはできますか？</p>
            <p className="text-gray-700 leading-relaxed">いいえ、ESTAには更新や延長の機能はありません。有効期限が切れた場合は、新規で再申請する必要があります。再申請の手順は初回申請と同じで、すべての情報を改めて入力し、申請手数料を支払います。</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">Q. ESTAの有効期限が切れた状態でアメリカに行けますか？</p>
            <p className="text-gray-700 leading-relaxed">いいえ、ESTAの有効期限が切れた状態ではアメリカに渡航できません。航空会社のチェックインカウンターで搭乗を拒否される可能性があります。渡航前に必ずESTAの有効期限を確認し、期限が切れている場合は新規で再申請を行ってください。</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">Q. 前回の申請データを使って再申請できますか？</p>
            <p className="text-gray-700 leading-relaxed">いいえ、ESTAの再申請時に前回の申請データは引き継がれません。すべての情報(氏名、パスポート番号、連絡先、滞在先など)を最初から入力し直す必要があります。再申請をスムーズに進めるため、前回の申請情報をメモやスクリーンショットで保存しておくことをおすすめします。</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">Q. パスポートを更新したらESTAはどうなりますか？</p>
            <p className="text-gray-700 leading-relaxed">パスポートを更新すると、有効期間内のESTAであっても自動的に失効します。ESTAはパスポート番号に紐づけて管理されているため、パスポート番号が変わると以前のESTAは使用できなくなります。新しいパスポートの情報でESTAを再申請してください。</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">Q. ESTAの有効期限はどうやって確認できますか？</p>
            <p className="text-gray-700 leading-relaxed">ESTAの有効期限は、ESTA申請完了時に送信される確認メールに記載されています。また、ESTAのステータス確認ページから、申請番号とパスポート情報を入力することで有効期限を確認できます。渡航前に必ず有効期限を確認し、期限切れの場合は再申請を行ってください。詳しくは「<a href="/list-esta-application/status-check/" className="text-[#c41e3a] hover:underline">ESTA申請状況の確認方法</a>」をご確認ください。</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">Q. ESTAの再申請にかかる費用はいくらですか？</p>
            <p className="text-gray-700 leading-relaxed">ESTAの再申請にかかる費用は新規申請と同額で、米国国土安全保障省申請料として$40.27が必要です。前回のESTAが有効期間内であっても、再申請時には改めて申請料が発生します。割引や免除はありません。</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">Q. ESTAの有効期限内でも再申請はできますか？</p>
            <p className="text-gray-700 leading-relaxed">はい、ESTAの有効期限内であっても新規で再申請することは可能です。ただし、新しいESTAが承認された時点で以前のESTAは自動的に無効となります。有効期間の残日数が無駄になる可能性があるため、渡航予定の1ヶ月前を目安に再申請することをおすすめします。</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">Q. 結婚などで氏名が変わった場合、ESTAの再申請は必要ですか？</p>
            <p className="text-gray-700 leading-relaxed">はい、結婚や離婚などで氏名が変わり新しいパスポートを取得した場合は、ESTAの再申請が必要です。ESTAはパスポート情報に紐づけて管理されているため、パスポート情報が変わった場合は新しい情報でESTAを再申請してください。</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-[#1a2744] mb-2">Q. ESTAの期限切れ後、再申請しないまま放置するとペナルティはありますか？</p>
            <p className="text-gray-700 leading-relaxed">いいえ、ESTAの有効期限が切れた後に再申請しなくてもペナルティは一切ありません。次回アメリカへ渡航する予定が決まった時点で、改めて新規申請を行ってください。ただし、有効期限が切れた状態でアメリカに渡航しようとすると搭乗拒否の可能性がありますのでご注意ください。</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-bold text-[#1a2744] mb-4">関連記事</h3>
          <div className="grid gap-2">
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/expiration-date" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">ESTAの有効期限と再申請・確認方法</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/esta" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">ESTA(エスタ)とは？事前入国審査制度を解説</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/esta-flow" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">【記入例付き】ESTAの申請方法を解説</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/passport" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">ESTAとパスポートの関係</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/status-check" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">ESTA申請状況の確認方法</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/fee" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">ESTAの申請料金</Link></div>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-gray-200 rounded-lg p-5 my-6">
          <p className="text-base font-bold text-[#1a2744] mb-3">関連ページ</p>
          <ul className="space-y-2">
            <li><Link href="/list-esta-application/expiration-date/" className="text-[#1a2744] hover:text-[#c41e3a] text-sm transition-colors">→ ESTAの有効期限と再申請・確認方法</Link></li>
            <li><Link href="/list-esta-application/passport/" className="text-[#1a2744] hover:text-[#c41e3a] text-sm transition-colors">→ ESTAとパスポートの関係</Link></li>
            <li><Link href="/list-esta-application/esta-flow/" className="text-[#1a2744] hover:text-[#c41e3a] text-sm transition-colors">→ ESTA(エスタ)の申請方法を解説</Link></li>
            <li><Link href="/list-esta-application/application/" className="text-[#1a2744] hover:text-[#c41e3a] text-sm transition-colors">→ アプリを使ったESTA申請方法を解説</Link></li>
          </ul>
        </div>
      </div>
    </article>
  );
}
