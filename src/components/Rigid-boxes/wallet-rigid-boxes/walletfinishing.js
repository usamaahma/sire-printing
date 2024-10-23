import React from 'react';
import { Card, Row, Col } from 'antd';

const cardData = [
    { title: 'Pillow Boxes', description: 'Versatile and recyclable, its a go-to for packaging needs. Affordable, sturdy, and customizable for any product design.', image: '../images/kf.avif' },
    { title: 'Black Pillow Boxes', description: 'Stylish and elegant packaging options.', image: '../images/f2.avif' },
    { title: 'Pillow Gift Boxes', description: 'Beautifully designed for any occasion.', image: '../images/f3.avif' },
    { title: 'Merry Christmas Pillow Boxes', description: 'Festive packaging for the holidays.', image: '../images/f4.avif' },
    { title: 'Cosmetic Packaging Boxes', description: 'Ideal for beauty products.', image: '../images/f5.avif' },
    { title: 'Pillow Boxes', description: 'Versatile and recyclable, its a go-to for packaging needs. Affordable, sturdy, and customizable for any product design.', image: '../images/f1.avif' },
    { title: 'Black Pillow Boxes', description: 'Stylish and elegant packaging options.', image: '../images/f2.avif' },
    { title: 'Pillow Gift Boxes', description: 'Beautifully designed for any occasion.', image: '../images/f3.avif' },
    { title: 'Merry Christmas Pillow Boxes', description: 'Festive packaging for the holidays.', image: '../images/f4.avif' },
    { title: 'Cosmetic Packaging Boxes', description: 'Ideal for beauty products.', image: '../images/f5.avif' },
    { title: 'Pillow Boxes', description: 'Versatile and recyclable, its a go-to for packaging needs. Affordable, sturdy, and customizable for any product design.', image: '../images/f1.avif' },
    { title: 'Black Pillow Boxes', description: 'Stylish and elegant packaging options.', image: '../images/f2.avif' },
    { title: 'Pillow Gift Boxes', description: 'Beautifully designed for any occasion.', image: '../images/f3.avif' },
    { title: 'Merry Christmas Pillow Boxes', description: 'Festive packaging for the holidays.', image: '../images/f4.avif' },
    { title: 'Cosmetic Packaging Boxes', description: 'Ideal for beauty products.', image: '../images/f5.avif' },
];
  
function Walletfinishing1() {
  return (
    <div style={{ padding: '20px' }}>
      <h2 className="finishing-head-txt">Finishing Assortment</h2>
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

export default Walletfinishing1;
