import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ESTA公式サイトと偽サイトの見分け方【2026年最新】詐欺に注意',
  description: 'ESTA申請の公式サイト(esta.cbp.dhs.gov)と偽サイト・詐欺サイトの見分け方を解説。高額手数料を請求する模倣サイトの特徴や、安全にESTA申請するためのチェックポイント、被害に遭った場合の対処法を紹介します。',
  alternates: { canonical: 'https://shoenehou-online.jp/list-esta-application/official-vs-fake/' },
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6 md:p-10">
      <Breadcrumb items={[{"label": "ESTA申請関連情報一覧", "href": "/list-esta-application"}, {"label": "ESTA公式サイトと偽サイトの見分け方"}]} />
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-2 pb-3 border-b-2 border-[#c41e3a]">ESTA公式サイトと偽サイトの見分け方【2026年最新】詐欺に注意</h1>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)はアメリカへの短期渡航に必要な電子渡航認証制度です。ESTA申請はオンラインで行うことができますが、インターネット上にはESTA公式サイトを装った偽サイトや詐欺サイトが多数存在しています。これらの偽サイトでは、公式サイトの数倍にもなる高額な手数料を請求されたり、個人情報やクレジットカード情報が不正に収集されたりする被害が報告されています。本記事では、ESTA公式サイトのURLや特徴、偽サイトの見分け方、安全に申請するためのチェックポイント、そして万が一偽サイトで申請してしまった場合の対処法について詳しく解説します。安全にESTA申請を行うために、ぜひ最後までお読みください。</p>
        <div className="bg-[#f8fafc] border border-gray-200 rounded-lg p-5 my-6">
          <p className="text-base font-bold text-[#1a2744] mb-3 flex items-center gap-2"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>目次</p>
          <ul className="space-y-2 text-sm">
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-1" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">ESTA公式サイトのURL（esta.cbp.dhs.gov）</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-2" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">偽サイト・詐欺サイトの特徴5つ</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-3" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">代行サイトと公式サイトの違い</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-4" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">安全にESTA申請するための3つのチェックポイント</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-5" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">もし偽サイトで申請してしまった場合の対処法</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-6" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">よくある質問</a></li>
          </ul>
        </div>

        <h3 id="section-1" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ESTA公式サイトのURL（esta.cbp.dhs.gov）</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)の公式申請サイトは、アメリカ合衆国税関・国境警備局(CBP: Customs and Border Protection)が運営しています。公式サイトのURLは「<a href="https://esta.cbp.dhs.gov/" target="_blank" rel="noopener noreferrer" className="text-[#c41e3a] hover:underline">https://esta.cbp.dhs.gov/</a>」です。このURLには「.gov」というアメリカ政府機関専用のドメインが含まれており、民間企業や個人が「.gov」ドメインを取得することはできません。そのため、URLに「.gov」が含まれているかどうかが、公式サイトを見分ける最も確実な方法です。</p>
        <p className="text-gray-700 leading-relaxed mb-4">公式サイトでは、ESTA申請の手数料は21ドル(2026年4月現在)となっています。この金額は、渡航認証の申請処理費用4ドルと、承認された場合の認証費用17ドルで構成されています。公式サイトで申請を行えば、この21ドル以外の費用は一切発生しません。なお、申請手数料の支払いにはクレジットカード(Visa、Master Card、American Express、Discover)またはPayPalが利用可能です。</p>
        <p className="text-gray-700 leading-relaxed mb-4">公式サイトは英語をはじめとする多言語に対応しており、日本語での表示も可能です。ページ上部の言語切替メニューから「日本語」を選択することで、日本語の画面で申請手続きを進めることができます。ただし、申請フォームへの入力はすべて英語(ローマ字)で行う必要があります。また、公式サイトにはスマートフォン向けのESTA Mobile(ESTAモバイル)アプリも用意されており、iOSおよびAndroidの両方に対応しています。</p>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA公式サイトの特徴をまとめると、以下のとおりです。URLのドメインが「.gov」であること、申請手数料が21ドルであること、CBP(アメリカ合衆国税関・国境警備局)が運営元であること、SSL証明書が有効であること、そしてアメリカ政府の公式ロゴが表示されていることです。これらの特徴を覚えておくことで、偽サイトとの区別が容易になります。</p>

        <h3 id="section-2" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">偽サイト・詐欺サイトの特徴5つ</h3>
        <p className="text-gray-700 leading-relaxed mb-4">インターネット上には、ESTA公式サイトを模倣した偽サイトや詐欺サイトが多数存在しています。これらのサイトは、公式サイトに似たデザインや名称を使用しており、一見すると公式サイトと区別がつきにくい場合があります。以下に、偽サイト・詐欺サイトに共通する5つの特徴を紹介します。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">特徴1：URLが公式サイトと異なる</h4>
        <p className="text-gray-700 leading-relaxed mb-4">偽サイトの最も分かりやすい特徴は、URLが公式サイト(esta.cbp.dhs.gov)と異なることです。偽サイトでは「.com」「.org」「.net」「.jp」などの一般的なドメインが使用されており、「.gov」ドメインは含まれていません。例えば、「esta-application.com」や「esta-online.org」「usa-esta.jp」のようなURLが偽サイトの典型例です。URLに「esta」という文字が含まれていても、ドメインが「.gov」でなければ公式サイトではありません。また、「gov」という文字列をURLの一部に含めて公式サイトに見せかける手口も確認されています。例えば「esta-gov.com」のようなURLは、「.gov」ドメインではないため公式サイトではありません。ESTA申請を行う際は、必ずブラウザのアドレスバーに表示されるURLを確認してください。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">特徴2：高額な手数料を請求する</h4>
        <p className="text-gray-700 leading-relaxed mb-4">偽サイトや模倣サイトの多くは、公式サイトの申請手数料(21ドル)を大幅に上回る金額を請求します。50ドルから100ドル以上の手数料を設定しているケースも珍しくなく、中には日本円で1万円以上を請求するサイトも存在します。これらのサイトでは「代行手数料」「サービス料」「処理手数料」などの名目で追加費用を加算しており、合計金額が不当に高くなっています。公式サイトでの申請手数料は21ドルのみですので、これを大幅に超える金額が提示された場合は偽サイトの可能性を疑いましょう。ただし、後述するように合法的な代行サービスも存在するため、手数料が高いことだけをもって詐欺サイトと断定することはできません。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">特徴3：日本語で安心感を装う</h4>
        <p className="text-gray-700 leading-relaxed mb-4">偽サイトの中には、完全な日本語対応を前面に打ち出し、日本人利用者に安心感を与えようとするものがあります。「日本語サポート付き」「日本人スタッフが対応」「24時間日本語対応」などの表記で、公式サイトよりも利用しやすい印象を与えようとします。公式サイトも日本語表示に対応していますが、偽サイトはさらに分かりやすい日本語の説明文や手順を掲載することで、公式サイトよりも親切であるかのように装います。特に、初めてESTA申請を行う方は、日本語で詳しく説明されているサイトに安心感を覚えやすいため、注意が必要です。日本語対応であること自体は悪いことではありませんが、URLが「.gov」でないサイトが公式サイトを名乗っている場合は、偽サイトと判断してください。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">特徴4：Google広告で上位表示される</h4>
        <p className="text-gray-700 leading-relaxed mb-4">偽サイトや模倣サイトの多くは、Google検索で「ESTA 申請」「ESTA 公式」などのキーワードを検索した際に、広告枠として上位に表示されます。Google検索では、検索結果の上部に「スポンサー」や「広告」と表示されるリスティング広告が掲載されますが、これは費用を支払えば誰でも掲載できるものです。そのため、検索結果の最上位に表示されているからといって、公式サイトであるとは限りません。広告として表示されているサイトにアクセスする際は、必ずURLを確認してください。特に「ESTA 申請」で検索した際に、広告枠にesta.cbp.dhs.gov以外のURLが表示されている場合は、公式サイトではないためご注意ください。安全にESTA公式サイトへアクセスするには、ブラウザのアドレスバーに直接「esta.cbp.dhs.gov」と入力する方法が最も確実です。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">特徴5：個人情報収集を目的とする</h4>
        <p className="text-gray-700 leading-relaxed mb-4">一部の悪質な偽サイトは、ESTA申請を装って個人情報やクレジットカード情報を不正に収集することを目的としています。これらのサイトでは、申請フォームにパスポート番号、生年月日、住所、クレジットカード番号などの個人情報を入力させますが、実際にはESTA申請は行われず、入力された情報が第三者に売却されたり、不正利用されたりするリスクがあります。特に、パスポートの画像アップロードを求められる場合は注意が必要です。公式サイトでもパスポート情報の入力は必要ですが、偽サイトに情報を提供してしまうと、身分詐称やクレジットカードの不正利用などの被害に遭う可能性があります。不審なサイトで個人情報を入力してしまった場合は、速やかにクレジットカード会社に連絡し、カードの利用停止手続きを行ってください。</p>

        <h3 id="section-3" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">代行サイトと公式サイトの違い</h3>
        <p className="text-gray-700 leading-relaxed mb-4">インターネット上には、ESTA申請の代行サービスを提供する合法的なウェブサイトも存在しています。これらの代行サイトは、申請者に代わってESTA申請の手続きを行うサービスを提供しており、偽サイトや詐欺サイトとは性質が異なります。代行サイトの多くは、申請手続きのサポート、入力内容の確認、日本語でのカスタマーサポートなどの付加サービスを提供しており、その対価としてサービス手数料を請求しています。</p>
        <p className="text-gray-700 leading-relaxed mb-4">合法的なESTA申請代行サイトと偽サイト・詐欺サイトを見分けるポイントは以下のとおりです。まず、合法的な代行サイトは、自社が公式サイトではないことを明記しています。サイト上に「当サイトはCBP公式サイトではありません」「ESTA申請代行サービスです」などの注意書きが記載されている場合は、合法的な代行サイトである可能性が高いです。また、運営会社の情報(会社名、所在地、連絡先)が明確に記載されていること、利用規約やプライバシーポリシーが整備されていること、料金体系が透明であること(公式手数料と代行手数料の内訳が明示されていること)なども、合法的な代行サイトの特徴です。</p>
        <p className="text-gray-700 leading-relaxed mb-4">一方、偽サイト・詐欺サイトは、あたかも自社が公式サイトであるかのように装い、利用者を誤解させようとします。運営会社の情報が不明確であったり、料金の内訳が表示されなかったりする場合は、詐欺サイトの可能性があるため注意が必要です。ESTA申請代行サービスを利用する場合は、運営元の信頼性を十分に確認したうえで利用しましょう。なお、ESTA申請を公式サイトから直接行えば、代行手数料は一切かかりません。英語に不安がある場合でも、公式サイトには日本語表示機能があるため、多くの方が公式サイトから問題なく申請を完了しています。</p>
        <p className="text-gray-700 leading-relaxed mb-4">代行サイトを利用するメリットとしては、申請内容の事前確認によるミスの防止、日本語でのサポート対応、申請手続きの簡略化などが挙げられます。特に、グループや家族での申請を一括で行いたい場合や、申請内容に不安がある場合は、信頼できる代行サイトの利用を検討してもよいでしょう。ただし、代行サイトを利用する際は、必ず料金体系を事前に確認し、不当に高額な手数料を請求されないよう注意してください。</p>

        <h3 id="section-4" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">安全にESTA申請するための3つのチェックポイント</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA申請を安全に行うために、以下の3つのチェックポイントを必ず確認してください。これらのポイントを押さえておくことで、偽サイトや詐欺サイトによる被害を未然に防ぐことができます。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">チェックポイント1：URLが「esta.cbp.dhs.gov」であることを確認する</h4>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA申請を行う際に最も重要なのは、アクセスしているサイトのURLを確認することです。公式サイトのURLは「https://esta.cbp.dhs.gov/」です。ブラウザのアドレスバーに表示されているURLがこれと一致していることを必ず確認してください。URLに「.gov」が含まれていない場合は、公式サイトではありません。また、URLの先頭が「https://」で始まっていることも確認しましょう。「https://」は通信が暗号化されていることを示しており、ブラウザのアドレスバーに鍵マークが表示されます。検索エンジンから公式サイトへアクセスする場合は、広告枠ではなくオーガニック検索結果(自然検索)からアクセスするか、ブラウザのアドレスバーに直接URLを入力してアクセスすることをおすすめします。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">チェックポイント2：申請手数料が21ドルであることを確認する</h4>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA公式サイトでの申請手数料は21ドル(2026年4月現在)です。この金額を大幅に上回る手数料が提示された場合は、公式サイトではない可能性があります。ただし、前述のとおり、合法的な代行サービスでは公式手数料に加えて代行手数料が発生するため、合計金額が21ドルを超えることがあります。この場合は、代行手数料の内訳が明示されているかどうかを確認してください。なお、ESTAの申請手数料は変更される場合があるため、最新の手数料額はCBP公式サイトで確認することをおすすめします。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">チェックポイント3：運営元の信頼性を確認する</h4>
        <p className="text-gray-700 leading-relaxed mb-4">公式サイト以外のサイトでESTA申請を行う場合は、そのサイトの運営元の信頼性を必ず確認してください。具体的には、運営会社の名称・所在地・連絡先が明記されているか、利用規約やプライバシーポリシーが整備されているか、サイト上に「公式サイトではない」旨の記載があるかなどを確認しましょう。また、インターネット上の口コミや評判を調べることも有効です。運営元の情報が一切記載されていないサイトや、連絡先が不明なサイトでの申請は避けてください。さらに、支払い方法についても確認が必要です。銀行振込のみを受け付けるサイトや、暗号資産(仮想通貨)での支払いを求めるサイトは、詐欺サイトの可能性が高いため注意してください。クレジットカード決済に対応している場合でも、決済ページのURLが暗号化(https)されていることを確認しましょう。</p>

        <h3 id="section-5" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">もし偽サイトで申請してしまった場合の対処法</h3>
        <p className="text-gray-700 leading-relaxed mb-4">万が一、偽サイトや詐欺サイトでESTA申請を行ってしまった場合は、以下の手順で速やかに対処してください。早期に対応することで、被害を最小限に抑えることができます。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">クレジットカード会社に連絡する</h4>
        <p className="text-gray-700 leading-relaxed mb-4">偽サイトでクレジットカード情報を入力してしまった場合は、直ちにクレジットカード会社に連絡し、カードの利用停止手続きを行ってください。不正利用が発生している場合は、カード会社に被害を報告し、チャージバック(支払い取消し)の手続きを依頼しましょう。多くのカード会社では、不正利用に対する補償制度が設けられているため、早期に連絡すれば被害額の全額または一部が返金される場合があります。カード会社の連絡先は、カード裏面に記載されている電話番号で確認できます。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">パスポートの状況を確認する</h4>
        <p className="text-gray-700 leading-relaxed mb-4">偽サイトにパスポート情報を入力してしまった場合は、パスポートの不正利用リスクに注意してください。パスポート番号や個人情報が漏洩した場合でも、パスポートそのものを紛失していなければ、ただちにパスポートが不正利用される可能性は低いですが、心配な場合は最寄りの旅券事務所に相談することをおすすめします。また、偽サイトでESTA申請を行った場合、実際にはESTAが正しく申請されていない可能性があるため、必ずCBP公式サイト(esta.cbp.dhs.gov)で申請状況を確認してください。ESTAが承認されていない場合は、公式サイトから改めて申請を行う必要があります。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">消費生活センターや警察に相談する</h4>
        <p className="text-gray-700 leading-relaxed mb-4">偽サイトによる被害に遭った場合は、国民生活センターや最寄りの消費生活センターに相談することもできます。消費者ホットライン(局番なし188)に電話すると、最寄りの消費生活センターにつながります。また、金銭的な被害が発生している場合や、個人情報の不正利用が疑われる場合は、最寄りの警察署またはサイバー犯罪相談窓口に相談してください。都道府県警察のサイバー犯罪相談窓口では、インターネット上の詐欺や不正アクセスに関する相談を受け付けています。被害を報告する際は、偽サイトのURL、画面のスクリーンショット、支払い記録などの証拠を保存しておくと、調査がスムーズに進みます。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">公式サイトでESTAの申請状況を確認する</h4>
        <p className="text-gray-700 leading-relaxed mb-4">偽サイトで申請手続きを行った場合、実際にはESTAが正しく申請・承認されていない可能性があります。渡航前に必ずCBP公式サイトでESTAの申請状況を確認してください。公式サイトのトップページにある「既存の申請を確認」から、パスポート番号や生年月日などを入力することで、ESTAの承認状況を確認できます。ESTAが承認されていない場合は、公式サイトから改めて申請を行ってください。渡航日まで十分な時間がない場合でも、ESTAの審査は通常72時間以内に完了しますので、早急に再申請を行いましょう。</p>

        <h3 id="section-6" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">よくある質問</h3>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">Q1. ESTA公式サイトのURLは何ですか？</h4>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA公式サイトのURLは「https://esta.cbp.dhs.gov/」です。アメリカ合衆国税関・国境警備局(CBP)が運営しており、「.gov」はアメリカ政府機関専用のドメインです。ESTA申請を行う際は、ブラウザのアドレスバーに表示されるURLがこのアドレスと一致していることを必ず確認してください。検索エンジンの広告枠に表示されるサイトは公式サイトではない可能性があるため、直接URLを入力してアクセスする方法が最も安全です。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">Q2. ESTA申請の公式手数料はいくらですか？</h4>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA公式サイトでの申請手数料は21ドル(2026年4月現在)です。この金額は、申請処理費用4ドルと認証費用17ドルで構成されています。公式サイトで申請する場合、この21ドル以外の費用は発生しません。21ドルを大幅に超える金額が提示された場合は、公式サイトではなく代行サイトまたは偽サイトである可能性がありますので、サイトの信頼性を確認してください。なお、申請手数料は今後変更される場合があります。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">Q3. 偽サイトで申請してしまった場合、ESTAは有効ですか？</h4>
        <p className="text-gray-700 leading-relaxed mb-4">偽サイトで申請手続きを行った場合、ESTAが正しく申請されていない可能性があります。代行サイトの中には、実際にCBPに対してESTA申請を行うものもありますが、詐欺サイトの場合は申請自体が行われないことがあります。いずれの場合も、CBP公式サイト(esta.cbp.dhs.gov)の「既存の申請を確認」ページで、ESTAの承認状況を確認することをおすすめします。承認されていない場合は、公式サイトから改めて申請を行ってください。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">Q4. 代行サイトを利用してESTA申請しても問題ありませんか？</h4>
        <p className="text-gray-700 leading-relaxed mb-4">合法的なESTA申請代行サイトを利用すること自体は問題ありません。代行サイトでは、申請内容の確認やサポートなどの付加サービスが提供されており、公式手数料に加えて代行手数料が発生します。ただし、代行サイトを利用する際は、運営元の信頼性を十分に確認してください。公式サイトではないことが明記されているか、運営会社の情報が公開されているか、料金体系が透明であるかなどを確認したうえで利用することをおすすめします。なお、ESTA公式サイトでも日本語表示に対応しているため、多くの方は公式サイトから直接申請を完了できます。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">Q5. 偽サイトの被害を報告する方法はありますか？</h4>
        <p className="text-gray-700 leading-relaxed mb-4">偽サイトによる被害を報告する方法はいくつかあります。金銭的な被害が発生した場合は、最寄りの警察署またはサイバー犯罪相談窓口に相談してください。また、消費者ホットライン(局番なし188)に電話すると、最寄りの消費生活センターに相談することができます。クレジットカードの不正利用が発生した場合は、カード会社に連絡して利用停止手続きとチャージバック(支払い取消し)を依頼してください。さらに、フィッシングサイト(偽サイト)を発見した場合は、フィッシング対策協議会(info@antiphishing.jp)に報告することもできます。被害の証拠(偽サイトのURL、画面キャプチャ、支払い記録)を保存しておくと、報告や相談がスムーズに進みます。</p>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-bold text-[#1a2744] mb-4">関連記事</h3>
          <div className="grid gap-2">
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/esta" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">ESTA(エスタ)とは？事前入国審査制度を解説</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/esta-flow" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">【記入例付き】ESTAの申請方法を解説</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/fee" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">ESTAの申請料金</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/official-cbp" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">公式ウェブサイトについて解説</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/address-guide" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">ESTA申請の住所・出生地・勤務先の英語表記ガイド</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/group-family" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">ESTAのグループ申請・家族申請の方法</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/passport" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">ESTAとパスポートの関係</Link></div>
          </div>
        </div>
      </div>
    </article>
  );
}
