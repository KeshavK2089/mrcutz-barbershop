# Mr.Cutz Mens Beauty Parlour — Static Site

A lightweight, responsive barbershop website with English ↔ Tamil toggle and a map-only contact section.

## Features
- Fully responsive (mobile/tablet/desktop)
- Fixed header that always stays visible
- English ↔ Tamil language toggle (persists via `localStorage`)
- Accessible markup and keyboard-friendly nav
- Indian-themed stock images (Unsplash Source API)
- GitHub Pages ready (no build step)

## Quick Start
1. **Upload to GitHub**
   - Create a new repository (e.g., `mrcutz-site`).
   - Upload these files (or use the ZIP below).

2. **Enable GitHub Pages**
   - Go to **Settings → Pages**.
   - Source: **Deploy from a branch**.
   - Branch: **main** (or `master`), folder: **/** (root).
   - Save — wait ~1 minute for the site to go live.

3. **Custom Domain (optional)**
   - Add your domain in **Settings → Pages** and create a `CNAME` record.
   - You can add a `CNAME` file at the repo root with your domain to persist it.

## Edit Phone / Hours
- In `index.html`, replace `+91 98765 43210` with your real number (it's used in the `tel:` links too).
- Hours text appears in the **Contact** section and **Footer**.

## Notes on Images
Images are hot-linked via Unsplash *Source* endpoints using India-focused queries (e.g., `https://source.unsplash.com/1600x900/?india,barbershop`). Replace with your own images by changing the URLs in `index.html` or by adding a local `assets/` folder and referencing relative paths.

## License
You own your site content. Unsplash Source images are subject to Unsplash's license; replace if you prefer fully self-hosted assets.
