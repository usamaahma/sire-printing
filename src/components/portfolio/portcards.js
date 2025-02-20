import React, { useEffect, useState } from "react";
import { Row, Col, Card, Modal, Carousel } from "antd";
import { Breadcrumb } from "antd";
import "./portcards.css";
import { portfolio } from "../../utils/axios";

function Portcards1() {
  const [portfolioData, setPortfolioData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await portfolio.get("/"); // Ensure the correct API endpoint
        setPortfolioData(response.data);
      } catch (err) {
        console.error("Failed to load product details:", err);
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);
  const showModal = () => {
    const allImages = portfolioData.map((card) => card.image); // Extract all images
    setCurrentImages(allImages);
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
          {portfolioData.map((card) => (
            <Col xs={12} sm={8} md={6} key={card.id}>
              <Card
                hoverable
                cover={<img alt="image" src={card.image} />}
                className="portfolio-card"
                onClick={showModal} // Now opens modal with all images
              />
            </Col>
          ))}
        </Row>

        <Modal visible={visible} footer={null} onCancel={handleCancel} centered>
          <div className="carousel-container">
            {/* Left-side Buttons (Vertical) */}
            <div className="carousel-buttons">
              <button className="whatsapp-btn">WhatsApp Quote</button>
              <button className="quote-btn">Get a Free Quote</button>
            </div>

            {/* Image Carousel */}
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
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Portcards1;
