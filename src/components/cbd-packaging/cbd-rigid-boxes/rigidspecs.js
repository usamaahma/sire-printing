import React from "react";
import { Row, Col } from "antd";
import { Table } from "antd";
import Rigidcarousel from "./rigidcarousel";

const columns = [
  {
    dataIndex: "boxspecs",
  },
  {
    dataIndex: "description",
  },
];
const data = [
  {
    key: "1",
    boxspecs: "Dimensions",
    description: "	All Sizes Available",
  },
  {
    key: "2",
    boxspecs: "Quantity",
    description: "50",
  },
  {
    key: "3",
    boxspecs: "Included Options",
    description: "	Gloss/Matte Lamination, Die Cutting, Pasting",
  },
  {
    key: "4",
    boxspecs: "Additional Options",
    description:
      "	Perforation, PVC Window Patch, Cardboard/Foam Inserts, Raised Ink, Foil Stamping, Spot UV, Embossing, Debossing.",
  },
  {
    key: "5",
    boxspecs: "Proof",
    description: "Flat View, 3D Mock-up, Physical Sampling (Paid Request)",
  },
  {
    key: "6",
    boxspecs: "Shipping",
    description: "Shipped via DHL, FedEx & UPS",
  },
  {
    key: "7",
    boxspecs: "Preferred Design File",
    description:
      "You can send us your design files in any vector base format like AI, PDF, PSD, EPS, JPG or TIFF format.",
  },
  {
    key: "8",
    boxspecs: "Assembling",
    description: "Pre-Assembled, Ready to use.",
  },
];
function Rigidspec() {
   

  return (
    <div className="small-pillows-spec">
      <Row gutter={16}>
        {/* Text Column (60%) */}
        <Col xs={24} sm={24} md={16} lg={16}>
          <div className="text-column">
            <div className="tablehead-div">
              <p className="tablehead-txt">
              Rigid Cigarette Boxes Specifications
              </p>
            </div>
            <Table columns={columns} dataSource={data} size="middle" />
          </div>
        </Col>

        {/* Carousel Column (40%) */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <div className="tablehead-div">
            <p className="tablehead-txt">Customer Feedback</p>
          </div>

           <Rigidcarousel/>
        </Col>
      </Row>
    </div>
  );
}

export default Rigidspec;