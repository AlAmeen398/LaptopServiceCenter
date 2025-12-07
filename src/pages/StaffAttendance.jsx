import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Button, Badge, Form, Modal } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function StaffAttendance() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showModal, setShowModal] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [editingTime, setEditingTime] = useState({ staffId: null, field: null });
  const [showAddStaffModal, setShowAddStaffModal] = useState(false);
  const [newStaffData, setNewStaffData] = useState({
    name: '',
    position: '',
    specialty: ''
  });

  // Load staff from localStorage or use default data
  const loadStaffData = () => {
    const savedStaff = localStorage.getItem('staffList');
    if (savedStaff) {
      return JSON.parse(savedStaff);
    }
    // Default staff data
    return [
      {
        id: 1,
        name: 'John Doe',
        position: 'Senior Technician',
        specialty: 'Hardware',
        checkIn: '09:00',
        checkOut: '18:00',
        status: 'Present',
        workHours: '9h',
        lateBy: '-',
        overtime: '-',
        netTime: '-',
        image: 'https://i.pravatar.cc/150?img=12'
      },
      {
        id: 2,
        name: 'Jane Smith',
        position: 'Technical Lead',
        specialty: 'Software',
        checkIn: '09:15',
        checkOut: '18:30',
        status: 'Present',
        workHours: '9h 15m',
        lateBy: '15m',
        overtime: '30m',
        netTime: '+15m',
        image: 'https://i.pravatar.cc/150?img=5'
      },
      {
        id: 3,
        name: 'Mike Johnson',
        position: 'Manager',
        specialty: 'Networking',
        checkIn: '08:45',
        checkOut: '18:00',
        status: 'Present',
        workHours: '9h 15m',
        lateBy: '-',
        overtime: '-',
        netTime: '-',
        image: 'https://i.pravatar.cc/150?img=33'
      },
      {
        id: 4,
        name: 'Sarah Williams',
        position: 'Receptionist',
        specialty: 'Admin',
        checkIn: '-',
        checkOut: '-',
        status: 'Absent',
        workHours: '-',
        lateBy: '-',
        overtime: '-',
        netTime: '-',
        image: 'https://i.pravatar.cc/150?img=45'
      },
      {
        id: 5,
        name: 'David Brown',
        position: 'Technician',
        specialty: 'Software',
        checkIn: '-',
        checkOut: '-',
        status: 'On Leave',
        workHours: '-',
        lateBy: '-',
        overtime: '-',
        netTime: '-',
        image: 'https://i.pravatar.cc/150?img=51'
      }
    ];
  };

  const [attendanceData, setAttendanceData] = useState(loadStaffData());

  // Save to localStorage whenever attendanceData changes
  useEffect(() => {
    localStorage.setItem('staffList', JSON.stringify(attendanceData));
  }, [attendanceData]);

  const [leaveRequests, setLeaveRequests] = useState([
    { id: 1, name: 'David Brown', type: 'Sick Leave', from: '2025-12-07', to: '2025-12-07', status: 'Approved', reason: 'Fever and cold' },
    { id: 2, name: 'Sarah Williams', type: 'Personal Leave', from: '2025-12-07', to: '2025-12-08', status: 'Pending', reason: 'Family emergency' },
    { id: 3, name: 'Emily Davis', type: 'Casual Leave', from: '2025-12-10', to: '2025-12-11', status: 'Pending', reason: 'Personal work' },
  ]);

  const getStatusBadge = (status) => {
    const badges = {
      'Present': 'success',
      'Absent': 'danger',
      'On Leave': 'warning',
      'Late': 'info'
    };
    return badges[status] || 'secondary';
  };

  const handleViewDetails = (staff) => {
    setSelectedStaff(staff);
    setShowModal(true);
  };

  const handleMarkAttendance = (staffId, status) => {
    setAttendanceData(attendanceData.map(staff =>
      staff.id === staffId ? { ...staff, status: status } : staff
    ));
    toast.success(`Attendance marked as ${status}`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handleLeaveAction = (requestId, action) => {
    const newStatus = action === 'approve' ? 'Approved' : 'Rejected';
    setLeaveRequests(leaveRequests.map(request =>
      request.id === requestId ? { ...request, status: newStatus } : request
    ));
    
    // If approved, update staff attendance to "On Leave"
    if (action === 'approve') {
      const request = leaveRequests.find(r => r.id === requestId);
      if (request) {
        setAttendanceData(attendanceData.map(staff =>
          staff.name === request.name ? { ...staff, status: 'On Leave' } : staff
        ));
      }
    }
    
    toast.success(`Leave request ${newStatus.toLowerCase()}!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handleAddStaff = () => {
    if (!newStaffData.name || !newStaffData.position || !newStaffData.specialty) {
      toast.error('Please fill all fields!');
      return;
    }

    const newStaff = {
      id: Date.now(),
      name: newStaffData.name,
      position: newStaffData.position,
      specialty: newStaffData.specialty,
      checkIn: '-',
      checkOut: '-',
      status: 'Present',
      workHours: '-',
      lateBy: '-',
      overtime: '-',
      netTime: '-',
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
    };

    setAttendanceData([...attendanceData, newStaff]);
    setNewStaffData({ name: '', position: '', specialty: '' });
    setShowAddStaffModal(false);
    
    toast.success('Staff member added successfully!', {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handleRemoveStaff = (staffId) => {
    if (window.confirm('Are you sure you want to remove this staff member?')) {
      setAttendanceData(attendanceData.filter(staff => staff.id !== staffId));
      toast.success('Staff member removed successfully!', {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const handleTimeChange = (staffId, field, value) => {
    const updatedStaff = attendanceData.map(staff => {
      if (staff.id === staffId) {
        const updatedData = { ...staff, [field]: value };
        
        // Calculate late by if check-in time is updated
        if (field === 'checkIn' && value && value !== '-') {
          const checkInTime = convertTo24Hour(value);
          const standardTime = '09:00'; // Standard check-in time
          const lateMinutes = calculateLateMinutes(standardTime, checkInTime);
          updatedData.lateBy = lateMinutes > 0 ? `${lateMinutes}m` : '-';
        }
        
        // Calculate overtime and work hours when both check-in and check-out are available
        const checkIn = field === 'checkIn' ? value : staff.checkIn;
        const checkOut = field === 'checkOut' ? value : staff.checkOut;
        
        if (checkIn && checkIn !== '-' && checkOut && checkOut !== '-') {
          const checkInTime = convertTo24Hour(checkIn);
          const checkOutTime = convertTo24Hour(checkOut);
          
          if (checkInTime && checkOutTime) {
            const { hours, minutes, totalMinutes } = calculateWorkHours(checkInTime, checkOutTime);
            updatedData.workHours = `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
            
            // Calculate overtime (standard work day is 9 hours = 540 minutes)
            const standardWorkMinutes = 540; // 9 hours
            const overtimeMinutes = Math.max(0, totalMinutes - standardWorkMinutes);
            updatedData.overtime = overtimeMinutes > 0 ? `${overtimeMinutes}m` : '-';
            
            // Calculate net time (overtime minus late)
            const lateMinutes = updatedData.lateBy !== '-' ? parseInt(updatedData.lateBy) : 0;
            const netMinutes = overtimeMinutes - lateMinutes;
            if (netMinutes > 0) {
              updatedData.netTime = `+${netMinutes}m`;
            } else if (netMinutes < 0) {
              updatedData.netTime = `${netMinutes}m`;
            } else {
              updatedData.netTime = '-';
            }
          }
        } else if (checkOut === '-' || !checkOut) {
          updatedData.workHours = checkIn && checkIn !== '-' ? 'In Progress' : '-';
          updatedData.overtime = '-';
          updatedData.netTime = '-';
        }
        
        return updatedData;
      }
      return staff;
    });
    
    setAttendanceData(updatedStaff);
    toast.success(`${field === 'checkIn' ? 'Check-in' : 'Check-out'} time updated`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  // Convert 12-hour format to 24-hour format
  const convertTo24Hour = (time12h) => {
    if (!time12h || time12h === '-') return null;
    
    // If already in 24-hour format (HH:MM)
    if (time12h.match(/^\d{2}:\d{2}$/)) {
      return time12h;
    }
    
    // Convert from 12-hour format with AM/PM
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
    
    if (hours === '12') {
      hours = '00';
    }
    
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
    
    return `${hours.toString().padStart(2, '0')}:${minutes}`;
  };

  // Calculate late minutes
  const calculateLateMinutes = (standardTime, actualTime) => {
    if (!actualTime || actualTime === '-') return 0;
    
    const [stdHours, stdMinutes] = standardTime.split(':').map(Number);
    const [actHours, actMinutes] = actualTime.split(':').map(Number);
    
    const stdTotalMinutes = stdHours * 60 + stdMinutes;
    const actTotalMinutes = actHours * 60 + actMinutes;
    
    return Math.max(0, actTotalMinutes - stdTotalMinutes);
  };

  // Calculate work hours between check-in and check-out
  const calculateWorkHours = (checkInTime, checkOutTime) => {
    if (!checkInTime || !checkOutTime) return { hours: 0, minutes: 0, totalMinutes: 0 };
    
    const [inHours, inMinutes] = checkInTime.split(':').map(Number);
    const [outHours, outMinutes] = checkOutTime.split(':').map(Number);
    
    const inTotalMinutes = inHours * 60 + inMinutes;
    const outTotalMinutes = outHours * 60 + outMinutes;
    
    const totalMinutes = outTotalMinutes - inTotalMinutes;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    
    return { hours, minutes, totalMinutes };
  };

  const totalStaff = attendanceData.length;
  const presentCount = attendanceData.filter(s => s.status === 'Present').length;
  const absentCount = attendanceData.filter(s => s.status === 'Absent').length;
  const onLeaveCount = attendanceData.filter(s => s.status === 'On Leave').length;
  const lateCount = attendanceData.filter(s => s.lateBy !== '-').length;

  return (
    <>
      <Container className="py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2><i className="fa-solid fa-calendar-check text-primary me-2"></i>Staff Attendance</h2>
            <p className="text-muted">View daily staff attendance records and manage leaves</p>
          </div>
          <div className="d-flex gap-2">
            <Form.Control
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              style={{ width: '180px' }}
            />
            <Button variant="success" onClick={() => setShowAddStaffModal(true)}>
              <i className="fa-solid fa-user-plus me-2"></i>Add Staff
            </Button>
            <Button variant="primary">
              <i className="fa-solid fa-download me-2"></i>Export
            </Button>
          </div>
        </div>

        {/* Statistics Cards */}
        <Row className="mb-4">
          <Col md={3}>
            <Card className="text-center shadow-sm border-primary">
              <Card.Body>
                <i className="fa-solid fa-users fa-2x text-primary mb-2"></i>
                <h6 className="text-muted">Total Staff</h6>
                <h3 className="text-primary">{totalStaff}</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center shadow-sm border-success">
              <Card.Body>
                <i className="fa-solid fa-user-check fa-2x text-success mb-2"></i>
                <h6 className="text-muted">Present</h6>
                <h3 className="text-success">{presentCount}</h3>
                <small className="text-muted">{((presentCount/totalStaff)*100).toFixed(0)}%</small>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center shadow-sm border-danger">
              <Card.Body>
                <i className="fa-solid fa-user-xmark fa-2x text-danger mb-2"></i>
                <h6 className="text-muted">Absent</h6>
                <h3 className="text-danger">{absentCount}</h3>
                <small className="text-muted">{((absentCount/totalStaff)*100).toFixed(0)}%</small>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center shadow-sm border-warning">
              <Card.Body>
                <i className="fa-solid fa-umbrella-beach fa-2x text-warning mb-2"></i>
                <h6 className="text-muted">On Leave</h6>
                <h3 className="text-warning">{onLeaveCount}</h3>
                <small className="text-muted">{lateCount} Late Arrivals</small>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Attendance Table */}
        <Card className="shadow-sm mb-4">
          <Card.Body>
            <h5 className="mb-3">
              <i className="fa-solid fa-clipboard-list me-2"></i>
              Attendance for {new Date(selectedDate).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </h5>
            <Table responsive hover>
              <thead className="bg-light">
                <tr>
                  <th>Staff</th>
                  <th>Position</th>
                  <th>Specialty</th>
                  <th>Check In</th>
                  <th>Check Out</th>
                  <th>Work Hours</th>
                  <th>Late By</th>
                  <th>Overtime</th>
                  <th>Net Time</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((staff) => (
                  <tr key={staff.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={staff.image}
                          alt={staff.name}
                          className="rounded-circle me-2"
                          style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                        />
                        <strong>{staff.name}</strong>
                      </div>
                    </td>
                    <td>{staff.position}</td>
                    <td>
                      <Badge bg="secondary">{staff.specialty || 'General'}</Badge>
                    </td>
                    <td>
                      <Form.Control
                        type="time"
                        size="sm"
                        value={staff.checkIn !== '-' ? staff.checkIn : ''}
                        onChange={(e) => handleTimeChange(staff.id, 'checkIn', e.target.value || '-')}
                        style={{ width: '120px' }}
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="time"
                        size="sm"
                        value={staff.checkOut !== '-' ? staff.checkOut : ''}
                        onChange={(e) => handleTimeChange(staff.id, 'checkOut', e.target.value || '-')}
                        style={{ width: '120px' }}
                      />
                    </td>
                    <td><strong>{staff.workHours}</strong></td>
                    <td>
                      {staff.lateBy !== '-' ? (
                        <Badge bg="warning">{staff.lateBy}</Badge>
                      ) : (
                        <span className="text-muted">-</span>
                      )}
                    </td>
                    <td>
                      {staff.overtime !== '-' ? (
                        <Badge bg="info">{staff.overtime}</Badge>
                      ) : (
                        <span className="text-muted">-</span>
                      )}
                    </td>
                    <td>
                      {staff.netTime !== '-' ? (
                        <Badge bg={staff.netTime.startsWith('+') ? 'success' : 'danger'}>
                          {staff.netTime}
                        </Badge>
                      ) : (
                        <span className="text-muted">-</span>
                      )}
                    </td>
                    <td>
                      <Badge bg={getStatusBadge(staff.status)}>
                        {staff.status}
                      </Badge>
                    </td>
                    <td>
                      <div className="d-flex gap-2">
                        <Button 
                          variant="outline-primary" 
                          size="sm" 
                          onClick={() => handleViewDetails(staff)}
                        >
                          <i className="fa-solid fa-eye"></i>
                        </Button>
                        <Form.Select
                          size="sm"
                          value={staff.status}
                          onChange={(e) => handleMarkAttendance(staff.id, e.target.value)}
                          style={{ width: '120px' }}
                        >
                          <option value="Present">Present</option>
                          <option value="Absent">Absent</option>
                          <option value="On Leave">On Leave</option>
                          <option value="Late">Late</option>
                        </Form.Select>
                        <Button 
                          variant="outline-danger" 
                          size="sm"
                          onClick={() => handleRemoveStaff(staff.id)}
                          title="Remove Staff"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>

        {/* Leave Requests */}
        <Card className="shadow-sm">
          <Card.Body>
            <h5 className="mb-3">
              <i className="fa-solid fa-calendar-xmark me-2"></i>
              Leave Requests
            </h5>
            <Table responsive hover>
              <thead className="bg-light">
                <tr>
                  <th>Staff Name</th>
                  <th>Leave Type</th>
                  <th>Reason</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Duration</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {leaveRequests.map((request) => {
                  const fromDate = new Date(request.from);
                  const toDate = new Date(request.to);
                  const duration = Math.ceil((toDate - fromDate) / (1000 * 60 * 60 * 24)) + 1;
                  
                  return (
                    <tr key={request.id}>
                      <td><strong>{request.name}</strong></td>
                      <td>
                        <Badge bg="info">{request.type}</Badge>
                      </td>
                      <td>
                        <small className="text-muted">{request.reason}</small>
                      </td>
                      <td>{fromDate.toLocaleDateString()}</td>
                      <td>{toDate.toLocaleDateString()}</td>
                      <td>
                        <Badge bg="secondary">{duration} day{duration > 1 ? 's' : ''}</Badge>
                      </td>
                      <td>
                        <Badge bg={
                          request.status === 'Approved' ? 'success' : 
                          request.status === 'Rejected' ? 'danger' : 
                          'warning'
                        }>
                          {request.status}
                        </Badge>
                      </td>
                      <td>
                        {request.status === 'Pending' ? (
                          <div className="d-flex gap-1">
                            <Button 
                              variant="outline-success" 
                              size="sm"
                              onClick={() => handleLeaveAction(request.id, 'approve')}
                              title="Approve"
                            >
                              <i className="fa-solid fa-check"></i>
                            </Button>
                            <Button 
                              variant="outline-danger" 
                              size="sm"
                              onClick={() => handleLeaveAction(request.id, 'reject')}
                              title="Reject"
                            >
                              <i className="fa-solid fa-times"></i>
                            </Button>
                          </div>
                        ) : (
                          <Badge bg={request.status === 'Approved' ? 'success' : 'danger'}>
                            {request.status}
                          </Badge>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>

      {/* Staff Details Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Staff Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedStaff && (
            <div>
              <div className="text-center mb-3">
                <img
                  src={selectedStaff.image}
                  alt={selectedStaff.name}
                  className="rounded-circle mb-2"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <h5>{selectedStaff.name}</h5>
                <p className="text-muted">{selectedStaff.position}</p>
              </div>
              <hr />
              <Row>
                <Col xs={6}>
                  <p><strong>Check In:</strong></p>
                  <p className="text-muted">{selectedStaff.checkIn}</p>
                </Col>
                <Col xs={6}>
                  <p><strong>Check Out:</strong></p>
                  <p className="text-muted">{selectedStaff.checkOut}</p>
                </Col>
                <Col xs={6}>
                  <p><strong>Work Hours:</strong></p>
                  <p className="text-muted">{selectedStaff.workHours}</p>
                </Col>
                <Col xs={6}>
                  <p><strong>Status:</strong></p>
                  <Badge bg={getStatusBadge(selectedStaff.status)}>{selectedStaff.status}</Badge>
                </Col>
              </Row>
              {selectedStaff.lateBy !== '-' && (
                <div className="alert alert-warning mt-3">
                  <i className="fa-solid fa-exclamation-triangle me-2"></i>
                  Staff was late by {selectedStaff.lateBy}
                </div>
              )}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Add Staff Modal */}
      <Modal show={showAddStaffModal} onHide={() => setShowAddStaffModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Staff Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter staff name"
                value={newStaffData.name}
                onChange={(e) => setNewStaffData({ ...newStaffData, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter position (e.g., Technician, Manager)"
                value={newStaffData.position}
                onChange={(e) => setNewStaffData({ ...newStaffData, position: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Specialty</Form.Label>
              <Form.Select
                value={newStaffData.specialty}
                onChange={(e) => setNewStaffData({ ...newStaffData, specialty: e.target.value })}
              >
                <option value="">Select Specialty</option>
                <option value="Hardware">Hardware</option>
                <option value="Software">Software</option>
                <option value="Networking">Networking</option>
                <option value="Admin">Admin</option>
                <option value="General">General</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddStaffModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAddStaff}>
            <i className="fa-solid fa-plus me-2"></i>
            Add Staff
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </>
  );
}

export default StaffAttendance;
