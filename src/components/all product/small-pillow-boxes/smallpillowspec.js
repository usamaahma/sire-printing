import React from 'react';
import { Row, Col, Carousel } from 'antd';
import './smallpillowspec.css';

function Smallpillowspec() {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <div className="small-pillows-spec">
      <Row gutter={16}>
        {/* Text Column (60%) */}
        <Col xs={24} sm={24} md={16} lg={16}>
          <div className="text-column">
            <p><strong>Box Style:</strong> All Styles Available</p>
            <p><strong>Dimensions:</strong> Custom Sizes Available</p>
            <p><strong>Quantity:</strong> 50</p>
            <p><strong>Included Options:</strong> Gloss/Matte Lamination, Die Cutting, Pre-Scored, Pre-Glued</p>
            <p><strong>Additional Options:</strong> Spot UV, Hot Foil Stamping, Raised Ink, Embossing</p>
            <p><strong>Proof:</strong> Flat View, 3D Mock-up, Physical Sampling (Paid Request)</p>
            <p><strong>Shipping:</strong> Shipped via DHL, FedEx & UPS</p>
            <p><strong>Preferred Design File:</strong> You can send us your design files in any vector base format like AI, PDF, PSD, EPS, JPG or TIFF format.</p>
            <p><strong>Assembling:</strong> Pre-Scored, Pre-Glued, & Shipping Flat</p>
          </div>
        </Col>

        {/* Carousel Column (40%) */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>Image 1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>Image 2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>Image 3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>Image 4</h3>
            </div>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
}

export default Smallpillowspec;
