import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const servicePhotos = [
  { src: 'https://i.pinimg.com/1200x/4e/3c/24/4e3c2475f148ea30bc68c61cb9038d2a.jpg', title: 'Screen Replacement'},
  { src: 'https://i.pinimg.com/736x/a7/63/6a/a7636a66a57bba98c67132c6de40f44d.jpg', title: 'Keyboard Repair' },
  { src: 'https://i.pinimg.com/1200x/97/b5/cb/97b5cb03cc878d87dca61f6996dade8b.jpg', title: 'Motherboard Repair' },
  { src: 'https://i.pinimg.com/736x/53/77/7d/53777d8b8a6cf6e1eaf4f254b733c075.jpg', title: 'Internal Cleaning' },
  { src: 'https://i.pinimg.com/1200x/e0/d7/df/e0d7dfd4d76b9fd27d5ee1989f52a1f3.jpg', title: 'Battery Replacement' },
  { src: 'https://i.pinimg.com/736x/bf/32/33/bf3233e34cb1b1bcd02f6020847d8e9d.jpg', title: 'Data Recovery' },
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
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-header {
          animation: fadeInDown 1s ease-out;
        }
        
        .animate-fade-up {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-zoom {
          animation: zoomIn 0.6s ease-out;
        }
        
        .animate-card {
          animation: fadeInUp 0.8s ease-out;
          animation-fill-mode: both;
        }
        
        .animate-slide-left {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .animate-slide-right {
          animation: slideInRight 0.8s ease-out;
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.2) !important;
        }
        
        .icon-bounce {
          transition: transform 0.3s ease;
        }
        
        .icon-bounce:hover {
          transform: scale(1.2) rotate(10deg);
        }
      `}</style>

      <div className="text-center py-5 animate-header">
        <h1 className="display-4">Professional Laptop Servicing</h1>
        <p className="lead" style={{color:'#772953'}}>Hardware repairs, software issues, maintenance — we've got it covered.</p>
      </div>


      <Container className="py-5 animate-fade-up">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h2 className="mb-4 text-center">What We Do</h2>
            <p style={{color:'#772953'}}>
              Our expert technicians diagnose and repair a wide range of laptop issues. From cracked screens
              and battery problems to virus removal and data recovery, we provide reliable and affordable
              solutions with fast turnaround time.
            </p>
            <p style={{color:'#772953'}}>
              We only use genuine parts and provide warranty on all major repairs. Walk-in service available,
              or book online for priority support.
            </p>
          </Col>
        </Row>
      </Container>

  


      <Container className="py-5">
        <h2 className="text-center mb-4 animate-zoom">Our Work in Action</h2>
        <Row>
          {servicePhotos.map((photo, index) => (
            <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
              <Card onClick={() => handleShow(photo)} className="h-100 cursor-pointer hover-lift animate-card" style={{animationDelay: `${index * 0.1}s`}}>
                <Card.Img 
                  variant="top"
                  src={photo.src}
                  alt={photo.title}
                  style={{ height: '220px', objectFit: 'contain', cursor: 'pointer'}}
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

          {/* Why Choose Us Section */}
      <Container className="py-5 bg-white rounded-4 shadow-sm mb-5">
        <h2 className="text-center mb-5 animate-zoom">Why Choose ChipFix?</h2>
        <Row className="g-4">
          <Col md={4} className="animate-card" style={{animationDelay: '0.2s'}}>
            <div className="text-center p-4">
              <div className="mb-3 icon-bounce">
                <i className="fa-solid fa-certificate fa-3x" style={{color:'#772953'}}></i>
              </div>
              <h4>Certified Technicians</h4>
              <p style={{color:'#772953'}}>
                Our team consists of certified and experienced professionals who handle your devices with utmost care and expertise.
              </p>
            </div>
          </Col>
          <Col md={4} className="animate-card" style={{animationDelay: '0.4s'}}>
            <div className="text-center p-4">
              <div className="mb-3 icon-bounce">
                <i className="fa-solid fa-clock fa-3x" style={{color:'#772953'}}></i>
              </div>
              <h4>Quick Turnaround</h4>
              <p style={{color:'#772953'}}>
                Most repairs are completed within 24-48 hours. We understand your time is valuable and work efficiently to get you back on track.
              </p>
            </div>
          </Col>
          <Col md={4} className="animate-card" style={{animationDelay: '0.6s'}}>
            <div className="text-center p-4">
              <div className="mb-3 icon-bounce">
                <i className="fa-solid fa-shield-halved fa-3x" style={{color:'#772953'}}></i>
              </div>
              <h4>Warranty Protection</h4>
              <p style={{color:'#772953'}}>
                All major repairs come with a 90-day warranty. We stand behind our work and ensure quality service.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Services Overview Section */}
      <Container className="py-5">
        <h2 className="text-center mb-5 animate-zoom">Our Comprehensive Services</h2>
        <Row className="g-4">
          <Col md={6} className="animate-slide-left">
            <Card className="h-100 border-0 shadow-sm hover-lift">
              <Card.Body>
                <h5 className="mb-3"><i className="fa-solid fa-laptop-code me-2" style={{color:'#772953'}}></i>Hardware Repairs</h5>
                <ul style={{color:'#772953'}}>
                  <li>Screen replacement and digitizer repair</li>
                  <li>Keyboard and touchpad replacement</li>
                  <li>Battery replacement and power issues</li>
                  <li>Motherboard and chip-level repairs</li>
                  <li>RAM and storage upgrades</li>
                  <li>Cooling system and fan replacement</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="animate-slide-right">
            <Card className="h-100 border-0 shadow-sm hover-lift">
              <Card.Body>
                <h5 className="mb-3"><i className="fa-solid fa-code me-2" style={{color:'#772953'}}></i>Software Solutions</h5>
                <ul style={{color:'#772953'}}>
                  <li>Operating system installation and updates</li>
                  <li>Virus and malware removal</li>
                  <li>Data backup and recovery services</li>
                  <li>Software troubleshooting and optimization</li>
                  <li>Driver installation and updates</li>
                  <li>Performance tuning and cleanup</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Service Locations Section */}
      <Container className="py-5 bg-gradient rounded-4 text-white mb-5 animate-fade-up" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <h2 className="text-center mb-4 text-black">Visit Our Service Centers</h2>
        <Row className="g-4 justify-content-center">
          <Col md={5}>
            <Card className="bg-white bg-opacity-25 border-0 text-white">
              <Card.Body>
                <h5 className='text-black'><i className="fa-solid fa-location-dot me-2"></i>Ernakulam Branch</h5>
                <p className="mb-2">MG Road, Ernakulam</p>
                <p className="mb-2"><i className="fa-solid fa-phone me-2"></i>+91 8589856891</p>
                <p className="mb-0"><i className="fa-solid fa-clock me-2"></i>Mon-Sat: 9 AM - 7 PM</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card className="bg-white bg-opacity-25 border-0 text-white">
              <Card.Body>
                <h5 className='text-black'><i className="fa-solid fa-location-dot me-2"></i>Trivandrum Branch</h5>
                <p className="mb-2">Statue Junction, Trivandrum</p>
                <p className="mb-2"><i className="fa-solid fa-phone me-2"></i>+91 8589856891</p>
                <p className="mb-0"><i className="fa-solid fa-clock me-2"></i>Mon-Sat: 9 AM - 7 PM</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <p className="mb-0">We also offer pickup and delivery services across Kerala</p>
        </div>
      </Container>


      <div className=" text-white text-center py-5 mt-4 bg-white">
        <h2 className='text-black '>Need Laptop Help Today?</h2>
        <p style={{color:'#772953'}}>Book a repair or drop by — expert support awaits you.</p>
        <Link to={'/laptop-repair'}>
          <Button variant="outline-primary" size="lg">Book Now</Button>
        </Link>

      </div>
    </div>
  );
}

export default LaptopServicePage;
