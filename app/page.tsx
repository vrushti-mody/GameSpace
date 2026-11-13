import Storefront from '@/components/Storefront';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const businessSchema = {
  '@context': 'https://schema.org', '@graph': [
    { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'Game Space® eSports Cafe', url: siteUrl, sameAs: ['https://www.instagram.com/gamespace_cafe/', 'https://share.google/8w5QrhLdWfMvnVCI0'], description: 'Gaming cafe featuring PC and console setups for casual and competitive play.' },
    { '@type': 'CafeOrCoffeeShop', '@id': `${siteUrl}/#cafe`, name: 'Game Space® eSports Cafe', url: siteUrl, telephone: '+91224094444', parentOrganization: { '@id': `${siteUrl}/#organization` }, address: { '@type': 'PostalAddress', streetAddress: 'Plot #471, Radha Bhuvan, Shop #9, Ground Floor, H, Adenwala Road, opposite King’s Circle Garden, Matunga East', addressLocality: 'Mumbai', addressRegion: 'Maharashtra', postalCode: '400019', addressCountry: 'IN' }, openingHoursSpecification: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(dayOfWeek => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: `https://schema.org/${dayOfWeek}`, opens: '08:00', closes: '23:00' })).concat([{ '@type': 'OpeningHoursSpecification', dayOfWeek: 'https://schema.org/Sunday', opens: '09:00', closes: '23:00' }]), description: 'Gaming cafe featuring PC and console setups for casual and competitive play. Open 365 days; gaming since 2002.' },
  ],
};

export default function Home() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} /><Storefront /></>;
}
