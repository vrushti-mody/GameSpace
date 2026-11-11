# The Inside Store

A static, mobile-first brand information website for The Inside Store. It introduces the men’s wear and accessories brand, summarizes its Pan India delivery, shows its Mumbai store address, published hours and phone number, links visitors to Instagram and the supplied WhatsApp group, and includes Google review excerpts. There is no product catalog, cart, checkout, or order capture.

## Run locally

Requirements: Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS domain before deployment, then run `npm run build` and `npm run start`. The site can be deployed to any Next.js-compatible host. It uses remote Unsplash editorial images; replace them with brand-approved photography before launch.

## Before publishing

- Confirm the Google listing’s address, phone number and hours before publishing, as business listing details can change.
- Confirm the canonical domain and set `NEXT_PUBLIC_SITE_URL`.
- Review the privacy and terms pages against the business’s actual practices and legal details.
- Instagram and WhatsApp buttons link to the supplied public destinations. Live Instagram posts and customer tags are not embedded; Instagram did not return crawlable profile content during setup.
- No customer reviews, aggregate ratings, payment promises, or delivery partner claims are included.

## SEO and accessibility

The App Router provides server-rendered page content, metadata, Open Graph details, robots rules, a sitemap, and Organization/Warehouse structured data. No Product or AggregateRating data is emitted. Navigation uses native links, images have appropriate alternative text, focus states are visible, and reduced-motion preferences are respected.
