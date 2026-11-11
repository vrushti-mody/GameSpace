import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://theinsidestore.in'; return ['', '/policies/privacy', '/policies/terms'].map(path => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path ? 'yearly' : 'weekly', priority: path ? 0.4 : 1 })); }
