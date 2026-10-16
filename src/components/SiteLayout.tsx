import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { contact } from '../siteData';
import { ScrollToTop } from './ScrollToTop';

const navItems = [
  ['Services', '/services'],
  ['About', '/about'],
  ['Careers', '/careers'],
  ['Contact', '/contact'],
] as const;

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="utility shell">
          <span>Serving Memphis organizations since 2002</span>
          <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
        </div>
        <nav className="nav shell" aria-label="Primary navigation">
          <Link className="brand" to="/" aria-label="Men in Blue Security home">
            <img src="/assets/logo.png" alt="" />
            <span><strong>Men in Blue</strong><small>Security, Inc.</small></span>
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span /><span /><span className="sr-only">Toggle navigation</span>
          </button>
          <div className={`nav-links${menuOpen ? ' is-open' : ''}`} id="site-menu">
            {navItems.map(([label, to]) => <NavLink key={to} to={to}>{label}</NavLink>)}
            <Link className="nav-cta" to="/contact">Request a consultation</Link>
          </div>
        </nav>
      </header>
      <main id="main"><Outlet /></main>
      <footer className="footer">
        <div className="shell footer-grid">
          <Link className="brand brand--footer" to="/">
            <img src="/assets/logo.png" alt="" />
            <span><strong>Men in Blue</strong><small>Security, Inc.</small></span>
          </Link>
          <p>Professional security support for Memphis organizations and communities.</p>
          <div className="footer-links">
            <Link to="/services">Services</Link><Link to="/careers">Careers</Link><Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} Men in Blue Security, Inc.</span>
          <div><Link to="/privacy">Privacy</Link><Link to="/accessibility">Accessibility</Link></div>
        </div>
      </footer>
    </>
  );
}
