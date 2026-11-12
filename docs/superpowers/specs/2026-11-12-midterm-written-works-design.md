# Midterm Written Works Design

## Goal

Populate the Midterm **Written Works** folder with the two completed activities in their correct sequence. Written Work 1 links to the deployed e-portfolio, while Written Work 2 presents the group project proposal with its supporting PDF and reflective context.

All implementation changes and this specification must remain uncommitted so the user can commit the complete update later.

## Folder Structure

The Midterm **Written Works** folder will show a count of **2 activities** and will no longer use the empty-folder state.

### Written Work 1 - E-Portfolio Submission

- Display the activity number as **Written Work 1**.
- Use the title **E-Portfolio Submission**.
- Present a compact submission card rather than embedding the portfolio recursively.
- Include a **View Submitted E-Portfolio** link that opens the deployed site in a new tab:
  `https://cruelart11.github.io/E-Portfolio_TULIO/`
- This activity does not require a document preview, Description, or Learning Reflection because its submitted output is the e-portfolio link itself.

### Written Work 2 - WW-M2: Project Proposal

- Display the activity number as **Written Work 2**.
- Use the title **WW-M2: Project Proposal**.
- Identify the proposal subject as *Making Wage Rules Legible: A RAG Chatbot for Minimum-Wage Workers in Metro Manila*.
- Show the supplied four-page PDF directly on the page using the portfolio's existing document-preview pattern.
- Provide an **Open PDF** action for full-page viewing.
- Do not add a download control.

## Written Work 2 Description

This group written work presents a project proposal for a RAG chatbot designed to help minimum-wage workers in Metro Manila understand their statutory monetary benefits. We narrowed the topic to minimum wage, overtime pay, holiday pay, and 13th-month pay, connected the project to SDG 8, and identified authoritative sources from DOLE and NWPC. The proposal also outlines an evaluation plan using realistic questions, answer accuracy, and unsupported claim rate to examine whether the chatbot can provide reliable, evidence-supported responses while minimizing hallucinations.

## Written Work 2 Learning Reflection

Working on this proposal helped me understand why defining a focused problem is just as important as selecting the technology. A chatbot covering every labor concern would be difficult to manage, so limiting the project to one region and a specific set of monetary benefits made the research clearer and more realistic. I also learned that a useful RAG system depends not only on the language model, but also on trustworthy source documents, carefully prepared reference answers, and evaluation measures that can reveal unsupported claims. Collaborating with the group encouraged me to think more carefully about how technical decisions may affect people who rely on the system for important information.

## Components and Data Flow

- `MidtermPage.jsx` will define the two written-work entries and render them inside the existing Written Works folder.
- Written Work 2 will use the existing `TermActivity` and `DocumentPreview` presentation pattern.
- Written Work 1 will use a small, purpose-built link card so the deployed portfolio is not embedded inside itself.
- The supplied PDF will be copied into `public/documents/midterm/` with a stable, URL-safe filename and referenced through `import.meta.env.BASE_URL` via the existing preview component.
- `DocumentPreview` will support an option that hides the local file action, allowing the proposal to offer full preview access without a download-style control.

## Accessibility and Responsive Behavior

- Both activities will retain semantic headings and clear activity labels.
- External links will open in a new tab with safe link attributes.
- The PDF iframe will retain its accessible title and existing responsive dimensions.
- The portfolio link card will use visible focus and hover styles consistent with the current theme.

## Error Handling

- The source PDF must exist before it is copied.
- The production build must contain the copied PDF at its expected public URL.
- If browser PDF embedding is unavailable, the **Open PDF** action still gives the professor direct access to the document.

## Verification

- Run the linter and production build.
- Confirm the Midterm Written Works folder displays two activities and opens normally.
- Confirm Written Work 1 points to the exact deployed e-portfolio URL.
- Confirm Written Work 2 displays the correct title, Description, Learning Reflection, and four-page PDF.
- Confirm the PDF has an **Open PDF** action and no download control.
- Confirm all changes remain uncommitted.
