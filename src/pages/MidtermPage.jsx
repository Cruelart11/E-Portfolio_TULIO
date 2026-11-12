import { useState } from 'react'
import NotebookEvidence from '../components/NotebookEvidence.jsx'
import PortfolioSubmission from '../components/PortfolioSubmission.jsx'
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
    count: '2 activities',
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

const writtenWorkTwoDocuments = [
  {
    title: 'Making Wage Rules Legible: A RAG Chatbot for Minimum-Wage Workers in Metro Manila',
    filename: 'Finetuners-WW-M2-_-Project-Proposal_Revised_v1-1.pdf',
    meta: 'Group project proposal · 4-page PDF',
    previewPath: 'documents/midterm/ww-m2-project-proposal.pdf#view=FitH',
    filePath: 'documents/midterm/ww-m2-project-proposal.pdf',
    fileLabel: 'Open PDF',
    previewLabel: 'Open PDF',
    showFileAction: false,
  },
]

const portfolioUrl = 'https://cruelart11.github.io/E-Portfolio_TULIO/'

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
              isEmpty={false}
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
              ) : isWrittenWorks ? (
                <>
                  <PortfolioSubmission url={portfolioUrl} />
                  <TermActivity
                    type="Written Work"
                    number="2"
                    title="WW-M2: Project Proposal"
                    description="This group written work presents a project proposal for a RAG chatbot designed to help minimum-wage workers in Metro Manila understand their statutory monetary benefits. We narrowed the topic to minimum wage, overtime pay, holiday pay, and 13th-month pay, connected the project to SDG 8, and identified authoritative sources from DOLE and NWPC. The proposal also outlines an evaluation plan using realistic questions, answer accuracy, and unsupported claim rate to examine whether the chatbot can provide reliable, evidence-supported responses while minimizing hallucinations."
                    reflection="Working on this proposal helped me understand why defining a focused problem is just as important as selecting the technology. A chatbot covering every labor concern would be difficult to manage, so limiting the project to one region and a specific set of monetary benefits made the research clearer and more realistic. I also learned that a useful RAG system depends not only on the language model, but also on trustworthy source documents, carefully prepared reference answers, and evaluation measures that can reveal unsupported claims. Collaborating with the group encouraged me to think more carefully about how technical decisions may affect people who rely on the system for important information."
                    documents={writtenWorkTwoDocuments}
                  />
                </>
              ) : (
                <NotebookEvidence
                  title="Blue Notebook"
                  filename="midterm-quiz-exam.jpg"
                  imagePath="documents/midterm/midterm-quiz-exam-notebook/midterm-quiz-exam.jpg"
                  alt="Blue examination notebook for the combined Midterm long quiz and examination"
                  description="This combined Midterm Long Quiz and Exam was completed face-to-face in a blue notebook. The assessment focused on Large Language Models, their differences from traditional machine learning models, and the role of chunk size and overlap in Retrieval-Augmented Generation. The notebook images document the written assessment and the score recorded for this period."
                  reflection="The combined Midterm Long Quiz and Exam helped me test and strengthen my understanding of Large Language Models and how they differ from traditional machine learning models. I learned that LLMs can understand and generate human-like language across a variety of tasks, while traditional machine learning models are usually developed for more specific tasks, such as classification and prediction. I also reviewed how chunk size and overlap affect Retrieval-Augmented Generation. Chunk size determines how much text is placed in each segment, while overlap repeats part of the text between neighboring chunks to preserve context and reduce the chance of losing important information. This helped me understand that the quality of a RAG system's responses depends not only on the language model, but also on how its source information is divided and prepared for retrieval. Overall, the assessment gave me a clearer understanding of how LLMs process information and why careful chunking can help produce more relevant and accurate responses."
                  score="18"
                />
              )}
            </PrelimFolder>
          )
        })}
      </div>
    </div>
  )
}

export default MidtermPage
