import React from "react";
import { Row, Col, Tabs, Table } from "antd";
import ProductDetailCarousel from "./productdetailcarousel";
import Faq1 from "../faqs";

const { TabPane } = Tabs;

const columns = [
  {
    dataIndex: "boxspecs",
  },
  {
    dataIndex: "description",
  },
];

const data = [
  { key: "1", boxspecs: "Box Style", description: "One Piece Mailer Box Style" },
  { key: "2", boxspecs: "Dimensions", description: "Custom Sizes Available" },
  { key: "3", boxspecs: "Quantity", description: "50" },
  { key: "4", boxspecs: "Included Options", description: "Gloss/Matte Lamination, Die Cutting, Pasting" },
  {
    key: "5",
    boxspecs: "Additional Options",
    description:
      "Perforation, PVC Window Patch, Cardboard/Foam Inserts, Raised Ink, Foil Stamping, Spot UV, Embossing, Debossing.",
  },
  { key: "6", boxspecs: "Proof", description: "Flat View, 3D Mock-up, Physical Sampling (Paid Request)" },
  { key: "7", boxspecs: "Shipping", description: "Shipped via DHL, FedEx & UPS" },
  {
    key: "8",
    boxspecs: "Preferred Design File",
    description: "You can send us your design files in AI, PDF, PSD, EPS, JPG, or TIFF format.",
  },
  { key: "9", boxspecs: "Assembling", description: "Pre-Scored, Pre-Glued, & Shipping Flat" },
];

function ProductDetailSpec() {
  return (
    <div className="product-detail-spec">
      <Row >
        {/* Tabs Column (60%) */}
        <Col xs={24} sm={24} md={16} lg={16}>
          <Tabs defaultActiveKey="1">
            <TabPane 
              tab={
                <div className="tablehead-div">
                  <p className="tablehead-txt">Rigid Cigarette Boxes Specifications</p>
                </div>
              } 
              key="1"
            >
              <Table columns={columns} dataSource={data} size="middle" />
            </TabPane>
            <TabPane 
              tab={
                <div className="tablehead-div">
                  <p className="tablehead-txt">FAQ'S</p>
                </div>
              } 
              key="2"
            >
              {/* <p style={{ padding: "15px", fontSize: "1.1rem", color: "#555" }}>
                These boxes are made with high-quality materials and can be customized according to your needs.
                We offer different sizes, styles, and finishes to meet your brand’s requirements.
              </p> */}
              <Faq1/>
            </TabPane>
          </Tabs>
        </Col>

        {/* Carousel Column (40%) */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <div className="tablehead-div">
            <p className="tablehead-txt">Customer Feedback</p>
          </div>
          <ProductDetailCarousel />
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetailSpec;
