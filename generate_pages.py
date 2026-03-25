#!/usr/bin/env python3
"""Generate all 23 Next.js page files from extracted content."""
import json, os, re

# Meta data for all pages
META = {}
with open('reference/meta_summary.txt', encoding='utf-8') as f:
    content = f.read()
blocks = content.strip().split('---')
for block in blocks:
    block = block.strip()
    if not block: continue
    lines = block.split('\n')
    page_data = {}
    for line in lines:
        if line.startswith('PAGE:'):
            page_data['page'] = line.split(':', 1)[1].strip()
        elif line.startswith('TITLE:'):
            page_data['title'] = line.split(':', 1)[1].strip()
        elif line.startswith('DESC:'):
            page_data['desc'] = line.split(':', 1)[1].strip()
    if 'page' in page_data:
        META[page_data['page']] = page_data

# Page to route mapping
PAGE_ROUTES = {
    'index': '/',
    'list-esta-application': '/list-esta-application',
    'list-esta-application__application': '/list-esta-application/application',
    'list-esta-application__cbp-flow': '/list-esta-application/cbp-flow',
    'list-esta-application__esta-flow': '/list-esta-application/esta-flow',
    'list-esta-application__fee': '/list-esta-application/fee',
    'list-esta-application__expiration-date': '/list-esta-application/expiration-date',
    'list-esta-application__guam': '/list-esta-application/guam',
    'list-esta-application__place-of-birth': '/list-esta-application/place-of-birth',
    'list-esta-application__esta': '/list-esta-application/esta',
    'list-esta-application__status-check': '/list-esta-application/status-check',
    'list-esta-application__official-cbp': '/list-esta-application/official-cbp',
    'list-site-information': '/list-site-information',
    'list-site-information__privacy-policy': '/list-site-information/privacy-policy',
    'list-site-information__browser': '/list-site-information/browser',
    'list-site-information__aboutus': '/list-site-information/aboutus',
    'list-site-information__status': '/list-site-information/status',
    'list-site-information__contents-policy': '/list-site-information/contents-policy',
    'list-site-information__contact': '/list-site-information/contact',
    'list-site-information__agreement': '/list-site-information/agreement',
    'list-site-information__entry': '/list-site-information/entry',
    'us-contact-details': '/us-contact-details',
    'sitemap': '/sitemap',
}

# Breadcrumb config
BREADCRUMBS = {
    'list-esta-application': [{'label': 'ESTA申請関連情報一覧'}],
    'list-site-information': [{'label': 'サイト情報一覧'}],
    'sitemap': [{'label': 'サイトマップ'}],
    'us-contact-details': [{'label': '米国内の連絡先情報の記入方法'}],
}
# Auto-generate breadcrumbs for nested pages
for page_name, route in PAGE_ROUTES.items():
    if page_name in BREADCRUMBS: continue
    if page_name == 'index': continue
    parts = route.strip('/').split('/')
    if len(parts) == 2:
        parent = parts[0]
        parent_label = 'ESTA申請関連情報一覧' if 'esta-application' in parent else 'サイト情報一覧'
        meta = META.get(page_name, {})
        title = meta.get('title', page_name).split(' | ')[0].split('　')[0]
        BREADCRUMBS[page_name] = [
            {'label': parent_label, 'href': f'/{parent}'},
            {'label': title}
        ]

def escape_jsx(s):
    """Escape text for JSX."""
    return s.replace('\\', '\\\\').replace("'", "\\'").replace('{', '\\u007B').replace('}', '\\u007D').replace('`', '\\`')

def escape_jsx_text(s):
    """Escape text content for JSX (between tags)."""
    return s.replace('{', '&#123;').replace('}', '&#125;')

def build_content_jsx(elements, page_name):
    """Build JSX content from extracted elements."""
    lines = []
    # Skip navigation/menu items at start (li elements before h1/h2)
    start_idx = 0
    for i, el in enumerate(elements):
        if el['tag'] in ('h1', 'h2'):
            start_idx = i
            break
    
    # Find FAQ section (starts with h2 containing Q&A or よくある質問)
    faq_start = None
    faq_items = []
    
    # Find article card section on homepage (h2 containing 申請関連情報)
    article_section_start = None
    article_section_end = None
    
    i = start_idx
    while i < len(elements):
        el = elements[i]
        text = el['text'].strip()
        
        # Detect FAQ section
        if el['tag'] == 'h2' and ('Q＆A' in text or 'Q&A' in text or 'よくある質問' in text):
            faq_start = i
            # Collect FAQ items (h3 = question, next p = answer)
            j = i + 1
            while j < len(elements):
                if elements[j]['tag'] == 'h3' and j + 1 < len(elements):
                    q = elements[j]['text'].strip()
                    a = elements[j+1]['text'].strip()
                    faq_items.append({'q': q, 'a': a})
                    j += 2
                elif elements[j]['tag'] == 'h2':
                    break
                elif elements[j]['tag'] == 'p' and faq_items:
                    # Additional answer paragraph
                    faq_items[-1]['a'] += ' ' + elements[j]['text'].strip()
                    j += 1
                else:
                    j += 1
            i = j
            continue
        
        # Detect article card section (homepage)
        if el['tag'] == 'h2' and '申請関連情報' in text and page_name == 'index':
            article_section_start = i
            # Skip until next h2
            j = i + 1
            while j < len(elements) and not (elements[j]['tag'] == 'h2'):
                j += 1
            article_section_end = j
            # Generate article cards
            lines.append(f'        <section className="py-12">')
            lines.append(f'          <h2 className="text-2xl font-bold text-gray-800 mb-8 scroll-underline">{escape_jsx_text(text)}</h2>')
            lines.append(f'          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">')
            cards = [
                ('ESTA(エスタ)とは？', '/list-esta-application/esta'),
                ('公式ウェブサイトについて解説', '/list-esta-application/official-cbp'),
                ('出生地や住所の書き方', '/list-esta-application/place-of-birth'),
                ('ESTAの申請方法を解説', '/list-esta-application/esta-flow'),
                ('公式ウェブサイトでの申請方法', '/list-esta-application/cbp-flow'),
                ('米国内の連絡先情報', '/us-contact-details'),
                ('ESTAの有効期限と再申請', '/list-esta-application/expiration-date'),
                ('アプリのESTA申請方法', '/list-esta-application/application'),
                ('グアム入国にESTAは必要？', '/list-esta-application/guam'),
            ]
            for title, href in cards:
                lines.append(f'            <a href="{href}" className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">')
                lines.append(f'              <div className="bg-gray-200 h-40 img-hover-shrink"></div>')
                lines.append(f'              <div className="p-4"><h3 className="font-medium text-gray-800 text-sm">{escape_jsx_text(title)}</h3></div>')
                lines.append(f'            </a>')
            lines.append(f'          </div>')
            lines.append(f'        </section>')
            i = article_section_end
            continue
        
        # Regular content
        if el['tag'] == 'h1':
            lines.append(f'        <h1 className="text-3xl font-bold text-gray-900 mb-6">{escape_jsx_text(text)}</h1>')
        elif el['tag'] == 'h2':
            lines.append(f'        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 scroll-underline">{escape_jsx_text(text)}</h2>')
        elif el['tag'] == 'h3':
            lines.append(f'        <h3 className="text-xl font-bold text-gray-700 mt-8 mb-3">{escape_jsx_text(text)}</h3>')
        elif el['tag'] == 'h4':
            lines.append(f'        <h4 className="text-lg font-bold text-gray-700 mt-6 mb-2">{escape_jsx_text(text)}</h4>')
        elif el['tag'] in ('p', 'li', 'td', 'th'):
            lines.append(f'        <p className="text-gray-600 leading-relaxed mb-4">{escape_jsx_text(text)}</p>')
        
        i += 1
    
    return lines, faq_items

def generate_page(page_name):
    """Generate a complete page.tsx file."""
    meta = META.get(page_name, {})
    title = meta.get('title', '')
    desc = meta.get('desc', '')
    
    with open(f'extracted/{page_name}.json', encoding='utf-8') as f:
        elements = json.load(f)
    
    content_lines, faq_items = build_content_jsx(elements, page_name)
    breadcrumbs = BREADCRUMBS.get(page_name)
    
    is_home = page_name == 'index'
    
    imports = ["import type { Metadata } from 'next';"]
    if breadcrumbs:
        imports.append("import Breadcrumb from '@/components/Breadcrumb';")
    if faq_items:
        imports.append("import FAQ from '@/components/FAQ';")
    
    lines = []
    lines.append('\n'.join(imports))
    lines.append('')
    
    # Metadata export
    title_escaped = title.replace("'", "\\'")
    desc_escaped = desc.replace("'", "\\'")
    lines.append(f"export const metadata: Metadata = {{")
    lines.append(f"  title: '{title_escaped}',")
    if desc:
        lines.append(f"  description: '{desc_escaped}',")
    lines.append(f"}};")
    lines.append('')
    
    # Page component
    lines.append(f"export default function Page() {{")
    
    # FAQ data if needed
    if faq_items:
        lines.append(f"  const faqItems = [")
        for item in faq_items:
            q = item['q'].replace("'", "\\'").replace('\\', '\\\\')
            a = item['a'].replace("'", "\\'").replace('\\', '\\\\')
            lines.append(f"    {{ q: '{q}', a: '{a}' }},")
        lines.append(f"  ];")
        lines.append('')
    
    lines.append(f"  return (")
    lines.append(f"    <div className=\"max-w-4xl mx-auto px-4 py-8\">")
    
    if breadcrumbs:
        bc_str = json.dumps(breadcrumbs, ensure_ascii=False)
        lines.append(f"      <Breadcrumb items={{{bc_str}}} />")
    
    lines.extend(content_lines)
    
    if faq_items:
        lines.append(f"      <FAQ items={{faqItems}} />")
    
    lines.append(f"    </div>")
    lines.append(f"  );")
    lines.append(f"}}")
    
    return '\n'.join(lines)

# Generate all pages
for page_name, route in PAGE_ROUTES.items():
    if route == '/':
        dir_path = 'src/app'
        file_path = 'src/app/page.tsx'
    else:
        dir_path = f'src/app{route}'
        file_path = f'src/app{route}/page.tsx'
    
    os.makedirs(dir_path, exist_ok=True)
    content = generate_page(page_name)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Generated: {file_path}')

print('\nDone! All 23 pages generated.')
