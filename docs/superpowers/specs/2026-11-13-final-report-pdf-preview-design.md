# Final Project Report PDF Preview Design

**Date:** 2026-11-13  
**Status:** Awaiting specification approval  
**Commit policy:** Do not commit; the repository owner will commit after all portfolio content is complete.

## Goal

Replace the generated DOCX-based Final Project Report preview with the supplied six-page IEEE-formatted PDF so the portfolio shows the report exactly as submitted.

## Final Report Card

- Display `FineTunners_RAG_Final_Project_Report (1).pdf` directly in the existing on-page PDF viewer.
- Change the visible filename from the DOCX filename to the PDF filename.
- Show the report metadata as a six-page PDF.
- Keep one **Open PDF** action for opening the full report in a new tab.
- Do not show a DOCX download, PDF download, or any other download control.

## File Handling

- Copy the supplied PDF into `public/documents/finals/project/` using a stable web-safe filename.
- Remove the generated IEEE-style HTML report preview from the public project assets.
- Remove the deployed Final Project Report DOCX because it will no longer be linked or offered for download.
- Remove the now-unused dedicated IEEE HTML rendering code from the project preparation script.
- Keep the Member Responsibility Matrix DOCX preview unchanged.

## Verification

- Confirm the PDF contains six pages and is not encrypted.
- Confirm every PDF page renders cleanly without clipping, overlap, or unreadable tables.
- Confirm the Project report card embeds the PDF and shows only **Open PDF**.
- Confirm the old DOCX and generated HTML preview are no longer deployed.
- Run ESLint and a production build.
- Confirm no commit is created.

