import React from 'react'
import { Button, Card, Col, Container, Form, Row, Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Support() {
  const navigate = useNavigate();
  
  const supportOptions = [
    {
      icon: 'fa-headset',
      iconColor: 'text-success',
      bgColor: 'bg-primary',
      title: 'Contact Support',
      description: 'Need to speak with us? Our support team is available 24/7 to assist you.',
      buttonText: 'Contact Us',
      buttonVariant: 'success',
      buttonIcon: 'fa-comments',
      link: '/contact'
    },
    {
      icon: 'fa-book-open',
      iconColor: 'text-primary',
      bgColor: 'bg-success',
      title: 'Knowledge Base',
      description: 'Find FAQs, manuals, and troubleshooting guides easily in our library.',
      buttonText: 'Browse Articles',
      buttonVariant: 'primary',
      buttonIcon: 'fa-book',
      link: '/knowledge-base'
    },
    {
      icon: 'fa-shield-halved',
      iconColor: 'text-success',
      bgColor: 'bg-warning',
      title: 'Warranty & Repairs',
      description: 'Check your warranty status or request a professional repair service.',
      buttonText: 'Check Warranty',
      buttonVariant: 'success',
      buttonIcon: 'fa-certificate',
      link: '/warranty-repairs'
    }
  ];

  const statistics = [
    { icon: 'fa-users', value: '100K+', label: 'Happy Customers', bgColor: '#e95420' },
    { icon: 'fa-clock', value: '24-48h', label: 'Repair Time', bgColor: '#772953' },
    { icon: 'fa-star', value: '4.8/5', label: 'Rating', bgColor: '#e95420' },
    { icon: 'fa-shield-halved', value: '90d', label: 'Warranty', bgColor: '#772953' }
  ];

  const topics = [
    {
      icon: 'fa-screwdriver-wrench',
      iconColor: 'text-primary',
      bgColor: 'bg-primary',
      title: 'How to book a repair?',
      description: 'Step-by-step guide to schedule service'
    },
    {
      icon: 'fa-credit-card',
      iconColor: 'text-success',
      bgColor: 'bg-success',
      title: 'Payment methods accepted',
      description: 'Learn about payment options'
    },
    {
      icon: 'fa-truck',
      iconColor: 'text-success',
      bgColor: 'bg-warning',
      title: 'Pickup and delivery service',
      description: 'Free pickup across Kerala'
    },
    {
      icon: 'fa-clock-rotate-left',
      iconColor: 'text-primary',
      bgColor: 'bg-info',
      title: 'Track repair status',
      description: 'Check your device status online'
    }
  ];

  const locations = [
    {
      branch: 'Main Branch',
      badgeColor: 'primary',
      iconColor: 'text-primary',
      city: 'Ernakulam',
      address: 'MG Road, Near South Railway Station, Ernakulam, Kerala 682016',
      phone: '+91 8589856891',
      buttonVariant: 'primary'
    },
    {
      branch: 'Branch',
      badgeColor: 'success',
      iconColor: 'text-success',
      city: 'Trivandrum',
      address: 'Statue Junction, Near Secretariat, Trivandrum, Kerala 695001',
      phone: '+91 8589856892',
      buttonVariant: 'success'
    }
  ];

  return (
    <>
    <style>{`
      .support-card {
        transition: all 0.3s ease;
        border-radius: 15px;
      }
      
      .support-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 35px rgba(0,0,0,0.2) !important;
      }
      
      .stat-card {
        transition: all 0.3s ease;
        border-radius: 10px;
      }
      
      .stat-card:hover {
        transform: scale(1.05);
      }
      
      .topic-card {
        transition: all 0.3s ease;
        cursor: pointer;
        border-radius: 10px;
      }
      
      .topic-card:hover {
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        transform: translateX(10px);
      }
      
      .location-card {
        transition: all 0.3s ease;
        border-radius: 15px;
      }
      
      .location-card:hover {
        box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3) !important;
      }
      
      .icon-pulse {
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
    <div className="min-vh-100" style={{ background: 'linear-gradient(135deg, #f5e6ef 0%, #e8d4e0 100%)' }}>
      {/* Page Header */}
      <Container className="text-center py-5">
        <h1 className="display-3 fw-bold mb-3" style={{ color: '#111011ff' }}>
          <i className="fa-solid fa-headset me-3"></i>
          Support Center
        </h1>
        <p className="lead fs-4" >We're here to help you 24/7. Find the support you need below.</p>
        <Badge className="px-4 py-2 fs-6" style={{ backgroundColor: '#772953', color: 'white' }}>
          <i className="fa-solid fa-clock me-2"></i>
          Response Time: Under 2 Hours
        </Badge>
      </Container>

      {/* Support Options */}
      <Container className="py-5">
        <Row className="g-4 text-center mb-5">
          {supportOptions.map((option, index) => (
            <Col xs={12} md={4} key={index}>
              <Card className="support-card h-100 shadow-lg border-0 bg-white">
                <Card.Body className="p-4">
                  <div className={`${option.bgColor} bg-opacity-10 rounded-circle d-inline-flex p-4 mb-4`}>
                    <i className={`fa-solid ${option.icon} fa-3x ${option.iconColor}`}></i>
                  </div>
                  <Card.Title className="h4 mb-3 fw-bold">{option.title}</Card.Title>
                  <Card.Text className="text-muted mb-4">{option.description}</Card.Text>
                  <Button 
                    variant={option.buttonVariant} 
                    size="lg" 
                    className={`px-4 shadow-sm ${option.buttonVariant === 'success' && option.title === 'Warranty & Repairs' ? 'text-white' : ''}`}
                    onClick={() => navigate(option.link)}
                  >
                    <i className={`fa-solid ${option.buttonIcon} me-2`}></i>
                    {option.buttonText}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Quick Help Section */}
      <Container className="py-5 bg-light">
        <Card className="shadow-lg border-0 rounded-4">
          <Card.Body className="p-5">
            <Row className="align-items-center">
              <Col md={8}>
                <h3 className="mb-4 fw-bold">
                  <i className="fa-solid fa-phone-volume text-primary me-3 icon-pulse"></i>
                  Need Immediate Assistance?
                </h3>
                <p className="text-muted mb-3 fs-5">
                  Our customer support team is available Monday to Saturday, 9:00 AM - 7:00 PM.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Badge bg="primary" className="px-3 py-2 fs-6">
                    <i className="fa-solid fa-phone me-2"></i>
                    +91 8589856891
                  </Badge>
                  <Badge bg="success" className="px-3 py-2 fs-6">
                    <i className="fa-solid fa-envelope me-2"></i>
                    chipfixlap@gmail.com
                  </Badge>
                </div>
              </Col>
              <Col md={4} className="text-center mt-4 mt-md-0">
                <Button variant="primary" size="lg" className="px-5 py-3 shadow" onClick={() => navigate('/contact')}>
                  <i className="fa-solid fa-comments me-2"></i>
                  Start Chat
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>

      {/* Service Statistics */}
      <Container className="py-5">
        <h2 className="text-center mb-5 fw-bold display-6">Why Choose Our Support?</h2>
        <Row className="g-4 text-center">
          {statistics.map((stat, index) => (
            <Col xs={6} md={3} key={index}>
              <Card className="stat-card border-0 shadow-lg h-100 bg-gradient text-white" style={{backgroundColor: stat.bgColor}}>
                <Card.Body className="p-4">
                  <i className={`fa-solid ${stat.icon} fa-4x mb-4`}></i>
                  <h1 className="fw-bold mb-2 display-5">{stat.value}</h1>
                  <p className="mb-0 fs-5">{stat.label}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Popular Support Topics */}
      <Container className="py-5 bg-light">
        <h2 className="text-center mb-5 fw-bold display-6">Popular Support Topics</h2>
        <Row className="g-4">
          {topics.map((topic, index) => (
            <Col md={6} key={index}>
              <Card className="topic-card border-0 shadow-sm">
                <Card.Body className="p-4 d-flex align-items-center">
                  <div className={`${topic.bgColor} bg-opacity-10 rounded-circle p-3 me-4`}>
                    <i className={`fa-solid ${topic.icon} fa-2x ${topic.iconColor}`}></i>
                  </div>
                  <div>
                    <h5 className="mb-2 fw-bold">{topic.title}</h5>
                    <small className="text-muted">{topic.description}</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Service Locations */}
      <Container className="py-5">
        <h2 className="text-center mb-5 fw-bold display-6">Our Service Centers</h2>
        <Row className="g-4">
          {locations.map((location, index) => (
            <Col md={6} key={index}>
              <Card className="location-card border-0 shadow-lg h-100">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start mb-4">
                    <div className={`bg-${location.badgeColor} bg-opacity-10 rounded-circle p-3 me-3`}>
                      <i className={`fa-solid fa-location-dot fa-3x ${location.iconColor}`}></i>
                    </div>
                    <div>
                      <Badge bg={location.badgeColor} className="mb-2 px-3 py-2">{location.branch}</Badge>
                      <h4 className="fw-bold mb-3">{location.city}</h4>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-start mb-3">
                      <i className="fa-solid fa-map-marker-alt text-black me-3 mt-1"></i>
                      <p className="text-muted mb-0">{location.address}</p>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <i className="fa-solid fa-phone text-black me-3"></i>
                      <p className="text-muted mb-0 fw-bold">{location.phone}</p>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <i className="fa-solid fa-clock text-black me-3"></i>
                      <p className="text-muted mb-0">Mon-Sat: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                  <Button variant={location.buttonVariant} className="w-100 shadow-sm" onClick={() => navigate('/contact')}>
                    <i className="fa-solid fa-directions me-2"></i>
                    Get Directions
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Emergency Support Banner */}
      <Container className="py-5 mb-5">
        <Card className="border-0 shadow-lg rounded-4 overflow-hidden" style={{ background: 'linear-gradient(135deg, #6f7db8ff 0%, #a682c9ff 100%)' }}>
          <Card.Body className="text-center text-white p-5">
            <div className="icon-pulse mb-4">
              <i className="fa-solid fa-headset fa-5x"></i>
            </div>
            <h2 className="display-5 fw-bold mb-3">Need Emergency Support?</h2>
            <p className="lead mb-4 fs-4">
              We understand device issues can be urgent. Our express service gets your device fixed fast!
            </p>
            <Badge bg="success" text="black" className="px-4 py-3 mb-4 fs-5">
              <i className="fa-solid fa-bolt me-2"></i>
              Express Service Available
            </Badge>
            <div className="d-flex gap-4 justify-content-center flex-wrap mt-4">
              <Button variant="light" size="lg" className="px-5 py-3 fw-bold shadow" onClick={() => navigate('/laptop-repair')}>
                <i className="fa-solid fa-wrench me-2"></i>
                Book Express Repair
              </Button>
              <Button variant="outline-light" size="lg" className="px-5 py-3 fw-bold" onClick={() => window.location.href = 'tel:+918589856891'}>
                <i className="fa-solid fa-phone me-2"></i>
                Call Now
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>

      
    </div>
    </>
  )
}

export default Support