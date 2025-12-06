import React, { useState } from 'react'
import { Container, Table as BootstrapTable, Badge, Button } from 'react-bootstrap'

function Table() {
  const [customers] = useState([
    {
      id: 1,
      name: 'Rahul Sharma',
      address: 'MG Road, Ernakulam, Kerala',
      device: 'iPhone 14 Pro',
      warranty: true,
      deliveryType: 'Pickup',
      complaint: 'Screen cracked, battery draining fast',
      deliveryStatus: 'Delivered',
      review: 'Excellent service! Fixed within 2 days.'
    },
    {
      id: 2,
      name: 'Priya Menon',
      address: 'Pattom, Trivandrum, Kerala',
      device: 'Dell Inspiron 15',
      warranty: false,
      deliveryType: 'Store',
      complaint: 'Laptop not turning on, overheating issue',
      deliveryStatus: 'In Progress',
      review: 'Good communication, waiting for completion.'
    },
    {
      id: 3,
      name: 'Arun Kumar',
      address: 'Calicut Beach Road, Calicut',
      device: 'Samsung Galaxy S23',
      warranty: true,
      deliveryType: 'Pickup',
      complaint: 'Camera not working properly',
      deliveryStatus: 'Delivered',
      review: 'Very professional. Highly recommended!'
    },
    {
      id: 4,
      name: 'Anjali Nair',
      address: 'Broadway, Ernakulam, Kerala',
      device: 'MacBook Air M2',
      warranty: false,
      deliveryType: 'Store',
      complaint: 'Keyboard keys stuck, trackpad issues',
      deliveryStatus: 'Pending',
      review: null
    },
    {
      id: 5,
      name: 'Vishnu Mohan',
      address: 'Kadavanthra, Kochi, Kerala',
      device: 'OnePlus 11',
      warranty: true,
      deliveryType: 'Pickup',
      complaint: 'Software update failed, phone stuck',
      deliveryStatus: 'Delivered',
      review: 'Fast and reliable service. Thank you!'
    },
    {
      id: 6,
      name: 'Sreelakshmi P',
      address: 'Statue, Trivandrum, Kerala',
      device: 'HP Pavilion',
      warranty: false,
      deliveryType: 'Store',
      complaint: 'Hard drive failure, data recovery needed',
      deliveryStatus: 'In Progress',
      review: null
    }
  ]);

  const getStatusBadge = (status) => {
    const variants = {
      'Delivered': 'success',
      'In Progress': 'warning',
      'Pending': 'secondary'
    };
    return <Badge bg={variants[status]}>{status}</Badge>;
  };

  return (
    <>
      <style>{`
        .table-container {
          background: white;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          overflow: hidden;
        }
        
        .custom-table {
          margin-bottom: 0;
        }
        
        .custom-table thead {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        
        .custom-table thead th {
          border: none;
          padding: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 0.5px;
        }
        
        .custom-table tbody tr {
          transition: all 0.3s ease;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .custom-table tbody tr:hover {
          background-color: #f8f9fa;
          transform: scale(1.01);
          box-shadow: 0 3px 10px rgba(0,0,0,0.05);
        }
        
        .custom-table tbody td {
          padding: 1rem;
          vertical-align: middle;
        }
        
        .warranty-badge {
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .warranty-yes {
          background: #d4edda;
          color: #155724;
        }
        
        .warranty-no {
          background: #f8d7da;
          color: #721c24;
        }
        
        .delivery-type {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.8rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
        }
        
        .delivery-pickup {
          background: #cfe2ff;
          color: #084298;
        }
        
        .delivery-store {
          background: #e7f1ff;
          color: #052c65;
        }
        
        .review-text {
          font-style: italic;
          color: #6c757d;
          font-size: 0.9rem;
        }
      `}</style>
      
      <Container className="py-5">
        <div className="mb-4 text-center">
          <h2 className="fw-bold display-6 mb-2">Customer Service Records</h2>
          <p style={{color:'#772953', fontWeight:'500'}}>Track and manage customer repair details</p>
        </div>
        
        <div className="table-container">
          <div className="table-responsive">
            <BootstrapTable className="custom-table" hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Customer Name</th>
                  <th>Address</th>
                  <th>Device</th>
                  <th>Warranty</th>
                  <th>Delivery Type</th>
                  <th>Complaint</th>
                  <th>Status</th>
                  <th>Review</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    <td className="fw-bold text-primary">{customer.id}</td>
                    <td className="fw-semibold">{customer.name}</td>
                    <td style={{ maxWidth: '200px' }}>{customer.address}</td>
                    <td>
                      <span className="fw-semibold text-dark">{customer.device}</span>
                    </td>
                    <td>
                      <span className={`warranty-badge ${customer.warranty ? 'warranty-yes' : 'warranty-no'}`}>
                        {customer.warranty ? '✓ Yes' : '✗ No'}
                      </span>
                    </td>
                    <td>
                      <span className={`delivery-type ${customer.deliveryType === 'Pickup' ? 'delivery-pickup' : 'delivery-store'}`}>
                        <i className={`fa-solid ${customer.deliveryType === 'Pickup' ? 'fa-truck' : 'fa-store'}`}></i>
                        {customer.deliveryType}
                      </span>
                    </td>
                    <td style={{ maxWidth: '250px' }}>
                      <small>{customer.complaint}</small>
                    </td>
                    <td>{getStatusBadge(customer.deliveryStatus)}</td>
                    <td style={{ maxWidth: '200px' }}>
                      {customer.review ? (
                        <span className="review-text">"{customer.review}"</span>
                      ) : (
                        <span className="text-muted">No review yet</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </BootstrapTable>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <p style={{color:'#772953', fontWeight:'500'}}>
            <i className="fa-solid fa-circle-info me-2" ></i>
            Total Records: {customers.length} | Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </Container>
    </>
  )
}

export default Table