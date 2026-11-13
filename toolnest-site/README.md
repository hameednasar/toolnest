# ToolNest — launch-ready static website starter

A responsive, multi-page online tools website built with plain HTML, CSS and JavaScript. No build step, database, server, paid API or account system is required for the included tools.

## Included pages and working tools

- `index.html` — responsive homepage, tool search and category filters
- `tools/image-compressor.html` — local browser image compression (JPG, PNG, WebP)
- `tools/word-counter.html` — live word, character, sentence and reading-time counts
- `tools/cgpa-calculator.html` — weighted GPA calculator using editable course rows
- `tools/json-formatter.html` — JSON validation, formatting, minifying and copy
- `tools/qr-generator.html` — QR generation using QRCode.js from cdnjs CDN
- `about.html`, `contact.html`, `privacy.html`, `terms.html`
- `robots.txt`, `sitemap.xml`, favicon and responsive styles

## Run locally

You can open `index.html` directly, or run a local static server from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy free on Cloudflare Pages

1. Create a GitHub account if you do not already have one.
2. Create a new **public or private** repository named `toolnest`.
3. Upload the contents of this folder to the repository root (not the parent folder).
4. In Cloudflare, open **Workers & Pages → Create → Pages → Connect to Git**.
5. Select the `toolnest` repository.
6. Choose **None** as the framework preset. Leave the build command blank and set the build output directory to `/` (or the repository root, as shown in the dashboard).
7. Deploy. Cloudflare will provide a `*.pages.dev` address.
8. Test every tool on the deployed HTTPS URL, especially QR generation and image downloads.

Cloudflare's dashboard and free-plan limits can change; check its current documentation before deployment.

## Required edits before public launch

Search the project for `YOUR-DOMAIN.example` and replace it with your final HTTPS domain or Pages URL in:

- canonical links in each HTML page
- `robots.txt`
- `sitemap.xml`

Replace `YOUR-CONTACT-EMAIL@example.com` in `contact.html` with an email address you actually monitor. Update the privacy and terms pages so they accurately describe the final operator, hosting provider, analytics, cookies, advertising and contact process. The supplied legal pages are starter templates, not legal advice or a guarantee of AdSense approval.

## AdSense setup — only after the site is ready

1. Own or control the final domain and make sure all pages work.
2. Publish genuinely useful, original tool pages and explanatory content; remove unfinished or placeholder content.
3. Add your real About, Contact and privacy information.
4. Apply through Google AdSense and wait for review.
5. Only after approval, insert the AdSense script and ad units supplied in your AdSense account. Do not click your own ads or ask others to click them.
6. If Google supplies an `ads.txt` entry, create `ads.txt` at the site root using the exact line provided in your account. Do not guess the publisher ID or invent the entry.
7. If you serve visitors in regions requiring consent, configure an appropriate consent management solution and update the privacy notice.

There is intentionally no fake AdSense code or invented publisher ID in this starter project.

## Technical notes and limitations

- Image compression runs on-device using the browser Canvas API. Transparency and image metadata may be changed depending on the chosen output format.
- Word counting uses whitespace-separated tokens, which is a practical approximation and may differ for some languages.
- GPA uses a common 4.0-style grade scale; institutions may use different grade points, rounding and policies.
- JSON formatting uses the browser's built-in JSON parser.
- QR generation loads QRCode.js from cdnjs. If the CDN is unavailable, that one tool cannot generate codes until the library loads.
- No analytics or advertising is installed by default.

## Pre-launch quality checklist

- [ ] Replace all domain placeholders.
- [ ] Replace contact email placeholder.
- [ ] Review privacy and terms against actual services and local law.
- [ ] Test mobile layout and all five tools on desktop and mobile.
- [ ] Test QR generation with and without internet access.
- [ ] Test image compression with JPG, PNG and WebP files.
- [ ] Add a custom domain if/when you can afford one; the Pages subdomain works for initial testing.
- [ ] Add Search Console property and submit `sitemap.xml` after deployment.
- [ ] Publish useful, original supporting guides and gather real user feedback.
- [ ] Apply for AdSense only when the site is complete and meets current program policies.
