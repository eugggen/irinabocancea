// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Change `base` to mount the site in a subfolder, for example "/client".
// Use a leading slash and no trailing slash. `site` is the public origin,
// used for canonical URLs, Open Graph, and the sitemap.
export default defineConfig({
  site: "https://eugggen.github.io",
  base: "/irinabocancea",
  output: "static",
  trailingSlash: "always",
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
  build: {
    format: "directory",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
