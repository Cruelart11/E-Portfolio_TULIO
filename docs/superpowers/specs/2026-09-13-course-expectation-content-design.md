# Course Expectation Content Design

## Goal

Replace the current generic Course Expectation content with the user's actual course expectation and assigned Question A and Question B responses in a clear format for adviser review.

## Content Structure

The existing terminal path and shared page shell remain. Everything below the path is replaced by two stacked cards:

1. A Course Expectation card containing the heading `Course Expectation` and the supplied paragraph about learning deep learning and natural language processing.
2. An assignment card containing the supplied E-portfolio task introduction, Question A and its complete customer-churn answer, and Question B and its complete conversational-NLP answer.

The old slogan, four outcome cards, and personal-commitments panel are removed.

## Presentation

Both cards span the shared content width with readable inner line lengths. The expectation card establishes the page heading. The assignment card uses a short terminal-style label, an introductory paragraph, blue question labels, descriptive question text, answer paragraphs, and a subtle divider between Questions A and B.

The user's meaning and claims are preserved. Formatting may add paragraph breaks and correct obvious spacing or punctuation issues, but it will not add sources, new examples, or academic claims.

## Responsive and Accessible Design

- Semantic sections and heading order identify the page and both questions.
- Question prompts remain visually distinct from answers.
- Long text wraps naturally without fixed heights.
- Mobile layouts reduce padding and heading size while preserving comfortable line spacing.
- Existing header navigation, direct hash routing, and footer remain unchanged.

## Verification

- Confirm all supplied expectation, Question A, and Question B content appears.
- Confirm the removed generic cards and commitments are absent.
- Run ESLint and the Vite production build.
- Inspect desktop and mobile layout, page-level overflow, and browser console errors.

## Out of Scope

- Rewriting the academic answers or adding citations
- File attachments or assignment downloads
- Changes to Home, Prelim, Midterm, or Finals content
