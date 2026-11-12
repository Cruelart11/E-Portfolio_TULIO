import { useState } from 'react'
import ArchiveDownload from '../components/ArchiveDownload.jsx'
import PrelimFolder from '../components/PrelimFolder.jsx'
import TermActivity from '../components/TermActivity.jsx'

const folders = [
  {
    title: 'Exercises',
    count: '2 activities',
    icon: '</>',
    description: 'Submitted reports, notebooks, and supporting work.',
  },
  {
    title: 'Written Works',
    count: '1 combined activity',
    icon: 'Aa',
    description: 'Written learning activities and reflection reports.',
  },
  {
    title: 'Project',
    count: '1 group project',
    icon: 'PR',
    description: 'Final RAG chatbot project, evaluation, and supporting files.',
  },
  {
    title: 'Long Quiz and Finals Exam',
    icon: 'Q/E',
    description: 'Combined long quiz and final examination.',
  },
]

const exerciseOneDocuments = [
  {
    title: 'IEEE Report',
    filename: 'PT-F1 (Optimizing Chunk Size and Overlap)_ Initial Preps_TULIO (1).pdf',
    meta: '4-page PDF',
    previewPath: 'documents/finals/pt-f1-optimizing-chunk-size-overlap.pdf#view=FitH',
    filePath: 'documents/finals/pt-f1-optimizing-chunk-size-overlap.pdf',
    fileLabel: 'Open PDF',
    previewLabel: 'Open PDF',
    showFileAction: false,
  },
  {
    title: 'Google Colab Notebook',
    filename: 'Faiss_Vector_Store_and_Retrieval_Qwen3_1_7B_Explanations_TULIO (2).ipynb',
    meta: 'Jupyter notebook · 68 cells',
    previewPath: 'documents/finals/pt-f1-notebook-preview.html',
    filePath: 'documents/finals/pt-f1-optimizing-chunk-size-overlap.ipynb',
    fileLabel: 'Download notebook',
    typeLabel: 'IPYNB',
    externalUrl: 'https://colab.research.google.com/github/Cruelart11/E-Portfolio_TULIO/blob/main/public/documents/finals/pt-f1-optimizing-chunk-size-overlap.ipynb',
    externalLabel: 'Open in Colab',
    downloadFile: true,
  },
  {
    title: 'Excel Chunk Inspection',
    filename: 'Statutory-Monetary-Benefits-Handbook-2024-_chunks_inspection_TULIO.xlsx',
    meta: 'Workbook · 217 generated chunks',
    previewPath: 'documents/finals/pt-f1-chunks-inspection-preview.html',
    filePath: 'documents/finals/pt-f1-chunks-inspection.xlsx',
    fileLabel: 'Download Excel file',
    typeLabel: 'XLSX',
    isSpreadsheet: true,
  },
]

const exerciseTwoDocuments = [
  {
    title: 'IEEE Report',
    filename: 'Lab Exercise PT-F2 Experimenting to Determine the Best Chunk_TULIO (1).pdf',
    meta: '4-page PDF',
    previewPath: 'documents/finals/pt-f2-best-chunk-experiment.pdf#view=FitH',
    filePath: 'documents/finals/pt-f2-best-chunk-experiment.pdf',
    fileLabel: 'Open PDF',
    previewLabel: 'Open PDF',
    showFileAction: false,
  },
  {
    title: 'Google Colab Notebook',
    filename: 'Lab Exercise PT-F2 P2 Experimenting to Determine the Best Chunk_TULIO (2).ipynb',
    meta: 'Jupyter notebook · 78 cells',
    previewPath: 'documents/finals/pt-f2-notebook-preview.html',
    filePath: 'documents/finals/pt-f2-best-chunk-experiment.ipynb',
    fileLabel: 'Download notebook',
    typeLabel: 'IPYNB',
    externalUrl: 'https://colab.research.google.com/github/Cruelart11/E-Portfolio_TULIO/blob/main/public/documents/finals/pt-f2-best-chunk-experiment.ipynb',
    externalLabel: 'Open in Colab',
    downloadFile: true,
  },
  {
    title: 'Excel Experiment Results',
    filename: 'Experiment Results With Detailed Retrieval Log_With_Computations_TULIO (1).xlsx',
    meta: 'Workbook · 7 sheets · 12 configurations',
    previewPath: 'documents/finals/pt-f2-experiment-results-preview.html',
    filePath: 'documents/finals/pt-f2-experiment-results.xlsx',
    fileLabel: 'Download Excel file',
    typeLabel: 'XLSX',
    isSpreadsheet: true,
  },
]

const writtenWorksDocuments = [
  {
    title: 'Group Experiment Report',
    filename: 'Finetuners_RAG_Experiment_Report (2).pdf',
    meta: '4-page PDF',
    previewPath: 'documents/finals/finetuners-rag-experiment-report.pdf#view=FitH',
    filePath: 'documents/finals/finetuners-rag-experiment-report.pdf',
    fileLabel: 'Open PDF',
    previewLabel: 'Open PDF',
    showFileAction: false,
  },
  {
    title: 'Google Colab Notebook',
    filename: 'Finetuners_RAG_Experiment_Notebook (4).ipynb',
    meta: 'Jupyter notebook · 35 cells',
    previewPath: 'documents/finals/finetuners-rag-experiment-notebook-preview.html',
    filePath: 'documents/finals/finetuners-rag-experiment.ipynb',
    fileLabel: 'Download notebook',
    typeLabel: 'IPYNB',
    externalUrl: 'https://colab.research.google.com/github/Cruelart11/E-Portfolio_TULIO/blob/main/public/documents/finals/finetuners-rag-experiment.ipynb',
    externalLabel: 'Open in Colab',
    downloadFile: true,
  },
  {
    title: 'Excel Experiment Results',
    filename: 'Finetuners_RAG_Experiment_Results (2).xlsx',
    meta: 'Workbook · CPU and T4 GPU results',
    previewPath: 'documents/finals/finetuners-rag-experiment-results-preview.html',
    filePath: 'documents/finals/finetuners-rag-experiment-results.xlsx',
    fileLabel: 'Download Excel file',
    typeLabel: 'XLSX',
    isSpreadsheet: true,
  },
]

const projectDocuments = [
  {
    title: 'Final Project Report',
    filename: 'FineTunners_RAG_Final_Project_Report (1).pdf',
    meta: '6-page PDF · IEEE-format final report',
    previewPath: 'documents/finals/project/finetunners-rag-final-project-report.pdf#view=FitH',
    filePath: 'documents/finals/project/finetunners-rag-final-project-report.pdf',
    fileLabel: 'Open PDF',
    previewLabel: 'Open PDF',
    showFileAction: false,
  },
  {
    title: 'RAG Experiment Notebook',
    filename: 'Finetuners_RAG_Experiment_Notebook.ipynb',
    meta: 'Jupyter notebook · 35 cells',
    previewPath: 'documents/finals/project/finetunners-rag-experiment-notebook-preview.html',
    filePath: 'documents/finals/project/finetunners-rag-experiment-notebook.ipynb',
    fileLabel: 'Download notebook',
    typeLabel: 'IPYNB',
    externalUrl: 'https://colab.research.google.com/github/Cruelart11/E-Portfolio_TULIO/blob/main/public/documents/finals/project/finetunners-rag-experiment-notebook.ipynb',
    externalLabel: 'Open in Colab',
    downloadFile: true,
  },
  {
    title: 'RAG Experiment Results',
    filename: 'Finetuners_RAG_Experiment_Results.xlsx',
    meta: 'Workbook · 30 result rows',
    previewPath: 'documents/finals/project/finetunners-rag-experiment-results-preview.html',
    filePath: 'documents/finals/project/finetunners-rag-experiment-results.xlsx',
    fileLabel: 'Download Excel file',
    typeLabel: 'XLSX',
    isSpreadsheet: true,
  },
  {
    title: 'Final Chatbot and Evaluation Notebook',
    filename: 'FineTunners_RAG_Final_Chatbot_and_Evaluation_COMPLETE.ipynb',
    meta: 'Jupyter notebook · 39 cells',
    previewPath: 'documents/finals/project/finetunners-rag-final-chatbot-evaluation-preview.html',
    filePath: 'documents/finals/project/finetunners-rag-final-chatbot-evaluation.ipynb',
    fileLabel: 'Download notebook',
    typeLabel: 'IPYNB',
    externalUrl: 'https://colab.research.google.com/github/Cruelart11/E-Portfolio_TULIO/blob/main/public/documents/finals/project/finetunners-rag-final-chatbot-evaluation.ipynb',
    externalLabel: 'Open in Colab',
    downloadFile: true,
  },
  {
    title: 'Final Chatbot Evaluation Data',
    filename: 'Final_Chatbot_Evaluation_Assessed.csv',
    meta: 'CSV · 10 evaluated responses · 40 fields',
    previewPath: 'documents/finals/project/final-chatbot-evaluation-assessed-preview.html',
    filePath: 'documents/finals/project/final-chatbot-evaluation-assessed.csv',
    fileLabel: 'Download CSV file',
    typeLabel: 'CSV',
    isSpreadsheet: true,
  },
  {
    title: 'Final Chatbot Response Evaluation',
    filename: 'Final_Chatbot_Response_Evaluation_Assessed.xlsx',
    meta: 'Workbook · 2 evaluation sheets',
    previewPath: 'documents/finals/project/final-chatbot-response-evaluation-assessed-preview.html',
    filePath: 'documents/finals/project/final-chatbot-response-evaluation-assessed.xlsx',
    fileLabel: 'Download Excel file',
    typeLabel: 'XLSX',
    isSpreadsheet: true,
  },
  {
    title: 'Member Responsibility Matrix',
    filename: 'FineTunners_Member_Responsibility_Matrix.docx',
    meta: 'DOCX · 3-member responsibility matrix',
    previewPath: 'documents/finals/project/finetunners-member-responsibility-matrix-preview.html',
    filePath: 'documents/finals/project/finetunners-member-responsibility-matrix.docx',
    fileLabel: 'Download DOCX',
    typeLabel: 'DOCX',
    downloadFile: true,
  },
  {
    title: 'Project Integrity and AI Usage Statement',
    filename: 'FineTunners_Project_Integrity_and_AI_Usage_Statement.pdf',
    meta: '4-page PDF',
    previewPath: 'documents/finals/project/finetunners-project-integrity-ai-usage-statement.pdf#view=FitH',
    filePath: 'documents/finals/project/finetunners-project-integrity-ai-usage-statement.pdf',
    fileLabel: 'Open PDF',
    previewLabel: 'Open PDF',
    showFileAction: false,
  },
]

const projectArchives = [
  {
    title: 'Chatbot Response Evaluation Package',
    filename: 'Finetunners_Chatbost_Response_Evaluation 1.zip',
    meta: 'ZIP archive · 2 files · 33.1 KiB',
    description: 'Contains the assessed CSV and Excel files used to review the final chatbot responses, retrieval evidence, answer correctness, source support, and handling of unanswerable questions.',
    filePath: 'documents/finals/project/finetunners-chatbot-response-evaluation.zip',
  },
  {
    title: 'Source Code and Reproducibility Package',
    filename: 'Finetunners_Source_Code_and_Reproducibility_Package.zip',
    meta: 'ZIP archive · 4 files · 5.79 MiB',
    description: 'Contains the completed chatbot and evaluation notebook together with the Labor Code, Wage Order NCR-27, and the Workers’ Statutory Monetary Benefits Handbook used by the RAG system.',
    filePath: 'documents/finals/project/finetunners-source-code-reproducibility.zip',
  },
  {
    title: 'Experiment Logs and Checkpoints',
    filename: 'Finetunners_Experiment_Logs_and_Checkpoints.zip',
    meta: 'ZIP archive · 28 files · 5.93 MiB',
    description: 'Contains the experiment README, the three source labor documents, and detailed CPU and T4 GPU workbooks and raw CSV results for Configurations A through F.',
    filePath: 'documents/finals/project/finetunners-experiment-logs-checkpoints.zip',
  },
  {
    title: 'Chunking Experiments Package',
    filename: 'Finetunner_Chunking Experiments.zip',
    meta: 'ZIP archive · 2 files · 60.4 KiB',
    description: 'Contains the RAG chunking experiment notebook and the consolidated experiment-results workbook used to compare retrieval configurations.',
    filePath: 'documents/finals/project/finetunners-chunking-experiments.zip',
  },
]

function FinalsPage() {
  const [openFolder, setOpenFolder] = useState('Exercises')

  return (
    <div className="page-container prelim-page">
      <div className="terminal-path" aria-label="Current location: portfolio finals">
        <span aria-hidden="true">➜</span> ~/portfolio/finals
      </div>

      <section className="prelim-overview" aria-labelledby="finals-title">
        <div className="prelim-intro">
          <h1 id="finals-title">Finals</h1>
          <p>Finals activities, reports, supporting files, quizzes, and examinations.</p>
        </div>
      </section>

      <p className="folder-prompt">
        <span>$</span> ls <strong>./finals</strong>
      </p>

      <div className="prelim-folders">
        {folders.map((folder) => {
          const isExercises = folder.title === 'Exercises'
          const isWrittenWorks = folder.title === 'Written Works'
          const isProject = folder.title === 'Project'
          const isCombinedAssessment = folder.title === 'Long Quiz and Finals Exam'

          return (
            <PrelimFolder
              key={folder.title}
              folder={folder}
              isOpen={openFolder === folder.title}
              isEmpty={false}
              onToggle={() => setOpenFolder(openFolder === folder.title ? '' : folder.title)}
            >
              {isExercises ? (
                <>
                  <TermActivity
                    type="Exercise"
                    number="1"
                    title="PT-F1: Optimizing Chunk Size and Overlap"
                    description="This exercise focuses on building and examining a FAISS-based Retrieval-Augmented Generation system using the 2024 Workers' Statutory Monetary Benefits Handbook as its knowledge source. I divided the handbook into overlapping chunks using a size of 1,000 characters and an overlap of 200, generated embeddings with all-MiniLM-L6-v2, stored them in FAISS, and reranked the retrieved passages before using Qwen3-1.7B to generate document-grounded answers. The activity also included an Excel inspection of 217 generated chunks and tests using easy, average, and difficult questions to observe how retrieval quality and question complexity affect the final response."
                    reflection="Working on this activity helped me understand that successful retrieval involves more than simply placing document text into a vector store. Chunk size and overlap affect how much context remains connected, while reranking helps separate closely related labor rules that use similar wording. I observed that the system answered the easy and average questions correctly, but it struggled with the difficult question even though the relevant passages were retrieved. This showed me that good retrieval does not always guarantee correct reasoning, especially when several formulas and conditions must be combined. It also made me more aware of why inspecting chunks, source pages, and diagnostic results matters when improving a RAG system."
                    documents={exerciseOneDocuments}
                  />
                  <TermActivity
                    type="Exercise"
                    number="2"
                    title="PT-F2: Experimenting to Determine the Best Chunk Size and Overlap"
                    description="This exercise continues the chunking experiment by comparing twelve configurations for a FAISS-based Retrieval-Augmented Generation system using the 2024 Workers' Statutory Monetary Benefits Handbook. I tested chunk sizes of 300, 500, 700, and 1,000 characters, each with zero, 10%, and 20% overlap, using the same nine worker-focused questions across easy, average, and difficult levels. Retrieval performance was measured using Precision@3, Recall@3, and MRR@3, while the number of generated chunks and indexing time were also recorded. The results showed that C12, with a chunk size of 1,000 and an overlap of 200, provided the strongest overall balance, reaching 0.556 Precision@3, 0.944 Recall@3, and 0.685 MRR@3."
                    reflection="This activity helped me understand why chunk settings should be selected through evidence rather than assumption. Smaller chunks sometimes captured specific details, but they could separate rates from the conditions or computations that belonged with them. Larger chunks preserved more useful context, although they also introduced trade-offs in precision and efficiency. Comparing C10 and C12 was especially meaningful because C10 produced fewer chunks and ranked the first relevant result slightly earlier, while C12 recovered more of the evidence needed for difficult questions. I learned that choosing the best configuration requires examining several metrics together and considering what matters most for the document. For labor-benefit information, I found that complete and dependable evidence was more important than a small reduction in indexing work."
                    documents={exerciseTwoDocuments}
                  />
                </>
              ) : isWrittenWorks ? (
                <TermActivity
                  type="Written Works"
                  number="1 and 2"
                  title="Optimizing CPU and GPU Performance of a RAG-Based Chatbot"
                  description="This combined group written work focuses on optimizing and evaluating Making Wage Rules Legible, a RAG chatbot designed to help minimum-wage workers in Metro Manila understand labor information. Our group tested six configurations that varied chunk size, overlap, top-k, and execution device while keeping the source documents, Qwen3-1.7B model, prompt, and generation settings consistent. Each configuration was evaluated using Google Colab CPU and T4 GPU runtimes with a warm-up run followed by three measured repetitions for three questions of different difficulty levels. The results showed that Configuration C, using a chunk size of 1,200, an overlap of 150, and top-k of 3, provided the strongest balance. Its average response time decreased from 467.5130 seconds on CPU to 8.1125 seconds on GPU, representing a 57.63-times speedup."
                  reflection="Working on this group activity helped me understand that optimizing a RAG system involves more than making its responses faster. The T4 GPU greatly reduced processing time, but the fastest configuration did not always produce the most accurate or well-supported answers. Configuration C stood out because it balanced speed, retrieval context, and answer quality more effectively than the other settings. I also observed how an OCR error in the scanned wage order affected the chatbot's interpretation even when the retrieval process was working. This reminded me that document preparation, retrieval settings, hardware performance, and evidence validation all contribute to the reliability of a RAG system. Collaborating with the group also helped me appreciate the importance of comparing results carefully instead of selecting a configuration from one measurement alone."
                  documents={writtenWorksDocuments}
                >
                  <ArchiveDownload
                    title="Complete Experiment Data Archive"
                    filename="Finetunners_RAG_Experiment_Data (2).zip"
                    meta="ZIP archive · 28 files · 5.93 MiB"
                    description="This archive contains the source documents used by the RAG system and the detailed CPU and GPU experiment results for configurations A through F, including the individual Excel workbooks and raw CSV measurements."
                    filePath="documents/finals/finetuners-rag-experiment-data.zip"
                  />
                </TermActivity>
              ) : isProject ? (
                <TermActivity
                  type="Project"
                  number="1"
                  title="Making Wage Rules Legible: RAG Chatbot for Minimum-Wage Workers"
                  description="This group project presents Making Wage Rules Legible, a retrieval-augmented generation chatbot designed to make Philippine wage rules and statutory benefits easier for minimum-wage workers in Metro Manila to understand. Our group built the system using Qwen3-1.7B, a Chroma vector database, and three official labor-related documents. We compared six retrieval configurations by changing chunk size, overlap, and top-k, then tested their performance using Google Colab CPU and T4 GPU runtimes. After selecting Configuration C for its balance of response quality and speed, we evaluated the completed chatbot using ten worker-focused questions. The project files document the complete process, including the experiment notebook and results, final chatbot evaluation, project report, member responsibilities, integrity statement, source documents, and reproducibility materials."
                  reflection={[
                    "My main responsibility in this group project was CPU-GPU experimentation and final evaluation. I conducted the tests for Configurations A through F using Google Colab CPU and T4 GPU runtimes, organized the raw and summarized results, calculated the GPU speedups, and compared the answer quality of each configuration. Based on these findings, I helped identify Configuration C as the recommended setting because it offered the strongest balance between response speed and answer quality. I also prepared and assessed the ten worker-oriented questions used in the final chatbot evaluation, organized the evaluation results in CSV and Excel files, and consolidated the findings and result tables for the IEEE report. This responsibility required careful checking because our recommendation needed to be supported by both performance measurements and the quality of the chatbot's responses.",
                    "Through this experience, I strengthened my skills in experimental design, data organization, performance analysis, RAG evaluation, and technical documentation. I learned why test conditions must remain consistent and why a faster response should not automatically be considered better without examining its retrieved evidence, citations, and factual accuracy. Reviewing partially correct and incorrect responses also taught me to report limitations honestly instead of focusing only on successful results. Working with my group improved my communication and accountability because each member's work contributed to a different part of the completed system. Most importantly, I became more confident in interpreting technical evidence, explaining limitations, and making recommendations based on actual results. These are skills I can apply to my capstone project and future work in the IT industry.",
                  ]}
                  documents={projectDocuments}
                >
                  <div className="archive-download-list" aria-label="Project ZIP downloads">
                    {projectArchives.map((archive) => (
                      <ArchiveDownload
                        key={archive.filename}
                        {...archive}
                        actionLabel="Download ZIP package"
                      />
                    ))}
                  </div>
                </TermActivity>
              ) : isCombinedAssessment ? (
                <aside className="assessment-notice" aria-labelledby="finals-score-update-title">
                  <h2 id="finals-score-update-title">Score Update</h2>
                  <p>
                    The scores for the combined Finals Long Quiz and Exam will be announced
                    after all blue notebooks have been checked.
                  </p>
                </aside>
              ) : null}
            </PrelimFolder>
          )
        })}
      </div>
    </div>
  )
}

export default FinalsPage
