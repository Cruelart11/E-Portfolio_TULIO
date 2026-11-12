# Assessment and Overall Reflections Design

**Date:** 2026-11-13  
**Status:** Awaiting specification approval  
**Commit policy:** Do not commit; the repository owner will commit after all portfolio content is complete.

## Goal

Complete the Prelim and Midterm combined-assessment content and add a new Reflections page containing the approved overall Prelim, Midterm, and Finals reflections.

## Prelim Combined Long Quiz and Exam

### Description

This combined Prelim Long Quiz and Exam was completed face-to-face in a blue notebook. The assessment covered foundational concepts in Natural Language Processing and machine learning, including word embeddings, cosine similarity, the main parts of an artificial neuron, and the difference between parameters and hyperparameters. The notebook images serve as evidence of the written assessment and the score recorded for this period.

### Score

Display **Score: 18** in the Blue Notebook card header directly below the image filename. Do not add a denominator because the total possible score is unknown.

### Learning Reflection

The combined Prelim Long Quiz and Exam helped me review and strengthen my understanding of the basic concepts of Natural Language Processing and their connection to machine learning. I learned how word embeddings represent words as numerical vectors and how cosine similarity can be used to measure how closely those vectors are related. I also reviewed the parts of an artificial neuron, including its inputs, weights, summation, and activation function, and how they work together to process information and produce an output. Another important takeaway was understanding the difference between parameters and hyperparameters. Parameters are learned and adjusted by the model during training, while hyperparameters are selected by the modeler to guide the training process. Looking at these concepts together helped me see more clearly how text can be transformed into numerical information and processed by a machine learning model. Overall, the assessment gave me an opportunity to test what I understood, recognize which topics needed more review, and strengthen my foundation in NLP and neural networks.

## Midterm Combined Long Quiz and Exam

### Description

This combined Midterm Long Quiz and Exam was completed face-to-face in a blue notebook. The assessment focused on Large Language Models, their differences from traditional machine learning models, and the role of chunk size and overlap in Retrieval-Augmented Generation. The notebook images document the written assessment and the score recorded for this period.

### Score

Display **Score: 15** in the Blue Notebook card header directly below the image filename. Do not add a denominator because the total possible score is unknown.

### Learning Reflection

The combined Midterm Long Quiz and Exam helped me test and strengthen my understanding of Large Language Models and how they differ from traditional machine learning models. I learned that LLMs can understand and generate human-like language across a variety of tasks, while traditional machine learning models are usually developed for more specific tasks, such as classification and prediction. I also reviewed how chunk size and overlap affect Retrieval-Augmented Generation. Chunk size determines how much text is placed in each segment, while overlap repeats part of the text between neighboring chunks to preserve context and reduce the chance of losing important information. This helped me understand that the quality of a RAG system's responses depends not only on the language model, but also on how its source information is divided and prepared for retrieval. Overall, the assessment gave me a clearer understanding of how LLMs process information and why careful chunking can help produce more relevant and accurate responses.

## Notebook Evidence Component

- Add an optional `score` property.
- Render the score only when provided.
- Place it below the filename in the Blue Notebook card header.
- Style it as a visible but restrained green monospace line.
- Preserve the existing on-page image and **Open full image** action.
- Keep the existing Description and Learning Reflection blocks.

## Reflections Page

### Navigation and Route

- Add a **Reflections** navigation tab immediately after **Finals**.
- Use the hash route `#/reflections`.
- Add the page to the application page-component map.
- Use the page title `Reflections | Justine Bradley Tulio`.

### Layout

- Use the existing terminal-inspired page style and page width.
- Display a page heading and a short introduction explaining that the page summarizes learning across the three grading periods.
- Show three stacked, non-clickable cards in this order: Prelim, Midterm, Finals.
- Display each approved reflection immediately; do not use accordions, folders, tabs, or hidden content.
- Preserve comfortable paragraph width, spacing, and mobile readability.

### Prelim Overall Reflection

The Prelim period helped me build a stronger foundation in deep learning, neural networks, and Natural Language Processing. Through the exercises, I learned how data preparation, training, testing, and hyperparameter selection affect a model's performance. Comparing different configurations also helped me understand how overfitting and underfitting can happen and why a model should not be judged by accuracy alone. The written work and combined assessment expanded this foundation by introducing text preprocessing, TF-IDF, word embeddings, cosine similarity, artificial neurons, and the difference between parameters and hyperparameters. At first, these topics seemed like separate concepts, but working through the activities helped me see how they connect. Text must first be prepared and represented numerically before a model can learn from it, and the model's training process must then be evaluated carefully. Overall, the Prelim period strengthened my patience when comparing results and helped me become more thoughtful about the data, settings, and decisions involved in building a machine learning model.

### Midterm Overall Reflection

The Midterm period shifted my focus from individual machine learning concepts toward systems that use Large Language Models and Retrieval-Augmented Generation. Building and evaluating a RAG chatbot helped me understand how chunk size, overlap, embeddings, top-k retrieval, and fallback instructions influence the context given to a language model. Troubleshooting package compatibility and replacing a deprecated model also reminded me that changes in one part of the environment can affect the entire system. The project proposal taught me why a technical solution needs a focused problem, trustworthy sources, realistic questions, and clear evaluation measures. The combined assessment also clarified how LLMs differ from traditional machine learning models and why careful chunking helps preserve useful context. Overall, the Midterm period showed me that a capable language model is only one part of a reliable system. Source preparation, retrieval settings, testing, and human review are equally important. These activities strengthened my troubleshooting, research, planning, and collaboration skills.

### Finals Overall Reflection

The Finals period gave me the opportunity to examine RAG systems more systematically and apply what I learned in a complete group project. The exercises showed me how chunk size and overlap influence retrieval, and comparing multiple configurations taught me to use evidence instead of assumptions when selecting settings. I learned how Precision, Recall, and MRR describe different parts of retrieval performance and why one metric is not enough to identify the best configuration. The CPU and GPU experiments also showed me that faster processing does not automatically produce more accurate or well-supported answers. In the final project, I contributed by conducting the CPU and T4 GPU experiments, organizing the results, calculating speedups, comparing answer quality, helping recommend Configuration C, and assessing the final chatbot responses. Reviewing incorrect and partially correct answers taught me to examine citations, retrieved passages, OCR quality, and unsupported statements carefully. Overall, the Finals period strengthened my skills in experimentation, performance analysis, technical documentation, teamwork, and responsible AI evaluation. It also made me more confident in explaining limitations and making recommendations based on actual evidence.

## Writing Style

- Friendly, reflective, conversational, professional, observational, and thoughtful.
- Natural first-person voice written as Justine.
- Explain why each learning point matters without sounding robotic or overly academic.
- Avoid casual slang that would be out of place in a formal submission.

## Verification

- Confirm both Blue Notebook cards display their approved Description, raw Score, Learning Reflection, image, and image action.
- Confirm no score denominator is shown.
- Confirm Reflections appears after Finals in desktop and mobile navigation.
- Confirm all three reflection cards are visible without clicking.
- Confirm each route updates the page title and browser hash correctly.
- Run ESLint and a production build.
- Check desktop and narrow viewport layouts.
- Confirm no commit is created.

