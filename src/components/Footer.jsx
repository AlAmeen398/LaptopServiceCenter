import React, { useState } from 'react';
import { Col, Container, Row, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');

  const serviceCenters = {
    Ernakulam: 'MG Road, Near Metro Station',
    Trivandrum: 'Technopark Campus',
    Kollam: 'Downtown Complex, Beach Road',
    Calicut: 'Palayam Junction, Opp. KSRTC Bus Stand',
    Trissur: 'Swaraj Round East, 2nd Floor, City Center',
    Kottayam: 'Kanjikuzhy Main Road, Near Private Bus Stand',
    Idukki: 'Painavu Town, Near Govt. Hospital',
  };

  const handleSelect = (district) => {
    setSelectedLocation(`ChipFix service center available in ${district}: ${serviceCenters[district]}`);
    setShowModal(false);
  };

  return (
    <>
      <footer className="bg-light pt-4">
        <Container>
          <Row className="text-center text-md-start">
            {/* Company Info */}
            <Col md={4} className="mb-4">
              <h5 className="text-uppercase">About Us</h5>
              <p>
                We provide the best service to find information about Indian states and more.
                Stay connected with us!
              </p>
            </Col>

            {/* Quick Links */}
            <Col md={4} className="mb-4">
              <h5 className="text-uppercase">Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link to="/" className="text-decoration-none text-dark">Home</Link></li>
                <li><Link to="/about" className="text-decoration-none text-dark">About</Link></li>
                <li><Link to="/contact" className="text-decoration-none text-dark">Contact</Link></li>
              </ul>
            </Col>

            {/* State & Socials */}
            <Col md={4} className="mb-4">
              <h5 className="text-uppercase">Choose State</h5>
              <Button variant="outline-primary" onClick={() => setShowModal(true)} className="mb-3">
                Select District <i className="fa-solid fa-angle-up"></i>
              </Button>

              {/* Show Selected Location */}
              {selectedLocation && (
                <div className="text-muted mt-2 fw-semibold">
                  {selectedLocation}
                </div>
              )}

              <div className="mt-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
              </div>
            </Col>
          </Row>

          <hr />

          <Row className="text-center">
            <Col md={6}>
              <p>Contact us: +91 8589856891 | chipfixlap@gmail.com</p>
            </Col>
            <Col md={6}>
              <p>&#169; {new Date().getFullYear()} ChipFix. All rights reserved.</p>
            </Col>
          </Row>
        </Container>

        {/* Modal */}
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title" className="text-black">
              Select Your District
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                {Object.keys(serviceCenters).map((district, index) => (
                  <Col xs={6} md={4} className="mb-2" key={index}>
                    <Button
                      variant="outline-primary"
                      className="w-100"
                      onClick={() => handleSelect(district)}
                    >
                      {district}
                    </Button>
                  </Col>
                ))}
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </footer>
    </>
  );
}

export default Footer;
