import SectionHeading from '../components/SectionHeading.jsx'

const expectations = [
  {
    title: 'Solid fundamentals',
    description: 'Understand data structures, control flow, and complexity well enough to reason about code without a debugger holding my hand.',
  },
  {
    title: 'Ship real projects',
    description: 'Move from toy exercises to applications that are deployed, documented, and usable by someone other than me.',
  },
  {
    title: 'Collaborate like a pro',
    description: 'Use branches, pull requests, and code review as second nature — because software is a team sport.',
  },
  {
    title: 'Learn how to learn',
    description: 'Get comfortable reading docs, source code, and error messages so I can pick up any new tool the industry throws at me.',
  },
]

const commitments = [
  'Commit code at least 4 days a week',
  "Never submit code I can't explain",
  'Ask questions early, not the night before',
  'Write a README for every project',
  "Review a classmate's PR each week",
  'Keep a learning log every Friday',
]

function CourseExpectationPage() {
  return (
    <div className="page-container course-page">
      <div className="terminal-path" aria-label="Current location: portfolio course expectation">
        <span aria-hidden="true">➜</span> ~/portfolio/course-expectation
      </div>

      <section className="course-intro" aria-labelledby="course-expectation-title">
        <SectionHeading number="00" id="course-expectation-title">Course Expectation</SectionHeading>
        <h1>What I expect to walk away with.</h1>
        <p>
          A running contract with myself for this course — the outcomes I&apos;m aiming for,
          how I&apos;ll get there, and how I&apos;ll measure it.
        </p>
      </section>

      <section className="expectations-grid" aria-label="Course outcomes">
        {expectations.map((expectation, index) => (
          <article className="expectation-card" key={expectation.title}>
            <div className="expectation-heading">
              <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <h2>{expectation.title}</h2>
            </div>
            <p>{expectation.description}</p>
          </article>
        ))}
      </section>

      <section className="commitments-panel" aria-labelledby="commitments-title">
        <h2 id="commitments-title"># personal commitments</h2>
        <ul>
          {commitments.map((commitment) => (
            <li key={commitment}>
              <span aria-hidden="true">✓</span>
              {commitment}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default CourseExpectationPage
