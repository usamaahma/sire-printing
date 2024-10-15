import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './firstnav.css';

function Firstnav1() {
  return (
    <div className="nav-main" >
      <Navbar
        expand="lg"
        className="mb-0"
        style={{
          backgroundColor: "rgb(255,160,21)",
          padding: "10px 28px",
          margin: "0 auto", // Center the navbar
        }}
      >
        <div
          style={{
            width: "90%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Nav className="d-flex align-items-center">
            <Nav.Item
              className="d-flex align-items-center mx-2"
              style={{ color: "black" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "38px",
                  height: "36px",
                  backgroundColor: "black",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginRight: "5px",
                }}
              >
                <FaPhoneAlt style={{ fontSize: "1.3rem", color: "white" }} />
              </div>
              <p style={{ margin: 0 }}>Call Us: +123 456 7890</p>
            </Nav.Item>

            <Nav.Item
              className="d-flex align-items-center mx-2"
              style={{ color: "black" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "38px",
                  height: "36px",
                  backgroundColor: "black",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginRight: "5px",
                }}
              >
                <MdOutlineEmail style={{ fontSize: "1.3rem", color: "white" }} />
              </div>
              <p style={{ margin: 0 }}>info@example.com</p>
            </Nav.Item>

            <Nav.Item
              className="d-flex align-items-center mx-2"
              style={{ color: "black" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "38px",
                  height: "36px",
                  backgroundColor: "black",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                <SiWhatsapp style={{ fontSize: "1.3rem", color: "white" }} />
              </div>
            </Nav.Item>
          </Nav>

          <Form inline className="d-flex">
            <Row className="align-items-center">
              <Col xs="auto" className="mx-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    style={{ width: "auto" }}
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "38px",
                      height: "36px",
                      backgroundColor: "black",
                      borderRadius: "5px",
                      cursor: "pointer",
                      marginLeft: "0.5rem",
                    }}
                  >
                    <FaSearch style={{ fontSize: "1.3rem", color: "white" }} />
                  </div>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </Navbar>
    </div>
  );
}

export default Firstnav1;
