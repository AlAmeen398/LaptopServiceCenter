import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Button, Form, Badge } from 'react-bootstrap';

function Bonuses() {
  const [bonuses] = useState([
    { id: 1, employee: 'John Doe', type: 'Performance', amount: 5000, date: '2025-12-01', status: 'Approved' },
    { id: 2, employee: 'Jane Smith', type: 'Festive', amount: 7000, date: '2025-12-10', status: 'Approved' },
    { id: 3, employee: 'Mike Johnson', type: 'Annual', amount: 10000, date: '2025-12-15', status: 'Pending' },
    { id: 4, employee: 'Sarah Williams', type: 'Performance', amount: 3000, date: '2025-12-05', status: 'Approved' },
    { id: 5, employee: 'David Brown', type: 'Festive', amount: 4000, date: '2025-12-12', status: 'Approved' },
  ]);

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2><i className="fa-solid fa-gift text-danger me-2"></i>Bonuses Management</h2>
          <p className="text-muted">Handle special performance bonuses and festive allowances</p>
        </div>
        <Button variant="danger">
          <i className="fa-solid fa-plus me-2"></i>Add Bonus
        </Button>
      </div>

      <Row className="mb-4">
        <Col md={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <h6 className="text-muted">Total Bonuses</h6>
              <h3 className="text-primary">{bonuses.length}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <h6 className="text-muted">Total Amount</h6>
              <h3 className="text-success">₹{bonuses.reduce((sum, b) => sum + b.amount, 0).toLocaleString()}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <h6 className="text-muted">Pending Approvals</h6>
              <h3 className="text-warning">{bonuses.filter(b => b.status === 'Pending').length}</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="shadow-sm">
        <Card.Body>
          <Table responsive hover>
            <thead className="bg-light">
              <tr>
                <th>ID</th>
                <th>Employee</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bonuses.map((bonus) => (
                <tr key={bonus.id}>
                  <td>{bonus.id}</td>
                  <td>{bonus.employee}</td>
                  <td><Badge bg="info">{bonus.type}</Badge></td>
                  <td><strong>₹{bonus.amount.toLocaleString()}</strong></td>
                  <td>{new Date(bonus.date).toLocaleDateString()}</td>
                  <td>
                    <Badge bg={bonus.status === 'Approved' ? 'success' : 'warning'}>
                      {bonus.status}
                    </Badge>
                  </td>
                  <td>
                    <Button variant="outline-primary" size="sm" className="me-2">
                      <i className="fa-solid fa-edit"></i>
                    </Button>
                    <Button variant="outline-danger" size="sm">
                      <i className="fa-solid fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Bonuses;
