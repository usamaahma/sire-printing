import React from "react";
import { Card, Row, Col } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
 

const { Meta } = Card;

const blogData = [
  {
    title: "Get Maximum Benefit From Cheap Custom Printed Packaging Boxes Wholesale",
    description:
      "Imagine yourself in the supermarket, browsing the many things on the shelf, or recalling your most recent buy....",
    btitle: " Custom Packaging Boxes",
    imgSrc: "../images/cellphoneblog1.png",
  },
  {
    title: "Eco-Friendly Packaging: 9 Sustainable Packaging Ideas For 2023",
    description:
      "In an era where environmental consciousness is at an all-time high. Businesses are increasingly recognizing the importance of...",
    btitle: " Custom Retail Packaging",
    imgSrc: "../images/cellphoneblog2.avif",
  },
  {
    title: "7 Expert Tips to Prevent Glass Breakage with Custom Bottle...",
    description:
      "Glass bottles are a popular choice for packaging various products, such as beverages, perfumes, and skincare items, due...",
    btitle: "  Soap Packaging Boxes",
    imgSrc: "../images/cellphoneblog3.avif",
  },
  {
    title: "Unlocking The Elegance: The Art And Advantages Of Rigid Boxes",
    description:
      "When it comes to packaging, there's an art to it - an art that combines aesthetics, functionality, and...",
    btitle: " Rigid Boxes",
    imgSrc: "../images/cellphoneblog4.avif",
  },
];

function Cellphoneblog() {
  return (
   
    <div className="blog-container">
      <p style={{fontSize:'2rem',fontWeight:'bold', marginBottom:'2rem'}}>Related Blogs</p>
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
    
  );
}

export default Cellphoneblog;
