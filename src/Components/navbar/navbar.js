import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function myNavbar() {
  return (
    <Navbar expand="lg" className="bg-dark" fixed="top" >
      <Container>
        <Navbar.Brand href="#home">KRN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About me</Nav.Link>

            <NavDropdown title="Gallery" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/black-and-white">Black and White</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/animals">Animals</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/city">City</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/landscape">Landscape</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/portraits">Portraits</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/cars">Cars</Link>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#link">Services</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default myNavbar;