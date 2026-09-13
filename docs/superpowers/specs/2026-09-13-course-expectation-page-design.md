# Course Expectation Page Design

## Goal

Add the supplied Course Expectation design as a complete, responsive React page that a professor can reach from the portfolio navigation, refresh directly, bookmark, and revisit with browser Back and Forward controls.

## Navigation

The portfolio will use a lightweight hash-based route:

- `#/` displays the existing Home page.
- `#/course-expectation` displays the new Course Expectation page.

Hash routing is chosen because it works when the static Vite build is hosted on GitHub Pages without server-side fallback configuration. The brand and Home navigation item link to `#/`. Course Expectation links to `#/course-expectation`. The active page receives the existing green caret and text treatment. Prelim, Midterm, and Finals remain visibly unavailable and non-clickable until their page designs are supplied.

The application listens for hash changes, renders the matching page, and scrolls to the top after page navigation. An unknown hash falls back to Home so the portfolio never renders a blank screen.

## Architecture

The existing shell is adjusted so shared layout and page content stay separate:

- `App` resolves the current hash and selects a page.
- `Header` receives the current page and renders working Home and Course Expectation links with the correct active state.
- `HomePage` owns the existing Home path, hero, About, Toolbox, and Contact composition.
- `CourseExpectationPage` owns the new page introduction, expectation cards, and commitments panel.
- `Footer` remains shared across both pages.

The four expectations and six commitments are stored as local arrays and rendered through reusable card/list markup. No routing package or global state library is added for two static pages.

## Page Content

The new page reproduces the supplied content:

- Terminal path: `~/portfolio/course-expectation`
- Section label: `[00] Course Expectation`
- Main heading: “What I expect to walk away with.”
- Introductory paragraph describing the page as a running course contract
- Four cards: Solid fundamentals, Ship real projects, Collaborate like a pro, and Learn how to learn
- Personal commitments panel containing all six supplied commitments

The supplied wording is preserved exactly. No additional academic claims or personal information are invented.

## Visual and Responsive Design

The page reuses the established color tokens, font families, centered 1088px content width, sticky translucent header, and shared footer. The introduction is constrained to 672px. Expectation cards form two columns on wide screens and one column on narrow screens. The commitment panel spans the available width and its checklist wraps naturally on mobile.

The page avoids fixed heights and absolute content positioning from the export, preventing clipping when text wraps or fonts fall back. At small viewports, padding and heading sizes reduce while preserving hierarchy and avoiding horizontal page overflow.

## Accessibility and Behavior

- Navigation uses real anchor links and exposes the current page with `aria-current="page"`.
- Page content uses semantic headings, sections, articles, and lists.
- Decorative numbering and checkmarks are hidden from assistive technologies where the text already supplies meaning.
- Keyboard focus uses the existing visible blue outline.
- Route changes update the visible page and document title, then move the viewport to the top.

## Error Handling

No network data is required. Unknown or empty hashes resolve to Home. The page continues to use local/system font fallbacks if Google Fonts cannot load.

## Verification

- Run ESLint and the Vite production build.
- Verify Home and Course Expectation navigation in both directions.
- Verify direct loading and refreshing of `#/course-expectation`.
- Verify browser Back and Forward behavior.
- Inspect desktop and mobile layouts.
- Check for page-level horizontal overflow and browser console errors.

## Out of Scope

- Prelim, Midterm, and Finals pages
- React Router or another routing dependency
- Editing the supplied Course Expectation wording
- Deployment or GitHub Pages configuration changes
