import React from 'react';
import { Container, Navbar, Nav, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Header() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <>
      <style>{`
        .cart-link {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .cart-link:hover {
          transform: scale(1.1);
        }
        
        .cart-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>
      
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
            <Nav className="ms-auto gap-4 align-items-center">
              <Nav.Link as={Link} to="/explorenow" className="text-white">Explore</Nav.Link>
              <Nav.Link as={Link} to="/shop" className="text-white">Shop</Nav.Link>
              <Nav.Link as={Link} to="/support" className="text-white">Support</Nav.Link>
              <Nav.Link as={Link} to="/laptop-repair" className="text-white">Laptop Repair</Nav.Link>
              
              {/* Cart Link with Badge */}
              <Nav.Link as={Link} to="/cart" className="text-white cart-link">
                <i className="fa-solid fa-shopping-cart fa-lg"></i>
                {cartCount > 0 && (
                  <Badge bg="danger" pill className="cart-badge">
                    {cartCount}
                  </Badge>
                )}
              </Nav.Link>
              
              {/* <Nav.Link as={Link} to="/contact" className="text-white">Contact Us</Nav.Link> */}
              {/* <Nav.Link as={Link} to="/diagnostics" className="text-white">Diagnostics</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
