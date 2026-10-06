// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://gerfaut-wallet.com",
  trailingSlash: "never",
  // download.html rather than download/index.html: Cloudflare Pages serves
  // the first at /download, the address every link and the sitemap use,
  // and moves the second to /download/.
  build: { format: "file" },
  // Sentences run over several lines and around links in the markup.
  // JSX whitespace rules, the default since Astro 7, would glue their
  // words together; this keeps the space HTML would show.
  compressHTML: true,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Every script and stylesheet stays in its own file: the CSP in
      // public/_headers allows 'self' and nothing inline.
      assetsInlineLimit: 0,
      // Lightning CSS, the default since Vite 8, writes every media query
      // in the range syntax, (width>=768px), which Safari reads only from
      // 16.4. esbuild writes them as min-width, which every browser reads.
      cssMinify: "esbuild",
    },
  },
});
