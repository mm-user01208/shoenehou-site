import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ESTAのグループ申請・家族申請の方法【2026年最新】代理申請も解説',
  description: 'ESTAのグループ申請・家族申請の方法をステップバイステップで解説。子供や高齢者の代理申請、グループ申請に必要な書類、注意点、アプリでの申請方法も紹介。2026年最新情報。',
  alternates: { canonical: 'https://shoenehou-online.jp/list-esta-application/group-family/' },
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6 md:p-10">
      <Breadcrumb items={[{"label": "ESTA申請関連情報一覧", "href": "/list-esta-application"}, {"label": "ESTAのグループ申請・家族申請の方法"}]} />
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-2 pb-3 border-b-2 border-[#c41e3a]">ESTAのグループ申請・家族申請の方法【2026年最新】代理申請も解説</h1>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)は、家族やグループで一括して申請を行うことができます。グループ申請を利用すれば、家族や同行者全員分のESTAを一度の手続きでまとめて申請でき、申請手数料の支払いも代表者がまとめて行うことが可能です。また、ESTAは年齢を問わず申請が必要なため、乳幼児や未成年者の分も保護者が代理で申請する必要があります。本記事では、ESTAのグループ申請の手順、家族の代理申請の方法、必要な情報・書類、注意点、そしてアプリでの申請方法について詳しく解説します。家族やグループでアメリカへの渡航を予定している方は、ぜひ参考にしてください。</p>
        <div className="bg-[#f8fafc] border border-gray-200 rounded-lg p-5 my-6">
          <p className="text-base font-bold text-[#1a2744] mb-3 flex items-center gap-2"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>目次</p>
          <ul className="space-y-2 text-sm">
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-1" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">ESTAのグループ申請とは</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-2" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">グループ申請の手順（ステップバイステップ）</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-3" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">家族の代理申請の方法（子供・高齢者の申請）</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-4" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">グループ申請で必要な情報・書類</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-5" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">グループ申請の注意点</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-6" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">アプリでのグループ申請方法</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-7" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">よくある質問</a></li>
          </ul>
        </div>

        <h3 id="section-1" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ESTAのグループ申請とは</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAのグループ申請とは、家族や同行者など複数人分のESTA申請を一括して行う方法です。CBP(アメリカ合衆国税関・国境警備局)の公式サイトでは、「グループ申請(Group Application)」の機能が提供されており、最大50名分のESTA申請をまとめて行うことができます。グループ申請を利用することで、代表者1名が全員分の申請手続きと手数料の支払いを一括で行えるため、個別に申請する場合と比べて手続きの手間が大幅に軽減されます。</p>
        <p className="text-gray-700 leading-relaxed mb-4">グループ申請は、家族での旅行はもちろん、友人同士のグループ旅行、会社の出張チーム、学校の研修旅行など、さまざまなケースで利用できます。グループ申請を行っても、各申請者のESTAは個別に審査されるため、グループ内の1人が不承認となっても、他のメンバーの審査結果には影響しません。つまり、グループ申請はあくまでも申請手続きをまとめて行うための機能であり、審査自体は個人単位で行われます。</p>
        <p className="text-gray-700 leading-relaxed mb-4">なお、グループ申請を行う場合でも、申請手数料は1人あたり21ドル(2026年4月現在)です。グループ申請による割引制度はありません。5人分のグループ申請であれば、合計105ドル(21ドル×5人)の手数料が発生します。支払いは代表者のクレジットカードまたはPayPalでまとめて行うことができます。</p>
        <p className="text-gray-700 leading-relaxed mb-4">グループ申請と個人申請のどちらを選んでも、ESTAの審査内容や承認までの時間に違いはありません。グループ申請は手続きの効率化を目的とした機能であり、審査の優先度が変わることはありません。いずれの方法でも、ESTAの審査結果は通常72時間以内に通知されます。</p>

        <h3 id="section-2" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">グループ申請の手順（ステップバイステップ）</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAのグループ申請は、CBP公式サイト(esta.cbp.dhs.gov)から行います。以下に、グループ申請の手順をステップバイステップで解説します。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">ステップ1：CBP公式サイトにアクセスする</h4>
        <p className="text-gray-700 leading-relaxed mb-4">ブラウザで「https://esta.cbp.dhs.gov/」にアクセスします。トップページが表示されたら、言語を「日本語」に切り替えることができます。ページ上部の言語切替メニューから「日本語」を選択してください。なお、申請フォームへの入力は日本語表示であっても、すべて英語(ローマ字)で行います。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">ステップ2：「グループ申請」を選択する</h4>
        <p className="text-gray-700 leading-relaxed mb-4">トップページに表示される申請オプションから「グループによる申請(Group of Applications)」を選択します。個人申請の場合は「個人による申請(Individual Application)」を選択しますが、2名以上の申請を行う場合は「グループによる申請」を選択してください。グループ申請を選択すると、まずグループの代表者(連絡先担当者)の情報を入力する画面が表示されます。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">ステップ3：グループ代表者の情報を入力する</h4>
        <p className="text-gray-700 leading-relaxed mb-4">グループの代表者(Point of Contact)の情報を入力します。代表者の氏名、メールアドレス、電話番号などを入力してください。代表者は必ずしもグループの申請者である必要はありませんが、審査結果の通知やグループIDの管理を行う責任者となります。入力したメールアドレス宛にグループIDが送信されますので、メールアドレスは正確に入力してください。グループIDは、申請状況の確認や追加の申請者を登録する際に必要となります。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">ステップ4：申請者の情報を1人ずつ入力する</h4>
        <p className="text-gray-700 leading-relaxed mb-4">グループ代表者の情報を入力した後、各申請者の情報を1人ずつ入力します。入力項目は個人申請の場合と同じで、パスポート情報、個人情報(氏名、生年月日、性別、出生地)、連絡先情報、勤務先情報、渡航情報(アメリカ滞在先住所)、そして適格性に関する質問(犯罪歴の有無など)への回答が求められます。1人分の入力が完了したら、次の申請者の情報入力に進みます。この作業をグループの全員分繰り返します。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">ステップ5：入力内容を確認する</h4>
        <p className="text-gray-700 leading-relaxed mb-4">全員分の情報入力が完了したら、登録内容の確認画面が表示されます。各申請者の情報に誤りがないか、1人ずつ慎重に確認してください。特に、パスポート番号、氏名のスペル、生年月日、国籍などの重要項目は、パスポートの記載内容と完全に一致していることを確認することが重要です。誤りがある場合は、この段階で修正してください。申請手続き完了後は、一部の項目を除いて修正ができなくなります。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">ステップ6：申請手数料を支払う</h4>
        <p className="text-gray-700 leading-relaxed mb-4">入力内容の確認が完了したら、申請手数料の支払い手続きに進みます。グループ申請では、全員分の手数料を代表者のクレジットカードまたはPayPalでまとめて支払うことができます。申請手数料は1人あたり21ドルで、グループの人数分の合計額が請求されます。利用可能なクレジットカードはVisa、Master Card、American Express、Discoverです。支払いが完了すると、申請手続きは完了となり、審査が開始されます。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">ステップ7：審査結果を確認する</h4>
        <p className="text-gray-700 leading-relaxed mb-4">申請手続きが完了すると、各申請者のESTAは個別に審査されます。審査結果は通常72時間以内に通知されます。グループ代表者のメールアドレス宛に審査結果の通知が届くほか、CBP公式サイトでグループIDを使用して各申請者の審査状況を確認することもできます。審査結果は「渡航認証許可(Authorization Approved)」「渡航認証保留(Authorization Pending)」「渡航認証拒否(Travel Not Authorized)」のいずれかで表示されます。</p>

        <h3 id="section-3" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">家族の代理申請の方法（子供・高齢者の申請）</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)は年齢を問わずアメリカへの渡航には必要であるため、乳幼児や未成年者であっても申請が必要です。自分で申請手続きを行うことが困難な子供や高齢者の場合は、家族が代理で申請を行うことができます。代理申請は、CBP(アメリカ合衆国税関・国境警備局)が公式に認めている方法であり、第三者が申請者の情報を入力して申請手続きを行うことが可能です。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">子供（乳幼児・未成年者）の代理申請</h4>
        <p className="text-gray-700 leading-relaxed mb-4">子供のESTA申請は、保護者(親権者)が代理で行います。代理申請であっても、入力する情報は子供本人のものを使用してください。つまり、パスポート情報、氏名、生年月日、出生地などはすべて子供のパスポートに記載されている情報を入力します。代理申請者(保護者)の情報を入力するのではなく、あくまでも渡航する本人(子供)の情報を入力する点にご注意ください。</p>
        <p className="text-gray-700 leading-relaxed mb-4">子供のパスポートは、年齢に関係なく本人名義のものが必要です。乳幼児であっても、保護者のパスポートに併記する形式ではなく、子供本人のパスポートを取得しなければなりません。パスポートの申請は最寄りのパスポートセンター(旅券事務所)で行うことができます。12歳未満の子供のパスポートは有効期間が5年間です。</p>
        <p className="text-gray-700 leading-relaxed mb-4">子供のESTA申請で注意すべき点は、勤務先情報と連絡先メールアドレスの入力です。未就学児や小学生の場合、勤務先情報は「N/A」や「Not Employed」と入力します。中学生や高校生の場合は、学校名を勤務先欄に入力し、Job Titleに「Student」と入力することができます。メールアドレスは、子供本人のメールアドレスがない場合は保護者のメールアドレスを入力してください。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">高齢者の代理申請</h4>
        <p className="text-gray-700 leading-relaxed mb-4">インターネットの操作に不慣れな高齢の方のESTA申請も、家族が代理で行うことができます。子供の代理申請と同様に、入力する情報はすべて渡航する本人(高齢者)のものを使用してください。パスポート情報、氏名、生年月日、連絡先情報などは、本人のパスポートや書類を参照しながら正確に入力します。</p>
        <p className="text-gray-700 leading-relaxed mb-4">高齢者の代理申請で特に注意すべき点は、パスポートの有効期限の確認です。ESTA申請にはICチップ付きの有効なパスポート(eパスポート)が必要です。古いパスポートにはICチップが搭載されていない場合がありますので、事前に確認してください。ICチップ付きパスポートは、表紙にICチップのマーク(カメラのアイコンに似たマーク)が印字されています。ICチップが搭載されていないパスポートではESTAの申請ができないため、新しいパスポートに切り替える必要があります。</p>
        <p className="text-gray-700 leading-relaxed mb-4">また、退職されている場合の勤務先情報は「Retired」と入力します。犯罪歴や健康状態に関する質問への回答は、必ず本人に確認のうえ、正確に回答してください。代理申請であっても、虚偽の情報を入力した場合はESTAが取り消される可能性があります。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">家族以外の第三者による代理申請</h4>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAの代理申請は、家族に限らず第三者が行うことも可能です。例えば、旅行会社、ESTA申請代行業者、会社の総務担当者などが申請者に代わって申請手続きを行うことができます。ただし、代理で申請を行う場合でも、入力する情報はすべて渡航する本人のものを使用する必要があります。また、犯罪歴や健康状態に関する質問への回答は本人に確認のうえ、正確に入力してください。代理申請の場合、申請手数料の支払いは代理人のクレジットカードで行うことができます。</p>

        <h3 id="section-4" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">グループ申請で必要な情報・書類</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAのグループ申請を行う際には、グループ全員分の以下の情報・書類を事前に準備してください。申請手続き中に情報が不足していると、入力が滞り申請完了までに時間がかかってしまいます。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">全員分のパスポート</h4>
        <p className="text-gray-700 leading-relaxed mb-4">グループ全員分の有効なパスポートが必要です。ESTA申請には、ICチップ付きのパスポート(eパスポート)が求められます。各パスポートから、パスポート番号、発行日、有効期限、氏名(英語表記)、生年月日、国籍、発行国などの情報を入力します。パスポートの有効期限が切れている場合や、ICチップが搭載されていない場合は、事前にパスポートの更新が必要です。なお、日本のパスポートは2006年3月20日以降に発行されたものにICチップが搭載されています。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">各申請者の個人情報</h4>
        <p className="text-gray-700 leading-relaxed mb-4">各申請者について、以下の個人情報を準備してください。氏名(パスポートに記載されている英語表記)、性別、生年月日、出生地(市区町村名と国名)、国籍、現住所(英語表記)、メールアドレス、電話番号です。また、勤務先情報(会社名、役職、住所、電話番号)も入力が求められます。学生の場合は学校名、無職の場合は「Not Employed」、退職者は「Retired」と入力します。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">アメリカ滞在先の情報</h4>
        <p className="text-gray-700 leading-relaxed mb-4">アメリカでの滞在先の住所と連絡先情報を準備してください。ホテルに宿泊する場合はホテルの名称、住所、電話番号が必要です。友人や親族宅に滞在する場合は、その方の氏名、住所、電話番号を準備してください。グループ全員が同じ滞在先の場合でも、各申請者の入力フォームにそれぞれ滞在先情報を入力する必要があります。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">クレジットカードまたはPayPalアカウント</h4>
        <p className="text-gray-700 leading-relaxed mb-4">申請手数料の支払いに使用するクレジットカードまたはPayPalアカウントを準備してください。グループ申請では、代表者のクレジットカードで全員分の手数料をまとめて支払うことができます。利用可能なクレジットカードブランドはVisa、Master Card、American Express、Discoverです。JCBやDiners Clubは公式サイトでの支払いには対応していない場合がありますのでご注意ください。申請者本人名義以外のクレジットカードでも支払いが可能です。</p>

        <h3 id="section-5" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">グループ申請の注意点</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAのグループ申請を行う際には、以下の注意点を確認してください。これらのポイントを事前に把握しておくことで、スムーズに申請手続きを進めることができます。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">全員分のパスポートが手元に必要</h4>
        <p className="text-gray-700 leading-relaxed mb-4">グループ申請では、各申請者のパスポート情報を正確に入力する必要があるため、全員分のパスポート(原本またはコピー)を手元に用意してから申請手続きを開始してください。パスポート番号や有効期限、氏名のスペルなどは、記憶に頼らずパスポートの記載内容を見ながら入力することが重要です。入力ミスがあると、入国審査で問題が生じたり、ESTAが不承認となったりする可能性があります。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">申請者の情報は1人ずつ入力する</h4>
        <p className="text-gray-700 leading-relaxed mb-4">グループ申請であっても、各申請者の情報は1人ずつ個別に入力する必要があります。一括入力やCSVファイルによるインポートなどの機能はありません。そのため、グループの人数が多い場合は、申請手続きにかなりの時間を要します。5人分の申請であれば30分～1時間程度、10人分であれば1時間以上かかる場合があります。時間に余裕を持って申請手続きを行いましょう。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">審査は個人単位で行われる</h4>
        <p className="text-gray-700 leading-relaxed mb-4">グループ申請を行っても、ESTAの審査は各申請者ごとに個別に行われます。そのため、グループの中で審査結果が異なる場合があります。例えば、4人が「渡航認証許可」、1人が「渡航認証保留」または「渡航認証拒否」となる可能性があります。1人でも渡航認証が承認されない場合は、その方はESTAを利用してアメリカへ渡航することができません。渡航認証が拒否された場合は、在日米国大使館または総領事館にてビザの申請を検討してください。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">グループIDの管理に注意</h4>
        <p className="text-gray-700 leading-relaxed mb-4">グループ申請を行うと、グループIDが発行されます。このグループIDは、申請状況の確認や追加の申請者を登録する際に必要となります。グループIDを紛失した場合、申請状況の確認が困難になりますので、代表者のメールアドレスに送信されるグループIDを必ず保存しておいてください。また、各申請者のESTA申請番号も個別に発行されますので、併せて保管しておくことをおすすめします。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">ESTAの有効期限は個人ごとに異なる</h4>
        <p className="text-gray-700 leading-relaxed mb-4">グループ申請で同時に申請を行った場合でも、各申請者のESTAの有効期限は個人ごとに設定されます。ESTAの有効期限は承認日から2年間ですが、パスポートの有効期限が2年未満の場合はパスポートの有効期限と同日に失効します。そのため、グループの中でパスポートの有効期限が異なる場合、ESTAの有効期限もそれぞれ異なることになります。次回の渡航時には、全員分のESTAの有効期限を個別に確認してください。</p>

        <h3 id="section-6" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">アプリでのグループ申請方法</h3>
        <p className="text-gray-700 leading-relaxed mb-4">CBP(アメリカ合衆国税関・国境警備局)は、スマートフォン向けのESTA Mobile(ESTAモバイル)アプリを提供しています。このアプリはiOS(iPhone/iPad)およびAndroidの両方に対応しており、App StoreまたはGoogle Play Storeから無料でダウンロードできます。ESTA Mobileアプリでも、ウェブサイトと同様にグループ申請を行うことが可能です。</p>
        <p className="text-gray-700 leading-relaxed mb-4">アプリでグループ申請を行う手順は以下のとおりです。まず、App StoreまたはGoogle Play Storeで「ESTA Mobile」を検索し、アプリをダウンロードします。アプリを起動すると、「個人申請(Individual Application)」と「グループ申請(Group of Applications)」の選択画面が表示されますので、「グループ申請」を選択してください。その後の手順は、ウェブサイトでのグループ申請とほぼ同じです。グループ代表者の情報を入力し、各申請者の情報を1人ずつ入力していきます。</p>
        <p className="text-gray-700 leading-relaxed mb-4">アプリの利点として、パスポートのスキャン機能が挙げられます。アプリのカメラ機能を使用してパスポートの顔写真ページをスキャンすると、パスポート番号、氏名、生年月日、有効期限などの情報が自動的に読み取られ、入力フォームに反映されます。この機能を利用することで、手動入力によるミスを防ぐことができます。ただし、スキャン結果が正しいかどうかは必ず確認してください。光の反射やパスポートの状態によっては、情報が正確に読み取られない場合があります。</p>
        <p className="text-gray-700 leading-relaxed mb-4">また、アプリでは顔写真の撮影も行えます。ESTA申請にはパスポートとは別の顔写真が必要ですが、アプリのカメラ機能を使用してその場で撮影することができます。写真の撮影ガイド(顔の位置合わせ)が表示されるため、適切な写真を撮影しやすくなっています。</p>
        <p className="text-gray-700 leading-relaxed mb-4">なお、アプリをダウンロードする際は、必ずCBP公式のアプリをインストールしてください。開発元が「U.S. Customs and Border Protection」であることを確認してからダウンロードしましょう。CBP以外の開発元が提供している類似のアプリは、公式アプリではないため注意が必要です。</p>

        <h3 id="section-7" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">よくある質問</h3>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">Q1. グループ申請は何人まで可能ですか？</h4>
        <p className="text-gray-700 leading-relaxed mb-4">CBP公式サイトのグループ申請では、1つのグループにつき最大50名分のESTA申請をまとめて行うことができます。50名を超える場合は、複数のグループに分けて申請する必要があります。なお、グループの人数に下限はなく、2名以上であればグループ申請を利用できます。ただし、1名のみの場合はグループ申請ではなく個人申請を選択してください。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">Q2. 家族の代理申請にはパスポートの原本が必要ですか？</h4>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA申請はオンラインで行うため、パスポートの原本を提出する必要はありません。ただし、パスポートの情報を正確に入力するために、パスポートの原本またはコピーを手元に用意して申請手続きを行ってください。パスポート番号や有効期限、氏名のスペルなどの情報は、記憶に頼らずパスポートの記載内容を見ながら入力することが重要です。入力ミスがあると、入国審査で問題が生じる可能性があります。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">Q3. グループ申請後に申請者を追加することはできますか？</h4>
        <p className="text-gray-700 leading-relaxed mb-4">はい、グループ申請の完了後に申請者を追加することが可能です。CBP公式サイトでグループIDを使用してグループ申請のページにアクセスし、「申請者を追加(Add an Application)」を選択することで、新たな申請者を追加できます。追加された申請者の審査も個別に行われ、審査結果は通常72時間以内に通知されます。追加の申請者にも1人あたり21ドルの申請手数料が発生します。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">Q4. グループ内の1人が不承認になった場合、他のメンバーに影響しますか？</h4>
        <p className="text-gray-700 leading-relaxed mb-4">いいえ、グループ内の1人が渡航認証を拒否された場合でも、他のメンバーの審査結果には影響しません。ESTAの審査は各申請者ごとに個別に行われるため、グループの中で審査結果が異なることがあります。渡航認証が拒否された方は、ESTAを利用してアメリカへ渡航することができませんので、在日米国大使館または総領事館にて目的に応じたビザの取得を検討してください。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">Q5. 子供のESTA申請で保護者のパスポート情報を入力しますか？</h4>
        <p className="text-gray-700 leading-relaxed mb-4">いいえ、子供のESTA申請では、保護者のパスポート情報ではなく、子供本人のパスポート情報を入力します。ESTAはパスポートに紐づけられるため、渡航する本人(子供)のパスポート情報が必要です。代理申請であっても、入力する情報はすべて子供本人のものを使用してください。なお、乳幼児であっても本人名義のパスポートが必要です。保護者のパスポートに子供の情報を併記する方式は、現在のESTAおよびビザ免除プログラムでは利用できません。</p>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-bold text-[#1a2744] mb-4">関連記事</h3>
          <div className="grid gap-2">
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/esta" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">ESTA(エスタ)とは？事前入国審査制度を解説</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/esta-flow" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">【記入例付き】ESTAの申請方法を解説</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/application" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">アプリのESTA申請方法</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/address-guide" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">ESTA申請の住所・出生地・勤務先の英語表記ガイド</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/passport" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">ESTAとパスポートの関係</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/official-vs-fake" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">ESTA公式サイトと偽サイトの見分け方</Link></div>
          </div>
        </div>
      </div>
    </article>
  );
}
