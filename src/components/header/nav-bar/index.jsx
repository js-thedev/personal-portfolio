import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import '@/components/header/nav-bar/index.scss';

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="home-container">
        <Link to="/" className="home normal-link">
          Scott
        </Link>
      </div>
      <div className="nav-link-container">
        <Link to="/about" className="nav-link normal-link">
          about
        </Link>
        <Link to="/projects" className="nav-link normal-link">
          projects
        </Link>
        <Link to="/skills" className="nav-link normal-link">
          skills
        </Link>
        <Link to="/contact" className="nav-link normal-link">
          contact
        </Link>
      </div>
      {/* TODO: implement hamburger to open up sidebar for navbar links */}
      <div className="hamburger">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
}

export default NavBar;
