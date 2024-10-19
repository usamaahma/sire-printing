import React from "react";
import { Card, Row, Col } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
 

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
  
];

function Smallrelatedblog() {
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

export default Smallrelatedblog;
