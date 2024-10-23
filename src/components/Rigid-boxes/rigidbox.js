import React from "react";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import Rigidform from "./rigidboxform";
 
const cardData = [
  { title: "Cell Phone Boxes", image: "../images/cell-phone.png", link: "/cell-phone-boxes" },
  { title: "Collapsible Rigid Boxes", image: "../images/collapsible.png", link: "/collapsible-rigid-boxes" },
  { title: "Wallet Rigid Boxes", image: "../images/wallet.png", link: "/wallet-rigid-boxes" },
 
   
];

function Rigidbox1() {
  return (
    <div>
      <img
        className="img-cbdmain"
        src="../images/rigid-main.png"
        alt="cbd-main"
        style={{
          width: "100%",
          height: "auto",
        }}
      />

      <div className="allproduct-main">
        <Row className="allproduct-row">
          <Col span={17} xs={24} md={17} className="allproduct-col1">
            <p className="allproduct-txt">Rigid Boxes</p>
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
            <Rigidform />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Rigidbox1;
