# Auto Deko frontend

Small headless shop frontend built with Next.js and Mantine. Shopify provides the product catalogue and shop backend through the Storefront API.

## Shopify setup

1. In Shopify Admin, install/open the **Headless** sales channel.
2. Create a storefront and grant Storefront API product read access.
3. Copy `.env.default` to `.env.local`.
4. Configure the server-side credentials:

```dotenv
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_PRIVATE_TOKEN=your-private-storefront-token
SHOPIFY_STOREFRONT_API_VERSION=2026-04
```

Never prefix the private token with `NEXT_PUBLIC_`; it must not be sent to browsers.

## Contact form setup

The Mantine contact form is available at `/contact` and sends messages through Resend. Add these server-side values to `.env.local`:

```dotenv
RESEND_API_KEY=re_xxx
RESEND_FROM_EMAIL=Auto Deko <kontakt@your-verified-domain.de>
CONTACT_TO_EMAIL=kontakt@your-domain.de
```

`RESEND_FROM_EMAIL` must use a sender domain verified in Resend. None of these values should use the `NEXT_PUBLIC_` prefix.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm test
npm run lint
npm run build
```

## Current Shopify integration

- Server-side Storefront GraphQL client: `lib/shopify/storefront.ts`
- Environment-backed client factory: `lib/shopify/index.ts`
- Product catalogue query and typed frontend product model
- Shopify product images, titles, prices, and availability in the home-page carousel

A Shopify cart and redirect to Shopify Checkout are the next integration step.
