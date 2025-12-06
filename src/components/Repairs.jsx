import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col, Card, ProgressBar, Badge } from 'react-bootstrap'

function Repairs() {
  const [animatedCounts, setAnimatedCounts] = useState({
    repairs: 0,
    warranty: 0,
    satisfaction: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      id: 'year',
      icon: 'fa-solid fa-calendar-check',
      title: 'Established',
      count: '2014',
      countKey: null,
      description: 'A decade of excellence in laptop service',
      color: '#667eea',
      progress: null
    },
    {
      id: 'repairs',
      icon: 'fa-solid fa-tools',
      title: 'Successful Repairs',
      count: 111203,
      countKey: 'repairs',
      description: 'Devices restored with precision & care',
      color: '#50c878',
      progress: 95
    },
    {
      id: 'warranty',
      icon: 'fa-solid fa-shield-halved',
      title: 'Warranty Services',
      count: 12575,
      countKey: 'warranty',
      description: '90-day warranty on all repairs',
      color: '#f59e0b',
      progress: 88
    }
  ];

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  // Counter animation
  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      const targets = {
        repairs: 111203,
        warranty: 12575,
        satisfaction: 98
      };

      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setAnimatedCounts({
          repairs: Math.floor(targets.repairs * progress),
          warranty: Math.floor(targets.warranty * progress),
          satisfaction: Math.floor(targets.satisfaction * progress)
        });

        if (currentStep >= steps) {
          setAnimatedCounts(targets);
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <style>{`
        .repairs-section {
          background: linear-gradient(135deg, #c78fb6ff 0%, #87496aff 100%);
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }

        .repairs-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }

        .section-title {
          color: #0e0f0fff;
          font-weight: 800;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
          position: relative;
          z-index: 1;
        }

        .section-subtitle {
          color: #6c757d;
          font-size: 1.2rem;
          position: relative;
          z-index: 1;
        }

        .stats-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: none;
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          background: white;
          z-index: 1;
        }

        .stats-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: var(--card-color);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.6s ease;
        }

        .stats-card.visible::before {
          transform: scaleX(1);
        }

        .stats-card:hover {
          transform: translateY(-20px) scale(1.03);
          box-shadow: 0 25px 50px rgba(0,0,0,0.2) !important;
        }

        .stats-card:hover .stats-icon-wrapper {
          transform: scale(1.15) rotate(360deg);
        }

        .stats-icon-wrapper {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, var(--card-color), var(--card-color-dark));
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
        }

        .stats-icon-wrapper::after {
          content: '';
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--card-color), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .stats-card:hover .stats-icon-wrapper::after {
          opacity: 0.3;
          animation: pulse-ring 1.5s infinite;
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        .stats-icon {
          font-size: 3rem;
          color: white;
          z-index: 1;
        }

        .stats-count {
          font-size: 3rem;
          font-weight: 900;
          background: linear-gradient(135deg, var(--card-color), var(--card-color-dark));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 1rem 0;
          line-height: 1;
        }

        .stats-title {
          color: #333;
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .stats-description {
          color: #6c757d;
          font-size: 0.9rem;
        }

        .progress-wrapper {
          margin-top: 1rem;
          padding: 0 1rem;
        }

        .custom-progress {
          height: 8px;
          border-radius: 10px;
          background: #f0f0f0;
        }

        .custom-progress .progress-bar {
          background: linear-gradient(90deg, var(--card-color), var(--card-color-dark));
          border-radius: 10px;
          transition: width 2s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-card {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-card.visible {
          opacity: 1;
        }

        .badge-wrapper {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 2;
        }

        .quality-badge {
          background: linear-gradient(135deg, #f59e0b, #d97706);
          font-size: 0.75rem;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
        }

        .stat-label {
          font-size: 0.75rem;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }
      `}</style>

      <div className="repairs-section" ref={sectionRef}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title display-4 mb-3">
              <i className="fa-solid fa-chart-line me-3"></i>
              Our Track Record
            </h2>
            <p className="section-subtitle">
              Excellence in service, backed by numbers
            </p>
          </div>

          <Row className="g-4 justify-content-center">
            {stats.map((stat, index) => (
              <Col key={stat.id} lg={4} md={6} xs={12}>
                <Card
                  className={`stats-card animate-card shadow-lg h-100 ${isVisible ? 'visible' : ''}`}
                  style={{
                    '--card-color': stat.color,
                    '--card-color-dark': stat.color + 'dd',
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <Card.Body className="p-4 text-center position-relative">
                    {stat.id === 'repairs' && (
                      <div className="badge-wrapper">
                        <Badge className="quality-badge">
                          <i className="fa-solid fa-star me-1"></i>
                          Top Rated
                        </Badge>
                      </div>
                    )}

                    <div className="stats-icon-wrapper">
                      <i className={`${stat.icon} stats-icon`}></i>
                    </div>

                    <div className="stat-label">{stat.title}</div>

                    <div className="stats-count">
                      {stat.countKey ? (
                        formatNumber(animatedCounts[stat.countKey])
                      ) : (
                        stat.count
                      )}
                      {stat.countKey === 'repairs' && '+'}
                    </div>

                    <p className="stats-description mb-3">
                      {stat.description}
                    </p>

                    {stat.progress && (
                      <div className="progress-wrapper">
                        <div className="d-flex justify-content-between mb-2">
                          <small className="text-muted">Success Rate</small>
                          <small className="fw-bold" style={{ color: stat.color }}>
                            {stat.progress}%
                          </small>
                        </div>
                        <div className="custom-progress">
                          <div
                            className="progress-bar"
                            style={{
                              width: isVisible ? `${stat.progress}%` : '0%'
                            }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Additional Info Section */}
          <Row className="mt-5 justify-content-center">
            <Col md={10}>
              <Card className="border-0 shadow-lg" style={{ borderRadius: '20px', background: 'rgba(255,255,255,0.95)' }}>
                <Card.Body className="p-4">
                  <Row className="text-center g-4">
                    <Col md={3} xs={6}>
                      <div className="text-primary mb-2">
                        <i className="fa-solid fa-clock fa-2x"></i>
                      </div>
                      <h4 className="fw-bold mb-1">24-48h</h4>
                      <small className="text-muted">Avg. Repair Time</small>
                    </Col>
                    <Col md={3} xs={6}>
                      <div className="text-success mb-2">
                        <i className="fa-solid fa-users fa-2x"></i>
                      </div>
                      <h4 className="fw-bold mb-1">50K+</h4>
                      <small className="text-muted">Happy Customers</small>
                    </Col>
                    <Col md={3} xs={6}>
                      <div className="text-warning mb-2">
                        <i className="fa-solid fa-trophy fa-2x"></i>
                      </div>
                      <h4 className="fw-bold mb-1">4.8/5</h4>
                      <small className="text-muted">Customer Rating</small>
                    </Col>
                    <Col md={3} xs={6}>
                      <div className="text-danger mb-2">
                        <i className="fa-solid fa-map-marker-alt fa-2x"></i>
                      </div>
                      <h4 className="fw-bold mb-1">7+</h4>
                      <small className="text-muted">Service Centers</small>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Repairs