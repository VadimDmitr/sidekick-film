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
          content="Sidekick Media offers professional video production services in the Triangle area, including Cary, Raleigh, Durham, Chapel Hill, and other cities in North Carolina. Get noticed with our high-quality creative video content."
        />
        <meta
          name="keywords"
          content="video production Cary, video production Raleigh, video production Durham, video production Chapel Hill, Triangle video production, professional video services North Carolina"
        />
        <meta name="theme-color" content="#000000" />
        <link
          rel="icon"
          type="image/x-icon"
          href="/app/favicon.ico"
          sizes="any"
        />
        {/* Use an existing high-resolution site image as a temporary/favicon and
            Apple touch icon. Replace these with properly sized PNG/SVG assets
            later if you want a crisp icon on all devices. */}
        <link rel="apple-touch-icon" sizes="180x180" href="/Sidekick_logo_reverse_copy.jpg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Sidekick_logo_reverse_copy.jpg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Sidekick_logo_reverse_copy.jpg" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/Sidekick_logo_reverse_copy.jpg" color="#000000" />
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
