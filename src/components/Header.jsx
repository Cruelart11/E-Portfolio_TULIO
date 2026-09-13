import { routes } from '../routes.js'

const navItems = [
  ...Object.entries(routes).map(([page, route]) => ({ ...route, page, href: route.hash })),
  { label: 'Finals', disabled: true },
]

function Header({ currentPage }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#/" aria-label="Justine Bradley Tulio — home">
          <span className="brand-mark" aria-hidden="true">{'</>'}</span>
          <span className="brand-name">
            jb<span>.</span>tulio<span className="cursor">_</span>
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
