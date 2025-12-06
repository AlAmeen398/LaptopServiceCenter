// About.jsx
import React from "react";
import { Card } from "react-bootstrap";

function About() {
  return (
    <div className="d-flex align-items-center justify-content-center m-5 min-h-screen bg-gray-100">
      <Card style={{ width: "30rem", padding: "20px" }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">About Us</Card.Title>
          <Card.Text>
            Welcome to Service Centre! 🚗✨ <br /><br />
            We specialize in offering top-quality repair and maintenance services for all your electronic and automotive needs.
            <br /><br />
            Our mission is to provide the best customer experience with fast, reliable, and affordable service.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
