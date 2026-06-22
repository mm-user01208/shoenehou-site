import type { Metadata } from 'next';
import Script from 'next/script';
import './redesign.css';
import ShellHeader from '@/components/ShellHeader';
import ShellFooter from '@/components/ShellFooter';
import ShellFloatingFab from '@/components/ShellFloatingFab';
import ShellReveal from '@/components/ShellReveal';

export const metadata: Metadata = {
  title: 'US ESTA Apply Website',
  description: 'ESTA(エスタ)は、アメリカへ短期滞在する際に必要となる電子渡航認証です。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preload" href="/img/logo-shield.png" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700;800&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=Noto+Sans+JP:wght@400;500;700;800&family=Noto+Serif+JP:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/img/logo-shield.png" />
        <link rel="apple-touch-icon" href="/img/logo-shield.png" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TKC650FZB3"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TKC650FZB3');
          `}
        </Script>
      </head>
      <body>
        <ShellHeader />
        <main>{children}</main>
        <ShellFooter />
        <ShellFloatingFab />
        <ShellReveal />
      </body>
    </html>
  );
}
