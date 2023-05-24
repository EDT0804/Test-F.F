import React, { useRef } from 'react';
import './Navbar.scss';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
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
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
