import React from "react";
import { Carousel } from "antd"; // Import the Carousel component
import "./reviewcarousel.css";

function ReviewCarousel() {
  const contentStyle = {
    margin: 0,
    height: "300px",
    color: "#fff",
    lineHeight: "280px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div className="main-container">
      <div className="outer-div">
        <div className="inner-div">
          <Carousel autoplay dots={false}>
            <div style={contentStyle}>
              <div className="carousel-review-content">
                <img
                  src="../images/review1.avif"
                  alt="Icon 1"
                  className="review-icon"
                />
                <div className="review-text-container">
                  <p className="review-txt">
                    I've been working with Kevin for the past 6 months on a
                    project and he has been very helpful! We initially had some
                    issues with the printing of our boxes but they worked with
                    us to make it right. Our boxes look beautiful!!
                  </p>
                  <p className="review-client-txt">GILHAD OHANA - CLIENT</p>
                </div>
              </div>
            </div>

            <div style={contentStyle}>
              <div className="carousel-review-content">
                <img
                  src="../images/review1.avif"
                  alt="Icon 1"
                  className="review-icon"
                />
                <div className="review-text-container">
                  <p className="review-txt">
                    I've been working with Kevin for the past 6 months on a
                    project and he has been very helpful! We initially had some
                    issues with the printing of our boxes but they worked with
                    us to make it right. Our boxes look beautiful!!
                  </p>
                  <p className="review-client-txt">GILHAD OHANA - CLIENT</p>
                </div>
              </div>
            </div>

            <div style={contentStyle}>
              <div className="carousel-review-content">
                <img
                  src="../images/review1.avif"
                  alt="Icon 1"
                  className="review-icon"
                />
                <div className="review-text-container">
                  <p className="review-txt">
                    I've been working with Kevin for the past 6 months on a
                    project and he has been very helpful! We initially had some
                    issues with the printing of our boxes but they worked with
                    us to make it right. Our boxes look beautiful!!
                  </p>
                  <p className="review-client-txt">GILHAD OHANA - CLIENT</p>
                </div>
              </div>
            </div>
            {/* Repeat for other carousel items */}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default ReviewCarousel;
