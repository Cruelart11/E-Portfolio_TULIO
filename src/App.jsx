import { useEffect, useState } from 'react'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import CourseExpectationPage from './pages/CourseExpectationPage.jsx'
import HomePage from './pages/HomePage.jsx'
import MidtermPage from './pages/MidtermPage.jsx'
import PrelimPage from './pages/PrelimPage.jsx'
import { getPageFromHash, routes } from './routes.js'

const pageComponents = {
  home: HomePage,
  'course-expectation': CourseExpectationPage,
  prelim: PrelimPage,
  midterm: MidtermPage,
}

function App() {
  const [currentPage, setCurrentPage] = useState(() => getPageFromHash(window.location.hash))

  useEffect(() => {
    const handleRouteChange = () => {
      const nextPage = getPageFromHash(window.location.hash)
      const sectionId = window.location.hash.slice(1)

      setCurrentPage(nextPage)
      document.title = routes[nextPage].title

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

  const PageComponent = pageComponents[currentPage]

  return (
    <div className="site-shell">
      <Header currentPage={currentPage} />
      <main>
        <PageComponent />
      </main>
      <Footer />
    </div>
  )
}

export default App
