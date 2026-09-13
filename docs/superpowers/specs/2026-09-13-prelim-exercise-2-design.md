# Prelim Exercise 2 Design

## Goal

Add Justine Bradley Tulio's second exercise to the existing Prelim page using the same clear, professor-facing presentation established for Exercise 1.

## Exercise Identity

The activity title is displayed exactly as:

**PT-P2 - Neural Network Training and Testing (HyperParameters)**

It appears beneath Exercise 1 inside the expanded Exercises folder. The folder count changes from `1 activity` to `2 activities`. Exercise 1, Long Quiz, and Prelim Exam remain unchanged.

## Source Files and Order

Exercise 2 presents the supplied files in this order:

1. `Justine Bradley_IEEE_Report (1).pdf` — a six-page IEEE report.
2. `Justine_Bradley_Neural_Network_Training_Testing (1).ipynb` — a Google Colab/Jupyter notebook.
3. `Justine Bradley_FFBP_Training_Log_Template 1.xlsx` — an Excel training log.

The files are copied into the portfolio under stable, web-safe filenames. The originals in the Downloads folder remain unchanged.

## On-Page Previews

Each file appears in a labeled document-viewer card consistent with Exercise 1.

- The IEEE report uses an embedded PDF viewer with scrolling through all six pages.
- The notebook is converted to a static HTML preview that displays its Markdown, code cells, and saved outputs on the page.
- The Excel workbook is converted to a static HTML table preview that displays its complete used worksheet area inside a bounded, scrollable viewer.

Each viewer includes an **Open full preview** action. The PDF includes an **Open PDF** action, the notebook includes **Open in Colab** and **Download notebook** actions, and the workbook includes **Download Excel file**.

## Google Colab Behavior

The notebook is stored in the repository and the **Open in Colab** action points to its location on the `main` branch of `Cruelart11/E-Portfolio_TULIO`. The link becomes available to the professor after the implementation commit is pushed to GitHub. If repository access prevents Colab from loading it, the on-page HTML preview and direct notebook download remain available.

The notebook preview is read-only. Interactive execution occurs only after opening the notebook in Google Colab.

## Reuse and Layout

The existing reusable document preview is extended to support notebook-specific actions rather than duplicating viewer markup. Exercise 2 uses the existing Prelim typography, cards, badges, spacing, and accordion structure.

Large previews are lazy-loaded. Desktop viewers provide comfortable reading height. On mobile, each viewer remains inside the page width; wide notebook output and spreadsheet data scroll within their own viewer rather than creating horizontal page overflow.

## Reliability and Accessibility

- Viewer titles identify both the activity and document type.
- File actions use descriptive link text and remain keyboard accessible.
- The notebook's static preview remains readable if Google Colab is unavailable.
- The original PDF, notebook, and workbook remain accessible through direct links.
- The document heading order remains semantic.

## Verification

Implementation is complete when:

- Exercise 2 appears after Exercise 1 with the exact approved title.
- Exercises shows `2 activities`.
- The PDF, notebook, and Excel previews appear in the approved order.
- The PDF viewer loads all six pages.
- The notebook preview includes Markdown, code, and any saved outputs from the supplied file.
- The Open in Colab and original-file links use the correct repository or local asset paths.
- The spreadsheet preview reflects the complete used worksheet area and stays contained on mobile.
- Exercise 1, Long Quiz, and Prelim Exam still work as before.
- Lint and the production build pass.
- Desktop and mobile checks show no horizontal page overflow.
