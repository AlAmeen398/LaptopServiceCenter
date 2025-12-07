import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

function BestStaff() {
  const [staff] = useState([
    { 
      id: 1, 
      name: 'John Doe', 
      position: 'Senior Technician', 
      performance: 95, 
      attendance: 98, 
      rating: 4.8,
      achievements: ['Customer Satisfaction Award', 'Best Performer Q3'],
      image: 'https://i.pravatar.cc/150?img=12'
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      position: 'Technical Lead', 
      performance: 92, 
      attendance: 96, 
      rating: 4.7,
      achievements: ['Innovation Award', 'Team Player'],
      image: 'https://i.pravatar.cc/150?img=5'
    },
    { 
      id: 3, 
      name: 'Mike Johnson', 
      position: 'Manager', 
      performance: 90, 
      attendance: 95, 
      rating: 4.6,
      achievements: ['Leadership Excellence', 'Best Manager 2024'],
      image: 'https://i.pravatar.cc/150?img=33'
    },
  ]);

  const [currentMonth] = useState('December 2025');

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h2><i className="fa-solid fa-trophy text-warning me-2"></i>Best Staff of the Month</h2>
        <p className="text-muted">Highlight and reward the top-performing employee each month</p>
        <Badge bg="warning" className="text-dark fs-5 mt-2">{currentMonth}</Badge>
      </div>

      <Row className="mb-4">
        <Col md={12}>
          <Card className="shadow-lg border-warning border-3">
            <Card.Body>
              <Row className="align-items-center">
                <Col md={3} className="text-center">
                  <img 
                    src={staff[0].image} 
                    alt={staff[0].name}
                    className="rounded-circle mb-3"
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  />
                  <Badge bg="warning" className="text-dark">
                    <i className="fa-solid fa-crown me-1"></i>Winner
                  </Badge>
                </Col>
                <Col md={9}>
                  <h3>{staff[0].name}</h3>
                  <h5 className="text-muted mb-3">{staff[0].position}</h5>
                  
                  <Row className="mb-3">
                    <Col md={4}>
                      <Card className="text-center bg-light">
                        <Card.Body>
                          <h6 className="text-muted">Performance</h6>
                          <h3 className="text-success">{staff[0].performance}%</h3>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={4}>
                      <Card className="text-center bg-light">
                        <Card.Body>
                          <h6 className="text-muted">Attendance</h6>
                          <h3 className="text-primary">{staff[0].attendance}%</h3>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={4}>
                      <Card className="text-center bg-light">
                        <Card.Body>
                          <h6 className="text-muted">Rating</h6>
                          <h3 className="text-warning">
                            {staff[0].rating} <i className="fa-solid fa-star"></i>
                          </h3>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>

                  <div>
                    <h6 className="mb-2">Achievements:</h6>
                    {staff[0].achievements.map((achievement, index) => (
                      <Badge bg="success" className="me-2 mb-2" key={index}>
                        <i className="fa-solid fa-award me-1"></i>{achievement}
                      </Badge>
                    ))}
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h4 className="mb-3">Top Performers</h4>
      <Row>
        {staff.slice(1).map((member, index) => (
          <Col md={6} key={member.id}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="rounded-circle me-3"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                  <div>
                    <h5 className="mb-0">{member.name}</h5>
                    <p className="text-muted mb-0">{member.position}</p>
                    <Badge bg="secondary">Rank #{index + 2}</Badge>
                  </div>
                </div>

                <Row className="mb-2">
                  <Col xs={4}>
                    <small className="text-muted">Performance</small>
                    <div><strong>{member.performance}%</strong></div>
                  </Col>
                  <Col xs={4}>
                    <small className="text-muted">Attendance</small>
                    <div><strong>{member.attendance}%</strong></div>
                  </Col>
                  <Col xs={4}>
                    <small className="text-muted">Rating</small>
                    <div><strong>{member.rating} <i className="fa-solid fa-star text-warning"></i></strong></div>
                  </Col>
                </Row>

                <div className="mt-3">
                  {member.achievements.map((achievement, idx) => (
                    <Badge bg="info" className="me-1 mb-1" key={idx}>
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-4">
        <Button variant="warning" size="lg" className="text-white">
          <i className="fa-solid fa-trophy me-2"></i>Select This Month's Winner
        </Button>
      </div>
    </Container>
  );
}

export default BestStaff;
