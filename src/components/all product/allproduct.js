import React from "react";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./allproduct.css";
import Productform from "./productform";

const cardData = [
  {
    title: "Small Pillow Boxes",
    image: "../images/allproduct1.png",
    link: "/small-pillow-boxes",
  },
  {
    title: "Kraft Cereal Boxes",
    image: "../images/allproduct2.png",
    link: "/kraft-cereal-boxes",
  },
  { title: "Incense Boxes", image: "../images/allproduct3.png" },
  { title: "Small Pillow Boxes", image: "../images/allproduct1.png" },
  { title: "Kraft Cereal Boxes", image: "../images/allproduct2.png" },
  { title: "Incense Boxes", image: "../images/allproduct3.png" },
  { title: "Small Pillow Boxes", image: "../images/allproduct1.png" },
  { title: "Kraft Cereal Boxes", image: "../images/allproduct2.png" },
  { title: "Incense Boxes", image: "../images/allproduct3.png" },
  { title: "Small Pillow Boxes", image: "../images/allproduct1.png" },
  { title: "Kraft Cereal Boxes", image: "../images/allproduct2.png" },
  { title: "Incense Boxes", image: "../images/allproduct3.png" },
  { title: "Small Pillow Boxes", image: "../images/allproduct1.png" },
  { title: "Kraft Cereal Boxes", image: "../images/allproduct2.png" },
  { title: "Incense Boxes", image: "../images/allproduct3.png" },
  { title: "Small Pillow Boxes", image: "../images/allproduct1.png" },
  { title: "Kraft Cereal Boxes", image: "../images/allproduct2.png" },
  { title: "Incense Boxes", image: "../images/allproduct3.png" },
  { title: "Small Pillow Boxes", image: "../images/allproduct1.png" },
  { title: "Kraft Cereal Boxes", image: "../images/allproduct2.png" },
  { title: "Incense Boxes", image: "../images/allproduct3.png" },
  { title: "Small Pillow Boxes", image: "../images/allproduct1.png" },
  { title: "Kraft Cereal Boxes", image: "../images/allproduct2.png" },
  { title: "Incense Boxes", image: "../images/allproduct3.png" },
  { title: "Small Pillow Boxes", image: "../images/allproduct1.png" },
  { title: "Kraft Cereal Boxes", image: "../images/allproduct2.png" },
  { title: "Incense Boxes", image: "../images/allproduct3.png" },
  { title: "Small Pillow Boxes", image: "../images/allproduct1.png" },
  { title: "Kraft Cereal Boxes", image: "../images/allproduct2.png" },
  { title: "Incense Boxes", image: "../images/allproduct3.png" },
  { title: "Small Pillow Boxes", image: "../images/allproduct1.png" },
  { title: "Kraft Cereal Boxes", image: "../images/allproduct2.png" },
  { title: "Incense Boxes", image: "../images/allproduct3.png" },
  { title: "Small Pillow Boxes", image: "../images/allproduct1.png" },
  { title: "Kraft Cereal Boxes", image: "../images/allproduct2.png" },
  { title: "Incense Boxes", image: "../images/allproduct3.png" },
  { title: "Small Pillow Boxes", image: "../images/allproduct1.png" },
  { title: "Kraft Cereal Boxes", image: "../images/allproduct2.png" },
  { title: "Incense Boxes", image: "../images/allproduct3.png" },
  { title: "Small Pillow Boxes", image: "../images/allproduct1.png" },
  { title: "Kraft Cereal Boxes", image: "../images/allproduct2.png" },
  { title: "Incense Boxes", image: "../images/allproduct3.png" },
  { title: "Small Pillow Boxes", image: "../images/allproduct1.png" },
  { title: "Kraft Cereal Boxes", image: "../images/allproduct2.png" },
  { title: "Incense Boxes", image: "../images/allproduct3.png" },
  { title: "Small Pillow Boxes", image: "../images/allproduct1.png" },
  { title: "Kraft Cereal Boxes", image: "../images/allproduct2.png" },
  { title: "Incense Boxes", image: "../images/allproduct3.png" },
  { title: "Small Pillow Boxes", image: "../images/allproduct1.png" },
  { title: "Kraft Cereal Boxes", image: "../images/allproduct2.png" },
  { title: "Incense Boxes", image: "../images/allproduct3.png" },
  { title: "Small Pillow Boxes", image: "../images/allproduct1.png" },
  { title: "Kraft Cereal Boxes", image: "../images/allproduct2.png" },
  { title: "Incense Boxes", image: "../images/allproduct3.png" },
];

function Allproduct1() {
  return (
    <div>
      <div className="allproduct-main">
        <Row className="allproduct-row">
          <Col span={17} xs={24} md={17} className="allproduct-col1">
            <p className="allproduct-txt">All Products</p>
            <Row>
              {cardData.map((card, index) => (
                <Col xs={24} sm={12} md={12} lg={8} key={index}>
                  <div className="allproduct-card-main">
                    <Card
                      className="allproduct-card"
                      hoverable
                      cover={<img alt={card.title} src={card.image} />}
                    >
                      <Card.Meta
                        title={
                          card.title === "Small Pillow Boxes" ? (
                            <Link
                              to={card.link}
                              className="allproduct-card-link"
                            >
                              {card.title}
                            </Link>
                          ) : card.title === "Kraft Cereal Boxes" ? (
                            <Link
                              to={card.link}
                              className="allproduct-card-link"
                            >
                              {card.title}
                            </Link>
                          ) : (
                            card.title
                          )
                        }
                        className="allproduct-card-title"
                      />
                    </Card>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>

          <Col span={7} xs={24} md={7} className="simpletable-right-column">
            <Productform />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Allproduct1;
