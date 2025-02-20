import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./firstnav.css";

function Firstnav1() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query") || ""; // URL se query extract karo
    setSearchQuery(query);
  }, [location.search]);

  const handleSearch = (e) => {
    if (e) e.preventDefault(); // ✅ Prevent default form submit behavior

    if (searchQuery.trim() !== "") {
      navigate(`/product-search?query=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate("/product-search");
    }
  };

  return (
    <div className="nav-main">
      <Navbar
        expand="lg"
        className="mb-0"
        style={{
          backgroundColor: "rgb(255,160,21)",
          padding: "10px 28px",
          margin: "0 auto",
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
              <a
                href="tel:+447745807425"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "black",
                }}
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
                <p style={{ margin: 0 }} className="firstnav-num">
                  Call Us: 077 45807425
                </p>
              </a>
            </Nav.Item>

            <Nav.Item
              className="d-flex align-items-center mx-2"
              style={{ color: "black" }}
            >
              <a
                href="mailto:support@sireprinting.co.uk"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "black",
                }}
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
                  <MdOutlineEmail
                    style={{ fontSize: "1.3rem", color: "white" }}
                  />
                </div>
                <p style={{ margin: 0 }} className="firstnav-num">
                  Email: support@sireprinting.co.uk
                </p>
              </a>
            </Nav.Item>

            <Nav.Item
              className="d-flex align-items-center mx-2"
              style={{ color: "black" }}
            >
              <a
                href="https://wa.me/447745807425"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "black",
                }}
                target="_blank"
                rel="noopener noreferrer"
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
              </a>
            </Nav.Item>
          </Nav>

          {/* ✅ Search Form with Proper Submit Handling */}
          <Form className="d-flex" onSubmit={handleSearch}>
            <Row className="align-items-center">
              <Col xs="auto" className="mx-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
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
                    onClick={handleSearch}
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
