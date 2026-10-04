# Contributing to Gerfaut

Thank you for your interest in Gerfaut. The project is in early development and moving fast; expect significant changes until the first release.

## Before you start

- Open an issue first for anything beyond a trivial fix. It avoids wasted work on changes that don't fit the roadmap.
- Everything public happens in English: issues, pull requests, code, comments, commit messages.
- Security vulnerabilities are never reported through issues or pull requests. See [SECURITY.md](SECURITY.md).

## License of contributions

Gerfaut's code is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0-only), with copyright kept centralized. This is what makes commercial licensing and signed store builds possible, and those are what fund the project.

By submitting a contribution (pull request, patch, or code suggestion), you agree that:

1. Your contribution is licensed under the AGPL-3.0, like the rest of the project.
2. You grant Loïc Morel a perpetual, worldwide, irrevocable right to also license your contribution under other terms, for example a commercial license, or the exceptions required for app-store distribution.
3. You wrote the contribution yourself, or otherwise have the right to submit it under these terms.

Accepted contributions remain published under the AGPL forever. There is no CLA to sign; submitting a pull request constitutes agreement.

## The one hard rule

Gerfaut is watch-only. The codebase contains no code that generates keys, handles seeds, or signs transactions, and pull requests introducing any of it will be closed.

## Pull requests

- Keep them small and focused, one concern per pull request.
- Write commit messages in English, imperative mood, with a short subject line.
- Run the checks below before you push.
- Brand assets (name, logo, visual identity) are out of contribution scope. See [TRADEMARK.md](TRADEMARK.md).

## Checks

Run these from the repository root before you open a pull request. CI runs the first three on every pull request and every push to `main`.

```sh
npm ci           # install the exact versions of package-lock.json
npm run check    # type-check the pages and their scripts
npm run build    # build the static site into dist/
npm run preview  # serve dist/ at http://localhost:4321
```

Then open the pages you changed at phone and desktop widths, and go through them with the keyboard. The preview ignores `public/_headers`, so the Content Security Policy only takes effect once the site is deployed: an inline script or style that works in the preview is blocked in production.
