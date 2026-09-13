import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Toolbox from './components/Toolbox.jsx'

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <div className="page-container">
          <div className="terminal-path" aria-label="Current location: portfolio home">
            <span aria-hidden="true">➜</span> ~/portfolio/home
          </div>
          <Hero />
          <About />
          <Toolbox />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App

