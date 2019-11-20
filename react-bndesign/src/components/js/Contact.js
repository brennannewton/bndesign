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
        <Row className="w-100">
          <Col className="profile ml-4 justify-content-center">
            <img className="mb-4" src={ProfilePic} alt="Headshot" />
            <div className="mb-4">
              <a href="https://www.youtube.com/channel/UCdbh95QEtoahUYoLvq586-A" target="_blank" class="fa fa-youtube"></a>
              <a href="https://www.linkedin.com/in/brennan-newton-075238145/" target="_blank" class="fa fa-linkedin"></a>
              <br />
              <a href="https://www.instagram.com/newtonbrennan/" target="_blank" class="fa fa-instagram"></a>
              <a href="https://open.spotify.com/user/brennannewton" target="_blank" class="fa fa-spotify"></a>
              <br />
              <a href="https://soundcloud.com/brennannewton" target="_blank" class="fa fa-soundcloud"></a>
            </div>
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