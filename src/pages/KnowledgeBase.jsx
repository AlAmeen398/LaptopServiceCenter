import React, { useState } from 'react';
import { Container, Row, Col, Card, Accordion, Form, InputGroup, Badge } from 'react-bootstrap';

function KnowledgeBase() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      id: 1,
      title: 'Getting Started',
      icon: 'fa-rocket',
      color: '#667eea',
      articles: [
        {
          title: 'How to book a repair service?',
          content: 'To book a repair service, navigate to the Laptop Repair page, fill in your details including device information, service type (onsite/offsite), and submit the form. You will receive a confirmation email with booking details.'
        },
        {
          title: 'What information do I need to provide?',
          content: 'You need to provide your name, contact details, device type, brand, model, service required, and preferred service location. For onsite services, a complete address is required.'
        },
        {
          title: 'How do I track my repair status?',
          content: 'After booking, you will receive a tracking ID via email. Use this ID on our Support page to check the current status of your repair.'
        }
      ]
    },
    {
      id: 2,
      title: 'Services & Repairs',
      icon: 'fa-screwdriver-wrench',
      color: '#50c878',
      articles: [
        {
          title: 'What types of repairs do you offer?',
          content: 'We offer comprehensive repair services including screen replacement, battery replacement, keyboard repair, motherboard repair, data recovery, virus removal, software installation, and hardware upgrades.'
        },
        {
          title: 'Do you repair all laptop brands?',
          content: 'Yes, we service all major laptop brands including Apple, Dell, HP, Lenovo, Asus, Acer, Samsung, LG, Xiaomi, and Huawei. Our technicians are trained to handle various models.'
        },
        {
          title: 'What is the typical repair time?',
          content: 'Most repairs are completed within 24-48 hours. Complex issues like motherboard repairs may take 3-5 business days. We provide estimated completion time during initial assessment.'
        },
        {
          title: 'Do you offer same-day repairs?',
          content: 'Yes, for minor repairs like screen replacement, battery replacement, and software issues, we offer same-day service at select locations. Contact us to check availability.'
        }
      ]
    },
    {
      id: 3,
      title: 'Warranty & Returns',
      icon: 'fa-shield-halved',
      color: '#ff6b6b',
      articles: [
        {
          title: 'What warranty do you provide?',
          content: 'We provide a 90-day warranty on all major repairs and replaced parts. Software services come with a 30-day warranty. The warranty covers any defects in parts or workmanship.'
        },
        {
          title: 'What does the warranty cover?',
          content: 'The warranty covers defects in replacement parts and labor. It does not cover physical damage, liquid damage, or issues caused by improper use after repair.'
        },
        {
          title: 'How do I claim warranty?',
          content: 'Contact us with your repair invoice number. We will assess the issue and provide a free repair if it is covered under warranty. No additional charges for warranty repairs.'
        },
        {
          title: 'Can I get a refund?',
          content: 'If we cannot repair your device or the issue persists after multiple attempts, you are eligible for a full refund. Refunds are processed within 7-10 business days.'
        }
      ]
    },
    {
      id: 4,
      title: 'Payments & Pricing',
      icon: 'fa-credit-card',
      color: '#ffd93d',
      articles: [
        {
          title: 'What payment methods do you accept?',
          content: 'We accept cash, credit/debit cards, UPI, net banking, and digital wallets. Payment can be made at the time of device drop-off or after repair completion.'
        },
        {
          title: 'Do you charge for diagnosis?',
          content: 'Initial diagnosis is free. You pay only if you proceed with the repair. We provide a detailed estimate before starting any work.'
        },
        {
          title: 'Are there any hidden charges?',
          content: 'No hidden charges. The quoted price includes parts, labor, and taxes. Any additional charges are discussed and approved before proceeding.'
        },
        {
          title: 'Do you offer discounts?',
          content: 'Yes, we offer seasonal discounts, student discounts, and loyalty rewards. Check our website or contact us for current promotions.'
        }
      ]
    },
    {
      id: 5,
      title: 'Data & Security',
      icon: 'fa-lock',
      color: '#a569bd',
      articles: [
        {
          title: 'Is my data safe during repair?',
          content: 'We take data security seriously. Your device is handled by certified technicians, and we do not access personal data unless required for repair. We recommend backing up before service.'
        },
        {
          title: 'Do you offer data backup services?',
          content: 'Yes, we offer data backup and recovery services. If your device has issues, we can transfer your data to an external drive or cloud storage.'
        },
        {
          title: 'What if my data is lost?',
          content: 'We make every effort to preserve data during repairs. However, we recommend backing up important files before service. We are not liable for data loss due to hardware failure.'
        }
      ]
    },
    {
      id: 6,
      title: 'Shipping & Pickup',
      icon: 'fa-truck',
      color: '#f39c12',
      articles: [
        {
          title: 'Do you offer pickup and delivery?',
          content: 'Yes, we offer free pickup and delivery services across Kerala for repairs above ₹2,000. Schedule a pickup through our website or call our support team.'
        },
        {
          title: 'How long does pickup take?',
          content: 'Pickup is typically scheduled within 24 hours of booking. You will receive a call from our team to confirm the pickup time.'
        },
        {
          title: 'Can I ship my device?',
          content: 'Yes, you can ship your device to our service center. Pack it securely and send it via a reliable courier. We are not responsible for shipping damage.'
        }
      ]
    }
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    articles: category.articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.articles.length > 0);

  return (
    <>
      <style>{`
        .kb-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 4rem 0;
        }
        
        .category-card {
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
        }
        
        .category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
        }
        
        .category-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .search-bar {
          max-width: 600px;
          margin: 0 auto;
        }
        
        .accordion-button:not(.collapsed) {
          background-color: #f8f9fa;
          color: #333;
        }
        
        .accordion-button:focus {
          box-shadow: none;
          border-color: rgba(0,0,0,.125);
        }
        
        .article-content {
          background: #f8f9fa;
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #667eea;
        }
      `}</style>

      {/* Header */}
      <div className="kb-header text-center">
        <Container>
          <h1 className="display-4 mb-3">
            <i className="fa-solid fa-book me-3"></i>
            Knowledge Base
          </h1>
          <p className="lead mb-4">Find answers to common questions and learn more about our services</p>
          
          {/* Search Bar */}
          <div className="search-bar">
            <InputGroup size="lg" className="shadow">
              <InputGroup.Text className="bg-white">
                <i className="fa-solid fa-search"></i>
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-start-0"
              />
            </InputGroup>
          </div>
        </Container>
      </div>

      <Container className="py-5">
        {/* Category Overview */}
        {!searchQuery && (
          <>
            <h2 className="text-center mb-5">Browse by Category</h2>
            <Row className="g-4 mb-5">
              {categories.map((category) => (
                <Col key={category.id} md={4} sm={6}>
                  <Card 
                    className="category-card shadow-sm text-center p-4 h-100"
                    onClick={() => document.getElementById(`category-${category.id}`).scrollIntoView({ behavior: 'smooth' })}
                  >
                    <div className="category-icon" style={{ color: category.color }}>
                      <i className={`fa-solid ${category.icon}`}></i>
                    </div>
                    <h5 className="mb-2">{category.title}</h5>
                    <Badge bg="secondary">{category.articles.length} articles</Badge>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        )}

        {/* Articles by Category */}
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <div key={category.id} id={`category-${category.id}`} className="mb-5">
              <h3 className="mb-4" style={{ color: category.color }}>
                <i className={`fa-solid ${category.icon} me-3`}></i>
                {category.title}
              </h3>
              <Accordion>
                {category.articles.map((article, index) => (
                  <Accordion.Item key={index} eventKey={`${category.id}-${index}`}>
                    <Accordion.Header>
                      <i className="fa-solid fa-question-circle me-2 text-primary"></i>
                      {article.title}
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="article-content">
                        {article.content}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          ))
        ) : (
          <div className="text-center py-5">
            <i className="fa-solid fa-search fa-3x text-muted mb-3"></i>
            <h4 className="text-muted">No articles found</h4>
            <p className="text-muted">Try searching with different keywords</p>
          </div>
        )}

        {/* Still Need Help */}
        <Card className="mt-5 bg-gradient text-white border-0" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
          <Card.Body className="text-center p-5">
            <h3 className="mb-3">Still Need Help?</h3>
            <p className="mb-4">Can't find what you're looking for? Our support team is here to assist you.</p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a href="/support" className="btn btn-light btn-lg">
                <i className="fa-solid fa-headset me-2"></i>
                Contact Support
              </a>
              <a href="/contact" className="btn btn-outline-light btn-lg">
                <i className="fa-solid fa-envelope me-2"></i>
                Send Email
              </a>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default KnowledgeBase;
