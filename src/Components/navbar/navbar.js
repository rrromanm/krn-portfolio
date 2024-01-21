import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

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
              <NavDropdown.Item href="#action/3.1">Black and White</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Animals</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">City</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Landscape</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Portraits</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Cars</NavDropdown.Item>
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