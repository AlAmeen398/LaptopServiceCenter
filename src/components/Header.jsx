import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="p-2">
        <Container>
          {/* Logo and Brand */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src="https://admin.eapro.in//images/all-banner/serviceCenterLocatorImg-1714973150230-738708618-service-center-locator.png"
              alt="ChipFix Logo"
              width="60"
              height="60"
              className="d-inline-block align-top"
            />
            <h2 className="text-white ms-3 mb-0">CHIPFIX</h2>
          </Navbar.Brand>

          {/* Toggle Button for mobile view */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Navigation Links */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-4">
              <Nav.Link as={Link} to="/explore" className="text-white">Explore</Nav.Link>
              <Nav.Link as={Link} to="/shop" className="text-white">Shop</Nav.Link>
              <Nav.Link as={Link} to="/support" className="text-white">Support</Nav.Link>
              <Nav.Link as={Link} to="/laptop-services" className="text-white">Laptop Services</Nav.Link>
              
              <Nav.Link as={Link} to="/contact" className="text-white">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/diagnostics" className="text-white">Diagnostics</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
