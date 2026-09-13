const navItems = [
  { label: 'Home', href: '#/', page: 'home' },
  { label: 'Course Expectation', href: '#/course-expectation', page: 'course-expectation' },
  { label: 'Prelim', disabled: true },
  { label: 'Midterm', disabled: true },
  { label: 'Finals', disabled: true },
]

function Header({ currentPage }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#/" aria-label="Juan Miguel Santos — home">
          <span className="brand-mark" aria-hidden="true">{'</>'}</span>
          <span className="brand-name">
            jm<span>.</span>santos<span className="cursor">_</span>
          </span>
        </a>

        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.disabled ? (
                  <span className="nav-link is-disabled" aria-disabled="true" title="Coming soon">
                    {item.label}
                  </span>
                ) : (
                  <a
                    className={`nav-link${currentPage === item.page ? ' is-active' : ''}`}
                    href={item.href}
                    aria-current={currentPage === item.page ? 'page' : undefined}
                  >
                    {currentPage === item.page && <span className="nav-caret" aria-hidden="true">▍</span>}
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
