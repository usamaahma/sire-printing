import React from "react";
import { Card, Row, Col } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import "./blog.css";

const { Meta } = Card;

const blogData = [
  {
    title: "How to Create Custom Incense Boxes That Sell?",
    description:
      "As the demand for custom incense boxes continues to rise, it has become increasingly important for businesses to... ",
    btitle: " Food packaging",
    imgSrc: "../images/blog1.avif",
  },
  {
    title: "How Can CBD Packaging Help Your Business?",
    description:
      "Many new firms have joined the CBD product industry as a consequence of the products' rapid popularity and...",
    btitle: " CBD Packaging",
    imgSrc: "../images/blog2.avif",
  },
  {
    title: "Best & Modern Sleek Packaging For 20 Incense Sticks",
    description:
      "In the world of incense, packaging is essential for maintaining the product's quality as well as improving the...",
    btitle: "Custom Packaging Boxes",
    imgSrc: "../images/blog3.png",
  },
  {
    title: "Best Vape Cartridge Packaging Boxes For 0.5ml & 1ml Vape...",
    description:
      "Vape cartridges have become very popular in recent years, offering a suitable and sensible way to enjoy various...",
    btitle: " Custom Retail Packaging",
    imgSrc: "../images/blog3.png",
  },
  {
    title: "Best Vape Cartridge Packaging Boxes For 0.5ml & 1ml Vape...",
    description:
      "Vape cartridges have become very popular in recent years, offering a suitable and sensible way to enjoy various...",
    btitle: " Custom Retail Packaging",
    imgSrc: "../images/blog3.png",
  },
  {
    title: "Best Vape Cartridge Packaging Boxes For 0.5ml & 1ml Vape...",
    description:
      "Vape cartridges have become very popular in recent years, offering a suitable and sensible way to enjoy various...",
    btitle: " Custom Retail Packaging",
    imgSrc: "../images/blog3.png",
  },
  {
    title: "Best Vape Cartridge Packaging Boxes For 0.5ml & 1ml Vape...",
    description:
      "Vape cartridges have become very popular in recent years, offering a suitable and sensible way to enjoy various...",
    btitle: " Custom Retail Packaging",
    imgSrc: "../images/blog3.png",
  },
  {
    title: "Best Vape Cartridge Packaging Boxes For 0.5ml & 1ml Vape...",
    description:
      "Vape cartridges have become very popular in recent years, offering a suitable and sensible way to enjoy various...",
    btitle: " Custom Retail Packaging",
    imgSrc: "../images/blog3.png",
  },
  {
    title: "Best Vape Cartridge Packaging Boxes For 0.5ml & 1ml Vape...",
    description:
      "Vape cartridges have become very popular in recent years, offering a suitable and sensible way to enjoy various...",
    btitle: " Custom Retail Packaging",
    imgSrc: "../images/blog3.png",
  },
  {
    title: "Best Vape Cartridge Packaging Boxes For 0.5ml & 1ml Vape...",
    description:
      "Vape cartridges have become very popular in recent years, offering a suitable and sensible way to enjoy various...",
    btitle: " Custom Retail Packaging",
    imgSrc: "../images/blog3.png",
  },
  {
    title: "Best Vape Cartridge Packaging Boxes For 0.5ml & 1ml Vape...",
    description:
      "Vape cartridges have become very popular in recent years, offering a suitable and sensible way to enjoy various...",
    btitle: " Custom Retail Packaging",
    imgSrc: "../images/blog3.png",
  },
  {
    title: "Best Vape Cartridge Packaging Boxes For 0.5ml & 1ml Vape...",
    description:
      "Vape cartridges have become very popular in recent years, offering a suitable and sensible way to enjoy various...",
    btitle: " Custom Retail Packaging",
    imgSrc: "../images/blog3.png",
  },
];

function Foodpack() {
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
                title: (
                  <a href="/blogs" className="breadcrumb-title">
                    Blogs
                  </a>
                ),
              },
              {
                title: (
                  <span className="breadcrumb-link">
                    Food Packaging
                  </span>
                ),
              },
            ]}
          />
        </div>
    <div>
      <img
        className="img-cbdmain"
        src="../images/foodpackaging.gif"
        alt="cbd-main"
        style={{
          width: "100%",
          height: "auto",
          marginBottom: "2rem",
        }}
      />
      <div className="blog-container">
        <Row gutter={[16, 16]} justify="center">
          {blogData.map((blog, index) => (
            <Col key={index} xs={24} sm={12} md={12} lg={12}>
              <Card
                className="blog-card"
                cover={<img alt="example" src={blog.imgSrc} />}
              >
                <div className="card-txt-blog">
                  <Meta
                    className="blog-cardtxt"
                    title={<Link to="/10-reasons-to-love-custom-cereal-boxes" className="blog-links">{blog.title}</Link>}
                    description={blog.description}
                  />
                  <div className="blog-icon">
                    <RxHamburgerMenu />
                    <Link to="/food-packaging" className="blog-links">
                      <p className="blog-cardtxt1">{blog.btitle}</p>
                    </Link>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
    </div>
  );
}

export default Foodpack;
