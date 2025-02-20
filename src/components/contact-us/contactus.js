import React, { useState } from "react";
import { Row, Col, Input, Button, message, Form } from "antd";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail, IoLocationSharp } from "react-icons/io5";
import { Breadcrumb } from "antd";
import { contactus } from "../../utils/axios";
import "./contactus.css";

function Contactus() {
  const [loading, setLoading] = useState(false); // For button loading state
  const [form] = Form.useForm();

  // Function to handle form submission
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await contactus.post("/", values);
      message.success("Message sent successfully!");
      console.log("Response:", response.data);
      form.resetFields();
    } catch (error) {
      message.error("Failed to send message. Try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

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
              title: <span className="breadcrumb-link">Contact Us</span>,
            },
          ]}
        />
      </div>
      <div className="contact-container">
        <Row justify="space-around">
          {/* Form Column */}
          <Col xs={24} md={15} className="form-column">
            <h1 className="form-title">Message Us!</h1>
            <Form layout="vertical" form={form} onFinish={onFinish}>
              <Form.Item
                name="fullName"
                rules={[{ required: true, message: "Full name is required" }]}  
              >
                <Input
                  placeholder="Full name"
                  className="inputborder-contact"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Valid email is required",
                  },
                ]}
              >
                <Input
                  placeholder="Enter your email"
                  className="inputborder-contact"
                />
              </Form.Item>
              <Form.Item
                name="phoneNumber"
                rules={[
                  { required: true, message: "Phone number is required" },
                ]}
              >
                <Input
                  placeholder="Enter your phone"
                  className="inputborder-contact"
                />
              </Form.Item>
              <Form.Item
                name="message"
                rules={[{ required: true, message: "Message cannot be empty" }]}
              >
                <Input.TextArea
                  placeholder="Your message"
                  rows={4}
                  className="textarea-border-contact"
                />
              </Form.Item>
              <Form.Item>
                <div className="btn-main-contact">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-contact"
                    loading={loading}
                  >
                    Submit
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </Col>

          {/* Contact Info Column */}
          <Col xs={24} md={9} className="info-column">
            <div className="info-item">
              <FaPhoneAlt style={{ fontSize: "26px" }} />
              <a href="tel:+447745807425" className="info-text">
                077 45807425
              </a>
            </div>
            <div className="info-item">
              <IoMail style={{ fontSize: "26px" }} />
              <a href="mailto:support@sireprinting.co.uk" className="info-text">
                support@sireprinting.co.uk
              </a>
            </div>
            <div className="info-item">
              <IoLocationSharp style={{ fontSize: "26px" }} />
              <span className="info-text1">
                626 92nd Street Brooklyn NY 11220
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Contactus;
