import React from 'react';
import { Card, Row, Col } from 'antd';
import { Link } from "react-router-dom";


const cardData = [
  { title: 'CBD Packaging', image: '../images/card1.webp', link: "/CBD-Packaging" },
  { title: 'Custom Retail Packaging', image: '../images/card2.webp', link: "/custom-Retail-Packaging" },
  { title: 'Rigid Boxes', image: '../images/card3.webp', link: "/rigid-boxes" },
  { title: 'Food Packaging', image: '../images/card4.webp', link: "/food-packaging" },
  { title: 'Cosmetic Packaging Boxes', image: '../images/card5.webp', link: "/cosmetic-packaging" },
  { title: 'Eco-Friendly Packaging', image: '../images/card6.webp', link: "/eco-friendly-packaging" },
  { title: 'Woven Labels', image: '../images/card7.webp', link: "/woven-labels" },
  { title: 'Custom Hang Tags', image: '../images/card8.webp', link: "/custom-hang-tags" },
  { title: 'Woven Embroidered Patches', image: '../images/card9.webp', link: "/woven-embroidered-patches" },
  { title: 'Christmas Boxes', image: '../images/card10.webp', link: "/christmas-boxes" },
  { title: 'Cardboard Boxes', image: '../images/card11.webp', link: "/cardboard-boxes" },
];

function Custompakaging1() {
  return (
    <div style={{ padding: '20px' }}>
      <h2 className="head-txt">Custom Packaging By Industry</h2>
      <Row gutter={16}>
        {cardData.map((card, index) => (
          <Col key={index} xs={12} sm={8} md={6} lg={6}>
            <Link to={card.link} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card
                className="custom-card"
                hoverable
                cover={<img alt={card.title} src={card.image} />}
              >
                <Card.Meta title={card.title} className='title-custom' />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Custompakaging1;
