import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'

const staffList = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];


function StaffAttendance() {
  const [form, setForm] = useState({
    staffId: "",
    attendance: "",
    
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", form);
    alert("Attendance");
    setForm({ staffId: "", attendance: ""});
  };

  return (
    <>
     <Container className="my-5 d-flex justify-content-center">
      <Card style={{ width: "26rem" }}>
        <Card.Body>
          <Card.Title className="mb-4">Staff Attendance</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="staffId" className="mb-3">
              <Form.Label>Select Staff</Form.Label>
              <Form.Select
                name="staffId"
                value={form.staffId}
                onChange={handleChange}
                required
              >
                <option value="">-- Select --</option>
                {staffList.map((staff) => (
                  <option key={staff.id} value={staff.id}>
                    {staff.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="attendance" className="mb-3">
              <Form.Label>Attendance Days</Form.Label>
              <Form.Control
                type="number"
                name="attendance"
                value={form.attendance}
                onChange={handleChange}
                required
                placeholder="e.g. 22"
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              Save Attendance
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    </>
  )
}

export default StaffAttendance