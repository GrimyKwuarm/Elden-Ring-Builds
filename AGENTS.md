# Elden Ring Builds - Agent Guide

## Project Purpose
This repository hosts shareable, interactive Elden Ring build guides. The current site is a beginner-friendly mage route that can be published as a static GitHub Pages page.

## Stack
- Static HTML, CSS, and vanilla JavaScript.
- No build step and no package manager required.
- Original SVG route maps live in `assets/maps/`.

## Commands
- View locally: open `index.html` in a browser.
- Quick file check: `git status --short`.
- Optional local server: `python -m http.server 8000`, then visit `http://localhost:8000`.

## Conventions
- Keep pages static and easy to host on GitHub Pages.
- Prefer plain HTML sections, accessible controls, and progressive enhancement.
- Link out to wikis for exact item details instead of copying long wiki text.
- Use original or permissively usable assets. Do not commit copyrighted game map screenshots unless the rights are clear.
- Keep source links close to claims that players may want to verify.

## Safety Rules
- Do not add secrets or personal data.
- Do not require third-party scripts for basic guide functionality.
- Treat external links as references only; avoid scraping or embedding copyrighted wiki content.
- Ask before adding analytics, ads, authentication, payments, or public API dependencies.

## Review Guidelines
- Check that every step has a clear goal, route, reward, and fallback note where useful.
- Make sure the guide works without JavaScript, with JavaScript adding checklist persistence and filtering.
- Verify links still point to useful wiki or map pages.
- Confirm mobile layout does not overlap or hide controls.

## Before Change Checklist
- Inspect current files and `git status`.
- Identify whether the change is content, design, behavior, or documentation.
- Keep the change small and reversible.
- Decide whether STATUS.md needs an update.

## After Change Checklist
- Open or run the site locally when relevant.
- Check the main interactive controls.
- Update STATUS.md and CHANGELOG.md after meaningful work.
- Summarize changed files, checks run, risks, and next steps.

