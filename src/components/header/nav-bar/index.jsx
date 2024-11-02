import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import '@/components/header/nav-bar/index.scss';

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      className={`nav-bar ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}
      aria-label="Main Navigation"
    >
      <div className="home-container">
        <Link to="/" className="home normal-link" onClick={closeMobileMenu}>
          Scott
        </Link>
      </div>
      <div className="nav-link-container">
        <Link to="/about" className="nav-link normal-link">
          About
        </Link>
        <Link to="/projects" className="nav-link normal-link">
          Projects
        </Link>
        <Link to="/skills" className="nav-link normal-link">
          Skills
        </Link>
        <Link to="/contact" className="nav-link normal-link">
          Contact
        </Link>
      </div>
      {/* TODO: implement hamburger to open up sidebar for navbar links */}
      <div
        className="hamburger"
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
      >
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link
            to="/about"
            className="nav-link normal-link"
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="nav-link normal-link"
            onClick={closeMobileMenu}
          >
            Projects
          </Link>
          <Link
            to="/skills"
            className="nav-link normal-link"
            onClick={closeMobileMenu}
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className="nav-link normal-link"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
