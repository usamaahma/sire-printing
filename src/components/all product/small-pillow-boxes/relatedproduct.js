import React from 'react';
import { Card, Row, Col } from 'antd';
import './relatedproduct.css';

const cardData = [
  { title: 'Pillow Boxes', image: '../images/related1.png' },
  { title: 'Black Pillow Boxes', image: '../images/related2.png' },
  { title: 'Pillow Gift Boxes', image: '../images/related3.png' },
  { title: 'Merry Christmas Pillow Boxes', image: '../images/related4.png' },
  { title: 'Cosmetic Packaging Boxes', image: '../images/related1.png' },
  { title: 'Eco-Friendly Packaging', image: '../images/related3.png' },
  { title: 'Woven Labels', image: '../images/related2.png' },
  { title: 'Custom Hang Tags', image: '../images/related4.png' },
  { title: 'Woven Embroidered Patches', image: '../images/related3.png' },
  { title: 'Christmas Boxes', image: '../images/related2.png' },
  { title: 'Cardboard Boxes', image: '../images/related1.png' },
];

function Relatedproduct1() {
  return (
    <div style={{ padding: '20px' }}>
      <h2 className="head-txt">Related Product</h2>
      <Row gutter={16}>
        {cardData.map((card, index) => (
          <Col key={index} xs={12} sm={8} md={6} lg={6}>
            <Card
              className="custom-card"
              hoverable
              cover={<img alt={card.title} src={card.image} />}
            >
              <Card.Meta title={card.title} className='title-custom'/>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Relatedproduct1;
