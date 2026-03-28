import { useState, useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

const navItems = [
  ['About', '/about'],
  ['Solutions', '/solutions'],
  ['Industries', '/industries'],
  ['Projects', '/projects'],
  ['Contact', '/contact'],
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <div className="site-shell">
      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label="ISL Wireless Home">
            <div className="brand-mark">ISL</div>
            <div>
              <div className="brand-title">ISL Wireless Private Limited</div>
              <div className="brand-subtitle">Critical Connectivity &amp; Monitoring Solutions</div>
            </div>
          </Link>

          <nav className={`nav${menuOpen ? ' nav-open' : ''}`} aria-label="Primary navigation">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
            {navItems.map(([label, href]) => (
              <NavLink key={href} to={href} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                {label}
              </NavLink>
            ))}
            <Link to="/contact" className="button button-primary header-cta nav-cta">Request Consultation</Link>
          </nav>

          <Link to="/contact" className="button button-primary header-cta desktop-cta">Request Consultation</Link>

          <button
            className={`hamburger${menuOpen ? ' is-open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>

        {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">ISL Wireless Private Limited</div>
            <p className="footer-copy">
              Engineered wireless, hybrid fiber-radio, surveillance, and monitoring solutions for railways,
              mining, utilities, and industrial infrastructure.
            </p>
          </div>

          <div>
            <div className="footer-heading">Quick Links</div>
            <div className="footer-links">
              <Link to="/about">About</Link>
              <Link to="/solutions">Solutions</Link>
              <Link to="/industries">Industries</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <div className="footer-heading">Focus Areas</div>
            <div className="footer-copy compact">
              Railway S&amp;T • Wireless Backhaul • Auto-Changeover • Thermal Surveillance • NMS / SNMP • IoT Monitoring
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          © {new Date().getFullYear()} ISL Wireless Private Limited. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
