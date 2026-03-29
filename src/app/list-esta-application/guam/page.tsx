import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'グアム入国にESTA(エスタ)は必要？入国審査についても紹介 | US ESTA Apply Website',
  description: 'グアムまたは北マリアナ諸島への入国では、渡航目的や滞在日数によってESTA(エスタ)の取得が求められます。本記事では、ESTAの申請方法をはじめ、グアム入国時の手続きについて解説します。',
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6 md:p-10">
      <Breadcrumb items={[{"label": "ESTA申請関連情報一覧", "href": "/list-esta-application"}, {"label": "グアム入国にESTA(エスタ)は必要？入国審査についても紹介"}]} />
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-2 pb-3 border-b-2 border-[#c41e3a]">グアム入国にESTA(エスタ)は必要？
入国審査についても紹介</h1>
        <p className="text-gray-700 leading-relaxed mb-4">日本国籍者が90日以内の観光、短期商用、または乗り継ぎを目的としてグアムまたは北マリアナ諸島へ渡航する際は、原則として事前にESTA(エスタ)を取得する必要があります。ただし、グアムまたは北マリアナ諸島に45日以内の滞在を予定している場合は、「グアム-北マリアナ諸島連邦ビザ免除プログラム(Guam-CNMI VWP)」が適用されるため、ESTAの申請は不要です。</p>
        <div className="bg-[#f8fafc] border border-gray-200 rounded-lg p-5 my-6">
          <p className="text-base font-bold text-[#1a2744] mb-3 flex items-center gap-2"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>目次</p>
          <ul className="space-y-2 text-sm">
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-1" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">グアム渡航におけるESTAの必要性</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-2" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">​ESTAの申請手順</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-3" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">ESTA申請ステータスの確認手順</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-4" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">グアム入国時に必要な書類</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-5" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">グアム入国におけるESTAを取得するメリットについて</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-6" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">グアム税関より入国に際しての注意事項</a></li>
            <li className="text-gray-600 flex items-start gap-2"><span className="text-[#c41e3a] mt-0.5 flex-shrink-0">▸</span><a href="#section-7" className="text-[#1a2744] hover:text-[#c41e3a] transition-colors">グアム入国手続きの手順</a></li>
          </ul>
        </div>
        <h3 id="section-1" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">グアム渡航におけるESTAの必要性</h3>
        <p className="text-gray-700 leading-relaxed mb-4">日本国籍者が、グアムまたは北マリアナ諸島で46日以上の滞在を希望する場合は、事前にESTA(エスタ)を申請する必要があります。ESTAは短期間の観光、商用、または乗り継ぎを目的としてグアムへ渡航する際に必要となる電子渡航認証制度で、渡航認証が承認された場合は最大90日間の滞在が可能です。</p>
        <p className="text-gray-700 leading-relaxed mb-4">一方、45日以内のグアムまたは北マリアナ諸島への滞在を希望する場合は、一定の条件を満たすことで「グアム-北マリアナ諸島連邦ビザ免除プログラム(Guam-CNMI VWP)」を利用でき、ESTAの申請は不要となります。ただし、Guam-CNMI VWPの利用には、電子渡航認証システム“G-CNMI ETA”の事前取得が義務付けられています。短期間のグアム滞在においてESTAの申請は不要ですが、<a href="https://www.cbp.gov/" target="_blank" rel="noopener noreferrer" className="text-[#c41e3a] hover:underline">CBP(アメリカ合衆国税関・国境警備局)</a>では、入国審査の簡易化を目的として渡航認証の取得を推奨しています。</p>
        <h3 id="section-2" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">グアム-北マリアナ諸島連邦ビザ免除プログラム(Guam-CNMI VWP)参加国一覧</h3>
        <p className="text-gray-700 leading-relaxed mb-4">イギリス</p>
        <p className="text-gray-700 leading-relaxed mb-4">オーストラリア</p>
        <p className="text-gray-700 leading-relaxed mb-4">韓国</p>
        <p className="text-gray-700 leading-relaxed mb-4">シンガポール</p>
        <p className="text-gray-700 leading-relaxed mb-4">※台湾国籍の方は、台湾のパスポートおよび中華民国国民身分証を所持し、第三国での乗り継ぎを行わず直行便でグアムへ渡航する場合に限り、「グアム-北マリアナ諸島連邦ビザ免除プログラム」を利用できます。なお、認められる乗り継ぎはグアムまたは北マリアナ諸島内のみとなります。</p>
        <p className="text-gray-700 leading-relaxed mb-4">台湾</p>
        <p className="text-gray-700 leading-relaxed mb-4">ナウル</p>
        <p className="text-gray-700 leading-relaxed mb-4">日本</p>
        <p className="text-gray-700 leading-relaxed mb-4">ニュージーランド</p>
        <p className="text-gray-700 leading-relaxed mb-4">パプアニューギニア</p>
        <p className="text-gray-700 leading-relaxed mb-4">ブルネイ</p>
        <p className="text-gray-700 leading-relaxed mb-4">香港</p>
        <p className="text-gray-700 leading-relaxed mb-4">マレーシア</p>
        <p className="text-gray-700 leading-relaxed mb-4">グアム-北マリアナ諸島連邦ビザ免除プログラム(Guam-CNMI VWP)を利用する場合は、以下の条件を満たす必要があります。</p>
        <p className="text-gray-700 leading-relaxed mb-4">渡航目的が、短期観光、商用、またはグアムでの乗り継ぎのいずれかに該当していること</p>
        <p className="text-gray-700 leading-relaxed mb-4">グアムおよび北マリアナ諸島での滞在期間が45日以内であること</p>
        <p className="text-gray-700 leading-relaxed mb-4">グアム-北マリアナ諸島連邦ビザ免除プログラム(Guam-CNMI VWP)参加国の市民であること</p>
        <p className="text-gray-700 leading-relaxed mb-4">往復航空券、または第三国への乗り継ぎが確認できる航空券を所持していること</p>
        <p className="text-gray-700 leading-relaxed mb-4">国際民間航空機関(ICAO)の基準に基づき、ICチップが搭載された有効なパスポートを所持していること</p>
        <p className="text-gray-700 leading-relaxed mb-4">グアム-北マリアナ諸島連邦政府が定める制約を遵守しており、過去の入国時に違反歴がないこと</p>
        <p className="text-gray-700 leading-relaxed mb-4">※グアム-北マリアナ諸島連邦ビザ免除プログラムを利用する場合は、上記すべての条件を遵守していることに加え、オーバーステイ歴やグアムへの入国拒否の履歴がないことが必須条件となります。なお、「上記の規定」には、グアム-北マリアナ諸島連邦ビザ免除プログラム、旧制度のグアムビザ免除プログラム、ならびにすべての移民・非移民ビザに関する入国制限の内容も含まれます。</p>
        <h3 id="section-3" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ESTAの申請手順</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)の申請はオンラインのみで手続きが可能で、申請情報の入力はおよそ10分程度で完了します。申請時には、有効なパスポート、申請料の支払いに使用するクレジットカード、および審査結果を受け取るためのメールアドレスが必要となるため、事前に準備しておきましょう。</p>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAの申請フォームでは、氏名・生年月日・国籍・パスポート情報・連絡先などの個人情報に加え、健康状態や犯罪歴に関する質問への回答が求められます。入力後は申請内容に誤りがないかを確認し、申請手数料の支払いに進みます。支払い画面では、決済に使用するクレジットカード情報(カード番号や有効期限など)を入力してください。なお、申請料の支払いには、各種クレジットカード(Visa、Master Card、JCB、American Express、Diners Club)が利用可能です。また、クレジットカードは申請者本人名義でなくても利用できます。</p>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAの申請完了後は、CBP(アメリカ合衆国税関・国境警備局)による審査が行われます。審査結果の通知には最大で3日程度を要する場合があるため、CBPでは渡航日の72時間前までにESTAを申請することを推奨しています。万が一、ESTAを取得しないまま渡航日を迎えた場合、航空機への搭乗やアメリカへの入国を拒否される可能性があるため十分ご注意ください。</p>
        <h3 id="section-4" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ESTA申請ステータスの確認手順</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)申請完了後は、自動的に米国CBPによる審査が行われます。審査結果の通知には最大で3日程度かかる場合があり、必ずしも即時に渡航認証が承認されるとは限らないためご注意ください。審査中は申請ステータスが「渡航認証保留」と表示され、審査完了後は「渡航認証許可」または「渡航認証拒否」のいずれかの結果が通知されます。
当サイトを通じてESTAを申請された方に限り、申請ステータスの確認が可能です。申請状況を確認する際は、当サイトの「申請状況確認画面」にて、名前・生年月日・33桁の申請IDをご入力ください。申請IDは、ESTA申請完了後に当サイトから送信される「申請受付完了メール」にて確認できます。なお、審査結果の確認には申請IDが必要となるため、ESTA申請後は本メールを大切に保管してください。また、申請IDを利用した申請ステータスの確認は、ESTA申請日から90日間有効です。90日を経過すると、個人情報保護の観点から確認できなくなります。</p>
        <h3 id="section-5" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">グアム入国時に必要な書類</h3>
        <p className="text-gray-700 leading-relaxed mb-4">日本国籍者がグアムおよび北マリアナ諸島へ入国する際は、以下の3点が必要です。</p>
        <p className="text-gray-700 leading-relaxed mb-4">往復航空券または第三国への航空券(eチケット)、乗船券</p>
        <p className="text-gray-700 leading-relaxed mb-4">ICチップ搭載の有効なパスポート</p>
        <p className="text-gray-700 leading-relaxed mb-4">デジタル税関申告書(EDF)　※グアムから第三国へ乗り継ぐ場合も提出が必要</p>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA(エスタ)またはビザを取得していない方は、上記に加えて事前に電子渡航認証“G-CNMI ETA”を申請する必要があります。なお、承認済みのESTAおよびG-CNMI ETAの認証情報はオンライン上で管理されているため、グアム入国時に提示する必要はありません。</p>
        <p className="text-gray-700 leading-relaxed mb-4">グアムデジタル税関申告書(EDF)</p>
        <p className="text-gray-700 leading-relaxed mb-4">「グアムデジタル税関申告書(GUAM ELECTRONIC DECLARATION FORM)」とは、<a href="https://www.visitguam.jp/planning/immigration-to-guam/#child" target="_blank" rel="noopener noreferrer" className="text-[#c41e3a] hover:underline">グアム政府観光局</a>(GVB)、グアム国際空港公団(GIAA)、<a href="https://cqa.guam.gov/" target="_blank" rel="noopener noreferrer" className="text-[#c41e3a] hover:underline">グアム税関検疫局</a>(CQA)が共同開発した税関申告書です。2025年2月4日より、紙面の税関申告書は廃止され「グアムデジタル税関申告書」による事前申請が義務付けられました。申請は渡航日の3日前から可能で、申請完了後は申請情報が保存されたQRコードが発行されます。グアム到着後、税関検査場にてQRコードの画面を提示し、専用の電子端末にかざすことで税関申告手続きは完了します。
グアムデジタル税関申告書(EDF)は、グアム税関検疫局公式サイトから、パソコンまたはスマートフォンで申請手続きが可能です。</p>
        <h3 id="section-6" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">未成年者の渡航に必要な書類について</h3>
        <p className="text-gray-700 leading-relaxed mb-4">CBP(アメリカ合衆国税関・国境警備局)では、18歳未満の未成年者が単独で渡航する場合、または片親のみが同行する場合に、同行しない親、または両親が作成した渡航同意書(英文)を持参することを強く推奨しています。</p>
        <p className="text-gray-700 leading-relaxed mb-4">渡航同意書は、「同行しない親が未成年者の渡航に同意している」ことを証明する書類であり、国境を越えた子どもの連れ去りや、親権を巡るトラブルを未然に防止する目的で導入されました。この同意書は、グアムへの入国において必須書類ではありませんが、入国審査時に審査官から提示を求められる場合があるため、事前に準備しておくことをおすすめします。なお、未成年者のグアム入国において同意書の不備のみを理由とした入国拒否の報告例は、これまで確認され ていません。</p>
        <p className="text-gray-700 leading-relaxed mb-4">以下では、渡航同意書が必要となる主なケースや、同意書に加えて補足書類の提出が求められる場合について解説します。</p>
        <p className="text-gray-700 leading-relaxed mb-4">保護者(祖父母を含む)または両親の同意書が必要となる主なケース</p>
        <p className="text-gray-700 leading-relaxed mb-4">​​</p>
        <p className="text-gray-700 leading-relaxed mb-4">両親が同行せず、祖父母のみが同行する渡航</p>
        <p className="text-gray-700 leading-relaxed mb-4">18歳未満の未成年者のみでの渡航</p>
        <p className="text-gray-700 leading-relaxed mb-4">修学旅行や研修旅行などを目的とした団体渡航</p>
        <p className="text-gray-700 leading-relaxed mb-4">子どもを友人・祖父母・叔父・叔母などに預けるための渡航</p>
        <p className="text-gray-700 leading-relaxed mb-4">渡航同意書に正式な書式は定められていません。グアム政府観光局のウェブサイトに掲載されている記入例を参考に作成してください。</p>
        <p className="text-gray-700 leading-relaxed mb-4">同意書に加えて、家族関係を証明する公的書類の提出が求められる場合</p>
        <p className="text-gray-700 leading-relaxed mb-4">母親または父親と死別している場合</p>
        <p className="text-gray-700 leading-relaxed mb-4">両親が離婚しており、母親または父親のみが同行する渡航</p>
        <p className="text-gray-700 leading-relaxed mb-4">両親が夫婦別姓である場合</p>
        <p className="text-gray-700 leading-relaxed mb-4">国際結婚により、両親の姓が異なる場合</p>
        <p className="text-gray-700 leading-relaxed mb-4">家族関係を証明する書類としては、戸籍謄本などの公的証書が該当します。これらは英語訳の添付が必要ですが、原本のコピーに英訳を併記した書面でも、原則として問題ありません。</p>
        <h3 id="section-7" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">米国CBPでESTAの事前申請を推奨</h3>
        <p className="text-gray-700 leading-relaxed mb-4">CBP(アメリカ合衆国税関・国境警備局)では、空港での入国手続きを円滑に進めるため、ESTA(エスタ)の事前申請を推奨しています。通常、ビザを取得せずにグアムへ入国する場合は、原則としてGuam-CNMI ETAの取得が必須です。ただし、事前にESTAを取得している場合は、Guam-CNMI ETAの申請が免除されます。また、入国時の審査プロセスも簡略化されるため、空港での待ち時間が短縮される点も大きなメリットです。さらに、ESTAを利用した場合は、Guam-CNMI ETAよりもグアムに長期間滞在することが可能です。Guam-CNMI ETAによる滞在可能期間が最長45日間であるのに対し、ESTAでは最大90日間のグアム滞在  が認められています。</p>
        <h3 id="section-8" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">グアム入国におけるESTAを取得するメリットについて</h3>
        <h3 id="section-9" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">最大90日間のグアム滞在が可能</h3>
        <p className="text-gray-700 leading-relaxed mb-4">日本国籍者がグアムおよび北マリアナ諸島へ入国する際は、条件を満たすことで「グアム-北マリアナ諸島連邦ビザ免除プログラム(Guam-CNMI VWP)」を利用することが可能です。ただし、Guam-CNMI VWPを利用した場合の滞在可能期間は最大45日以内と定められています。そのため、46日を超える滞在を希望する方は、事前にESTA(エスタ)またはビザを取得する必要があります。また、短期間の観光、商用、または乗り継ぎを目的としてグアムへ渡航する場合は、ESTAを取得することで、ビザなしで最大90日間の滞在が可能です。
CBP(アメリカ合衆国税関・国境警備局)では、空港での入国手続きを簡略化することを目的としてESTAの取得を推奨しており、ESTAを取得済みの方は、グアム渡航時におけるGuam-CNMI ETAの申請が免除されます。</p>
        <h3 id="section-10" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">グアム税関より入国に際しての注意事項</h3>
        <p className="text-gray-700 leading-relaxed mb-4">グアム政府では、外国籍の方がグアムへ入国する際に一部の荷物や医薬品などの持ち込みを制限しています。以下では、グアムへの持ち込みが禁止されている物品や、税関申告が必要となる物品について解説します。グアムへ渡航する前に必ず確認しておきましょう。</p>
        <p className="text-gray-700 leading-relaxed mb-4">免税で持ち込み可能な範囲（成人の場合）</p>
        <p className="text-gray-700 leading-relaxed mb-4">以下の範囲内であれば、無税でグアムへ持ち込むことが可能です。</p>
        <p className="text-gray-700 leading-relaxed mb-4">紙巻きたばこ、葉巻：1,000本または5カートンまで</p>
        <p className="text-gray-700 leading-relaxed mb-4">酒類：約3.7リットルまで</p>
        <p className="text-gray-700 leading-relaxed mb-4">なお、1万ドル相当以上の現金または旅行小切手を所持して入国する場合は、税関申告が必要です。また、ターボライターなどの危険物は持ち込みが禁止されているため、必ず持参しないようご注意ください。</p>
        <p className="text-gray-700 leading-relaxed mb-4">薬の持ち込みについて</p>
        <p className="text-gray-700 leading-relaxed mb-4">疾患や持病があり、医師から処方された薬を持参する場合は、薬の成分や使用目的を証明するために、英文の「薬剤携行証明書」を用意することが推奨されています。「薬剤携行証明書」には、処方内容、薬が必要な理由(病名など)、主治医の連絡先などを英文で記載し、かかりつけ医や薬剤師に依頼して作成してもらう必要があります。
持ち込める薬の量は、原則として滞在日数に見合った分であれば問題ありません。ただし、アメリカではテロ防止対策の一環として医薬品の持ち込み審査が厳格化されており、手荷物検査時に追加の質問を受けたり、薬を確認されるケースもあります。
外見だけでは薬の詳細が判断できない場合、誤って規制薬物と疑われる可能性もあるため、事前に薬剤携行証明書(英文)を準備しておくことをおすすめします。持ち込みが禁止されている医薬品の成分については、グアム税関検疫局へ事前にお問い合わせください。</p>
        <p className="text-gray-700 leading-relaxed mb-4">持ち込みが禁止されている物品(一部抜粋)</p>
        <p className="text-gray-700 leading-relaxed mb-4">グアムへの持ち込みが禁止されている物品の一部を紹介します。渡航前に必ず確認し、以下の物品を持ち込まないようご注意ください。</p>
        <p className="text-gray-700 leading-relaxed mb-4">葉や根、泥の付いた野菜、植物、果物</p>
        <p className="text-gray-700 leading-relaxed mb-4">鶏肉、牛肉、豚肉などの肉製品および加工品</p>
        <p className="text-gray-700 leading-relaxed mb-4">乳製品や卵(未開封の粉ミルクのみ持ち込み可)</p>
        <h3 id="section-11" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">グアム国際空港からのアクセス方法</h3>
        <p className="text-gray-700 leading-relaxed mb-4">グアム国際空港から市内へ移動する際は、レンタカーまたはタクシーの利用が一般的です。グアム島の主要エリアである“タモン”や“ハガニア”までは、いずれも車で約15分程度です。</p>
        <p className="text-gray-700 leading-relaxed mb-4">なお、2026年2月時点では、グアム国際空港を発着する公共バスは運行されていません。</p>
        <h3 id="section-12" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">グアム国際空港の簡易到着システム(Simplified Arrival system)について</h3>
        <p className="text-gray-700 leading-relaxed mb-4">グアム国際空港では、入国審査時に使用されていたAPCキオスクが2022年に廃止され、生体認証を活用した“簡易到着システム(Simplified Arrival system)”が導入されました。
同システムでは、パスポートに登録された顔写真と入国審査時に撮影した写真の照合、ならびに採取した指紋の読み取りによって、渡航者の身元確認が行われます。従来必要とされていた書類による審査が簡略化されたことで、渡航者はよりスムーズに入国手続きを行うことが可能となりました。また、簡易到着システムの導入に伴い、グアムを含むアメリカへの渡航歴がある渡航者については、今後の入国審査において指紋採取が不要となります。</p>
        <p className="text-gray-700 leading-relaxed mb-4">簡易到着システム(Simplified Arrival system)について</p>
        <p className="text-gray-700 leading-relaxed mb-4">CBP(アメリカ合衆国税関・国境警備局)は、グアムへの入国を希望する渡航者の安全性を強化する目的として、生体認証機能を活用した“簡易到着システム(Simplified Arrival system)”を導入しました。渡航者の身元をより正確に確認するため、グアム国際空港では本システムが入国審査に使用されています。入国審査時には、顔写真の撮影および指紋の採取により手続きが完了するため、安全性と効率性を兼ね備えた入国管理システムとして運用されています。</p>
        <h3 id="section-13" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">グアム入国手続きの手順</h3>
        <p className="text-gray-700 leading-relaxed mb-4">グアム国際空港に到着後は、空港で入国審査、手荷物の受け取り、税関申告の順で手続きを行います。特に入国審査では、往復航空券、パスポート、G-CNMI ETA(ESTAまたはビザを取得していない場合)の確認が行われるため、事前に準備しておきましょう。</p>
        <p className="text-gray-700 leading-relaxed mb-4">以下では、グアム国際空港到着時の入国手続きの手順を解説します。</p>
        <h3 id="section-14" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">入国手続き</h3>
        <p className="text-gray-700 leading-relaxed mb-4">グアム国際空港に到着したら、“到着(Arrival)”の案内表示に従って入国審査場へ進みます。審査場では入国審査の列に並び、順番が来たら審査官にパスポートを提出してください。審査時には、カメラによる顔写真の撮影や指紋の採取が行われます。また、審査ではグアムでの滞在日数や入国目的、またホテルなどの宿泊先について質問されるため英語で正確に回答することが重要です。特に滞在日数や入国目的について曖昧な回答をした場合、入国を拒否される可能性があるため注意しましょう。
なお、G-CNMI ETAの渡航認証情報はオンライン上で管理されているため、入国審査に提示する必要はありません。ただし、質問にスムーズに回答できるよう、申請完了画面や控えのコピーを 持参しておくことをおすすめします。</p>
        <h3 id="section-15" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">手荷物の受取</h3>
        <p className="text-gray-700 leading-relaxed mb-4">入国審査後は、到着エリア内の電光掲示板で搭乗便の便名を確認し、該当するターンテーブルで手荷物を受け取ってください。万が一、手荷物が見当たらない場合は、航空会社の係員にクレームタグ(託送荷物引換券)を提示して申告しましょう。</p>
        <h3 id="section-16" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">税関申告の手続き</h3>
        <p className="text-gray-700 leading-relaxed mb-4">グアムへの入国時は、課税対象となる物品を所持していない場合でも、グアムデジタル税関申告書(EDF)の提出が必要です。申告書は、グアム到着日の3日前から申請可能なため、渡航前に必ずお手続きください。申請完了後に発行されるQRコードを税関職員に提示し、専用端末で読み取ることで手続きが完了します。
なお、グアムの税関申告では、2025年2月4日以降、原則としてデジタル版「EDF (GUAM Electronic Declaration Form)」のみが有効となりました。従来の紙の税関申告書は廃止されているため、渡航前にオンラインでの申請を必ず済ませてください。</p>
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
      </div>
    </article>
  );
}