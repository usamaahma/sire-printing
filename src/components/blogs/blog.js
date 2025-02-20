import React, { useEffect, useState } from "react";
import { Card, Row, Col, Breadcrumb } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import "./blog.css";
import { blogs, category } from "../../utils/axios"; // Ensure correct import

const { Meta } = Card;

function Blog() {
  const [blogsData, setBlogsData] = useState([]);
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await blogs.get("/");
        setBlogsData(response.data);

        // Extract category IDs
        const categoryIds = [
          ...new Set(response.data.map((blog) => blog.category)),
        ];

        // Fetch category titles
        fetchCategories(categoryIds);
      } catch (err) {
        console.error("Failed to load blogs:", err);
        setError("Failed to load blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const fetchCategories = async (categoryIds) => {
    try {
      const categoryResponses = await Promise.all(
        categoryIds.map((id) => category.get(`/${id}`))
      );

      // Map categories by ID
      const categoryData = {};
      categoryResponses.forEach((res, index) => {
        categoryData[categoryIds[index]] = res.data.title;
      });

      setCategories(categoryData);
    } catch (err) {
      console.error("Failed to load categories:", err);
    }
  };

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
              title: <span className="breadcrumb-link">Blogs</span>,
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
            marginTop: "2rem",
          }}
        />

        <div className="blog-container">
          <p className="blog-headi">Blogs</p>
          <Row gutter={[16, 16]} justify="center">
            {blogsData.map((blog, index) => (
              <Col key={index} xs={24} sm={12} md={12} lg={12}>
                <Card
                  className="blog-card"
                  cover={<img alt="example" src={blog.image} />}
                >
                  <div className="card-txt-blog">
                    <Meta
                      className="blog-cardtxt"
                      title={
                        <Link to={`/blog/${blog._id}`} className="blog-links">
                          {blog.title}
                        </Link>
                      }
                      description={blog.description}
                    />
                    <div className="blog-icon">
                      <RxHamburgerMenu />
                      <Link
                        to={`/blogs/${categories[blog.category]}/${
                          blog.category
                        }`}
                        className="blog-links"
                      >
                        <p className="blog-cardtxt1">
                          {categories[blog.category] || "Loading..."}
                        </p>
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

export default Blog;
