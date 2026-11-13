import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from '@/components/Icons';

const policies: Record<string, { title: string; intro: string; sections: [string, string][] }> = {
  privacy: { title: 'Privacy policy', intro: 'This informational website links to Game Space® eSports Cafe’s public Instagram profile and Google listing. Review and update this page to match any analytics, contact forms, cookies, or other services added to the website.', sections: [['Information on this website', 'The current website presents information about Game Space® eSports Cafe and links to its public Instagram profile and Google listing. Do not add analytics, tracking, or data collection without updating this notice.'], ['External links', 'When you follow an external link, including Instagram or Google, that service’s own privacy terms apply. Review the destination’s policies before sharing information there.'], ['Your choices', 'Add the business’s verified privacy contact and any applicable process for privacy requests before publishing this policy.']] },
  terms: { title: 'Website terms', intro: 'These terms describe use of Game Space® eSports Cafe’s informational website. They should be reviewed and completed by the business before publication.', sections: [['Website content', 'This website shares general information about Game Space® eSports Cafe, its gaming setups, hours, and location. Content may be updated as the business changes.'], ['External links', 'Links to third-party services, including Instagram and Google Maps, are provided for convenience. Game Space® eSports Cafe does not control those services or their content.'], ['Business details', 'Add the operating entity’s legal name and verified contact details before publishing these terms. Nothing on this informational website constitutes a gaming session reservation or purchase.']] },
};

export function generateStaticParams() { return Object.keys(policies).map(slug => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; return { title: policies[slug]?.title || 'Website policy', robots: { index: false, follow: true } }; }
export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const policy = policies[slug];
  if (!policy) return <main className="policy-page"><p>Page not found.</p><Link href="/">Return to the website <ArrowUpRight className="inline-icon"/></Link></main>;
  return <main className="policy-page"><Link className="policy-back" href="/"><ArrowLeft className="inline-icon"/> GAME SPACE® eSPORTS CAFE</Link><p className="eyebrow">THE IMPORTANT BITS</p><h1>{policy.title}</h1><p className="policy-intro">{policy.intro}</p><div className="policy-notice">Please confirm the final legal wording and business contact details before publishing.</div>{policy.sections.map(([title, body]) => <section key={title}><h2>{title}</h2><p>{body}</p></section>)}<Link className="button button-dark" href="/">BACK TO THE WEBSITE <ArrowUpRight className="inline-icon"/></Link></main>;
}
