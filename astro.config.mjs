// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://gerfaut-wallet.com",
  trailingSlash: "never",
  integrations: [
    // The return page after a payment means nothing without its reference.
    sitemap({ filter: (page) => !page.includes("/premium/paid") }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
