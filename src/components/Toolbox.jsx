import SectionHeading from './SectionHeading.jsx'

const skills = [
  { name: 'JavaScript / TS', level: 88, tools: 'React · Node · Express' },
  { name: 'Python', level: 82, tools: 'scripting · automation' },
  { name: 'Databases', level: 78, tools: 'PostgreSQL · SQLite' },
  { name: 'Git & DevOps', level: 74, tools: 'GitHub Actions · Docker' },
]

function SkillCard({ name, level, tools }) {
  return (
    <article className="skill-card">
      <div className="skill-meta">
        <h3>{name}</h3>
        <span>{level}%</span>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-label={`${name} proficiency`}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={level}
      >
        <span style={{ '--progress': `${level}%` }} />
      </div>
      <p>{tools}</p>
    </article>
  )
}

function Toolbox() {
  return (
    <section className="content-section" id="toolbox" aria-labelledby="toolbox-title">
      <SectionHeading number="02" id="toolbox-title">Toolbox</SectionHeading>
      <div className="skills-grid">
        {skills.map((skill) => <SkillCard key={skill.name} {...skill} />)}
      </div>
    </section>
  )
}

export default Toolbox

