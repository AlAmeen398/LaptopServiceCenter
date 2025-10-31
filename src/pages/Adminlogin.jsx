import React from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AdminLogin() {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(to right, #74ebd5, #ACB6E5)' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="shadow-lg p-4">
              <Card.Body>
                <h2 className="text-center mb-4 fw-bold">Admin Login</h2>
                <p className="text-center text-muted mb-4">Please enter your credentials to continue</p>

                <Form>
                  <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                  </Form.Group>

                  <div className="d-grid">
                    <Link to={'/admindashboard'}>
                    <Button variant="primary" type="submit">
                      Login
                    </Button>
                    </Link>
                    
                  </div>
                </Form>

                <div className="text-center mt-3">
                  <a href="#" className="text-decoration-none text-primary">Forgot Password?</a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AdminLogin
