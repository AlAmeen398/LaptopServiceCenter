import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LaptopService() {
  return (
    <>
      <div className="min-vh-100 d-flex flex-column" style={{ background: 'linear-gradient(to bottom, #f0f2f5, #d9e4f5)' }}>
        {/* Page Header */}
        <Container className="text-center py-5">
          <h1 className="fw-bold">Laptop Service Center</h1>
          <p className="text-muted">Get professional help for repairs, upgrades, and diagnostics.</p>
        </Container>

        {/* Service Options */}
        <Container className="py-4">
          <Row className="g-4 text-center">
            <Col xs={12} md={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <div className="d-flex justify-content-center mb-3">
                    <i className="fa-solid fa-stethoscope fa-2xl text-primary"></i>
                  </div>
                  <Card.Title>Diagnosis</Card.Title>
                  <Card.Text>Comprehensive health checks and troubleshooting for your device.</Card.Text>
                  <Link to={'/diagnostics'}>
                  <Button variant="primary">Book Diagnosis</Button>
                  </Link>
                  
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <div className="d-flex justify-content-center mb-3">
                    <i className="fa-solid fa-screwdriver-wrench fa-2xl text-success"></i>
                  </div>
                  <Card.Title>Repair Services</Card.Title>
                  <Card.Text>Screen replacements, battery changes, motherboard repairs, and more.</Card.Text>
                  <Button variant="success">Schedule Repair</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <div className="d-flex justify-content-center mb-3">
                    <i className="fa-solid fa-arrow-up-right-dots fa-2xl text-warning"></i>
                  </div>
                  <Card.Title>Upgrades</Card.Title>
                  <Card.Text>Boost your laptop's performance with RAM, SSD, and software upgrades.</Card.Text>
                  <Button variant="warning" className="text-white">Upgrade Now</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* Service Booking Form */}
        <Container className="py-5">
          <h2 className="text-center mb-4 fw-bold">Book a Service</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <Card className="shadow-sm p-4">
                <Form>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formService">
                    <Form.Label>Service Type</Form.Label>
                    <Form.Select required>
                      <option value="">Select a service</option>
                      <option value="diagnosis">Diagnosis</option>
                      <option value="repair">Repair</option>
                      <option value="upgrade">Upgrade</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formDetails">
                    <Form.Label>Additional Details</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Describe your laptop issue or service request" />
                  </Form.Group>

                  <div className="text-center">
                    <Button variant="primary" type="submit">
                      Submit Booking
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

export default LaptopService
