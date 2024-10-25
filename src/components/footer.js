import React from "react";
import { Row, Col } from "antd";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaShippingFast,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa"; // Import icons
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import "./footer.css";

function Footer1() {
  return (
    <div className="footersire-footer">
      <Row gutter={16}>
        <Col xs={24} sm={12} md={8} lg={6} className="footersire-column">
          <img src="../images/sire logo 2.png" alt="Logo" />
          <div className="footer-input-container">
            <input
              type="email"
              placeholder="E-mail here"
              className="footer-input"
            />
            <button type="submit" className="submit-button">
              <FaPaperPlane />
            </button>
          </div>
          <p className="sirefooter-p-txt">
            Subscribe to our newsletter and stay updated with our new products,
            policies, and terms.
          </p>
          <img src="../images/googleplay.png" alt="Additional" />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} className="footersire-column">
          <p className="get-txt">Get In Touch</p>
          <p className="sirefooter-p-txt">
            <FaPhone /> (410) 834-9965
          </p>
          <p className="sirefooter-p-txt">
            <FaEnvelope /> support@sireprinting.com
          </p>
          <p className="sirefooter-p-txt">
            <FaMapMarkerAlt /> 626 92nd Street, Brooklyn NY 11220
          </p>
          <p className="sirefooter-p-txt">
            <FaShippingFast /> 100% Free shipping all across USA
          </p>
          <div className="footersire-social-icons">
            <FaFacebook />
            <FaTwitter />
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
            <Link to="/sitemap" className="sirefooter-p-txt">
              Sitemap
            </Link>
          </p>

          <p className="sirefooter-p-txt">
            <Link to="/privacy-policy" className="sirefooter-p-txt">
              Privacy Policy
            </Link>
          </p>

          <p className="sirefooter-p-txt">
            <Link to="/terms-and-conditions" className="sirefooter-p-txt">
              Terms And Conditions
            </Link>
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Footer1;
