import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../../components/header/Header.client';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className} suppressHydrationWarning={true}>
        <div>
          <Header />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
