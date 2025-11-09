import { DM_Sans, Inter, Roboto_Condensed } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Header from './components/header/Header.client';
import Footer from './components/footer/Footer.client';
import BackToTopButton from './components/backToTopButton/backToTopButton';

const robotoCondensed = Roboto_Condensed({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const SITE_URL = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sidekickmediausa.com';
  const OG_IMAGE = `${SITE_URL}/mainPage.webp`;
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
        {/* Open Graph / Twitter meta for better social previews. Set SITE_URL in env to your production URL. */}
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Professional Video Production Services | Sidekick Media USA" />
        <meta property="og:description" content="Sidekick Media offers professional video production services in the Triangle area, including Cary, Raleigh, Durham, Chapel Hill, and other cities in North Carolina. Get noticed with our high-quality creative video content." />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Video Production Services | Sidekick Media USA" />
        <meta name="twitter:description" content="Sidekick Media offers professional video production services in the Triangle area — high-quality creative video content to get you noticed." />
        <meta name="twitter:image" content={OG_IMAGE} />
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
          <Analytics />
        </div>
      </body>
    </html>
  );
}
