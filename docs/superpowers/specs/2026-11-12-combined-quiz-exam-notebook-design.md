# Combined Quiz and Exam Notebook Design

## Goal

Update the Prelim and Midterm portfolio pages to present the returned blue notebook as evidence for combined long-quiz and examination assessments.

## Folder Structure

The Prelim page replaces its separate **Long Quiz** and **Prelim Exam** folders with one folder:

**Long Quiz and Prelim Exam**

The Midterm page replaces its separate **Long Quiz** and **Midterm Exam** folders with one folder:

**Long Quiz and Midterm Exam**

Each combined folder is clickable and uses the existing single-open-folder accordion behavior. Exercises remains open by default when a term page first loads.

## Source Images

The implementation uses the images already placed by the user:

- `public/documents/prelim/prelim-quiz-exam-notebook/prelim-quiz-exam.jpg`
- `public/documents/midterm/midterm-quiz-exam-notebook/midterm-quiz-exam.jpg`

The original images remain unchanged.

## Expanded Content

Clicking a combined folder immediately displays its notebook image directly within the portfolio page. No additional preview action is required.

The expanded content appears in this order:

1. **Description** label with intentionally blank space beneath it.
2. **Learning Reflection** label with intentionally blank space beneath it.
3. A labeled **Blue Notebook** image card containing the full notebook photograph.
4. An **Open full image** action that opens the original image in a new browser tab.

There is no download-image control.

The blank Description and Learning Reflection areas are deliberate temporary content regions. They remain empty until the user provides the assessment context in a later request. No placeholder sentence such as “Coming soon” is displayed.

## Component Approach

Add a reusable notebook-evidence component shared by Prelim and Midterm. It accepts the assessment label, original filename, image path, accessible alternative text, and optional Description and Learning Reflection text.

The component uses `import.meta.env.BASE_URL` when building image URLs so the photographs work locally and beneath the `/E-Portfolio_TULIO/` GitHub Pages base path.

The existing folder component and term-page state remain responsible for opening and closing folders. Prelim removes its obsolete notice stating that the notebook had not been returned. Midterm marks only Written Works as empty; the new combined assessment folder contains notebook evidence.

## Visual and Responsive Behavior

- The photograph is visible directly after the combined folder is expanded.
- The entire portrait image is shown without cropping or distortion.
- The image scales down to the available width while retaining its natural aspect ratio.
- A maximum display width keeps the photograph readable without unnecessarily stretching it on large screens.
- The image card follows the existing dark panel, border, typography, and green-accent design.
- The Open full image action remains keyboard accessible.

## Accessibility

- Each notebook photograph has descriptive alternative text identifying its academic term and combined assessment.
- Description and Learning Reflection use semantic headings even while their content regions are empty.
- The image link has descriptive text and opens the original photograph.
- Folder buttons continue exposing their expanded state.

## Verification

Implementation is complete when:

- Prelim shows one combined Long Quiz and Prelim Exam folder.
- Midterm shows one combined Long Quiz and Midterm Exam folder.
- The former separate quiz and exam folders are removed.
- Clicking either combined folder immediately displays the correct photograph.
- Both photographs are fully visible and uncropped.
- Description and Learning Reflection labels appear with blank space beneath them and no placeholder text.
- Open full image works for both photographs.
- No download-image control appears.
- The obsolete Prelim notebook-return notice is removed.
- Existing Exercises and Written Works content continues working.
- The production build works beneath the GitHub Pages base path.
- Lint and the production build pass.
- Desktop and mobile layouts have no horizontal overflow.
