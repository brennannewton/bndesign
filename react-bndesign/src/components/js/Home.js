//Components
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//Styles
import '../css/Home.css'

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home-Component">
        <Row className="justify-content-center m-auto p-2 w-100">
          <Col className="title">WELCOME</Col>
        </Row>
        <h4 className="subtitle mb-3">Please explore.</h4>
        <Row className="justify-content-center m-auto mb-0 p-4 w-100">
          <Col xs={8} md={4} className="align-self-center mt-0 ml-5 mr-5 p-5 bio">
            Hi, my name is <b>Brennan Newton</b>, and I'm a digital content
            creator. I live in Los Angeles, where I design websites, animations,
            character illustrations, and user experiences.
            <br />
            <br />
            I humanize technology by centering the human experience in my work.
          </Col>
          <Col xs={8} md={4} className="align-self-center mt-0 ml-5 mr-5 mb-0 p-5 ux">
            <b>User Experience (UX)</b>
            <br />
            <br />
            When designing content, I focus on the user experience. My work is
            informative, natural, and accessible. These characteristics come
            together to create meaningful, emotional user experiences.
            <br />
            <br />
            Click the icons at the top right to explore my work and contact me.
          </Col>
        </Row>
        <Row className="justify-content-center m-auto w-100">
          <Col xs={8} md={3}><iframe id="cd0aa127-4bfa-466e-8157-b2fd198cbe53" src="https://www.vectary.com/viewer/v1/?model=cd0aa127-4bfa-466e-8157-b2fd198cbe53&env=theskyisonfire" frameborder="0" width="100%" height="360"></iframe></Col>
          <Col xs={8} md={3}><iframe id="cd0aa127-4bfa-466e-8157-b2fd198cbe53" src="https://www.vectary.com/viewer/v1/?model=cd0aa127-4bfa-466e-8157-b2fd198cbe53&env=theskyisonfire" frameborder="0" width="100%" height="360"></iframe></Col>
          <Col xs={8} md={3}><iframe id="cd0aa127-4bfa-466e-8157-b2fd198cbe53" src="https://www.vectary.com/viewer/v1/?model=cd0aa127-4bfa-466e-8157-b2fd198cbe53&env=theskyisonfire" frameborder="0" width="100%" height="360"></iframe></Col>
        </Row>
      </div>
    )
  }
}