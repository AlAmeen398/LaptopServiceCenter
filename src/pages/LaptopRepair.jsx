import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function LaptopRepair() {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Laptop Repair Services</h2>

      <p>
        At <strong>ChipFix</strong>, we specialize in comprehensive laptop repair services. Whether it’s a broken screen,
        motherboard issue, liquid damage, or software malfunction – our certified technicians can handle all major laptop brands,
        including Dell, HP, Lenovo, Asus, and MacBooks.
      </p>

      <Row className="my-4">
        <Col md={4}>
          <Image src="/images/repair1.jpg" alt="Laptop repair photo 1" fluid rounded />
        </Col>
        <Col md={4}>
          <Image src="/images/repair2.jpg" alt="Laptop repair photo 2" fluid rounded />
        </Col>
        <Col md={4}>
          <Image src="/images/repair3.jpg" alt="Laptop repair photo 3" fluid rounded />
        </Col>
      </Row>

      <h4 className="mt-5">Why Choose ChipFix?</h4>
      <ul>
        <li>Experienced and certified repair technicians</li>
        <li>Fast turnaround and warranty-backed services</li>
        <li>Genuine parts for all major laptop brands</li>
        <li>Free diagnostics and transparent pricing</li>
        <li>Trusted by thousands of customers across the region</li>
      </ul>

      <p>
        Visit your nearest ChipFix service center or book a pickup online. We're here to bring your laptop back to life with
        care, speed, and precision.
      </p>
    </Container>
  );
}

export default LaptopRepair;
