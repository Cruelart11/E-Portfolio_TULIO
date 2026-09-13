# React Portfolio Conversion Design

## Goal

Convert the supplied inline HTML/CSS portfolio mockup into a maintainable, responsive React application in the currently empty repository.

## Scope

The first version implements the supplied Home page. The header retains navigation entries for Home, Course Expectation, Prelim, Midterm, and Finals. Home links to the page content; the remaining entries are visibly non-active placeholders until their content is supplied.

The implementation initializes a Vite React project. It does not add a router or a CSS framework because the supplied content describes only one complete page.

## Architecture

The application uses semantic React components with content-driven rendering where elements repeat:

- `Header` renders branding and primary navigation.
- `Hero` renders the terminal prompt, introduction, calls to action, profile frame, and availability badge.
- `About` renders the biography and student details.
- `Toolbox` maps skill data into reusable skill cards and progress indicators.
- `Contact` renders the email, GitHub, and LinkedIn cards.
- `Footer` renders ownership and technology details.

`App` composes these sections. Static portfolio data remains close to the components that consume it; no state-management library or network layer is needed.

## Visual System

Regular CSS defines reusable custom properties for the supplied palette:

- Canvas: `#0A0E14`
- Panels: `#10151F` and `#161C28`
- Borders: `#232B3A`
- Primary text: `#E6EDF3`
- Muted text: `#8B98AC`
- Green accent: `#7EE787`
- Blue accent: `#58A6FF`
- Dark green button text: `#05210A`
- Window controls: `#FF5F56`, `#FFBD2E`, and `#27C93F`

Archivo is used for display headings, Inter for prose, and JetBrains Mono for terminal-style interface text. The app may load these fonts from Google Fonts, with sensible system fallbacks.

The desktop page uses a centered content container up to 1152px wide. CSS Grid and Flexbox replace the export's fixed positioning. Breakpoints collapse the hero, detail rows, skill grid, contact cards, navigation, and footer into readable mobile layouts without horizontal overflow.

## Interaction and Accessibility

- The header remains visible with a translucent backdrop while scrolling.
- Home and the two hero buttons navigate to relevant sections on the page.
- Placeholder navigation items remain present but do not lead to fabricated course content.
- Interactive elements have clear hover and keyboard-focus states.
- Semantic landmarks, heading order, descriptive labels, and reduced-motion behavior are included.
- Skill percentages are represented with accessible progress elements or equivalent labelled markup.

## Profile Image

Because no personal profile image was supplied, the profile frame displays an intentional terminal-themed placeholder. Its structure makes replacing it with a local `profile.jpg` straightforward later without changing the page layout.

## Error Handling

This is a static client application with no runtime API errors to handle. External font failure falls back to installed fonts. Missing personal links are represented by non-fabricated placeholder values from the supplied mockup.

## Verification

- Install dependencies and run the Vite production build.
- Run any configured lint check.
- Inspect the rendered page at desktop and mobile viewport sizes.
- Confirm navigation, buttons, focus states, responsive wrapping, and absence of horizontal overflow.

## Out of Scope

- Course Expectation, Prelim, Midterm, and Finals page content
- Client-side routing
- Backend services, forms, analytics, or content management
- A real profile photograph or replacement personal details not supplied by the user
