import SectionHeading from './SectionHeading.jsx'

const details = [
  ['location', 'Manila, PH'],
  ['program', 'BS Info. Tech'],
  ['year', '3rd Year'],
  ['gpa', '1.42 / 5.0'],
]

function About() {
  return (
    <section className="content-section about-section" id="about" aria-labelledby="about-title">
      <SectionHeading number="01" id="about-title">About me</SectionHeading>
      <div className="about-layout">
        <div className="about-copy">
          <p>
            I&apos;m a third-year Information Technology student with a focus on full-stack web
            development and systems fundamentals. My path started with taking apart family computers
            and turned into a genuine love for building software that people actually use.
          </p>
          <p>
            Outside of class I contribute to a couple of open-source repos, mentor first-year students
            in the coding lab, and I&apos;m usually somewhere in a documentation rabbit hole. I believe
            the best code is the code your teammate can read six months later.
          </p>
        </div>
        <dl className="details-grid">
          {details.map(([label, value]) => (
            <div className="detail-row" key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default About

