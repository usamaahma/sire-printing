import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import { Breadcrumb } from "antd";
import Productform from "./productform";
import { products } from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import "./allproduct.css";

function Allproduct1() {
  const [allProducts, setAllProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleClick = (product) => {
    if (!product?.titlerelatedProducts[0].title || !product._id) {
      console.error("Product name or ID is missing", product);
      return;
    }
    const productNameSlug = product?.titlerelatedProducts[0].title
      .toLowerCase()
      .replace(/\s+/g, "-");
    navigate(`/product-detail/${productNameSlug}/${product._id}`);
  };
  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await products.get("/"); // Replace with your API URL
        setAllProducts(response.data); // Assuming the response contains an array of blogs
      } catch (err) {
        setError("Failed to load blogs."); // Set error if request fails
      } finally {
        setLoading(false); // Set loading to false after the data is fetched or if an error occurs
      }
    };

    fetchProductsData(); // Call the fetch function
  }, []); // Empty dependency array ensures this only runs once when the component mounts

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
                <span className="breadcrumb-link">All Packaging Products</span>
              ),
            },
          ]}
        />
      </div>
      <div className="allproduct-main">
        <Row className="allproduct-row">
          <Col span={17} xs={24} md={17} className="allproduct-col1">
            <p className="allproduct-txt">All Products</p>
            <Row>
              {allProducts?.map((product) =>
                product.titlerelatedProducts?.map((card, index) => (
                  <Col xs={24} sm={12} md={12} lg={8} key={index}>
                    <div className="allproduct-card-main">
                      <Card
                        className="allproduct-card"
                        hoverable
                        cover={
                          <img
                            alt={card.title}
                            src={card.image}
                            className="allproduct-card-image"
                          />
                        }
                        onClick={() => handleClick(product)}
                        style={{ cursor: "pointer" }}
                      >
                        <Card.Meta
                          title={card.title}
                          className="allproduct-card-title"
                        />
                      </Card>
                    </div>
                  </Col>
                ))
              )}
            </Row>
          </Col>

          <Col span={7} xs={24} md={7} className="simpletable-right-column">
            <Productform />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Allproduct1;
