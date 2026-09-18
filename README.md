<div align="center">

# 🌿 GreenBite Meals

### A premium, single-page marketing website for a home-based healthy tiffin & meal delivery business in Abu Dhabi

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Site-16A34A?style=for-the-badge)](https://slalit97-art.github.io/greenbite-meals-website-/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#-tech-stack)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#-tech-stack)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#-tech-stack)
[![No Build Step](https://img.shields.io/badge/Build%20Step-None-success?style=for-the-badge)](#-running-locally)

</div>

---

## 📖 Overview

**GreenBite Meals** needed a fast, trustworthy, conversion-focused website to turn visitors into WhatsApp orders — without the overhead of a CMS, framework, or hosting bill.

This project is a **single HTML page** that looks and feels like a professionally built small-business site: a sticky navbar, an emotive hero with a bilingual headline ("Ghar Jaisa Khana, Seedha Aapke Desk Tak"), a browsable menu, social proof, a founder story, an FAQ accordion, and a contact flow that routes straight into WhatsApp — the channel this business actually sells through.

It's written in **plain HTML, CSS, and vanilla JavaScript** on purpose. There's no `npm install`, no bundler, and no build step — clone the repo, open `index.html`, and the entire site works. That also means it deploys to GitHub Pages (or any static host) in minutes, with zero CI configuration.

**🔗 Live Demo:** **[greenbite-meals-website-](https://slalit97-art.github.io/greenbite-meals-website-/)**
*(If the link 404s, GitHub Pages hasn't been enabled yet for this repo — see [Deploying to GitHub Pages](#-deploying-to-github-pages) below.)*

---

## ✨ Features

#### 🎨 Design & UX
- 🖥️ **Fully responsive** across mobile, tablet, and desktop, with a dedicated hamburger menu on small screens
- 🧭 **Sticky, smooth-scrolling navbar** that solidifies on scroll and highlights the active section as you browse
- 🎬 **Scroll-in animations** — subtle fade/slide-in effects powered entirely by the native `IntersectionObserver` API (no animation library)
- 🖱️ **Hover micro-interactions** on meal cards, buttons, and feature icons for a polished, "alive" feel
- 🎨 **Custom design system** — fresh green (`#16A34A`) + warm orange (`#F59E0B`) on an off-white canvas, with Poppins headings and Inter body text

#### 🍱 Business Sections
- 🏠 **Hero section** with a bold bilingual headline and a primary WhatsApp CTA
- ✅ **"Why Choose Us"** — four icon-driven value propositions
- 📋 **Menu** — 6+ meal cards, each with an image, description, price, and a one-tap **"Order on WhatsApp"** link pre-filled with the dish name
- ❓ **FAQ accordion** — five common questions on delivery areas, timings, and customization, fully keyboard- and screen-reader-accessible
- 💬 **Testimonials** — four customer reviews with star ratings and avatars
- 👨‍🍳 **About Us** — the founder's story, built to earn trust
- 🖼️ **Gallery** — a responsive image grid of the kitchen and packed meals
- 📍 **Contact** — embedded Google Map, phone/email/WhatsApp links, and a client-side validated contact form that hands off to WhatsApp
- 📲 **Persistent ordering** — a floating WhatsApp button on desktop/tablet, and a full-width sticky "Order on WhatsApp" bar on mobile

#### ⚙️ Engineering
- 📦 **Zero dependencies** — no npm, no bundler, no framework; pure HTML/CSS/JS
- 🔍 **SEO-ready** — descriptive meta tags, Open Graph + Twitter Card tags, canonical URL, and a `LocalBusiness` JSON-LD schema for rich search results
- 🗺️ **`sitemap.xml`** and **`robots.txt`** included out of the box
- ♿ **Accessible markup** — semantic HTML, `aria-*` attributes throughout, keyboard-visible focus states, and WCAG AA–contrast color tokens
- 🚀 **Deploys anywhere** — GitHub Pages, Netlify, Vercel, or any static file host, with zero configuration

---

## 🛠 Tech Stack

| Layer          | Technology                                                                                      |
|----------------|---------------------------------------------------------------------------------------------------|
| Markup         | HTML5 (semantic elements, JSON-LD structured data)                                               |
| Styling        | CSS3 — custom properties (design tokens), Grid, Flexbox, `clamp()`, `IntersectionObserver`-driven transitions |
| Typography     | Google Fonts — [Poppins](https://fonts.google.com/specimen/Poppins) (headings) + [Inter](https://fonts.google.com/specimen/Inter) (body) |
| Interactivity  | Vanilla JavaScript (ES6+) — no framework, no libraries                                           |
| SEO / Discovery| Open Graph, Twitter Cards, `LocalBusiness` JSON-LD, `sitemap.xml`, `robots.txt`                  |
| Hosting        | Static hosting — GitHub Pages, Netlify, Vercel, or any static file server                        |

No frameworks, no CSS preprocessors, no `package.json` — by design, so the project stays instantly forkable, auditable, and buildable by anyone.

---

## 📸 Screenshots

> _Add real screenshots here to showcase the site — drop image files into a `docs/screenshots/` folder and update the paths below._

| Desktop — Hero | Desktop — Menu |
|:---:|:---:|
| ![Desktop hero section](docs/screenshots/desktop-hero.png) | ![Desktop menu section](docs/screenshots/desktop-menu.png) |

| Mobile — Home | Mobile — FAQ Accordion |
|:---:|:---:|
| ![Mobile hero section](docs/screenshots/mobile-hero.png) | ![Mobile FAQ accordion](docs/screenshots/mobile-faq.png) |

---

## 📁 Project Structure

```
greenbite-meals/
├── index.html          # All page markup + SEO/meta tags + JSON-LD schema
├── css/
│   └── style.css        # Design tokens, layout, components, animations, responsive rules
├── js/
│   └── script.js         # Navbar, hamburger menu, scroll animations, FAQ accordion, form handling
├── assets/
│   └── founder.jpg        # Founder photo used in the About Us section
├── sitemap.xml             # Search engine sitemap
├── robots.txt                # Crawler rules + sitemap pointer
└── README.md                  # You are here
```

---

## 🚀 Running Locally

No build tools required — pick any one of the following.

**Option 1 — Just open it**
```bash
git clone https://github.com/slalit97-art/greenbite-meals-website-.git
cd greenbite-meals-website-

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

1. Push this folder to a GitHub repository (already done for this repo).
2. Go to **Settings → Pages**.
3. Under **Source**, select the branch (`main`) and root folder `/`.
4. Save — the site goes live at `https://<username>.github.io/<repo-name>/` within a minute or two.

No build step, no CI config needed — it's static HTML/CSS/JS all the way down.

---

## ⚙️ Customization Checklist

Before going live with a real business, update the following placeholders:

- [ ] Replace the WhatsApp number `971500000000` throughout `index.html` and `js/script.js` with the real business number.
- [ ] Swap emoji image placeholders (hero, menu cards, gallery) for real photography.
- [ ] Update the Google Maps embed URL in the Contact section with the exact business location.
- [ ] Replace `hello@greenbitemeals.ae`, phone number, and social links with real contact details.
- [ ] Update the `og:image`, canonical URL, and JSON-LD `address`/`geo` fields in `<head>` once a real domain is live.
- [ ] Replace the inline SVG favicon placeholder with a proper brand favicon (`favicon.ico` / `favicon.svg`).
- [ ] Update `sitemap.xml` and `robots.txt` with the production domain.
- [ ] Add real screenshots to `docs/screenshots/` and update the [Screenshots](#-screenshots) section.

---

## 📄 License

This project is free to use and adapt for your own small business or portfolio. No attribution required, though it's always appreciated.

---

<div align="center">

Built with 🌿 for small, home-based food businesses who deserve a website as good as their cooking.

**[Live Demo](https://slalit97-art.github.io/greenbite-meals-website-/)** · **[Report an Issue](https://github.com/slalit97-art/greenbite-meals-website-/issues)**

</div>
