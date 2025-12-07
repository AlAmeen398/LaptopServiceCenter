import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Button, Badge, Form } from 'react-bootstrap';

function ProvidentFund() {
  const [pfRecords] = useState([
    { 
      id: 1, 
      employee: 'John Doe', 
      employeeContribution: 4200, 
      employerContribution: 4200, 
      totalBalance: 125000,
      lastUpdated: '2025-12-01'
    },
    { 
      id: 2, 
      employee: 'Jane Smith', 
      employeeContribution: 5400, 
      employerContribution: 5400, 
      totalBalance: 180000,
      lastUpdated: '2025-12-01'
    },
    { 
      id: 3, 
      employee: 'Mike Johnson', 
      employeeContribution: 7200, 
      employerContribution: 7200, 
      totalBalance: 250000,
      lastUpdated: '2025-12-01'
    },
    { 
      id: 4, 
      employee: 'Sarah Williams', 
      employeeContribution: 3000, 
      employerContribution: 3000, 
      totalBalance: 95000,
      lastUpdated: '2025-12-01'
    },
  ]);

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2><i className="fa-solid fa-file-invoice-dollar text-primary me-2"></i>Provident Fund Management</h2>
          <p className="text-muted">Manage employee Provident Fund contributions and withdrawals</p>
        </div>
        <Button variant="primary">
          <i className="fa-solid fa-download me-2"></i>Generate Report
        </Button>
      </div>

      <Row className="mb-4">
        <Col md={3}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <h6 className="text-muted">Total Employees</h6>
              <h3 className="text-primary">{pfRecords.length}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <h6 className="text-muted">Employee Contribution</h6>
              <h3 className="text-success">₹{pfRecords.reduce((sum, r) => sum + r.employeeContribution, 0).toLocaleString()}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <h6 className="text-muted">Employer Contribution</h6>
              <h3 className="text-warning">₹{pfRecords.reduce((sum, r) => sum + r.employerContribution, 0).toLocaleString()}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <h6 className="text-muted">Total Fund Balance</h6>
              <h3 className="text-info">₹{pfRecords.reduce((sum, r) => sum + r.totalBalance, 0).toLocaleString()}</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="shadow-sm mb-4">
        <Card.Body>
          <h5 className="mb-3">PF Contribution Details</h5>
          <Table responsive hover>
            <thead className="bg-light">
              <tr>
                <th>ID</th>
                <th>Employee</th>
                <th>Employee Contribution</th>
                <th>Employer Contribution</th>
                <th>Total Balance</th>
                <th>Last Updated</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pfRecords.map((record) => (
                <tr key={record.id}>
                  <td>{record.id}</td>
                  <td>{record.employee}</td>
                  <td className="text-primary">₹{record.employeeContribution.toLocaleString()}</td>
                  <td className="text-success">₹{record.employerContribution.toLocaleString()}</td>
                  <td><strong>₹{record.totalBalance.toLocaleString()}</strong></td>
                  <td>{new Date(record.lastUpdated).toLocaleDateString()}</td>
                  <td>
                    <Button variant="outline-primary" size="sm" className="me-2">
                      <i className="fa-solid fa-eye"></i>
                    </Button>
                    <Button variant="outline-info" size="sm">
                      <i className="fa-solid fa-download"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Card className="shadow-sm">
        <Card.Body>
          <h5 className="mb-3">PF Information</h5>
          <Row>
            <Col md={6}>
              <p><strong>Contribution Rate:</strong> 12% of Basic Salary</p>
              <p><strong>Employee Share:</strong> 12%</p>
              <p><strong>Employer Share:</strong> 12%</p>
            </Col>
            <Col md={6}>
              <p><strong>Interest Rate:</strong> 8.15% per annum</p>
              <p><strong>Withdrawal Rules:</strong> After 5 years of service</p>
              <p><strong>Tax Exemption:</strong> Up to ₹1.5 lakhs under 80C</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProvidentFund;
