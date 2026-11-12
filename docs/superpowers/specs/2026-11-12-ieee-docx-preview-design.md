# IEEE-Style Final Report Preview Design

**Date:** 2026-11-12  
**Status:** Awaiting specification approval  
**Commit policy:** Do not commit; the repository owner will commit when all portfolio content is complete.

## Goal

Make the browser preview generated from `FineTunners_RAG_Final_Project_Report (1).docx` resemble an IEEE conference paper while keeping the original DOCX file unchanged and downloadable.

## Chosen Approach

Generate a semantic, IEEE-inspired HTML preview from the current DOCX. This provides a clear two-column academic presentation on the portfolio without requiring the user to export another file. It will closely resemble the source report but is not intended to be a pixel-perfect Microsoft Word rendering.

## Layout

- Use a white paper surface with dark text to resemble a printed IEEE report.
- Center the report title above the columns.
- Present the three authors and their institutional details in a compact author grid.
- Keep the Abstract and Keywords full width beneath the author information.
- Render the main report body in two columns on desktop.
- Keep headings with the following content when possible and avoid awkward column breaks.
- Allow tables to span the full paper width so result columns remain legible.
- Switch to one column on narrow screens for mobile readability.

## Typography

- Use a Times New Roman-style serif stack for the paper content.
- Use compact body text, justified paragraphs, and restrained line spacing.
- Style section headings in compact uppercase or title-case IEEE-inspired form.
- Keep the portfolio preview header visually secondary to the report itself.

## Content Parsing

- Detect the report title and author/institution/email blocks at the beginning of the DOCX.
- Detect the Abstract and Keywords paragraphs and place them in a full-width front-matter area.
- Place the remaining paragraphs and headings inside the two-column body.
- Preserve all four report tables and render them as full-width evidence blocks in their original document order.
- Escape all source content before writing HTML.

## Scope

- Change only the Final Project Report HTML preview generation.
- Do not modify the original DOCX.
- Do not change the responsibility-matrix preview or other Finals files.
- Keep the existing preview and DOCX download buttons.
- Do not create a commit.

## Verification

- Regenerate the Final Project Report preview from the existing DOCX.
- Confirm the title, all three authors, Abstract, Keywords, main sections, and four tables are visible.
- Check desktop two-column layout and mobile single-column fallback.
- Run ESLint and a production build.
- Confirm the preview and DOCX download URLs remain available.

