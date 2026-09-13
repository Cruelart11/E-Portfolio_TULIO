# Prelim Exercise Files Design

## Goal

Update the Prelim page so it presents Justine Bradley Tulio's actual preliminary-term work clearly to the professor. Exercise 1 must make all three submitted files readable from the page while preserving access to the original documents.

## Page Overview

The existing Prelim heading remains, but the term label `Weeks 1–6` and the summary statistics for `Sections`, `Items`, and `Graded` are removed. The current placeholder exercises and descriptions are also removed because they do not represent the submitted coursework.

The page keeps the established dark, terminal-inspired portfolio style and remains responsive on desktop and mobile.

## Exercise 1

The Exercises section contains one real activity titled **PT-P1: Deep Learning (Neural Networks)**. It presents these source files:

1. `Exercise PTP1 – TULIO (2) (1).pdf` — a five-page IEEE-format report titled “Customer Sentiment Classification Using a No-Code Deep Learning Neural Network.”
2. `Exercise PTP1 (SS)– TULIO (1).pdf` — a two-page supporting screenshots document.
3. `Exercise PTP1 – TULIO (1).xlsx` — a workbook with one worksheet containing 83 rows and 17 columns.

The original files are copied into a stable public assets directory in the portfolio using web-safe, descriptive filenames. The originals in the Downloads folder remain unchanged.

## Document Presentation

Each document appears inside its own clearly labeled viewer card.

- The two PDFs use embedded browser PDF viewers so every page can be scrolled and read on the website.
- The spreadsheet is represented by an HTML table generated from its worksheet data. This avoids relying on browser support for native Excel previews and keeps the worksheet readable without downloading it.
- Each viewer includes an **Open full file** control. The spreadsheet also includes a **Download Excel file** control so the original workbook can be inspected in Excel.
- If a browser cannot display an embedded PDF, the viewer provides a direct link to open the original file.

Desktop viewers receive enough height for comfortable reading. On small screens, their height and spacing are reduced while retaining readable controls and avoiding horizontal page overflow. The spreadsheet preview may scroll horizontally inside its own bounded viewer rather than widening the page.

## Long Quiz and Prelim Exam

The existing Quiz entry is renamed **Long Quiz**. Long Quiz and Prelim Exam remain visible as separate sections without attached files. Each displays a concise availability notice explaining:

> This activity was completed face-to-face in a blue notebook. The notebook has not yet been returned because continuous rain caused class suspensions.

The wording is factual and does not imply that a digital submission is missing.

## Components and Data

`PrelimPage` owns the real section data and renders the revised overview. The existing expandable folder interaction may be retained for Exercises, Long Quiz, and Prelim Exam. A focused document-viewer component can render file labels, embedded PDF fallbacks, spreadsheet previews, and file actions consistently.

The spreadsheet preview data is stored as static site data generated from the supplied workbook. The website does not edit, calculate, or overwrite the workbook.

## Accessibility and Reliability

- Every embedded document receives a descriptive title.
- File controls use clear link text and remain keyboard accessible.
- Viewer cards use semantic headings in a logical order.
- The spreadsheet table includes accessible row and column structure.
- Long documents remain inside bounded viewers to protect the surrounding layout.
- Missing or unsupported previews fall back to links to the original files.

## Verification

Implementation is complete when:

- `Weeks 1–6`, `Sections`, `Items`, and `Graded` are absent.
- The old placeholder activities are absent.
- The three Exercise 1 files are visible through on-page previews.
- Both PDFs load and expose all their pages through embedded scrolling.
- The worksheet preview reflects the supplied workbook and remains contained on mobile.
- Original-file links work.
- Long Quiz and Prelim Exam show the approved notebook notice.
- Lint and the production build pass.
- Desktop and mobile browser checks show no horizontal page overflow.
