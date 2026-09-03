# OVME Prototype

A pixel-accurate, clickable HTML/CSS/JS prototype of the OVME medical-aesthetics app, built directly from the Figma design file. No build step, no dependencies — two self-contained static HTML files.

## Files

- **`index.html`** — the showcase/demo wrapper. Presents the prototype inside an iPhone device frame with a flow picker (Booking, Beauty journey, Profile, Home) for walking through different scenarios.
- **`ovme_prototype.html`** — the actual interactive app prototype, loaded inside the showcase's iframe. Can also be opened directly and deep-linked via `?start=<screen>` query params (e.g. `?start=profile`, `?start=home-appointment`).

## Local preview

No build tools needed — just open `index.html` in a browser, or serve the folder with any static file server:

```
npx serve .
```

## Deploying

This is a static site with no build command. On Netlify, `netlify.toml` is already configured with `publish = "."` and an empty build command, so it deploys as-is.
