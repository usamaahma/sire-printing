import React from 'react';
import { Row, Col } from 'antd';
import './enjoysire.css'; // Your styles for the header

const imagesData = [
  { src: '../images/graphic.webp', text: 'Free Graphics' },
  { src: '../images/friendly.webp', text: 'Eco-Friendly' },
  { src: '../images/environment.webp', text: 'Environmental Friendly Ink' },
  { src: '../images/shortrun.webp', text: 'Short Run' },
  { src: '../images/enjoysire.webp', text: 'Custom Size & Style' },
  { src: '../images/price.webp', text: 'Competitive Price' },
  { src: '../images/fast.webp', text: 'Fast Turnaround' },
  { src: '../images/freedelivery.webp', text: 'Free Delivery' },
 
];

const Enjoysire1 = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="enjoy-container">
        <p className="enjoy-txt">Enjoy Sire Printing Perks</p>
      </div>

      {/* Image Grid Section */}
      <div style={{ padding: '20px'  }}>
        <Row gutter={[16, 16]} justify="center" style={{ whiteSpace: 'nowrap' }}>
          {imagesData.map((image, index) => (
            <Col xs={24} sm={12} md={8} lg={3} key={index}>
              <div style={{ textAlign: 'center', margin: '0 10px' }}> {/* Added margin */}
                <img
                  src={image.src}
                  alt={image.text}
                  style={{ width: '80%', height: 'auto', borderRadius: '8px' }} // Responsive image
                />
                <p style={{ marginTop: '8px', fontSize: '16px' }}>{image.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Enjoysire1;
