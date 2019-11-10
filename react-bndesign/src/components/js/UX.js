// Components
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Styles
import '../css/UX.css';

// Images

import ELECTRA from '../../img/ELECTRA_SS.png';
import bndesign from '../../img/bndesign_SS.png';

export default class UX extends React.Component {
  render() {
    return (
      <div className="UX-Component m-4">
        <h1>UX</h1>
        <p>I'm a software engineer who always keeps the user experience in mind. Here are some of my projects.</p>
        <Row className="w-100">
          <Col>
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
        </Row>
      </div>
    )
  }
}