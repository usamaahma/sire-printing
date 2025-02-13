import { useState } from "react";
import { Button, Form, Select, Input, Upload, Row, Col, message } from "antd";
import FileUpload from "../fileupload"; // File upload component import
import "./drawerform.css";
import { getquote } from "../../utils/axios";

const { Option } = Select;

function Drawerform() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleFinish = async (values) => {
    setLoading(true);

    // Ensure file URL is available before submission
    if (!values.uploadFile) {
      message.error("Please upload a file before submitting!");
      setLoading(false);
      return;
    }

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
    <div>
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item name="length">
              <Input placeholder="Length" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="width">
              <Input placeholder="Width" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="depth">
              <Input placeholder="Depth" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="inches">
              <Select defaultValue="inches">
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
              <Select placeholder="Select Product">
                <Option value="product1">Product 1</Option>
                <Option value="product2">Product 2</Option>
                <Option value="product3">Product 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="colors" label="Color">
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
            <Form.Item name="quantity" label="Quantity">
              <Input type="number" placeholder="Enter Quantity" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="phoneNumber" label="Phone">
              <Input placeholder="Enter Your Phone Number" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="fullName" label="Full Name">
              <Input placeholder="Enter Your Full Name" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="email" label="Email">
              <Input type="email" placeholder="Enter Your Email" />
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
  );
}

export default Drawerform;
