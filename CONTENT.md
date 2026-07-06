# Shoenehou Online - Wix to Next.js Migration

## Overview
Migrate https://www.shoenehou-online.jp/ (currently on Wix) to a Next.js static site, similar in structure to the sister site at ~/Projects/world-entry-site/.

## CRITICAL REQUIREMENTS
1. **Exact text copy** - Every page body text must be copied exactly from the Wix site
2. **Title tags & meta descriptions** - Must match exactly (see meta_summary.txt in reference/)
3. **Header & Footer** - Must be replicated precisely across all pages
4. **Animations** - Image hover shrink effect, scroll-triggered red underline on headings
5. **Fixed bottom CTA button** - "ESTA申請をはじめる" button fixed at bottom on both PC and SP
6. **Responsive design** - Must work on both PC and mobile

## Reference Files
- `reference/*.html` - Raw HTML source of all 23 pages from the Wix site
- `reference/meta_summary.txt` - All page titles and meta descriptions
- `~/Projects/world-entry-site/` - Sister site for structural reference (Next.js + Tailwind)

## Tech Stack (match world-entry-site)
- Next.js (App Router)
- Tailwind CSS
- TypeScript
- Static export (output: export)

## Site Structure (23 pages)

### Navigation
- Header: Logo "US ESTA Apply Website" + nav links: HOME, ESTA申請関連情報一覧, サイト情報一覧
- Footer: Two columns - ESTA申請関連情報一覧 (11 links) + サイト情報一覧 (9 links)
- Breadcrumbs on inner pages

### Pages & Routes

| Route | Title |
|-------|-------|
| / | ESTA(エスタ)申請サイト【アメリカ電子渡航認証システム】 |
| /list-esta-application | ESTA申請関連情報一覧 |
| /list-esta-application/application | アプリを使ったESTA(エスタ)申請方法を解説 |
| /list-esta-application/cbp-flow | 【2026年最新】ESTA申請方法と取得手順を徹底解説 |
| /list-esta-application/esta-flow | 【記入例付き】ESTA(エスタ)の申請方法を解説 |
| /list-esta-application/fee | ESTA(エスタ)の申請料金 |
| /list-esta-application/expiration-date | ESTA(エスタ)の有効期限と再申請・確認の方法 |
| /list-esta-application/guam | グアム入国にESTA(エスタ)は必要？ |
| /list-esta-application/place-of-birth | ESTA(エスタ)申請時の出生地や住所の書き方を解説 |
| /list-esta-application/esta | ESTA(エスタ)とは？事前入国審査制度を解説 |
| /list-esta-application/status-check | ESTA(エスタ)申請状況 |
| /list-esta-application/official-cbp | ESTA公式ウェブサイトについて解説 |
| /list-site-information | サイト情報一覧 |
| /list-site-information/privacy-policy | 個人情報保護に関する基本方針 |
| /list-site-information/browser | 推奨ブラウザについて |
| /list-site-information/aboutus | 特定商取引法に基づく表記・運営者情報 |
| /list-site-information/status | 申請状況確認 |
| /list-site-information/contents-policy | コンテンツポリシー |
| /list-site-information/contact | お問い合わせ |
| /list-site-information/agreement | 利用規約 |
| /list-site-information/entry | ESTA申請書記入 |
| /us-contact-details | 米国内の連絡先情報の記入方法 |
| /sitemap | サイトマップ |

## Design Specifications

### Colors & Typography
- Primary color: Dark navy/blue (header, footer)
- Accent: Red (underline decorations, CTA buttons)
- Font: Noto Serif JP
- Clean, professional, government-service feel

### Animations (IMPORTANT)
1. **Image hover shrink**: When hovering over images, they scale down slightly (transform: scale(0.95) with smooth transition)
2. **Scroll-triggered red underline**: When scrolling, h2/h3 headings get a red underline that animates from right to left (use Intersection Observer)
3. **Smooth transitions** on all interactive elements

### Fixed Bottom CTA
- Visible on all pages, both PC and SP
- Text: "出発の3日前までにお済ませください。" + "ESTA申請をはじめる" button
- Links to /list-site-information/entry
- Sticky/fixed at bottom of viewport

### Page Layout Pattern
- Inner pages: Breadcrumb > H1 title > Lead paragraph > TOC (目次) > Content sections > FAQ accordion > Fixed CTA
- Homepage: Hero section > Main content > Article cards grid > FAQ accordion > Info section > Fixed CTA

### Article Cards (Homepage)
- Grid of linked cards with images pointing to ESTA申請関連情報 pages
- Each card has image + title
- Hover effect: image shrinks slightly

### FAQ Accordion
- Numbered items (01, 02, etc.)
- Click to expand/collapse

## Content Source
For each page, read the corresponding HTML file in reference/ directory:
- reference/index.html → homepage
- reference/list-esta-application.html → /list-esta-application
- reference/list-esta-application__application.html → /list-esta-application/application
- Pattern: URL path slashes replaced by __ in filename

Extract body text content from the Wix HTML. The HTML is bloated but text content is all there.

## Images
- Use placeholder images initially (Wix images are on Wix CDN)
- For article cards, use simple colored placeholder divs

## SEO Requirements
- Proper title and meta description on every page
- Semantic HTML (h1, h2, h3 properly nested)
- sitemap.xml generation
- robots.txt
- Open Graph tags
- lang="ja"

## DO NOT
- Do NOT modify anything in ~/Projects/world-entry-site/
- Do NOT skip any pages
- Do NOT paraphrase or summarize content - copy it exactly
