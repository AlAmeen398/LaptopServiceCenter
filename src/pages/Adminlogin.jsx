import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Card, Alert, InputGroup, Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Demo credentials
  const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    setLoginError('');
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginError('');

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (
        formData.username === ADMIN_CREDENTIALS.username &&
        formData.password === ADMIN_CREDENTIALS.password
      ) {
        // Store admin session
        localStorage.setItem('adminLoggedIn', 'true');
        localStorage.setItem('adminUsername', formData.username);
        
        // Navigate to dashboard
        navigate('/admindashboard');
      } else {
        setLoginError('Invalid username or password. Please try again.');
        setIsLoading(false);
      }
    }, 1000);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <style>{`
        .login-container {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .login-container::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-20px, -20px) rotate(180deg);
          }
        }

        .login-card {
          border-radius: 20px;
          border: none;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95);
          position: relative;
          z-index: 1;
        }

        .login-card:hover {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3) !important;
        }

        .admin-icon {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        }

        .form-control:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
        }

        .btn-login {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          padding: 10px;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .btn-login:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
        }

        .btn-login:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .password-toggle {
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .password-toggle:hover {
          color: #667eea;
        }

        .demo-credentials {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-left: 4px solid #667eea;
          border-radius: 8px;
        }

        .shake {
          animation: shake 0.5s;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }

        .spinner-border-sm {
          width: 1rem;
          height: 1rem;
        }
      `}</style>

      <div className="login-container">
        <Container>
          <Row className="justify-content-center">
            <Col md={6} lg={4} xl={4}>
              <Card className="login-card shadow-lg p-3 my-3">
                <Card.Body>
                  {/* Admin Icon */}
                  <div className="admin-icon" style={{width: '80px', height: '80px', marginBottom: '1.5rem'}}>
                    <i className="fa-solid fa-user-shield fa-2x text-white"></i>
                  </div>

                  <h2 className="text-center mb-2 fw-bold" style={{fontSize: '1.5rem'}}>Admin Portal</h2>
                  <p className="text-center text-muted mb-3" style={{fontSize: '0.9rem'}}>Secure access to management dashboard</p>

                  {/* Demo Credentials Info */}
                  <div className="demo-credentials p-2 mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <i className="fa-solid fa-info-circle text-primary me-2"></i>
                      <strong className="text-primary">Demo Credentials</strong>
                    </div>
                    <small className="text-muted">
                      <strong>Username:</strong> admin<br/>
                      <strong>Password:</strong> admin123
                    </small>
                  </div>

                  {/* Login Error Alert */}
                  {loginError && (
                    <Alert variant="danger" className="shake" dismissible onClose={() => setLoginError('')}>
                      <i className="fa-solid fa-exclamation-triangle me-2"></i>
                      {loginError}
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    {/* Username Field */}
                    <Form.Group className="mb-2" controlId="formUsername">
                      <Form.Label className="fw-semibold" style={{fontSize: '0.9rem'}}>
                        <i className="fa-solid fa-user me-2 text-primary"></i>
                        Username
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Text className="bg-light">
                          <i className="fa-solid fa-at"></i>
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          name="username"
                          placeholder="Enter your username"
                          value={formData.username}
                          onChange={handleChange}
                          isInvalid={!!errors.username}
                          disabled={isLoading}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.username}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>

                    {/* Password Field */}
                    <Form.Group className="mb-3" controlId="formPassword">
                      <Form.Label className="fw-semibold" style={{fontSize: '0.9rem'}}>
                        <i className="fa-solid fa-lock me-2 text-primary"></i>
                        Password
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Text className="bg-light">
                          <i className="fa-solid fa-key"></i>
                        </InputGroup.Text>
                        <Form.Control
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={handleChange}
                          isInvalid={!!errors.password}
                          disabled={isLoading}
                        />
                        <InputGroup.Text 
                          className="password-toggle bg-light"
                          onClick={togglePasswordVisibility}
                        >
                          <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                        </InputGroup.Text>
                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>

                    {/* Remember Me & Forgot Password */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <Form.Check 
                        type="checkbox" 
                        label="Remember me" 
                        className="text-muted"
                        style={{fontSize: '0.85rem'}}
                      />
                      <a href="/forgot-password" className="text-decoration-none text-primary">
                        <small style={{fontSize: '0.85rem'}}>Forgot Password?</small>
                      </a>
                    </div>

                    {/* Login Button */}
                    <div className="d-grid">
                      <Button 
                        variant="primary" 
                        type="submit" 
                        size="md"
                        className="btn-login"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Logging in...
                          </>
                        ) : (
                          <>
                            <i className="fa-solid fa-sign-in-alt me-2"></i>
                            Login to Dashboard
                          </>
                        )}
                      </Button>
                    </div>
                  </Form>

                  {/* Security Badge */}
                  <div className="text-center mt-4">
                    <Badge bg="success" className="px-3 py-2">
                      <i className="fa-solid fa-shield-halved me-2"></i>
                      Secure Connection
                    </Badge>
                  </div>
                </Card.Body>
              </Card>

              {/* Back to Home */}
              <div className="text-center mt-4">
                <a href="/" className="text-white text-decoration-none">
                  <i className="fa-solid fa-arrow-left me-2"></i>
                  Back to Home
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default AdminLogin
