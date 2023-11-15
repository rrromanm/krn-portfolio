import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-md'>
      <a className='navbar-brand mx-5 fs-1 fw-bold' href='#'>KRN</a>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav ms-auto mx-5'>
          <li className='nav-item me-3'><a className='nav-link fs-4 text-white' href='#'>Home</a></li>
          <li className='nav-item me-3'><a className='nav-link fs-4 text-white' href='#about'>About</a></li>
          <li className='nav-item me-3'><a className='nav-link fs-4 text-white' href='#projects'>Projects</a></li>
          <li className='nav-item me-3'><a className='nav-link fs-4 text-white' href='#services'>Services</a></li>
          <li className='nav-item'><a className='nav-link fs-4 text-white' href='#contact'>Contact</a></li>
        </ul>
      </div>
      
    </nav>
  );
}

export default Navbar;
