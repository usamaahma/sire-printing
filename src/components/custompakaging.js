import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "antd";
import "./custompakaging.css";
import { useNavigate } from "react-router-dom";
import { category } from "../utils/axios";

function Custompakaging1() {
  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCardClick = (card) => {
    navigate(`/category/${card._id}`);
    console.log(card._id);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await category.get("/");
        setCardData(response.data);
      } catch (err) {
        console.error("Failed to load product details:", err);
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);
  return (
    <div style={{ padding: "20px" }}>
      <h2 className="head-txt">Custom Packaging By Industry</h2>
      <Row gutter={16}>
        {cardData.map((card, index) => (
          <Col key={index} xs={12} sm={8} md={6} lg={6}>
            <Card
              className="custom-card"
              hoverable
              cover={<img alt={card.title} src={card.image} />}
              onClick={() => handleCardClick(card)}
            >
              <Card.Meta title={card.title} className="title-custom" />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Custompakaging1;
