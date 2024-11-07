import React, { useState } from 'react';
import './navbar.css';
import { Link, Outlet } from 'react-router-dom';
function Navbar() {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(!state);
  };
  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Travel More</h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={state ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={state ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link to="/" className="nav-links">
              <i class="fa-solid fa-house"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-links">
              <i class="fa-solid fa-circle-info"></i> About
            </Link>
          </li>
          <li>
            <Link to="/services" className="nav-links">
              <i class="fa-solid fa-briefcase"></i> Service
            </Link>
          </li>
          <li>
            <Link to="/contactus" className="nav-links">
              <i class="fa-solid fa-briefcase"></i> Contact Us
            </Link>
          </li>
          <button>Sign Up</button>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
