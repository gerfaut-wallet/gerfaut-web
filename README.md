# gerfaut-web

Website of [Gerfaut](https://github.com/gerfaut-wallet), a Bitcoin watch-only wallet.

![Status: pre-alpha](https://img.shields.io/badge/status-pre--alpha-orange) ![License: AGPL-3.0-only](https://img.shields.io/badge/license-AGPL--3.0--only-blue)

## Scope

- Product website and landing pages
- Release downloads and how to verify them

The user documentation lives in [`gerfaut-docs`](https://github.com/gerfaut-wallet/gerfaut-docs), which Mintlify serves at [gerfaut-wallet.com/docs](https://gerfaut-wallet.com/docs).

## Development

The site is built with [Astro](https://astro.build) and Tailwind CSS, and compiles to static files served by Cloudflare Pages.

```sh
npm install
npm run dev      # local dev server
npm run check    # type-check the pages and their scripts
npm run build    # static build into dist/
npm run preview  # serve the built site locally
```

The Deploy workflow builds the site and publishes it to Cloudflare Pages. It runs only when someone starts it by hand.

## Project

| Repository | Role |
|---|---|
| [`gerfaut-core`](https://github.com/gerfaut-wallet/gerfaut-core) | Core Rust library |
| [`gerfaut-mobile`](https://github.com/gerfaut-wallet/gerfaut-mobile) | Mobile app (Flutter, Android first) |
| [`gerfaut-desktop`](https://github.com/gerfaut-wallet/gerfaut-desktop) | Desktop app (Tauri v2, for Windows, macOS, and Linux) |
| [`gerfaut-docs`](https://github.com/gerfaut-wallet/gerfaut-docs) | User documentation (Mintlify), served at gerfaut-wallet.com/docs |
| `gerfaut-web` | Website and downloads, this repository |

## License

Site code: [AGPL-3.0-only](LICENSE). Written content and brand assets are not covered by the code license. See [TRADEMARK.md](TRADEMARK.md).

## Security

Report vulnerabilities privately. See [SECURITY.md](SECURITY.md).
