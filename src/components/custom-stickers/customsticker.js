import React from "react";
import { Card, Col, Row } from "antd";
import { Breadcrumb } from "antd";
import Stickerform from "./customstickerform";

const cardData = [
  { title: "Clear Stickers", image: "../images/sticker1.png" },
  { title: "Custom Vinyl Stickers", image: "../images/sticker2.png" },
  { title: "Die Cut Stickers", image: "../images/sticker3.png" },
  { title: "Clear Stickers", image: "../images/sticker1.png" },
  { title: "Custom Vinyl Stickers", image: "../images/sticker2.png" },
  { title: "Die Cut Stickers", image: "../images/sticker3.png" },
  { title: "Clear Stickers", image: "../images/sticker1.png" },
  { title: "Custom Vinyl Stickers", image: "../images/sticker2.png" },
  { title: "Die Cut Stickers", image: "../images/sticker3.png" },
  { title: "Clear Stickers", image: "../images/sticker1.png" },
  { title: "Custom Vinyl Stickers", image: "../images/sticker2.png" },
  { title: "Die Cut Stickers", image: "../images/sticker3.png" },
  { title: "Clear Stickers", image: "../images/sticker1.png" },
  { title: "Custom Vinyl Stickers", image: "../images/sticker2.png" },
  { title: "Die Cut Stickers", image: "../images/sticker3.png" },
  { title: "Clear Stickers", image: "../images/sticker1.png" },
  { title: "Custom Vinyl Stickers", image: "../images/sticker2.png" },
  { title: "Die Cut Stickers", image: "../images/sticker3.png" },
  { title: "Clear Stickers", image: "../images/sticker1.png" },
  { title: "Custom Vinyl Stickers", image: "../images/sticker2.png" },
  { title: "Die Cut Stickers", image: "../images/sticker3.png" },
  { title: "Clear Stickers", image: "../images/sticker1.png" },
  { title: "Custom Vinyl Stickers", image: "../images/sticker2.png" },
  { title: "Die Cut Stickers", image: "../images/sticker3.png" },
  { title: "Clear Stickers", image: "../images/sticker1.png" },
  { title: "Custom Vinyl Stickers", image: "../images/sticker2.png" },
  { title: "Die Cut Stickers", image: "../images/sticker3.png" },
  { title: "Clear Stickers", image: "../images/sticker1.png" },
 
];

function Sticker1() {
  return (
    <div>
      <img
        className="img-cbdmain"
        src="../images/stickermain.png" // Replace with the path to your image
        alt="cbd-main"
        style={{
          width: "100%", // Make the image responsive
          height: "auto", // Maintain aspect ratio
           
        }} // Adjust size as needed
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
                title: (
                  <span className="breadcrumb-link">
                   Custom Stickers & Decals
                  </span>
                ),
              },
            ]}
          />
        </div>
      <div className="allproduct-main">
        <Row className="allproduct-row">
        <Col span={17} xs={24} md={17} className="allproduct-col1">
            <p className="allproduct-txt">Custom Stickers & Decals</p>
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
                        title={card.title}
                        className="allproduct-card-title"
                      />
                    </Card>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>

          <Col span={7} xs={24} md={7} className="simpletable-right-column">
            <Stickerform />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Sticker1;
