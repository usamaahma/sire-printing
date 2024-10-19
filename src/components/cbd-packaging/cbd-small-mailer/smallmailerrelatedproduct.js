import React from 'react';
import { Card, Row, Col } from 'antd';

const cardData = [
  { title: 'Pillow Boxes', image: '../images/cupcake.png' },
  { title: 'Black Pillow Boxes', image: '../images/cupcake.png' },
  
];

function Smallmailproduct1() {
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

export default Smallmailproduct1;
