import SectionHeading from './SectionHeading.jsx'

const details = [
  ['location', 'Cainta, Rizal'],
  ['program', 'BSIT'],
  ['year', '4th Year'],
]

function About() {
  return (
    <section className="content-section about-section" id="about" aria-labelledby="about-title">
      <SectionHeading number="01" id="about-title">About me</SectionHeading>
      <div className="about-layout">
        <div className="about-copy">
          <p>
            Hi! My name is Justine Bradley Tulio, and I&apos;m someone who enjoys both strategy and
            relaxation. Gaming is my go-to passion, whether it&apos;s competitive matches or casual play.
            I also love the mental challenge of chess—it sharpens my focus and keeps me thinking ahead.
          </p>
          <p>
            Food is another big part of my life; I&apos;m always up for trying new flavors and sharing meals
            with friends. Sleep is my recharge time, helping me stay balanced and ready for the next
            adventure.
          </p>
          <p>
            I&apos;m especially drawn to esports events, where the energy of competition and community
            inspires me. Whether I&apos;m watching pros battle it out or connecting with fellow fans,
            esports fuels my excitement and keeps me engaged with the gaming world.
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
