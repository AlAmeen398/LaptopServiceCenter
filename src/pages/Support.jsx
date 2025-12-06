import React from 'react'
import { Button, Card, Col, Container, Form, Row, Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Support() {
  const navigate = useNavigate();
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
        <p className="lead fs-4" style={{ color: '#5a1f3f' }}>We're here to help you 24/7. Find the support you need below.</p>
        <Badge className="px-4 py-2 fs-6" style={{ backgroundColor: '#772953', color: 'white' }}>
          <i className="fa-solid fa-clock me-2"></i>
          Response Time: Under 2 Hours
        </Badge>
      </Container>

      {/* Support Options */}
      <Container className="py-5">
        <Row className="g-4 text-center mb-5">
          <Col xs={12} md={4}>
            <Card className="support-card h-100 shadow-lg border-0 bg-white">
              <Card.Body className="p-4">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-4 mb-4">
                  <i className="fa-solid fa-headset fa-3x text-primary"></i>
                </div>
                <Card.Title className="h4 mb-3 fw-bold">Contact Support</Card.Title>
                <Card.Text className="text-muted mb-4">Need to speak with us? Our support team is available 24/7 to assist you.</Card.Text>
                <Button variant="primary" size="lg" className="px-4 shadow-sm" onClick={() => navigate('/contact')}>
                  <i className="fa-solid fa-comments me-2"></i>
                  Contact Us
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="support-card h-100 shadow-lg border-0 bg-white">
              <Card.Body className="p-4">
                <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex p-4 mb-4">
                  <i className="fa-solid fa-book-open fa-3x text-success"></i>
                </div>
                <Card.Title className="h4 mb-3 fw-bold">Knowledge Base</Card.Title>
                <Card.Text className="text-muted mb-4">Find FAQs, manuals, and troubleshooting guides easily in our library.</Card.Text>
                <Button variant="success" size="lg" className="px-4 shadow-sm" onClick={() => navigate('/knowledge-base')}>
                  <i className="fa-solid fa-book me-2"></i>
                  Browse Articles
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="support-card h-100 shadow-lg border-0 bg-white">
              <Card.Body className="p-4">
                <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex p-4 mb-4">
                  <i className="fa-solid fa-shield-halved fa-3x text-warning"></i>
                </div>
                <Card.Title className="h4 mb-3 fw-bold">Warranty & Repairs</Card.Title>
                <Card.Text className="text-muted mb-4">Check your warranty status or request a professional repair service.</Card.Text>
                <Button variant="warning" size="lg" className="px-4 shadow-sm text-white" onClick={() => navigate('/warranty-repairs')}>
                  <i className="fa-solid fa-certificate me-2"></i>
                  Check Warranty
                </Button>
              </Card.Body>
            </Card>
          </Col>
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
          <Col xs={6} md={3}>
            <Card className="stat-card border-0 shadow-lg h-100 bg-primary bg-gradient text-white">
              <Card.Body className="p-4">
                <i className="fa-solid fa-users fa-4x mb-4"></i>
                <h1 className="fw-bold mb-2 display-5">100K+</h1>
                <p className="mb-0 fs-5">Happy Customers</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className="stat-card border-0 shadow-lg h-100 bg-success bg-gradient text-white">
              <Card.Body className="p-4">
                <i className="fa-solid fa-clock fa-4x mb-4"></i>
                <h1 className="fw-bold mb-2 display-5">24-48h</h1>
                <p className="mb-0 fs-5">Repair Time</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className="stat-card border-0 shadow-lg h-100 bg-warning bg-gradient text-white">
              <Card.Body className="p-4">
                <i className="fa-solid fa-star fa-4x mb-4"></i>
                <h1 className="fw-bold mb-2 display-5">4.8/5</h1>
                <p className="mb-0 fs-5">Rating</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className="stat-card border-0 shadow-lg h-100 bg-danger bg-gradient text-white">
              <Card.Body className="p-4">
                <i className="fa-solid fa-shield-halved fa-4x mb-4"></i>
                <h1 className="fw-bold mb-2 display-5">90d</h1>
                <p className="mb-0 fs-5">Warranty</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Popular Support Topics */}
      <Container className="py-5 bg-light">
        <h2 className="text-center mb-5 fw-bold display-6">Popular Support Topics</h2>
        <Row className="g-4">
          <Col md={6}>
            <Card className="topic-card border-0 shadow-sm">
              <Card.Body className="p-4 d-flex align-items-center">
                <div className="bg-primary bg-opacity-10 rounded-circle p-3 me-4">
                  <i className="fa-solid fa-screwdriver-wrench fa-2x text-primary"></i>
                </div>
                <div>
                  <h5 className="mb-2 fw-bold">How to book a repair?</h5>
                  <small className="text-muted">Step-by-step guide to schedule service</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="topic-card border-0 shadow-sm">
              <Card.Body className="p-4 d-flex align-items-center">
                <div className="bg-success bg-opacity-10 rounded-circle p-3 me-4">
                  <i className="fa-solid fa-credit-card fa-2x text-success"></i>
                </div>
                <div>
                  <h5 className="mb-2 fw-bold">Payment methods accepted</h5>
                  <small className="text-muted">Learn about payment options</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="topic-card border-0 shadow-sm">
              <Card.Body className="p-4 d-flex align-items-center">
                <div className="bg-warning bg-opacity-10 rounded-circle p-3 me-4">
                  <i className="fa-solid fa-truck fa-2x text-warning"></i>
                </div>
                <div>
                  <h5 className="mb-2 fw-bold">Pickup and delivery service</h5>
                  <small className="text-muted">Free pickup across Kerala</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="topic-card border-0 shadow-sm">
              <Card.Body className="p-4 d-flex align-items-center">
                <div className="bg-info bg-opacity-10 rounded-circle p-3 me-4">
                  <i className="fa-solid fa-clock-rotate-left fa-2x text-info"></i>
                </div>
                <div>
                  <h5 className="mb-2 fw-bold">Track repair status</h5>
                  <small className="text-muted">Check your device status online</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Service Locations */}
      <Container className="py-5">
        <h2 className="text-center mb-5 fw-bold display-6">Our Service Centers</h2>
        <Row className="g-4">
          <Col md={6}>
            <Card className="location-card border-0 shadow-lg h-100">
              <Card.Body className="p-4">
                <div className="d-flex align-items-start mb-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                    <i className="fa-solid fa-location-dot fa-3x text-primary"></i>
                  </div>
                  <div>
                    <Badge bg="primary" className="mb-2 px-3 py-2">Main Branch</Badge>
                    <h4 className="fw-bold mb-3">Ernakulam</h4>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex align-items-start mb-3">
                    <i className="fa-solid fa-map-marker-alt text-primary me-3 mt-1"></i>
                    <p className="text-muted mb-0">MG Road, Near South Railway Station, Ernakulam, Kerala 682016</p>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-phone text-success me-3"></i>
                    <p className="text-muted mb-0 fw-bold">+91 8589856891</p>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-clock text-warning me-3"></i>
                    <p className="text-muted mb-0">Mon-Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
                <Button variant="primary" className="w-100 shadow-sm" onClick={() => navigate('/contact')}>
                  <i className="fa-solid fa-directions me-2"></i>
                  Get Directions
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="location-card border-0 shadow-lg h-100">
              <Card.Body className="p-4">
                <div className="d-flex align-items-start mb-4">
                  <div className="bg-success bg-opacity-10 rounded-circle p-3 me-3">
                    <i className="fa-solid fa-location-dot fa-3x text-success"></i>
                  </div>
                  <div>
                    <Badge bg="success" className="mb-2 px-3 py-2">Branch</Badge>
                    <h4 className="fw-bold mb-3">Trivandrum</h4>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex align-items-start mb-3">
                    <i className="fa-solid fa-map-marker-alt text-success me-3 mt-1"></i>
                    <p className="text-muted mb-0">Statue Junction, Near Secretariat, Trivandrum, Kerala 695001</p>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-phone text-success me-3"></i>
                    <p className="text-muted mb-0 fw-bold">+91 8589856892</p>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-clock text-warning me-3"></i>
                    <p className="text-muted mb-0">Mon-Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
                <Button variant="success" className="w-100 shadow-sm" onClick={() => navigate('/contact')}>
                  <i className="fa-solid fa-directions me-2"></i>
                  Get Directions
                </Button>
              </Card.Body>
            </Card>
          </Col>
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
            <Badge bg="warning" text="dark" className="px-4 py-3 mb-4 fs-5">
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