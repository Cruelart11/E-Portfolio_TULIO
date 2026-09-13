import { useEffect, useState } from 'react'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import CourseExpectationPage from './pages/CourseExpectationPage.jsx'
import HomePage from './pages/HomePage.jsx'

function getPageFromHash() {
  return window.location.hash === '#/course-expectation' ? 'course-expectation' : 'home'
}

function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromHash)

  useEffect(() => {
    const handleRouteChange = () => {
      const nextPage = getPageFromHash()
      const sectionId = window.location.hash.slice(1)

      setCurrentPage(nextPage)
      document.title = nextPage === 'course-expectation'
        ? 'Course Expectation | Juan Miguel Santos'
        : 'Juan Miguel Santos | E-Portfolio'

      requestAnimationFrame(() => {
        const section = nextPage === 'home' && ['about', 'toolbox'].includes(sectionId)
          ? document.getElementById(sectionId)
          : null

        if (section) {
          section.scrollIntoView()
        } else {
          window.scrollTo({ top: 0, behavior: 'auto' })
        }
      })
    }

    handleRouteChange()
    window.addEventListener('hashchange', handleRouteChange)
    return () => window.removeEventListener('hashchange', handleRouteChange)
  }, [])

  return (
    <div className="site-shell">
      <Header currentPage={currentPage} />
      <main>
        {currentPage === 'course-expectation' ? <CourseExpectationPage /> : <HomePage />}
      </main>
      <Footer />
    </div>
  )
}

export default App
