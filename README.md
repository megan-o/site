# Megan O’Brien — Personal Portfolio

A React portfolio for consumer research, speaking, and industry community leadership.

Live site: https://megan-o.github.io/site/

## Local development

```sh
npm ci
cp .env.example .env.local
npm start
```

The verified portfolio snapshot in `src/data/portfolio.json` renders immediately. Optionally supply the existing Google Sheets API browser key in `.env.local` to refresh entries from the live database. The site keeps the snapshot if the request fails or times out.

## Edit the portfolio

The existing Google Sheet `mo_whats_new`, tab `Sheet1`, remains the editing source:
https://docs.google.com/spreadsheets/d/10lIiQ8yqJFay3e6MR_6BkXJsb7Ix9W2LWKg-yuvQMQs/edit

Keep the first row as headers: `Date`, `Name`, `Link`, `Description`, `Img`, `Category`, `Partner`, `Featured`.

- Category: `Research`, `Speaking`, or `Recognition`.
- Featured: retained as database metadata.
- Date: a Sheets date, `YYYY-MM`, or `YYYY` when only the month or year is known.
- Link: the public source, using HTTPS.
- Img: icon displayed beside each entry in the original list layout.

The site reads rows 1–100 in newest-first chronological order, using the original tabbed layout. Refresh the snapshot after substantial database edits so it remains useful if the live feed is unavailable.

Biography: `src/Components/About.js`. Embedded résumé: `src/Components/Resume.js`. Resume PDF: `public/Megan-OBrien-Resume.pdf`. The PDF is the current user-supplied September 2026 file. Portfolio source provenance is recorded in `SOURCES.md`.

## Verify and publish

```sh
CI=true npm test -- --watchAll=false
npm run build
npm run deploy
```

Deployment publishes the production build to `gh-pages`; changing `main` alone does not publish the website. Configure the optional API key locally before building. Keep Google Cloud restrictions on the existing browser key.
