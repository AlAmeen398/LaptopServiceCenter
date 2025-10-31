import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AdminDashboard() {
  return (
    <>
      <div className="min-vh-100 d-flex flex-column" style={{ background: '#f5f7fa' }}>
        {/* Header */}
        <Container className="text-center py-4">
          <h1 className="fw-bold">Service Center Admin Dashboard</h1>
          <p className="text-muted">Manage staff, attendance, payroll, holidays and more from one place.</p>
        </Container>

        {/* Dashboard Widgets */}
        <Container className="py-4">
          <Row className="g-4">

            {/* Staff Attendance */}
            <Col xs={12} md={6} lg={4}>
              <Card className="shadow-sm border-0 h-100">
                <Card.Body className="text-center">
                  <i className="fa-solid fa-calendar-check fa-2xl text-primary mb-3"></i>
                  <Card.Title>Staff Attendance</Card.Title>
                  <Card.Text>View daily staff attendance records and manage leaves.</Card.Text>
                  <Link to={'/staffattendance'}>
                  <Button variant="primary" size="sm">Manage Attendance</Button>
                  
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            {/* Monthly Salary */}
            <Col xs={12} md={6} lg={4}>
              <Card className="shadow-sm border-0 h-100">
                <Card.Body className="text-center">
                  <i className="fa-solid fa-coins fa-2xl text-success mb-3"></i>
                  <Card.Title>Monthly Salary</Card.Title>
                  <Card.Text>Calculate and process monthly salaries for all employees.</Card.Text>
                  <Button variant="success" size="sm">Manage Salaries</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Calendar */}
            <Col xs={12} md={6} lg={4}>
              <Card className="shadow-sm border-0 h-100">
                <Card.Body className="text-center">
                  <i className="fa-solid fa-calendar-days fa-2xl text-warning mb-3"></i>
                  <Card.Title>Calendar</Card.Title>
                  <Card.Text>View upcoming holidays, meetings and important events.</Card.Text>
                  <Button variant="warning" size="sm" className="text-white">View Calendar</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Holidays */}
            <Col xs={12} md={6} lg={4}>
              <Card className="shadow-sm border-0 h-100">
                <Card.Body className="text-center">
                  <i className="fa-solid fa-umbrella-beach fa-2xl text-info mb-3"></i>
                  <Card.Title>Holidays</Card.Title>
                  <Card.Text>Plan official holidays and inform staff accordingly.</Card.Text>
                  <Button variant="info" size="sm" className="text-white">Manage Holidays</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Bonuses */}
            <Col xs={12} md={6} lg={4}>
              <Card className="shadow-sm border-0 h-100">
                <Card.Body className="text-center">
                  <i className="fa-solid fa-gift fa-2xl text-danger mb-3"></i>
                  <Card.Title>Bonuses</Card.Title>
                  <Card.Text>Handle special performance bonuses and festive allowances.</Card.Text>
                  <Button variant="danger" size="sm">Manage Bonuses</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Best Staff of the Month */}
            <Col xs={12} md={6} lg={4}>
              <Card className="shadow-sm border-0 h-100">
                <Card.Body className="text-center">
                  <i className="fa-solid fa-trophy fa-2xl text-warning mb-3"></i>
                  <Card.Title>Best Staff of Month</Card.Title>
                  <Card.Text>Highlight and reward the top-performing employee each month.</Card.Text>
                  <Button variant="warning" size="sm" className="text-white">Select Best Staff</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Provident Fund */}
            <Col xs={12} md={6} lg={4}>
              <Card className="shadow-sm border-0 h-100">
                <Card.Body className="text-center">
                  <i className="fa-solid fa-file-invoice-dollar fa-2xl text-primary mb-3"></i>
                  <Card.Title>Provident Fund (PF)</Card.Title>
                  <Card.Text>Manage employee Provident Fund contributions and withdrawals.</Card.Text>
                  <Button variant="primary" size="sm">Manage PF</Button>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>
    </>
  )
}

export default AdminDashboard
