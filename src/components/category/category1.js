import React, { useState } from "react";
import { Card, Col, Row } from "antd";
import { Breadcrumb } from "antd";
import { useNavigate } from "react-router-dom";
import Productform from "../all product/productform";

function Category1({ categoryProduct }) {
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
  return (
    <div>
      <img
        className="img-cbdmain"
        src="../images/cbdmain.jpg"
        alt="cbd-main"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
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
              title: <span className="breadcrumb-link">CBD Packaging</span>,
            },
          ]}
        />
      </div>
      <div className="allproduct-main">
        <Row className="allproduct-row">
          <Col span={17} xs={24} md={17} className="allproduct-col1">
            <p className="allproduct-txt">CBD Packaging</p>
            <Row>
              {categoryProduct?.map((product) =>
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

export default Category1;
