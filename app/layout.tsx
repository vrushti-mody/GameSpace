import type { Metadata } from 'next';
import './styles.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://theinsidestore.in';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'The Inside Store | Men’s Fashion & Accessories India', template: '%s | The Inside Store' },
  description: 'Shop affordable men’s wear and fashion accessories online at The Inside Store. Discover everyday essentials and new arrivals with Pan India delivery.',
  keywords: ['affordable men’s wear online India', 'men’s fashion accessories Mumbai', 'men’s clothing India', 'The Inside Store Pan India delivery'],
  openGraph: { type: 'website', locale: 'en_IN', siteName: 'The Inside Store', title: 'The Inside Store | Wear your everyday', description: 'Modern men’s essentials, made for everyday.' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body>{children}</body></html>;
}
