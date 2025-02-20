import React, {useState} from "react";
import { Row, Col, Form,Button,Input,message } from "antd";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaShippingFast,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa"; // Import icons
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import "./footer.css";

function Footer1() {
  const [email, setEmail] = useState("");
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Submitted with values:", values); // Log form values

    const data1 = {
      email: values.email,
    };

    newsletter({
      method: "post",
      data: data1,
    })
      .then((response) => {
        console.log("API Response:", response); // Log the entire response to inspect it
        form.resetFields(); // This will reset all form fields to their initial state

        if (
          response.data &&
          response.data.message === "Email already subscribed"
        ) {
          message.info("You already subscribed, thank you!");
        } else {
          message.success("You have successfully subscribed!");
        }
      })
      .catch((error) => {
        console.log("API Error:", error); // Log the API error to the console

        if (error.response) {
          // Handle error based on server response status
          if (error.response.status === 400) {
            if (error.response.data.message === "Email already subscribed") {
              message.warning("You already subscribed, thank you!");
            } else {
              message.error("Something went wrong, please try again!");
            }
          } else {
            // Handle other error statuses
            message.error("Something went wrong, please try again!");
          }
        } else if (error.request) {
          // Handle network error
          console.log("No response received from the API");
          message.error("Network error, please try again later.");
        } else {
          // General error
          console.log("Error during request setup", error.message);
          message.error("Something went wrong, please try again!");
        }
      });
  };
  return (
    <div className="footersire-footer">
      <Row gutter={16}>
        <Col xs={24} sm={12} md={8} lg={6} className="footersire-column">
          <img src="../images/sire logo 2.png" alt="Logo" />
          <div className="footer-input-container">
            <Form
              onFinish={onFinish}
              layout="inline" // Optional: to display the input and button inline
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                  {
                    type: "email",
                    message: "Please enter a valid email address!",
                  },
                ]}
              >
                <Input
                  type="email"
                  placeholder="E-mail here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="footer-input"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<FaPaperPlane />}
                  className="submit-button"
                />
              </Form.Item>
            </Form>
          </div>
          <p className="sirefooter-p-txt1">
            Subscribe to our newsletter and stay updated with our new products,
            policies, and terms.
          </p>
          <img
            src="../images/googleplay.png"
            alt="Additional"
            style={{ marginTop: "1rem" }}
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} className="footersire-column">
          <p className="get-txt">Get In Touch</p>
          <a href="tel:+447745807425" className="sirefooter-p-txt">
            <FaPhone /> 077 45807425
          </a>
          <a
            href="mailto:support@sireprinting.com"
            className="sirefooter-p-txt"
          >
            <FaEnvelope /> support@sireprinting.com
          </a>
          <p className="sirefooter-p-txt1">
            <FaMapMarkerAlt /> 626 92nd Street, Brooklyn NY 11220
          </p>
          <p className="sirefooter-p-txt1">
            <FaShippingFast /> 100% Free shipping all across USA
          </p>
          <div className="footersire-social-icons">
            <FaFacebook />
            <FaXTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
          <img
            src="../images/footervisa.png"
            alt="Additional"
            className="footer-visaimg"
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} className="footersire-column">
          <p className="get-txt">Hot Selling Categories</p>
          <p className="sirefooter-p-txt">Corrugated Boxes</p>
          <p className="sirefooter-p-txt">Soap Packaging Boxes</p>
          <p className="sirefooter-p-txt">Woven Embroidered Patches</p>
          <p className="sirefooter-p-txt">CBD Packaging</p>
          <p className="sirefooter-p-txt">Custom Pillow Packaging Boxes</p>
          <p className="sirefooter-p-txt">Rigid Boxes</p>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} className="footersire-column">
          <p className="get-txt">Useful Links</p>

          <p>
            <Link to="/about-us" className="sirefooter-p-txt">
              About Us
            </Link>
          </p>

          <p>
            <Link to="/contact-us" className="sirefooter-p-txt">
              Contact Us
            </Link>
          </p>

          <p className="sirefooter-p-txt">
            <Link to="/portfolio" className="sirefooter-p-txt">
              Portfolio
            </Link>
          </p>

          <p>
            <Link to="/blogs" className="sirefooter-p-txt">
              Blogs
            </Link>
          </p>

          <p className="sirefooter-p-txt">
            <Link to="/site-map" className="sirefooter-p-txt">
              Sitemap
            </Link>
          </p>

          <p className="sirefooter-p-txt">
            <Link to="/privacy" className="sirefooter-p-txt">
              Privacy Policy
            </Link>
          </p>

          <p className="sirefooter-p-txt">
            <Link to="/Terms and conditions" className="sirefooter-p-txt">
              Terms And Conditions
            </Link>
          </p>
        </Col>
      </Row>
      <div className="footer-copyright">
        <p className="footer-p">
          Copyright ©2020 - 2024 Sire Printing | The Custom Websites
        </p>
      </div>
    </div>
  );
}

export default Footer1;
