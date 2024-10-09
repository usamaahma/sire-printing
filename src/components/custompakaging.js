import React from 'react';
import { Card, Row, Col } from 'antd';
import './custompakaging.css';

const cardData = [
  { title: 'CBD Packaging', image: '../images/card1.webp' },
  { title: 'Custom Retail Packaging', image: '../images/card2.webp' },
  { title: 'Rigid Boxes', image: '../images/card3.webp' },
  { title: 'Food Packaging', image: '../images/card4.webp' },
  { title: 'Cosmetic Packaging Boxes', image: '../images/card5.webp' },
  { title: 'Eco-Friendly Packaging', image: '../images/card6.webp' },
  { title: 'Woven Labels', image: '../images/card7.webp' },
  { title: 'Custom Hang Tags', image: '../images/card8.webp' },
  { title: 'Woven Embroidered Patches', image: '../images/card9.webp' },
  { title: 'Christmas Boxes', image: '../images/card10.webp' },
  { title: 'Cardboard Boxes', image: '../images/card11.webp' },
];

function Custompakaging1() {
  return (
    <div style={{ padding: '20px' }}>
      <h2 className="head-txt">Custom Packaging By Industry</h2>
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

export default Custompakaging1;
