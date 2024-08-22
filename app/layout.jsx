import { DM_Sans, Inter, Roboto_Condensed } from 'next/font/google';
import './globals.css';
import Header from './components/header/Header.client';
import Footer from './components/footer/Footer.client';
import BackToTopButton from './components/backToTopButton/backToTopButton';

const robotoCondensed = Roboto_Condensed({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          Professional Video Production Services | Sidekick Media USA
        </title>
        <meta
          name="description"
          content="Sidekick Media offers professional video production services in Cary, North Carolina. Get noticed with our high-quality creative video content for businesses of all sizes."
        />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" /> */}
      </head>
      <body
        className={robotoCondensed.className}
        suppressHydrationWarning={true}
      >
        <div>
          <Header />
          <main>{children}</main>
          <BackToTopButton />
          <Footer />
        </div>
      </body>
    </html>
  );
}
