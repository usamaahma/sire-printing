import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import "./contactus.css";

function Contactus() {
  return (
    <div className="contact-container">
      <Row justify="space-around">
        {/* Form Column */}
        <Col xs={24} md={15} className="form-column"> {/* 60% width */}
          <h1 className="form-title">Message Us!</h1>
          <Form layout="vertical">
            <Form.Item>
              <Input placeholder="Full name" className="inputborder-contact" />
            </Form.Item>
            <Form.Item>
              <Input
                placeholder="Enter your email"
                className="inputborder-contact"
              />
            </Form.Item>
            <Form.Item>
              <Input
                placeholder="Enter your phone"
                className="inputborder-contact"
              />
            </Form.Item>
            <Form.Item>
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
                >
                  Submit
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Col>

        {/* Contact Info Column */}
        <Col xs={24} md={9} className="info-column"> {/* 40% width */}
          <div className="info-item">
            <PhoneOutlined />
            <span className="info-text">+123 456 7890</span>
          </div>
          <div className="info-item">
            <MailOutlined />
            <span className="info-text">info@example.com</span>
          </div>
          <div className="info-item">
            <EnvironmentOutlined />
            <span className="info-text">626 92nd Street Brooklyn NY 11220</span>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Contactus;
