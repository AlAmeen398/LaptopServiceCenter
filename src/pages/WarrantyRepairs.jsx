import React from 'react';
import { Container, Row, Col, Card, Table, Badge, Accordion } from 'react-bootstrap';

function WarrantyRepairs() {
  const warrantyPlans = [
    {
      title: 'Standard Warranty',
      duration: '90 Days',
      color: '#50c878',
      icon: 'fa-shield',
      features: [
        'Coverage on all replacement parts',
        'Free labor for warranty repairs',
        'Defects in workmanship',
        'Component failure',
        'Post-repair support'
      ],
      notCovered: [
        'Physical damage',
        'Liquid damage',
        'Unauthorized repairs',
        'Improper usage'
      ]
    },
    {
      title: 'Software Services',
      duration: '30 Days',
      color: '#667eea',
      icon: 'fa-laptop-code',
      features: [
        'OS installation warranty',
        'Software compatibility issues',
        'Driver problems',
        'Configuration errors',
        'Free reinstallation if needed'
      ],
      notCovered: [
        'Virus infections after service',
        'Third-party software issues',
        'User-caused errors',
        'Hardware failures'
      ]
    },
    {
      title: 'Premium Parts',
      duration: '180 Days',
      color: '#ffd93d',
      icon: 'fa-star',
      features: [
        'Extended coverage on premium parts',
        'Screen replacements',
        'Battery replacements',
        'Motherboard repairs',
        'Priority support'
      ],
      notCovered: [
        'Cosmetic damage',
        'Wear and tear',
        'Accidental damage',
        'Water damage'
      ]
    }
  ];

  const repairProcess = [
    {
      step: 1,
      title: 'Book Service',
      icon: 'fa-calendar-check',
      description: 'Schedule your repair online or visit our service center'
    },
    {
      step: 2,
      title: 'Diagnosis',
      icon: 'fa-stethoscope',
      description: 'Free diagnosis and cost estimate within 2 hours'
    },
    {
      step: 3,
      title: 'Approval',
      icon: 'fa-check-circle',
      description: 'You approve the repair and estimated cost'
    },
    {
      step: 4,
      title: 'Repair',
      icon: 'fa-screwdriver-wrench',
      description: 'Expert technicians repair your device'
    },
    {
      step: 5,
      title: 'Quality Check',
      icon: 'fa-clipboard-check',
      description: 'Multiple quality checks before delivery'
    },
    {
      step: 6,
      title: 'Delivery',
      icon: 'fa-truck',
      description: 'Free pickup and delivery with warranty certificate'
    }
  ];

  const repairTypes = [
    {
      category: 'Screen Repairs',
      repairs: [
        { service: 'LCD Screen Replacement', time: '2-4 hours', warranty: '90 days', price: '₹3,500 - ₹8,000' },
        { service: 'Touch Screen Digitizer', time: '2-4 hours', warranty: '90 days', price: '₹4,000 - ₹10,000' },
        { service: 'Screen Hinge Repair', time: '1-2 hours', warranty: '90 days', price: '₹1,500 - ₹3,000' }
      ]
    },
    {
      category: 'Hardware Repairs',
      repairs: [
        { service: 'Battery Replacement', time: '1 hour', warranty: '90 days', price: '₹2,000 - ₹6,000' },
        { service: 'Keyboard Replacement', time: '2-3 hours', warranty: '90 days', price: '₹1,500 - ₹4,000' },
        { service: 'Motherboard Repair', time: '3-5 days', warranty: '90 days', price: '₹3,000 - ₹15,000' },
        { service: 'RAM Upgrade', time: '30 mins', warranty: '90 days', price: '₹2,000 - ₹8,000' },
        { service: 'Hard Drive Replacement', time: '1-2 hours', warranty: '90 days', price: '₹3,000 - ₹12,000' }
      ]
    },
    {
      category: 'Software Services',
      repairs: [
        { service: 'OS Installation', time: '2-3 hours', warranty: '30 days', price: '₹500 - ₹1,500' },
        { service: 'Virus Removal', time: '2-4 hours', warranty: '30 days', price: '₹800 - ₹2,000' },
        { service: 'Data Recovery', time: '1-3 days', warranty: 'N/A', price: '₹2,500 - ₹10,000' },
        { service: 'Software Installation', time: '1-2 hours', warranty: '30 days', price: '₹300 - ₹1,000' }
      ]
    }
  ];

  return (
    <>
      <style>{`
        .warranty-header {
          background: linear-gradient(135deg, #50c878 0%, #43a047 100%);
          color: white;
          padding: 4rem 0;
        }
        
        .warranty-card {
          transition: all 0.3s ease;
          height: 100%;
          border: none;
        }
        
        .warranty-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.2) !important;
        }
        
        .warranty-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .feature-list {
          list-style: none;
          padding: 0;
        }
        
        .feature-list li {
          padding: 0.5rem 0;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .feature-list li:last-child {
          border-bottom: none;
        }
        
        .feature-list i {
          margin-right: 0.5rem;
        }
        
        .process-step {
          position: relative;
          padding: 2rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .process-step:hover {
          background: #f8f9fa;
          border-radius: 10px;
        }
        
        .step-number {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0 auto 1rem;
        }
        
        .step-icon {
          font-size: 2rem;
          color: #667eea;
          margin-bottom: 1rem;
        }
        
        .terms-section {
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 10px;
          border-left: 5px solid #50c878;
        }
        
        .repair-table {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }
        
        .category-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-weight: bold;
        }
      `}</style>

      {/* Header */}
      <div className="warranty-header text-center">
        <Container>
          <h1 className="display-4 mb-3">
            <i className="fa-solid fa-shield-halved me-3"></i>
            Warranty & Repairs
          </h1>
          <p className="lead">Comprehensive warranty coverage and transparent repair services</p>
        </Container>
      </div>

      <Container className="py-5">
        {/* Warranty Plans */}
        <h2 className="text-center mb-5">Our Warranty Plans</h2>
        <Row className="g-4 mb-5">
          {warrantyPlans.map((plan, index) => (
            <Col key={index} lg={4} md={6}>
              <Card className="warranty-card shadow-sm text-center p-4">
                <div className="warranty-icon" style={{ color: plan.color }}>
                  <i className={`fa-solid ${plan.icon}`}></i>
                </div>
                <h4>{plan.title}</h4>
                <Badge bg="success" className="mb-3 px-4 py-2" style={{ fontSize: '1rem' }}>
                  {plan.duration}
                </Badge>
                
                <div className="text-start mt-3">
                  <h6 className="text-success mb-3">
                    <i className="fa-solid fa-check-circle me-2"></i>
                    What's Covered
                  </h6>
                  <ul className="feature-list">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>
                        <i className="fa-solid fa-check text-success"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <h6 className="text-danger mb-3 mt-4">
                    <i className="fa-solid fa-times-circle me-2"></i>
                    Not Covered
                  </h6>
                  <ul className="feature-list">
                    {plan.notCovered.map((item, idx) => (
                      <li key={idx}>
                        <i className="fa-solid fa-times text-danger"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Repair Process */}
        <h2 className="text-center mb-5 mt-5">Our Repair Process</h2>
        <Row className="g-4 mb-5">
          {repairProcess.map((step) => (
            <Col key={step.step} md={4} sm={6}>
              <div className="process-step text-center">
                <div className="step-number">{step.step}</div>
                <div className="step-icon">
                  <i className={`fa-solid ${step.icon}`}></i>
                </div>
                <h5>{step.title}</h5>
                <p className="text-muted">{step.description}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Repair Types & Pricing */}
        <h2 className="text-center mb-5 mt-5">Repair Services & Pricing</h2>
        {repairTypes.map((category, index) => (
          <Card key={index} className="mb-4 repair-table border-0">
            <Card.Header className="category-header">
              <h5 className="mb-0">{category.category}</h5>
            </Card.Header>
            <Table responsive hover className="mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Service</th>
                  <th>Estimated Time</th>
                  <th>Warranty</th>
                  <th>Price Range</th>
                </tr>
              </thead>
              <tbody>
                {category.repairs.map((repair, idx) => (
                  <tr key={idx}>
                    <td><strong>{repair.service}</strong></td>
                    <td>
                      <i className="fa-solid fa-clock text-primary me-2"></i>
                      {repair.time}
                    </td>
                    <td>
                      <Badge bg={repair.warranty === 'N/A' ? 'secondary' : 'success'}>
                        {repair.warranty}
                      </Badge>
                    </td>
                    <td><strong className="text-primary">{repair.price}</strong></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        ))}

        {/* Terms & Conditions */}
        <h2 className="text-center mb-5 mt-5">Terms & Conditions</h2>
        <div className="terms-section mb-5">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Warranty Terms</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Warranty is valid from the date of repair completion</li>
                  <li>Original repair invoice must be presented for warranty claims</li>
                  <li>Warranty covers defects in parts and workmanship only</li>
                  <li>Physical damage, liquid damage, and unauthorized repairs void warranty</li>
                  <li>Warranty is non-transferable and applies only to the original customer</li>
                  <li>Free pickup and delivery for warranty repairs above ₹2,000</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="1">
              <Accordion.Header>Repair Policies</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Free diagnosis and cost estimate before repair</li>
                  <li>You pay only if you approve the repair</li>
                  <li>All repairs subject to parts availability</li>
                  <li>Estimated time may vary based on issue complexity</li>
                  <li>We are not responsible for data loss during repair</li>
                  <li>Backup your data before submitting for service</li>
                  <li>Unclaimed devices after 90 days will be disposed of</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="2">
              <Accordion.Header>Payment Terms</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Payment due at the time of device pickup</li>
                  <li>We accept cash, cards, UPI, and net banking</li>
                  <li>Advance payment may be required for expensive parts</li>
                  <li>No refunds after repair completion</li>
                  <li>Full refund if we cannot fix the issue</li>
                  <li>GST included in all pricing</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="3">
              <Accordion.Header>Limitation of Liability</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Our liability is limited to the repair cost paid</li>
                  <li>We are not liable for consequential damages</li>
                  <li>Not responsible for pre-existing issues not disclosed</li>
                  <li>Cosmetic condition may vary after screen replacements</li>
                  <li>We use genuine or equivalent quality parts</li>
                  <li>Software licenses are customer's responsibility</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        {/* Contact CTA */}
        <Card className="border-0 shadow" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
          <Card.Body className="text-center text-white p-5">
            <h3 className="mb-3">Have Questions About Our Warranty?</h3>
            <p className="lead mb-4">Our team is ready to help you understand our warranty and repair policies</p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a href="/contact" className="btn btn-light btn-lg">
                <i className="fa-solid fa-phone me-2"></i>
                Call: +91 8589856891
              </a>
              <a href="/support" className="btn btn-outline-light btn-lg">
                <i className="fa-solid fa-comments me-2"></i>
                Live Chat
              </a>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default WarrantyRepairs;
