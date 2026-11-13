# Game Space® eSports Cafe

A static, mobile-first information website for Game Space® eSports Cafe in Matunga East, Mumbai. It introduces the cafe’s PC and console gaming setups, shares its address, published hours and phone number, and links visitors to Instagram and its Google listing. There are no bookings, payments, or customer data collection.

## Run locally

Requirements: Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS domain before deployment, then run `npm run build` and `npm run start`. The site can be deployed to any Next.js-compatible host. It uses remote Unsplash editorial images; replace them with cafe-approved photography before launch.

## Before publishing

- Confirm the Google listing’s address, phone number, rating, review count and hours before publishing, as business listing details can change.
- Confirm the canonical domain and set `NEXT_PUBLIC_SITE_URL`.
- Review the privacy and terms pages against the business’s actual practices and legal details.
- Instagram and Google listing buttons link to the supplied public destinations. Live Instagram posts are not embedded.
- No bookings, payments, or customer data collection are implemented.

## SEO and accessibility

The App Router provides server-rendered page content, metadata, Open Graph details, robots rules, a sitemap, and Organization/CafeOrCoffeeShop structured data. No Product or AggregateRating data is emitted. Navigation uses native links, images have appropriate alternative text, focus states are visible, and reduced-motion preferences are respected.
