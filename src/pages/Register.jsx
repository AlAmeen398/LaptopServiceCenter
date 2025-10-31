import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Register() {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        if (!agreeTerms) {
            setError('You must agree to the terms and conditions.');
            return;
        }

        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            console.log('Registered with:', { fullName, username, email, phone, password });
            setLoading(false);
            // Redirect or show success message here
        }, 2000);
    };

    return (

        <>
             <Container className="d-flex justify-content-center align-items-center mt-5" style={{ minHeight: '100vh' }}>
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <Card style={{ backgroundColor: "white", border: 'none', boxShadow: '20px 20px 21px' }}>
                            <Card.Body className='shadow-lg'>
                                <h2 className="text-center mb-4">Register</h2>
                                {error && <div className="alert alert-danger">{error}</div>}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId='formFullName' className="mb-3">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter full name"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId='formUsername' className="mb-3">
                                        <Form.Label>User Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId='formEmail' className="mb-3">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId='formPhone' className="mb-3">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control
                                            type="tel"
                                            placeholder="Enter phone number"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formPassword" className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formConfirmPassword" className="mb-3">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Confirm password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicCheckbox" className="mb-3">
                                        <Form.Check 
                                            type="checkbox" 
                                            label="I agree to the Terms and Conditions" 
                                            checked={agreeTerms}
                                            onChange={(e) => setAgreeTerms(e.target.checked)}
                                            required
                                        />
                                    </Form.Group>

                                    <Button variant='primary' type='submit' className='w-100' disabled={loading}>
                                        {loading ? <Spinner animation="border" size="sm" /> : 'Register'}
                                    </Button>
                                </Form>

                                <div className="mt-3 text-center">
                                    <Link to="/loginpage" style={{ marginRight: '10px' }}>
                                        <Button variant="link" className="text-decoration-none">
                                            Login
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

export default Register