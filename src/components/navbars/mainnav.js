import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./mainnav.css";

function Mainnav1() {
  
  return (
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
       
        <FaSearch className="logo2" style={{ fontSize: "1.3rem", color: "black" }} />

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
                className="my-2 mx-2"
              >
                <NavDropdown.Item href="#action3" className="text-color">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4" className="text-color">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5" className="text-color">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="Custom-box-styles" className="my-2 mx-2">
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
              <Button type="text" className="btn-mainnav">
                Get a Free Quote
              </Button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Mainnav1;
