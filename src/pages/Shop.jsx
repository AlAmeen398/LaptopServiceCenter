import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Pagination, Form, InputGroup, Toast } from 'react-bootstrap';
import { ToastContainer } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);
  const productsPerPage = 8;
  
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Laptop Battery",
      price: "₹2,499",
      image: "https://i.pinimg.com/736x/84/50/1c/84501c1f55eb2e91a880882f71e8e31f.jpg"
    },
    {
      id: 2,
      name: "Wireless Mouse",
      price: "₹799",
      image: "https://i.pinimg.com/736x/72/8a/a2/728aa2b3a63d0e1e6369528e00f89422.jpg"
    },
    {
      id: 3,
      name: "Laptop Cooling Pad",
      price: "₹1,299",
      image: "https://i.pinimg.com/736x/5a/31/43/5a314305f2ee8a4fe4753b4b4d190510.jpg"
    },
    {
      id: 4,
      name: "USB-C Hub",
      price: "₹1,999",
      image: "https://i.pinimg.com/1200x/08/d6/e8/08d6e8e2441de20821759f7d37cee093.jpg"
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      price: "₹3,499",
      image: "https://i.pinimg.com/736x/b8/d6/00/b8d60035ae8f2cd2b6e76de6b510cd3a.jpg"
    },
    {
      id: 6,
      name: "Webcam HD",
      price: "₹2,199",
      image: "https://i.pinimg.com/736x/8f/70/c3/8f70c3ad2a079cd1fbd12e3db23f9f03.jpg"
    },
    {
      id: 7,
      name: "External SSD 1TB",
      price: "₹8,999",
      image: "https://i.pinimg.com/1200x/92/77/0a/92770a907c7ab0365fc0093f786df7cb.jpg"
    },
    {
      id: 8,
      name: "Laptop Charger",
      price: "₹1,799",
      image: "https://i.pinimg.com/736x/16/e6/01/16e6014850398af1be7f3983abdf4cba.jpg"
    },
    {
      id: 9,
      name: "Wireless Headphones",
      price: "₹4,999",
      image: "https://i.pinimg.com/736x/67/98/13/679813956d1c533cf4358f3ca9271b47.jpg"
    },
    {
      id: 10,
      name: "USB Flash Drive 64GB",
      price: "₹699",
      image: "https://i.pinimg.com/736x/cb/cc/0a/cbcc0a658f6ed5c2642835a0939fe3e7.jpg"
    },
    {
      id: 11,
      name: "Laptop Screen Protector",
      price: "₹599",
      image: "https://i.pinimg.com/736x/5e/82/62/5e82622157b862a08f96b0b4e0f53b03.jpg"
    },
    {
      id: 12,
      name: "Gaming Mouse Pad",
      price: "₹899",
      image: "https://i.pinimg.com/736x/10/b2/6f/10b26fe9eb80570a2790e0567aafc9c6.jpg"
    },
    {
      id: 13,
      name: "Laptop Stand",
      price: "₹1,499",
      image: "https://i.pinimg.com/736x/f6/fb/bb/f6fbbb7a53392097a1612b3bfe2c07d1.jpg"
    },
    {
      id: 14,
      name: "HDMI Cable 2m",
      price: "₹399",
      image: "https://i.pinimg.com/1200x/8c/c0/8b/8cc08b8bb89ebf9a53e96151ae415b2a.jpg"
    },
    {
      id: 15,
      name: "Portable Hard Drive 2TB",
      price: "₹5,999",
      image: "https://i.pinimg.com/1200x/e1/d9/3d/e1d93d3033f39b29a0d5f8f83fe8e5ea.jpg"
    },
    {
      id: 16,
      name: "Laptop Bag",
      price: "₹1,999",
      image: "https://i.pinimg.com/1200x/52/68/db/5268dbee0a293d4d18b9bf21ff88cf3b.jpg"
    },
    {
      id: 17,
      name: "Bluetooth Speaker",
      price: "₹2,799",
      image: "https://i.pinimg.com/736x/d7/f8/ed/d7f8ed5577556cd09e0969ff006ff5d4.jpg"
    },
    {
      id: 18,
      name: "RAM 8GB DDR4",
      price: "₹3,299",
      image: "https://i.pinimg.com/736x/b2/6c/4c/b26c4cafcb57d565d270b751c5f81bdf.jpg"
    },
    {
      id: 19,
      name: "Microphone USB",
      price: "₹1,899",
      image: "https://i.pinimg.com/736x/24/98/7f/24987f2f074d2eb0b5dc334c4972e909.jpg"
    },
    {
      id: 20,
      name: "Graphics Tablet",
      price: "₹6,499",
      image: "https://i.pinimg.com/1200x/fe/20/c7/fe20c74c3850104a40c3e15280bbec5d.jpg"
    },
    {
      id: 21,
      name: "Laptop Keyboard Cover",
      price: "₹299",
      image: "https://i.pinimg.com/736x/d6/fa/93/d6fa93b18a7fa0bf67cbf0e948e64abd.jpg"
    },
    {
      id: 22,
      name: "USB Extension Cable",
      price: "₹249",
      image: "https://i.pinimg.com/736x/c1/9c/ee/c19ceeef12e6a74200dc438364e07771.jpg"
    },
    {
      id: 23,
      name: "Monitor Stand",
      price: "₹2,299",
      image: "https://i.pinimg.com/736x/46/8a/87/468a878e6ec4cfb2d16b2747f6b1fe46.jpg"
    },
    {
      id: 24,
      name: "Laptop Cleaning Kit",
      price: "₹599",
      image: "https://i.pinimg.com/474x/97/e8/a6/97e8a6673b65dc7fcbab7afd8be1392d.jpg"
    }
  ];

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProduct(product);
    setShowToast(true);
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Shop Our Products</h2>
      
      {/* Search Bar */}
      <Row className="justify-content-center mb-4">
        <Col md={6}>
          <InputGroup className="shadow-sm search-bar-group">
            <InputGroup.Text className="search-icon">
              <i className="fa-solid fa-search"></i>
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
              style={{ fontSize: '1rem', padding: '0.75rem' }}
            />
            {searchQuery && (
              <Button 
                variant="outline-secondary" 
                onClick={() => setSearchQuery('')}
                title="Clear search"
                className="clear-btn"
              >
                <i className="fa-solid fa-times"></i>
              </Button>
            )}
          </InputGroup>
        </Col>
      </Row>

      <p className="text-center text-muted mb-4">
        Showing {filteredProducts.length > 0 ? indexOfFirstProduct + 1 : 0} - {Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
        {searchQuery && <span className="fw-bold"> (filtered by "{searchQuery}")</span>}
      </p>
      
      <Row className="g-4">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 shadow-sm" style={{transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
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
        ))
        ) : (
          <Col xs={12}>
            <div className="text-center py-5">
              <i className="fa-solid fa-search fa-3x text-muted mb-3"></i>
              <h4 className="text-muted">No products found</h4>
              <p className="text-muted">Try searching with different keywords</p>
            </div>
          </Col>
        )}
      </Row>

      {/* Pagination */}
      {filteredProducts.length > productsPerPage && (
        <div className="d-flex justify-content-center mt-5">
          <Pagination>
            <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
            <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
            
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            
            <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
            <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
          </Pagination>
        </div>
      )}

      <style>{`
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2) !important;
        }
        
        .search-bar-group {
          transition: all 0.3s ease;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .search-bar-group:hover {
          box-shadow: 0 5px 20px rgba(0,0,0,0.15) !important;
          transform: translateY(-2px);
        }
        
        .search-icon {
          background-color: #f8f9fa;
          border: none;
          transition: all 0.3s ease;
        }
        
        .search-bar-group:hover .search-icon {
          background-color: #E95420;
          color: white;
        }
        
        .search-input:focus {
          border-color: #0d6efd;
          box-shadow: none;
        }
        
        .clear-btn {
          transition: all 0.3s ease;
          border: none;
        }
        
        .clear-btn:hover {
          background-color: #dc3545 !important;
          color: white !important;
          transform: scale(1.1);
        }
      `}</style>

      {/* Toast Notification */}
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 9999 }}>
        <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide bg="success">
          <Toast.Header>
            <strong className="me-auto">
              <i className="fa-solid fa-check-circle me-2"></i>
              Added to Cart
            </strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            {addedProduct && (
              <>
                <strong>{addedProduct.name}</strong> has been added to your cart!
              </>
            )}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
}

export default Shop;
