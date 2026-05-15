# Data Model

The first guide stores data directly in `index.html`.

Conceptually, each guide step has:
- `phase`: early, academy, night, or late.
- `title`: short action name.
- `objective`: what the player should do.
- `reward`: why it matters.
- `links`: wiki or map references.
- `optional`: whether the step can be skipped.

If more builds are added, this model can become a JSON file.

Atlas markers currently live in `index.html` and include:
- `kind`: flask, farm, detour, boss, or gear.
- `title`: detail-card heading.
- `body`: short instruction text.
- `link`: external reference URL.
- CSS coordinates: `--x` and `--y` percentages on the stylized atlas.
