# Midterm RAG Exercise Design

## Goal

Add the Midterm section to Justine Bradley Tulio's e-portfolio using the established Prelim presentation. The first Midterm exercise must clearly present its report, notebook, description, and learning reflection while keeping future activity folders clickable and empty.

## Navigation and Route

The existing disabled Midterm navigation label becomes an active link to `#/midterm`. The route uses the page title **Midterm | Justine Bradley Tulio** and renders a dedicated `MidtermPage`.

Finals remains disabled and unchanged.

## Page Structure

The page follows the same header, terminal path, introductory heading, folder cards, spacing, and responsive behavior as Prelim. The terminal path is `~/portfolio/midterm`, and the introductory copy identifies the page as the location for midterm activities and assessments.

The folder order is:

1. Exercises — `1 activity`
2. Written Works — no count
3. Long Quiz — no count
4. Midterm Exam — no count

Exercises is open by default. All four folders remain clickable and use the existing single-open-folder accordion behavior.

Written Works, Long Quiz, and Midterm Exam contain no activity, message, notice, or placeholder. When one is selected, its border and chevron reflect the open state, but no empty content panel or unnecessary blank space is displayed.

## Exercise 1

The activity label is **Exercise 1**, its status is **Submitted**, and its title is displayed exactly as:

**PT-M1 (Building and Evaluating a RAG Chatbot)**

It uses the same activity hierarchy as the updated Prelim exercises: title, Description, Learning Reflection, and document previews.

## Description and Learning Reflection

The **Description** explains that the activity builds and evaluates a domain-specific Retrieval-Augmented Generation chatbot for Pasig City disaster preparedness. It identifies document loading, chunking, embeddings, ChromaDB retrieval, a Groq-hosted language model, and hallucination testing as the main parts of the work.

The **Learning Reflection** is written in Justine's established first-person style. It explains that the activity improved his understanding of how retrieval grounds generated answers in selected source material. It also discusses:

- how chunk size, overlap, embeddings, and top-k retrieval affect the context given to the model;
- resolving package compatibility issues and replacing a deprecated model with a supported alternative;
- comparing a restricted baseline configuration with a higher-temperature configuration that removed the fallback instruction; and
- learning that retrieval and clear prompt restrictions must work together to reduce unsupported answers.

The reflection remains concise enough for the portfolio and does not claim outcomes beyond those documented in the submitted files.

## Source Files and Order

Exercise 1 presents the supplied files in this exact order:

1. `Lab Exercise PT-M1(RAG)_TULIO (1).pdf` — a three-page IEEE report.
2. `Lab_Exercise_PT_M1(RAG)_TULIO (2) (1).ipynb` — a 24-cell Jupyter/Google Colab notebook.

The files are copied into `public/documents/midterm/` under stable, web-safe filenames. The originals in Downloads remain unchanged.

## On-Page Previews

The IEEE report uses the existing embedded PDF viewer. The professor can scroll through all three pages, open the full preview, or use **Open PDF**.

The notebook is converted into a static HTML preview that displays its Markdown, code cells, and saved outputs directly on the Midterm page. It includes **Open full preview**, **Open in Colab**, and **Download notebook** actions. The Colab action points to the notebook's location on the `main` branch of `Cruelart11/E-Portfolio_TULIO` and becomes usable after the implementation is pushed to GitHub.

The on-page notebook preview is read-only. Interactive execution occurs only in Google Colab. If repository access prevents Colab from opening the file, the HTML preview and direct download remain available.

## Component Approach

The implementation reuses `PrelimFolder` and `DocumentPreview` because their behavior is not specific to Prelim. The shared activity presentation is extracted from `PrelimPage` into a reusable component so both term pages render Description, Learning Reflection, status, and document lists consistently.

`MidtermPage` owns only Midterm data and open-folder state. This keeps the new term independent without duplicating the complete Prelim page or introducing a larger term-page abstraction before it is needed.

The folder component gains explicit support for an empty folder state. Empty folders remain interactive but do not fall back to the existing **Files will be added soon** message and do not display an empty padded panel.

## Accessibility and Responsive Behavior

- The Midterm navigation link communicates the active page.
- Folder buttons remain keyboard accessible and expose `aria-expanded`.
- Activity headings and Description and Learning Reflection labels use semantic heading relationships.
- PDF and notebook iframe titles identify their contents.
- File actions use descriptive labels.
- The page and preview cards do not overflow horizontally on mobile.

## Verification

Implementation is complete when:

- Midterm is an active navigation destination and the correct page title is applied.
- The four folder cards appear in the required order.
- Exercises opens by default and contains only the approved Exercise 1.
- The other three folders are clickable and reveal no placeholder or blank content panel.
- The title exactly matches `PT-M1 (Building and Evaluating a RAG Chatbot)`.
- Description and Learning Reflection appear before the files.
- The PDF appears first, loads all three pages, and opens correctly.
- The notebook appears second, renders its static preview, opens from GitHub in Colab, and downloads correctly.
- Existing Home, Course Expectation, and Prelim pages remain unchanged in behavior.
- Lint and the production build pass.
- Desktop and mobile checks show readable content with no horizontal page overflow.
