import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';
import '../styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pokédex App',
  description: 'Your go-to Pokédex for all things Pokémon!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

