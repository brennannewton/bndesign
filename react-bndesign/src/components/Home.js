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
        <h1 className="title">WELCOME</h1>
        <h4 className="subtitle mt-3">Please explore.</h4>
        <div>
          <Row className="justify-content-center">
            <Col xs={8} md={4} className=" m-5 p-5 bio">Hi, my name is Brennan Newton.
              I'm a web developer, and this is my work.
              <br />
              <br />
              Click on the icons top right to explore my work and contact me.
            </Col>
            <Col xs={8} md={4} className="m-5 p-5 ux">User Experience (UX)</Col>
          </Row>
        </div>
      </div>
    )
  }
}