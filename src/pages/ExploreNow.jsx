import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';

const servicePhotos = [
  { src: '/images/screen-replacement.jpg', title: 'Screen Replacement', discription:'Laptop screen replacement is the process of taking out a broken, cracked, or non-functioning screen from a laptop and installing a new compatible display. This is usually required if:The screen is cracked or physically damaged.There are dead pixels or display lines.The screen remains black or flickers.Touch functionality (for touchscreens) has failed.' },
  { src: '/images/keyboard-repair.jpg', title: 'Keyboard Repair' },
  { src: '/images/motherboard-repair.jpg', title: 'Motherboard Repair' },
  { src: '/images/cleaning-service.jpg', title: 'Internal Cleaning' },
  { src: '/images/battery-replacement.jpg', title: 'Battery Replacement' },
  { src: '/images/data-recovery.jpg', title: 'Data Recovery' },
];

function LaptopServicePage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleShow = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="bg-light text-dark">
      
      <div className="bg-primary text-white text-center py-5">
        <h1 className="display-4">Professional Laptop Servicing</h1>
        <p className="lead">Hardware repairs, software issues, maintenance — we've got it covered.</p>
      </div>

      
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h2 className="mb-4 text-center">What We Do</h2>
            <p>
              Our expert technicians diagnose and repair a wide range of laptop issues. From cracked screens
              and battery problems to virus removal and data recovery, we provide reliable and affordable
              solutions with fast turnaround time.
            </p>
            <p>
              We only use genuine parts and provide warranty on all major repairs. Walk-in service available,
              or book online for priority support.
            </p>
          </Col>
        </Row>
      </Container>

      
      <Container className="py-5">
        <h2 className="text-center mb-4">Our Work in Action</h2>
        <Row>
          {servicePhotos.map((photo, index) => (
            <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
              <Card onClick={() => handleShow(photo)} className="h-100 cursor-pointer">
                <Card.Img
                  variant="top"
                  src={photo.src}
                  alt={photo.title}
                  style={{ height: '220px', objectFit: 'cover', cursor: 'pointer' }}
                />
                <Card.Body className="text-center">
                  <Card.Title>{photo.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedPhoto?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {selectedPhoto && (
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              
              className="img-fluid rounded"
              style={{ maxHeight: '500px', objectFit: 'contain' }}
            />
          )}
        </Modal.Body>
      </Modal>

      {/* CTA */}
      <div className="bg-primary text-white text-center py-5 mt-4">
        <h2>Need Laptop Help Today?</h2>
        <p>Book a repair or drop by — expert support awaits you.</p>
        <Button variant="light" size="lg">Book Now</Button>
      </div>
    </div>
  );
}

export default LaptopServicePage;
