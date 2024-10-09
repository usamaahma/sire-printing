import { FaSquarePhone, FaSquareWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoSearchCircle } from "react-icons/io5";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Firstnav1() {
  return (
    <Navbar expand="lg" className="mb-0" style={{ backgroundColor: 'rgb(255,160,21)', padding: '10px 28px', margin: 0 }}>
      <Nav className="me-auto d-flex align-items-center">
        <Nav.Item className="d-flex align-items-center mx-4" style={{ color: 'black' }}>
          <FaSquarePhone style={{ fontSize: '1.5rem', marginRight: '5px' }} />
          <p style={{ margin: 0 }}>Call Us: +123 456 7890</p>
        </Nav.Item>
        <Nav.Item className="d-flex align-items-center mx-4" style={{ color: 'black' }}>
          <MdEmail style={{ fontSize: '1.5rem', marginRight: '5px' }} />
          <p style={{ margin: 0 }}>info@example.com</p>
        </Nav.Item>
        <Nav.Item className="d-flex align-items-center mx-4" style={{ color: 'black' }}>
          <FaSquareWhatsapp style={{ fontSize: '1.5rem', marginRight: '5px' }} />
        </Nav.Item>
      </Nav>

      <Form inline className="d-flex">
        <Row className="align-items-center">
          <Col xs="auto" className="mx-3">
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <span style={{ cursor: 'pointer' }}>
              <IoSearchCircle style={{ fontSize: '2rem' }} />
            </span>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default Firstnav1;
