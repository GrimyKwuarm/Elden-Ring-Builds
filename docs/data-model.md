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

