# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

The site behind gerfaut-wallet.com: static pages built with Astro and Tailwind, in the Toundra palette, with the Bricolage Grotesque, Instrument Sans and JetBrains Mono fonts served from the site itself.

### Added

- A home page built around one screenshot of the desktop app: a centered title, a download button that names the visitor's system, the picture in full width, then seven short sections with real screenshots of the apps at their true size, the Premium offer, and how to build from source. On phones the header keeps Download in reach and folds the other entries behind a menu button.
- A download page that reads the latest desktop and Android releases from the GitHub API, marks the card of the visitor's system, lists every file with what it is for, says how to get past SmartScreen and Gatekeeper on the first launch, and gives the checksum manifest and the minisign command to verify it. When a release has no file for a system, or GitHub does not answer, the card links to the release page instead.
- A Premium page that lists what the server does, then the three plans with the launch offer on the yearly one, the checkout that mints an account key and opens a Bark Pay charge, the form that adds time to an existing key, and a FAQ. A return page after payment polls the charge and says when the key is active.
- The Terms of Sale of Premium.
- Security headers for Cloudflare Pages, with a Content Security Policy that allows no inline script or style.
- A sitemap, a 404 page, and a deploy workflow to Cloudflare Pages with every action pinned to a commit.
