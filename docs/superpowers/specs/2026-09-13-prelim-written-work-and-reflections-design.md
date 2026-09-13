# Prelim Written Work and Reflections Design

## Goal

Extend the Prelim page with a professor-facing **Written Works** folder and make the purpose and learning outcome of every displayed activity easier to understand through clearly labeled **Description** and **Learning Reflection** sections.

## Page Structure

The folder order is:

1. Exercises
2. Written Works
3. Long Quiz
4. Prelim Exam

The Written Works folder appears directly below Exercises and shows `1 written work` as its count. It uses the same accessible accordion behavior, visual styling, and keyboard interaction as the existing folders. Opening Written Works closes the currently open folder, consistent with the page's existing single-open-folder behavior.

## Written Work 1

The activity is labeled **Written Work 1** and titled **Natural Language Processing Concepts**, matching the subject of the supplied documents.

Its documents appear in this exact order:

1. `ieee_report_Tulio.pdf` — a two-page IEEE reflection report.
2. `Step 1 - 4_TULIO_NLP.pdf` — a five-page record of Steps 1–4 of the NLP learning activity.

Both source files are copied into `public/documents/prelim/` under stable, web-safe filenames. The original files in Downloads remain unchanged. Each document uses the existing embedded PDF viewer and provides **Open full preview** and **Open PDF** actions so the professor can read every page on the portfolio or open the original PDF in a separate view.

## Description and Learning Reflection

Exercise 1, Exercise 2, and Written Work 1 each contain two visibly labeled sections between the activity title and its document previews:

- **Description** briefly explains the task and identifies the submitted evidence.
- **Learning Reflection** uses a first-person voice to explain the main knowledge, practical insight, or model-development lesson gained from the work.

The writing follows Justine's supplied reflection style: personal, specific to the activity, and focused on what was learned through completing the work. It must not claim experiences or results that are not supported by the submitted files.

### Exercise 1 Content Direction

The description explains that the activity applies a deep learning neural network to customer sentiment classification and is supported by an IEEE report, screenshots, and workbook data.

The reflection discusses learning how data preparation, neural-network training, testing, and documented results work together when building a sentiment classifier. It emphasizes that model performance depends on both the quality of the data and careful evaluation rather than accuracy alone.

### Exercise 2 Content Direction

The description explains that the activity explores neural-network training and testing under different hyperparameter configurations, with evidence in the IEEE report, Colab notebook, and FFBP training log.

The reflection follows the user's example by discussing the importance of tuning values rather than assuming one configuration will perform best. It highlights comparing training and testing behavior, recognizing overfitting or underfitting, and finding a balanced configuration that produces more consistent results.

### Written Work 1 Content Direction

The description explains that the written work documents completion of an NLP learning activity and presents an IEEE reflection on preprocessing, text representation, and contextual language techniques.

The reflection summarizes the progression from a general understanding of NLP to a clearer understanding of its pipeline. It notes that preprocessing choices can affect meaning, contrasts statistical representations such as TF-IDF with semantic embeddings, and emphasizes choosing techniques according to the problem instead of automatically selecting the newest method.

## Component and Styling Approach

The existing activity component is generalized so it can render either `Exercise` or `Written Work` labels while retaining the submitted badge, semantic heading structure, and document list. A small reusable content block renders the Description and Learning Reflection labels consistently for all three activities.

The new sections remain visually part of their activity card rather than becoming separate large cards. Labels use the existing green accent; body text uses the established muted foreground color and readable line height. Spacing separates the two sections without making the activity unnecessarily tall.

The implementation reuses `PrelimFolder` and `DocumentPreview`. No new document-viewer behavior is required.

## Accessibility and Responsive Behavior

- Activity headings and labeled content use semantic HTML.
- Folder controls remain keyboard accessible and expose their expanded state.
- PDF viewer titles identify both the written work and document.
- Links have descriptive labels rather than filename-only actions.
- PDF cards remain within the page width on mobile and preserve the existing contained scrolling behavior.

## Verification

Implementation is complete when:

- Written Works appears immediately after Exercises and reports `1 written work`.
- Written Work 1 displays the approved title and both PDFs in the required order.
- Both PDFs load in their on-page viewers and their Open PDF actions work.
- Exercise 1, Exercise 2, and Written Work 1 each show Description and Learning Reflection labels with activity-specific text.
- Exercise 1 and Exercise 2 retain their existing titles, files, and file order.
- Long Quiz and Prelim Exam retain their existing notebook notices.
- Folder accordion behavior remains correct.
- Lint and the production build pass.
- Desktop and mobile checks show readable content with no horizontal page overflow.
