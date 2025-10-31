import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center m-5" style={{ minHeight: '100vh', width:'100%' }}>
        <Row>
          <Col sm={12} md={12} lg={12} style={{ width:"400px"}}>
            <Card style={{ backgroundColor: "white", border: 'none', boxShadow: '20px 20px 21px' }}>
              <Card.Body className='shadow-lg'>
                <h2 className="text-center mb-4">Contact Us</h2>

                {submitted && <div className="alert alert-success">Thank you for contacting us! We will get back to you soon.</div>}

                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formMessage" className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={4}
                      placeholder="Write your message here"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Send Message
                  </Button>
                </Form>

                {/* Contact Info Section */}
                <div className="mt-5 text-center">
                  <h5>ChipFix</h5>
                  <p>ChipFix, Seaport - Airport Rd, Echamuku, Kunnumpuram, Thrikkakara, Infopark, Kochi, Kakkanad, Kerala 682030</p>
                  <p>Email: chipfix@gmail.com</p>
                  <p>Phone: +91 8589856891</p>
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
