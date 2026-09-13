import { useState } from 'react'
import DocumentPreview from '../components/DocumentPreview.jsx'
import PrelimFolder from '../components/PrelimFolder.jsx'

const folders = [
  {
    title: 'Exercises',
    count: '2 activities',
    icon: '</>',
    description: 'Submitted reports, notebooks, and supporting data.',
  },
  {
    title: 'Written Works',
    count: '1 written work',
    icon: 'Aa',
    description: 'Written learning activities and reflection reports.',
  },
  {
    title: 'Long Quiz',
    count: 'blue notebook',
    icon: '?',
    description: 'Face-to-face written assessment.',
  },
  {
    title: 'Prelim Exam',
    count: 'blue notebook',
    icon: '★',
    description: 'Face-to-face preliminary examination.',
  },
]

const exerciseOneDocuments = [
  {
    title: 'IEEE Report',
    filename: 'Exercise PTP1 – TULIO (2) (1).pdf',
    meta: '5-page PDF',
    previewPath: 'documents/prelim/pt-p1-ieee-report.pdf#view=FitH',
    filePath: 'documents/prelim/pt-p1-ieee-report.pdf',
    fileLabel: 'Open PDF',
  },
  {
    title: 'Supporting Screenshots',
    filename: 'Exercise PTP1 (SS)– TULIO (1).pdf',
    meta: '2-page PDF',
    previewPath: 'documents/prelim/pt-p1-supporting-screenshots.pdf#view=FitH',
    filePath: 'documents/prelim/pt-p1-supporting-screenshots.pdf',
    fileLabel: 'Open PDF',
  },
  {
    title: 'Training Data and Test Results',
    filename: 'Exercise PTP1 – TULIO (1).xlsx',
    meta: 'Excel workbook · 83 rows · 17 columns',
    previewPath: 'documents/prelim/pt-p1-workbook-preview.html',
    filePath: 'documents/prelim/pt-p1-workbook.xlsx',
    fileLabel: 'Download Excel file',
    isSpreadsheet: true,
  },
]

const exerciseTwoDocuments = [
  {
    title: 'IEEE Report',
    filename: 'Justine Bradley_IEEE_Report (1).pdf',
    meta: '6-page PDF',
    previewPath: 'documents/prelim/pt-p2-ieee-report.pdf#view=FitH',
    filePath: 'documents/prelim/pt-p2-ieee-report.pdf',
    fileLabel: 'Open PDF',
  },
  {
    title: 'Google Colab Notebook',
    filename: 'Justine_Bradley_Neural_Network_Training_Testing (1).ipynb',
    meta: 'Jupyter notebook · 83 cells',
    previewPath: 'documents/prelim/pt-p2-notebook-preview.html',
    filePath: 'documents/prelim/pt-p2-neural-network-training-testing.ipynb',
    fileLabel: 'Download notebook',
    typeLabel: 'IPYNB',
    externalUrl: 'https://colab.research.google.com/github/Cruelart11/E-Portfolio_TULIO/blob/main/public/documents/prelim/pt-p2-neural-network-training-testing.ipynb',
    externalLabel: 'Open in Colab',
    downloadFile: true,
  },
  {
    title: 'FFBP Training Log',
    filename: 'Justine Bradley_FFBP_Training_Log_Template 1.xlsx',
    meta: 'Excel workbook · 16 rows · 26 columns',
    previewPath: 'documents/prelim/pt-p2-training-log-preview.html',
    filePath: 'documents/prelim/pt-p2-training-log.xlsx',
    fileLabel: 'Download Excel file',
    isSpreadsheet: true,
  },
]

const writtenWorkOneDocuments = [
  {
    title: 'IEEE Report',
    filename: 'ieee_report_Tulio.pdf',
    meta: '2-page PDF',
    previewPath: 'documents/prelim/written-work-1-ieee-report.pdf#view=FitH',
    filePath: 'documents/prelim/written-work-1-ieee-report.pdf',
    fileLabel: 'Open PDF',
  },
  {
    title: 'Steps 1–4: NLP Learning Activity',
    filename: 'Step 1 - 4_TULIO_NLP.pdf',
    meta: '5-page PDF',
    previewPath: 'documents/prelim/written-work-1-steps-1-4.pdf#view=FitH',
    filePath: 'documents/prelim/written-work-1-steps-1-4.pdf',
    fileLabel: 'Open PDF',
  },
]

function Activity({ type, number, title, description, reflection, documents }) {
  const activitySlug = `${type}-${number}`.toLowerCase().replaceAll(' ', '-')
  const titleId = `${activitySlug}-title`

  return (
    <article className="prelim-activity" aria-labelledby={titleId}>
      <div className="prelim-activity-heading">
        <span>{type} {number}</span>
        <strong>Submitted</strong>
      </div>
      <h2 id={titleId}>{title}</h2>
      <div className="activity-context">
        <section aria-labelledby={`${activitySlug}-description`}>
          <h3 id={`${activitySlug}-description`}>Description</h3>
          <p>{description}</p>
        </section>
        <section aria-labelledby={`${activitySlug}-reflection`}>
          <h3 id={`${activitySlug}-reflection`}>Learning Reflection</h3>
          <p>{reflection}</p>
        </section>
      </div>
      <div className="document-preview-list">
        {documents.map((document) => (
          <DocumentPreview key={`${activitySlug}-${document.title}`} {...document} />
        ))}
      </div>
    </article>
  )
}

const notebookNotice = (
  <div className="notebook-notice">
    <span aria-hidden="true">i</span>
    <p>
      This activity was completed face-to-face in a blue notebook. The notebook has not yet been
      returned because continuous rain caused class suspensions.
    </p>
  </div>
)

function PrelimPage() {
  const [openFolder, setOpenFolder] = useState('Exercises')

  return (
    <div className="page-container prelim-page">
      <div className="terminal-path" aria-label="Current location: portfolio prelim">
        <span aria-hidden="true">➜</span> ~/portfolio/prelim
      </div>

      <section className="prelim-overview" aria-labelledby="prelim-title">
        <div className="prelim-intro">
          <h1 id="prelim-title">Prelim</h1>
          <p>Preliminary-term activities, reports, supporting files, quizzes, and examinations.</p>
        </div>
      </section>

      <p className="folder-prompt">
        <span>$</span> ls <strong>./prelim</strong>
      </p>

      <div className="prelim-folders">
        {folders.map((folder) => (
          <PrelimFolder
            key={folder.title}
            folder={folder}
            isOpen={openFolder === folder.title}
            onToggle={() => setOpenFolder(openFolder === folder.title ? '' : folder.title)}
          >
            {folder.title === 'Exercises' ? (
              <>
                <Activity
                  type="Exercise"
                  number="1"
                  title="PT-P1: Deep Learning (Neural Networks)"
                  description="Customer sentiment classification using a no-code deep learning neural network, with its IEEE report, supporting screenshots, and workbook data."
                  reflection="Through this activity, I learned how data preparation, neural-network training, testing, and documentation work together when building a customer sentiment classifier. The results showed me that a model should not be judged by accuracy alone because the quality of its data and the way its performance is evaluated also affect whether its predictions are useful. This exercise helped me better understand the importance of reviewing both the model's process and its results before applying it to a real problem."
                  documents={exerciseOneDocuments}
                />
                <Activity
                  type="Exercise"
                  number="2"
                  title="PT-P2 - Neural Network Training and Testing (HyperParameters)"
                  description="Neural network training and testing with hyperparameter configurations, documented through an IEEE report, Google Colab notebook, and FFBP training log."
                  reflection="Through this activity, I learned that tuning a neural network requires comparing different configurations instead of assuming that one set of hyperparameters will always perform best. Reviewing the training and testing behavior helped me understand how a model can overfit when it learns the training data too closely or underfit when it cannot learn enough from the data. This process showed me the importance of finding a balanced configuration that produces more consistent results on both training and testing data."
                  documents={exerciseTwoDocuments}
                />
              </>
            ) : folder.title === 'Written Works' ? (
              <Activity
                type="Written Work"
                number="1"
                title="Natural Language Processing Concepts"
                description="This written work documents the completion of an NLP learning activity and presents an IEEE reflection report about text preprocessing, statistical text representation, and contextual language techniques."
                reflection="This written work developed my understanding of NLP from a general idea into a clearer view of the complete language-processing pipeline. I learned that preprocessing decisions, such as removing words or reducing them to their base forms, can improve consistency but may also change meaning when applied without care. Comparing TF-IDF with word embeddings also helped me understand the difference between measuring the statistical importance of words and representing their semantic relationships. Most importantly, I learned that the appropriate technique depends on the data and the problem being solved, not simply on which method is newest."
                documents={writtenWorkOneDocuments}
              />
            ) : notebookNotice}
          </PrelimFolder>
        ))}
      </div>
    </div>
  )
}

export default PrelimPage
