import React from 'react';
import { Carousel } from 'antd';
import './carousel.css'; // CSS file for additional styles

const Carousel1 = () => {
  const images = [
    '../images/cbd1.webp',
    '../images/cbd2.webp',
    '../images/cbd3.webp',
  ];

  return (
    <Carousel autoplay style={{ margin: 0, padding: 0 }}>
      {images.map((image, index) => (
        <div key={index} className="carousel-image">
          <img className='pic' src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default Carousel1;
