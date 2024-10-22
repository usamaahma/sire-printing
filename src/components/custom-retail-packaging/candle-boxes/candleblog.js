import React from "react";
import { Card, Row, Col } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
 

const { Meta } = Card;

const blogData = [
  {
    title: "The Power Of Custom Candle Boxes In Marketing",
    description:
      "In the bustling marketplace, creating a standout brand presence is more than just offering a unique product. It's...",
    btitle: "Custom Retail Packaging",
    imgSrc: "../images/candleblog.avif",
  },
  
  
];

function Candleblog() {
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

export default Candleblog;
