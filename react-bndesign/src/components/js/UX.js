// Components
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Styles
import '../css/UX.css';

// Images

import ELECTRA from '../../img/ELECTRA_SS_Fade.png';
import bndesign from '../../img/bndesign_SS_Fade.png';

export default class UX extends React.Component {
  render() {
    return (
      <div className="UX-Component m-4">
        <h1 className="mb-4">UX</h1>
        <Row className="w-100">
          <Col className="mb-4">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ELECTRA}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>ELECTRA</h3>
                  <p>ELECTRA provides collaboration tools for the modern artist.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bndesign}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>bndesign</h3>
                  <p>bndesign serves as my personal portfolio as well as a UX project.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col className="w-100 d-flex flex-row">
            <div className="link-container mr-5 ml-3">
              <h3>Sites</h3>
              <p><a href="https://electrala.netlify.com" target="_blank">electrala.netlify.com</a></p>
              <p><a href="https://bndesgin.netlify.com" target="_blank">bndesign.netlify.com</a></p>
            </div>
            <div className="code-container">
              <h3>Code</h3>
              <p><a href="https://github.com/electrala" target="_blank">ELECTRA</a></p>
              <p><a href="https://github.com/brennannewton/bndesign" target="_blank">bndesign</a></p>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}