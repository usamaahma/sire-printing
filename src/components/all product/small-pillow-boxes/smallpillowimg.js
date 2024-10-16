import React, { useState } from "react";
import "./smallpillowimg.css";
import { Col, Row } from "antd";

function Smallpillowimg1() {
  const [selectedImage, setSelectedImage] = useState("../images/allproduct1.png");

  const thumbnailImages = [
    "../images/allproduct1.png",
    "../images/pillowproduct1.png-gallery1",
    "../images/pillowproduct1.png-gallery1",
    "../images/pillowproduct1.png-gallery1",
    "../images/pillowproduct1.png-gallery1",
    "../images/pillowproduct1.png-gallery1",
  ];

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    e.target.style.transformOrigin = `${x}% ${y}%`;
    e.target.style.transform = "scale(2)";
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.transformOrigin = "center center";
  };

  return (
    <div className="centered-container">
    <Row className="centered-row" gutter={[16, 16]}>
      <Col xs={24} sm={24} md={24} className="image-column">
        <div className="main-image-wrapper">
          <div className="main-image-container">
            <img
              alt="Express Clothing Labels"
              src={selectedImage}
              className="img-fluid main-image"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </div>
        <div className="thumbnail-carousel">
          {thumbnailImages.map((image, index) => (
            <div className="thumbnail-wrapper" key={index}>
              <img
                alt={`Thumbnail ${index}`}
                src={image}
                className="thumbnail-image"
                onClick={() => setSelectedImage(image)}
              />
            </div>
          ))}
        </div>
      </Col>
    </Row>
  </div>
  );
}

export default Smallpillowimg1;
