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
          content="Sidekick Media offers professional video production services in Raleigh, Cary, Durham, Research Triangle Area (RTP), North Carolina. Get noticed with our high-quality creative video content."
        />
        <meta name="theme-color" content="#000000" />
        {/* <link rel="apple-touch-icon" href="/favicon.png"></link>
        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.png"
          sizes="any"
        /> */}
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
