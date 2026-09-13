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

function ExerciseActivity({ number, title, description, documents }) {
  const titleId = `exercise-${number}-title`

  return (
    <article className="prelim-activity" aria-labelledby={titleId}>
      <div className="prelim-activity-heading">
        <span>Exercise {number}</span>
        <strong>Submitted</strong>
      </div>
      <h2 id={titleId}>{title}</h2>
      <p>{description}</p>
      <div className="document-preview-list">
        {documents.map((document) => (
          <DocumentPreview key={`${number}-${document.title}`} {...document} />
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
                <ExerciseActivity
                  number="1"
                  title="PT-P1: Deep Learning (Neural Networks)"
                  description="Customer sentiment classification using a no-code deep learning neural network, with its IEEE report, supporting screenshots, and workbook data."
                  documents={exerciseOneDocuments}
                />
                <ExerciseActivity
                  number="2"
                  title="PT-P2 - Neural Network Training and Testing (HyperParameters)"
                  description="Neural network training and testing with hyperparameter configurations, documented through an IEEE report, Google Colab notebook, and FFBP training log."
                  documents={exerciseTwoDocuments}
                />
              </>
            ) : notebookNotice}
          </PrelimFolder>
        ))}
      </div>
    </div>
  )
}

export default PrelimPage
