# Deploy

The site is a static build. The host does not need Node.

```sh
npm install
npm run build
```

## GitHub Pages (production)

Live site: **https://eugggen.github.io/irinabocancea/**

- Repository: [eugggen/irinabocancea](https://github.com/eugggen/irinabocancea)
- Push to **`main`** runs [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml) (Astro build + GitHub Pages).
- In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions** (once, after the first workflow exists).

`astro.config.mjs` uses `site: "https://eugggen.github.io"` and `base: "/irinabocancea"`. Keep `public/robots.txt` sitemap URL in sync.

## Manual / other hosts

Upload the **contents** of `dist/` to the host’s web root (FTP or the host’s file manager). Upload the files inside `dist`, not the `dist` folder itself, so `index.html` sits at the web root.

Routes are directories (`despre/index.html`). Links use a trailing slash, so they resolve on a host without rewrite rules.

## Subfolder

The site can live at the domain root or in a subfolder. There is one switch, in `astro.config.mjs`:

```js
base: "/",
```

For a subfolder, set `base` to that path with a leading slash and no trailing slash, then build again:

```js
base: "/client",
```

Also set `site` to the public origin (`https://example.com`). Canonical URLs, Open Graph, and the sitemap use it. If `base` or `site` changes, update the `Sitemap:` line in `public/robots.txt` to match, for example `https://example.com/client/sitemap-index.xml`.

## Contact form

The form on `/contact/` is visual only. It does not send anywhere.

TODO: connect it to an external form service, or to a small PHP script on the host. Point the form’s `action` at that endpoint when the handler is chosen. A plain static upload cannot receive the message by itself.
