# Finals Project Section Design

**Date:** 2026-11-12  
**Status:** Awaiting specification approval  
**Commit policy:** Do not commit; the repository owner will commit after all portfolio content is complete.

## Goal

Add a fourth expandable folder named **Project** to the Finals page. The section will present the FineTunners final RAG chatbot project in a form that the professor can review directly in the portfolio, while preserving the original source files for download.

## Placement and Interaction

- Add **Project** after **Written Works** and before **Long Quiz and Finals Exam**.
- Use the existing Finals folder interaction and visual language.
- The folder remains closed until selected and opens to one project activity.
- Folder metadata will identify it as one group project.

## Project Activity

**Type:** Project  
**Number:** 1  
**Title:** Making Wage Rules Legible: RAG Chatbot for Minimum-Wage Workers

The activity will use the same submitted-state heading, Description section, Learning Reflection section, document preview cards, and responsive layout already used by the Finals exercises and written work.

### Description

This group project presents *Making Wage Rules Legible*, a retrieval-augmented generation chatbot designed to make Philippine wage rules and statutory benefits easier for minimum-wage workers in Metro Manila to understand. Our group built the system using Qwen3-1.7B, a Chroma vector database, and three official labor-related documents. We compared six retrieval configurations by changing chunk size, overlap, and top-k, then tested their performance using Google Colab CPU and T4 GPU runtimes. After selecting Configuration C for its balance of response quality and speed, we evaluated the completed chatbot using ten worker-focused questions. The project files document the complete process, including the experiment notebook and results, final chatbot evaluation, project report, member responsibilities, integrity statement, source documents, and reproducibility materials.

### Learning Reflection

Working on this project helped me see how the different parts of a RAG system affect one another. Retrieval settings, document quality, model behavior, and hardware performance all influenced the answers produced by the chatbot. I learned that a faster response is not automatically a better response, especially when the retrieved evidence is incomplete or the model interprets a legal provision incorrectly. Conducting the CPU and GPU experiments and reviewing the final chatbot responses encouraged me to look beyond the output and examine the supporting sources, citations, and timing measurements carefully. The group work also showed me the value of documenting each member's contribution and reporting the project's limitations honestly. This made responsible AI use feel practical rather than abstract because transparency, reproducibility, and human review were necessary throughout the project.

## Important Files Displayed Individually

The documents will appear in the following order.

1. **Final Project Report**
   - Source: `FineTunners_RAG_Final_Project_Report (1).docx`
   - Present a browser-friendly on-page preview generated from the DOCX content.
   - Keep the original DOCX available for download.
   - Display the attached filename so the source is identifiable.

2. **RAG Experiment Notebook**
   - Source inside `Finetunner_Chunking Experiments.zip`: `Finetuners_RAG_Experiment_Notebook.ipynb`
   - Present a rendered notebook preview.
   - Provide notebook download and **Open in Colab** actions.

3. **RAG Experiment Results**
   - Source inside `Finetunner_Chunking Experiments.zip`: `Finetuners_RAG_Experiment_Results.xlsx`
   - Present a readable HTML workbook preview.
   - Provide the original workbook as a download.

4. **Final Chatbot and Evaluation Notebook**
   - Source inside `Finetunners_Source_Code_and_Reproducibility_Package.zip`: `FineTunners_RAG_Final_Chatbot_and_Evaluation_COMPLETE.ipynb`
   - Present a rendered notebook preview.
   - Provide notebook download and **Open in Colab** actions.

5. **Final Chatbot Evaluation Data**
   - Source inside `Finetunners_Chatbost_Response_Evaluation 1.zip`: `Final_Chatbot_Evaluation_Assessed.csv`
   - Present a readable HTML table preview of the CSV.
   - Provide the original CSV as a download.

6. **Final Chatbot Response Evaluation**
   - Source inside `Finetunners_Chatbost_Response_Evaluation 1.zip`: `Final_Chatbot_Response_Evaluation_Assessed.xlsx`
   - Present a readable HTML workbook preview.
   - Provide the original workbook as a download.

7. **Member Responsibility Matrix**
   - Source: `FineTunners_Member_Responsibility_Matrix.docx`
   - Present a browser-friendly on-page preview of the responsibility table.
   - Keep the original DOCX available for download.

8. **Project Integrity and AI Usage Statement**
   - Source: `FineTunners_Project_Integrity_and_AI_Usage_Statement.pdf`
   - Embed the PDF directly for on-page reading.
   - Provide the normal full-preview action without adding an unnecessary duplicate download control.

## ZIP Download Cards

Show four distinct download cards below the important-file previews.

1. **Chatbot Response Evaluation Package**
   - File: `Finetunners_Chatbost_Response_Evaluation 1.zip`
   - Explain that it contains the assessed CSV and Excel evaluation files.

2. **Source Code and Reproducibility Package**
   - File: `Finetunners_Source_Code_and_Reproducibility_Package.zip`
   - Explain that it contains the completed chatbot notebook and the three source labor documents used by the RAG system.

3. **Experiment Logs and Checkpoints**
   - File: `Finetunners_Experiment_Logs_and_Checkpoints.zip`
   - Explain that it contains the README, source documents, and detailed CPU/GPU results for configurations A through F.

4. **Chunking Experiments Package**
   - File: `Finetunner_Chunking Experiments.zip`
   - Explain that it contains the RAG experiment notebook and consolidated experiment-results workbook.

Each card will retain its original ZIP filename, show a useful size/file summary, and use a clear **Download ZIP package** action.

## File and Preview Handling

- Copy the three directly attached documents into `public/documents/finals/project/` using stable web-safe filenames.
- Extract only the five important nested files required for individual display; do not unpack unrelated archive contents into the site.
- Copy all four original ZIP archives into the same public project directory unchanged.
- Generate static HTML previews for notebooks, DOCX content, CSV data, and workbooks so GitHub Pages can serve them without a backend.
- Keep original file formats available alongside their previews.
- Construct Colab links from the public GitHub repository path.
- Use relative paths through Vite's configured base URL so local development and GitHub Pages both work.

## Component Changes

- Extend the Finals folder data with the Project entry.
- Add the Project branch and project document metadata in `FinalsPage.jsx`.
- Reuse `TermActivity` and `DocumentPreview`.
- Extend `ArchiveDownload` with a configurable action label so the existing experiment archive remains unchanged while Project cards can say **Download ZIP package**.
- Add only minimal CSS needed for a four-card archive list and any preview-specific sizing; preserve the current design system and mobile behavior.

## Accessibility and Usability

- Every preview iframe receives a descriptive title.
- All download and external actions use clear labels.
- Notebook Colab links open in a new tab.
- ZIP cards explain their contents before the download action.
- Long tables remain usable through the generated preview's horizontal scrolling.
- Document order follows the user's requested review sequence.

## Verification

- Run ESLint and the production build.
- Confirm the Finals page renders all four folders and Project opens correctly.
- Confirm all eight individual preview URLs return successfully in a local production preview.
- Confirm all original-file download URLs and four ZIP URLs return successfully.
- Confirm both Colab URLs point to the correct repository notebook paths.
- Check the generated notebook, spreadsheet, CSV, and DOCX previews for meaningful visible content.
- Check Project layout at desktop and narrow viewport widths.
- Run `git status` and verify that no commit was created.

