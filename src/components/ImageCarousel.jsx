import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

function ImageCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const carouselImages = [
    {
      url: 'https://i.pinimg.com/736x/b7/0a/68/b70a683648b16d0ad99ddafdeb67e0d7.jpg',
      title: 'Professional Laptop Repair',
      description: 'Expert technicians for all your laptop repair needs'
    },
    {
      url: 'https://i.pinimg.com/1200x/62/d0/8b/62d08b9dae87c130f793aa69a287be76.jpg',
      title: 'Smartphone Solutions',
      description: 'Quick and reliable smartphone repair services'
    },
    {
      url: 'https://i.pinimg.com/736x/d7/57/c5/d757c55ac55cba806c4921ef005cd11a.jpg',
      title: 'iPhone Specialists',
      description: 'Certified repairs for all iPhone models'
    },
    {
      url: 'https://i.pinimg.com/1200x/80/6c/6c/806c6ce906bf7683903357fcb80a884d.jpg',
      title: 'Gaming Console Repairs',
      description: 'Get your gaming consoles back in action'
    },
    {
      url: 'https://i.pinimg.com/736x/dc/af/4a/dcaf4a9bc05c515a33a802b532d8a8f4.jpg',
      title: 'Tablet & Smartwatch',
      description: 'Complete care for your smart devices'
    }
  ];

  return (
    <>
      <style>{`
        .custom-carousel {
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
          border-radius: 15px;
          overflow: hidden;
          width: 100%;
        }
        
        .custom-carousel .carousel-item {
          height: 85vh;
          position: relative;
          overflow: hidden;
        }
        
        .custom-carousel .carousel-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.7);
          display: block;
          background: #000;
        }
        
        .custom-carousel .carousel-caption {
          background: rgba(174, 171, 172, 0.6);
          backdrop-filter: blur(px);
          border-radius: 15px;
          padding: 2rem;
          bottom: 3rem;
          left: 50%;
          right: auto;
          transform: translateX(-50%);
          width: 80%;
          max-width: 600px;
        }
        
        .custom-carousel .carousel-caption h3 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
        }
        
        .custom-carousel .carousel-caption h5 {
          font-size: 1.1rem;
          margin-bottom: 0;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }
        
        .custom-carousel .carousel-control-prev-icon,
        .custom-carousel .carousel-control-next-icon {
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          padding: 2rem;
        }
        
        .custom-carousel .carousel-indicators button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin: 0 5px;
        }
        
        @media (max-width: 768px) {
          .custom-carousel .carousel-item {
            height: 70vh;
          }
          
          .custom-carousel .carousel-caption h3 {
            font-size: 1.5rem;
          }
          
          .custom-carousel .carousel-caption p {
            font-size: 0.9rem;
          }
        }
      `}</style>
      
      <div className="container py-5">
        <div className="mb-4 text-center">
          <h2 className="fw-bold display-6 mb-2">Our Services</h2>
          <p style={{color:'#772953', fontWeight:'500'}}>Explore our professional repair solutions</p>
        </div>
        
        <Carousel 
          activeIndex={index} 
          onSelect={handleSelect} 
          className="custom-carousel"
          interval={3000}
          pause="hover"
          fade={true}
          controls={false}
        >
          {carouselImages.map((image, idx) => (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100"
                src={image.url}
                alt={image.title}
              />
              <Carousel.Caption>
                <h3>{image.title}</h3>
                <h5 style={{color:'#772953', fontWeight:'500'}}>{image.description}</h5>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default ImageCarousel