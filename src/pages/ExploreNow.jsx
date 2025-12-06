import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Modal, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const servicePhotos = [
  {
    src: 'https://i.pinimg.com/1200x/4e/3c/24/4e3c2475f148ea30bc68c61cb9038d2a.jpg',
    title: 'Screen Replacement',
    price: '₹3,000+',
    duration: '2-3 hours',
    rating: 4.8,
    description: 'Professional LCD/LED screen replacement with warranty'
  },
  {
    src: 'https://i.pinimg.com/736x/a7/63/6a/a7636a66a57bba98c67132c6de40f44d.jpg',
    title: 'Keyboard Repair',
    price: '₹1,500+',
    duration: '1-2 hours',
    rating: 4.9,
    description: 'Complete keyboard replacement and key repair'
  },
  {
    src: 'https://i.pinimg.com/1200x/97/b5/cb/97b5cb03cc878d87dca61f6996dade8b.jpg',
    title: 'Motherboard Repair',
    price: '₹5,000+',
    duration: '3-5 days',
    rating: 4.7,
    description: 'Expert chip-level motherboard diagnostics and repair'
  },
  {
    src: 'https://i.pinimg.com/736x/53/77/7d/53777d8b8a6cf6e1eaf4f254b733c075.jpg',
    title: 'Internal Cleaning',
    price: '₹800+',
    duration: '1-2 hours',
    rating: 5.0,
    description: 'Deep cleaning with thermal paste application'
  },
  {
    src: 'https://i.pinimg.com/1200x/e0/d7/df/e0d7dfd4d76b9fd27d5ee1989f52a1f3.jpg',
    title: 'Battery Replacement',
    price: '₹2,500+',
    duration: '30 mins',
    rating: 4.8,
    description: 'Genuine battery replacement with warranty'
  },
  {
    src: 'https://i.pinimg.com/736x/bf/32/33/bf3233e34cb1b1bcd02f6020847d8e9d.jpg',
    title: 'Data Recovery',
    price: '₹3,500+',
    duration: '2-7 days',
    rating: 4.9,
    description: 'Professional data recovery from damaged drives'
  },
];

const locations = [
  {
    id: 1,
    name: 'Ernakulam Branch',
    address: 'MG Road, Ernakulam',
    city: 'Ernakulam',
    phone: '+91 8589856891',
    email: 'ernakulam@chipfix.com',
    hours: 'Mon-Sat: 9 AM - 7 PM',
    mapLink: 'https://maps.google.com/?q=Ernakulam,Kerala',
    features: ['Free Parking', 'Express Service', 'Waiting Lounge'],
    manager: 'Rajesh Kumar'
  },
  {
    id: 2,
    name: 'Trivandrum Branch',
    address: 'Statue Junction, Trivandrum',
    city: 'Trivandrum',
    phone: '+91 8589856891',
    email: 'trivandrum@chipfix.com',
    hours: 'Mon-Sat: 9 AM - 7 PM',
    mapLink: 'https://maps.google.com/?q=Trivandrum,Kerala',
    features: ['Free WiFi', 'Data Recovery Lab', 'Home Service'],
    manager: 'Priya Menon'
  },
];

function LaptopServicePage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [hoveredLocation, setHoveredLocation] = useState(null);

  // Staggered card appearance animation
  useEffect(() => {
    servicePhotos.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, index * 150);
    });
  }, []);

  const handleShow = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  const handleCallBranch = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  const handleEmailBranch = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleGetDirections = (mapLink) => {
    window.open(mapLink, '_blank');
  };

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

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
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
          opacity: 0;
        }

        .animate-card.visible {
          opacity: 1;
        }
        
        .animate-slide-left {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .animate-slide-right {
          animation: slideInRight 0.8s ease-out;
        }
        
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }
        
        .hover-lift:hover {
          transform: translateY(-15px) scale(1.03);
          box-shadow: 0 20px 50px rgba(119, 41, 83, 0.4) !important;
        }

        .hover-lift::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .hover-lift:hover::before {
          left: 100%;
        }

        .service-card {
          border: 2px solid transparent;
          transition: all 0.3s ease;
          background: white;
        }

        .service-card:hover {
          border-color: #772953;
        }

        .service-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          z-index: 10;
          animation: pulse 2s infinite;
        }

        .price-badge {
          background: linear-gradient(135deg, #772953 0%, #a03366 100%);
          color: white;
          padding: 8px 15px;
          border-radius: 25px;
          font-weight: bold;
          box-shadow: 0 4px 15px rgba(119, 41, 83, 0.3);
        }

        .rating-stars {
          color: #ffc107;
          font-size: 0.9rem;
        }

        .card-image-wrapper {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .card-image-wrapper img {
          transition: transform 0.5s ease;
        }

        .service-card:hover .card-image-wrapper img {
          transform: scale(1.15) rotate(2deg);
        }

        .card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
          padding: 20px;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .service-card:hover .card-overlay {
          transform: translateY(0);
        }

        .quick-view-btn {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s ease;
        }

        .service-card:hover .quick-view-btn {
          opacity: 1;
          transform: translateY(0);
        }
        
        .icon-bounce {
          transition: transform 0.3s ease;
        }
        
        .icon-bounce:hover {
          transform: scale(1.2) rotate(10deg);
        }

        .location-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }

        .location-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          transform: scale(0);
          transition: transform 0.6s ease;
        }

        .location-card:hover::before {
          transform: scale(1);
        }

        .location-card:hover {
          transform: translateY(-10px) scale(1.05);
          border-color: rgba(255, 255, 255, 0.5);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .feature-tag {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          display: inline-block;
          margin: 3px;
          transition: all 0.3s ease;
        }

        .feature-tag:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .action-button {
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid white;
          color: white;
          transition: all 0.3s ease;
        }

        .action-button:hover {
          background: white;
          color: #772953;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .pickup-badge {
          background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%);
          border: 2px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .pickup-badge:hover {
          transform: scale(1.05);
          border-color: rgba(255, 255, 255, 0.6);
        }
      `}</style>

      <div className="text-center py-5 animate-header">
        <h1 className="display-4">Professional Laptop Servicing</h1>
        <p className="lead" style={{ color: '#772953' }}>Hardware repairs, software issues, maintenance — we've got it covered.</p>
      </div>







      <Container className="py-5">
        <h2 className="text-center mb-4 animate-zoom" style={{ color: '#772953', fontWeight: 'bold' }}>
          <i className="fa-solid fa-images me-2"></i>Our Work in Action
        </h2>
        <p className="text-center text-secondary mb-5">Professional repairs with genuine parts and warranty coverage</p>

        <Row>
          {servicePhotos.map((photo, index) => (
            <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
              <Card
                onClick={() => handleShow(photo)}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={handleCardLeave}
                className={`h-100 service-card hover-lift animate-card ${visibleCards.includes(index) ? 'visible' : ''}`}
                style={{
                  animationDelay: `${index * 0.15}s`,
                  cursor: 'pointer',
                  transform: hoveredCard === index ? 'translateY(-15px) scale(1.03)' : 'translateY(0) scale(1)'
                }}
              >
                {/* Duration Badge */}
                <Badge bg="danger" className="service-badge">
                  <i className="fa-solid fa-clock me-1"></i>{photo.duration}
                </Badge>

                {/* Image Wrapper with Overlay */}
                <div className="card-image-wrapper" style={{ height: '240px', position: 'relative' }}>
                  <Card.Img
                    variant="top"
                    src={photo.src}
                    alt={photo.title}
                    style={{
                      height: '100%',
                      objectFit: 'contain',
                      padding: '15px'
                    }}
                  />

                  {/* Hover Overlay */}
                  <div className="card-overlay text-white">
                    <p className="mb-0 small">{photo.description}</p>
                  </div>
                </div>

                <Card.Body className="text-center p-3">
                  {/* Title */}
                  <Card.Title className="fw-bold mb-2" style={{ color: '#772953', fontSize: '1.1rem' }}>
                    {photo.title}
                  </Card.Title>

                  {/* Rating Stars */}
                  <div className="rating-stars mb-2">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fa-solid fa-star ${i < Math.floor(photo.rating) ? '' : 'text-muted'}`}
                      ></i>
                    ))}
                    <span className="ms-2 text-secondary small">({photo.rating})</span>
                  </div>

                  {/* Price and Action */}
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="price-badge">{photo.price}</span>
                    <Button
                      size="sm"
                      variant="outline-primary"
                      className="quick-view-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShow(photo);
                      }}
                    >
                      <i className="fa-solid fa-eye me-1"></i>View Details
                    </Button>
                  </div>

                  {/* Popular Badge (for high ratings) */}
                  {photo.rating >= 4.9 && (
                    <Badge bg="success" className="mt-2">
                      <i className="fa-solid fa-fire me-1"></i>Most Popular
                    </Badge>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>


      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton style={{ background: 'linear-gradient(135deg, #772953 0%, #a03366 100%)', color: 'white' }}>
          <Modal.Title>
            <i className="fa-solid fa-tools me-2"></i>
            {selectedPhoto?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center p-4">
          {selectedPhoto && (
            <>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="img-fluid rounded mb-4"
                style={{ maxHeight: '400px', objectFit: 'contain' }}
              />

              <h5 className="mb-3" style={{ color: '#772953' }}>{selectedPhoto.description}</h5>

              {/* Service Details Grid */}
              <Row className="g-3 mb-4">
                <Col xs={6} md={3}>
                  <Card className="text-center p-3" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
                    <i className="fa-solid fa-indian-rupee-sign fa-2x mb-2" style={{ color: '#772953' }}></i>
                    <p className="mb-0 small text-muted">Starting Price</p>
                    <p className="mb-0 fw-bold">{selectedPhoto.price}</p>
                  </Card>
                </Col>
                <Col xs={6} md={3}>
                  <Card className="text-center p-3" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
                    <i className="fa-solid fa-clock fa-2x mb-2" style={{ color: '#772953' }}></i>
                    <p className="mb-0 small text-muted">Duration</p>
                    <p className="mb-0 fw-bold">{selectedPhoto.duration}</p>
                  </Card>
                </Col>
                <Col xs={6} md={3}>
                  <Card className="text-center p-3" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
                    <i className="fa-solid fa-star fa-2x mb-2" style={{ color: '#ffc107' }}></i>
                    <p className="mb-0 small text-muted">Rating</p>
                    <p className="mb-0 fw-bold">{selectedPhoto.rating} / 5</p>
                  </Card>
                </Col>
                <Col xs={6} md={3}>
                  <Card className="text-center p-3" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
                    <i className="fa-solid fa-shield-check fa-2x mb-2" style={{ color: '#772953' }}></i>
                    <p className="mb-0 small text-muted">Warranty</p>
                    <p className="mb-0 fw-bold">90 Days</p>
                  </Card>
                </Col>
              </Row>

              {/* Action Buttons */}
              <div className="d-flex gap-2 justify-content-center">
                <Link to="/laptop-repair" className="text-decoration-none">
                  <Button
                    size="lg"
                    style={{ background: 'linear-gradient(135deg, #772953 0%, #a03366 100%)', border: 'none' }}
                  >
                    <i className="fa-solid fa-calendar-check me-2"></i>
                    Book This Service
                  </Button>
                </Link>
                <Button
                  variant="outline-secondary"
                  size="lg"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>

      {/* Why Choose Us Section */}
      <Container className="py-5 bg-white rounded-4 shadow-sm mb-5">
        <h2 className="text-center mb-5 animate-zoom">Why Choose ChipFix?</h2>
        <Row className="g-4">
          <Col md={4} className="animate-card" style={{ animationDelay: '0.2s' }}>
            <div className="text-center p-4">
              <div className="mb-3 icon-bounce">
                <i className="fa-solid fa-certificate fa-3x" ></i>
              </div>
              <h4>Certified Technicians</h4>
              <p style={{ color: '#772953' }}>
                Our team consists of certified and experienced professionals who handle your devices with utmost care and expertise.
              </p>
            </div>
          </Col>
          <Col md={4} className="animate-card" style={{ animationDelay: '0.4s' }}>
            <div className="text-center p-4">
              <div className="mb-3 icon-bounce">
                <i className="fa-solid fa-clock fa-3x" ></i>
              </div>
              <h4>Quick Turnaround</h4>
              <p style={{ color: '#772953' }}>
                Most repairs are completed within 24-48 hours. We understand your time is valuable and work efficiently to get you back on track.
              </p>
            </div>
          </Col>
          <Col md={4} className="animate-card" style={{ animationDelay: '0.6s' }}>
            <div className="text-center p-4">
              <div className="mb-3 icon-bounce">
                <i className="fa-solid fa-shield-halved fa-3x" ></i>
              </div>
              <h4>Warranty Protection</h4>
              <p style={{ color: '#772953' }}>
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
                <h5 className="mb-3"><i className="fa-solid fa-laptop-code me-2" style={{ color: '#772953' }}></i>Hardware Repairs</h5>
                <ul style={{ color: '#772953' }}>
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
                <h5 className="mb-3"><i className="fa-solid fa-code me-2" style={{ color: '#772953' }}></i>Software Solutions</h5>
                <ul style={{ color: '#772953' }}>
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
      <Container className="py-5 rounded-4 mb-5 animate-fade-up shadow-lg" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="text-center mb-5">
          <h2 className="text-white fw-bold mb-3">
            <i className="fa-solid fa-map-location-dot me-2"></i>
            Visit Our Service Centers
          </h2>
          <p className="text-white fs-5 mb-0">Walk-in anytime or schedule an appointment</p>
        </div>

        <Row className="g-4 justify-content-center">
          {locations.map((location, index) => (
            <Col md={5} key={location.id}>
              <Card
                className="location-card text-white h-100"
                onMouseEnter={() => setHoveredLocation(index)}
                onMouseLeave={() => setHoveredLocation(null)}
                onClick={() => handleLocationClick(location)}
                style={{
                  cursor: 'pointer',
                  transform: hoveredLocation === index ? 'translateY(-10px) scale(1.05)' : 'translateY(0) scale(1)'
                }}
              >
                <Card.Body className="p-4">
                  {/* Branch Header */}
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <h5 className="fw-bold mb-1">
                        <i className="fa-solid fa-building me-2"></i>
                        {location.name}
                      </h5>
                      <Badge bg="success" className="mt-1">
                        <i className="fa-solid fa-circle-check me-1"></i>Open Now
                      </Badge>
                    </div>
                    <div className="text-end">
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star text-warning"></i>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="mb-3">
                    <p className="mb-2">
                      <i className="fa-solid fa-location-dot me-2"></i>
                      <strong>{location.address}</strong>
                    </p>
                    <p className="mb-2">
                      <i className="fa-solid fa-phone me-2"></i>
                      <a
                        href={`tel:${location.phone}`}
                        className="text-white text-decoration-none"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {location.phone}
                      </a>
                    </p>
                    <p className="mb-2">
                      <i className="fa-solid fa-envelope me-2"></i>
                      <a
                        href={`mailto:${location.email}`}
                        className="text-white text-decoration-none"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {location.email}
                      </a>
                    </p>
                    <p className="mb-0">
                      <i className="fa-solid fa-clock me-2"></i>
                      {location.hours}
                    </p>
                  </div>

                  {/* Manager Info */}
                  <div className="mb-3 p-2 rounded" style={{ background: 'rgba(255,255,255,0.1)' }}>
                    <small>
                      <i className="fa-solid fa-user-tie me-2"></i>
                      Manager: <strong>{location.manager}</strong>
                    </small>
                  </div>

                  {/* Features */}
                  <div className="mb-3">
                    <small className="d-block mb-2 text-white-50">Available Services:</small>
                    {location.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">
                        <i className="fa-solid fa-check-circle me-1"></i>
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="d-flex gap-2 mt-4">
                    <Button
                      className="action-button flex-grow-1"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleGetDirections(location.mapLink);
                      }}
                    >
                      <i className="fa-solid fa-directions me-2"></i>
                      Get Directions
                    </Button>
                    <Button
                      className="action-button flex-grow-1"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCallBranch(location.phone);
                      }}
                    >
                      <i className="fa-solid fa-phone me-2"></i>
                      Call Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Pickup Service Banner */}
        <div className="text-center mt-5">
          <Card className="pickup-badge d-inline-block border-0">
            <Card.Body className="p-4">
              <Row className="align-items-center g-3">
                <Col md={2} className="text-center">
                  <i className="fa-solid fa-truck-fast fa-3x text-white"></i>
                </Col>
                <Col md={7} className="text-start">
                  <h5 className="text-white fw-bold mb-1">
                    Free Pickup & Delivery Service
                  </h5>
                  <p className="text-white mb-0">
                    Available across all 14 districts in Kerala • Same-day pickup available
                  </p>
                </Col>
                <Col md={3}>
                  <Link to="/laptop-repair">
                    <Button variant="light" size="lg" className="w-100">
                      <i className="fa-solid fa-calendar-check me-2"></i>
                      Schedule Pickup
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>

        {/* Emergency Contact */}
        <div className="text-center mt-4">
          <p className="text-white mb-2">
            <i className="fa-solid fa-headset me-2"></i>
            24/7 Emergency Support:
            <a href="tel:+918589856891" className="text-white fw-bold ms-2 text-decoration-none">
              +91 8589856891
            </a>
          </p>
        </div>
      </Container>
      <Container className="py-5 animate-fade-up">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h2 className="mb-4 text-center">What We Do</h2>
            <p style={{ color: '#772953' }}>
              Our expert technicians diagnose and repair a wide range of laptop issues. From cracked screens
              and battery problems to virus removal and data recovery, we provide reliable and affordable
              solutions with fast turnaround time.
            </p>
            <p style={{ color: '#772953' }}>
              We only use genuine parts and provide warranty on all major repairs. Walk-in service available,
              or book online for priority support.
            </p>
          </Col>
        </Row>
      </Container>


      <div className=" text-white text-center py-5 mt-4 bg-white">
        <h2 className='text-black '>Need Laptop Help Today?</h2>
        <p style={{ color: '#772953' }}>Book a repair or drop by — expert support awaits you.</p>
        <Link to={'/laptop-repair'}>
          <Button variant="outline-primary" size="lg">Book Now</Button>
        </Link>

      </div>
    </div>
  );
}

export default LaptopServicePage;
