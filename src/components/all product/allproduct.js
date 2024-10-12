import React from "react";
import { Card, Col, Row } from "antd";
import "./allproduct.css";
import Productform from "./productform";

const cardData = [
    { title: 'Small Pillow Boxes', image: '../images/allproduct1.png' },
    { title: 'Kraft Cereal Boxes', image: '../images/allproduct2.png' },
    { title: 'Incense Boxes', image: '../images/allproduct3.png' },
    { title: 'Small Pillow Boxes', image: '../images/allproduct1.png' },
    { title: 'Kraft Cereal Boxes', image: '../images/allproduct2.png' },
    { title: 'Incense Boxes', image: '../images/allproduct3.png' },
    { title: 'Small Pillow Boxes', image: '../images/allproduct1.png' },
    { title: 'Kraft Cereal Boxes', image: '../images/allproduct2.png' },
    { title: 'Incense Boxes', image: '../images/allproduct3.png' },
    { title: 'Small Pillow Boxes', image: '../images/allproduct1.png' },
    { title: 'Kraft Cereal Boxes', image: '../images/allproduct2.png' },
    { title: 'Incense Boxes', image: '../images/allproduct3.png' },
    { title: 'Small Pillow Boxes', image: '../images/allproduct1.png' },
    { title: 'Kraft Cereal Boxes', image: '../images/allproduct2.png' },
    { title: 'Incense Boxes', image: '../images/allproduct3.png' },
    { title: 'Small Pillow Boxes', image: '../images/allproduct1.png' },
    { title: 'Kraft Cereal Boxes', image: '../images/allproduct2.png' },
    { title: 'Incense Boxes', image: '../images/allproduct3.png' },
    { title: 'Small Pillow Boxes', image: '../images/allproduct1.png' },
    { title: 'Kraft Cereal Boxes', image: '../images/allproduct2.png' },
    { title: 'Incense Boxes', image: '../images/allproduct3.png' },
    { title: 'Small Pillow Boxes', image: '../images/allproduct1.png' },
    { title: 'Kraft Cereal Boxes', image: '../images/allproduct2.png' },
    { title: 'Incense Boxes', image: '../images/allproduct3.png' },
    { title: 'Small Pillow Boxes', image: '../images/allproduct1.png' },
    { title: 'Kraft Cereal Boxes', image: '../images/allproduct2.png' },
    { title: 'Incense Boxes', image: '../images/allproduct3.png' },
    { title: 'Small Pillow Boxes', image: '../images/allproduct1.png' },
    { title: 'Kraft Cereal Boxes', image: '../images/allproduct2.png' },
    { title: 'Incense Boxes', image: '../images/allproduct3.png' },
    { title: 'Small Pillow Boxes', image: '../images/allproduct1.png' },
    { title: 'Kraft Cereal Boxes', image: '../images/allproduct2.png' },
    { title: 'Incense Boxes', image: '../images/allproduct3.png' },
    { title: 'Small Pillow Boxes', image: '../images/allproduct1.png' },
    { title: 'Kraft Cereal Boxes', image: '../images/allproduct2.png' },
    { title: 'Incense Boxes', image: '../images/allproduct3.png' },
    { title: 'Small Pillow Boxes', image: '../images/allproduct1.png' },
    { title: 'Kraft Cereal Boxes', image: '../images/allproduct2.png' },
    { title: 'Incense Boxes', image: '../images/allproduct3.png' },
    { title: 'Small Pillow Boxes', image: '../images/allproduct1.png' },
    { title: 'Kraft Cereal Boxes', image: '../images/allproduct2.png' },
    { title: 'Incense Boxes', image: '../images/allproduct3.png' },
    { title: 'Small Pillow Boxes', image: '../images/allproduct1.png' },
    { title: 'Kraft Cereal Boxes', image: '../images/allproduct2.png' },
    { title: 'Incense Boxes', image: '../images/allproduct3.png' },
    { title: 'Small Pillow Boxes', image: '../images/allproduct1.png' },
    { title: 'Kraft Cereal Boxes', image: '../images/allproduct2.png' },
    { title: 'Incense Boxes', image: '../images/allproduct3.png' },
    { title: 'Small Pillow Boxes', image: '../images/allproduct1.png' },
    { title: 'Kraft Cereal Boxes', image: '../images/allproduct2.png' },
    { title: 'Incense Boxes', image: '../images/allproduct3.png' },
    { title: 'Small Pillow Boxes', image: '../images/allproduct1.png' },
    { title: 'Kraft Cereal Boxes', image: '../images/allproduct2.png' },
    { title: 'Incense Boxes', image: '../images/allproduct3.png' },
    
     
];

function Allproduct1() {
    return (
        <div>    
        <div className="allproduct-main">
            <Row className="allproduct-row">
                <Col xs={24} md={14} className="allproduct-col1">
                <p className="allproduct-txt">All Products</p>
                    <Row >
                        {cardData.map((card, index) => (
                            <Col xs={24} sm={12} md={12} lg={8} key={index}>
                                <div className="allproduct-card-main">
                                    <Card
                                        className="allproduct-card"
                                        hoverable
                                        cover={<img alt={card.title} src={card.image} />}
                                    >
                                        <Card.Meta title={card.title} className="allproduct-card-title" />
                                    </Card>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Col>

                <Col xs={24} md={10} className="simpletable-right-column">
                 
                    <Productform />
                </Col>
            </Row>
        </div>
        </div>
    );
}

export default Allproduct1;