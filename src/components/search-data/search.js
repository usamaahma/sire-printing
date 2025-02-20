import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { products } from "../../utils/axios";
import "./search.css";
import Productform from "../all product/productform";

function SearchProduct() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Query extract karne ke liye

  // ✅ Function to extract search query from URL
  const getSearchQuery = () => {
    const params = new URLSearchParams(location.search);
    return params.get("query") || "";
  };

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await products.get("/");
        setAllProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load products.");
        setLoading(false);
      }
    };

    fetchProductsData();
  }, []);

  useEffect(() => {
    const query = getSearchQuery().toLowerCase();

    if (query) {
      const filtered = allProducts.filter((product) => {
        const queryLower = query.toLowerCase();

        return (
          // Search in titlerelatedProducts
          product.titlerelatedProducts?.some((p) =>
            p.title.toLowerCase().includes(queryLower)
          ) ||
          // Search in direct product properties
          (product.category &&
            product.category.toLowerCase().includes(queryLower)) ||
          (product.sku && product.sku.toLowerCase().includes(queryLower)) ||
          // Search in specifications
          Object.values(product.specifications || {}).some(
            (value) =>
              typeof value === "string" &&
              value.toLowerCase().includes(queryLower)
          ) ||
          // Search in stockType (check if it's an array first)
          (Array.isArray(product.stockType) &&
            product.stockType.some(
              (stock) =>
                stock.title.toLowerCase().includes(queryLower) ||
                stock.description.toLowerCase().includes(queryLower)
            )) ||
          // Search in finishingAssortment (check if it's an array first)
          (Array.isArray(product.finishingAssortment) &&
            product.finishingAssortment.some(
              (finish) =>
                finish.title.toLowerCase().includes(queryLower) ||
                finish.description.toLowerCase().includes(queryLower)
            )) ||
          // Search in productDescription (check if it's an array first)
          (Array.isArray(product.productDescription) &&
            product.productDescription.some(
              (desc) =>
                desc.title.toLowerCase().includes(queryLower) ||
                desc.description.toLowerCase().includes(queryLower)
            )) ||
          // Search in description (check if it's an array first)
          (Array.isArray(product.description) &&
            product.description.some(
              (desc) =>
                desc.title.toLowerCase().includes(queryLower) ||
                desc.description.toLowerCase().includes(queryLower)
            )) ||
          // Search in SEO fields
          (product.seoTitle &&
            product.seoTitle.toLowerCase().includes(queryLower)) ||
          (product.seoKeyword &&
            product.seoKeyword.toLowerCase().includes(queryLower)) ||
          (product.seoDescription &&
            product.seoDescription.toLowerCase().includes(queryLower))
        );
      });

      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [location.search, allProducts]);

  const handleClick = (product) => {
    if (!product?.titlerelatedProducts[0]?.title || !product._id) {
      console.error("Product name or ID is missing", product);
      return;
    }
    const productNameSlug = product.titlerelatedProducts[0].title
      .toLowerCase()
      .replace(/\s+/g, "-");
    navigate(`/product-detail/${productNameSlug}/${product._id}`);
  };

  return (
    <div>
      <div className="breadcrumb-container"></div>
      <div className="allproduct-main">
        <Row className="allproduct-row">
          <Col span={17} xs={24} md={17} className="allproduct-col1">
            <p className="allproduct-txt">
              {getSearchQuery()
                ? `Results for "${getSearchQuery()}"`
                : "All Products"}
            </p>
            <Row>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) =>
                  product.titlerelatedProducts.map((card, index) => (
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
                )
              ) : getSearchQuery() ? (
                <p>No products found for "{getSearchQuery()}"</p>
              ) : (
                <p>Search for a product...</p>
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

export default SearchProduct;
