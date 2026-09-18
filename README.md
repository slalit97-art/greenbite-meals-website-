# 🌿 GreenBite Meals — Marketing Website

A fast, fully responsive single-page marketing website for **GreenBite Meals**, a home-based healthy tiffin and meal delivery business in Abu Dhabi, UAE. Built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no build step, deploys instantly on GitHub Pages.

**Live demo:** _add your GitHub Pages / custom domain link here once deployed_

---

## ✨ Features

- **Zero-dependency stack** — plain HTML5, CSS3, and vanilla JS. No npm install, no bundler, no build pipeline. Clone it and open `index.html`.
- **Fully responsive** — mobile-first layouts with a dedicated hamburger navigation menu, tested across mobile, tablet, and desktop breakpoints.
- **Sticky, smooth-scrolling navbar** that gains a solid background/shadow on scroll and highlights the active section as you scroll.
- **Conversion-focused hero section** with a bold headline, WhatsApp CTA, and floating trust badge.
- **"Why Choose Us"** section with four icon-driven value propositions.
- **Menu section** with 6+ meal cards (image placeholder, name, description, price, and a direct "Order on WhatsApp" deep link pre-filled with the item name).
- **Testimonials** — four customer reviews with star ratings and avatars.
- **About Us** section telling the founder's story to build trust and personality.
- **Gallery** — responsive image grid (drop in real photos to replace the placeholders).
- **Contact section** with an embedded Google Maps iframe, WhatsApp/phone/email links, and a client-side validated contact form that hands off to WhatsApp with a pre-filled message.
- **Scroll animations** — subtle fade/slide-in effects powered entirely by the native `IntersectionObserver` API (no animation library).
- **SEO-ready** — descriptive `<title>`/meta description, Open Graph + Twitter Card tags, canonical URL, and a `LocalBusiness` JSON-LD schema for rich search results.
- **`sitemap.xml`** and **`robots.txt`** included for out-of-the-box crawlability.
- **Floating WhatsApp button** for one-tap ordering from anywhere on the page.
- **Accessible markup** — semantic sections, `aria-*` attributes on the hamburger/menu/floating button, and a live-region status message on the contact form.

---

## 🛠 Tech Stack

| Layer       | Technology                                   |
|-------------|-----------------------------------------------|
| Markup      | HTML5 (semantic elements, JSON-LD)            |
| Styling     | CSS3 (custom properties, Grid, Flexbox, `clamp()`) |
| Typography  | Google Fonts — [Poppins](https://fonts.google.com/specimen/Poppins) (headings) + [Inter](https://fonts.google.com/specimen/Inter) (body) |
| Interactivity | Vanilla JavaScript (ES6+), `IntersectionObserver` API |
| Hosting     | Static — works on GitHub Pages, Netlify, Vercel, or any static host |

No frameworks, no CSS preprocessors, no package.json — by design, so the project stays instantly forkable and buildable.

---

## 📁 Project Structure

```
greenbite-meals/
├── index.html        # All page markup + SEO/meta tags + JSON-LD schema
├── css/
│   └── style.css      # Design tokens, layout, components, animations, responsive rules
├── js/
│   └── script.js       # Navbar behavior, hamburger menu, scroll animations, form handling
├── sitemap.xml         # Search engine sitemap
├── robots.txt           # Crawler rules + sitemap pointer
└── README.md            # You are here
```

---

## 🚀 Running Locally

No build tools required. Pick any one of the following:

**Option 1 — Just open it**
```bash
# From the project folder
start index.html      # Windows
open index.html        # macOS
xdg-open index.html     # Linux
```

**Option 2 — Local dev server (recommended, avoids CORS/font-loading quirks)**
```bash
# Python 3
python -m http.server 5500

# Node (if you have npx available)
npx serve .
```
Then visit `http://localhost:5500` in your browser.

---

## 🌐 Deploying to GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Source**, select the branch (e.g. `main`) and root folder `/`.
4. Save — your site will be live at `https://<username>.github.io/<repo-name>/` within a minute or two.

No build step, no CI config needed — it's static HTML/CSS/JS all the way down.

---

## ⚙️ Customization Checklist

Before going live with a real business, update the following placeholders:

- [ ] Replace the WhatsApp number `971500000000` throughout `index.html` and `js/script.js` with the real business number.
- [ ] Swap emoji image placeholders (hero, menu cards, gallery, about) for real photography.
- [ ] Update the Google Maps embed URL in the Contact section with the exact business location.
- [ ] Replace `hello@greenbitemeals.ae`, phone number, and social links with real contact details.
- [ ] Update the `og:image`, canonical URL, and JSON-LD `address`/`geo` fields in `<head>` once a real domain is live.
- [ ] Replace the inline SVG favicon placeholder with a proper brand favicon (`favicon.ico` / `favicon.svg`).
- [ ] Update `sitemap.xml` and `robots.txt` with the production domain.

---

## 📄 License

This project is free to use and adapt for your own small business or portfolio. No attribution required, though it's always appreciated.

---

Built with 🌿 for small, home-based food businesses who deserve a website as good as their cooking.
