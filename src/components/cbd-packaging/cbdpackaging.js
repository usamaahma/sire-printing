import React from "react";
import { Card, Col, Row } from "antd";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import Cbdform from "./cbdform";
import "./cbdpackaging.css";

const cardData = [
  {
    title: "Rigid Cigarette Boxes",
    image: "../images/ciggad.png",
    link: "/rigid-cigarette-boxes",
  },
  {
    title: "Luxury Cigar Boxes",
    image: "../images/lciggad.png",
    link: "/luxury-cigar-boxes",
  },
];

function Cbdpackaging1() {
  return (
    <div>
      <img
        className="img-cbdmain"
        src="../images/cbdmain.jpg"
        alt="cbd-main"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <div className="breadcrumb-container">
        <Breadcrumb
          items={[
            {
              title: (
                <a href="/" className="breadcrumb-title">
                  Home
                </a>
              ),
            },
            {
              title: <span className="breadcrumb-link">CBD Packaging</span>,
            },
          ]}
        />
      </div>
      <div className="allproduct-main">
        <Row className="allproduct-row">
          <Col span={17} xs={24} md={17} className="allproduct-col1">
            <p className="allproduct-txt">CBD Packaging</p>
            <Row>
              {cardData.map((card, index) => (
                <Col xs={24} sm={12} md={12} lg={8} key={index}>
                  <div className="allproduct-card-main">
                    <Link
                      to={card.link || "#"}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
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
            <Cbdform />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Cbdpackaging1;
