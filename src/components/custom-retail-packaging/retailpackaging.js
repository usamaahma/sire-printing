import React from "react";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import Retailform from "./retailpackagingform";
 
const cardData = [
  { title: "Bath Bomb Boxes", image: "../images/bath-bomb.png", link: "/Bath-bomb-boxes" },
  { title: "Candle Boxes", image: "../images/candle.png", link: "/candle-boxes" },
  { title: "Candy Boxes", image: "../images/candy-box.png", link: "/Candy-boxes" },
 
   
];


function Retailpackaging1() {
  return (
    <div>
      <img
        className="img-cbdmain"
        src="../images/retail-packaging.jpg"
        alt="cbd-main"
        style={{
          width: "100%",
          height: "auto",
        }}
      />

      <div className="allproduct-main">
        <Row className="allproduct-row">
          <Col span={17} xs={24} md={17} className="allproduct-col1">
            <p className="allproduct-txt">Custom Retail Packaging</p>
            <Row>
              {cardData.map((card, index) => (
                <Col xs={24} sm={12} md={12} lg={8} key={index}>
                  <div className="allproduct-card-main">
                    <Link to={card.link || '#'} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Card
                        className="allproduct-card"
                        hoverable
                        cover={<img alt={card.title} src={card.image} />}
                      >
                        <Card.Meta
                          title={card.title}
                          className="allproduct-card-title"
                        />
                      </Card>
                    </Link>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>

          <Col span={7} xs={24} md={7} className="simpletable-right-column">
            <Retailform />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Retailpackaging1;
