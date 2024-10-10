import React from "react";
import { Row, Col, Card } from "antd";
import "./allproduct.css";
import Productform from "./productform";

const cardData = [
  { image: "../images/hot1.jpg", text: "Card 1" },
  { image: "../images/hot1.jpg", text: "Card 2" },
  { image: "../images/hot1.jpg", text: "Card 3" },
  { image: "../images/hot1.jpg", text: "Card 1" },
  { image: "../images/hot1.jpg", text: "Card 2" },
  { image: "../images/hot1.jpg", text: "Card 3" },
  { image: "../images/hot1.jpg", text: "Card 1" },
  { image: "../images/hot1.jpg", text: "Card 2" },
  { image: "../images/hot1.jpg", text: "Card 3" },
  { image: "../images/hot1.jpg", text: "Card 1" },
  { image: "../images/hot1.jpg", text: "Card 2" },
  { image: "../images/hot1.jpg", text: "Card 3" },
  { image: "../images/hot1.jpg", text: "Card 1" },
  { image: "../images/hot1.jpg", text: "Card 2" },
  { image: "../images/hot1.jpg", text: "Card 3" },
];

const Allproduct1 = () => {
  return (
    <Row className="allproduct-row">
      <Col
        xs={24}
        sm={12}
        className="allproduct-col allproduct-cards-container"
      >
        <Row  className="allproduct-cards">
          {cardData.map((card, index) => (
            <Col span={8} xs={24} sm={8} key={index}>
              <Card hoverable cover={<img alt="example" src={card.image} />}>
                <Card.Meta title={card.text} />
              </Card>
            </Col>
          ))}
        </Row>
      </Col>

      <Col xs={24} sm={12} className="allproduct-col allproduct-form-container">
        <Productform />
      </Col>
    </Row>
  );
};

export default Allproduct1;
