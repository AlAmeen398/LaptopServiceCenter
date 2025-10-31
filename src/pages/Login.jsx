import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Dummy authentication (replace with real API call)
        if (username === 'admin' && password === 'admin') {
            console.log('Login successful!', { username, password, rememberMe });
            // Redirect or save token
        } else {
            setError('Invalid username or password!');
        }

        setLoading(false);
    };

    return (
        <>
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <Card style={{ backgroundColor: "white", border: 'none', boxShadow: '20px 20px 21px' }}>
                            <Card.Body className='shadow-lg'>
                                <h2 className="text-center mb-4">Login</h2>
                                {error && <div className="alert alert-danger">{error}</div>}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId='formBasicUsername' className="mb-3">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword" className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <div className="d-flex">
                                            <Form.Control
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Enter password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                            <Button
                                                variant="outline-secondary"
                                                onClick={() => setShowPassword(!showPassword)}
                                                style={{ marginLeft: '5px' }}
                                            >
                                                {showPassword ? 'Hide' : 'Show'}
                                            </Button>
                                        </div>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicCheckbox" className="mb-3">
                                        <Form.Check
                                            type="checkbox"
                                            label="Remember Me"
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                        />
                                    </Form.Group>
                                    <Link to={""}>
                                        <Button variant='primary' type='submit' className='w-100' disabled={loading}>
                                            {loading ? <Spinner animation="border" size="sm" /> : 'Login'}
                                        </Button>
                                    </Link>

                                </Form>

                                <div className="mt-3 text-center">
                                    <Link to="/registerpage" style={{ marginRight: '10px' }}>
                                        <Button variant="link" className="text-decoration-none">
                                            Register
                                        </Button>
                                    </Link>
                                    <Link to="/forgot-password" style={{ marginLeft: '10px' }}>
                                        <Button variant="link" className="text-decoration-none">
                                            Forgot Password?
                                        </Button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login
