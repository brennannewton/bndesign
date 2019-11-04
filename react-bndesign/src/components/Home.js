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
        <Row className="justify-content-center m-auto p-2 w-100">
          <Col className="title">WELCOME</Col>
        </Row>
        <h4 className="subtitle mt-3 mb-3">Please explore.</h4>
        <Row className="justify-content-center m-auto mb-0 p-4 w-100">
          <Col xs={8} md={4} className="mt-0 ml-5 mr-5 p-5 bio">Hi, my name is Brennan Newton.
            I'm a web developer, and this is my work.
            <br />
            <br />
            Click on the icons top right to explore my work and contact me.
          </Col>
          <Col xs={8} md={4} className="mt-0 ml-5 mr-5 mb-0 p-5 ux">User Experience (UX)</Col>
        </Row>
        <Row className="justify-content-center m-auto w-100">
          <Col xs={8} md={3}><iframe id="cd0aa127-4bfa-466e-8157-b2fd198cbe53" src="https://www.vectary.com/viewer/v1/?model=cd0aa127-4bfa-466e-8157-b2fd198cbe53&env=studio1" frameborder="0" width="100%" height="360"></iframe></Col>
          <Col xs={8} md={3}><iframe id="cd0aa127-4bfa-466e-8157-b2fd198cbe53" src="https://www.vectary.com/viewer/v1/?model=cd0aa127-4bfa-466e-8157-b2fd198cbe53&env=studio1" frameborder="0" width="100%" height="360"></iframe></Col>
          <Col xs={8} md={3}><iframe id="cd0aa127-4bfa-466e-8157-b2fd198cbe53" src="https://www.vectary.com/viewer/v1/?model=cd0aa127-4bfa-466e-8157-b2fd198cbe53&env=studio1" frameborder="0" width="100%" height="360"></iframe></Col>
        </Row>
      </div>
    )
  }
}