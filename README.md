# philganem.com

Personal website of Phil Ganem. Built with React, Vite and Tailwind CSS.
Deployed to GitHub Pages by GitHub Actions.

## Develop

Requires Node.js 20.19+ or 22.12+ (see `.nvmrc`; CI uses Node 22).

```sh
npm install
npm run dev       # local dev server
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Edit content

- Bio, jobs and links: `src/data.js`
- Personal statement: `src/components/Hero.jsx`
- Résumé: replace `public/Resume.pdf`

## Deploy

Each push to `master` runs `.github/workflows/deploy.yml`:
`npm ci` → `npm audit` (runtime dependencies, high severity) → `vite build` → GitHub Pages.
Pull requests run the same build as a check.

One-time setup in **Settings → Pages**:

1. Set **Source** to **GitHub Actions**.
2. Set **Custom domain** to `philganem.com`.
3. Turn on **Enforce HTTPS**.

After the first good deploy, the old `gh-pages` branch can be deleted.

## Security notes

- GitHub Pages cannot send HTTP headers, so the build adds a Content Security Policy
  `<meta>` tag (see `vite.config.js`).
- Source maps are not published.
- The email address is assembled on click, not shown as plain text.
- Dependabot opens weekly updates for npm packages and GitHub Actions.
