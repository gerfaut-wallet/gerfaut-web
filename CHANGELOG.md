# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

The site behind gerfaut-wallet.com: static pages built with Astro and Tailwind, in the Toundra palette, with the Bricolage Grotesque, Instrument Sans and JetBrains Mono fonts served from the site itself.

### Added

- A home page: what a watch-only wallet is, what the free apps do, what Premium adds, and where the apps run.
- A download page that reads the latest desktop and Android releases from the GitHub API and lists every file with its checksum manifest and the minisign command to verify it.
- A Premium page with the three plans, the checkout that mints an account key and opens a Bark Pay charge, the form that adds time to an existing key, what the server keeps and what it does not, and a FAQ. A return page after payment polls the charge and says when the key is active.
- The Terms of Sale of Premium.
- Security headers for Cloudflare Pages, with a Content Security Policy that allows no inline script or style.
- A sitemap, a 404 page, and a deploy workflow to Cloudflare Pages with every action pinned to a commit.
