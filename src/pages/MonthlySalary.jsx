import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Button, Form, Badge, Modal } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MonthlySalary() {
  const [employees, setEmployees] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [salaryData, setSalaryData] = useState({
    baseSalary: 0,
    bonus: 0,
    deductions: 0
  });

  // Load staff from localStorage and initialize salary data
  useEffect(() => {
    const loadEmployees = () => {
      const savedStaff = localStorage.getItem('staffList');
      const savedSalaries = localStorage.getItem('staffSalaries');
      
      if (savedStaff) {
        const staffList = JSON.parse(savedStaff);
        const salaries = savedSalaries ? JSON.parse(savedSalaries) : {};
        
        // Merge staff with their salary data
        const employeesWithSalary = staffList.map(staff => {
          const salary = salaries[staff.id] || {
            baseSalary: getBaseSalaryByPosition(staff.position),
            bonus: 0,
            deductions: 0
          };
          
          return {
            id: staff.id,
            name: staff.name,
            position: staff.position,
            specialty: staff.specialty,
            ...salary
          };
        });
        
        setEmployees(employeesWithSalary);
      }
    };
    
    loadEmployees();
    
    // Refresh every 5 seconds
    const interval = setInterval(loadEmployees, 5000);
    return () => clearInterval(interval);
  }, []);

  // Default base salary based on position
  const getBaseSalaryByPosition = (position) => {
    const salaryMap = {
      'Manager': 60000,
      'Assistant Manager': 50000,
      'Senior Technician': 45000,
      'Technical Lead': 50000,
      'Technician': 35000,
      'Receptionist': 25000,
      'HR Executive': 35000
    };
    return salaryMap[position] || 30000;
  };

  const handleEditSalary = (employee) => {
    setSelectedEmployee(employee);
    setSalaryData({
      baseSalary: employee.baseSalary,
      bonus: employee.bonus,
      deductions: employee.deductions
    });
    setShowEditModal(true);
  };

  const handleSaveSalary = () => {
    // Update employee salary
    const updatedEmployees = employees.map(emp => 
      emp.id === selectedEmployee.id 
        ? { ...emp, ...salaryData }
        : emp
    );
    
    setEmployees(updatedEmployees);
    
    // Save to localStorage
    const savedSalaries = localStorage.getItem('staffSalaries');
    const salaries = savedSalaries ? JSON.parse(savedSalaries) : {};
    
    salaries[selectedEmployee.id] = salaryData;
    localStorage.setItem('staffSalaries', JSON.stringify(salaries));
    
    toast.success('Salary updated successfully!', {
      position: "top-right",
      autoClose: 2000,
    });
    
    setShowEditModal(false);
    setSelectedEmployee(null);
  };

  const calculateNetSalary = (employee) => {
    return employee.baseSalary + employee.bonus - employee.deductions;
  };

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2><i className="fa-solid fa-coins text-success me-2"></i>Monthly Salary Management</h2>
          <p className="text-muted">Calculate and process monthly salaries for all employees</p>
        </div>
        <Button variant="success">
          <i className="fa-solid fa-download me-2"></i>Export Report
        </Button>
      </div>

      <Row className="mb-4">
        <Col md={3}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <h6 className="text-muted">Total Employees</h6>
              <h3 className="text-primary">{employees.length}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <h6 className="text-muted">Total Base Salary</h6>
              <h3 className="text-success">₹{employees.reduce((sum, emp) => sum + emp.baseSalary, 0).toLocaleString()}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <h6 className="text-muted">Total Bonus</h6>
              <h3 className="text-warning">₹{employees.reduce((sum, emp) => sum + emp.bonus, 0).toLocaleString()}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <h6 className="text-muted">Net Payable</h6>
              <h3 className="text-info">₹{employees.reduce((sum, emp) => sum + calculateNetSalary(emp), 0).toLocaleString()}</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="shadow-sm">
        <Card.Body>
          <h5 className="mb-3">Salary Details</h5>
          <Table responsive hover>
            <thead className="bg-light">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Position</th>
                <th>Specialty</th>
                <th>Base Salary</th>
                <th>Bonus</th>
                <th>Deductions</th>
                <th>Net Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.length === 0 ? (
                <tr>
                  <td colSpan="9" className="text-center text-muted py-4">
                    No employees found. Add staff in Staff Attendance page.
                  </td>
                </tr>
              ) : (
                employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.position}</td>
                    <td><Badge bg="secondary">{employee.specialty || 'General'}</Badge></td>
                    <td>₹{employee.baseSalary.toLocaleString()}</td>
                    <td className="text-success">₹{employee.bonus.toLocaleString()}</td>
                    <td className="text-danger">₹{employee.deductions.toLocaleString()}</td>
                    <td><strong>₹{calculateNetSalary(employee).toLocaleString()}</strong></td>
                    <td>
                      <Button 
                        variant="outline-primary" 
                        size="sm"
                        onClick={() => handleEditSalary(employee)}
                      >
                        <i className="fa-solid fa-edit"></i>
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Edit Salary Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Salary Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEmployee && (
            <div>
              <div className="mb-3">
                <p><strong>Employee:</strong> {selectedEmployee.name}</p>
                <p><strong>Position:</strong> {selectedEmployee.position}</p>
              </div>
              <hr />
              
              <Form.Group className="mb-3">
                <Form.Label><strong>Base Salary (₹)</strong></Form.Label>
                <Form.Control
                  type="number"
                  value={salaryData.baseSalary}
                  onChange={(e) => setSalaryData({ ...salaryData, baseSalary: Number(e.target.value) })}
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label><strong>Bonus (₹)</strong></Form.Label>
                <Form.Control
                  type="number"
                  value={salaryData.bonus}
                  onChange={(e) => setSalaryData({ ...salaryData, bonus: Number(e.target.value) })}
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label><strong>Deductions (₹)</strong></Form.Label>
                <Form.Control
                  type="number"
                  value={salaryData.deductions}
                  onChange={(e) => setSalaryData({ ...salaryData, deductions: Number(e.target.value) })}
                />
              </Form.Group>
              
              <div className="alert alert-info">
                <strong>Net Salary: ₹{(salaryData.baseSalary + salaryData.bonus - salaryData.deductions).toLocaleString()}</strong>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleSaveSalary}>
            <i className="fa-solid fa-save me-2"></i>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </Container>
  );
}

export default MonthlySalary;
