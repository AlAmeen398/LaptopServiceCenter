import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AdminDashboard() {
  const dashboardCards = [
    {
      icon: 'fa-calendar-check',
      color: 'primary',
      title: 'Staff Attendance',
      description: 'View daily staff attendance records and manage leaves.',
      buttonText: 'Manage Attendance',
      link: '/staffattendance'
    },
    {
      icon: 'fa-coins',
      color: 'success',
      title: 'Monthly Salary',
      description: 'Calculate and process monthly salaries for all employees.',
      buttonText: 'Manage Salaries',
      link: '/monthlysalary'
    },
    {
      icon: 'fa-calendar-days',
      color: 'primary',
      title: 'Calendar',
      description: 'View upcoming holidays, meetings and important events.',
      buttonText: 'View Calendar',
      link: '/calendar'
    },
    {
      icon: 'fa-tasks',
      color: 'success',
      title: 'Assign Work',
      description: 'Assign repair tasks and service jobs to technicians.',
      buttonText: 'Manage Tasks',
      link: '/assignwork'
    }
  ];

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
            {dashboardCards.map((card, index) => (
              <Col xs={12} md={6} lg={4} key={index}>
                <Card className="shadow-sm border-0 h-100">
                  <Card.Body className="text-center">
                    <i className={`fa-solid ${card.icon} fa-2xl text-${card.color} mb-3`}></i>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.description}</Card.Text>
                    {card.link ? (
                      <Link to={card.link}>
                        <Button variant={card.color} size="sm" className={card.color === 'warning' ? 'text-white' : ''}>
                          {card.buttonText}
                        </Button>
                      </Link>
                    ) : (
                      <Button variant={card.color} size="sm" className={card.color === 'warning' || card.color === 'info' ? 'text-white' : ''}>
                        {card.buttonText}
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default AdminDashboard
