# GitHub Pages Deployment Design

## Goal

Prepare Justine Bradley Tulio's Vite e-portfolio for reliable deployment from the existing `Cruelart11/E-Portfolio_TULIO` repository to GitHub Pages.

## Hosting Approach

Use GitHub Pages with the official GitHub Actions artifact deployment flow. This avoids maintaining a generated `gh-pages` branch and keeps deployment tied to the source code on `main`.

The expected public address is:

`https://cruelart11.github.io/E-Portfolio_TULIO/`

## Vite Configuration

Add `vite.config.js` using the existing React plugin and set:

`base: '/E-Portfolio_TULIO/'`

The repository-specific base path ensures that Vite-generated assets and URLs constructed with `import.meta.env.BASE_URL` resolve correctly beneath the GitHub Pages project path. This includes the application bundle, profile image, PDFs, notebook previews, spreadsheets, and downloads.

The existing hash-based routes remain unchanged. Home, Course Expectation, Prelim, and Midterm continue to use hashes, so direct navigation does not require a GitHub Pages rewrite rule.

## Deployment Workflow

Add `.github/workflows/deploy.yml`. The workflow:

- runs automatically for pushes to `main`;
- can also be started manually with `workflow_dispatch`;
- checks out the repository;
- installs the Node.js LTS runtime with npm caching;
- runs `npm ci` for reproducible dependency installation;
- runs `npm run build`;
- configures GitHub Pages;
- uploads only the generated `dist` directory as the Pages artifact; and
- deploys that artifact to the `github-pages` environment.

The workflow grants only the permissions needed by the official Pages deployment flow: read access to repository contents, write access to Pages, and identity-token access for deployment. Deployment concurrency is limited to one Pages run, with a newer run replacing an older in-progress deployment.

Action versions follow the current official Vite GitHub Pages example and are pinned to the documented commit revisions.

## User-Controlled GitHub Steps

Adding the files does not publish the site by itself. After the configuration is committed, the user controls these external actions:

1. Push `main` to `origin`.
2. Open the repository's **Settings → Pages** screen.
3. Select **GitHub Actions** as the publishing source.
4. Review the workflow run under **Actions**.
5. Open the URL reported by the successful deployment.

No repository push, GitHub setting change, or public deployment is included in the configuration-only implementation unless the user explicitly requests it afterward.

## Failure Handling

- A failed dependency installation or build stops the workflow before deployment.
- A failed deployment remains visible in the repository's Actions history with logs.
- The previous successful Pages deployment remains available when a newer workflow fails before publishing.
- Missing documents or incorrect base paths are caught locally by inspecting the production build and serving it beneath `/E-Portfolio_TULIO/` before the configuration is committed.

## Verification

The configuration is complete when:

- `vite.config.js` uses the React plugin and the exact repository base path.
- The Pages workflow is valid YAML and targets pushes to `main` plus manual runs.
- Workflow permissions and the `github-pages` environment are correctly scoped.
- `npm run lint` passes.
- `npm run build` passes and produces `dist`.
- The built portfolio works when served beneath `/E-Portfolio_TULIO/`.
- Home, Course Expectation, Prelim, and Midterm routes open correctly.
- Profile imagery, PDFs, notebook previews, spreadsheet previews, and file actions resolve under the configured base path.
- The working tree contains only the intended deployment configuration and documentation changes.
