import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`navbar navbar-expand-md fixed-top ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <a className="navbar-brand mx-3 fs-4 fs-md-1 fw-bold" href="#">
        KRN
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto mx-3">
          <li className="nav-item me-3">
            <a className="nav-link fs-5 fs-md-4 text-white" href="#">
              Home
            </a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link fs-5 fs-md-4 text-white" href="#about">
              About
            </a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link fs-5 fs-md-4 text-white" href="#projects">
              Gallery
            </a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link fs-5 fs-md-4 text-white" href="#projects">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-5 fs-md-4 text-white" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
