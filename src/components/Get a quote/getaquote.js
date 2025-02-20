import React, { useState } from "react";
import { Button, Form, Select, Input, Upload, Row, Col, message } from "antd";
import FileUpload from "../fileupload";
import { getquote } from "../../utils/axios"; // API call ke liye import
import "./getaquote.css";

const { Option } = Select;

function GetAQuote() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleFinish = async (values) => {
    setLoading(true);
    console.log(values.uploadFile, "uploadedfile");
    // Ensure file URL is available before submission
    if (!values.uploadFile) {
      message.error("Please upload a file before submitting!");
      setLoading(false);
      return;
    }

    console.log(values, "formdata"); // Debugging ke liye

    try {
      const response = await getquote.post("/", values);
      console.log("API Response: ", response.data);
      message.success("Form submitted successfully!");
      form.resetFields();
    } catch (error) {
      console.error("API Error: ", error);
      message.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="geta-quote-container">
      <div className="geta-quote-form">
        <h1
          style={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          Get a Quote
        </h1>
        <Form form={form} layout="vertical" onFinish={handleFinish}>
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item name="length">
                <Input className="geta-input" placeholder="Length" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="width">
                <Input className="geta-input" placeholder="Width" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="depth">
                <Input className="geta-input" placeholder="Depth" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="inches">
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
              <Form.Item name="chooseProduct" label="Choose Product">
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
              <Form.Item name="colors" label="Color">
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
              <Form.Item name="quantity" label="Quantity">
                <Input
                  className="geta-input"
                  type="number"
                  placeholder="Enter Quantity"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="phoneNumber" label="Phone">
                <Input
                  className="geta-input"
                  placeholder="Enter Your Phone Number"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="fullName" label="Full Name">
                <Input
                  className="geta-input"
                  placeholder="Enter Your Full Name"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="email" label="Email">
                <Input
                  className="geta-input"
                  type="email"
                  placeholder="Enter Your Email"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="uploadFile" label="Upload File">
                <FileUpload
                  onUploadSuccess={(url) =>
                    form.setFieldsValue({ uploadFile: url })
                  }
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item name="message" label="Message">
                <Input.TextArea
                  className="geta-textarea"
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
                  className="geta-submit-button"
                  loading={loading}
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
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
