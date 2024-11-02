import { useState } from 'react';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import '@/components/header/nav-bar/index.scss';

function NavBar() {
  // Constants
  const DESKTOP_DIMENSION = 1024;

  // States
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < DESKTOP_DIMENSION,
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Functions
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const calculateIsMobile = () => {
    setIsMobile(window.innerWidth < DESKTOP_DIMENSION);
  };

  /*
    Whenever component mounts, listen for resize event,
    and determine if user is currently in mobile dimension
  */
  useEffect(() => {
    window.addEventListener('resize', calculateIsMobile);

    return () => {
      window.removeEventListener('resize', calculateIsMobile);
    };
  }, []);

  const desktopNavBar = () => {
    return (
      <div className="desktop-nav-bar">
        <div className="home-container">
          <Link to="/" className="home normal-link">
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
      </div>
    );
  };

  const mobileNavBar = () => {
    return (
      <div className="mobile-nav-bar">
        <div className="top-content">
          <div className="home-container">
            <Link to="/" className="home normal-link" onClick={closeMobileMenu}>
              Scott
            </Link>
          </div>
          {/* Toggle icon */}
          <div className="toggle-menu-icon" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="expandable-menu">
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
  };

  return (
    <div className="nav-bar">
      {!isMobile ? desktopNavBar() : mobileNavBar()}
    </div>
  );
}

export default NavBar;
