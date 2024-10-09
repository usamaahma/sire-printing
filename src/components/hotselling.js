import React from "react";
import { Row, Col, Card } from "antd";
import "./hotselling.css";

const cardData = [
  { title: "Custom pillow packaging boxes", image: "../images/hot1.jpg" },
  { title: "Gift packaging boxes", image: "../images/hot2.jpg" },
  { title: "Soap packaging boxes", image: "../images/hot3.jpg" },
  { title: "Custom medicine boxes", image: "../images/hot4.jpg" },
  { title: "Custom hang tags", image: "../images/hot5.webp" },
  { title: "Woven embroidered", image: "../images/hot6.webp" },
  { title: "Eco-friendly packaging", image: "../images/hot7.webp" },
  { title: "Rigid boxes", image: "../images/hot8.webp" },
];

function Hotselling1() {
  return (
    <div style={{ padding: "20px" }}>
      <h2 className="hot-txt">Hot Selling Products</h2>
      <Row gutter={16}>
        {cardData.map((card, index) => (
          <Col key={index} xs={12} sm={8} md={6} lg={6}>
            <Card className="hot-card" hoverable>
              <img className="hotcard-image" alt={card.title} src={card.image} />
              <div className="overlayhot">
                <div className="overlayhot-text">{card.title}</div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Hotselling1;
