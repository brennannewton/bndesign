// Components
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Styles
import '../css/Contact.css';

// Images
import ProfilePic from '../../img/Brennan-Profile.jpg';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="Contact-Component">
        <Row>
          <Col className="ml-4">
            <img src={ProfilePic} alt="Headshot" />
          </Col>
          <Col>
            <h1>Contact me.</h1>
            <p>brennanmnewton@gmail.com</p>
            <h3>Collaboration</h3>
            <p>I love working with other artists, so if you'd like to work together, then let me know.</p>
            <h3>Feedback</h3>
            <p>I also want to know if you have any thoughts or feelings about my work. I appreciate constructive criticism.</p>
          </Col>
        </Row>
      </div>
    )
  }
}