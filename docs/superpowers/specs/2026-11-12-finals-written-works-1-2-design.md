# Finals Combined Written Works 1 and 2 Design

## Goal

Populate the Finals **Written Works** folder with one combined group activity covering Written Works 1 and 2. The activity will present the group report, notebook, experiment summary workbook, and the complete ZIP data archive with clear context for the professor.

All specification and implementation changes must remain uncommitted so the user can commit the complete portfolio batch later.

## Folder and Activity Structure

- Change the Finals **Written Works** folder from empty to populated.
- Set its count to **1 combined activity**.
- Keep the box clickable and use the existing term-folder interaction.
- Activity label: **Written Works 1 and 2**.
- Activity title: **Optimizing CPU and GPU Performance of a RAG-Based Chatbot**.
- Status: **Submitted**.

## Description

This combined group written work focuses on optimizing and evaluating *Making Wage Rules Legible*, a RAG chatbot designed to help minimum-wage workers in Metro Manila understand labor information. Our group tested six configurations that varied chunk size, overlap, top-k, and execution device while keeping the source documents, Qwen3-1.7B model, prompt, and generation settings consistent. Each configuration was evaluated using Google Colab CPU and T4 GPU runtimes with a warm-up run followed by three measured repetitions for three questions of different difficulty levels. The results showed that Configuration C, using a chunk size of 1,200, an overlap of 150, and top-k of 3, provided the strongest balance. Its average response time decreased from 467.5130 seconds on CPU to 8.1125 seconds on GPU, representing a 57.63-times speedup.

## Learning Reflection

Working on this group activity helped me understand that optimizing a RAG system involves more than making its responses faster. The T4 GPU greatly reduced processing time, but the fastest configuration did not always produce the most accurate or well-supported answers. Configuration C stood out because it balanced speed, retrieval context, and answer quality more effectively than the other settings. I also observed how an OCR error in the scanned wage order affected the chatbot's interpretation even when the retrieval process was working. This reminded me that document preparation, retrieval settings, hardware performance, and evidence validation all contribute to the reliability of a RAG system. Collaborating with the group also helped me appreciate the importance of comparing results carefully instead of selecting a configuration from one measurement alone.

## Supporting Files and Display Order

Copy all four supplied files into `public/documents/finals/` using stable, URL-safe filenames. Display them in this exact order:

1. **Group Experiment Report**
   - Four-page on-page PDF preview.
   - Provide an **Open PDF** action without a duplicate file action.
2. **Google Colab Notebook**
   - Preserve the original 35-cell `.ipynb` notebook.
   - Generate a safe static HTML preview containing markdown, code, and saved outputs.
   - Provide an **Open in Colab** action pointing to `https://colab.research.google.com/github/Cruelart11/E-Portfolio_TULIO/blob/main/public/documents/finals/finetuners-rag-experiment.ipynb`.
   - Provide the normal notebook file action.
3. **Excel Experiment Results**
   - Preserve the original single-sheet `.xlsx` workbook.
   - Generate an on-page preview of its 30-row `Results` sheet.
   - Provide the Excel file action for opening the original workbook.
4. **Complete Experiment Data Archive**
   - Preserve the original ZIP archive without extracting it into the website.
   - Present it as a download-only supporting-file card rather than an iframe preview.
   - Label the action **Download Experiment Data**.
   - Explain: **This archive contains the source documents used by the RAG system and the detailed CPU and GPU experiment results for configurations A through F, including the individual Excel workbooks and raw CSV measurements.**
   - Display archive metadata: **28 files** and the archive's formatted file size.

## Components and Data Flow

- Add a reusable `ArchiveDownload` component for a titled archive card, explanatory text, metadata, and download action.
- Add the three previewable documents to a `writtenWorksDocuments` array in `FinalsPage.jsx`.
- Render the combined activity with `TermActivity` and render `ArchiveDownload` immediately after the activity's preview list within the same Written Works section.
- To keep the archive inside the same semantic activity, extend `TermActivity` with an optional `children` slot rendered after its document previews.
- Reuse `DocumentPreview`, the existing notebook preview script, and the existing spreadsheet preview script.
- Keep Exercises, PT-F1, PT-F2, and the combined Long Quiz and Finals Exam folder unchanged.

## Accessibility and Responsive Behavior

- The activity uses a unique heading ID generated from **Written Works 1 and 2**.
- Every iframe retains a descriptive title.
- The archive download uses a descriptive link label and a native `download` attribute.
- The archive card follows the existing dark document-card styling and stacks its content at the current mobile breakpoint.
- External links open in new tabs with safe link attributes.

## Error Handling

- Verify all four source files exist before copying them.
- Confirm copied source files match their originals exactly.
- Inspect the ZIP directory without extracting or executing its contents.
- Escape notebook and spreadsheet content when generating HTML previews.
- If an embedded preview is unavailable, the PDF, Colab, or source-file action remains available.

## Verification

- Confirm the Written Works folder displays **1 combined activity**.
- Confirm the label reads **Written Works 1 and 2**.
- Confirm the Description and Learning Reflection match the approved wording.
- Confirm the display order is PDF, notebook, spreadsheet, then ZIP.
- Confirm the notebook preview contains 35 cells.
- Confirm the workbook preview contains the 30-row Results sheet.
- Confirm the ZIP card explains its source documents and CPU/GPU results for configurations A-F.
- Confirm the ZIP downloads but is not embedded or extracted.
- Confirm all production asset URLs return successfully.
- Run lint and a production build.
- Confirm every change remains uncommitted.
