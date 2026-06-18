import type { Metadata } from 'next';

export const SITE_URL = 'https://shoenehou-online.jp';
export const SITE_NAME = 'US ESTA Apply Website';

const OFFICIAL_DISCLAIMER = '当サイトは米国政府の公式ESTAサイトではありません。';

type JsonLdData = Record<string, unknown> | Record<string, unknown>[];

type SeoMetadataOptions = {
  path: string;
  title: string;
  description: string;
};

type PageJsonLdOptions = SeoMetadataOptions;

type RouteInfo = {
  label: string;
  lastmod: string;
  image: string;
};

export const SEO_ROUTES: Record<string, RouteInfo> = {
  '/': {
    label: 'アメリカ渡航にはESTAの申請が必要です',
    lastmod: '2026-06-04',
    image: '/img/hero-liberty.jpg',
  },
  '/list-esta-application/': {
    label: 'ESTA申請関連情報一覧',
    lastmod: '2026-06-04',
    image: '/img/related/01-esta-toha.jpg',
  },
  '/list-esta-application/us-contact-details/': {
    label: '米国内の連絡先情報の記入方法',
    lastmod: '2026-06-04',
    image: '/img/related/06-us-contact.jpg',
  },
  '/list-esta-application/place-of-birth/': {
    label: 'ESTA申請時の出生地や住所の書き方を解説',
    lastmod: '2026-06-04',
    image: '/img/related/03-address-writing.jpg',
  },
  '/list-esta-application/fee/': {
    label: 'ESTA(エスタ)の申請料金',
    lastmod: '2026-06-04',
    image: '/img/related/fee.jpg',
  },
  '/list-esta-application/expiration-date/': {
    label: 'ESTAの有効期限と再申請・確認の方法',
    lastmod: '2026-06-04',
    image: '/img/related/expiration-date.jpg',
  },
  '/list-esta-application/official-cbp/': {
    label: 'ESTA公式ウェブサイトについて解説',
    lastmod: '2026-06-04',
    image: '/img/related/official-cbp.jpg',
  },
  '/list-esta-application/status-check/': {
    label: 'ESTA申請状況の確認方法',
    lastmod: '2026-06-04',
    image: '/img/related/status-check.jpg',
  },
  '/list-esta-application/esta-flow/': {
    label: 'ESTA(エスタ)の申請方法を解説',
    lastmod: '2026-06-04',
    image: '/img/related/04-apply-method.jpg',
  },
  '/list-esta-application/esta/': {
    label: 'ESTA(エスタ)とは？事前入国審査制度を解説',
    lastmod: '2026-06-04',
    image: '/img/related/01-esta-toha.jpg',
  },
  '/list-esta-application/application/': {
    label: 'アプリを使ったESTA申請方法を解説',
    lastmod: '2026-06-04',
    image: '/img/related/application.jpg',
  },
  '/list-esta-application/cbp-flow/': {
    label: 'ESTA申請方法と取得手順を徹底解説',
    lastmod: '2026-06-04',
    image: '/img/related/cbp-flow.jpg',
  },
  '/list-esta-guide/': {
    label: 'ESTA申請ガイド一覧',
    lastmod: '2026-06-09',
    image: '/img/related/cost.jpg',
  },
  '/list-esta-guide/cost/': {
    label: 'ESTA申請の料金はいくら？公式サイトの費用と代行サイトの違い',
    lastmod: '2026-06-09',
    image: '/img/related/cost.jpg',
  },
  '/list-esta-guide/address-guide/': {
    label: 'ESTA申請の住所・出生地・勤務先の英語表記ガイド',
    lastmod: '2026-06-09',
    image: '/img/related/address-guide.jpg',
  },
  '/list-esta-guide/group-family/': {
    label: 'ESTAのグループ申請・家族申請の方法',
    lastmod: '2026-06-09',
    image: '/img/related/group-family.jpg',
  },
  '/list-esta-guide/children/': {
    label: '子供・未成年・赤ちゃんのESTA申請方法',
    lastmod: '2026-06-09',
    image: '/img/related/children.jpg',
  },
  '/list-esta-guide/renewal/': {
    label: 'ESTAの更新・延長方法を解説',
    lastmod: '2026-06-09',
    image: '/img/related/renewal.jpg',
  },
  '/list-esta-guide/denied/': {
    label: 'ESTA申請が却下・拒否された場合の対処法',
    lastmod: '2026-06-09',
    image: '/img/related/denied.jpg',
  },
  '/list-esta-guide/transit/': {
    label: 'アメリカ乗り継ぎ(トランジット)にESTAは必要？',
    lastmod: '2026-06-09',
    image: '/img/related/transit.jpg',
  },
  '/list-esta-guide/passport/': {
    label: 'ESTAとパスポートの関係',
    lastmod: '2026-06-09',
    image: '/img/related/passport.jpg',
  },
  '/list-esta-guide/official-vs-fake/': {
    label: 'ESTA公式サイトと偽サイトの見分け方',
    lastmod: '2026-06-09',
    image: '/img/related/official-vs-fake.jpg',
  },
  '/list-esta-guide/hawaii/': {
    label: 'ハワイ旅行にESTAは必要？',
    lastmod: '2026-06-09',
    image: '/img/related/hawaii.jpg',
  },
  '/list-esta-guide/guam/': {
    label: 'グアム入国にESTA(エスタ)は必要？',
    lastmod: '2026-06-09',
    image: '/img/related/guam.jpg',
  },
  '/list-site-information/': {
    label: 'サイト情報一覧',
    lastmod: '2026-06-04',
    image: '/img/logo-shield.png',
  },
  '/list-site-information/aboutus/': {
    label: '特定商取引法に基づく表記・運営者情報',
    lastmod: '2026-06-04',
    image: '/img/related/aboutus.jpg',
  },
  '/list-site-information/privacy-policy/': {
    label: '個人情報保護に関する基本方針',
    lastmod: '2026-06-04',
    image: '/img/related/privacy-policy.jpg',
  },
  '/list-site-information/agreement/': {
    label: '利用規約',
    lastmod: '2026-06-04',
    image: '/img/related/agreement.jpg',
  },
  '/list-site-information/browser/': {
    label: '推奨ブラウザについて',
    lastmod: '2026-06-04',
    image: '/img/related/browser.jpg',
  },
  '/list-site-information/contents-policy/': {
    label: 'コンテンツポリシー',
    lastmod: '2026-06-04',
    image: '/img/related/contents-policy.jpg',
  },
  '/sitemap/': {
    label: 'サイトマップ',
    lastmod: '2026-06-04',
    image: '/img/related/sitemap.jpg',
  },
};

const APPLICATION_ITEMS = [
  '/list-esta-application/esta/',
  '/list-esta-application/esta-flow/',
  '/list-esta-application/place-of-birth/',
  '/list-esta-application/us-contact-details/',
  '/list-esta-application/fee/',
  '/list-esta-application/expiration-date/',
  '/list-esta-application/official-cbp/',
  '/list-esta-application/cbp-flow/',
  '/list-esta-application/application/',
  '/list-esta-application/status-check/',
];

const GUIDE_ITEMS = [
  '/list-esta-guide/cost/',
  '/list-esta-guide/address-guide/',
  '/list-esta-guide/group-family/',
  '/list-esta-guide/children/',
  '/list-esta-guide/renewal/',
  '/list-esta-guide/denied/',
  '/list-esta-guide/transit/',
  '/list-esta-guide/passport/',
  '/list-esta-guide/official-vs-fake/',
  '/list-esta-guide/hawaii/',
  '/list-esta-guide/guam/',
];

const SITE_INFORMATION_ITEMS = [
  '/list-site-information/aboutus/',
  '/list-site-information/privacy-policy/',
  '/list-site-information/agreement/',
  '/list-site-information/browser/',
  '/list-site-information/contents-policy/',
];

const HOW_TO_STEPS: Record<string, string[]> = {
  '/list-esta-application/esta-flow/': [
    '申請フォームで氏名、生年月日、パスポート情報、連絡先などの必要事項を入力します。',
    '入力内容に誤りがないか確認し、申請内容を送信します。',
    '申請料の支払い手続きを行います。',
    '審査結果の通知を確認し、渡航前まで認証情報を保管します。',
  ],
  '/list-esta-application/application/': [
    'ESTA Mobileアプリを準備し、申請を開始します。',
    'パスポート情報を読み取り、申請フォームへ反映します。',
    '申請者情報、連絡先、渡航関連情報を入力します。',
    '内容を確認して送信し、申請料の支払いを行います。',
  ],
  '/list-esta-application/cbp-flow/': [
    'CBPのESTA公式サイトへアクセスし、申請種別を選択します。',
    'パスポート情報、申請者情報、渡航情報を画面の案内に沿って入力します。',
    '申請内容を確認し、必要に応じて修正します。',
    '申請料を支払い、審査結果を確認します。',
  ],
};

export function canonicalPath(path: string) {
  if (path === '/') return '/';
  return `/${path.replace(/^\/+|\/+$/g, '')}/`;
}

export function absoluteUrl(path: string) {
  const canonical = canonicalPath(path);
  return `${SITE_URL}${canonical === '/' ? '/' : canonical}`;
}

export function seoMetadata({ path, title, description }: SeoMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const info = SEO_ROUTES[canonicalPath(path)];
  const metaDescription = withOfficialDisclaimer(description);
  const image = absoluteUrl(info?.image ?? '/img/logo-shield.png');
  const isArticle = isArticlePath(canonicalPath(path));

  return {
    title,
    description: metaDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description: metaDescription,
      url: canonical,
      siteName: SITE_NAME,
      locale: 'ja_JP',
      type: isArticle ? 'article' : 'website',
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: metaDescription,
      images: [image],
    },
  };
}

export function pageJsonLd({ path, title, description }: PageJsonLdOptions) {
  const canonical = canonicalPath(path);
  const schemas: Record<string, unknown>[] = [breadcrumbSchema(canonical)];

  if (canonical === '/') {
    schemas.unshift(websiteSchema(), organizationSchema());
    return schemas;
  }

  if (isHubPath(canonical)) {
    schemas.unshift(collectionPageSchema(canonical, title, description));
    return schemas;
  }

  if (HOW_TO_STEPS[canonical]) {
    schemas.unshift(howToSchema(canonical, title, description));
    return schemas;
  }

  if (canonical.startsWith('/list-site-information/')) {
    schemas.unshift(webPageSchema(canonical, title, description));
    return schemas;
  }

  schemas.unshift(articleSchema(canonical, title, description));
  return schemas;
}

export function JsonLd({ data }: { data: JsonLdData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}

function withOfficialDisclaimer(description: string) {
  if (description.includes(OFFICIAL_DISCLAIMER)) return description;
  return `${description} ${OFFICIAL_DISCLAIMER}`;
}

function cleanTitle(title: string) {
  return title.split('|')[0].trim();
}

function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: absoluteUrl('/img/logo-shield.png'),
    description: `ESTA申請を日本語でサポートする民間サイトです。${OFFICIAL_DISCLAIMER}`,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'info@usesta-apply.net',
        availableLanguage: ['ja'],
      },
    ],
  };
}

function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    inLanguage: 'ja-JP',
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

function breadcrumbSchema(path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems(path).map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function breadcrumbItems(path: string) {
  const items = [{ name: 'HOME', url: `${SITE_URL}/` }];
  if (path === '/') return items;

  const parent = parentPath(path);
  if (parent && parent !== path) {
    items.push({ name: SEO_ROUTES[parent].label, url: absoluteUrl(parent) });
  }

  items.push({ name: SEO_ROUTES[path]?.label ?? path, url: absoluteUrl(path) });
  return items;
}

function parentPath(path: string) {
  if (path.startsWith('/list-esta-application/') && path !== '/list-esta-application/') {
    return '/list-esta-application/';
  }
  if (path.startsWith('/list-esta-guide/') && path !== '/list-esta-guide/') {
    return '/list-esta-guide/';
  }
  if (path.startsWith('/list-site-information/') && path !== '/list-site-information/') {
    return '/list-site-information/';
  }
  return null;
}

function collectionPageSchema(path: string, title: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${absoluteUrl(path)}#collectionpage`,
    url: absoluteUrl(path),
    name: cleanTitle(title),
    description: withOfficialDisclaimer(description),
    inLanguage: 'ja-JP',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntity: itemListSchema(collectionItems(path)),
  };
}

function itemListSchema(paths: string[]) {
  return {
    '@type': 'ItemList',
    itemListElement: paths.map((path, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: absoluteUrl(path),
      name: SEO_ROUTES[path]?.label ?? path,
    })),
  };
}

function howToSchema(path: string, title: string, description: string) {
  const info = SEO_ROUTES[path];
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${absoluteUrl(path)}#howto`,
    name: cleanTitle(title),
    description: withOfficialDisclaimer(description),
    image: absoluteUrl(info?.image ?? '/img/logo-shield.png'),
    inLanguage: 'ja-JP',
    publisher: { '@id': `${SITE_URL}/#organization` },
    step: HOW_TO_STEPS[path].map((text, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: `STEP ${index + 1}`,
      text,
    })),
  };
}

function articleSchema(path: string, title: string, description: string) {
  const info = SEO_ROUTES[path];
  const image = absoluteUrl(info?.image ?? '/img/logo-shield.png');
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${absoluteUrl(path)}#article`,
    headline: cleanTitle(title),
    description: withOfficialDisclaimer(description),
    image: [image],
    datePublished: info?.lastmod ?? '2026-06-04',
    dateModified: info?.lastmod ?? '2026-06-04',
    inLanguage: 'ja-JP',
    isAccessibleForFree: true,
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: absoluteUrl(path),
  };
}

function webPageSchema(path: string, title: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: cleanTitle(title),
    description: withOfficialDisclaimer(description),
    inLanguage: 'ja-JP',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

function isHubPath(path: string) {
  return [
    '/list-esta-application/',
    '/list-esta-guide/',
    '/list-site-information/',
    '/sitemap/',
  ].includes(path);
}

function isArticlePath(path: string) {
  return !isHubPath(path) && !HOW_TO_STEPS[path] && !path.startsWith('/list-site-information/') && path !== '/';
}

function collectionItems(path: string) {
  if (path === '/list-esta-application/') return APPLICATION_ITEMS;
  if (path === '/list-esta-guide/') return GUIDE_ITEMS;
  if (path === '/list-site-information/') return SITE_INFORMATION_ITEMS;
  return Object.keys(SEO_ROUTES).filter((route) => route !== '/');
}
