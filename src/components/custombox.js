import React from 'react';
import { Card, Row, Col } from 'antd';
import './custombox.css';

const cardData = [
    { title: 'Double Wall Tray', image: '../images/box1.jpg' },
    { title: 'Fence Partitions', image: '../images/box2.jpg' },
    { title: 'Five Panel Hanger Box', image: '../images/box3.jpg' },
    { title: 'Gravity Feed Dispenser Box', image: '../images/box4.jpg' },
    { title: 'Pillow Style Boxes', image: '../images/box5.jpg' },
    { title: 'Pillow Box Envelope Style Boxes', image: '../images/box6.jpg' },
    { title: 'Punch Partitions', image: '../images/box7.jpg' },
    { title: 'Tuck Top Snap Bottom Box', image: '../images/box8.jpg' },
 
  ];
function Custombox1() {
  return (
    <div style={{ padding: '20px' }}>
      <h2 className='custombox-txt'>Custom Box Styles</h2>
      <Row gutter={16}>
        {cardData.map((card, index) => (
          <Col key={index} xs={12} sm={8} md={6} lg={6}>
            <Card
              className="custombox-card"
              hoverable
              cover={<img alt={card.title} src={card.image} />}
            >
              <Card.Meta title={card.title} className='title-custombox'/>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Custombox1;
