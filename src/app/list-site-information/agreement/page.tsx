import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '利用規約 | US ESTA Apply Website',
  description: 'US ESTA Apply Websiteでは、お客様に安心してESTA申請をご利用いただくため、第三者による不正利用や各種トラブルの発生を防止し、万一の際にも迅速に対応できるよう一定のルールを定めたうえでサイトを運営しています。',
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{"label": "サイト情報一覧", "href": "/list-site-information"}, {"label": "利用規約"}]} />
        <h1 className="text-3xl font-bold text-gray-900 mb-6">利用規約</h1>
        <p className="text-gray-600 leading-relaxed mb-4">本利用規約（以下「本規約」といいます）は、US ESTA Apply Website（以下「当サイト」といいます）が提供するESTA申請代行サービスの利用条件を定めるものです。当サイトをご利用いただく場合、本規約の内容に同意いただいたものとみなします。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">第1条（適用範囲）</h2>
        <p className="text-gray-600 leading-relaxed mb-4">本規約は、当サイトが提供するすべてのサービスおよび関連情報の利用に適用されます。
利用者は、当サイトの利用にあたり、法令および本規約を遵守するものとします。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">第2条（禁止事項）</h2>
        <p className="text-gray-600 leading-relaxed mb-4">利用者は、以下の行為を行ってはなりません。</p>
        <p className="text-gray-600 leading-relaxed mb-4">不正または不当な目的で当サイトを利用する行為</p>
        <p className="text-gray-600 leading-relaxed mb-4">虚偽または第三者の情報を用いた申請</p>
        <p className="text-gray-600 leading-relaxed mb-4">当サイトの運営を妨害する行為</p>
        <p className="text-gray-600 leading-relaxed mb-4">その他、当サイトが不適切と判断する行為</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">第3条（個人情報の取扱い）</h2>
        <p className="text-gray-600 leading-relaxed mb-4">当サイトにおける個人情報の取扱いについては、別途定める「個人情報保護に関する基本方針」に従って管理されます。
利用者は、本規約とあわせて当該方針の内容についても同意したものとみなします。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">第4条（サービス内容）</h2>
        <p className="text-gray-600 leading-relaxed mb-4">当サイトは、利用者に代わりESTA（エスタ）の申請手続きを代行するサービスを提供します。</p>
        <p className="text-gray-600 leading-relaxed mb-4">1回のお申し込みにつき、申請対象者は1名とし、複数名の場合は人数分のお申し込みが必要となります。</p>
        <p className="text-gray-600 leading-relaxed mb-4">航空券、宿泊施設等の手配業務は行っておりません。</p>
        <p className="text-gray-600 leading-relaxed mb-4">ESTA申請システムの仕様上、申請手続き中に認証コード等を受信する必要があるため、米国DHS（アメリカ合衆国国土安全保障省）のシステムに登録するメールアドレスには、当サイトの管理するメールアドレスを使用します。</p>
        <p className="text-gray-600 leading-relaxed mb-4">申請完了後に表示される登録メールアドレスが当サイトのものとなる点について、あらかじめご了承ください。</p>
        <p className="text-gray-600 leading-relaxed mb-4">なお、申請完了後の登録メールアドレスの変更は、利用者ご自身で行っていただきます。</p>
        <p className="text-gray-600 leading-relaxed mb-4">サービスは、申請のご依頼および料金のお支払いが確認された時点で開始されます。</p>
        <p className="text-gray-600 leading-relaxed mb-4">申請結果は、当サイトよりメールにて通知し、当該通知をもって申請代行業務の完了とします。</p>
        <p className="text-gray-600 leading-relaxed mb-4">通常は翌営業日以内にご案内しますが、最大72時間を要する場合があります。</p>
        <p className="text-gray-600 leading-relaxed mb-4">申請状況確認ページは、当サイトを通じて申請された利用者のみが利用でき、照会可能期間は申込日から90日間とします。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">第5条（料金および支払方法）</h2>
        <p className="text-gray-600 leading-relaxed mb-4">当サイト所定の申請手数料24,200円（税込）には、米国国土安全保障省および旅行促進法に基づく費用として40.27米ドルが含まれます。</p>
        <p className="text-gray-600 leading-relaxed mb-4">料金はクレジットカードによる事前決済とし、申込手続き完了時点で支払いが確定します。</p>
        <p className="text-gray-600 leading-relaxed mb-4">利用可能なクレジットカードは、Visa、Mastercard、JCB、American Express、Diners Clubです。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">第6条（キャンセルおよび返金）</h2>
        <p className="text-gray-600 leading-relaxed mb-4">ESTA申請代行業務が完了した後のキャンセルはお受けできません。</p>
        <p className="text-gray-600 leading-relaxed mb-4">米国DHSのシステム上で申請登録を開始する前に、当サイト所定の方法によりキャンセルの申し出があった場合は決済手数料900円を差し引いた金額を返金します。</p>
        <p className="text-gray-600 leading-relaxed mb-4">申請内容の確認過程において、適格性や国籍等に関する追加確認が必要となる場合、当サイトよりメールで質問を行うことがあります。この場合、利用者からの回答があるまで申請手続きを一時停止します。</p>
        <p className="text-gray-600 leading-relaxed mb-4">当サイトからの問い合わせ後、2週間を経過しても回答が確認できない場合は、申込みをキャンセル扱いとし、決済手数料900円を控除した金額を返金します。</p>
        <p className="text-gray-600 leading-relaxed mb-4">米国DHSのシステムに申請情報が登録された後は、申請状況が「認証保留中」の場合を含め、キャンセルおよび返金には応じられません。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">第7条（責任の範囲）</h2>
        <p className="text-gray-600 leading-relaxed mb-4">当サイトのサービス利用に関連して利用者に損害が生じた場合、当サイトは誠意をもって対応しますが、その賠償責任の上限は、利用者が当サイトに支払ったサービス料金の総額を限度とします。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">第8条（利用制限）</h2>
        <p className="text-gray-600 leading-relaxed mb-4">利用者が本規約に違反した場合、または当サイトが不適切な利用と判断した場合、事前の通知なく当サイトへのアクセス制限やサービス提供の停止等の措置を講じることがあります。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">第9条（知的財産権）</h2>
        <p className="text-gray-600 leading-relaxed mb-4">当サイトに掲載されている文章、画像、デザイン、システム等に関する著作権およびその他の知的財産権は、当サイトまたは正当な権利者に帰属します。利用者は、これらを無断で複製、改変、配布、公開してはなりません。</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">第10条（お問い合わせ）</h2>
        <p className="text-gray-600 leading-relaxed mb-4">当サイトのサービスに関するご質問やご連絡は、当サイトのお問い合わせフォームより受け付けています。</p>
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