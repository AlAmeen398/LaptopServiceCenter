import React from 'react';
import { Container, Row, Col, Card, Button, Table, Badge } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    const quantity = parseInt(newQuantity);
    if (quantity > 0) {
      updateQuantity(productId, quantity);
    }
  };

  const formatPrice = (price) => {
    return price.replace(/[₹,]/g, '');
  };

  const handleCheckout = () => {
    toast.success('Your order is placed successfully!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setTimeout(() => {
      clearCart();
    }, 3000);
  };

  return (
    <>
      <style>{`
        .cart-item-row {
          transition: all 0.3s ease;
        }
        
        .cart-item-row:hover {
          background-color: #f8f9fa;
        }
        
        .quantity-input {
          width: 80px;
          text-align: center;
        }
        
        .remove-btn {
          transition: all 0.3s ease;
        }
        
        .remove-btn:hover {
          transform: scale(1.1);
        }
        
        .empty-cart-icon {
          font-size: 5rem;
          color: #dee2e6;
        }
        
        .cart-summary {
          position: sticky;
          top: 20px;
        }
      `}</style>

      <Container className="py-5">
        <h2 className="mb-4">
          <i className="fa-solid fa-shopping-cart me-3"></i>
          Shopping Cart
        </h2>

        {cartItems.length === 0 ? (
          <div className="text-center py-5">
            <i className="fa-solid fa-cart-shopping empty-cart-icon mb-4"></i>
            <h3 className="text-muted mb-3">Your cart is empty</h3>
            <p className="text-muted mb-4">Add some products to get started!</p>
            <Link to="/shop">
              <Button variant="primary" size="lg">
                <i className="fa-solid fa-store me-2"></i>
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <Row>
            <Col lg={8}>
              <Card className="shadow-sm mb-4">
                <Card.Body>
                  <Table responsive hover>
                    <thead className="bg-light">
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.id} className="cart-item-row align-middle">
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src={item.image}
                                alt={item.name}
                                style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }}
                                className="me-3"
                              />
                              <div>
                                <h6 className="mb-0">{item.name}</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <strong>{item.price}</strong>
                          </td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <Button
                                variant="outline-secondary"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <i className="fa-solid fa-minus"></i>
                              </Button>
                              <input
                                type="number"
                                className="form-control form-control-sm quantity-input"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                min="1"
                              />
                              <Button
                                variant="outline-secondary"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <i className="fa-solid fa-plus"></i>
                              </Button>
                            </div>
                          </td>
                          <td>
                            <strong>₹{(parseInt(formatPrice(item.price)) * item.quantity).toLocaleString()}</strong>
                          </td>
                          <td>
                            <Button
                              variant="outline-danger"
                              size="sm"
                              className="remove-btn"
                              onClick={() => removeFromCart(item.id)}
                              title="Remove item"
                            >
                              <i className="fa-solid fa-trash"></i>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>

              <div className="d-flex justify-content-between">
                <Link to="/shop">
                  <Button variant="outline-primary">
                    <i className="fa-solid fa-arrow-left me-2"></i>
                    Continue Shopping
                  </Button>
                </Link>
                <Button variant="outline-danger" onClick={clearCart}>
                  <i className="fa-solid fa-trash-can me-2"></i>
                  Clear Cart
                </Button>
              </div>
            </Col>

            <Col lg={4}>
              <Card className="shadow-sm cart-summary">
                <Card.Body>
                  <h5 className="mb-4">Order Summary</h5>
                  
                  <div className="d-flex justify-content-between mb-3">
                    <span>Subtotal:</span>
                    <strong>₹{getCartTotal().toLocaleString()}</strong>
                  </div>
                  
                  <div className="d-flex justify-content-between mb-3">
                    <span>Shipping:</span>
                    <Badge bg="success">FREE</Badge>
                  </div>
                  
                  <div className="d-flex justify-content-between mb-3">
                    <span>Tax (18% GST):</span>
                    <strong>₹{Math.round(getCartTotal() * 0.18).toLocaleString()}</strong>
                  </div>
                  
                  <hr />
                  
                  <div className="d-flex justify-content-between mb-4">
                    <h5>Total:</h5>
                    <h5 className="text-primary">₹{Math.round(getCartTotal() * 1.18).toLocaleString()}</h5>
                  </div>
                  
                  <Button variant="primary" className="w-100 mb-2" size="lg" onClick={handleCheckout}>
                    <i className="fa-solid fa-credit-card me-2"></i>
                    Proceed to Checkout
                  </Button>
                  
                  <div className="text-center mt-3">
                    <small className="text-muted">
                      <i className="fa-solid fa-lock me-1"></i>
                      Secure Checkout
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
      <ToastContainer />
    </>
  );
}

export default Cart;
