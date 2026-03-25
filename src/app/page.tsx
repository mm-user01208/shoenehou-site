import type { Metadata } from 'next';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'ESTA(エスタ)申請サイト【アメリカ電子渡航認証システム】',
  description: 'ESTA(エスタ)は、アメリカへ短期滞在する際に必要となる電子渡航認証です。ビザを取得せずに渡米する場合は、出発の72時間前までにオンラインでの事前申請を完了してください。',
};

export default function Page() {
  const faqItems = [
    { q: 'ESTAの申請が必要なケースについて', a: 'ESTA(エスタ)は、短期間の観光や商用などを目的としてアメリカへ渡航する際に必要となる電子渡航認証です。日本を含む「ビザ免除プログラム(VWP)」参加国の市民が、ハワイやグアムを含むアメリカへ渡航する場合は、年齢を問わずオンラインでのESTA申請が必要になります。VWP対象者は、渡航前に「渡航認証許可」を取得することで、最長90日間のアメリカ滞在が認められます。なお、就労や留学、90日を超える滞在を希望する場合はESTAの対象外となるため、在日米大使館または領事館にて、渡航目的に応じたビザの取得をご検討ください。' },
    { q: 'ESTAを申請するタイミング・申請期限について', a: 'ESTA(エスタ)の審査には、最大3日間かかる場合があります。そのため、CBP(アメリカ合衆国税関・国境警備局)や外務省では、出発日の72時間前までにESTAを申請し、「渡航認証許可」を取得することを推奨しています。出発日に申請しても、当日中にESTAが承認されるとは限らないため十分ご注意ください。なお、ESTAは出発日や宿泊先が未定でも申請可能です。アメリカへの渡航が決定した時点で、余裕を持って早めに申請することをお勧めします。また、家族やグループで渡米する場合は、全員分のESTAが必要です。複数人分の申請を行う際は、申請フォームから1名ずつ個別にお手続きください。同行者のうち１人でも申請内容に不備があると、飛行機への搭乗を拒否される可能性があるため、出発の3日前までに全員がESTAを取得済みかどうか必ず確認しましょう。' },
    { q: 'ESTA申請から認証までの所要時間について', a: 'ESTA(エスタ)は、申請から取得までに最大72時間かかる場合があります。当サイトを通じてESTAを申請した場合、通常は24時間以内に審査結果を通知いたしますが、申請内容に不備があった際はさらに時間を要するためご注意ください。 ESTA申請後、審査中はステータスが「渡航認証保留」となり、最終的に以下いずれかの結果が通知されます。 渡航認証許可 渡航認証拒否 「渡航認証許可」と通知された場合は、ESTAが承認されアメリカへの渡航が可能となります。一方、「渡航認証拒否」と通知された場合は、ESTAの利用が認められないため申請内容をご確認ください。氏名や住所などにスペルミスがある場合や、健康状態や過去の犯罪歴に関する質問事項で誤って「はい」を選択した場合は、該当箇所を修正の上、再申請を行ってください。なお、審査結果の通知から24時間以上経過してから再申請する必要があります。万が一、再申請後も「渡航認証拒否」となった場合は、在日米国大使館または総領事館にて、渡航目的に応じたビザの取得をご検討ください。' },
    { q: 'ESTAの有効期限と再申請が必要なケースについて', a: 'ESTA(エスタ)の有効期限は、発行日より2年間です。ただし、パスポートの有効期限が2年未満の場合は、パスポートの期限と同じ日にESTAも失効します。ESTAが失効した後に再び渡米を予定している方は、再申請が必要です。なお、ビザを利用して渡航する場合は再申請の必要はありません。ESTAには「更新制度」はないため、再申請を行うことになります。再申請の際は、申請フォームに必要事項を入力し、申請費用の支払いが必要です。新たにESTAを取得した時点で有効期限が設定され、既存の認証情報は無効となります。' },
    { q: 'ESTA取得後のアメリカ入国可否について', a: 'ESTA(エスタ)は、短期間でアメリカへ渡航する際に必要となる電子渡航認証です。申請が承認されることでアメリカへの渡航が認められますが、入国が必ずしも保証されるわけではありません。最終的な入国の可否は、到着先の空港における入国審査官の判断に委ねられます。ESTAの認証情報はオンライン上で管理されているため、入国審査時にESTAの書類を提示する必要はありません。ただし、CBP(アメリカ合衆国税関・国境警備局)では、念のためESTAのコピーを携帯することが推奨されています。また、すでに有効なアメリカのビザを所持している場合は、ESTAの申請は不要です。' },
    { q: 'アメリカの有効なビザ保有時の、ESTA要否について', a: 'ESTA(エスタ)は、「ビザ免除プログラム(VWP)」を利用する方が申請対象となります。そのため、すでに有効なアメリカのビザを取得している場合は、ESTAの申請は不要です。ビザを利用する場合は、取得したビザの滞在日数や渡航目的に応じたアメリカへの入国が認められます。なお、90日を超えるアメリカ滞在や、報酬を伴う就労・留学などを目的とする渡航には、事前に適切なビザの取得が必要です。ビザの申請条件や滞在可能期間は、ビザの種類により異なります。また、観光や出張など、長期ビジネスを目的として90日以上の滞在を希望する場合は、“B1・B2ビザ(商用・観光ビザ)”の取得をご検討ください。' },
    { q: 'ESTA認証情報のコピー・印刷の必要性について', a: 'ESTA(エスタ)の認証情報(パスポートの有効期限や渡航申請番号など)は、オンライン上で保管・管理されているため、入国審査時にESTAの認証情報を提示する必要はありません。ただし、CBP(アメリカ合衆国税関・国境警備局)では、入国審査時の質問にスムーズに回答できるようコピーの携帯を推奨しています。ESTAの認証情報は、当サイトから送信される「渡航認証可否メール」にてご確認いただけます。また、空港のチェックインでESTA認証情報が確認できない場合、渡航申請番号の提示を求められることがありますので、あらかじめ控えておくことをおすすめします。' },
    { q: 'ESTAを利用したアメリカでの就労の可否について', a: 'ESTA(エスタ)の利用は、90日以内の観光・短期商用・他国への乗り継ぎを目的とした渡米に限定されます。そのため、アメリカでの就労やアルバイトを希望する場合は、ESTAの利用対象外となります。このような場合は、在日米国大使館または総領事館にて、渡航目的に応じたビザの取得をご検討ください。就労ビザの種類は主に、“H-1Bビザ(特殊技能職ビザ)”、“L-1ビザ(企業内転勤ビザ)”などが挙げられます。これらのビザを申請するには、事前に雇用主または代理人が在日米国大使館を通じて請願書（I-129）を提出し、USCIS（米国移民局）の承認を得る必要があります。また、申請者は在日米国大使館または総領事館での面接時に、請願書(I-129)の受付番号の確認が行われるため、必ず持参してください。' },
    { q: 'ハワイ渡航におけるESTAの必要性について', a: '90日以内の短期間の観光や商用などを目的としてハワイへ渡航する場合は、ESTA(エスタ)の取得が必要です。また、ハワイを経由して第三国へ向かう乗り継ぎの場合も、ESTAの申請対象となります。ESTAの審査には一定の時間がかかるため、CBP(アメリカ合衆国税関・国境警備局)では出発の3日前までに申請し、「渡航認証許可」を取得することが推奨されています。審査の結果「渡航認証拒否」と通知された場合は、ESTAを利用できないため在日米国大使館または総領事館にて渡航目的に適したビザを申請しましょう。万が一、ESTAを取得しないまま出発日を迎えた場合は、ハワイへの入国や飛行機への搭乗を拒否されるためご注意ください。なお、ESTAは年齢を問わず申請が必要です。幼児を含む未成年者も申請対象となるため、保護者が代理で手続きを行ってください。' },
    { q: 'ESTA(エスタ)とビザの違いについて', a: 'ESTA(エスタ)は、短期間の観光、商用、乗り継ぎを目的としてアメリカへ渡航する際に必要となる電子渡航認証です。これはアメリカが定める「ビザ免除プログラム(VWP)」の一環であり、日本を含む対象国の市民は出発日の72時間前までに申請し、「渡航認証許可」を取得する必要があります。ESTAが認証された場合は、最大90日間のアメリカ滞在が認められます。また、家族やグループで渡米する際は、全員分のESTA申請が必要です。渡航日までに、同行者全員の申請が完了していることを必ずご確認ください。 一方で、米国ビザは報酬を伴う就労や留学などで90日を超えるアメリカ滞在を希望する方を対象とした入国制度です。ビザにはさまざまな種類があり、渡航目的によって滞在期間や取得条件が異なります。例えば、観光などを目的として90日以上滞在する場合は“B2ビザ”、短期ビジネスの場合は“B1ビザ”の取得が求められます。Bビザはアメリカが発給する代表的なビザのひとつで、過去に重大な犯罪歴などがなければ比較的スムーズに取得できるとされています。 なお、ESTAを取得していても、アメリカへの入国が必ず認められるとは限りません。最終的な入国の可否は、到着空港での入国審査官の判断に委ねられます。万が一、ESTAによる入国が拒否された場合は、入国拒否の記録が残り、今後の渡米時に厳しい審査を受ける可能性があるためご注意ください。' },
    { q: 'ビザ免除プログラム(VWP)制度の概要について', a: 'ビザ免除プログラム(VWP)とは、アメリカが定めた日本を含む対象国の市民を対象とした制度で、条件を満たす場合に限り、ビザを取得せずにハワイを含むアメリカへ渡航することが認められています。日本国籍者がVWPを利用してアメリカへ渡航する際は、事前にオンラインで電子渡航認証ESTA(エスタ)を申請し、「渡航認証許可」を取得する必要があります。VWPを利用できる渡航目的は、90日未満の短期間の観光や商用、または乗り継ぎに限られます。就労や留学、90日を超えるアメリカ滞在を希望する場合は、渡航目的に応じたビザを取得する必要があります。 以下の条件をすべて満たす場合に限り、VWPを利用してアメリカへ入国することが可能です。 VWP参加国の市民であり、有効なパスポートを所有していること 渡航目的が観光・商用・乗り継ぎのいずれかに該当すること アメリカでの滞在期間が90日以内であること 過去に重大な犯罪歴がなく、アメリカへの入国を拒否された履歴がないこと ESTAを申請し、「渡航認証許可」を取得していること' },
    { q: '家族・知人による代理申請について', a: 'ESTA(エスタ)は、ご家族や知人の方が代理で申請することも可能です。ただし、申請には以下のような個人情報の入力が必要となるため、代理申請を行う方には正確な情報を共有してください。 氏名 生年月日 住所 出生地 国籍 連絡先 パスポート情報 申請フォームはすべて英語(ローマ字)で入力する必要があります。申請情報に不備がある場合「渡航認証拒否」となる可能性があるため、特に氏名や住所などのスペルミスには十分注意しましょう。なお、申請時には申請料金の支払いが必要ですが、使用するクレジットカードは申請者本人名義でなくても問題ありません。' },
    { q: 'ESTA公式サイトについて', a: 'CBP(アメリカ合衆国税関・国境警備局)公式サイトからESTA(エスタ)を申請する場合は、こちらよりお手続きください。公式サイトは日本語表示に切り替えることが可能ですが、審査はCBPが行うため、申請フォームへの入力はすべて英語(ローマ字)で行う必要があります。また、問い合わせ対応も英語のみとなるためご注意ください。 新規でESTA申請を行う場合は、トップページの「新しいアプリケーションを作成する」をクリックします。お一人の申請を行う場合は「個人申請」、家族やグループで申請する場合は「アプリケーショングループ」を選択してください。その後、「免責事項」に同意し、画面の案内に従って必須事項を入力していきます。申請にあたっては、有効なパスポート、申請料の支払いに使用するクレジットカード、審査結果を受け取るためのメールアドレスが必要です。申請完了後は、「既存のアプリケーションを続行する」から、申請ステータスや審査結果を確認することができます。 ESTA(エスタ)の申請料金のお支払いには、クレジットカード(Visa、Master Card、JCB、American Express)がご利用いただけます。申請フォームの支払い画面では、半角英数字でクレジットカード番号・有効期限・セキュリティコード(CVV)を半角英数字で入力してください。なお、入力時にハイフンなどは不要です。 US ESTA Apply Websiteでは、日本語でのお問い合わせ対応や、分かりづらい入力項目のサポートを通じて、お客様のESTA申請（お申し込み）を日本語でサポートいたします。 ESTA申請の審査には、最大で72時間かかる場合がありますので、早めの申請をおすすめいたします。 CBP（アメリカ合衆国税関・国境警備局）公式サイトでのお問い合わせは英語のみの対応となりますが、当サイトからESTAを申請された場合は、日本語でのお問い合わせが可能です。 ESTAに関してご不明点がある場合は、CBP(アメリカ合衆国税関・国境警備局)またはDHS(米国国土安全保障省)の公式ウェブサイトをご確認ください。また、24時間対応の“Travel Communications Center”(1-202-325-5120)や、“CBP Info Center”のオンラインフォームからのお問い合わせも可能です。 在日米国大使館・総領事館公式サイト　よくある質問一覧- 国別協定に基づき、指定されている国籍(日本を含む)の方は、渡米の際に有効なパスポートを所持している必要があります。 パスポートや米国ビザの紛失・盗難に関しては、以下の連絡先までお問い合わせください。 米国大使館：〒107-8420　東京都港区赤坂1-10-5 ESTA(エスタ)申請時に関する最新情報は、以下の公式サイトでご確認ください。最新の渡航情報やビザ免除プログラム(VWP)の対象国などについて、参考になるサイトをいくつか紹介します。 米国CBP ESTA申請サイト 在日米国大使館・総領事館サイト 日本の外務省サイト US ESTA Apply Websiteは、アメリカ政府のいかなる部署や機関とも提携しておりません。 当サイトでは、複雑で分かりにくいESTA(エスタ)の申請手続きを、すべて日本語でサポートし、お客様に代わって承っています(※別途手数料がかかります）。 ESTA申請サービス費用には、CBP(アメリカ合衆国税関・国境警備局)公式サイトの電子渡航認証申請費用40.27米ドルが含まれています。' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">アメリカ渡航にはESTAの申請が必要です</h1>
        <p className="text-gray-600 leading-relaxed mb-4">申請には最大3日かかるため、余裕を持ってお手続きください。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">アメリカ入国に必要な「ESTA」について</h2>
        <p className="text-gray-600 leading-relaxed mb-4">日本国籍者が短期の観光や商用を目的として渡米する場合は、電子渡航認証ESTA(エスタ)の申請が必要です。</p>
        <p className="text-gray-600 leading-relaxed mb-4">ESTAの正式名称は“Electronic System for Travel Authorization”で、2009年1月より導入されました。ESTAは日本を含むビザ免除プログラム(VWP)対象国の市民が申請可能で、該当する方は渡米前にオンラインでの申請が義務付けられています。渡航目的は短期観光や商用に限定され、審査で「渡航認証許可」を取得した場合には最長90日間のアメリカ滞在が認められます。なお、ESTAの審査には最大で72時間かかることがあるため、CBP(米国国土安全保障省・国境取締局)では出発の3日前までの申請を推奨しています。また、乳幼児を含む未成年者も対象となるため、保護者が代理で手続きを行ってください。</p>
        <p className="text-gray-600 leading-relaxed mb-4">ビザ免除プログラム対象国の市民であっても、以下に該当する場合はESTAを利用した渡航は認められないため注意が必要です。</p>
        <p className="text-gray-600 leading-relaxed mb-4">VWP参加国の国籍者で、イラン、北朝鮮、イラク、シリア、スーダン、リビア、ソマリア、イエメンへの渡航または滞在歴がある方(VWP参加国の軍・政府職員としての公務による渡航を除く)</p>
        <p className="text-gray-600 leading-relaxed mb-4">VWP参加国の国籍者で、イラン、イラク、スーダン、北朝鮮、キューバ、シリアのいずれかの国籍を有する二重国籍者の方</p>
        <p className="text-gray-600 leading-relaxed mb-4">VWP参加国の国籍者で、2021年1月12日以降にキューバへの渡航または滞在歴がある方</p>
        <p className="text-gray-600 leading-relaxed mb-4">ESTAに関する詳細は、在日米国大使館の公式ウェブサイトをご確認ください。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">ESTA(エスタ)の申請手順について</h2>
        <h3 className="text-xl font-bold text-gray-700 mt-8 mb-3">申請書の入力</h3>
        <p className="text-gray-600 leading-relaxed mb-4">申請フォームの注意事項をご確認のうえ、必須項目を入力してくだい。申請には有効なパスポート・申請料の支払いに使用するクレジットカード・メールアドレスが必要です。</p>
        <h3 className="text-xl font-bold text-gray-700 mt-8 mb-3">申請料の支払い</h3>
        <p className="text-gray-600 leading-relaxed mb-4">入力内容に誤りがないか確認し、支払いページに進みます。クレジットカード情報を入力後、申請料の支払い手続きを行ってください。</p>
        <h3 className="text-xl font-bold text-gray-700 mt-8 mb-3">受付通知と審査</h3>
        <p className="text-gray-600 leading-relaxed mb-4">お支払い完了後、登録されたメールアドレス宛に「申請受付通知」が送信されます。審査には最大72時間を要するため、結果が通知されるまでお待ちください。</p>
        <h3 className="text-xl font-bold text-gray-700 mt-8 mb-3">結果の通知</h3>
        <p className="text-gray-600 leading-relaxed mb-4">審査結果はメールにて通知いたします。認証情報は渡米時まで大切に保管してください。申請内容および審査状況についてはこちらよりご確認ください。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">ESTAの申請が必要な方について</h2>
        <p className="text-gray-600 leading-relaxed mb-4">以下の条件に該当する方は、ESTAの申請が必要です。</p>
        <p className="text-gray-600 leading-relaxed mb-4">90日以内の観光または短期の商用を目的として渡米する方</p>
        <p className="text-gray-600 leading-relaxed mb-4">米国内で乗り継ぎを行う方</p>
        <p className="text-gray-600 leading-relaxed mb-4">ビザ免除プログラム(VWP)参加国の市民で、有効なパスポートを所持している方</p>
        <p className="text-gray-600 leading-relaxed mb-4">米国ビザを取得せずに渡米する方</p>
        <p className="text-gray-600 leading-relaxed mb-4">ESTAを取得せずに出発日を迎えると、飛行機への搭乗およびアメリカへの入国が認められないため、ご注意ください。DHS(アメリカ国土安全保障省)では、出発3日前までに申請手続きを完了することを推奨しています。
なお、VWP参加国の市民であっても、伝染病に罹患している方や過去に重大な犯罪歴がある方はESTA申請の対象外となります。また、留学・就労・永住を目的として渡米する方も対象外となるため、渡航目的に応じた適切なビザの取得が必要です。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">ESTAの有効期限と再申請について</h2>
        <p className="text-gray-600 leading-relaxed mb-4">ESTAの有効期限は2年間で、この期間内であれば複数回の渡米が可能です。ただし、パスポートの有効期限が2年未満の場合は、ESTAもパスポートと同日に失効しますのでご注意ください。渡航前に必ずパスポートの有効期限を確認し、期間が短い場合は更新後に改めてESTAを申請しましょう。なお、ESTAはアメリカへの入国時に有効である必要があり、出国時に期限が切れていても問題ありません。アメリカを経由して第三国へ向かう場合にも、有効なESTAが必要となります。(※ブルネイおよびハンガリーのパスポート保持者に限り、ESTAの有効期限は1年間となります。)
ESTAには更新制度がないため、失効した場合は再申請が必要です。また、パスポートの更新や、氏名・生年月日・国籍などの重要な個人情報に変更があった場合にも再申請を行ってください。再申請には、有効なパスポートと申請料の支払いに使用するクレジットカードが必要です。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">ESTA申請前の準備について</h2>
        <p className="text-gray-600 leading-relaxed mb-4">ESTAを申請するには、以下の情報および書類をご準備ください。</p>
        <p className="text-gray-600 leading-relaxed mb-4">有効なパスポート（残存有効期間が6か月以上あるもの）</p>
        <p className="text-gray-600 leading-relaxed mb-4">申請料の支払いに使用するクレジットカード</p>
        <p className="text-gray-600 leading-relaxed mb-4">通知を受け取るためのメールアドレス</p>
        <p className="text-gray-600 leading-relaxed mb-4">クレジットカードは、Visa、MasterCard、JCB、American Express、Diners Clubが利用可能です。申請者ご本人の名義でなくても、審査には影響ありません。
申請時には、氏名・性別・生年月日・パスポート情報などの基本情報に加えて、健康状態や犯罪歴に関する質問への回答が求められます。これらの質問のいずれかに該当する場合、ESTAによる渡航は認められないためご注意ください。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">ESTAのアプリ申請について</h2>
        <p className="text-gray-600 leading-relaxed mb-4">ESTAは、スマートフォンやタブレット端末を使用してアプリからの申請も可能です。CBP(アメリカ合衆国税関・国境警備局)は、2023年6月21日よりモバイルアプリ「ESTA Mobile」(Android/iOS)の提供を開始しています。はじめにパスポートをスキャンし、氏名・生年月日・国籍・性別・パスポート番号・パスポート発行年月日・パスポートの有効期限などの情報が申請フォームに反映されます。申請情報は自動で入力され、スペルミスを防止できる点がアプリで申請する大きなメリットです。申請フォームでは、氏名などの申請者情報やパスポート情報のほかに、個人情報(住所や電話番号)、滞在先情報、渡航歴や犯罪歴に関する質問の回答も求められます。アプリを利用してのESTA申請には、有効なパスポート、メールアドレス、クレジットカード、パスポート顔写真ページの画像およびパスポートとは異なる顔写真が必要です。</p>
        <section className="py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 scroll-underline">ESTA申請関連情報</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/list-esta-application/esta" className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 h-40 img-hover-shrink"></div>
              <div className="p-4"><h3 className="font-medium text-gray-800 text-sm">ESTA(エスタ)とは？</h3></div>
            </a>
            <a href="/list-esta-application/official-cbp" className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 h-40 img-hover-shrink"></div>
              <div className="p-4"><h3 className="font-medium text-gray-800 text-sm">公式ウェブサイトについて解説</h3></div>
            </a>
            <a href="/list-esta-application/place-of-birth" className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 h-40 img-hover-shrink"></div>
              <div className="p-4"><h3 className="font-medium text-gray-800 text-sm">出生地や住所の書き方</h3></div>
            </a>
            <a href="/list-esta-application/esta-flow" className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 h-40 img-hover-shrink"></div>
              <div className="p-4"><h3 className="font-medium text-gray-800 text-sm">ESTAの申請方法を解説</h3></div>
            </a>
            <a href="/list-esta-application/cbp-flow" className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 h-40 img-hover-shrink"></div>
              <div className="p-4"><h3 className="font-medium text-gray-800 text-sm">公式ウェブサイトでの申請方法</h3></div>
            </a>
            <a href="/us-contact-details" className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 h-40 img-hover-shrink"></div>
              <div className="p-4"><h3 className="font-medium text-gray-800 text-sm">米国内の連絡先情報</h3></div>
            </a>
            <a href="/list-esta-application/expiration-date" className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 h-40 img-hover-shrink"></div>
              <div className="p-4"><h3 className="font-medium text-gray-800 text-sm">ESTAの有効期限と再申請</h3></div>
            </a>
            <a href="/list-esta-application/application" className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 h-40 img-hover-shrink"></div>
              <div className="p-4"><h3 className="font-medium text-gray-800 text-sm">アプリのESTA申請方法</h3></div>
            </a>
            <a href="/list-esta-application/guam" className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 h-40 img-hover-shrink"></div>
              <div className="p-4"><h3 className="font-medium text-gray-800 text-sm">グアム入国にESTAは必要？</h3></div>
            </a>
          </div>
        </section>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">ESTA(エスタ)とは？事前入国審査制度を解説</h2>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">【記入例付き】ESTAの申請方法を解説</h2>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">出生地や住所の書き方を紹介</h2>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">米国内の連絡先情報の記入方法</h2>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">ESTAの申請料金</h2>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">ESTAの有効期限と再申請・確認方法</h2>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">公式ウェブサイトについて解説</h2>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">ESTA申請方法と取得手順を徹底解説</h2>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">アプリのESTA申請方法</h2>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">ESTA申請状況の確認方法</h2>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">グアム入国にESTAは必要？</h2>
      <FAQ items={faqItems} />
    </div>
  );
}