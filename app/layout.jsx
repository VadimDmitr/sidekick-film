import { DM_Sans, Inter, Roboto_Condensed } from 'next/font/google';
import './globals.css';
import Header from './components/header/Header.client';
import Footer from './components/footer/Footer.client';
import BackToTopButton from './components/backToTopButton/backToTopButton';

const robotoCondensed = Roboto_Condensed({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const SITE_URL = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sidekickmediausa.com';
  const OG_IMAGE = `${SITE_URL}/og/og-image-1200x630.svg`;
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
          content="independent filmmakers near me, video production company near me, local video production, commercial video production, corporate video production, video content creator, video marketing services, professional videographer, creative video production, video production studio, video production agency, film production services, video production Cary, video production Raleigh, video production Durham, video production Chapel Hill, Triangle video production, professional video services North Carolina, corporate video maker near me, commercial video production near me, video advertising agency, brand video production, product video production, promotional video services, video content marketing, video production costs, best video production company, wedding videographer near me, event video production, aerial video production, drone video services, youtube video production, video editing services near me, professional video company, local film production, video production quote"
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
        {/* SVG favicon (modern browsers) + fallbacks to existing image for older devices */}
        <link rel="icon" href="/icons/sidekick-favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Sidekick_logo_reverse_copy.jpg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Sidekick_logo_reverse_copy.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Sidekick_logo_reverse_copy.jpg" />
        <link rel="mask-icon" href="/icons/sidekick-safari-pinned-tab.svg" color="#000000" />
        <link rel="manifest" href="/site.webmanifest" />
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
