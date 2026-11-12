# Reflections Label Design

## Goal

Simplify the terminal-style label above the reflection cards so it reads only `Reflections`.

## Change

- In `src/pages/ReflectionsPage.jsx`, replace the full `$ cat ./reflections/*.md` content with `Reflections`.
- Keep the existing `folder-prompt reflections-command` element and its current layout and styling.
- Do not change the page title, reflection cards, navigation, or reflection text.

## Verification

- Confirm the label renders as `Reflections` with no `$`, `cat`, path, or `.md` text.
- Run the project build to confirm the JSX remains valid.
