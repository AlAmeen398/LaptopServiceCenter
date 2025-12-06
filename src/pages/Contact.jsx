import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <style>{`
        .contact-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 4rem 0;
        }
        
        .contact-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
        }
        
        .contact-icon {
          font-size: 2.5rem;
          color: #667eea;
          margin-bottom: 1rem;
        }
        
        .map-container {
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }
        
        .social-links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #f8f9fa;
          color: #333;
          margin: 0 10px;
          transition: all 0.3s ease;
        }
        
        .social-links a:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        .social-links a.facebook:hover {
          background: #1877f2;
          color: white;
        }
        
        .social-links a.twitter:hover {
          background: #1da1f2;
          color: white;
        }
        
        .social-links a.instagram:hover {
          background: #e4405f;
          color: white;
        }
        
        .social-links a.linkedin:hover {
          background: #0077b5;
          color: white;
        }
      `}</style>

      {/* Header Section */}
      <div className="contact-header text-center">
        <Container>
          <h1 className="display-4 mb-3">Get In Touch</h1>
          <p className="lead">We'd love to hear from you. Our team is here to help!</p>
        </Container>
      </div>

      {/* Contact Information Cards */}
      <Container className="py-5">
        <Row className="g-4 mb-5">
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm contact-card text-center p-4">
              <div className="contact-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <h5>Visit Us</h5>
              <p className="text-muted mb-2">
                <strong>Ernakulam Office</strong><br />
                MG Road, Ernakulam<br />
                Kerala, India
              </p>
              <p className="text-muted mb-0">
                <strong>Trivandrum Office</strong><br />
                Statue Junction, Trivandrum<br />
                Kerala, India
              </p>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm contact-card text-center p-4">
              <div className="contact-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <h5>Call Us</h5>
              <p className="text-muted mb-2">
                <strong>Customer Support</strong><br />
                <a href="tel:+918589856891" className="text-decoration-none">+91 8589856891</a>
              </p>
              <p className="text-muted mb-0">
                <strong>Office Hours</strong><br />
                Mon - Sat: 9:00 AM - 7:00 PM<br />
                Sunday: Closed
              </p>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm contact-card text-center p-4">
              <div className="contact-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <h5>Email Us</h5>
              <p className="text-muted mb-2">
                <strong>General Inquiries</strong><br />
                <a href="mailto:chipfixlap@gmail.com" className="text-decoration-none">chipfixlap@gmail.com</a>
              </p>
              <p className="text-muted mb-0">
                <strong>Support</strong><br />
                <a href="mailto:support@chipfix.com" className="text-decoration-none">support@chipfix.com</a>
              </p>
            </Card>
          </Col>
        </Row>

        {/* Contact Form and Map */}
        <Row className="g-4">
          <Col lg={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <h3 className="mb-4">Send Us a Message</h3>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Subject *</Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Enter subject"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" size="lg" className="w-100">
                    <i className="fa-solid fa-paper-plane me-2"></i>
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <h3 className="mb-4">Find Us on Map</h3>
                <div className="map-container mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0447!2d76.2673!3d9.9816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTgnNTMuOCJOIDc2wrAxNicwMi40IkU!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="ChipFix Location"
                  ></iframe>
                </div>

                <h5 className="mb-3">Follow Us</h5>
                <div className="social-links text-center">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
                    <i className="fab fa-facebook-f fa-lg"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
                    <i className="fab fa-twitter fa-lg"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
                    <i className="fab fa-instagram fa-lg"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">
                    <i className="fab fa-linkedin-in fa-lg"></i>
                  </a>
                </div>

                <div className="mt-4 p-3 bg-light rounded">
                  <h6 className="mb-2">
                    <i className="fa-solid fa-clock me-2 text-primary"></i>
                    Business Hours
                  </h6>
                  <p className="mb-1 small">Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p className="mb-1 small">Saturday: 10:00 AM - 6:00 PM</p>
                  <p className="mb-0 small">Sunday: Closed</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
