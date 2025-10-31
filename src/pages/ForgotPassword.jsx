import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        setLoading(true);

        // Simulate sending email (replace with real API call)
        setTimeout(() => {
            if (email === "test@example.com") { // Dummy check
                setMessage('Password reset link has been sent to your email.');
            } else {
                setError('Email not found. Please try again.');
            }
            setLoading(false);
        }, 2000);
    };

    return (
        <>
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <Row>
                    <Col sm={12} md={12} lg={12} style={{width:"400px"}}>
                        <Card style={{ backgroundColor: "white", border: 'none', boxShadow: '20px 20px 21px' }}>
                            <Card.Body className='shadow-lg'>
                                <h2 className="text-center mb-4">Forgot Password</h2>
                                {message && <div className="alert alert-success">{message}</div>}
                                {error && <div className="alert alert-danger">{error}</div>}

                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="formBasicEmail" className="mb-3">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter your registered email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    <Button variant='primary' type='submit' className='w-100' disabled={loading}>
                                        {loading ? <Spinner animation="border" size="sm" /> : 'Send Reset Link'}
                                    </Button>
                                </Form>

                                <div className="mt-3 text-center">
                                    <Link to="/loginpage">
                                        <Button variant="link" className="text-decoration-none">
                                            Back to Login
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

export default ForgotPassword
