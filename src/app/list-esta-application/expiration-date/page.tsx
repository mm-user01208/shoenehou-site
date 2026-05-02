import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ESTA(エスタ)の有効期限は2年間｜確認方法・更新・再申請の手順【2026年最新】',
  description: 'ESTAの有効期限は2年間。有効期限の確認方法を画像付きで解説。期限切れ時の再申請手順・パスポート更新時の注意点・滞在中に期限が切れた場合の対処法まで網羅。今すぐ有効期限を確認しましょう。',
  alternates: { canonical: 'https://shoenehou-online.jp/list-esta-application/expiration-date/' },
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
            "name": "ESTAの有効期限はどのくらいですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ESTAの有効期限は原則2年間です。ただし、ESTA申請時に使用したパスポートの有効期限が2年未満の場合は、ESTAもそのパスポートの有効期限と同日に失効します。"
            }
          },
          {
            "@type": "Question",
            "name": "ESTAの有効期限を確認する方法は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "当サイトを通じてESTAを申請された方は、お問い合わせフォームから有効期限の照会が可能です。CBP公式サイトから申請された方は、ESTA申請公式サイトへ直接お問い合わせください。"
            }
          },
          {
            "@type": "Question",
            "name": "ESTAの更新はできますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ESTAには更新制度はありません。有効期限が切れた場合やパスポート情報に変更が生じた場合は、新たにESTAを再申請する必要があります。再申請には有効なパスポート、クレジットカード、メールアドレスが必要です。"
            }
          },
          {
            "@type": "Question",
            "name": "アメリカ滞在中にESTAの有効期限が切れた場合はどうなりますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ESTAの有効性が確認されるのはアメリカ入国時であるため、滞在中や出国時にESTAの有効期限が切れていても原則として影響はありません。入国時に承認されていれば、最長90日間のアメリカ滞在が認められます。"
            }
          },
          {
            "@type": "Question",
            "name": "ESTAの再申請はいつでもできますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "はい、ESTAの再申請はいつでも可能です。有効期限内であっても再申請でき、回数に制限はありません。ただし、新たにESTAが承認された場合、それまでのESTAは無効となります。"
            }
          }
        ]
      }) }} />
      <div className="bg-white rounded-lg shadow-sm p-6 md:p-10">
      <Breadcrumb items={[{"label": "ESTA申請関連情報一覧", "href": "/list-esta-application"}, {"label": "ESTA(エスタ)の有効期限と再申請・確認の方法"}]} />
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-2 pb-3 border-b-2 border-[#c41e3a]">ESTA(エスタ)の有効期限と再申請・確認の方法</h1>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)の有効期限は2年間で、この期間内であれば何度でも渡米することが可能です。ただし、ESTAを申請する際に使用したパスポートの有効期限が2年未満の場合、ESTAもそのパスポートの有効期限と同日に失効しますので注意が必要です。そのため、ESTAを申請する際は、事前にパスポートの有効期限を確認しておくことをお勧めします。また、アメリカへ渡航する前にESTAの有効期限が切れている場合は、必ず事前に再申請を行ってください。再申請には、有効なパスポート・申請手数料の支払いに使用するクレジットカード・メールアドレスが必要です。本記事では、ESTAの有効期限の確認方法、再申請の手順、および登録情報の修正方法について詳しく解説します。</p>
        <div className="bg-[#f8fafc] border border-gray-200 rounded-lg p-5 my-6">
          <p className="text-base font-bold text-[#1a2744] mb-3 flex items-center gap-2"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>目次</p>
          <ul className="space-y-2 text-sm">
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-1" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">ESTAの有効期限は原則2年間</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-2" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">ESTAの更新可否</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-3" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">ESTAの申請手順</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-4" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">ESTAの有効期限と再申請</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-5" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">ESTA有効期限のまとめ</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-6" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">ESTAなしでもグアムおよびサイパンへの渡航は可能</a></li>
          </ul>
        </div>
        <h3 id="section-1" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ESTAの有効期限は原則2年間</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)の有効期限は2年間です。ただし、ESTA申請時に使用したパスポートの有効期限が2年未満の場合は、ESTAもそのパスポートの有効期限と同日に失効するため注意が必要です。そのため、ESTAを申請する前に、必ずパスポートの有効期限を確認することをおすすめします。有効期限が2年未満の場合は、事前にパスポートを更新したうえでESTAを申請しましょう。また、ESTAの審査には一定の時間を要するため、出発日の3日前までに申請することが推奨されています。</p>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAを取得してからアメリカへ渡航するまでに期間が空く場合は、渡航前に必ず有効期限を確認してください。ESTAを取得済みであっても、有効期限が切れている場合は利用できません。万が一、有効期限が切れた状態のESTAを取得したまま出発日を迎えた場合、飛行機への搭乗やアメリカへの入国を拒否されるためご注意ください。</p>
        <h3 id="section-2" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ESTAの再申請が必要なケース</h3>
        <p className="text-gray-700 leading-relaxed mb-4">婚姻などにより新たにパスポートを取得した場合や、取得済みのESTA(エスタ)の有効期限が失効した場合は再申請が必要です。ESTAには登録情報や有効期限を更新する制度はありません。これらのケースでは、新たに申請手続きを行う必要があります。今後ESTAを利用してアメリカへの渡航を予定している方は、パスポート情報に変更がないか、またESTAの有効期限が切れていないかを事前に必ず確認してください。パスポート情報と不一致があると判断されたESTAは利用できないため注意が必要です。</p>
        <h3 id="section-3" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">アメリカ滞在中にESTAの有効期限が切れた場合の対応</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAは、<a href="https://www.cbp.gov/" target="_blank" rel="noopener noreferrer" className="text-[#c41e3a] hover:underline">CBP(アメリカ合衆国税関・国境警備局)</a>およびDHS(アメリカ国土安全保障省)が管轄する入国審査制度です。ESTAの有効性が確認されるのはアメリカ入国時であるため、滞在中や出国時にESTAの有効期限が切れていても、原則として影響はありません。入国時に承認されていれば、最長90日間のアメリカ滞在が認められます。ただし、アメリカへ入国する際には、滞在期間に加えて原則6か月以上の残存有効期間があるパスポートが必要です。また、ESTAを利用して渡航する場合は、少なくとも出国日まで有効なパスポートを所持していることが求められます。
なお、アメリカで乗り継ぎを行う場合は、有効なESTAに加えて1年以上の有効期限があるパスポートの所持を求められるケースがあります。必要なパスポートの残存有効期限は、乗り継ぎ先の国や航空会社によって異なるため、渡航前に必ず各国の入国条件を確認することをおすすめします。万が一、入国条件を満たさずに乗り継ぎを行った際には、飛行機への搭乗および入国を拒否される可能性があるため注意が必要です。</p>
        <h3 id="section-5" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ESTAの有効期限が切れていてもグアム・サイパンへ渡航できる条件</h3>
        <p className="text-gray-700 leading-relaxed mb-4">日本国籍者が90日以内の観光や商用、または乗り継ぎを目的としてグアムまたはサイパン(マリアナ諸島)へ渡航する場合、原則としてESTA(エスタ)の申請が求められます。ただし、「グアム-北マリアナ諸島連邦ビザ免除プログラム(Guam-CNMI VWP)」を利用することで、ESTAやビザを取得せずにグアムやサイパンへの渡航が認められる場合があります。Guam-CNMI VWPは、日本を含むアメリカ政府が指定する国の市民を対象とした制度で、45日以内のグアムおよびサイパンへの滞在が認められます。本制度は観光または商用目的に限って利用可能で、渡航前に電子渡航認証「G-CNMI ETA」を申請し、「渡航認証許可」を取得する必要があります。G-CNMI ETAの申請には、有効期限内のパスポートとメールアドレスをご用意ください。一方、45日を超えてのグアムまたはサイパンに滞在する場合は、ESTAの申請か目的に応じたビザの取得が必要となります。</p>
        <p className="text-gray-700 leading-relaxed mb-4">このように、ESTAの有効期限が切れている場合でも、渡航目的や滞在日数によってはGuam-CNMI VWPやアメリカビザを利用することで、グアムまたはサイパンへの渡航が認められます。いずれの入国制度もESTAとは利用条件や申請要件が異なるため、渡航前に必ず内容を確認したうえで申請しましょう。</p>
        <h3 id="section-6" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">乳幼児・未成年者が同伴する渡航にはESTA申請が必要</h3>
        <p className="text-gray-700 leading-relaxed mb-4">90日以内の観光、短期商用、または乗り継ぎを目的としてアメリカへ渡航する場合は、ESTA(エスタ)の申請が求められます。ESTAは年齢を問わず申請対象となるため、乳幼児や未成年者であっても、事前に渡航認証許可を取得しなければなりません。そのため、未成年者のESTA申請は、保護者が代理で手続きを行ってください。また、家族やグループでアメリカへ渡航する場合は、出発日までに全員分のESTAが有効であるかを必ず確認しましょう。万が一、1人でも有効なESTAが確認できない場合、飛行機への搭乗やア メリカへの入国を拒否される可能性があるため注意が必要です。</p>
        <h3 id="section-8" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ESTAの有効期限の確認方法</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)取得後に有効期限の確認を希望する方は、当サイトまでお問い合わせください。当サイトを通じてESTAを申請された方に限り、有効期限の照会を行い、結果をお知らせします。有効期限を確認する際は、こちらの「お問い合わせ」より手続きを行ってください。お問い合わせフォームに進みましたら、必要事項(氏名・申請ID・メールアドレス)を入力し、お問い合わせ内容欄に「ESTAの有効期限の照会を希望」と記入のうえ送信してください。なお、「申 請ID」はESTA申請完了後に当サイトから送信される「申請受付完了メール」にて確認できます。該当するメールが見つからず、申請IDが不明な場合は、省略していただいても問題ありません。
一方、CBP(アメリカ合衆国税関・国境警備局)公式サイトからESTAを申請された方は、当サイトでは有効期限の確認はできません。ESTA申請公式サイトの運営は、CBPおよびDHSの管轄となっているため、当サイトでは認証情報を照会できない仕組みとなっています。そのため、公式サイトから申請された場合は、該当するESTA申請公式サイトへ直接お問い合わせください。</p>
        <h3 id="section-9" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ESTAの更新可否</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)取得後に変更できる情報は、メールアドレスやアメリカ滞在先の住所など一部に限られており、パスポート情報や氏名などの申請者情報を更新することはできません。そのため、ESTA申請後にパスポート情報(パスポート番号、有効期限)・名前・生年月日・性別・国籍などの重要事項に変更が生じた場合は、新たにESTAを再申請する必要があります。特に、婚姻などにより新しいパスポートを取得したにもかかわらず、ESTAの再申請を忘れてしまうケースは少なくありません。アメリカへの渡航前には、必ずESTAの認証情報とパスポート情報に相違や誤りがないかを確認し、問題がある場合は早めに再申請を行いましょう。</p>
        <h3 id="section-10" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ESTAの申請手順</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)の申請は、スマートフォンやパソコンからオンラインで行うことができます。申請にあたっては、有効なパスポート・申請料の支払いに使用するクレジットカード・審査結果を受け取るためのメールアドレスが必要です。申請フォームでは、申請者情報(名前、性別、生年月日)・連絡先(電話番号、メールアドレス)・住所などの基本情報に加え、犯罪歴や健康状態に関する質問への回答が求められます。また、パスポートの顔写真ページの画像と、パスポートとは別に撮影した顔写真のアップロードも必要です。すべての入力が完了した後、申請手数料の支払い手続きを行うことで、ESTAの申請は完了となります。
申請手数料の支払いには、各種クレジットカード(Visa、Master Card、JCB、American Express、Diners Club)が利用できます。なお、家族やグループで申請し代表者がまとめて支払う場合は、申請者本人名義以外のクレジットカードでも支払いが可能です。</p>
        <h3 id="section-11" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ESTAの有効期限と再申請</h3>
        <h3 id="section-12" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ESTAの再申請を行うタイミング</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)の再申請は、いつでも行うことができます。ESTAの有効期限は原則2年間で、有効期限が切れた後はもちろん、有効期限内であっても再申請が可能です。例えば、ESTAを取得した翌日に再度申請することもでき、再申請の回数に制限は設けられていません。ただし、新たにESTAを申請して渡航認証が承認された場合、それまで取得していたESTAの認証情報は無効となるため注意が必要です。ESTAの有効期限は、再申請によって承認された日から起算して、新たに2年間設定されます。</p>
        <h3 id="section-13" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ESTA申請情報の修正方法</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)の申請情報のうち、氏名・生年月日・国籍・パスポートの有効期限などに不備があった場合、申請後に修正することはできません。これらの情報は本人確認における重要事項に該当し、パスポートのMRZコード(機械読み取り部分)やCBPのデータベースと完全に一致している必要があります。万が一、申請後にこれらの情報を修正した場合、入国審査時に正しく照合できなくなる恐れがあるため、CBPのシステム上でも修正は認められていません。そのため、申請後に申請者情報の修正が必要となった場合は、新たにESTAの再申請を行う必要があります。なお、再申請の際には、別途申請手数料の支払いが必要となります。アメリカでの滞在先住所やメールアドレスは重要情報に該当しないため、不備があった際に訂正しなくても入国時に影響はありません。
当サイトを通じてESTAを申請された場合に限り、お申し込み完了後の申請情報の修正依頼を1回まで無料で承っています。修正可能な内容は項目によって対応が異なるため、以下の手順をご確認のうえ、お問い合わせください。</p>
        <p className="text-gray-700 leading-relaxed mb-4">氏名またはパスポート番号を修正する場合</p>
        <p className="text-gray-700 leading-relaxed mb-4">上記に該当しない情報を修正する場合</p>
        <p className="text-gray-700 leading-relaxed mb-4">お問い合わせフォームにて「氏名・申請ID・メールアドレス」を入力したうえで、修正箇所の詳細を記入しお問い合わせください。</p>
        <p className="text-gray-700 leading-relaxed mb-4">再度、ESTA申請をお申し込みください。</p>
        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">申請者情報・パスポート情報(発行日および有効期限)・連絡先・滞在先の修正方法</h4>
        <p className="text-gray-700 leading-relaxed mb-4">当サイトを通じてESTA(エスタ)を申請された場合に限り、生年月日・性別・国籍・出生国・パスポート情報(発行日や有効期限)・連絡先・滞在先情報などの変更が可能です。まず、ESTAの申請フォームにて必須項目をすべて入力してください。入力後は登録内容の確認ページで申請情報に不備がないかを確認し、変更内容の確認画面へ進みます。変更内容の確認画面にて、新たな申請情報と既存の申請情報を確認したうえで送信すると、修正依頼は完了となります。
修正依頼についても、ESTA申請と同様に審査が行われ、結果の通知までに最大3日かかる場合があります。そのため、修正手続きであっても時間に余裕を持って行いましょう。審査が完了すると、登録済みのメールアドレス宛に新たな認証情報(ESTAの有効期限・申請番号)が通知されますので、渡航日まで大切に保管してください。なお、ESTA申請時にフリーメールを登録されている場合は、当サイトにて送信されるメールが迷惑メールフォルダに振り分けられることがありますのでご注意ください。
万が一、上記の手順で修正手続きが完了できなかった場合にはお問い合わせください。当サイトの問い合わせフォームにて「氏名・申請ID・メールアドレス」を入力のうえ、修正が行えない旨をお問い合わせ内容に記載し送信してください。</p>
        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">氏名・パスポート番号の修正方法</h4>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)を申請した際に氏名またはパスポート番号に誤りがあった場合は、当サイトにて修正依頼を承ります。修正を希望する場合は、当サイトの問い合わせフォームへ進み、氏名・申請ID・メールアドレスを入力してください。お問い合わせ内容欄には、氏名またはパスポート番号の修正を希望する旨を記載し、送信しましょう。修正依頼が完了すると、当サイトより新たなESTA申請情報(有効期限・申請番号)を通知します。これらの情報は渡航時に必要となるため、渡航日まで大切に保管してください。</p>
        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">犯罪歴などに関する質問事項で誤って回答した場合の修正方法</h4>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)申請フォームの後半では、犯罪歴の有無や健康状態に関する9つの質問への回答が求められます。これらの質問のうち、誤って1つでも「はい」を選択した場合や、渡航認証を拒否された場合にはご自身でCBP(アメリカ合衆国税関・国境警備局)の申請サイトに問い合わせを行う必要があります。問い合わせは、CBP公式サイト内の「CBP情報センター」へ進み、「質問する」をクリックしてください。「トピック」および「該当する問題」をプルダウンメニューから選択したうえで、「説明」欄に、質問事項を誤って回答した理由を具体的に記載し問い合わせましょう。
なお、犯罪歴や逮捕歴の有無によりビザ免除プログラム(VWP)が利用できない場合は、在日米国大使館または総領事館にて渡航目的に応じたビザの取得をご検討ください。ビザ申請後は、大使館または総領事館での面談や審査が行われ、問題がなければビザが発給されます。ただし、アメリカビザは申請から取得までに1か月以上かかることもあるため、余裕を持って手続きを進めることが重要です。有効なESTAまたはアメリカビザのいずれも取得しないまま渡航日を迎えた場合、飛行機の搭乗やアメリカへの入国を拒否される可能性あるため注意が必要です。</p>
        <h3 id="section-14" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ESTA再申請後に有効期限の告知メールが届く理由</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)を再申請して有効期限を更新した後でも、過去に取得したESTAの有効期限に関する通知メールが届く場合があります。このメールは、CBP(アメリカ合衆国税関・国境警備局)がESTA取得者に対して自動送信しているもので、ESTAの有効期限が近づいていることを知らせる内容です。通知は、ESTA申請時に登録したメールアドレス宛てに送信されますが、必ずしも最新のESTAの有効期限に関する内容とは限りません。そのため、すでにESTAを再申請し、新しい有効期限が設定されている場合でも、過去のESTAに基づく  通知メールが届くことがあります。例えば、過去のESTAと同一のパスポートやメールアドレスを使用して再申請を行った場合、こうしたメールが送信されるケースがあります。通知メールが届いた際は、念のためCBP公式サイトにて、現在有効なESTAの有効期限を確認することをおすすめします。
以下では、CBPから通知されるメールの内容を日本語に翻訳して紹介します。</p>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA Expiration Warning?: ATTENTION! 
Your travel authorization submitted on March 1, 20XX via ESTA will expire within the next 30 days. It is not possible to extend or renew a current ESTA. You will need to reapply at if travel to the United States is intended in the near future. If there are 30 or more days left on the old authorization you will receive a warning message during the application process and be asked if you wish to proceed.</p>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAの有効期限に関する警告
20XX年3月1日にESTA申請された渡航認証は、今後30日以内に有効期限を迎えます。現在有効なESTAを延長または更新することはできません。近い将来にアメリカへの渡航を予定している場合は、ESTAを再申請する必要があります。なお、既存の渡航認証に30日以上の有効期間が残っている場合は、申請手続き中に警告メッセージが表示され、申請を続行するかどうかの確認が求められます。</p>
        <h3 id="section-15" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ESTA有効期限のまとめ</h3>
        <h3 id="section-16" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ESTAの有効期限は原則2年間</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)の有効期限は、原則として2年間です。ただし、ESTA申請時に使用したパスポートの有効期限が2年未満の場合は、ESTAもそのパスポートの有効期限と同日に失効するため注意が必要です。事前にパスポートの有効期限を確認し、残存期間が2年未満の場合は更新後にESTAを申請しましょう。</p>
        <h3 id="section-17" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ESTAの有効期限が切れた場合は再申請が必要</h3>
        <p className="text-gray-700 leading-relaxed mb-4">取得済みのESTA(エスタ)の有効期限が切れており、今後もアメリカへの渡航を予定している場合はESTAを再申請してください。また、アメリカへの入国には、原則として残存有効期間が6か月以上あるパスポートが必要となるため、事前に確認することをおすすめします。残存有効期間が6か月未満の場合は、あらかじめパスポートを更新しておきましょう。なお、有効なアメリカビザを利用して渡航する場合は、ESTAを再申請する必要はありません。</p>
        <h3 id="section-18" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ESTAに更新制度はありません</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)には、パスポートの切替申請のような更新制度はなく、有効期限を延長することはできません。そのため、ESTAの有効期限が近づいている場合や失効した場合、新たにパスポートを取得した場合、または申請情報の変更が必要になった場合には、ESTAを再申請する必要  があります。なお、「ESTAの再申請」は既存の登録情報を更新する手続きではなく、新たに申請を行うものとなるため、再申請の際には別途申請手数料の支払いが必要です。一方で、アメリカでの滞在先住所や連絡先は重要情報に該当しないため、申請後であっても修正することが可能です。氏名やパスポート番号などの重要事項の修正を希望する場合は、当サイトのお問い合わせフォームよりご連絡ください。</p>
        <h3 id="section-19" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">有効期限内でもESTAの再申請は可能</h3>
        <p className="text-gray-700 leading-relaxed mb-4">取得済みのESTA(エスタ)の有効期限が残っている場合でも、ESTAを再申請することは可能です。例えば、ESTAを取  得した翌日に再申請することもでき、再申請の回数に制限は設けられていません。ただし、新たにESTAが承認された時点で、新しい有効期限と申請番号が発行され、最新のESTAのみが有効となります。そのため、それまで取得していたESTAの認証情報は失効するため注意が必要です。なお、ESTAの認証情報は渡航時に必要となるため、紛失しないよう大切に保管しておきましょう。</p>
        <h3 id="section-20" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ESTA再申請後は既存の認証情報が無効になります</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)の有効期限が切れた場合や、新たにパスポートを取得した場合には、ESTAの再申請が必要です。再申請手続きを行い、新 たに渡航認証が承認されると、新しい有効期限と申請番号が発行されます。その時点で、既存のESTA認証情報は取り消され、無効となるため注意が必要です。そのため、有効期限が残っている状態でESTAを再申請する場合は、今後の旅行日程を確認したうえで手続きを行うことをおすすめします。</p>
        <h3 id="section-21" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ESTAが有効期限切れでもアメリカから出国することは可能</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)は、短期観光や商用、または乗り継ぎを目的としてアメリカへ渡航する際に必要となる事前渡航認証制度です。有効なESTAは入国時に必要となりますが、出国時にESTAの有効期限が切れていても、原則として出国審査には影響ありません。ただし、アメリカへ入国する際には、有効なESTAに加えて、原則として残存有効期間が6か月以上あるパスポートが必要となります。また、アメリカで乗り継ぎ(トランジット)を行う場合も、有効なESTAが必要となるため注意が必要です。</p>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA再申請のポイント
ESTA(エスタ)の有効期限が切れた場合や、婚姻などにより新たにパスポートを取得  した場合は、ESTAの再申請が必要となります。なお、「ESTAの再申請」は更新手続きではなく、新たに申請を行うものとなるため、申請時には別途手数料の支払いが求められます。また、ESTAの有効期限が残っている状態でも再申請が可能ですが、新たにESTAが承認された時点で、既存の認証情報は失効します。そのため、再申請を行う際は、今後の旅行日程を確認したうえで手続きを進めましょう。なお、アメリカへ入国する際には、有効なESTAに加え、残存有効期間が6か月以上あるパスポートが必要となるため、事前に準備しておくことをおすすめします</p>
        <h3 id="section-22" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ESTAなしでもグアムお よびサイパンへの渡航は可能</h3>
        <p className="text-gray-700 leading-relaxed mb-4">日本国籍者がグアムおよびサイパン(北マリアナ諸島)へ渡航する場合、条件を満たせばESTA(エスタ)を取得せずに入国が認められる場合があります。アメリカが定める「グアム‐北マリアナ諸島ビザ免除プログラム(Guam-CNMI)」を利用することで、ESTA(エスタ)やビザを取得せずに、グアムおよびサイパン(北マリアナ諸島)への渡航が可能です。ただし、Guam-CNMIはハワイやアメリカ本土への渡航には利用できません。これらの地域へ渡航する場合は、事前にESTAまたは渡航目的に応じたアメリカビザを申請してください。</p>
        <p className="text-gray-700 leading-relaxed mb-4">グアムおよびサイパン渡航時の注意点
日本国籍者が45日以内の観光または短期商用を目的として、グアムおよびサイパン(北マリアナ諸島)へ渡航する場合、「グアム‐北マリアナ諸島ビザ免除プログラム(Guam-CNMI)」を利用することができます。本プログラムの利用条件を満たした場合に限り、ビザやESTA(エスタ)を取得せずに渡航が認められます。Guam-CNMIを利用する際は、事前に電子渡航認証G-CNMI ETAを申請し、渡航認証許可を取得してください。審査には一定の期間を要するため、グアム政府観光局では出発日の７日前までにG-CNMI ETAを申請することを推奨しています。
なお、45日を超えてのグアムまたはサイパン(北マリアナ諸島)に滞在する場合は、ESTA(エスタ)または渡航目的に応じたビザの取得が必要です。また、電子渡航認証G-CNMI ETAおよびESTAはいずれも、観光や短期商用を目的とした渡航に限って利用可能であり、就労や留学は認められていません。</p>
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
            <li><Link href="/list-esta-application/renewal/" className="text-[#1a2744] hover:text-[#c41e3a] text-sm transition-colors">→ ESTAの更新方法について</Link></li>
            <li><Link href="/list-esta-application/passport/" className="text-[#1a2744] hover:text-[#c41e3a] text-sm transition-colors">→ ESTA申請に必要なパスポートについて</Link></li>
            <li><Link href="/list-esta-application/cost/" className="text-[#1a2744] hover:text-[#c41e3a] text-sm transition-colors">→ ESTA申請の料金について</Link></li>
          </ul>
        </div>
      </div>
    </article>
  );
}