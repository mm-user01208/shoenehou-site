import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ESTA申請の住所・出生地・勤務先の英語表記ガイド【記入例付き】',
  description: 'ESTA申請時の住所・出生地・勤務先の英語表記の書き方を記入例付きで解説。都道府県のローマ字表記一覧、番地の書き方、ホテル住所の入力方法、よくある入力ミスと対処法を紹介します。',
  alternates: { canonical: 'https://shoenehou-online.jp/list-esta-application/address-guide/' },
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6 md:p-10">
      <Breadcrumb items={[{"label": "ESTA申請関連情報一覧", "href": "/list-esta-application"}, {"label": "ESTA申請の住所・出生地・勤務先の英語表記ガイド"}]} />
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-2 pb-3 border-b-2 border-[#c41e3a]">ESTA申請の住所・出生地・勤務先の英語表記ガイド【記入例付き】</h1>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)の申請フォームでは、現住所、出生地、勤務先情報、アメリカ滞在先住所などを英語(ローマ字)で入力する必要があります。日本語の住所を英語に変換する際は、日本語とは逆の順序(番地→市区町村→都道府県→国名)で記載するのが基本ルールです。本記事では、ESTA申請時に必要となる各項目の英語表記の書き方を、具体的な記入例を交えながら分かりやすく解説します。都道府県のローマ字表記一覧も掲載していますので、申請時にぜひお役立てください。正確な情報を入力することが、スムーズなESTA承認につながります。</p>
        <div className="bg-[#f8fafc] border border-gray-200 rounded-lg p-5 my-6">
          <p className="text-base font-bold text-[#1a2744] mb-3 flex items-center gap-2"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>目次</p>
          <ul className="space-y-2 text-sm">
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-1" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">現住所の英語表記の書き方</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-2" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">出生地の書き方</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-3" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">勤務先情報の書き方</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-4" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">アメリカ滞在先住所の書き方</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-5" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">都道府県のローマ字表記一覧表</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-6" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">よくある入力ミスと対処法</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-7" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">よくある質問</a></li>
          </ul>
        </div>

        <h3 id="section-1" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">現住所の英語表記の書き方（都道府県/市区町村/番地の順番）</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA申請フォームでは、自宅の住所を英語(ローマ字)で入力する必要があります。日本語の住所は「都道府県→市区町村→番地→建物名」の順で記載しますが、英語では逆の順序で「番地→市区町村→都道府県→国名」の順で記載します。ESTA申請フォームでは、住所の入力欄が「Address Line 1(住所1行目)」「Address Line 2(住所2行目)」「City(市区町村)」「State/Province/Region(都道府県)」「Country(国名)」などに分かれているため、それぞれの欄に正しい情報を入力してください。</p>
        <p className="text-gray-700 leading-relaxed mb-4">例えば、日本語の住所が「東京都千代田区霞が関1-2-3 ABCマンション405号室」の場合、英語表記は以下のようになります。Address Line 1には「1-2-3 Kasumigaseki」と入力します。Address Line 2には「ABC Mansion #405」と入力します。Cityには「Chiyoda-ku」と入力します。State/Province/Regionには「Tokyo」と入力します。Zip/Postal Codeには「100-0013」と入力します。Countryには「Japan」を選択します。</p>
        <p className="text-gray-700 leading-relaxed mb-4">番地の書き方について補足します。日本の住所で「1丁目2番地3号」は英語では「1-2-3」とハイフンでつなげて表記するのが一般的です。また、マンション名やアパート名はローマ字でそのまま記載し、部屋番号は「#」をつけて記載します。例えば「グリーンハイツ301号室」は「Green Heights #301」と表記します。なお、建物名がなく番地のみの場合は、Address Line 2は空欄のままでも問題ありません。</p>
        <p className="text-gray-700 leading-relaxed mb-4">もう一つの例として、「大阪府大阪市北区梅田3-1-1」の場合を紹介します。Address Line 1には「3-1-1 Umeda」と入力します。Cityには「Kita-ku, Osaka-shi」と入力します。State/Province/Regionには「Osaka」と入力します。Zip/Postal Codeには「530-0001」と入力します。このように、区と市がある場合は、Cityの欄に「区名, 市名」の形式で記載します。町名はAddress Line 1に番地とともに記載してください。</p>
        <p className="text-gray-700 leading-relaxed mb-4">住所の英語表記で注意すべき点は、完璧な英語表記でなくても申請が却下されることは基本的にないということです。重要なのは、郵便番号と国名が正しいことです。ただし、明らかな誤りがある場合は入国審査で質問される可能性もあるため、できるだけ正確に入力することをおすすめします。</p>

        <h3 id="section-2" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">出生地の書き方（日本国内→都道府県を英語で/海外生まれの場合）</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA申請フォームでは、「City of Birth(出生した市区町村)」と「Country of Birth(出生国)」の入力が求められます。出生地とは、生まれた場所のことであり、パスポートの「本籍地」とは異なります。出生地は、出生届に記載された場所、つまり実際に生まれた病院や自宅がある市区町村を指します。出生地が分からない場合は、戸籍謄本で確認することができます。</p>
        <p className="text-gray-700 leading-relaxed mb-4">日本国内で生まれた場合、City of Birthには出生した市区町村名をローマ字で入力し、Country of Birthには「Japan」を選択します。例えば、東京都新宿区で生まれた場合は、City of Birthに「Shinjuku-ku, Tokyo」と入力します。北海道札幌市で生まれた場合は「Sapporo, Hokkaido」と入力します。市名と都道府県名をカンマで区切って記載するのが一般的ですが、市名のみの記載でも問題ありません。</p>
        <p className="text-gray-700 leading-relaxed mb-4">海外で生まれた場合は、City of Birthに出生した都市名を英語で入力し、Country of Birthに出生した国を選択します。例えば、アメリカのロサンゼルスで生まれた場合は、City of Birthに「Los Angeles」、Country of Birthに「United States」を選択します。海外で生まれた日本国籍者がESTA申請を行う場合でも、パスポートが日本のものであれば申請に問題はありません。</p>
        <p className="text-gray-700 leading-relaxed mb-4">出生地の入力でよくある間違いとして、「本籍地」を出生地として入力してしまうケースがあります。本籍地は戸籍上の住所であり、出生地とは異なる場合があります。例えば、本籍地が東京都であっても、実際に生まれたのが神奈川県横浜市であれば、出生地は「Yokohama, Kanagawa」と入力します。出生地が不明な場合は、パスポートや戸籍謄本を確認するか、両親に確認するとよいでしょう。</p>
        <p className="text-gray-700 leading-relaxed mb-4">なお、ESTA申請フォームでは出生地の入力は必須項目となっています。出生地が不明のまま申請を行うことはできませんので、事前に確認しておくことをおすすめします。また、出生地の表記に多少の揺れがあっても(例：「Shinjuku」と「Shinjuku-ku」)、申請が却下されることは通常ありませんが、パスポートに記載されている情報と矛盾しないよう注意してください。</p>

        <h3 id="section-3" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">勤務先情報の書き方（会社名/住所/電話番号）</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA申請フォームでは、現在の勤務先(雇用主)に関する情報の入力が求められます。入力項目には「Employer(勤務先名)」「Job Title(役職/職種)」「Address(勤務先住所)」「Phone Number(電話番号)」などがあります。勤務先情報は必須項目ではなく、未入力のまま申請することも可能ですが、入力することでESTA審査がスムーズに進む場合があります。</p>
        <p className="text-gray-700 leading-relaxed mb-4">勤務先名(Employer)は、会社の正式名称を英語で入力します。日本の会社の場合は、会社名をローマ字で表記します。例えば「株式会社山田製作所」の場合は「Yamada Seisakusho Co., Ltd.」と表記します。「株式会社」は「Co., Ltd.」や「Inc.」と表記するのが一般的です。会社の英語名が公式に決まっている場合は、その名称を使用してください。会社のウェブサイトや名刺に英語表記が記載されている場合は、それに従うのが確実です。</p>
        <p className="text-gray-700 leading-relaxed mb-4">役職(Job Title)は、現在の役職や職種を英語で入力します。例えば「営業部長」は「Sales Manager」、「事務職」は「Office Clerk」、「エンジニア」は「Engineer」、「会社員」は「Office Worker」や「Company Employee」と表記します。アルバイトやパートタイムの場合は「Part-time Worker」、自営業の場合は「Self-employed」と入力します。学生の場合は勤務先欄に学校名を入力し、Job Titleには「Student」と入力してください。</p>
        <p className="text-gray-700 leading-relaxed mb-4">勤務先住所(Address)は、現住所と同様に英語の順序(番地→市区町村→都道府県→国名)で入力します。例えば、「東京都港区六本木1-1-1」の場合は「1-1-1 Roppongi, Minato-ku, Tokyo, Japan」と入力します。勤務先住所の入力欄も、Address Line 1、City、State/Province/Regionなどに分かれている場合がありますので、それぞれの欄に適切な情報を入力してください。</p>
        <p className="text-gray-700 leading-relaxed mb-4">電話番号(Phone Number)は、日本の国番号「+81」に続けて、市外局番の先頭の「0」を除いた番号を入力します。例えば、会社の電話番号が「03-1234-5678」の場合は「+81-3-1234-5678」と入力します。携帯電話番号「090-1234-5678」の場合は「+81-90-1234-5678」と入力します。なお、ESTA申請フォームの電話番号入力欄では、ハイフンなしで数字のみ入力する形式の場合もありますので、画面の指示に従って入力してください。</p>
        <p className="text-gray-700 leading-relaxed mb-4">退職中や無職の場合は、勤務先情報の欄に「N/A」(Not Applicable)と入力するか、該当する選択肢(「Not Employed」など)を選択します。主婦・主夫の場合は「Homemaker」と入力することができます。退職者の場合は「Retired」と入力してください。いずれの場合も、勤務先情報が未入力であることを理由にESTA申請が却下されることは通常ありません。</p>

        <h3 id="section-4" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">アメリカ滞在先住所の書き方（ホテル名+住所）</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA申請フォームでは、アメリカでの滞在先情報(U.S. Contact Information)の入力が求められます。ホテルに宿泊する場合は、ホテルの名称と住所を入力します。友人や親族の家に滞在する場合は、その方の名前と住所を入力します。乗り継ぎ(トランジット)のみでアメリカに滞在する場合は、「TRANSIT」や「IN TRANSIT」と入力することができます。</p>
        <p className="text-gray-700 leading-relaxed mb-4">ホテルに宿泊する場合の記入例を紹介します。例えば、ニューヨークの「Hilton New York Midtown」に宿泊する場合、Address Line 1には「1335 Avenue of the Americas」と入力します。Cityには「New York」と入力します。Stateには「New York」を選択します。Zip Codeには「10019」と入力します。Contact Nameには「Hilton New York Midtown」と入力します。Phone Numberにはホテルの電話番号を入力します。ホテルの住所や電話番号は、予約確認書やホテルの公式ウェブサイトで確認できます。</p>
        <p className="text-gray-700 leading-relaxed mb-4">複数のホテルに滞在する場合は、最初に宿泊するホテルの情報を入力してください。ESTA申請フォームでは滞在先情報を1件のみ入力する形式となっているため、複数の宿泊先がある場合は最初の滞在先を入力します。なお、滞在先情報はESTA承認後も変更が可能ですので、申請時点で滞在先が確定していない場合は、予定している宿泊先を入力しておき、後から変更することもできます。</p>
        <p className="text-gray-700 leading-relaxed mb-4">友人や親族の家に滞在する場合は、Contact Nameにその方のフルネーム(英語表記)を入力し、Address Line 1以降にその方の住所を入力します。Phone Numberにはその方の電話番号を入力してください。アメリカの電話番号は「+1」から始まり、市外局番(3桁)と電話番号(7桁)で構成されています。例えば、「+1-212-123-4567」のような形式です。</p>
        <p className="text-gray-700 leading-relaxed mb-4">滞在先が未定の場合は、「UNKNOWN」と入力することもできます。ただし、滞在先情報をすべて「UNKNOWN」と入力した場合、入国審査で滞在先について質問される可能性があります。入国審査をスムーズに通過するためにも、できるだけ滞在先情報を事前に確認し、正確に入力しておくことをおすすめします。なお、アメリカ滞在先の住所は、ESTA承認後でもCBP公式サイトから変更が可能です。</p>

        <h3 id="section-5" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">都道府県のローマ字表記一覧表（47都道府県）</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA申請フォームで住所を入力する際に必要となる、日本の47都道府県のローマ字表記を一覧で紹介します。都道府県名はヘボン式ローマ字で表記するのが一般的です。申請時にご参照ください。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">北海道・東北地方</h4>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-[#f8fafc]"><th className="border border-gray-200 px-4 py-2 text-left text-[#1a2744]">都道府県</th><th className="border border-gray-200 px-4 py-2 text-left text-[#1a2744]">ローマ字表記</th></tr></thead>
            <tbody>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">北海道</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Hokkaido</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">青森県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Aomori</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">岩手県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Iwate</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">宮城県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Miyagi</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">秋田県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Akita</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">山形県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Yamagata</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">福島県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Fukushima</td></tr>
            </tbody>
          </table>
        </div>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">関東地方</h4>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-[#f8fafc]"><th className="border border-gray-200 px-4 py-2 text-left text-[#1a2744]">都道府県</th><th className="border border-gray-200 px-4 py-2 text-left text-[#1a2744]">ローマ字表記</th></tr></thead>
            <tbody>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">茨城県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Ibaraki</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">栃木県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Tochigi</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">群馬県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Gunma</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">埼玉県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Saitama</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">千葉県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Chiba</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">東京都</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Tokyo</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">神奈川県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Kanagawa</td></tr>
            </tbody>
          </table>
        </div>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">中部地方</h4>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-[#f8fafc]"><th className="border border-gray-200 px-4 py-2 text-left text-[#1a2744]">都道府県</th><th className="border border-gray-200 px-4 py-2 text-left text-[#1a2744]">ローマ字表記</th></tr></thead>
            <tbody>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">新潟県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Niigata</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">富山県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Toyama</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">石川県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Ishikawa</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">福井県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Fukui</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">山梨県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Yamanashi</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">長野県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Nagano</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">岐阜県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Gifu</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">静岡県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Shizuoka</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">愛知県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Aichi</td></tr>
            </tbody>
          </table>
        </div>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">近畿地方</h4>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-[#f8fafc]"><th className="border border-gray-200 px-4 py-2 text-left text-[#1a2744]">都道府県</th><th className="border border-gray-200 px-4 py-2 text-left text-[#1a2744]">ローマ字表記</th></tr></thead>
            <tbody>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">三重県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Mie</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">滋賀県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Shiga</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">京都府</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Kyoto</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">大阪府</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Osaka</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">兵庫県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Hyogo</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">奈良県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Nara</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">和歌山県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Wakayama</td></tr>
            </tbody>
          </table>
        </div>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">中国・四国地方</h4>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-[#f8fafc]"><th className="border border-gray-200 px-4 py-2 text-left text-[#1a2744]">都道府県</th><th className="border border-gray-200 px-4 py-2 text-left text-[#1a2744]">ローマ字表記</th></tr></thead>
            <tbody>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">鳥取県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Tottori</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">島根県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Shimane</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">岡山県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Okayama</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">広島県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Hiroshima</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">山口県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Yamaguchi</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">徳島県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Tokushima</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">香川県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Kagawa</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">愛媛県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Ehime</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">高知県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Kochi</td></tr>
            </tbody>
          </table>
        </div>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">九州・沖縄地方</h4>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-[#f8fafc]"><th className="border border-gray-200 px-4 py-2 text-left text-[#1a2744]">都道府県</th><th className="border border-gray-200 px-4 py-2 text-left text-[#1a2744]">ローマ字表記</th></tr></thead>
            <tbody>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">福岡県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Fukuoka</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">佐賀県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Saga</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">長崎県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Nagasaki</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">熊本県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Kumamoto</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">大分県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Oita</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">宮崎県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Miyazaki</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">鹿児島県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Kagoshima</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 text-gray-700">沖縄県</td><td className="border border-gray-200 px-4 py-2 text-gray-700">Okinawa</td></tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">上記の都道府県名は、ESTA申請フォームの「State/Province/Region」欄に入力してください。なお、英語表記では「県」「府」「都」「道」は通常省略します。例えば「大阪府」は「Osaka」、「東京都」は「Tokyo」と表記します。ただし、北海道の場合は「Hokkaido」とそのまま表記するのが一般的です。</p>

        <h3 id="section-6" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">よくある入力ミスと対処法</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA申請フォームでの住所入力において、よくあるミスとその対処法を紹介します。申請前に以下のポイントを確認することで、入力ミスを防ぐことができます。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">住所の順序を日本語のまま入力してしまう</h4>
        <p className="text-gray-700 leading-relaxed mb-4">最も多いミスは、日本語の住所の順序(都道府県→市区町村→番地)のまま英語表記してしまうことです。英語の住所は日本語とは逆の順序(番地→市区町村→都道府県→国名)で記載する必要があります。例えば「東京都渋谷区渋谷1-2-3」を「Tokyo Shibuya-ku Shibuya 1-2-3」とするのではなく、「1-2-3 Shibuya, Shibuya-ku, Tokyo」と記載してください。ただし、ESTA申請フォームではAddress Line 1、City、Stateなどの欄が分かれているため、各欄に適切な情報を入力すれば順序を意識する必要は少なくなります。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">長音(ー)の表記を間違える</h4>
        <p className="text-gray-700 leading-relaxed mb-4">日本語の地名に含まれる長音(ー)のローマ字表記で迷う方が多くいます。例えば「大阪(おおさか)」は「Osaka」、「東京(とうきょう)」は「Tokyo」と表記するのが一般的です。パスポートのヘボン式ローマ字表記に従えば問題ありません。「おお」は「O」または「Oh」、「おう」は「O」と表記します。具体的には「京都(きょうと)」は「Kyoto」、「北海道(ほっかいどう)」は「Hokkaido」と表記します。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">マンション名・建物名の入力漏れ</h4>
        <p className="text-gray-700 leading-relaxed mb-4">マンションやアパートに住んでいる場合、建物名と部屋番号の入力を忘れてしまうケースがあります。Address Line 2に建物名と部屋番号を入力してください。例えば「サンシャインマンション501号室」は「Sunshine Mansion #501」と表記します。建物名のローマ字表記が分からない場合は、郵便物や管理会社に確認するか、一般的なローマ字変換で記載しても問題ありません。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">郵便番号の入力形式を間違える</h4>
        <p className="text-gray-700 leading-relaxed mb-4">日本の郵便番号は「xxx-xxxx」の7桁形式です。ESTA申請フォームのZip/Postal Code欄には、ハイフン(-)を含めて入力してください。例えば「100-0001」のように入力します。アメリカの郵便番号(Zip Code)は5桁の数字で構成されていますが、日本の住所を入力する際は日本の郵便番号形式で入力します。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">申請後にミスに気づいた場合の対処法</h4>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA申請後に住所の入力ミスに気づいた場合、メールアドレスやアメリカ滞在先住所などの一部の情報はCBP公式サイトから変更が可能です。ただし、氏名やパスポート番号などの重要情報はESTA承認後に変更することができないため、申請前に十分確認してください。住所の軽微な表記の揺れ(例：「Shinjuku-ku」と「Shinjuku Ku」)であれば、通常は申請に影響しません。ただし、郵便番号や国名を間違えた場合は、正確な情報に修正するか、再申請を行うことをおすすめします。</p>

        <h3 id="section-7" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">よくある質問</h3>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">Q1. 住所を日本語で入力しても申請できますか？</h4>
        <p className="text-gray-700 leading-relaxed mb-4">いいえ、ESTA申請フォームへの入力はすべて英語(ローマ字)で行う必要があります。日本語(漢字やひらがな)で入力するとエラーが表示されるか、申請が正しく処理されない場合があります。住所は英語の順序(番地→市区町村→都道府県→国名)でローマ字に変換して入力してください。本記事の記入例や都道府県のローマ字表記一覧を参考にしてください。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">Q2. 出生地が分からない場合はどうすればよいですか？</h4>
        <p className="text-gray-700 leading-relaxed mb-4">出生地が分からない場合は、戸籍謄本を取得して確認することができます。戸籍謄本には出生地(出生した場所)が記載されています。また、両親に確認する方法もあります。出生地はパスポートの「本籍地」とは異なる場合がありますのでご注意ください。出生地は実際に生まれた場所(病院がある市区町村)を指します。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">Q3. 勤務先が決まっていない場合は何と入力しますか？</h4>
        <p className="text-gray-700 leading-relaxed mb-4">現在無職の場合や勤務先が決まっていない場合は、勤務先名の欄に「N/A」(Not Applicable)と入力するか、該当する選択肢(「Not Employed」など)を選択してください。主婦・主夫の場合は「Homemaker」、退職者の場合は「Retired」、学生の場合は学校名を入力しJob Titleに「Student」と入力します。勤務先情報が未入力であることを理由にESTA申請が却下されることは通常ありません。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">Q4. アメリカの滞在先が決まっていない場合はどうしますか？</h4>
        <p className="text-gray-700 leading-relaxed mb-4">アメリカでの滞在先が未定の場合は、滞在先情報の欄に「UNKNOWN」と入力することができます。ただし、滞在先情報をすべて「UNKNOWN」とした場合、入国審査で滞在先について質問される可能性があります。できるだけ滞在先を事前に決めてから申請することをおすすめします。なお、アメリカ滞在先の住所はESTA承認後もCBP公式サイトから変更が可能ですので、後から情報を更新することもできます。</p>

        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">Q5. 住所の入力を間違えたらESTAは不承認になりますか？</h4>
        <p className="text-gray-700 leading-relaxed mb-4">住所の軽微な表記の揺れや入力ミスのみを理由にESTAが不承認となることは通常ありません。ESTAの審査では、犯罪歴の有無やテロリストリストとの照合など、セキュリティに関する項目が重点的に審査されます。ただし、住所の入力ミスが原因で入国審査時に質問される可能性はあるため、できるだけ正確に入力することをおすすめします。申請後にミスに気づいた場合は、変更可能な項目であればCBP公式サイトから修正できます。変更できない項目に重大な誤りがある場合は、ESTAの再申請を検討してください。</p>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-bold text-[#1a2744] mb-4">関連記事</h3>
          <div className="grid gap-2">
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/esta" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">ESTA(エスタ)とは？事前入国審査制度を解説</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/esta-flow" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">【記入例付き】ESTAの申請方法を解説</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/place-of-birth" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">出生地や住所の書き方を紹介</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/official-vs-fake" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">ESTA公式サイトと偽サイトの見分け方</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/group-family" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">ESTAのグループ申請・家族申請の方法</Link></div>
            <div className="flex items-center gap-2 py-2 px-3 bg-[#f8fafc] rounded hover:bg-[#f0f4f8] transition-colors"><span className="text-[#c41e3a] text-xs">●</span><Link href="/list-esta-application/passport" className="text-sm text-[#c41e3a] hover:underline hover:text-[#c41e3a] transition-colors">ESTAとパスポートの関係</Link></div>
          </div>
        </div>
      </div>
    </article>
  );
}
