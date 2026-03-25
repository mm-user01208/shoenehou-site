import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ESTA(エスタ)申請状況 | US ESTA Apply Website',
  description: 'ESTAの申請状況と審査結果、登録情報を確認する方法を解説します。ESTA申請の認証可否を確認する際は、ローマ字表記の姓名・生年月日・申請IDの入力が必要です。',
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{"label": "ESTA申請関連情報一覧", "href": "/list-esta-application"}, {"label": "ESTA(エスタ)申請状況"}]} />
        <h1 className="text-3xl font-bold text-gray-900 mb-6">ESTA(エスタ)申請状況</h1>
        <p className="text-gray-600 leading-relaxed mb-4">ESTA申請の認証可否確認に必要な情報</p>
        <p className="text-gray-600 leading-relaxed mb-4">ESTA申請状況の確認方法・手順</p>
        <p className="text-gray-600 leading-relaxed mb-4">申請状況確認時のステータス</p>
        <p className="text-gray-600 leading-relaxed mb-4">申請フォーム入力時の注意点</p>
        <p className="text-gray-600 leading-relaxed mb-4">申請状況確認ページで知ることができる情報</p>
        <h3 className="text-xl font-bold text-gray-700 mt-8 mb-3">目次</h3>
        <h3 className="text-xl font-bold text-gray-700 mt-8 mb-3">ESTA申請の認証可否確認に必要な情報</h3>
        <p className="text-gray-600 leading-relaxed mb-4">ESTA申請後は、「申請状況の確認」ページから、現在の申請状況を確認することができます。審査には最大72時間(3日間)かかる場合があるため、申請後にステータスが「渡航認証保留中」と表示される場合は、時間をおいて再度ご確認ください。
申請状況を確認する際には、以下の情報の入力が必要です。</p>
        <p className="text-gray-600 leading-relaxed mb-4">姓 / Surname
パスポートに記載されているローマ字の姓を入力します。</p>
        <p className="text-gray-600 leading-relaxed mb-4">名 / Given name
パスポートに記載されているローマ字の名前を入力します。</p>
        <p className="text-gray-600 leading-relaxed mb-4">生年月日
プルダウンメニューから「年・月・日」を選択します。</p>
        <p className="text-gray-600 leading-relaxed mb-4">申請ID(33桁の英数字)
ESTA申請完了後に送信される「申請受付完了メール」に記載されています。</p>
        <p className="text-gray-600 leading-relaxed mb-4">申請IDは、渡航認証の承認可否の確認だけでなく、登録情報の照会にも必要となる重要な番号です。「申請受付完了メール」は削除せず、スクリーンショットやメモなどで大切に保管しておくことをおすすめします。なお、申請IDを使用しての検索は、申請日から90日間のみ有効ですのでご注意ください。</p>
        <h3 className="text-xl font-bold text-gray-700 mt-8 mb-3">ESTA申請状況の確認方法・手順</h3>
        <p className="text-gray-600 leading-relaxed mb-4">ESTA(エスタ)の申請状況は、「US ESTA Apply Website」にて申請手続きを行ったお客様に限り、「申請状況の確認」ページからご確認いただけます。申請後にきちんと承認されているか、追加手続きが必要かを正確に把握することで、安心してアメリカ渡航の準備を進めることができます。
申請状況の確認手順は、以下の通りです。</p>
        <p className="text-gray-600 leading-relaxed mb-4">STEP1：「US ESTA Apply Website」にアクセスし、「申請状況の確認」ページをクリックします。</p>
        <p className="text-gray-600 leading-relaxed mb-4">STEP2：申請状況確認フォームが表示されたら、以下の情報を入力してください。</p>
        <p className="text-gray-600 leading-relaxed mb-4">ローマ字の姓・名</p>
        <p className="text-gray-600 leading-relaxed mb-4">生年月日</p>
        <p className="text-gray-600 leading-relaxed mb-4">申請ID(33桁の英数字)</p>
        <p className="text-gray-600 leading-relaxed mb-4">※申請IDは、申請完了後に送付される「申請受付完了メール」に記載されています。</p>
        <p className="text-gray-600 leading-relaxed mb-4">STEP3：すべての情報を入力し終えたら、「申請状況確認」ボタンをクリックしてください。</p>
        <p className="text-gray-600 leading-relaxed mb-4">入力情報が正しければ、現在のESTA審査ステータスおよび登録情報が表示されます。</p>
        <h3 className="text-xl font-bold text-gray-700 mt-8 mb-3">申請状況確認時のステータス</h3>
        <p className="text-gray-600 leading-relaxed mb-4">ESTA申請状況は、「渡航認証許可」、「渡航認証保留」、「渡航認証拒否」のいずれかが表示されます。</p>
        <p className="text-gray-600 leading-relaxed mb-4">渡航認証許可
申請内容に不備がなく、米国への渡航が許可されたことを意味します。このステータスが表示された場合、有効期限内であればいつでもアメリカへの渡航が可能です。表示された承認画面は、必ず保存しておきましょう。</p>
        <p className="text-gray-600 leading-relaxed mb-4">渡航認証保留
申請内容が現在、確認・審査中であることを意味します。何らかのエラーや、追加書類の確認などに時間を要している可能性があります。このステータスが表示された場合は、最大72時間(3日間)待ってから再度ご確認ください。多くの場合は、時間をおいて確認すると「渡航認証許可」まはた「渡航認証拒否」のいずれかの最終結果が表示されます。</p>
        <p className="text-gray-600 leading-relaxed mb-4">渡航認証拒否
米国への渡航が拒否されたことを意味します。このステータスが表示された場合、ESTAを利用してアメリカに入国することはできません。</p>
        <p className="text-gray-600 leading-relaxed mb-4">主な拒否理由としては、以下のようなものが考えられます。</p>
        <p className="text-gray-600 leading-relaxed mb-4">申請内容の不備</p>
        <p className="text-gray-600 leading-relaxed mb-4">過去の渡航歴に関する問題</p>
        <p className="text-gray-600 leading-relaxed mb-4">犯罪歴</p>
        <p className="text-gray-600 leading-relaxed mb-4">過去のビザやESTAの拒否歴</p>
        <p className="text-gray-600 leading-relaxed mb-4">「渡航認証拒否」の通知を受けた方は、ビザ免除プログラムを利用できません。そのため、在日米国大使館または領事館にて、渡航目的に応じたビザの申請が必要です。</p>
        <h3 className="text-xl font-bold text-gray-700 mt-8 mb-3">申請フォーム入力時の注意点</h3>
        <p className="text-gray-600 leading-relaxed mb-4">ESTAの申請状況が表示されない原因の多くは、入力フォームでの情報の誤りによるものです。申請状況を確認する際は、以下の点にご注意ください。</p>
        <p className="text-gray-600 leading-relaxed mb-4">姓名は、パスポートに記載されているローマ字表記の通りに入力してください。</p>
        <p className="text-gray-600 leading-relaxed mb-4">生年月日は「年・月・日」の順で、プルダウンメニューから該当の数字を選択してください。</p>
        <p className="text-gray-600 leading-relaxed mb-4">申請IDは、33桁の英数字を正確に入力し、英語と数字の打ち間違いに注意してください。</p>
        <p className="text-gray-600 leading-relaxed mb-4">申請IDは、「申請受付完了メール」に記載されている英数字をご確認ください。</p>
        <p className="text-gray-600 leading-relaxed mb-4">申請IDを紛失または申請受付完了メールが見つからない場合は、「お問い合わせ」ページより、お問い合わせ内容・氏名・メールアドレスを入力のうえ送信してください。</p>
        <h3 className="text-xl font-bold text-gray-700 mt-8 mb-3">申請状況確認ページで知ることができる情報</h3>
        <p className="text-gray-600 leading-relaxed mb-4">申請状況確認ページでは、ESTA認証の可否だけでなく、申請時に登録した個人情報や渡航関連情報の内容も確認することが可能です。確認できる内容の詳細  は、以下の通りです。</p>
        <p className="text-gray-600 leading-relaxed mb-4">ESTA申請時の登録情報
申請時に登録したご本人の基本情報を確認できます。</p>
        <p className="text-gray-600 leading-relaxed mb-4">姓/名(ローマ字表記)</p>
        <p className="text-gray-600 leading-relaxed mb-4">別名や旧姓の有無</p>
        <p className="text-gray-600 leading-relaxed mb-4">性別</p>
        <p className="text-gray-600 leading-relaxed mb-4">生年月日</p>
        <p className="text-gray-600 leading-relaxed mb-4">国籍</p>
        <p className="text-gray-600 leading-relaxed mb-4">連絡先情報
ESTAの申請完了通知や重要な連絡を受け取るために登録した連絡先情報です。</p>
        <p className="text-gray-600 leading-relaxed mb-4">登録したメールアドレス</p>
        <p className="text-gray-600 leading-relaxed mb-4">電話番号</p>
        <p className="text-gray-600 leading-relaxed mb-4">住所情報
現在お住まいの住所情報(申請時に入力した住所)が確認可能です。</p>
        <p className="text-gray-600 leading-relaxed mb-4">住所</p>
        <p className="text-gray-600 leading-relaxed mb-4">パスポート情報
アメリカ渡航の際に使用するパスポート情報が確認できます。</p>
        <p className="text-gray-600 leading-relaxed mb-4">パスポート番号</p>
        <p className="text-gray-600 leading-relaxed mb-4">パスポートの発行日、有効期限</p>
        <p className="text-gray-600 leading-relaxed mb-4">他国のパスポート有無(複数の国籍を持つ場合)</p>
        <p className="text-gray-600 leading-relaxed mb-4">出生国、都市</p>
        <p className="text-gray-600 leading-relaxed mb-4">現在および過去の国籍</p>
        <p className="text-gray-600 leading-relaxed mb-4">GE/NEXUS/SENTRのメンバーシップ</p>
        <p className="text-gray-600 leading-relaxed mb-4">旅行・渡航関連情報    
アメリカ渡航に関する具体的な情報を確認できます。</p>
        <p className="text-gray-600 leading-relaxed mb-4">第三国への乗り継ぎ(アメリカを経由して他国へ向かうかどうか)</p>
        <p className="text-gray-600 leading-relaxed mb-4">アメリカでの滞在先住所や連絡先</p>
        <p className="text-gray-600 leading-relaxed mb-4">就労経験の有無(職歴・実務経験)</p>
        <p className="text-gray-600 leading-relaxed mb-4">SNSアカウント情報</p>
        <p className="text-gray-600 leading-relaxed mb-4">緊急連絡先</p>
        <p className="text-gray-600 leading-relaxed mb-4">両親の氏名</p>
        <p className="text-gray-600 leading-relaxed mb-4">アンケート</p>
        <p className="text-gray-600 leading-relaxed mb-4">渡航資格に関わる質問への回答内容を確認できます。</p>
        <p className="text-gray-600 leading-relaxed mb-4">質問事項</p>
        <p className="text-gray-600 leading-relaxed mb-4">質問事項への回答</p>
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
    </div>
  );
}