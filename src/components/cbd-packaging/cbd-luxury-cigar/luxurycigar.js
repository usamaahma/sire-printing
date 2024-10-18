import React from "react";
import { Button, Form, Select, Input, Upload, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Luxuryimg1 from "./luxurycigarimg";
 

const { Option } = Select;
const imagesData = [
  { src: "../images/graphic.webp", text: "Free Graphics" },
  { src: "../images/friendly.webp", text: "Eco-Friendly" },
  { src: "../images/environment.webp", text: "Environmental Friendly Ink" },
  { src: "../images/shortrun.webp", text: "Short Run" },
  { src: "../images/enjoysire.webp", text: "Custom Size & Style" },
  { src: "../images/price.webp", text: "Competitive Price" },
  { src: "../images/fast.webp", text: "Fast Turnaround" },
  { src: "../images/freedelivery.webp", text: "Free Delivery" },
];

const Luxury = () => {
  const handleFinish = (values) => {
    console.log("Form Values: ", values);
  };
  return (
    <div className="smallpillow-form">
      <div className="txt-rigid-maindiv">
        {" "}
        <p className="rigid-txt">Luxury Cigar Boxes</p>
      </div>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        {/* Padding for the row */}
        <Col
          span={10}
          xs={24}
          md={24}
          lg={12}
          style={{ flex: "0 0 40%", marginBottom: "2rem" }}
        >
          <div className="column-content">
            <div className="column-img-main">
              {/* Content for the first column */}
              <Luxuryimg1 />
            </div>
          </div>
        </Col>
        <Col span={14} xs={24} md={24} lg={12} style={{ flex: "0 0 60%" }}>
          {" "}
          {/* 70% width for second column */}
          <div className="column1-content">
            <Row gutter={16} style={{ marginTop: "20px" }}>
              {" "}
              {/* Nested Row */}
              <Col span={12} xs={24} sm={24} md={24} lg={12}>
                <div className="nested-column-content">
                  {/* Content for the first nested column */}
                  <div className="center-text-small">
                    <h3>GET CUSTOM QUOTE</h3>
                  </div>
                  <Form layout="vertical" onFinish={handleFinish}>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item>
                          <Input
                            className="input-allproduct"
                            placeholder="Length"
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item>
                          <Input
                            className="input-allproduct"
                            placeholder="Width"
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item>
                          <Input
                            className="input-allproduct"
                            placeholder="Depth"
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item>
                          <Select
                            defaultValue="inches"
                            style={{ width: "100%" }}
                            className="input-allproduct"
                          >
                            <Option value="inches">Inches</Option>
                            <Option value="cm">cm</Option>
                            <Option value="mm">mm</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          label={
                            <span className="small-label">Choose Product</span>
                          }
                        >
                          <Select
                            placeholder="Select Product"
                            className="input-allproduct"
                            style={{ width: "100%" }}  
                          >
                            <Option value="product1">Product 1</Option>
                            <Option value="product2">Product 2</Option>
                            <Option value="product3">Product 3</Option>
                          </Select>
                        </Form.Item>
                      </Col>

                      <Col span={12}>
                        <Form.Item label={
                            <span className="small-label">Color</span>
                          }>
                          <Select placeholder="Select Color">
                            <Option value="red">Red</Option>
                            <Option value="blue">Blue</Option>
                            <Option value="green">Green</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item label={
                            <span className="small-label">Quantity</span>
                          }>
                          <Input
                            className="input-allproduct"
                            type="number"
                            placeholder="Enter Quantity"
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label={
                            <span className="small-label">Phone</span>
                          } className="input-allproduct">
                          <Input
                            className="input-allproduct"
                            placeholder="Enter Your Phone Number"
                          />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          label={<span className="small-label">Full Name</span>}
                        >
                          <Input
                            className="input-allproduct"
                            placeholder="Enter Your Full Name"
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item label={
                            <span className="small-label">Email</span>
                          }>
                          <Input
                            className="input-allproduct"
                            type="email"
                            placeholder="Enter Your Email"
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label={
                            <span className="small-label">Upload File</span>
                          }>
                          <Upload>
                            <Button
                              className="input-allproduct"
                              icon={<UploadOutlined />}
                            >
                              Upload
                            </Button>
                          </Upload>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={24}>
                        <Form.Item label="Message">
                          <Input.TextArea
                            placeholder="Enter Your Message"
                            rows={2}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24} style={{ textAlign: "center" }}>
                        <Form.Item>
                          <Button
                            type="primary"
                            htmlType="submit"
                            className="allproduct-form-submit-button"
                          >
                            Submit
                          </Button>
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>{" "}
                </div>
              </Col>
              <Col span={12} xs={24} sm={24} md={24} lg={12}>
                <div className="nested-column-content">
                  {/* Content for the second nested column */}
                  <div className="image-gallery-small">
                    {imagesData.map((image, index) => (
                      <div key={index} className="image-card-small">
                        <div className="image-wrapper-small">
                          <img
                            src={image.src}
                            alt={image.text}
                            className="responsive-image-small"
                          />
                          <p className="image-caption-small">{image.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>{" "}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Luxury;
