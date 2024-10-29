import React, { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Drawer } from "antd";
import { Row, Col } from "antd";
import "./mainnav.css";
import Drawerform from "./drawerform";

function Mainnav1() {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary sticky-top"
        style={{ width: "100%" }} // Full width for the background
      >
        <Container fluid>
          <Link to="/" className="logo1">
            <img
              src="../images/sire logo.png"
              alt="Sire Printing"
              style={{
                width: "120px",
                height: "50px",
              }}
            />
          </Link>

          <FaSearch
            className="logo2"
            style={{ fontSize: "1.3rem", color: "black" }}
            onClick={toggleSearch}
          />
          {isOpen && (
            <input
              ref={inputRef}
              type="text"
              className="search-input"
              onKeyPress={handleKeyPress}
            />
          )}
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel" className="text-color">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="margin">
              <Nav className="flex-column flex-lg-row justify-content-center align-items-center flex-grow-1 pe-3 text-color">
                <Nav.Link as={Link} to="all-products" className="my-2 mx-2">
                  All Products
                </Nav.Link>
                <Nav.Link as={Link} to="CBD-Packaging" className="my-2 mx-2">
                  CBD Packaging
                </Nav.Link>

                <NavDropdown
                  title="Custom Boxes"
                  id="offcanvasNavbarDropdown"
                  className="dropdown"
                >
                  <div
                    className="mainnav-dropdown-maindiv"
                    style={{
                      width: "100%", // Full width
                      marginTop: "10px", // Add top margin
                      overflowY: "auto", // Enable scrolling if needed
                    }}
                  >
                    <Row style={{ margin: 0, flexWrap: "wrap" }}>
                      {[
                        {
                          to: "/custom-Retail-Packaging",
                          img: "../images/nav1.png",
                          text: "Custom Retail Packaging",
                        },
                        {
                          to: "/rigid-boxes",
                          img: "../images/nav2.png",
                          text: "Rigid Boxes",
                        },
                        {
                          to: "/food-package",
                          img: "../images/nav3.png",
                          text: "Food Packaging",
                        },
                        {
                          to: "/cosmetic-packaging-boxes",
                          img: "../images/nav4.png",
                          text: "Cosmetics Packaging Boxes",
                        },
                        {
                          to: "/sustain",
                          img: "../images/nav5.png",
                          text: "Sustainable Eco-Friendly Packaging",
                        },
                        {
                          to: "/pillow",
                          img: "../images/nav6.png",
                          text: "Custom Pillow Packaging Boxes",
                        },
                        {
                          to: "/giftBox",
                          img: "../images/nav7.png",
                          text: "Gift Packaging Boxes",
                        },
                        {
                          to: "/soap",
                          img: "../images/nav8.png",
                          text: "Soap Packaging Boxes",
                        },
                        {
                          to: "/medical",
                          img: "../images/nav9.png",
                          text: "Custom Medicine Packaging",
                        },
                        {
                          to: "/hangTags",
                          img: "../images/nav10.png",
                          text: "Custom Hang Tags",
                        },
                        {
                          to: "/wovenPatches",
                          img: "../images/nav11.png",
                          text: "Woven Embroidered Patches",
                        },
                        {
                          to: "/corrugatedBoxes",
                          img: "../images/nav4.png",
                          text: "Corrugated Boxes",
                        },
                        {
                          to: "/kraftPaper",
                          img: "../images/nav4.png",
                          text: "Kraft Paper Boxes",
                        },
                        {
                          to: "/customDisplay",
                          img: "../images/nav4.png",
                          text: "Custom Display Boxes",
                        },
                        {
                          to: "/customMailer",
                          img: "../images/nav4.png",
                          text: "Custom Mailer Boxes",
                        },
                      ].map((item, index) => (
                        <Col
                          xs={24}
                          sm={24}
                          md={24}
                          lg={12} // Three columns on large screens
                          xl={8}
                          key={index}
                          style={{ padding: 0 }}
                        >
                          <NavDropdown.Item
                            as={Link}
                            to={item.to}
                            className="text-color d-flex align-items-center"
                            style={{
                              width: "100%",
                              textAlign: "left",
                              fontWeight: "bold",
                            }}
                          >
                            <img
                              src={item.img}
                              alt={item.text}
                              style={{ marginRight: "5px" }}
                            />
                            {item.text}
                          </NavDropdown.Item>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </NavDropdown>

                <Nav.Link
                  as={Link}
                  to="Custom-box-styles"
                  className="my-2 mx-2"
                >
                  Custom Box Styles
                </Nav.Link>
                <Link to="/" className="logo">
                  <img
                    src="../images/sire logo.png"
                    alt="Sire Printing"
                    style={{
                      width: "120px",
                      height: "50px",
                    }}
                  />
                </Link>
                <Nav.Link as={Link} to="Custom-stickers" className="my-2 mx-2">
                  Custom Stickers
                </Nav.Link>
                <Nav.Link as={Link} to="Christmas-boxes" className="my-2 mx-2">
                  Christmas Boxes
                </Nav.Link>
                <Nav.Link as={Link} to="portfolio" className="my-2 mx-2">
                  Portfolio
                </Nav.Link>
                <div>
                  <div className="wrap">
                    <button className="button" onClick={showDrawer}>
                      Get a Free Quote
                    </button>
                  </div>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Drawer
        className="drawer"
        title="Request A Quote"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
        width={520} // You can adjust the width as needed
        style={{ zIndex: 2000 }} // Set a higher zIndex for the drawer
      >
        <Drawerform />
      </Drawer>
    </>
  );
}

export default Mainnav1;
