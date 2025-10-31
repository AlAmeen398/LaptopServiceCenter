import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Explore() {
  const exploreItems = [
    {
      title: "Laptop Repair Services",
      description: "Explore our professional laptop repair and diagnostics services for all major brands.",
      link: "/explorenow",
      image: "./src/assets/images/pexels-zeleboba-19892557.jpg"
    },
    {
      title: "Shop Latest Products",
      description: "Discover and shop the latest gadgets, accessories, and electronics from top brands.",
      link: "/shop",
      image: "src/assets/images/board.jpeg"
    },
    {
      title: "Customer Support",
      description: "Need help? Reach out to our 24/7 customer support team for assistance.",
      link: "/support",
      image: "src/assets/images/gamesup.jpeg"
    }
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Explore Our Services</h2>
      <Row className="g-4">
        {exploreItems.map((item, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={item.image} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <div className="mt-auto">
                  
                   <Button as={Link} to={item.link} variant="primary" className="w-100">
                    More
                  </Button>
                 
                 
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Explore;
