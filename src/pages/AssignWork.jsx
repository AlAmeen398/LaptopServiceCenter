import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Button, Badge, Modal, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AssignWork() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedTaskDetails, setSelectedTaskDetails] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [newPriority, setNewPriority] = useState('');
  const [newServicer, setNewServicer] = useState('');
  const [newWorkStatus, setNewWorkStatus] = useState('');

  const [servicers, setServicers] = useState([]);

  const [tasks, setTasks] = useState([]);
  
  // Load servicers from localStorage
  useEffect(() => {
    const loadServicers = () => {
      const savedStaff = localStorage.getItem('staffList');
      if (savedStaff) {
        const staffList = JSON.parse(savedStaff);
        // Convert staff to servicers format
        const servicersList = staffList.map(staff => ({
          id: staff.id,
          name: staff.name,
          specialty: staff.specialty || 'General',
          availability: 'Available',
          workload: 0
        }));
        setServicers(servicersList);
      }
    };
    
    loadServicers();
    
    // Set up interval to check for new staff every 5 seconds
    const interval = setInterval(loadServicers, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Calculate servicer workload dynamically based on assigned tasks
  const getServicerWorkload = (servicerName) => {
    return tasks.filter(task => task.assignedTo === servicerName && task.status !== 'Completed').length;
  };
  
  // Get servicers with updated workload
  const getServicersWithWorkload = () => {
    return servicers.map(servicer => ({
      ...servicer,
      workload: getServicerWorkload(servicer.name),
      availability: getServicerWorkload(servicer.name) >= 5 ? 'Busy' : 'Available'
    }));
  };
  
  // Load complaints from localStorage on component mount
  useEffect(() => {
    const loadComplaints = () => {
      const savedComplaints = JSON.parse(localStorage.getItem('serviceComplaints') || '[]');
      setTasks(savedComplaints);
    };
    
    loadComplaints();
    
    // Set up interval to check for new complaints every 5 seconds
    const interval = setInterval(loadComplaints, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handleAssignClick = (task) => {
    setSelectedTask(task);
    setShowModal(true);
  };

  const handleAssignWork = (servicer) => {
    const updatedTasks = tasks.map(task => 
      task.id === selectedTask.id 
        ? { ...task, status: 'Assigned', assignedTo: servicer.name }
        : task
    );
    
    setTasks(updatedTasks);
    
    // Update localStorage if this is a complaint from the form
    const savedComplaints = JSON.parse(localStorage.getItem('serviceComplaints') || '[]');
    const updatedComplaints = savedComplaints.map(complaint => 
      complaint.id === selectedTask.id
        ? { ...complaint, status: 'Assigned', assignedTo: servicer.name }
        : complaint
    );
    localStorage.setItem('serviceComplaints', JSON.stringify(updatedComplaints));
    
    toast.success(`Task assigned to ${servicer.name} successfully!`, {
      position: "top-right",
      autoClose: 3000,
    });
    
    setShowModal(false);
    setSelectedTask(null);
  };
  
  const handleViewDetails = (task) => {
    setSelectedTaskDetails(task);
    setShowDetailsModal(true);
  };
  
  const handleEditClick = (task) => {
    setEditTask(task);
    setNewPriority(task.priority);
    setNewServicer(task.assignedTo || '');
    setNewWorkStatus(task.workStatus || 'Pending');
    setShowEditModal(true);
  };
  
  const handleUpdateTask = () => {
    if (!newPriority) {
      toast.error('Please select a priority!');
      return;
    }
    
    const updatedTasks = tasks.map(task => 
      task.id === editTask.id 
        ? { ...task, priority: newPriority, assignedTo: newServicer || null, status: newServicer ? 'Assigned' : 'Pending', workStatus: newWorkStatus }
        : task
    );
    
    setTasks(updatedTasks);
    
    // Update localStorage
    const savedComplaints = JSON.parse(localStorage.getItem('serviceComplaints') || '[]');
    const updatedComplaints = savedComplaints.map(complaint => 
      complaint.id === editTask.id
        ? { ...complaint, priority: newPriority, assignedTo: newServicer || null, status: newServicer ? 'Assigned' : 'Pending', workStatus: newWorkStatus }
        : complaint
    );
    localStorage.setItem('serviceComplaints', JSON.stringify(updatedComplaints));
    
    toast.success('Task updated successfully!', {
      position: "top-right",
      autoClose: 3000,
    });
    
    setShowEditModal(false);
    setEditTask(null);
  };

  const getPriorityBadge = (priority) => {
    const colors = { High: 'danger', Medium: 'warning', Low: 'info' };
    return colors[priority] || 'secondary';
  };

  const getStatusBadge = (status) => {
    const colors = { Pending: 'warning', Assigned: 'primary', Completed: 'success' };
    return colors[status] || 'secondary';
  };
  
  const getWorkStatusBadge = (workStatus) => {
    const colors = { 
      'Pending': 'secondary', 
      'In Progress': 'info', 
      'Parts Ordered': 'warning', 
      'Parts Received': 'primary',
      'Complete': 'success',
      'On Hold': 'danger'
    };
    return colors[workStatus] || 'secondary';
  };

  return (
    <>
      <Container className="py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2><i className="fa-solid fa-tasks text-info me-2"></i>Work Assignment</h2>
            <p className="text-muted">Assign repair tasks and service jobs to technicians</p>
          </div>
        </div>

        {/* Stats Cards */}
        <Row className="mb-4">
          <Col md={3}>
            <Card className="text-center shadow-sm">
              <Card.Body>
                <h6 className="text-muted">Total Tasks</h6>
                <h3 className="text-primary">{tasks.length}</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center shadow-sm">
              <Card.Body>
                <h6 className="text-muted">Pending Tasks</h6>
                <h3 className="text-warning">{tasks.filter(t => t.status === 'Pending').length}</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center shadow-sm">
              <Card.Body>
                <h6 className="text-muted">Assigned Tasks</h6>
                <h3 className="text-info">{tasks.filter(t => t.status === 'Assigned').length}</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center shadow-sm">
              <Card.Body>
                <h6 className="text-muted">Available Servicers</h6>
                <h3 className="text-success">{getServicersWithWorkload().filter(s => s.availability === 'Available').length}</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Servicers Overview */}
        <Card className="shadow-sm mb-4">
          <Card.Body>
            <h5 className="mb-3">Servicers Status</h5>
            <Row>
              {getServicersWithWorkload().map((servicer) => (
                <Col md={4} key={servicer.id} className="mb-3">
                  <Card className={servicer.availability === 'Available' ? 'border-success' : 'border-warning'}>
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="mb-1">{servicer.name}</h6>
                          <small className="text-muted">{servicer.specialty}</small>
                        </div>
                        <Badge bg={servicer.availability === 'Available' ? 'success' : 'warning'}>
                          {servicer.availability}
                        </Badge>
                      </div>
                      <div className="mt-2">
                        <small className="text-muted">Current Workload: </small>
                        <strong>{servicer.workload} tasks</strong>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>

        {/* Tasks Table */}
        <Card className="shadow-sm">
          <Card.Body>
            <h5 className="mb-3">Service Requests</h5>
            <Table responsive hover>
              <thead className="bg-light">
                <tr>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Device</th>
                  <th>Issue</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Assigned To</th>
                  <th>Work Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.length === 0 ? (
                  <tr>
                    <td colSpan="9" className="text-center text-muted py-4">
                      No service requests available
                    </td>
                  </tr>
                ) : (
                  tasks.map((task) => (
                    <tr key={task.id}>
                      <td>{task.id}</td>
                      <td>
                        {task.customer}
                        {task.phone && (
                          <><br /><small className="text-muted">{task.phone}</small></>
                        )}
                      </td>
                      <td>
                        {task.device}
                        {task.model && (
                          <><br /><small className="text-muted">Model: {task.model}</small></>
                        )}
                      </td>
                      <td>{task.issue}</td>
                      <td>
                        <Badge bg={getPriorityBadge(task.priority)}>
                          {task.priority}
                        </Badge>
                      </td>
                      <td>
                        <Badge bg={getStatusBadge(task.status)}>
                          {task.status}
                        </Badge>
                      </td>
                      <td>{task.assignedTo || '-'}</td>
                      <td>
                        <Badge bg={getWorkStatusBadge(task.workStatus || 'Pending')}>
                          {task.workStatus || 'Pending'}
                        </Badge>
                      </td>
                      <td>
                        <div className="d-flex gap-2">
                          {task.status === 'Pending' ? (
                            <Button 
                              variant="outline-info" 
                              size="sm"
                              onClick={() => handleAssignClick(task)}
                            >
                              <i className="fa-solid fa-user-plus me-1"></i>
                              Assign
                            </Button>
                          ) : (
                            <Button 
                              variant="outline-warning" 
                              size="sm"
                              onClick={() => handleEditClick(task)}
                              title="Edit Priority/Servicer"
                            >
                              <i className="fa-solid fa-pen-to-square"></i>
                            </Button>
                          )}
                          {(task.phone || task.email || task.message) && (
                            <Button 
                              variant="outline-primary" 
                              size="sm"
                              onClick={() => handleViewDetails(task)}
                            >
                              <i className="fa-solid fa-eye"></i>
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>

      {/* Assignment Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Assign Task to Servicer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTask && (
            <div className="mb-3">
              <h6>Task Details:</h6>
              <p className="mb-1"><strong>Customer:</strong> {selectedTask.customer}</p>
              <p className="mb-1"><strong>Device:</strong> {selectedTask.device}</p>
              <p className="mb-1"><strong>Issue:</strong> {selectedTask.issue}</p>
              <hr />
              <h6 className="mt-3">Select Servicer:</h6>
            </div>
          )}
          
          <div className="d-grid gap-2">
            {getServicersWithWorkload().filter(s => s.availability === 'Available').map((servicer) => (
              <Button
                key={servicer.id}
                variant="outline-primary"
                className="text-start"
                onClick={() => handleAssignWork(servicer)}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{servicer.name}</strong>
                    <br />
                    <small className="text-muted">{servicer.specialty} • {servicer.workload} tasks</small>
                  </div>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </Button>
            ))}
          </div>
        </Modal.Body>
      </Modal>

      {/* Edit Task Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editTask && (
            <div>
              <div className="mb-3">
                <h6>Task Details:</h6>
                <p className="mb-1"><strong>Customer:</strong> {editTask.customer}</p>
                <p className="mb-1"><strong>Device:</strong> {editTask.device}</p>
                <p className="mb-1"><strong>Issue:</strong> {editTask.issue}</p>
              </div>
              <hr />
              
              <Form.Group className="mb-3">
                <Form.Label><strong>Priority</strong></Form.Label>
                <Form.Select 
                  value={newPriority} 
                  onChange={(e) => setNewPriority(e.target.value)}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </Form.Select>
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label><strong>Assigned Servicer</strong></Form.Label>
                <Form.Select 
                  value={newServicer} 
                  onChange={(e) => setNewServicer(e.target.value)}
                >
                  <option value="">Unassigned</option>
                  {getServicersWithWorkload().map((servicer) => (
                    <option key={servicer.id} value={servicer.name}>
                      {servicer.name} - {servicer.specialty} ({servicer.workload} tasks) - {servicer.availability}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label><strong>Work Status</strong></Form.Label>
                <Form.Select 
                  value={newWorkStatus} 
                  onChange={(e) => setNewWorkStatus(e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Parts Ordered">Parts Ordered</option>
                  <option value="Parts Received">Parts Received</option>
                  <option value="On Hold">On Hold</option>
                  <option value="Complete">Complete</option>
                </Form.Select>
              </Form.Group>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdateTask}>
            <i className="fa-solid fa-save me-2"></i>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Task Details Modal */}
      <Modal show={showDetailsModal} onHide={() => setShowDetailsModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Task Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTaskDetails && (
            <div>
              <Row className="mb-3">
                <Col xs={4}><strong>ID:</strong></Col>
                <Col xs={8}>{selectedTaskDetails.id}</Col>
              </Row>
              <Row className="mb-3">
                <Col xs={4}><strong>Customer:</strong></Col>
                <Col xs={8}>{selectedTaskDetails.customer}</Col>
              </Row>
              {selectedTaskDetails.phone && (
                <Row className="mb-3">
                  <Col xs={4}><strong>Phone:</strong></Col>
                  <Col xs={8}>
                    <a href={`tel:${selectedTaskDetails.phone}`}>{selectedTaskDetails.phone}</a>
                  </Col>
                </Row>
              )}
              {selectedTaskDetails.email && (
                <Row className="mb-3">
                  <Col xs={4}><strong>Email:</strong></Col>
                  <Col xs={8}>
                    <a href={`mailto:${selectedTaskDetails.email}`}>{selectedTaskDetails.email}</a>
                  </Col>
                </Row>
              )}
              <Row className="mb-3">
                <Col xs={4}><strong>Device:</strong></Col>
                <Col xs={8}>{selectedTaskDetails.device}</Col>
              </Row>
              {selectedTaskDetails.model && (
                <Row className="mb-3">
                  <Col xs={4}><strong>Model:</strong></Col>
                  <Col xs={8}>{selectedTaskDetails.model}</Col>
                </Row>
              )}
              <Row className="mb-3">
                <Col xs={4}><strong>Issue:</strong></Col>
                <Col xs={8}>{selectedTaskDetails.issue}</Col>
              </Row>
              {selectedTaskDetails.serviceType && (
                <Row className="mb-3">
                  <Col xs={4}><strong>Service Type:</strong></Col>
                  <Col xs={8}>
                    <Badge bg={selectedTaskDetails.serviceType === 'onsite' ? 'warning' : 'info'}>
                      {selectedTaskDetails.serviceType === 'onsite' ? 'Onsite Service' : 'Offsite Service'}
                    </Badge>
                  </Col>
                </Row>
              )}
              {selectedTaskDetails.address && (
                <Row className="mb-3">
                  <Col xs={4}><strong>Address:</strong></Col>
                  <Col xs={8}>{selectedTaskDetails.address}</Col>
                </Row>
              )}
              {selectedTaskDetails.message && (
                <Row className="mb-3">
                  <Col xs={4}><strong>Message:</strong></Col>
                  <Col xs={8}>{selectedTaskDetails.message}</Col>
                </Row>
              )}
              <Row className="mb-3">
                <Col xs={4}><strong>Priority:</strong></Col>
                <Col xs={8}>
                  <Badge bg={getPriorityBadge(selectedTaskDetails.priority)}>
                    {selectedTaskDetails.priority}
                  </Badge>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={4}><strong>Status:</strong></Col>
                <Col xs={8}>
                  <Badge bg={getStatusBadge(selectedTaskDetails.status)}>
                    {selectedTaskDetails.status}
                  </Badge>
                </Col>
              </Row>
              {selectedTaskDetails.assignedTo && (
                <Row className="mb-3">
                  <Col xs={4}><strong>Assigned To:</strong></Col>
                  <Col xs={8}>{selectedTaskDetails.assignedTo}</Col>
                </Row>
              )}
              <Row className="mb-3">
                <Col xs={4}><strong>Work Status:</strong></Col>
                <Col xs={8}>
                  <Badge bg={getWorkStatusBadge(selectedTaskDetails.workStatus || 'Pending')}>
                    {selectedTaskDetails.workStatus || 'Pending'}
                  </Badge>
                </Col>
              </Row>
              {selectedTaskDetails.submittedDate && (
                <Row className="mb-3">
                  <Col xs={4}><strong>Submitted:</strong></Col>
                  <Col xs={8}>{new Date(selectedTaskDetails.submittedDate).toLocaleString()}</Col>
                </Row>
              )}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          {selectedTaskDetails && selectedTaskDetails.status === 'Pending' && (
            <Button variant="info" onClick={() => {
              setShowDetailsModal(false);
              handleAssignClick(selectedTaskDetails);
            }}>
              <i className="fa-solid fa-user-plus me-2"></i>
              Assign Servicer
            </Button>
          )}
          <Button variant="secondary" onClick={() => setShowDetailsModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </>
  );
}

export default AssignWork;
