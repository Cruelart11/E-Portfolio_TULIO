import { useState } from 'react'
import DocumentPreview from '../components/DocumentPreview.jsx'
import PrelimFolder from '../components/PrelimFolder.jsx'

const folders = [
  {
    title: 'Exercises',
    count: '1 activity',
    icon: '</>',
    description: 'Submitted reports and supporting data for PT-P1.',
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

const documents = [
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
              <article className="prelim-activity" aria-labelledby="pt-p1-title">
                <div className="prelim-activity-heading">
                  <span>Exercise 1</span>
                  <strong>Submitted</strong>
                </div>
                <h2 id="pt-p1-title">PT-P1: Deep Learning (Neural Networks)</h2>
                <p>
                  Customer sentiment classification using a no-code deep learning neural network,
                  with its IEEE report, supporting screenshots, and workbook data.
                </p>
                <div className="document-preview-list">
                  {documents.map((document) => (
                    <DocumentPreview key={document.title} {...document} />
                  ))}
                </div>
              </article>
            ) : notebookNotice}
          </PrelimFolder>
        ))}
      </div>
    </div>
  )
}

export default PrelimPage
