import Storefront from '@/components/Storefront';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://theinsidestore.in';
const businessSchema = {
  '@context': 'https://schema.org', '@graph': [
    { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'The Inside Store', url: siteUrl, sameAs: ['https://www.instagram.com/the.insidestore/'], description: 'Men’s wear and accessories with Pan India delivery.' },
    { '@type': 'Store', '@id': `${siteUrl}/#store`, name: 'The Inside Store', url: siteUrl, telephone: '+919619424627', parentOrganization: { '@id': `${siteUrl}/#organization` }, address: { '@type': 'PostalAddress', streetAddress: 'Unit No. A16, A Wing, Antop Hill Warehousing Complex, near Vidyalankar College Road, Wadala East, Antop Hill', addressLocality: 'Mumbai', addressRegion: 'Maharashtra', postalCode: '400037', addressCountry: 'IN' }, openingHoursSpecification: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(dayOfWeek => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: `https://schema.org/${dayOfWeek}`, opens: '09:00', closes: '20:30' })), description: 'Clothing and accessories store in Mumbai.' },
  ],
};

export default function Home() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} /><Storefront /></>;
}
