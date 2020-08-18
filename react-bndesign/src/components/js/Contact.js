// Components
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Styles
import '../css/Contact.css';

// Images
import ProfilePic from '../../img/Headshot.jpg';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="Contact-Component">
        <Row className="w-100">
          <Col className="profile ml-4 justify-content-center">
            <img className="profile=pic mb-4" src={ProfilePic} alt="Headshot" />
            <div className="mb-4">
              <a
                href="https://www.youtube.com/channel/UCdbh95QEtoahUYoLvq586-A"
                target="_blank" 
                class="fa fa-youtube"
                rel="noopener noreferrer"
              > </a>
              <a
                href="https://www.linkedin.com/in/brennan-newton-075238145/"
                target="_blank"
                class="fa fa-linkedin"
                rel="noopener noreferrer"
              > </a>
              <br />
              <a
                href="https://www.instagram.com/newtonbrennan/"
                target="_blank"
                class="fa fa-instagram"
                rel="noopener noreferrer"
              > </a>
              <a
                href="https://open.spotify.com/user/brennannewton"
                target="_blank"
                class="fa fa-spotify"
                rel="noopener noreferrer"
              > </a>
              <br />
              <a
                href="https://soundcloud.com/brennannewton"
                target="_blank"
                class="fa fa-soundcloud"
                rel="noopener noreferrer"
              > </a>
              <a
                href="https://github.com/brennannewton"
                target="_blank"
                class="fa fa-github"
                rel="noopener noreferrer"
              > </a>
            </div>
          </Col>
          <Col className="ml-4 mr-4">
            <h1>Contact me.</h1>
            <p>brennanmnewton@gmail.com</p>
            <h3>Collaboration</h3>
            <p>I love working with other artists, so if you'd like to work together, then let me know.</p>
            <h3>Feedback</h3>
            <p style={{ marginBottom:0 }}>I also want to know if you have any thoughts or feelings about my work. I appreciate constructive criticism.</p>
            <div className="fb-survey mt-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfsJTmj2fMVTgcGsZWumBaa0bWcmQEXDvE_OIC8UgPrKZ0WGA/viewform?usp=sf_link"
                target="_blank"
                rel="noopener noreferrer"
              >Feedback Survey</a>  
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}