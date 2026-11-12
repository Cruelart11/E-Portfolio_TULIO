# Final Project Personal Reflection Design

**Date:** 2026-11-13  
**Status:** Awaiting specification approval  
**Commit policy:** Do not commit; the repository owner will commit after all portfolio content is complete.

## Goal

Revise the Finals Project Learning Reflection so it satisfies the professor's instruction to detail Justine Bradley S. Tulio's specific team contributions and reflect on the personal takeaways and skills gained during the project.

## Source of Contributions

Use the Justine Bradley S. Tulio row in the Member Responsibility Matrix as the factual basis. The reflection will identify these responsibilities:

- Conducted CPU and T4 GPU experiments for Configurations A through F.
- Organized raw and summarized experimental results.
- Calculated GPU speedups and compared answer quality.
- Helped identify Configuration C as the recommended setting.
- Prepared and assessed the ten-question final chatbot evaluation.
- Organized the final evaluation CSV and Excel workbook.
- Consolidated findings and result tables for the IEEE report.

## Structure

Keep the existing **Learning Reflection** heading and display two paragraphs beneath it.

1. **Specific contributions:** Explain Justine's assigned responsibilities, work completed, deliverables, and why both timing and answer quality were needed to support the recommendation.
2. **Personal takeaways and skills gained:** Reflect on experimental design, data organization, performance analysis, RAG evaluation, technical documentation, evidence review, honest limitation reporting, teamwork, and accountability.

## Approved Reflection

My main responsibility in this group project was CPU-GPU experimentation and final evaluation. I conducted the tests for Configurations A through F using Google Colab CPU and T4 GPU runtimes, organized the raw and summarized results, calculated the GPU speedups, and compared the answer quality of each configuration. Based on these findings, I helped identify Configuration C as the recommended setting because it offered the strongest balance between response speed and answer quality. I also prepared and assessed the ten worker-oriented questions used in the final chatbot evaluation, organized the evaluation results in CSV and Excel files, and consolidated the findings and result tables for the IEEE report. This responsibility required careful checking because our recommendation needed to be supported by both performance measurements and the quality of the chatbot's responses.

Through this experience, I strengthened my skills in experimental design, data organization, performance analysis, RAG evaluation, and technical documentation. I learned why test conditions must remain consistent and why a faster response should not automatically be considered better without examining its retrieved evidence, citations, and factual accuracy. Reviewing partially correct and incorrect responses also taught me to report limitations honestly instead of focusing only on successful results. Working with my group improved my communication and accountability because each member's work contributed to a different part of the completed system. Most importantly, I became more confident in interpreting technical evidence, explaining limitations, and making recommendations based on actual results. These are skills I can apply to my capstone project and future work in the IT industry.

## Tone and Style

- Friendly, reflective, conversational, professional, observational, and thoughtful.
- Natural first-person voice written as Justine.
- Clear explanation with small reflective observations about why the work mattered.
- Avoid robotic, overly academic, or overly casual language.
- Do not claim responsibilities that are not supported by the matrix.

## Implementation

- Extend `TermActivity` so a reflection can be either one paragraph or an array of paragraphs without changing existing activities.
- Pass the Project reflection as the two approved paragraphs.
- Preserve the existing Description and every Project document and download card.

## Verification

- Confirm the Project Learning Reflection shows both paragraphs under one heading.
- Confirm the text uses first-person language and includes all listed personal contributions.
- Confirm other activities still render their single-paragraph reflections normally.
- Run ESLint and a production build.
- Confirm no commit is created.

