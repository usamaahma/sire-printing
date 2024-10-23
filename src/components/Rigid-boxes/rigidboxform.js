import { Button, Form, Select, Input, Upload, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React from "react";

const { Option } = Select;

function Rigidform() {
  const handleFinish = (values) => {
    console.log("Form Values: ", values);
  };

  return (
    <div className="allproduct-form-sticky-div">
      <div className="div-beatform-txt">
        <p className="allproduct-beat-txt">Beat My Quote</p>
      </div>
      <Form layout="vertical" onFinish={handleFinish}>
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item>
              <Input className="input-allproduct" placeholder="Length" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item>
              <Input className="input-allproduct" placeholder="Width" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item>
              <Input className="input-allproduct" placeholder="Depth" />
            </Form.Item>
          </Col>
          <Col span={6}>
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
            <Form.Item label="Choose Product">
              <Select
                placeholder="Select Product"
                className="input-allproduct"
                style={{ width: "100%" }} // or specify a specific width, e.g., "300px"
              >
                <Option value="product1">Product 1</Option>
                <Option value="product2">Product 2</Option>
                <Option value="product3">Product 3</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Color">
              <Select placeholder="Select Color">
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
                className="input-allproduct"
                type="number"
                placeholder="Enter Quantity"
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Phone" className="input-allproduct">
              <Input
                className="input-allproduct"
                placeholder="Enter Your Phone Number"
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Full Name">
              <Input
                className="input-allproduct"
                placeholder="Enter Your Full Name"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Email">
              <Input
                className="input-allproduct"
                type="email"
                placeholder="Enter Your Email"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Upload File">
              <Upload>
                <Button className="input-allproduct" icon={<UploadOutlined />}>
                  Upload
                </Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Message">
              <Input.TextArea placeholder="Enter Your Message" rows={2} />
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
      </Form>
    </div>
  );
}

export default Rigidform;
