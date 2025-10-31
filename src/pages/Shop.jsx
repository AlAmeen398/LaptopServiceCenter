import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Shop() {
  const products = [
    {
      id: 1,
      name: "Laptop Battery",
      price: "₹2,499",
      image: "https://images.unsplash.com/photo-1616856822275-cf5f15b753c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Wireless Mouse",
      price: "₹799",
      image: "https://images.unsplash.com/photo-1587825140708-9f88f10bdb59?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Laptop Cooling Pad",
      price: "₹1,299",
      image: "https://images.unsplash.com/photo-1585522087687-9c507d7f28f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      name: "USB-C Hub",
      price: "₹1,999",
      image: "https://images.unsplash.com/photo-1611227793873-2bdb51870fd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product.name);
    // You can later connect this to your cart functionality
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Shop Our Products</h2>
      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} xs={12} md={6} lg={3}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={product.image} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text><strong>Price:</strong> {product.price}</Card.Text>
                <div className="mt-auto">
                  <Button variant="primary" className="w-100" onClick={() => handleAddToCart(product)}>
                    Add to Cart
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

export default Shop;
