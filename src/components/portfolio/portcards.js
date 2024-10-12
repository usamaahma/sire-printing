import React, { useState } from "react";
import { Row, Col, Card, Modal, Carousel } from "antd";
import "./portcards.css";

// Sample data for the cards
const cardData = [
  { id: 1, images: ["../images/portfolio1.avif", "../images/portfolio2.avif"] },
  { id: 2, images: ["../images/portfolio1.avif", "../images/portfolio2.avif"] },
  { id: 3, images: ["../images/portfolio1.avif", "../images/portfolio2.avif"] },
  { id: 4, images: ["../images/portfolio1.avif", "../images/portfolio2.avif"] },
  { id: 5, images: ["../images/portfolio1.avif", "../images/portfolio2.avif"] },
  { id: 6, images: ["../images/portfolio1.avif", "../images/portfolio2.avif"] },
  { id: 7, images: ["../images/portfolio1.avif", "../images/portfolio2.avif"] },
  { id: 8, images: ["../images/portfolio1.avif", "../images/portfolio2.avif"] },
  { id: 9, images: ["../images/portfolio1.avif", "../images/portfolio2.avif"] },
  { id: 10, images: ["../images/portfolio1.avif", "../images/portfolio2.avif"] },
];

function Portcards1() {
  const [visible, setVisible] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);

  const showModal = (images) => {
    setCurrentImages(images);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div className="portfolio-container">
      <p className="portfolio-txt">Portfolio</p>
      <Row justify="center" gutter={[16, 16]}>
        {cardData.map((card) => (
          <Col xs={12} sm={8} md={6} key={card.id}>
            <Card
              hoverable
              cover={<img alt="image" src={card.images[0]} />}
              className="portfolio-card"
              onClick={() => showModal(card.images)} // Open modal on click
            />
          </Col>
        ))}
      </Row>

      <Modal
        visible={visible}
        footer={null}
        onCancel={handleCancel}
        width={800}
      >
        <Carousel dots>
          {currentImages.map((img, index) => (
            <div key={index}>
              <img alt={`carousel-${index}`} src={img} style={{ width: "100%" }} />
            </div>
          ))}
        </Carousel>
      </Modal>
    </div>
  );
}

export default Portcards1;
