import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

function Diagnostics() {
  return (
    <>
      <div className="min-vh-100 d-flex flex-column" style={{ background: 'linear-gradient(to bottom, #f7f9fc, #dce7f9)' }}>
        {/* Page Header */}
        <Container className="text-center py-5">
          <h1 className="fw-bold">Laptop Diagnostics</h1>
          <p className="text-muted">Identify and resolve laptop issues with our expert diagnostic services.</p>
        </Container>

        {/* Diagnostics Features */}
        <Container className="py-4">
          <Row className="g-4 text-center">
            <Col xs={12} md={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <div className="d-flex justify-content-center mb-3">
                    <i className="fa-solid fa-microchip fa-2xl text-primary"></i>
                  </div>
                  <Card.Title>Hardware Check</Card.Title>
                  <Card.Text>We thoroughly test your laptop’s CPU, RAM, hard drive, battery, and motherboard health.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <div className="d-flex justify-content-center mb-3">
                    <i className="fa-solid fa-bug fa-2xl text-danger"></i>
                  </div>
                  <Card.Title>Software Diagnostics</Card.Title>
                  <Card.Text>Scan and fix operating system errors, malware infections, and driver conflicts.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <div className="d-flex justify-content-center mb-3">
                    <i className="fa-solid fa-temperature-high fa-2xl text-warning"></i>
                  </div>
                  <Card.Title>Thermal Analysis</Card.Title>
                  <Card.Text>Identify overheating issues and cooling system inefficiencies affecting performance.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        
      </div>
    </>
  )
}

export default Diagnostics
