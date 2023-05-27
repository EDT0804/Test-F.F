// Navbar.js
import React, { useRef } from 'react';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      <h3>logo</h3>
      <nav>
        <a href="/#">Kryefaqja</a>
        <a href="/#">Kalkulatori</a>
        <a href="/#">Ushtrime</a>
        <a href="/#">Testi fizik</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
}

export default Navbar;
