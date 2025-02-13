import React, { useState } from "react";
import { Row, Col, Card, Modal, Carousel } from "antd";
import { Breadcrumb } from "antd";
import "./portcards.css";

// Sample data for the cards
const cardData = [
  {
    id: 1,
    images: [
      "../images/portfolio1.avif",
      "../images/portfolio2.avif",
      "../images/portfolio3.avif",
      "../images/portfolio4.avif",
    ],
  },
  {
    id: 2,
    images: [
      "../images/portfolio1.avif",
      "../images/portfolio2.avif",
      "../images/portfolio3.avif",
      "../images/portfolio4.avif",
    ],
  },
  {
    id: 3,
    images: [
      "../images/portfolio1.avif",
      "../images/portfolio2.avif",
      "../images/portfolio3.avif",
      "../images/portfolio4.avif",
    ],
  },
  {
    id: 4,
    images: [
      "../images/portfolio1.avif",
      "../images/portfolio2.avif",
      "../images/portfolio3.avif",
      "../images/portfolio4.avif",
    ],
  },
  {
    id: 5,
    images: [
      "../images/portfolio1.avif",
      "../images/portfolio2.avif",
      "../images/portfolio3.avif",
      "../images/portfolio4.avif",
    ],
  },
  {
    id: 6,
    images: [
      "../images/portfolio1.avif",
      "../images/portfolio2.avif",
      "../images/portfolio3.avif",
      "../images/portfolio4.avif",
    ],
  },
  {
    id: 7,
    images: [
      "../images/portfolio1.avif",
      "../images/portfolio2.avif",
      "../images/portfolio3.avif",
      "../images/portfolio4.avif",
    ],
  },
  {
    id: 8,
    images: [
      "../images/portfolio1.avif",
      "../images/portfolio2.avif",
      "../images/portfolio3.avif",
      "../images/portfolio4.avif",
    ],
  },
  {
    id: 9,
    images: [
      "../images/portfolio1.avif",
      "../images/portfolio2.avif",
      "../images/portfolio3.avif",
      "../images/portfolio4.avif",
    ],
  },
  {
    id: 10,
    images: [
      "../images/portfolio1.avif",
      "../images/portfolio2.avif",
      "../images/portfolio3.avif",
      "../images/portfolio4.avif",
    ],
  },
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
    <div>
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
              title: <span className="breadcrumb-link">Portfolio</span>,
            },
          ]}
        />
      </div>
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

        <Modal visible={visible} footer={null} onCancel={handleCancel}>
          <Carousel dots arrows>
            {currentImages.map((img, index) => (
              <div key={index}>
                <img
                  className="image-modal-post"
                  alt={`carousel-${index}`}
                  src={img}
                />
              </div>
            ))}
          </Carousel>
        </Modal>
      </div>
    </div>
  );
}

export default Portcards1;
