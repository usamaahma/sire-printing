import React from "react";
import { Card, Col, Row } from "antd";
import Customform from "./customboxform";

const cardData = [
  { title: "Reverse Tuck Style Boxes", image: "../images/custom1.jpg" },
  { title: "Counter Display Boxes", image: "../images/custom2.jpg" },
  { title: "1-2-3 Bottom Trays", image: "../images/custom3.jpg" },
  { title: "Reverse Tuck Style Boxes", image: "../images/custom1.jpg" },
  { title: "Counter Display Boxes", image: "../images/custom2.jpg" },
  { title: "1-2-3 Bottom Trays", image: "../images/custom3.jpg" },
  { title: "Reverse Tuck Style Boxes", image: "../images/custom1.jpg" },
  { title: "Counter Display Boxes", image: "../images/custom2.jpg" },
  { title: "1-2-3 Bottom Trays", image: "../images/custom3.jpg" },
  { title: "Reverse Tuck Style Boxes", image: "../images/custom1.jpg" },
  { title: "Counter Display Boxes", image: "../images/custom2.jpg" },
  { title: "1-2-3 Bottom Trays", image: "../images/custom3.jpg" },
  { title: "Reverse Tuck Style Boxes", image: "../images/custom1.jpg" },
  { title: "Counter Display Boxes", image: "../images/custom2.jpg" },
  { title: "1-2-3 Bottom Trays", image: "../images/custom3.jpg" },
  { title: "Reverse Tuck Style Boxes", image: "../images/custom1.jpg" },
  { title: "Counter Display Boxes", image: "../images/custom2.jpg" },
  { title: "1-2-3 Bottom Trays", image: "../images/custom3.jpg" },
  { title: "Reverse Tuck Style Boxes", image: "../images/custom1.jpg" },
  { title: "Counter Display Boxes", image: "../images/custom2.jpg" },
  { title: "1-2-3 Bottom Trays", image: "../images/custom3.jpg" },
  { title: "Reverse Tuck Style Boxes", image: "../images/custom1.jpg" },
  { title: "Counter Display Boxes", image: "../images/custom2.jpg" },
  { title: "1-2-3 Bottom Trays", image: "../images/custom3.jpg" },
  { title: "Reverse Tuck Style Boxes", image: "../images/custom1.jpg" },
  { title: "Counter Display Boxes", image: "../images/custom2.jpg" },
  { title: "1-2-3 Bottom Trays", image: "../images/custom3.jpg" },
  { title: "Reverse Tuck Style Boxes", image: "../images/custom1.jpg" },
  { title: "Counter Display Boxes", image: "../images/custom2.jpg" },
  { title: "1-2-3 Bottom Trays", image: "../images/custom3.jpg" },
  
   
];

function Custombox1() {
  return (
    <div>
      <img
        className="img-cbdmain"
        src="../images/customboxmain.jpg" // Replace with the path to your image
        alt="cbd-main"
        style={{
          width: "100%", // Make the image responsive
          height: "auto", // Maintain aspect ratio
           
           
        }} // Adjust size as needed
      />

      <div className="allproduct-main">
        <Row className="allproduct-row">
          <Col xs={24} md={14} className="allproduct-col1">
            <p className="allproduct-txt">Custom Box Styles</p>
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

          <Col xs={24} md={10} className="simpletable-right-column">
            <Customform />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Custombox1;
