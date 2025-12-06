import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

function Repairs() {
  const stats = [
    {
      icon: 'fa-solid fa-calendar-days',
      title: 'Established in',
      count: '2023',
      description: 'An exclusive service wing of Ashtel group',
      color: '#4a90e2'
    },
    {
      icon: 'fa-solid fa-screwdriver-wrench',
      title: 'Successful Repairs',
      count: '80,203',
      description: 'Getting it done with the utmost care & quality',
      color: '#50c878'
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Warranty Repairs',
      count: '7,575',
      description: 'Storage data recovered from dead devices',
      color: '#ff6b6b'
    }
  ];

  return (
    <>
      <style>{`
        .stats-card {
          transition: all 0.4s ease;
          border: none;
          position: relative;
          overflow: hidden;
        }
        
        .stats-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--card-color), transparent);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }
        
        .stats-card:hover::before {
          transform: scaleX(1);
        }
        
        .stats-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
        }
        
        .stats-card:hover .stats-icon {
          transform: scale(1.2) rotate(5deg);
        }
        
        .stats-icon {
          transition: transform 0.4s ease;
          font-size: 3rem;
        }
        
        .stats-count {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--card-color), var(--card-color-light));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-card {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
      
      <div className="know_easy_care py-5" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
        <Container>
          <h2 className="text-center mb-5 fw-bold display-5" style={{ color: '#0e0f0fff' }}>
            Know ChipFix
          </h2>
          
          <Row className="g-4">
            {stats.map((stat, index) => (
              <Col key={index} md={4} sm={6} xs={12}>
                <Card 
                  className="stats-card animate-card h-100 shadow-sm"
                  style={{ 
                    '--card-color': stat.color,
                    '--card-color-light': stat.color + '99',
                    animationDelay: `${index * 0.2}s`,
                    opacity: 0
                  }}
                >
                  <Card.Body className="text-center p-4">
                    <div className="stats-icon mb-3" style={{ color: stat.color }}>
                      <i className={stat.icon}></i>
                    </div>
                    <h5 className="mb-3 fw-semibold text-secondary">{stat.title}</h5>
                    <div className="stats-count mb-3">{stat.count}</div>
                    <p className="text-muted small mb-0">{stat.description}</p>
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

export default Repairs