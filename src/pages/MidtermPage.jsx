import { useState } from 'react'
import NotebookEvidence from '../components/NotebookEvidence.jsx'
import PrelimFolder from '../components/PrelimFolder.jsx'
import TermActivity from '../components/TermActivity.jsx'

const folders = [
  {
    title: 'Exercises',
    count: '1 activity',
    icon: '</>',
    description: 'Submitted reports, notebooks, and supporting work.',
  },
  {
    title: 'Written Works',
    icon: 'Aa',
    description: 'Written learning activities and reflection reports.',
  },
  {
    title: 'Long Quiz and Midterm Exam',
    count: 'blue notebook',
    icon: 'Q/E',
    description: 'Combined face-to-face long quiz and midterm examination.',
  },
]

const exerciseOneDocuments = [
  {
    title: 'IEEE Report',
    filename: 'Lab Exercise PT-M1(RAG)_TULIO (1).pdf',
    meta: '3-page PDF',
    previewPath: 'documents/midterm/pt-m1-rag-chatbot-report.pdf#view=FitH',
    filePath: 'documents/midterm/pt-m1-rag-chatbot-report.pdf',
    fileLabel: 'Open PDF',
  },
  {
    title: 'Google Colab Notebook',
    filename: 'Lab_Exercise_PT_M1(RAG)_TULIO (2) (1).ipynb',
    meta: 'Jupyter notebook · 24 cells',
    previewPath: 'documents/midterm/pt-m1-rag-chatbot-preview.html',
    filePath: 'documents/midterm/pt-m1-rag-chatbot.ipynb',
    fileLabel: 'Download notebook',
    typeLabel: 'IPYNB',
    externalUrl: 'https://colab.research.google.com/github/Cruelart11/E-Portfolio_TULIO/blob/main/public/documents/midterm/pt-m1-rag-chatbot.ipynb',
    externalLabel: 'Open in Colab',
    downloadFile: true,
  },
]

function MidtermPage() {
  const [openFolder, setOpenFolder] = useState('Exercises')

  return (
    <div className="page-container prelim-page">
      <div className="terminal-path" aria-label="Current location: portfolio midterm">
        <span aria-hidden="true">➜</span> ~/portfolio/midterm
      </div>

      <section className="prelim-overview" aria-labelledby="midterm-title">
        <div className="prelim-intro">
          <h1 id="midterm-title">Midterm</h1>
          <p>Midterm activities, reports, supporting files, quizzes, and examinations.</p>
        </div>
      </section>

      <p className="folder-prompt">
        <span>$</span> ls <strong>./midterm</strong>
      </p>

      <div className="prelim-folders">
        {folders.map((folder) => {
          const isExercises = folder.title === 'Exercises'
          const isWrittenWorks = folder.title === 'Written Works'

          return (
            <PrelimFolder
              key={folder.title}
              folder={folder}
              isOpen={openFolder === folder.title}
              isEmpty={isWrittenWorks}
              onToggle={() => setOpenFolder(openFolder === folder.title ? '' : folder.title)}
            >
              {isExercises ? (
                <TermActivity
                  type="Exercise"
                  number="1"
                  title="PT-M1 (Building and Evaluating a RAG Chatbot)"
                  description="This activity builds and evaluates a domain-specific Retrieval-Augmented Generation chatbot for Pasig City disaster preparedness. The system loads and chunks source documents, creates embeddings, stores them in ChromaDB, retrieves relevant context for a Groq-hosted language model, and tests how configuration changes can affect hallucinations."
                  reflection="Through this activity, I developed a clearer understanding of how retrieval helps ground a chatbot's answers in selected source material. I learned that chunk size, overlap, embeddings, and top-k retrieval influence the context provided to the model. Resolving package compatibility issues and replacing a deprecated model also showed me the importance of checking whether every part of the environment still works after a change. Most importantly, comparing the restricted baseline with the higher-temperature stress test showed me that retrieval and clear fallback instructions must work together to reduce unsupported answers."
                  documents={exerciseOneDocuments}
                />
              ) : !isWrittenWorks ? (
                <NotebookEvidence
                  title="Blue Notebook"
                  filename="midterm-quiz-exam.jpg"
                  imagePath="documents/midterm/midterm-quiz-exam-notebook/midterm-quiz-exam.jpg"
                  alt="Blue examination notebook for the combined Midterm long quiz and examination"
                />
              ) : null}
            </PrelimFolder>
          )
        })}
      </div>
    </div>
  )
}

export default MidtermPage
