# Auto Deko design improvement plan

Reference reviewed: [Paul McLine](https://paulmcline.com/de)

This document uses Paul McLine as inspiration for hierarchy, restraint, photography, and brand storytelling. Auto Deko should not copy its imagery, wording, products, or visual identity.

## 1. What works in the reference

### Direct observations

- The homepage is led by large automotive imagery rather than UI decoration.
- Individual vehicle models receive their own editorial slides and dedicated mobile crops.
- Product names are presented with a simple hierarchy: small marque label, larger model name.
- Commerce is intentionally understated; the homepage feels like a gallery before it feels like a catalogue.
- The founder journey, partner story, Instagram presence, collector packaging, news, awards, and collaborations establish credibility around the objects.
- Calls to action are short and visually quiet: `see more` and `SEE MORE`.
- Desktop imagery is typically delivered around 1920–2000 pixels wide, while separate mobile assets are provided around 768–900 pixels wide.

### Ideas worth adapting

- Let product and workshop photography create the emotion.
- Treat every Auto Deko object as a named piece with provenance rather than a generic shop item.
- Use generous whitespace and a restrained light interface.
- Build trust through process, maker story, materials, and the origin of each automotive component.
- Provide intentionally cropped desktop and mobile images.

### Ideas not to copy

- Do not reproduce the long slideshow with more than ten subjects.
- Do not hide the catalogue behind purely artistic imagery.
- Do not use English copy on the German storefront.
- Do not add news, awards, collector packaging, or collaborations until real content exists.
- Do not imitate the Paul McLine signature logo or its sculptures.

## 2. Updated Auto Deko direction

- Keep the light theme.
- Prefer warm white, soft stone, and very pale gray backgrounds.
- Use terracotta/red only as a controlled accent inspired by brake calipers and workshop details.
- Remove large yellow blocks and avoid heavy dark sections.
- Use typography at regular to semibold weights only.
- Reserve uppercase for small labels, navigation, and metadata.
- Make imagery the largest visual element; headings should support it rather than compete with it.

### Typography targets

- Hero title: 48–64 px desktop, 36–44 px mobile, weight 500–600.
- Section title: 36–52 px desktop, 30–38 px mobile, weight 500–600.
- Product title: 16–20 px, weight 500–600.
- Body: 16–18 px, weight 400, line height 1.6–1.75.
- Labels/navigation: 12–14 px, weight 500–600, moderate letter spacing.
- Avoid Impact, extra-bold weights, and oversized 100+ px headlines.

## 3. Proposed homepage improvements

### 3.1 Header

Current component: `components/header/index.tsx`

- Reduce the header height slightly and keep it visually quiet.
- Use the Auto Deko wordmark on the left and only essential navigation on the right.
- Remove `Automotive Objects` unless it becomes an intentional tagline.
- Keep the light translucent background and thin divider.
- Add cart/search only after they are functional.

### 3.2 Hero

Current component: `components/home/hero-section.tsx`

- Replace the graphic split hero with one strong landscape workshop or lifestyle photograph.
- Place a short title and one CTA over a calm area of the image or directly below it.
- Recommended title: `Autoteile. Neu gedacht.`
- Recommended supporting text: `Handgefertigte Einzelstücke mit echter Geschichte.`
- Keep one static hero initially; do not build an autoplay slideshow.
- Prepare separate desktop and mobile crops.
- Remove the decorative oversized `A`, object index, and artificial product rotation once final photography is available.

### 3.3 Provenance strip

Current component: `components/home/brand-ticker.tsx`

- Replace the dark ticker with a thin, static light strip.
- Suggested items:
  - `Handgefertigt in Bayern`
  - `Echte Fahrzeugteile`
  - `Jedes Stück ein Unikat`
- Avoid animation unless it adds clear value.

### 3.4 Curated objects

Current component: `components/home/product-showcase.tsx`

- Lead with three to five selected pieces instead of treating all products equally.
- Use a two-column editorial layout on desktop and one column on mobile.
- Let images occupy most of each card.
- Keep title, price, availability, and one short provenance line underneath.
- Add an optional quiet badge such as `Einzelstück` or `Neu` only when backed by Shopify data.
- Keep a separate link to the complete catalogue once more products exist.

### 3.5 Object spotlight

New section

- Give one signature product a full-width image and short story.
- Show the donor component, transformation, and completed object.
- Link directly to its product-detail page.
- This section should rotate editorially through configuration, not automatically in the browser.

### 3.6 Maker and process story

Current components:

- `components/home/brand-statement.tsx`
- `components/home/story-sections.tsx`

Improvements:

- Merge the current broad statements into one credible maker/process section.
- Use a real workshop or maker photograph.
- Explain the process in three concise steps:
  1. component selection
  2. preparation and fabrication
  3. finishing and quality check
- Keep copy factual and specific; avoid generic luxury language.
- Add maker name, workshop location, and experience when confirmed.

### 3.7 Trust and provenance

New section

- Add a restrained facts row when the information is confirmed:
  - handmade location
  - unique or limited quantity
  - materials
  - typical production time
  - shipping region
- Do not invent awards, collectors, partnerships, or sustainability claims.

### 3.8 Commission CTA

Current component: `components/home/contact-us.tsx`

- Change the large colored block into a calm light section with a workshop image or generous whitespace.
- Position custom commissions as a core service:
  - `Du hast ein besonderes Fahrzeugteil?`
  - `Wir prüfen gemeinsam, welches Objekt daraus entstehen kann.`
- Add a real email, form, or contact route before presenting the CTA as fully functional.

### 3.9 Footer

Current component: `components/footer/index.tsx`

- Keep the footer minimal and light.
- Add real contact details, Instagram, Impressum, and Datenschutz once available.
- Remove placeholder text before launch.
- Avoid newsletter signup until consent handling and delivery are implemented.

## 4. Product-detail improvements

Current route: `app/products/[handle]/page.tsx`

The current detail page already provides a gallery, title, price, availability, description, variants, and inquiry link. Improve it with structured provenance similar to an art-object catalogue.

### Required information

- Original component and donor vehicle, if known
- Materials
- Dimensions and weight
- Production year
- Unique piece or edition size
- Condition/patina note
- Manufacturing time for made-to-order products
- Shipping or pickup information
- Care instructions

### Recommended layout

- Keep the image gallery dominant.
- Use one primary lifestyle image followed by clean detail images.
- Keep product information in a narrow, readable column.
- Replace generic product copy with a short object story.
- Present facts in a clean definition list rather than long paragraphs.
- Keep inquiry or checkout action visible without making it visually aggressive.

## 5. Shopify content model

Add Shopify metafields before building content-dependent sections:

| Metafield | Purpose |
|---|---|
| `custom.subtitle` | Short editorial line for product cards |
| `custom.donor_vehicle` | Source vehicle/component |
| `custom.materials` | Materials used |
| `custom.dimensions` | Product dimensions |
| `custom.weight` | Product weight |
| `custom.production_year` | Year produced |
| `custom.edition` | Unique piece or edition information |
| `custom.production_time` | Lead time for made-to-order objects |
| `custom.object_story` | Product-detail narrative |
| `custom.care_instructions` | Care information |
| `custom.featured` | Homepage curation flag |
| `custom.lifestyle_images` | Editorial desktop/mobile imagery |

The Storefront API query should only be expanded after these metafields exist and are exposed to the Headless sales channel.

## 6. Asset plan

The strongest lesson from the reference is that the design quality depends on photography. The current transparent product PNGs are useful for catalogue views but cannot create the same editorial impact.

Required shoot list:

1. One landscape hero image in a real workshop/interior context.
2. One mobile hero crop with a protected text area.
3. One wide image for each featured object.
4. Three process images: source part, fabrication, finished detail.
5. One maker/workshop portrait.
6. Consistent product images on a neutral background.
7. Detail photographs showing patina, materials, and craftsmanship.

Do not use Paul McLine images or the supplied reference screenshots in production.

## 7. Priority roadmap

### Priority 1 — Restraint and hierarchy

- Simplify header.
- Reduce hero copy and remove decorative graphics.
- Convert the ticker to a static light provenance strip.
- Reduce section heading sizes and vertical repetition.
- Replace large accent blocks with neutral backgrounds.

### Priority 2 — Better commerce presentation

- Curate featured products through Shopify.
- Add provenance subtitles to cards.
- Create the full-width object spotlight.
- Expand product details with structured metafields.

### Priority 3 — Credibility

- Add real maker/workshop story.
- Add process photography and factual production steps.
- Add confirmed trust facts and real contact information.

### Priority 4 — Editorial depth

- Add Instagram or journal content only when it can be maintained.
- Add collaborations, press, awards, and packaging only when genuine assets exist.

### Priority 5 — Quality pass

- Produce art-directed mobile images.
- Verify keyboard navigation, contrast, reduced motion, and semantic headings.
- Measure image loading, layout shift, and mobile performance.
- Compare desktop and mobile screenshots against this plan.

## 8. Acceptance criteria

- The storefront remains predominantly light and visually calm.
- Product and workshop imagery provides the primary visual impact.
- No heading exceeds 64 px on desktop or uses a weight above 600.
- The homepage has one clear primary CTA per major section.
- Featured objects link directly to working product-detail routes.
- Product facts come from Shopify rather than hardcoded claims.
- Desktop and mobile receive appropriate image crops.
- Placeholder contact and legal content is removed before launch.
- The page remains clearly Auto Deko and does not imitate Paul McLine branding.

## 9. Open decisions

1. Is a professional product/workshop photo shoot available?
2. Which three products should be featured first?
3. Is every product unique, made to order, or part of a small edition?
4. Which maker name and workshop location may be published?
5. Which email address and Instagram profile should be used?
6. Should the primary product action be direct Shopify checkout or an inquiry?
7. Should terracotta remain the accent, or should the interface become fully monochrome?
