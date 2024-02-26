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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico?v=2"
          sizes="any"
        />
        <meta name="theme-color" />
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
