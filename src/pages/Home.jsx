import React from 'react'
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import backgroundImage from '../assets/images/pexels-sora-shimazaki-5668859.jpg'



function Home() {
  return (
    <>
      <div
        className="min-vh-100 d-flex flex-column"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
        }}
      >

        <div
          className="text-white text-center py-2 d-flex justify-content-between align-items-center px-4"
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
          }}
        >
          <div className='text-white fw-bold'>
            Expert repairs for smartphones, tablets, laptops & mor
          </div>
          <div className="d-flex gap-3">
            <Link to={'/loginpage'}>
              <button className="btn btn-outline-light btn-sm">Login</button>
            </Link>
            <Link to={'/laptop-services'}>
            <button className="btn btn-outline-light btn-sm">Book a Repair</button>
            </Link>
            
            <Link to={'/adminlogin'}>
              <button className='btn btn-outline-light btn-sm'>Admin</button>
            </Link>

          </div>
        </div>


        <Container className="text-center py-5 text-white" style={{ flex: 1 }}>
          <h6 className="text-black ">Welcome to ChipFix Support</h6>
          <h1 className="mb-4 fw-bold text-black ">Search for the solution</h1>


          <Row className="justify-content-center">
            <Col md={6}>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Please describe your problem"
                  aria-label="Search"
                />
                <Button variant="primary">Search</Button>
              </InputGroup>
            </Col>
          </Row>
        </Container>


        <Container className="py-5">
          <Row className="g-4 text-center">

            <Col xs={12} md={3}>
              <Card
                className="h-100 shadow-lg text-dark"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '15px'
                }}
              >
                <Card.Body>
                  <i className="fa-solid fa-gears fa-2xl mb-3"></i>
                  <Card.Title className="mt-3">Technical Support</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card
                className="h-100 shadow-lg text-dark"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '15px'
                }}
              >
                <Card.Body>
                  <i className="fa-solid fa-file-lines fa-2xl mb-3"></i>
                  <Card.Title className="mt-3">Inquiry Service</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card
                className="h-100 shadow-lg text-dark"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '15px'
                }}
              >
                <Card.Body>
                  <i className="fa-solid fa-comments fa-2xl mb-3"></i>
                  <Card.Title className="mt-3">Sales & Event</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card
                className="h-100 shadow-lg text-dark"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '15px'
                }}
              >
                <Card.Body>
                  <i className="fa-solid fa-download fa-2xl mb-3"></i>
                  <Card.Title className="mt-3">Download Center</Card.Title>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>


        <div className="text-center text-white pb-5">
          Need to check the previous case?{" "}
          <a href="#" className="text-primary text-decoration-none">
            Check your case
          </a>
        </div>
      </div>
      
    </>
  )
}

export default Home
