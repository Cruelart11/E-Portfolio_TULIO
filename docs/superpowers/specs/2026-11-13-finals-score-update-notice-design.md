# Finals Score Update Notice Design

**Date:** 2026-11-13  
**Status:** Awaiting specification approval  
**Commit policy:** Do not commit; the repository owner will commit after all portfolio content is complete.

## Goal

Add a clear status notice inside the Finals **Long Quiz and Finals Exam** folder explaining that the assessment scores are not yet available.

## Placement

- Keep the existing folder name and description unchanged.
- Display the notice immediately inside the folder when it is opened.
- Do not create a placeholder activity, score field, image viewer, Description section, or Learning Reflection section.
- Use a compact static notice card that matches the existing dark portfolio style.

## Approved Content

**Score Update**

The scores for the combined Finals Long Quiz and Exam will be announced after all blue notebooks have been checked.

## Visual Treatment

- Use a bordered panel with the existing dark background and green accent.
- Present **Score Update** as a small monospace heading.
- Show the message beneath it in readable muted text.
- Keep the card responsive and accessible on narrow screens.

## Verification

- Confirm the notice appears only in the Finals combined assessment folder.
- Confirm the folder remains clickable and the notice is visible when opened.
- Confirm there is no score number, download control, or placeholder text.
- Run ESLint and a production build.
- Confirm no commit is created.

