import React from "react";
import { Card, Row, Col } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
 

const { Meta } = Card;

const blogData = [
  {
    title: "Custom Bath Bomb Packaging Boxes Enhance Your Sales With Style",
    description:
      "Bath bombs are concentrated foam baths made from a combination of wet and dry components such as essential...",
    btitle: "Custom Retail Packaging",
    imgSrc: "../images/bathblog.png",
  },
  
  
];

function Bathrelatedblog() {
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

export default Bathrelatedblog;
