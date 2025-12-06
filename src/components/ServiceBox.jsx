import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function ServiceBox() {
  const services = [
    {
      img: 'https://i.pinimg.com/1200x/e8/3a/fc/e83afcd1de480c67d110a301a53a70e5.jpg',
      title: 'Pickup'
    },
    {
      img: 'https://i.pinimg.com/736x/11/30/dc/1130dc24b9f1fcbab1231d8284345ff4.jpg',
      title: 'Speedy Repair'
    },
    {
      img: 'https://i.pinimg.com/1200x/c2/92/a5/c292a517710878e0dec5b11774510d9c.jpg',
      title: 'Repair & Warranty'
    }
  ];

  return (
    <>
      <style>{`
        .service-box-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
          cursor: pointer;
        }
        
        .service-box-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2) !important;
          background-color: #772953 !important;
        }
        
        .service-box-card:hover p {
          color: white !important;
        }
      `}</style>
      
      <div className="home_membership py-5">
        <Container>
          <div className="choose_easy_care-main">
            <Row>
              <Col md={12} className="padding-right-0">
                <div className="choose_easy_care text-center">
                  <h4 className="font_black mb-4 fw-bold">Why ChipFix is the best choice?</h4>
                  <Row className="g-4 justify-content-center">
                    {services.map((service, index) => (
                      <Col key={index} md={4} sm={6} xs={12}>
                        <div className="item choose_easy_care_bg service-box-card p-4 rounded-3 shadow-sm bg-light h-100 d-flex flex-column align-items-center justify-content-center">
                          <img src={service.img} alt={service.title} className="mb-3" style={{ maxWidth: '80px', height: 'auto',borderRadius:'50px' }} />
                          <p className="mb-0 fw-semibold">{service.title}</p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}

export default ServiceBox