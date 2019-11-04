//Components
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//Styles
import './Home.css'

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Row className="justify-content-center">
          <Col className="title">WELCOME</Col>
        </Row>
        <h4 className="subtitle mt-3">Please explore.</h4>
        <div>
          <Row className="justify-content-center mb-0">
            <Col xs={8} md={4} className="mt-5 ml-5 mr-5 mb-0 p-5 bio">Hi, my name is Brennan Newton.
              I'm a web developer, and this is my work.
              <br />
              <br />
              Click on the icons top right to explore my work and contact me.
            </Col>
            <Col xs={8} md={4} className="mt-5 ml-5 mr-5 mb-0 p-5 ux">User Experience (UX)</Col>
          </Row>
        </div>
        <div className="vectary-container">
          <iframe id="cd0aa127-4bfa-466e-8157-b2fd198cbe53" src="https://www.vectary.com/viewer/v1/?model=cd0aa127-4bfa-466e-8157-b2fd198cbe53&env=studio1" frameborder="0" width="33%" height="360"></iframe>
          <iframe id="cd0aa127-4bfa-466e-8157-b2fd198cbe53" src="https://www.vectary.com/viewer/v1/?model=cd0aa127-4bfa-466e-8157-b2fd198cbe53&env=studio1" frameborder="0" width="33%" height="480"></iframe>
          <iframe id="cd0aa127-4bfa-466e-8157-b2fd198cbe53" src="https://www.vectary.com/viewer/v1/?model=cd0aa127-4bfa-466e-8157-b2fd198cbe53&env=studio1" frameborder="0" width="33%" height="360"></iframe>
        </div>
      </div>
    )
  }
}