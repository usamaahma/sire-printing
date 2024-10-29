import React from 'react';
import { Button, Form, Select, Input, Upload, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import './getaquote.css';

const { Option } = Select;

function GetAQuote() {
  const handleFinish = (values) => {
    console.log("Form Values: ", values);
  };

  return (
    <div className="geta-quote-container">
      <div className="geta-quote-form">
        <h1 style={{ fontWeight: 'bold', textAlign: 'center', marginBottom:'25px' }}>Get a Quote</h1>
        <Form layout="vertical" onFinish={handleFinish}>
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item>
                <Input className="geta-input" placeholder="Length" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                <Input className="geta-input" placeholder="Width" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                <Input className="geta-input" placeholder="Depth" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                <Select
                  defaultValue="inches"
                  style={{ width: "100%" }}
                  className="geta-select"
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
              <Form.Item label="Choose Product">
                <Select
                  placeholder="Select Product"
                  className="geta-select"
                  style={{ width: "100%" }}
                >
                  <Option value="product1">Product 1</Option>
                  <Option value="product2">Product 2</Option>
                  <Option value="product3">Product 3</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="Color">
                <Select placeholder="Select Color" className="geta-select">
                  <Option value="red">Red</Option>
                  <Option value="blue">Blue</Option>
                  <Option value="green">Green</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={8}>
              <Form.Item label="Quantity">
                <Input
                  className="geta-input"
                  type="number"
                  placeholder="Enter Quantity"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Phone">
                <Input
                  className="geta-input"
                  placeholder="Enter Your Phone Number"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Full Name">
                <Input
                  className="geta-input"
                  placeholder="Enter Your Full Name"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Email">
                <Input
                  className="geta-input"
                  type="email"
                  placeholder="Enter Your Email"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Upload File">
                <Upload>
                  <Button className="geta-upload-button" icon={<UploadOutlined />}>
                    Upload
                  </Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Message">
                <Input.TextArea className="geta-textarea" placeholder="Enter Your Message" rows={2} />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={24} style={{ textAlign: "center" }}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="geta-submit-button"
                >
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default GetAQuote;
