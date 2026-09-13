# Prelim Page Design

## Goal

Add the supplied Prelim design as a responsive, directly accessible React page. The page presents current prelim coursework and structure while keeping activity entries display-only until the user supplies their corresponding files or destinations.

## Navigation and Routing

- `#/prelim` displays the Prelim page.
- Prelim becomes a real link in the shared header and receives the active green navigation treatment on its page.
- Home and Course Expectation keep their existing routes and behavior.
- Midterm and Finals remain unavailable until their designs are supplied.
- Direct refresh, bookmarks, and browser Back and Forward navigation continue to work through the existing hash router.

Route names, page identifiers, and document titles will be represented by a small shared route map instead of additional nested conditionals. Unknown routes continue to fall back to Home.

## Page Structure

The page contains:

- Terminal path: `~/portfolio/prelim`
- Term label: `[term] Weeks 1–6`
- Main heading: `Prelim`
- Supplied foundations-term description
- Statistics for four sections, eight items, and six graded items
- Terminal-style folder prompt
- Four folders: Exercises, Quiz, Projects, and Prelim Exam

Exercises starts expanded and displays the three supplied entries:

1. EX-01 — Hello, Toolchain
2. EX-02 — Control Flow Katas
3. EX-03 — Arrays & Strings

The supplied descriptions, scores/statuses, and tags are preserved exactly. Quiz, Projects, and Prelim Exam do not yet have supplied item details; when opened, they show the neutral message `Files will be added soon.`

## Interaction Model

Folders behave as a single-open accordion. Selecting a folder opens it and closes the previously open folder. Selecting the currently open folder collapses it. Exercises is initially open so the supplied coursework is immediately visible.

Folder headers are semantic buttons with keyboard support and `aria-expanded`/`aria-controls`. Coursework entries are semantic articles, not anchors or buttons. This prevents the display-only entries from implying that a missing file or page is available.

## Components and Data

- `PrelimPage` renders the page introduction, statistics, prompt, and folder collection.
- `PrelimFolder` owns one accordion header and its expandable content region.
- `PrelimItem` renders an item code, status or score, title, description, and tags.
- `App` resolves the new route using the route map.
- `Header` receives route-aware navigation data and makes Prelim clickable.

Folder and item content is stored in local arrays so future files or destinations can be added without rewriting page structure. No external state library or routing dependency is required.

## Visual and Responsive Design

The page reuses the existing canvas, panel, border, text, green, and blue CSS tokens and the Archivo, Inter, and JetBrains Mono font roles. The desktop introduction balances term content with three statistics. Folder cards use the supplied dark panels, borders, terminal icons, tags, statuses, and scores.

The desktop page uses the shared 1088px container. Narrow screens stack the introduction, statistics, and cards, reduce heading and panel padding, and preserve readable wrapping. Accordion content expands naturally without fixed heights, and the document must have no page-level horizontal overflow.

## Error Handling

The page is static and does not request files or network data. Missing category content is handled with the explicit neutral empty state. Unknown hashes continue to render Home. Font loading retains the existing system fallbacks.

## Verification

- Run ESLint and the Vite production build.
- Navigate to Prelim from Home and from Course Expectation.
- Refresh `#/prelim` directly and verify browser Back and Forward behavior.
- Open and collapse each folder using pointer and keyboard controls.
- Confirm activity entries have no links or click behavior.
- Inspect desktop and mobile layouts.
- Check active navigation, counts, text, page-level overflow, and browser console errors.

## Out of Scope

- Attaching or opening coursework files
- Adding activity-detail pages or external links
- Creating Quiz, Projects, or Prelim Exam content not present in the supplied export
- Midterm and Finals pages
- Deployment changes
