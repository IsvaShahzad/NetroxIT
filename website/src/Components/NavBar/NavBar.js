
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../Button/Button';

function NavBar({ onNavClick }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            <img src={logo} className='logo' alt="Logo" />
            <span className='logo-text'>NETROXIT</span>
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faXmark : faBars} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <span className='nav-links' onClick={() => { onNavClick('company'); closeMobileMenu(); }}>
                Company
              </span>
            </li>
            <li className='nav-item'>
              <span className='nav-links' onClick={() => { onNavClick('solutions'); closeMobileMenu(); }}>
                Solutions
              </span>
            </li>
           <li className='nav-item'>
                <span
                   className='nav-links'
             onClick={() => { onNavClick('reviews'); closeMobileMenu(); }}
                  >
                     Reviews
                   </span>
                     </li>
       <li className='nav-item'>
                <span
                   className='nav-links'
             onClick={() => { onNavClick('footer'); closeMobileMenu(); }}
                  >
                     Contact Us
                   </span>
                     </li>




      
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;