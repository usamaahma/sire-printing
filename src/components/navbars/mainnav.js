import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Drawer } from "antd";
import "./mainnav.css";
import Drawerform from "./drawerform";

function Mainnav1() {
  const [visible, setVisible] = useState(false);

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
          />

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
                    style={{
                      maxHeight: "400px",
                      maxWidth: "900px",
                      overflowY: "auto",
                    }}
                    className="d-flex flex-column"
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/custom-Retail-Packaging"
                      className="text-color d-flex align-items-center mb-2"
                    >
                      <img src="../images/nav1.png" /> Custom Retail Packaging
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/rigid-boxes"
                      className="text-color d-flex align-items-center mb-2"
                    >
                      <img src="../images/nav2.png" /> Rigid Boxes
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/coffeeBag"
                      className="text-color d-flex align-items-center mb-2"
                    >
                      <img src="../images/nav3.png" /> Coffee Bag Food Packaging
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/cosmetics"
                      className="text-color d-flex align-items-center mb-2"
                    >
                      <img src="../images/nav4.png" /> Cosmetics Packaging Boxes
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/sustainable"
                      className="text-color d-flex align-items-center mb-2"
                    >
                      <img src="../images/nav5.png" /> Sustainable Eco-Friendly
                      Packaging
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/pillow"
                      className="text-color d-flex align-items-center mb-2"
                    >
                      <img src="../images/nav6.png" /> Custom Pillow Packaging
                      Boxes
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/giftBox"
                      className="text-color d-flex align-items-center mb-2"
                    >
                      <img src="../images/nav7.png" /> Gift Packaging Boxes
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/soap"
                      className="text-color d-flex align-items-center mb-2"
                    >
                      <img src="../images/nav8.png" /> Soap Packaging Boxes
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/medical"
                      className="text-color d-flex align-items-center mb-2"
                    >
                      <img src="../images/nav9.png" /> Custom Medicine Packaging
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/hangTags"
                      className="text-color d-flex align-items-center mb-2"
                    >
                      <img src="../images/nav10.png" /> Custom Hang Tags
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/wovenPatches"
                      className="text-color d-flex align-items-center mb-2"
                    >
                      <img src="../images/nav11.png" /> Woven Embroidered
                      Patches
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/corrugatedBoxes"
                      className="text-color d-flex align-items-center mb-2"
                    >
                      <img src="../images/nav4.png" /> Corrugated Boxes
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/kraftPaper"
                      className="text-color d-flex align-items-center mb-2"
                    >
                      <img src="../images/nav4.png" /> Kraft Paper Boxes
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/customDisplay"
                      className="text-color d-flex align-items-center mb-2"
                    >
                      <img src="../images/nav4.png" />
                      Custom Display Boxes
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/customMailer"
                      className="text-color d-flex align-items-center mb-2"
                    >
                      <img src="../images/nav4.png" />
                      Custom Mailer Boxes
                    </NavDropdown.Item>
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
        title="Request a Quote"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
        width={620} // You can adjust the width as needed
        style={{ zIndex: 1001 }} // Ensure it appears above other content
      >
        <Drawerform />
      </Drawer>
    </>
  );
}

export default Mainnav1;
