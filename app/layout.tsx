import type { Metadata } from 'next';
import './styles.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Game Space® eSports Cafe | Gaming Cafe in Matunga, Mumbai', template: '%s | Game Space® eSports Cafe' },
  description: 'Game Space® eSports Cafe in Matunga East, Mumbai. PC and PS5 setups for casual and competitive play. Gaming since 2002.',
  keywords: ['gaming cafe Matunga', 'esports cafe Mumbai', 'PC gaming cafe Mumbai', 'PS5 gaming cafe Matunga', 'Game Space eSports Cafe'],
  openGraph: { type: 'website', locale: 'en_IN', siteName: 'Game Space® eSports Cafe', title: 'Game Space® eSports Cafe | Built by Gamers, Since 2002', description: 'PC and console setups for casual and competitive play in Matunga East, Mumbai.' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body>{children}</body></html>;
}
