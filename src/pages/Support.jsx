import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

function Support() {
  return (
    <>
    <div className="min-vh-100 d-flex flex-column" style={{ background: 'linear-gradient(to bottom, #e0eafc, #cfdef3)' }}>
      {/* Page Header */}
      <Container className="text-center py-5">
        <h1 className="fw-bold">Support Center</h1>
        <p className="text-muted">We're here to help you. Find the support you need below.</p>
      </Container>

      {/* Support Options */}
      <Container className="py-4">
        <Row className="g-4 text-center">
          <Col xs={12} md={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <i className="fa-solid fa-headset fa-2xl text-primary mb-3"></i>
                <Card.Title>Contact Support</Card.Title>
                <Card.Text>Need to speak with us? Our support team is available 24/7.</Card.Text>
                <Button variant="primary">Contact Us</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <i className="fa-solid fa-book-open fa-2xl text-success mb-3"></i>
                <Card.Title>Knowledge Base</Card.Title>
                <Card.Text>Find FAQs, manuals, and troubleshooting guides easily.</Card.Text>
                <Button variant="success">Browse Articles</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <i className="fa-solid fa-shield-halved fa-2xl text-warning mb-3"></i>
                <Card.Title>Warranty & Repairs</Card.Title>
                <Card.Text>Check your warranty status or request a repair service.</Card.Text>
                <Button variant="warning" className="text-white">Check Warranty</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Submit a Ticket Form */}
      <Container className="py-5">
        <h2 className="text-center mb-4 fw-bold">Submit a Support Ticket</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-sm p-4">
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formIssue">
                  <Form.Label>Issue Description</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Describe your issue" />
                </Form.Group>

                <div className="text-center">
                  <Button variant="primary" type="submit">
                    Submit Ticket
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default Support