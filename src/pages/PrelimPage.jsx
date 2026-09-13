import { useState } from 'react'
import PrelimFolder from '../components/PrelimFolder.jsx'

const stats = [
  ['04', 'sections'],
  ['08', 'items'],
  ['06', 'graded'],
]

const folders = [
  {
    title: 'Exercises',
    count: '3 items',
    icon: '</>',
    description: 'Weekly hands-on drills committed to the class repository.',
    items: [
      {
        code: 'EX-01',
        status: 'Done',
        title: 'Hello, Toolchain',
        description: 'Configured Git, VS Code, and Node. Pushed a first signed commit to the class repo.',
        tags: ['git', 'setup'],
      },
      {
        code: 'EX-02',
        status: '20 / 20',
        title: 'Control Flow Katas',
        description: 'Twelve short problems covering conditionals, loops, and early returns.',
        tags: ['logic', 'python'],
      },
      {
        code: 'EX-03',
        status: '18 / 20',
        title: 'Arrays & Strings',
        description: 'Reverse, rotate, and de-duplicate — implemented without built-in helpers.',
        tags: ['data structures'],
      },
    ],
  },
  {
    title: 'Quiz',
    count: '2 items',
    icon: '?',
    description: 'Short assessments checking retention of weekly concepts.',
  },
  {
    title: 'Projects',
    count: '2 items',
    icon: '▲',
    description: 'Larger builds that combine several weeks of concepts.',
  },
  {
    title: 'Prelim Exam',
    count: '1 item',
    icon: '★',
    description: 'Comprehensive assessment covering the full prelim scope.',
  },
]

function PrelimPage() {
  const [openFolder, setOpenFolder] = useState('Exercises')

  return (
    <div className="page-container prelim-page">
      <div className="terminal-path" aria-label="Current location: portfolio prelim">
        <span aria-hidden="true">➜</span> ~/portfolio/prelim
      </div>

      <section className="prelim-overview" aria-labelledby="prelim-title">
        <div className="prelim-intro">
          <div className="term-label">
            <span aria-hidden="true">[term]</span>
            <h2>Weeks 1–6</h2>
          </div>
          <h1 id="prelim-title">Prelim</h1>
          <p>Foundations term. Focused on environment setup, version control, and the fundamentals of structured problem solving.</p>
        </div>
        <dl className="prelim-stats">
          {stats.map(([value, label]) => (
            <div key={label} className={label === 'graded' ? 'is-accent' : ''}>
              <dd>{value}</dd>
              <dt>{label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <p className="folder-prompt">
        <span>$</span> ls ./prelim/ — <strong>click a folder to expand</strong>
      </p>

      <div className="prelim-folders">
        {folders.map((folder) => (
          <PrelimFolder
            key={folder.title}
            folder={folder}
            isOpen={openFolder === folder.title}
            onToggle={() => setOpenFolder(openFolder === folder.title ? null : folder.title)}
          />
        ))}
      </div>
    </div>
  )
}

export default PrelimPage
