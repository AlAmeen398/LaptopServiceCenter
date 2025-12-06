import React from 'react'
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import backgroundImage from '../assets/images/pexels-sora-shimazaki-5668859.jpg'
import ServiceBox from '../components/ServiceBox';
import Repairs from '../components/Repairs';
import Table from '../components/Table';
import ImageCarousel from '../components/ImageCarousel';



function Home() {
  const navigate = useNavigate();
  
  const supportCards = [
    { icon: 'fa-solid fa-gears', title: 'Technical Support', link: '/laptop-repair' },
    { icon: 'fa-solid fa-comments', title: 'Sales & Event', link: '/shop' }
  ];

  const services = [
    {
      title: 'Smartphone',
      description: 'Are broken displays breaking your heart? We handle all types of software issues or anything related to smartphones.',
      image: 'https://i.pinimg.com/736x/d1/ca/56/d1ca56b2c7f85447ea4f799d8440c67a.jpg',
      link: '/device/smartphone',
      color: '#4a90e2'
    },
    {
      title: 'iPhone',
      description: 'Is your iPhone out of warranty? We can fix it with professional care. Get the right service for your iPhones with ChipFix.',
      image: 'https://i.pinimg.com/736x/4a/a4/65/4aa46588f62cebe1bb553dca698b8994.jpg',
      link: '/device/iphone',
      color: '#50c878'
    },
    {
      title: 'Laptop',
      description: 'Are you seeking the best laptop service providers? Your search has come to an end. ChipFix is a complete solution for all of your laptop needs.',
      image: 'https://i.pinimg.com/1200x/cb/e5/c5/cbe5c54a8e6767befe026713a763926f.jpg',
      link: '/laptop-repair',
      color: '#ff6b6b'
    },
    {
      title: 'Tablets',
      description: 'Are you facing charging problems on your tab, is your sim/memory slot broken, or is the touchscreen giving you a hard time? ChipFix will take care of all your tablet issues in no time.',
      image: 'https://i.pinimg.com/736x/a2/45/ea/a245eaaaefe8948aabc5bb7f607f7003.jpg',
      link: '/device/tablets',
      color: '#ffd93d'
    },
    {
      title: 'Smartwatch',
      description: "Broken smartwatch? Don't worry about that anymore! We got this done with ease at ChipFix.",
      image: 'https://i.pinimg.com/1200x/eb/04/64/eb0464574642e33d7081aa982b849b75.jpg',
      link: '/device/smartwatch',
      color: '#a569bd'
    },
    {
      title: 'Gaming Console',
      description: 'Playstation on strike? We got you covered. ChipFix has the best of PlayStation services to bring your dead gaming consoles back to life.',
      image: 'https://i.pinimg.com/736x/71/b1/86/71b186cc2e0825a62714de7626e3235d.jpg',
      link: '/device/gaming-console',
      color: '#f39c12'
    }
  ];

  return (
    <>
      
      <div
        className="min-vh-100 d-flex flex-column"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
        }}
      >

        <div
          className="text-white text-center py-2 d-flex justify-content-between align-items-center px-4"
          style={{
            background: 'rgba(255, 255, 255, 0)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
          }}
        >
          <div className='text-white fw-bold'>
            Expert repairs for smartphones, tablets, laptops & mor
          </div>
          <div className="d-flex gap-3">
            <Link to={'/adminlogin'}>
              <button className='btn btn-outline-light btn-sm'>Admin</button>
            </Link>

          </div>
        </div>


        <Container className="text-center py-5 text-white" style={{ flex: 1 }}>
          <h1 className="text-black ">Welcome to ChipFix Support</h1>
          <h3 className="mb-4 fw-bold text-black ">Solution For Your Search</h3>



        </Container>


        <Container className="py-5">
          <Row className="g-4 justify-content-evenly">
            {supportCards.map((card, index) => (
              <Col xs={12} md={5} key={index}>
                <Card
                  className="h-100 shadow-lg text-dark"
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '15px',
                    animation: `slideIn${index === 0 ? 'Left' : 'Right'} 1s ease-out`,
                    cursor: 'pointer',
                    '@keyframes slideInLeft': {
                      from: { transform: 'translateX(-100%)', opacity: 0 },
                      to: { transform: 'translateX(0)', opacity: 1 }
                    },
                    '@keyframes slideInRight': {
                      from: { transform: 'translateX(100%)', opacity: 0 },
                      to: { transform: 'translateX(0)', opacity: 1 }
                    }
                  }}
                  onClick={() => navigate(card.link)}
                >
                  <Card.Body className="text-center">
                    <i className={`${card.icon} fa-2xl mb-3`}></i>
                    <Card.Title className="mt-3">{card.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>



        <div className="text-center text-white pb-5">
          Need to check the previous case?{" "}
          <a href="#" className="text-primary text-decoration-none">
            Check your case
          </a>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-5 bg-gradient " style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container>
          <Row className="g-4">
            <Col md={4} className="mb-4 mb-md-0">
              <div className="bg-dark bg-opacity-50 text-white p-4 rounded-3 h-100 d-flex flex-column justify-content-center shadow-lg">
                <h1 className="mb-4 fw-bold display-5">Make It Easy With ChipFix</h1>
                <p className="lead fs-6">
                  ChipFix is the premier service center in Kerala. We provide end-to-end technical care for smart gadgets with professional expertise and quality service guarantee.
                </p>
                <Link to='/laptop-repair' className="text-decoration-none d-flex justify-content-center ">
                  <Button
                    variant="outline-light"
                    className="w-50 mt-2 fw-bold border-2 btn-hover text-black"

                  >
                    Get Service <i className="fa-solid fa-arrow-right ms-2"></i>
                  </Button>
                </Link>
              </div>
            </Col>
            <Col md={8}>
              <div className="overflow-auto position-relative scrollbar-hidden " style={{ height: '450px' }}>
                <div className="cards-container m-3">
                  {services.map((service, index) => (
                    <Card
                      key={index}
                      className="shadow-lg border-0 rounded-4 service-card "
                      style={{
                        width: '300px',
                        display: 'inline-block',
                        flexShrink: 0
                      }}
                    >
                      <div className="position-relative overflow-hidden rounded-top-4" style={{ height: '200px' }}>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-100 h-100 object-fit-cover"
                        />
                        <div className="position-absolute top-0 end-0 m-2 bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                          <i className="fa-solid fa-wrench" style={{ color: service.color }}></i>
                        </div>
                      </div>
                      <Card.Body className="p-4">
                        <Card.Title className="mb-3 fw-bold fs-5" style={{ color: service.color }}>
                          {service.title}
                        </Card.Title>
                        <Card.Text className="text-secondary small" style={{ minHeight: '80px', whiteSpace: 'normal' }}>
                          {service.description}
                        </Card.Text>

                      </Card.Body>
                    </Card>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <ServiceBox/>
      <ImageCarousel/>
      <Table/>
      <Repairs/>

      <style>{`
          @keyframes slideInLeft {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          @keyframes slideInRight {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
            .service-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.3) !important;
        }
        .btn-hover {
          transition: all 0.3s ease;
        }
        .btn-hover:hover {
          background-color: var(--bs-primary) !important;
          color: white !important;
          border-color: var(--bs-primary) !important;
        }
          .scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hidden {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .cards-container {
          display: flex;
          gap: 1rem;
          animation: scrollLeftRight 30s ease-in-out infinite;
        }
        
        @keyframes scrollLeftRight {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(calc(-50% + 150px));
          }
        }
        
        .cards-container:hover {
          animation-play-state: paused;
        }
        
        .service-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.3) !important;
        }
        `}</style>
      
    </>
  )
}

export default Home
