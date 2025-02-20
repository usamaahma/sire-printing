import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { blogs } from "../../utils/axios";
import "./blog.css";

const { Meta } = Card;

function Foodpack() {
  const [categoryBlogs, setCategoryBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams(); // Getting the 'id' from URL

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await blogs.get(`/category/${id}`);
        setCategoryBlogs(response.data);
      } catch (err) {
        console.error("Failed to load blogs:", err);
        setError("Failed to load blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);
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
              title: <span className="breadcrumb-link">Food Packaging</span>,
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
            {categoryBlogs.map((blog, index) => (
              <Col key={index} xs={24} sm={12} md={12} lg={12}>
                <Card
                  className="blog-card"
                  cover={<img alt="example" src={blog.image} />}
                >
                  <div className="card-txt-blog">
                    <Meta
                      className="blog-cardtxt"
                      title={
                        <Link
                          to="/10-reasons-to-love-custom-cereal-boxes"
                          className="blog-links"
                        >
                          {blog.title}
                        </Link>
                      }
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
