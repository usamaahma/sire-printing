import React from "react";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import Foodform from "./foodform";
 

const cardData = [
  { title: "Bakery Boxes", image: "../images/bakerybox.png", link: "/bakery-boxes" },
  { title: "Burger Boxes", image: "../images/burgerbox.png", link: "/burger-boxes" },
  { title: "Cereal Boxes", image: "../images/cerealbox.png", link: "/cereal-boxes" },
  
];


function Foodpackage1() {
  return (
    <div>
      <img
        className="img-cbdmain"
        src="../images/foodpackage.png"
        alt="cbd-main"
        style={{
          width: "100%",
          height: "auto",
        }}
      />

      <div className="allproduct-main">
        <Row className="allproduct-row">
          <Col span={17} xs={24} md={17} className="allproduct-col1">
            <p className="allproduct-txt">Food Packaging</p>
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
            <Foodform />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Foodpackage1;
