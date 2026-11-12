# Finals PT-F1 Design

## Goal

Enable the Finals section of the e-portfolio and present the first Finals exercise with its report, notebook, spreadsheet, Description, and Learning Reflection. The Finals page will follow the established Prelim and Midterm folder design.

All specification and implementation changes must remain uncommitted so the user can commit the complete batch later.

## Navigation and Routing

- Add a `finals` route with the hash `#/finals` and a Finals-specific document title.
- Register a new `FinalsPage` in the application page map.
- Replace the disabled Finals navigation label with the active route generated from the route configuration.

## Finals Folder Structure

The Finals page will contain three folder boxes:

1. **Exercises**
   - Count: **1 activity**
   - Open by default.
   - Contains PT-F1 and its three supporting files.
2. **Written Works**
   - Clickable and empty.
   - Must not display a placeholder message.
3. **Long Quiz and Finals Exam**
   - One combined clickable box.
   - Must not display a placeholder message.

Empty folders will retain the same folder-button interaction and visual treatment used by the existing term pages, while rendering no placeholder content.

## Exercise Content

- Activity label: **Exercise 1**
- Activity title: **PT-F1: Optimizing Chunk Size and Overlap**
- Status: **Submitted**

### Description

This exercise focuses on building and examining a FAISS-based Retrieval-Augmented Generation system using the 2024 Workers' Statutory Monetary Benefits Handbook as its knowledge source. I divided the handbook into overlapping chunks using a size of 1,000 characters and an overlap of 200, generated embeddings with all-MiniLM-L6-v2, stored them in FAISS, and reranked the retrieved passages before using Qwen3-1.7B to generate document-grounded answers. The activity also included an Excel inspection of 217 generated chunks and tests using easy, average, and difficult questions to observe how retrieval quality and question complexity affect the final response.

### Learning Reflection

Working on this activity helped me understand that successful retrieval involves more than simply placing document text into a vector store. Chunk size and overlap affect how much context remains connected, while reranking helps separate closely related labor rules that use similar wording. I observed that the system answered the easy and average questions correctly, but it struggled with the difficult question even though the relevant passages were retrieved. This showed me that good retrieval does not always guarantee correct reasoning, especially when several formulas and conditions must be combined. It also made me more aware of why inspecting chunks, source pages, and diagnostic results matters when improving a RAG system.

## Supporting Files and Display Order

All source files will be copied into `public/documents/finals/` using stable, URL-safe filenames. The exercise will show full on-page previews in this exact order:

1. **IEEE Report PDF**
   - Four-page PDF preview.
   - Provide an **Open PDF** action.
2. **Google Colab Notebook**
   - Preserve the original `.ipynb` file.
   - Generate a readable static HTML preview from all 68 cells, including markdown, code, and saved outputs.
   - Provide an **Open in Colab** action pointing to `https://colab.research.google.com/github/Cruelart11/E-Portfolio_TULIO/blob/main/public/documents/finals/pt-f1-optimizing-chunk-size-overlap.ipynb`.
   - Provide a notebook file action consistent with earlier exercises.
3. **Excel Chunk Inspection**
   - Preserve the original `.xlsx` file.
   - Generate a readable static HTML preview of the `Generated_Chunks` sheet, containing its seven columns and 217 chunk rows.
   - Provide an Excel file action consistent with earlier exercises.

## Components and Data Flow

- `FinalsPage.jsx` will define the folders, PT-F1 content, and document metadata.
- The existing `PrelimFolder`, `TermActivity`, and `DocumentPreview` components will provide the layout and interactions.
- Route data in `routes.js` will be the single source for the Finals navigation item.
- `App.jsx` will map the Finals route to `FinalsPage`.
- Existing preview-generation patterns and styles will be reused; unrelated pages will not be refactored.

## Accessibility and Responsive Behavior

- Folder controls will use their existing expanded-state semantics.
- Each preview iframe will have a descriptive title.
- External links will open in a new tab with safe link attributes.
- PDF, notebook, and spreadsheet previews will use the existing responsive document-card layout.
- The Finals page will remain usable at the mobile breakpoint already supported by the portfolio.

## Error Handling

- Verify all three source files exist before copying them.
- Preserve the original files without editing their contents.
- Ensure generated HTML escapes source content so notebook and spreadsheet data cannot break the preview markup.
- If an embedded preview is unavailable in a browser, the corresponding full-preview or source-file action will remain available.

## Verification

- Confirm the Finals tab is active and routes to `#/finals`.
- Confirm the page shows the three approved folder boxes.
- Confirm Exercises is open by default and displays PT-F1.
- Confirm Written Works and Long Quiz and Finals Exam show no placeholder content.
- Confirm the file order is PDF, notebook, then spreadsheet.
- Confirm all three on-page previews load from the production base path.
- Confirm the notebook's Open in Colab URL points to the copied notebook in the repository.
- Run lint and a production build.
- Confirm the production build contains all three source files and both generated HTML previews.
- Confirm all changes remain uncommitted.
