import About from '../components/About.jsx'
import Contact from '../components/Contact.jsx'
import Hero from '../components/Hero.jsx'

function HomePage() {
  return (
    <div className="page-container">
      <div className="terminal-path" aria-label="Current location: portfolio home">
        <span aria-hidden="true">➜</span> ~/portfolio/home
      </div>
      <Hero />
      <About />
      <Contact />
    </div>
  )
}

export default HomePage
