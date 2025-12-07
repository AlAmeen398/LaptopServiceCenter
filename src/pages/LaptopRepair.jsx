import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { useLocation } from '../context/LocationContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LaptopRepair.css';
import appleLogo from '../assets/images/apple.jpg'
import samsungLogo from '../assets/images/samsunglogo.jpg'
import hpLogo from '../assets/images/hplogo.jpg'
import asusLogo from '../assets/images/asuslogo.jpg'
import dellLogo from '../assets/images/dellLogo.jpg'
import huaweiLogo from '../assets/images/huawailogo.jpg'
import acerlogo from '../assets/images/acerlogo.jpg'
import lenovologo from '../assets/images/lenovologo.jpg'
import lglogo from '../assets/images/lgLogo.jpg'
import XiaomiLogo from '../assets/images/xiaomiLogo.jpg'



function LaptopRepair() {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        serviceType: '',
        customerAddress: '',
        serviceDeviceId: '',
        deviceBrandId: '',
        deviceModelId: '',
        serviceId: '',
        message: '',
        storeId: '74'
    });

    const [showModal, setShowModal] = useState(false);
    const { selectedLocation, serviceCenters, selectDistrict } = useLocation();

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const brands = [
        { name: 'Apple', url: '/in/idukki/laptop/apple', img: appleLogo },
        { name: 'Samsung', url: '/in/idukki/laptop/samsung', img: samsungLogo },
        { name: 'HP', url: '/in/idukki/laptop/hp', img: hpLogo },
        { name: 'Dell', url: '/in/idukki/laptop/dell', img: dellLogo },
        { name: 'Asus', url: '/in/idukki/laptop/asus', img: asusLogo },
        { name: 'Huawei', url: '/in/idukki/laptop/huawei', img: huaweiLogo },
        { name: 'Xiaomi', url: '/in/idukki/laptop/xiamoi', img: XiaomiLogo },
        { name: 'Lenovo', url: '/in/idukki/laptop/lenovo', img: lenovologo },
        { name: 'LG', url: '/in/idukki/laptop/lg', img: lglogo },
        { name: 'Acer', url: '/in/idukki/laptop/acer', img: acerlogo },
        // { name: 'Other Brand', url: '/in/idukki/laptop/other-brand', img: 'https://easycare.services/uploads/models/UWJ5lenROdmAqBQewNrAlVKwGGUxdmq1.svg' }
    ];

    const stores = [
        {
            name: 'Thodupuzha',
            address: 'Thodupuzha - Muvattupuzha Rd, Thodupuzha, Kerala 685584',
            phone: '9685743210',
            email: 'chipfix@care.services',
            url: '/in/idukki/storechip/thodupuzha'
        },
        {
            name: 'ChipFix',
            address: '1/ XV/1624, 1, CHAINHALL BUILDING, ADIMALI, IDUKKI, KERALA, Pincode: 685561',
            phone: ' 8589856891',
            email: 'chifix@care.services',
            url: '/in/idukki/store/adimali'
        }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        
        // Get device name and service name for display
        const deviceMap = {
            '1': 'Mobile',
            '2': 'Laptop',
            '3': 'Tablet',
            '4': 'Smartwatch'
        };
        
        const deviceName = deviceMap[formData.serviceDeviceId] || 'Device';
        const brandName = formData.deviceBrandId.charAt(0).toUpperCase() + formData.deviceBrandId.slice(1);
        const fullDeviceName = `${brandName} ${deviceName}`;
        const serviceName = formData.serviceId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || 'General Repair';
        
        // Create complaint object
        const complaint = {
            id: Date.now(), // Unique ID based on timestamp
            customer: formData.name,
            phone: formData.phoneNumber,
            email: formData.email,
            device: fullDeviceName,
            model: formData.deviceModelId,
            issue: serviceName,
            message: formData.message,
            serviceType: formData.serviceType,
            address: formData.customerAddress,
            priority: 'Medium', // Default priority
            status: 'Pending',
            assignedTo: null,
            submittedDate: new Date().toISOString()
        };
        
        // Save to localStorage
        const existingComplaints = JSON.parse(localStorage.getItem('serviceComplaints') || '[]');
        existingComplaints.push(complaint);
        localStorage.setItem('serviceComplaints', JSON.stringify(existingComplaints));
        
        toast.success('Thank you for your request! We will contact you soon.', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
        
        // Reset form after submission
        setFormData({
            name: '',
            phoneNumber: '',
            email: '',
            serviceType: '',
            customerAddress: '',
            serviceDeviceId: '',
            deviceBrandId: '',
            deviceModelId: '',
            serviceId: '',
            message: '',
            storeId: '74'
        });
    };

    const handleSelect = (district) => {
        selectDistrict(district);
        setShowModal(false);
    };

    return (
        <>
            <ToastContainer />
            <div className="repair-device-cnt py-5">
                <Container>
                    <Row>
                        <Col md={8}>
                        {/* Title Section */}
                        <div className="fst1 mb-4">
                            <h1 className="wizard__title mt-3 mb-2">Laptop</h1>

                            {/* District Selector Button */}
                            <div className="mb-3">
                                <Button
                                    onClick={() => setShowModal(true)}
                                    className="me-3"
                                    variant='outline-primary'
                                >
                                    📍 Choose Your District
                                </Button>
                                {selectedLocation && (
                                    <div className="mt-2 p-2 bg-light border rounded">
                                        <strong>Selected Location:</strong>
                                        <div>{selectedLocation}</div>
                                    </div>
                                )}
                            </div>

                            {/* Device Selection */}
                            <div className="device-ser mt-4">
                                <h2 className="mb-5">Which device needs repair?</h2>
                                <Row className="g-3">
                                    {brands.map((brand, index) => (
                                        <Col xs={6} sm={4} md={3} key={index}>
                                            <a href={brand.url} className="item repair-device-but next1 d-block text-center p-3 border rounded hover-shadow">
                                                <img src={brand.img} alt={brand.name} className="img-fluid" style={{ maxHeight: '60px', borderRadius: '11px' }} />
                                            </a>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </div>

                        {/* Description Section */}
                        <div className="ser-description mt-5">
                            <h1 className="text-danger mb-4">Laptop Service Center in Kerala</h1>

                            <p className="text-justify">
                                Computers and laptops are an essential part of our everyday life. The internet and commodities can only be accessible via computer in all our daily activities. In organisational management, computers have developed a highly strong information system. It is therefore a crucial tool for every industry, including business, employment, education, finance, government, entertainment and so on. Computer and laptop repair also need unique client requirements. If you have a broken laptop or damaged laptop keyboard, and need an efficient and trustworthy service someplace, choose <span className='text-primary' style={{ fontSize: '14px', fontWeight: 'bold' }}>CHIPFIX</span>.
                            </p>

                            <h3 className="mt-4 mb-3">What We Repair</h3>
                            <ul>
                                <li>Screen</li>
                                <li>Hard Drive</li>
                                <li>Mother Board</li>
                                <li>Battery</li>
                                <li>Ram</li>
                                <li>Software</li>
                                <li>Virus Removal</li>
                                <li>Speaker</li>
                                <li>Data Retrieval</li>
                                <li>Keyboard</li>
                                <li>Other Repairs</li>
                            </ul>

                            <h3 className="mt-4 mb-3">BRANDS WE REPAIR</h3>
                            <ul>
                                <li>Apple</li>
                                <li>Samsung</li>
                                <li>HP</li>
                                <li>Dell</li>
                                <li>Asus</li>
                                <li>Huawei</li>
                                <li>Mi</li>
                                <li>Lenovo</li>
                                <li>LG</li>
                                <li>Acer</li>
                                {/* <li>Other Brands</li> */}
                            </ul>

                            <h2 className="mt-5 mb-3">Laptop repair is a promise</h2>
                            <p className="text-justify">
                                Hard to select the best place to repair your hard drive? Is the service charges for the MacBook repairs too high? Easycare is for you, don't worry. Within a short time, we have international support for your items. New technologies and utmost safety are available for ease-care workshops, to provide optimum repair efficiency for every item. We provide an endless and interesting bundle for desktop and laptop customers with simplicity and convenience.
                            </p>

                            <h4 className="mt-4 mb-3">Laptop screen repair and replacement</h4>
                            <p>When your computer has screen damage difficulties, bring it to our display mending and substitution professionals. Any faulty or broken screen may be repaired. We diagnose and solve your problem cheaply and efficiently.</p>

                            <h4 className="mt-4 mb-3">Battery issues and connectivity</h4>
                            <p>If the battery connector on your laptop is broken, the battery cannot be switched on, charged or damaged, you can access the best laptop repair service in Idukki. Easycare Idukki can be pleased to fix and replace all major brand laptops and Macs for your battery and cell problems.</p>

                            <h4 className="mt-4 mb-3">Laptop Virus removal</h4>
                            <p>Viruses might be your computer's most worrying problem. Send across networks and circumvent security measures. Easycare is the ideal place to fix the infection and maintain a safe gadget.</p>

                            <h4 className="mt-4 mb-3">Data Recovery</h4>
                            <p>Something went wrong, causing your storage system to crash or causing water damage. Is that hard disc where you keep all of your essential files? Do not be concerned. Bring it to us. We can retrieve your information while maintaining your privacy.</p>

                            <h4 className="mt-4 mb-3">Hardware and software fixing</h4>
                            <p>Your job will be slowed by a sluggish computer. It might be caused by hardware or software issues. The majority of the time, individuals overlook or even solve such problems in an unprofessional manner. However, at Easycare, we have a team of professionals with years of expertise that can provide you with the best software and hardware solution.</p>

                            <h2 className="mt-5 mb-3">Why choose ChipFix?</h2>
                            <p className="text-justify">
                                We make every effort to provide a complete solution as well as exceptional services that are backed by a quality guarantee on all repairs and maintenance. Every product we fix at our service centre is approached in a unique way. Easycare is Kerala's leading service hub, having operations in six additional countries. In terms of safety, we offer ESD-protected mending hubs to ensure that your devices are safe and well-served.
                            </p>
                        </div>

                        {/* Stores Section */}
                        <div className="lad-sr1-adrs mt-5">
                            <h5 className="mb-4">Stores</h5>

                            {/* Show Selected District Location */}
                            {selectedLocation && (
                                <div className="alert alert-info mb-4">
                                    <h6 className="mb-2">📍 Selected Service Center:</h6>
                                    <p className="mb-0">{selectedLocation}</p>
                                </div>
                            )}

                            <h4 className="mb-3 text-primary d-flex justify-content-center align-items-center">HEAD OFFICE</h4>
                            <Row>
                                {stores.map((store, index) => (
                                    <Col md={6} key={index} className="mb-4">
                                        <div className="tile p-3 border rounded shadow-sm">
                                            <h6 className="mb-3">
                                                <a href={store.url} className="text-decoration-none" style={{ color: '#772953' }}>{store.name} </a>
                                            </h6>
                                            <p><small>{store.address}</small></p>
                                            <p>
                                                Number: <a className="store-phone text-decoration-none" href={`tel:${store.phone}`} style={{ color: '#772953' }}> {store.phone}</a>
                                            </p>
                                            <p>
                                                Email: <a className="store-email text-decoration-none" href={`mailto:${store.email}`} style={{ color: '#772953' }}>{store.email}</a>
                                            </p>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>

                    {/* Contact Form */}
                    <Col md={4}>
                        <div className="contact-form sticky-top" style={{ top: '20px' }}>
                            <Form onSubmit={handleSubmit} className="p-3 border rounded bg-light shadow">
                                <h5 className="mb-3 text-center">Repair Now</h5>

                                <Row>
                                    <Col md={12} className="mb-2">
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            size="sm"
                                        />
                                    </Col>

                                    <Col md={12} className="mb-2">
                                        <Form.Control
                                            type="tel"
                                            name="phoneNumber"
                                            placeholder="Phone Number"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            required
                                            size="sm"
                                        />
                                    </Col>

                                    <Col md={12} className="mb-2">
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            size="sm"
                                        />
                                    </Col>

                                    <Col md={12} className="mb-2">
                                        <Form.Select
                                            name="serviceType"
                                            value={formData.serviceType}
                                            onChange={handleInputChange}
                                            required
                                            size="sm"
                                        >
                                            <option value="">Select Service Type</option>
                                            <option value="onsite">Onsite Service</option>
                                            <option value="offsite">Offsite Service</option>
                                        </Form.Select>
                                    </Col>

                                    {formData.serviceType === 'onsite' && (
                                        <Col md={12} className="mb-2">
                                            <Form.Control
                                                as="textarea"
                                                name="customerAddress"
                                                rows={2}
                                                placeholder="Enter Your Address for Onsite Service"
                                                value={formData.customerAddress}
                                                onChange={handleInputChange}
                                                required
                                                size="sm"
                                            />
                                        </Col>
                                    )}

                                    <Col md={12} className="mb-2">
                                        <Form.Select
                                            name="serviceDeviceId"
                                            value={formData.serviceDeviceId}
                                            onChange={handleInputChange}
                                            required
                                            size="sm"
                                        >
                                            <option value="">Select Device</option>
                                            <option value="1">Mobile</option>
                                            <option value="2">Laptop</option>
                                            <option value="3">Tablets</option>
                                            <option value="4">Smartwatch</option>
                                            
                                        </Form.Select>
                                    </Col>


                                    <Col md={12} className="mb-2">
                                        <Form.Select
                                            name="deviceBrandId"
                                            value={formData.deviceBrandId}
                                            onChange={handleInputChange}
                                            size="sm"
                                        >
                                            <option value="">Select Brand</option>

                                            {formData.serviceDeviceId === '1' && (
                                                <>
                                                    <option value="apple">Apple</option>
                                                    <option value="samsung">Samsung</option>
                                                    <option value="hp">Realme</option>
                                                    <option value="dell">Oppo</option>
                                                    <option value="xiaomi">Mi</option>
                                                    <option value="asus">Asus</option>

                                                </>
                                            )}
                                            {formData.serviceDeviceId === '2' && (
                                                <>
                                                    <option value="apple">Apple</option>
                                                    <option value="samsung">Samsung</option>
                                                    <option value="hp">HP</option>
                                                    <option value="dell">Dell</option>
                                                    <option value="asus">Asus</option>
                                                    <option value="huawei">Huawei</option>
                                                    <option value="xiaomi">Mi</option>
                                                    <option value="lenovo">Lenovo</option>
                                                    <option value="acer">Acer</option>
                                                </>
                                            )}

                                            {formData.serviceDeviceId === '3' && (
                                                <>
                                                    <option value="apple">Apple</option>
                                                    <option value="samsung">Samsung</option>
                                                    <option value="hp">Realme</option>
                                                    <option value="dell">Oppo</option>
                                                    <option value="xiaomi">Mi</option>

                                                </>
                                            )}
                                            {formData.serviceDeviceId === '4' && (
                                                <>
                                                    <option value="apple">Apple</option>
                                                    <option value="samsung">Samsung</option>
                                                    <option value="hp">Realme</option>
                                                    <option value="dell">Oppo</option>
                                                    <option value="xiaomi">Mi</option>

                                                </>
                                            )}

                                        </Form.Select>
                                    </Col>
                                    <Col md={12} className="mb-2">
                                        <Form.Control
                                            type="tel"
                                            name="deviceModelId"
                                            placeholder="Model"
                                            value={formData.deviceModelId}
                                            onChange={handleInputChange}
                                            required
                                            size="sm"
                                        />
                                    </Col>

                                    <Col md={12} className="mb-2">
                                        <Form.Select
                                            name="serviceId"
                                            value={formData.serviceId}
                                            onChange={handleInputChange}
                                            size="sm"
                                        >
                                            <option value="">Select Service</option>
                                            
                                            {formData.serviceDeviceId === '1' && (
                                                <>
                                                    <option value="display-change">Display Change</option>
                                                    <option value="battery-replacement">Battery Replacement</option>
                                                    <option value="dead">Dead</option>
                                                    <option value="software-issue">Software Issue</option>
                                                    <option value="water-damage">Water Damage</option>
                                                    <option value="board-issue">Board Issue</option>
                                                    <option value="network-problem">Network Problem</option>
                                                </>
                                            )}
                                            
                                            {formData.serviceDeviceId === '2' && (
                                                <>
                                                    <option value="display-change">Display Change</option>
                                                    <option value="battery-replacement">Battery Replacement</option>
                                                    <option value="dead">Dead</option>
                                                    <option value="water-damage">Water Damage</option>
                                                    <option value="board-issue">Board Issue</option>
                                                    <option value="network-problem">Network Problem</option>
                                                    <option value="driver-issue">Driver Issue</option>
                                                    <option value="windows-updation">Windows Updation</option>
                                                    <option value="hinge-complaint">Hinge Complaint</option>
                                                </>
                                            )}
                                            
                                            {formData.serviceDeviceId === '3' && (
                                                <>
                                                    <option value="display-change">Display Change</option>
                                                    <option value="battery-replacement">Battery Replacement</option>
                                                    <option value="dead">Dead</option>
                                                    <option value="software-issue">Software Issue</option>
                                                    <option value="water-damage">Water Damage</option>
                                                    <option value="board-issue">Board Issue</option>
                                                    <option value="network-problem">Network Problem</option>
                                                </>
                                            )}
                                            {formData.serviceDeviceId === '4' && (
                                                <>
                                                    <option value="display-change">Display Change</option>
                                                    <option value="battery-replacement">Battery Replacement</option>
                                                    <option value="dead">Dead</option>
                                                    <option value="water-damage">Water Damage</option>
                                                    <option value="board-issue">Board Issue</option>
                                                    <option value="network-problem">Network Problem</option>
                                                </>
                                            )}
                                        </Form.Select>
                                    </Col>

                                    <Col md={12} className="mb-2">
                                        <Form.Control
                                            as="textarea"
                                            name="message"
                                            rows={2}
                                            placeholder="Message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            size="sm"
                                        />
                                    </Col>
                                </Row>

                                <div className="text-center">
                                    <Button type="submit" className="w-50" size="sm" style={{ backgroundColor: '#772953', borderColor: '#772953', color: 'white' }}>
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* District Selector Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Select Your District</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-grid gap-2">
                        {Object.keys(serviceCenters).map((district) => (
                            <Button
                                key={district}
                                onClick={() => handleSelect(district)}
                                className="text-start"
                                style={{ backgroundColor: 'white', borderColor: '#772953', color: '#772953' }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#772953';
                                    e.target.style.color = 'white';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'white';
                                    e.target.style.color = '#772953';
                                }}
                            >
                                {district}
                            </Button>
                        ))}
                    </div>
                </Modal.Body>
            </Modal>
        </div>
        </>
    );
}

export default LaptopRepair;
