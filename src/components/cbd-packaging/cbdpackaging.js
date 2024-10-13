import React from "react";
import { Card, Col, Row } from "antd";
import Cbdform from "./cbdform";
import './cbdpackaging.css';

const cardData = [
  { title: "Rigid Cigarette Boxes", image: "../images/ciggad.png" },
  { title: "Luxury Cigar Boxes", image: "../images/lciggad.png" },
  { title: "Small Mailer Boxes", image: "../images/smallciggad.png" },
  { title: "Rigid Cigarette Boxes", image: "../images/ciggad.png" },
  { title: "Luxury Cigar Boxes", image: "../images/lciggad.png" },
  { title: "Small Mailer Boxes", image: "../images/smallciggad.png" },
  { title: "Rigid Cigarette Boxes", image: "../images/ciggad.png" },
  { title: "Luxury Cigar Boxes", image: "../images/lciggad.png" },
  { title: "Small Mailer Boxes", image: "../images/smallciggad.png" },
  { title: "Rigid Cigarette Boxes", image: "../images/ciggad.png" },
  { title: "Luxury Cigar Boxes", image: "../images/lciggad.png" },
  { title: "Small Mailer Boxes", image: "../images/smallciggad.png" },
  { title: "Rigid Cigarette Boxes", image: "../images/ciggad.png" },
  { title: "Luxury Cigar Boxes", image: "../images/lciggad.png" },
  { title: "Small Mailer Boxes", image: "../images/smallciggad.png" },
  { title: "Rigid Cigarette Boxes", image: "../images/ciggad.png" },
  { title: "Luxury Cigar Boxes", image: "../images/lciggad.png" },
  { title: "Small Mailer Boxes", image: "../images/smallciggad.png" },
  { title: "Rigid Cigarette Boxes", image: "../images/ciggad.png" },
  { title: "Luxury Cigar Boxes", image: "../images/lciggad.png" },
  { title: "Small Mailer Boxes", image: "../images/smallciggad.png" },
  { title: "Rigid Cigarette Boxes", image: "../images/ciggad.png" },
  { title: "Luxury Cigar Boxes", image: "../images/lciggad.png" },
  { title: "Small Mailer Boxes", image: "../images/smallciggad.png" },
  { title: "Rigid Cigarette Boxes", image: "../images/ciggad.png" },
  { title: "Luxury Cigar Boxes", image: "../images/lciggad.png" },
  { title: "Small Mailer Boxes", image: "../images/smallciggad.png" },
  { title: "Rigid Cigarette Boxes", image: "../images/ciggad.png" },
  { title: "Luxury Cigar Boxes", image: "../images/lciggad.png" },
  { title: "Small Mailer Boxes", image: "../images/smallciggad.png" },
  { title: "Rigid Cigarette Boxes", image: "../images/ciggad.png" },
  { title: "Luxury Cigar Boxes", image: "../images/lciggad.png" },
  { title: "Small Mailer Boxes", image: "../images/smallciggad.png" },
  { title: "Rigid Cigarette Boxes", image: "../images/ciggad.png" },
  { title: "Luxury Cigar Boxes", image: "../images/lciggad.png" },
  { title: "Small Mailer Boxes", image: "../images/smallciggad.png" },
  { title: "Rigid Cigarette Boxes", image: "../images/ciggad.png" },
  { title: "Luxury Cigar Boxes", image: "../images/lciggad.png" },
  { title: "Small Mailer Boxes", image: "../images/smallciggad.png" },
  { title: "Rigid Cigarette Boxes", image: "../images/ciggad.png" },
  { title: "Luxury Cigar Boxes", image: "../images/lciggad.png" },
  { title: "Small Mailer Boxes", image: "../images/smallciggad.png" },
  { title: "Rigid Cigarette Boxes", image: "../images/ciggad.png" },
  { title: "Luxury Cigar Boxes", image: "../images/lciggad.png" },
  { title: "Small Mailer Boxes", image: "../images/smallciggad.png" },
  { title: "Rigid Cigarette Boxes", image: "../images/ciggad.png" },
  { title: "Luxury Cigar Boxes", image: "../images/lciggad.png" },
  { title: "Small Mailer Boxes", image: "../images/smallciggad.png" },
  { title: "Rigid Cigarette Boxes", image: "../images/ciggad.png" },
  { title: "Luxury Cigar Boxes", image: "../images/lciggad.png" },
  { title: "Small Mailer Boxes", image: "../images/smallciggad.png" },
  { title: "Rigid Cigarette Boxes", image: "../images/ciggad.png" },
  { title: "Luxury Cigar Boxes", image: "../images/lciggad.png" },
  { title: "Small Mailer Boxes", image: "../images/smallciggad.png" },
  { title: "Rigid Cigarette Boxes", image: "../images/ciggad.png" },
  { title: "Luxury Cigar Boxes", image: "../images/lciggad.png" },
  { title: "Small Mailer Boxes", image: "../images/smallciggad.png" },
  { title: "Rigid Cigarette Boxes", image: "../images/ciggad.png" },
  { title: "Luxury Cigar Boxes", image: "../images/lciggad.png" },
  { title: "Small Mailer Boxes", image: "../images/smallciggad.png" },
  { title: "Rigid Cigarette Boxes", image: "../images/ciggad.png" },
  { title: "Luxury Cigar Boxes", image: "../images/lciggad.png" },
  { title: "Small Mailer Boxes", image: "../images/smallciggad.png" },
  { title: "Rigid Cigarette Boxes", image: "../images/ciggad.png" },
  { title: "Luxury Cigar Boxes", image: "../images/lciggad.png" },
  { title: "Small Mailer Boxes", image: "../images/smallciggad.png" },
  { title: "Rigid Cigarette Boxes", image: "../images/ciggad.png" },
  { title: "Luxury Cigar Boxes", image: "../images/lciggad.png" },
  { title: "Small Mailer Boxes", image: "../images/smallciggad.png" },
  { title: "Rigid Cigarette Boxes", image: "../images/ciggad.png" },
  { title: "Luxury Cigar Boxes", image: "../images/lciggad.png" },
  { title: "Small Mailer Boxes", image: "../images/smallciggad.png" },
   
];

function Cbdpackaging1() {
  return (
    <div>
      <img
        className="img-cbdmain"
        src="../images/cbdmain.jpg" // Replace with the path to your image
        alt="cbd-main"
        style={{
          width: "100%", // Make the image responsive
          height: "auto", // Maintain aspect ratio
           
           
        }} // Adjust size as needed
      />

      <div className="allproduct-main">
        <Row className="allproduct-row">
        <Col span={17} xs={24} md={17} className="allproduct-col1">
        <p className="allproduct-txt">CBD Packaging</p>
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
            <Cbdform />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Cbdpackaging1;
