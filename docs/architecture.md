# Architecture

The site is a static GitHub Pages-ready guide.

## Files
- `index.html`: content, structure, route cards, source links, and map references.
- `styles.css`: responsive visual design.
- `script.js`: checklist persistence, filtering, map tabs, and share helper.
- `assets/maps/*.svg`: original marked route maps.

## Data Model
The current guide is encoded directly in HTML because there is one build. If the repo grows to several builds, move guide data into JSON and render cards from templates.

## Runtime
No backend, database, authentication, or API is used.

