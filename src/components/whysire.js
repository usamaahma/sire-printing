import React from 'react';
import { Row, Col } from 'antd';
import './whysire.css';

const Whysire1 = () => {
  return (
    <div className='why-main' style={{ margin: 0, padding: 0 }}>
      <Row
        gutter={0} // Set gutter to 0 to remove spacing between columns
        style={{
          padding: '0 20px', // Keep the left and right padding
          backgroundColor: 'rgb(245,247,249)',
          margin: '0',       // Remove all margins
        }}
      >
        {/* Column for Text */}
        <Col
          xs={24}
          sm={15} // 60% of 24 is 15
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <h2 className='why-heading' >
            Why Sire Printing Is Rated As The Best Custom Printing & Packaging Company In The USA
          </h2>
          <p className='why-paragraph'>
            Sire Printing is a comprehensive printing services organization that offers high-grade by-products at a low price. We provide businesses with custom printed boxes and custom packaging solutions that meet industry and product particular requirements. Anything you want, we can print and dispatch quickly and affordably. We can come across innovative ideas to produce printing boxes with a fusion of internal fabrication & automation and can turn down setup costs for custom directions. We don't ask for setup or die charges to our clients for even short-run demands. We love startup dealings and are prepared to assist in any way to become part of their victory. Feel free to contact us at any time for more information and any query; we are here to assist you.
          </p>
        </Col>

        {/* Column for GIF Image */}
        <Col xs={24} sm={9}> {/* 40% of 24 is 9 */}
          <img
            src="../images/ship.gif" // Replace with your GIF URL
            alt="GIF"
            className='gif'// Make the image responsive
          />
        </Col>
      </Row>
    </div>
  );
};

export default Whysire1;
