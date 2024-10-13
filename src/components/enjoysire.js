import React from "react";
import { Row, Col } from "antd";
import "./enjoysire.css"; // Your styles for the header

const imagesData = [
  { src: "../images/graphic.webp", text: "Free Graphics" },
  { src: "../images/friendly.webp", text: "Eco-Friendly" },
  { src: "../images/environment.webp", text: "Environmental Friendly Ink" },
  { src: "../images/shortrun.webp", text: "Short Run" },
  { src: "../images/enjoysire.webp", text: "Custom Size & Style" },
  { src: "../images/price.webp", text: "Competitive Price" },
  { src: "../images/fast.webp", text: "Fast Turnaround" },
  { src: "../images/freedelivery.webp", text: "Free Delivery" },
];

const Enjoysire1 = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="enjoy-container">
        <p className="enjoy-txt">Enjoy Sire Printing Perks</p>
      </div>

      {/* Image Grid Section */}
      <div
        style={{ padding: "20px", display: "flex", justifyContent: "center" }}
      >
        <Row gutter={[8, 16]} justify="center" className="rowgap">
          {" "}
          {/* Reduced the gutter value */}
          {imagesData.map((image, index) => (
            <Col xs={8} sm={8} md={4} lg={3} key={index}>
              <div className="image-wrapper">
                <img
                  src={image.src}
                  alt={image.text}
                  className="responsive-image1" // Use a class for styles
                />
                <p style={{ marginTop: "8px", fontSize: "14px" }}>
                  {image.text}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Enjoysire1;
