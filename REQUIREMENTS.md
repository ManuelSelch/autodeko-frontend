# Auto Deko redesign requirements

## 1. Problem overview

The current home page uses a centered logo, dark stacked sections, a spotlight-style product carousel, and a generic contact card. It does not communicate the premium, motorsport-inspired character shown in the reference screenshots under `screenshots/`.

The redesign should translate the screenshots into an original Auto Deko storefront. The Shopify editor chrome visible around the screenshots is not part of the design reference.

## 2. Design direction

### Desired impression

- Premium motorsport workshop rather than a generic web shop
- Bold, editorial, industrial, and image-led
- High contrast and intentionally spacious
- Raw materials and craftsmanship balanced with a clean product presentation

### Visual language

- Primary colors:
  - near-black/charcoal for workshop and statement sections
  - warm racing yellow as the primary accent
  - off-white for page backgrounds and text
- Typography:
  - a condensed, heavy display face for hero and section headlines
  - a highly readable neutral sans-serif for body text, prices, and controls
- Layout:
  - full-bleed photography
  - oversized headlines
  - sharp rectangular sections rather than floating cards
  - alternating media/text blocks
  - minimal borders, shadows, gradients, and rounded corners
- The redesign must remove the current spotlight, podium, scaling carousel, pale-gold accent, and generic white contact card aesthetic.

## 3. Goals

- Rebuild the global header, home page, and footer around the screenshot-inspired visual language.
- Present Shopify products in a responsive editorial grid.
- Explain the Auto Deko story: discarded automotive components become handmade design objects.
- Create clear paths to the catalogue, product details, and contact section.
- Work equally well on mobile, tablet, and desktop.
- Keep Shopify credentials and product fetching server-side.

## 4. Non-goals for the first redesign iteration

- Shopify cart and checkout implementation
- Search and customer-account functionality
- A full product detail page
- A content-management system for hero and editorial content
- Newsletter delivery or contact-form backend implementation
- Reproducing the Shopify theme shown in the screenshots pixel-for-pixel

Controls for non-goal features must not be presented as functional buttons. They may be added only when their behavior exists.

## 5. Proposed page structure

### 5.1 Global header

- Place the Auto Deko identity on the left.
- Provide desktop navigation for `Startseite`, `Produkte`, `Über uns`, and `Kontakt`.
- Use a compact mobile menu below the desktop breakpoint.
- The recommended desktop treatment is a transparent header over the hero that becomes solid charcoal after scrolling.
- Header links must remain readable against varying hero imagery.
- The header must not reserve space for non-functional search, account, or cart controls.

### 5.2 Hero

- Use a full-width automotive/product lifestyle image with a minimum desktop height of approximately 70 viewport height.
- Apply a restrained dark overlay only where needed for text contrast.
- Use one short, high-impact German headline in a condensed display face.
- Recommended working headline: `Aus Autoteilen wird Charakter.`
- Add a short supporting line about handmade automotive design objects.
- Include one primary call to action linking to the product section: `Produkte entdecken`.
- The hero image must have a mobile-safe focal point and a suitable crop at narrow widths.

### 5.3 Racing ticker

- Place a warm-yellow horizontal band immediately below the hero.
- Repeat one concise brand statement with separators to create the motorsport/editorial rhythm shown in the screenshots.
- Recommended working copy: `Handgefertigt in Bayern — Echte Autoteile — Jedes Stück ein Unikat`.
- Animation is optional. If animated, it must stop when reduced motion is requested.

### 5.4 Featured products

- Use the heading `Ausgewählte Einzelstücke` or `Unsere Produkte`.
- Replace the carousel with a product grid:
  - one column on small phones
  - two columns on tablets
  - three or four columns on wide screens
- Every product card must show:
  - Shopify featured image
  - product title
  - localized EUR price
  - sold-out state where applicable
  - a link target based on the Shopify handle, once product detail routing exists
- Product images should dominate the cards and use consistent aspect ratios.
- Product cards should not use decorative glass effects, spotlights, or large shadows.
- Provide an intentional empty state when Shopify returns no products.

### 5.5 Brand statement

- Add a full-width charcoal section with a centered, oversized statement.
- Recommended working copy:
  - eyebrow: `Unser Antrieb`
  - statement: `Wir geben ausgedienten Autoteilen ein zweites Leben — als handgefertigte Objekte mit Geschichte.`
- Include a subtle link to the story section or products.

### 5.6 Editorial story blocks

- Add at least two full-width split sections inspired by the references:
  1. image left, yellow text panel right
  2. charcoal text panel left, image right
- Suggested themes:
  - `Ungezähmte Authentizität`: visible wear, patina, and real vehicle history
  - `Echte Handarbeit`: selection, cleaning, preparation, and fabrication
- Each section should contain a headline, no more than three short body lines, and one optional link.
- Stack image before text on mobile unless content order requires otherwise.

### 5.7 Contact call to action

- Replace the generic card form on the home page with an editorial contact section.
- Use a concise question such as `Du hast ein besonderes Teil oder eine eigene Idee?`.
- Provide one clear contact action using email or a dedicated contact route.
- Social links may be included only when real profile URLs are available.

### 5.8 Footer

- Use the yellow accent or charcoal as a strong final page block.
- Include:
  - Auto Deko identity
  - navigation links
  - contact information
  - legal links for `Impressum` and `Datenschutz`
  - copyright year
- A newsletter field should not be shown until a submission backend and consent text exist.

## 6. Content and asset requirements

The existing repository does not contain the wide lifestyle photography shown in the references. Before visual implementation can match the intended quality, the following assets are needed:

- one high-resolution landscape hero image
- two landscape workshop/detail images for the editorial sections
- a transparent or clean-background logo suitable for light and dark contexts
- reliable Shopify featured images with consistent framing

Temporary assets may be used during development, but must be clearly replaceable. The screenshots themselves must not be cropped and shipped as website imagery.

All final text should be German. The root document language must be changed from `en` to `de`.

## 7. Responsive requirements

- Mobile-first layout from 320 px upward.
- No horizontal page overflow.
- Hero headline must remain readable without covering the primary product focal point.
- Navigation must be keyboard accessible and operable at touch sizes.
- Split sections must become single-column sections on mobile.
- Product cards must retain consistent image ratios across breakpoints.
- Large display text should scale fluidly rather than use one fixed desktop size.

## 8. Accessibility requirements

- Meet WCAG AA contrast for text and interactive elements.
- Preserve visible keyboard focus states.
- Use semantic landmarks and heading order.
- Provide meaningful alternative text for editorial and product images.
- Respect `prefers-reduced-motion` for ticker, menu, and scroll effects.
- Interactive elements must have descriptive accessible names.
- Sold-out status must not be communicated by color alone.

## 9. Performance requirements

- Prefer optimized responsive images and explicit dimensions to avoid layout shift.
- Avoid loading desktop-resolution hero imagery on small screens.
- Keep animation limited to transforms and opacity.
- Preserve the existing server-side Shopify token boundary.
- Continue caching/revalidating product content rather than fetching it from the browser.

## 10. Component boundaries

The implementation should be split into small page sections rather than one large home component:

- `SiteHeader`
- `HeroSection`
- `BrandTicker`
- `ProductGrid`
- `ProductCard`
- `BrandStatement`
- `StorySection`
- `ContactCta`
- `SiteFooter`

Shared visual values should be represented as theme/CSS tokens rather than repeated inline style objects.

## 11. Incremental task breakdown

### Phase 1 — Foundation

1. Confirm final color palette, typography, logo treatment, and copy.
2. Add the required hero and story image assets.
3. Define global color, spacing, typography, container, and breakpoint tokens.
4. Update metadata and document language.

### Phase 2 — Page shell

1. Rebuild the header with desktop and mobile navigation.
2. Implement the full-bleed hero and primary CTA.
3. Add the racing-yellow ticker.
4. Verify the shell at phone, tablet, laptop, and large desktop widths.

### Phase 3 — Commerce presentation

1. Replace `ProductShowcase` with a Shopify-backed product grid.
2. Build the reusable product card and sold-out state.
3. Add loading/error/empty presentation where applicable.
4. Prepare product links for the future product detail route without adding fake behavior.

### Phase 4 — Brand content

1. Add the brand statement section.
2. Add both alternating story sections.
3. Replace the current contact form with the contact CTA.
4. Build the final footer with legal-link placeholders clearly identified.

### Phase 5 — Quality pass

1. Test responsive behavior and keyboard navigation.
2. Check contrast, heading order, image alternatives, and reduced motion.
3. Run tests, type checking, linting, and production build.
4. Compare local desktop and mobile screenshots against the visual direction references.
5. Remove obsolete carousel styles and unused components.

## 12. Acceptance criteria

- The first viewport clearly resembles the bold, image-led motorsport direction of the references without copying Shopify branding.
- The header, hero, ticker, product grid, statement, split story sections, contact CTA, and footer form one consistent page.
- Shopify products continue loading through the server-side Storefront client.
- The existing product carousel and podium/spotlight effects are no longer present.
- All page content is usable at 320 px, 768 px, 1280 px, and 1920 px widths.
- The page has no non-functional search, account, cart, social, or newsletter controls.
- Automated checks and the Next.js production build pass.

## 13. Assumptions

- The three screenshots define visual direction rather than exact content or layout dimensions.
- The initial redesign covers the home page and shared site shell.
- Product content remains sourced from Shopify.
- Brand/story content is initially stored in the frontend rather than Shopify metaobjects.
- Yellow is the desired accent despite the existing pale-gold theme.

## 14. Open questions

1. Should the header overlay the hero, or should it remain a separate white/charcoal bar?
2. Which exact Auto Deko logo/wordmark should be used? The current `logo.jpeg` may not work over photography.
3. Are suitable hero and workshop photographs available, or should temporary placeholders be prepared?
4. Should clicking products initially open the Shopify-hosted product page, or wait for native product detail pages?
5. Which email address and social profiles should the contact section use?
6. What final legal-page URLs should `Impressum` and `Datenschutz` use?
7. Is the proposed yellow accent correct, or should it be adjusted to a specific brand color?
