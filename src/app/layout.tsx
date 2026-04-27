import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FixedCTA from '@/components/FixedCTA';

export const metadata: Metadata = {
  title: 'ESTA(エスタ)申請サイト【アメリカ電子渡航認証システム】',
  description: 'ESTA(エスタ)は、アメリカへ短期滞在する際に必要となる電子渡航認証です。ビザを取得せずに渡米する場合は、出発の72時間前までにオンラインでの事前申請を完了してください。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
        <Header />
        <div className="md:hidden text-right py-1 px-4 text-[10px] text-gray-400 bg-gray-50 border-b border-gray-100">PRを含みます</div>
        <main>{children}</main>
        <Footer />
        <FixedCTA />
      </body>
    </html>
  );
}
