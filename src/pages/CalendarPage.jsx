import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, ListGroup } from 'react-bootstrap';

function CalendarPage() {
  const [events] = useState([
    { id: 1, date: '2025-12-10', title: 'Team Meeting', type: 'meeting', time: '10:00 AM' },
    { id: 2, date: '2025-12-15', title: 'Christmas Party', type: 'holiday', time: 'All Day' },
    { id: 3, date: '2025-12-20', title: 'Quarterly Review', type: 'meeting', time: '2:00 PM' },
    { id: 4, date: '2025-12-25', title: 'Christmas Holiday', type: 'holiday', time: 'All Day' },
    { id: 5, date: '2025-12-31', title: 'New Year Eve', type: 'holiday', time: 'All Day' },
    { id: 6, date: '2026-01-01', title: 'New Year', type: 'holiday', time: 'All Day' },
  ]);

  const getEventBadge = (type) => {
    return type === 'holiday' ? 'danger' : type === 'meeting' ? 'primary' : 'info';
  };

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2><i className="fa-solid fa-calendar-days text-warning me-2"></i>Calendar & Events</h2>
          <p className="text-muted">View upcoming holidays, meetings and important events</p>
        </div>
        <Button variant="warning" className="text-white">
          <i className="fa-solid fa-plus me-2"></i>Add Event
        </Button>
      </div>

      <Row>
        <Col lg={8}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <h5 className="mb-4">Upcoming Events</h5>
              <ListGroup>
                {events.map((event) => (
                  <ListGroup.Item key={event.id} className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="mb-1">{event.title}</h6>
                      <small className="text-muted">
                        <i className="fa-solid fa-calendar me-2"></i>
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'short', 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                        <i className="fa-solid fa-clock ms-3 me-2"></i>
                        {event.time}
                      </small>
                    </div>
                    <Badge bg={getEventBadge(event.type)} className="text-capitalize">
                      {event.type}
                    </Badge>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <h6 className="mb-3">Quick Stats</h6>
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-2">
                  <span>Total Events</span>
                  <Badge bg="primary">{events.length}</Badge>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Holidays</span>
                  <Badge bg="danger">{events.filter(e => e.type === 'holiday').length}</Badge>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Meetings</span>
                  <Badge bg="info">{events.filter(e => e.type === 'meeting').length}</Badge>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card className="shadow-sm">
            <Card.Body>
              <h6 className="mb-3">This Month</h6>
              <div className="text-center">
                <h1 className="display-4">December</h1>
                <p className="text-muted">2025</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CalendarPage;
