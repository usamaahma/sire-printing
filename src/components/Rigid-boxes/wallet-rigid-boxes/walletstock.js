import React from 'react';
import { Card, Row, Col } from 'antd';
 

const cardData = [
    { title: 'Pillow Boxes', description: 'Versatile and recyclable, its a go-to for packaging needs. Affordable, sturdy, and customizable for any product design.', image: '../images/c1.webp' },
    { title: 'Black Pillow Boxes', description: 'Stylish and elegant packaging options.', image: '../images/c2.avif' },
    { title: 'Pillow Gift Boxes', description: 'Beautifully designed for any occasion.', image: '../images/c3.avif' },
    { title: 'Merry Christmas Pillow Boxes', description: 'Festive packaging for the holidays.', image: '../images/c4.avif' },
     
 
];
  
function Walletstock() {
  return (
    <div style={{ padding: '20px' }}>
      <h2 className="finishing-head-txt">Stock Type & Thickness</h2>
      <Row gutter={16}>
        {cardData.map((card, index) => (
          <Col key={index} xs={24} sm={24} md={12} lg={6}>
            <Card className="finishing-custom-card" hoverable>
              <div className="finishing-image-container">
                <img alt={card.title} src={card.image} />
                <div className="finishing-overlay">
                  <span className="finishing-title">{card.title}</span>
                  <p className="finishing-description">{card.description}</p> {/* Added description here */}
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Walletstock;
