import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '',
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6 md:p-10">
      <Breadcrumb items={[{"label": "米国内の連絡先情報の記入方法"}]} />
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-2 pb-3 border-b-2 border-[#c41e3a]">ESTA申請時に必要な
米国内の連絡先(住所・電話番号)の記入方法</h1>
        <p className="text-gray-700 leading-relaxed mb-4">ESTAは、米国内での滞在先や宿泊先が未定の場合でも申請が可能です。​</p>
        <p className="text-gray-700 leading-relaxed mb-4">米国への渡航が決まった際は、出発日までに余裕を持ってESTA申請を行うことをおすすめします。</p>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA申請では入力内容に不備がある場合や、渡航情報の確認が必要と判断された場合に審査結果が一時的に「保留」や「認証拒否」と表示されることがあります。このような場合、搭乗予定の航空機にチェックインできない、あるいは出発直前にスケジュール調整が必要になる可能性もあります。そのため、滞在先が未定であってもESTAを早めに申請し、審査結果を事前に確認しておくことが重要です。万が一、承認されなかった場合でも、渡航までに十分な時間があれば、再申請やビザ申請などの対応が可能となります。なお、申請情報は正確性が求められるため、滞在予定先が決まり次第、速やかにESTA申請情報を更新しましょう。
本ページでは、ESTA申請時に必要となる米国内の滞在先情報および緊急連絡先情報の入力方法について、画面表示に沿って詳しく解説します。</p>
        <p className="text-gray-700 leading-relaxed mb-4">滞在先・宿泊先の入力方法</p>
        <p className="text-gray-700 leading-relaxed mb-4">緊急連絡先を登録する重要性・入力方法</p>
        <p className="text-gray-700 leading-relaxed mb-4">連絡先や滞在先を変更・訂正する方法</p>
        <p className="text-gray-700 leading-relaxed mb-4">滞在先情報の記入例【都市別】</p>
        <h3 id="section-1" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">滞在先・宿泊先の入力方法</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA申請画面を進めていくと、「米国への渡航目的は、他国へ乗り継ぐためですか？」という質問が表示されます。ここでは、米国に入国・滞在するのか、それとも乗り継ぎ(トランジェット)なのかによって選択すべき項目が異なります。</p>
        <p className="text-gray-700 leading-relaxed mb-4">はい：米国の空港を経由して他国へ向かう場合に選択します。</p>
        <p className="text-gray-700 leading-relaxed mb-4">いいえ：米国本土やハワイを最終目的地として旅行・滞在する場合に選択します。</p>
        <p className="text-gray-700 leading-relaxed mb-4">この選択内容によって、滞在先住所や電話番号の入力画面が表示されるかどうかが変わります。他国への乗り継ぎ(トランジェット)が目的で米国に立ち寄る場合は、連絡先情報の入力欄は表示されません。ただし、乗り継ぎ目的であってもESTAの申請は必須のため忘れずに手続きを行いましょう。</p>
        <h3 id="section-2" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">滞在先/宿泊先が決定している場合</h3>
        <p className="text-gray-700 leading-relaxed mb-4">「米国への渡航目的は、他国へ乗り継ぐためですか？」の質問で「いいえ」を選択すると、続けて「滞在先の住所、電話番号を登録しますか?」という質問が表示されます。すでにホテルを予約済みである場合や、滞在先が決まっている場合には「はい」を選択してください。その後、滞在先または宿泊先の情報を入力する画面が表示されます。入力が必要となる主な項目は、以下の通りです。</p>
        <p className="text-gray-700 leading-relaxed mb-4">滞在先 名称
予約しているホテル名、または知人宅に滞在する場合は知人の氏名を入力します。情報が不明な場合は、未記入(空欄)のままでも問題ありません。
記入例：○○ Hotel、○○ Residence　など</p>
        <p className="text-gray-700 leading-relaxed mb-4">滞在先 州
滞在予定の州を、プルダウンメニューから選択します。情報が不明な場合は、未選択のままでも次の画面へ進むことができます。</p>
        <p className="text-gray-700 leading-relaxed mb-4">滞在先 都市名
滞在先の都市名を英語(ローマ字)表記で記入します。情報が不明の場合は空欄のままで問題ありません。
記入例：Los Angels、New York、Chicago など</p>
        <p className="text-gray-700 leading-relaxed mb-4">滞在先 通り名 丁番地、建物名、部屋番号
滞在先のホテルや建物の住所情報は、分かる範囲で入力してください。通り名、丁目、番地、建物名、部屋番号などを記入します。詳細が不明な場合は、空欄のままでも問題ありません。
記入例：○○ blvd 1234 ○○ Building</p>
        <p className="text-gray-700 leading-relaxed mb-4">滞在先 電話番号
滞在先や宿泊先の電話番号を入力してください。先頭の「0」は自動的に省略されます。情報が不明な場合は、空欄のままでも構いません。</p>
        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">スムーズに入力するためのポイント</h4>
        <p className="text-gray-700 leading-relaxed mb-4">ホテルに宿泊する場合
予約確認メールやホテルの公式ウェブサイトに記載されている住所と電話番号をそのまま入力するのが最も確実です。</p>
        <p className="text-gray-700 leading-relaxed mb-4">個人宅に滞在する場合
友人宅やAirbnb（エアビー）などに滞在する場合は、事前にホストから正式な住所と電話番号を入手しておきましょう。</p>
        <p className="text-gray-700 leading-relaxed mb-4">任意の項目に回答する場合
任意項目には、不確かな情報を入力する必要はありません。空欄でも差し支えないため、正確な情報を分かる範囲で入力しましょう。</p>
        <p className="text-gray-700 leading-relaxed mb-4">複数の宿泊施設を利用する場合
最初に宿泊する施設の情報を優先して入力することをおすすめします。</p>
        <h3 id="section-3" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">滞在先/宿泊先が未定の場合</h3>
        <p className="text-gray-700 leading-relaxed mb-4">滞在先や宿泊先がまだ決まっていない方、または登録を希望しない方は「滞在先の住所、電話番号を登録しますか?」の質問に対して「いいえ」を選択してください。この場合、滞在先情報の入力画面は表示されず、そのまま次の手順へ進むことができます。ただし、入国審査時に口頭で滞在先を尋ねられることもあるため、渡航までに宿泊先を決めておくと安心です。空港での説明とESTAの申請内容に大きな齟齬が生じないよう注意しましょう。
ESTA取得後であっても、米国内の滞在先情報(住所や電話番号)は、後から変更・訂正することが可能です。</p>
        <h3 id="section-4" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">緊急連絡先を登録する重要性・入力方法</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA申請では米国内の滞在先だけでなく、緊急  時に連絡が取れる方の連絡先情報も登録することが可能です。この緊急連絡先情報は、米国滞在中に予期せぬトラブルが発生した際に使用されることがあります。たとえば、病気や事故、または入国審査時に追加確認が必要となった場合などです。信頼できる家族や友人、勤務先などをあらかじめ登録しておくことで、万が一の際にも迅速かつ円滑な対応が可能になります。</p>
        <h3 id="section-5" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">緊急連絡先を登録する場合</h3>
        <p className="text-gray-700 leading-relaxed mb-4">「緊急連絡先を登録しますか？」の質問に対し、「はい」を選択してください。その後、姓名、メールアドレス、緊急時の電話番号を入力します。この連絡先は、米国在住者である必要はありません。日本の家族や友人、勤務先など渡航者以外の個人や団体を登録することができます。登録前に、緊急連絡先として使用することを相手に伝えておくと安心です。なお、登録を希望しない場合は空欄でも構いません。</p>
        <h3 id="section-6" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">緊急連絡先を登録しない場合</h3>
        <p className="text-gray-700 leading-relaxed mb-4">緊急連絡先の登録を希望しない場合は、「いいえ」を選択して申請手続きを進めることが可能です。
ただし、緊急連絡先を登録しない場合には、いくつかのリスクが考えられます。米国滞在中に急病や事故が発生した場合、あるいは入国審査時に追加の確認が必要となった場合などに、本人以外の連絡先として参照される情報がないことが問題となる可能性があります。緊急連絡先は必須項目ではありませんが、短期滞在であっても万が一に備えて登録しておくことをおすすめします。</p>
        <p className="text-gray-700 leading-relaxed mb-4">滞在先情報を登録するメリット</p>
        <p className="text-gray-700 leading-relaxed mb-4">米国では、滞在先や宿泊先が未定の渡航者に対する入国審査が年々厳しくなっており、不法滞在や不法就労の疑いにより入国を拒否される可能性もあります。
ESTA申請における渡航先情報は、入国審査時に参照される場合があり、渡航者がどこに滞在し、どのような目的で米国を訪れるのかを判断する重要な材料となります。そのため、宿泊先の住所や電話番号、および渡航者と確実に連絡が取れる電話番号を登録しておくことを強くおすすめします。
ESTA申請時に正確な滞在先情報を申告しておくことで、スムーズかつ安全な米国渡航が可能になります。</p>
        <h3 id="section-7" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">連絡先や滞在先を変更・訂正する方法</h3>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA申請では、渡航情報(滞在先情報)の変更や誤りの訂正が可能です。当サイトの「ESTA申請はこちら」をクリックし、新しい滞在先情報を入力してください。入力後、「入力内容を確認する」をクリックすると、「過去の入力情報」と「新しい入力情報」が表示されます。内容に誤りがなければ、「変更内容を送信する」をクリックし、「申請完了」画面が表示されることを確認してください。
なお、氏名・パスポート番号・生年月日などの基本情報に誤りがあった場合は、新たにESTA申請を行う必要があります。ただし、当サイトからESTA申請をされた方は、申請完了後でも１度に限り、内容の修正・変更を無料で承ります。</p>
        <h3 id="section-8" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">滞在先情報の記入例【都市別】</h3>
        <p className="text-gray-700 leading-relaxed mb-4">実際の申請画面に沿った具体的な記入例を、訪問する都市別に詳しく紹介します。​</p>
        <p className="text-gray-700 leading-relaxed mb-4">​記入時の基本的なルール</p>
        <p className="text-gray-700 leading-relaxed mb-4">英語表記：すべての情報は英語(ローマ字)で入力します</p>
        <p className="text-gray-700 leading-relaxed mb-4">住所の記載順：アメリカの住所表記に従い、「番地→通り名→市→州」の順で記入します</p>
        <p className="text-gray-700 leading-relaxed mb-4">複数の都市を訪れる場合：初日に滞在する宿泊先の情報を入力します</p>
        <p className="text-gray-700 leading-relaxed mb-4">知人宅に滞在する場合：ホストの氏名と住所を入力します</p>
        <p className="text-gray-700 leading-relaxed mb-4">任意項目の扱い：不明な情報は、空欄のままでも申請可能です</p>
        <p className="text-gray-700 leading-relaxed mb-4">ESTA申請フォームでは、宿泊先情報の多くに「任意」と表示されています。任意項目について正確な情報が分からない場合は、無理に入力する必要はありません。</p>
        <h3 id="section-9" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ニューヨークに滞在する場合</h3>
        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">1.　ザ プラザ ホテル/The Plaza Hotel</h4>
        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">2.　ザ セント レジス ニューヨーク/The St. Regis New York</h4>
        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">3.　ザ・サリー ホテル/The Surrey Hotel</h4>
        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">4.　ザ スタンダード ハイライン/THE STANDARD HIGH LINE</h4>
        <h3 id="section-10" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ロサンゼルスに滞在する場合</h3>
        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">1.　シェラトン グランド ロサンゼルス/Sheran Grand Los Angeles</h4>
        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">2.　ウェスティン・ボナヴェンチャー・ホテル＆スイート/Westin Bonaventure Hotel & Suites</h4>
        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">3.　ロウズ ハリウッド ホテル/Loews Hollywood Hotel</h4>
        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">4.　ミヤコ ホテル ロサンゼルス/Miyako Hotel Los Angeles</h4>
        <h3 id="section-11" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ハワイ(ホノルル)に滞在する場合</h3>
        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">1.　ザ ロイヤル・ハワイアン/The Royal Hawaiian</h4>
        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">2.　ヒルトン・ハワイアン・ビレッジ/Hilton Hawaiian Village</h4>
        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">3.　ハレクラニ/Hilton Hawaiian Village</h4>
        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">4.　シェラトン・ワイキキ・ホテル/Sheraton Waikiki</h4>
        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">5.　モアナ サーフライダー ウェスティン リゾート＆スパ/Moana Surfrider, A Westin Resort & Spa</h4>
        <h3 id="section-12" className="text-lg font-bold text-[#1a2744] border-b border-gray-200 pb-2 mt-8 mb-4">ハワイ(ホノルル以外)に滞在する場合</h3>
        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">1.　フォーシーズンズ・リゾート・オアフ・アット・コオリナ/Four Seasons Resort Oahu at Ko Olina</h4>
        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">2.　タートル・ベイ・リゾート/Turtle Bay Resort</h4>
        <h4 className="text-base font-bold text-[#1a2744] mt-6 mb-3">3.　アウラニ・ディズニー・リゾート＆スパ/Aulani, A Disney Resort & Spa</h4>
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