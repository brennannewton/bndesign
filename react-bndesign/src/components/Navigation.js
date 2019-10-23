import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

export default class Navigation extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div id="reactstrap-navbar">
          <Navbar bg="none" expand="lg">
            <Navbar.Brand as={Link} to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 20 17" className="d-inline-block align-top">
                <path id="ic_home_24px" d="M10,20V14h4v6h5V12h3L12,3,2,12H5v8Z" transform="translate(-2 -3)"/>
              </svg>
            </Navbar.Brand>
            <div className="ml-auto">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Brand as={Link} to="music-videos">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 68.129 68.129" className="justify-content-end">
                    <path id="music-videos-icon" d="M29.495,21.925V52.2l18.925-15.14ZM63.559,3H10.57A7.592,7.592,0,0,0,3,10.57V63.559a7.592,7.592,0,0,0,7.57,7.57H63.559a7.592,7.592,0,0,0,7.57-7.57V10.57A7.592,7.592,0,0,0,63.559,3Zm0,60.559H10.57V10.57H63.559Z" transform="translate(-3 -3)"/>
                  </svg>
                </Navbar.Brand>
                <Navbar.Brand as={Link} to="illustrations">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 68.129 68.129">
                    <path id="illustrations-icon" d="M3,56.935V71.126H17.192L59.047,29.271,44.856,15.079ZM70.022,18.3a3.769,3.769,0,0,0,0-5.336L61.166,4.1a3.769,3.769,0,0,0-5.336,0L48.9,11.03,63.1,25.221,70.022,18.3Z" transform="translate(-3 -2.998)"/>
                  </svg>
                </Navbar.Brand>
                <Navbar.Brand as={Link} to="paintings">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 71.913 68.129">
                    <path id="paintings-icon" d="M20.922,44.636A11.338,11.338,0,0,0,9.569,55.989,7.68,7.68,0,0,1,2,63.558a19.58,19.58,0,0,0,15.138,7.569A15.134,15.134,0,0,0,32.275,55.989,11.338,11.338,0,0,0,20.922,44.636ZM72.806,9.176,67.735,4.1a3.769,3.769,0,0,0-5.336,0L28.491,38.013,38.9,48.42,72.806,14.512A3.769,3.769,0,0,0,72.806,9.176Z" transform="translate(-2 -2.998)"/>
                  </svg>
                </Navbar.Brand>
                <Navbar.Brand as={Link} to="ux">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 93.677 68.129">
                    <path id="ux-icon" d="M9.516,12.516H86.161V4H9.516A8.541,8.541,0,0,0,1,12.516v51.1a8.541,8.541,0,0,0,8.516,8.516H26.548V63.613H9.516ZM52.1,38.064H35.064v7.579a12.622,12.622,0,0,0,0,18.906v7.579H52.1V64.55a12.622,12.622,0,0,0,0-18.906ZM43.581,61.484A6.387,6.387,0,1,1,49.968,55.1,6.379,6.379,0,0,1,43.581,61.484ZM90.419,21.032H64.871a4.579,4.579,0,0,0-4.258,4.258V67.871a4.579,4.579,0,0,0,4.258,4.258H90.419a4.579,4.579,0,0,0,4.258-4.258V25.29A4.579,4.579,0,0,0,90.419,21.032ZM86.161,63.613H69.129V29.548H86.161Z" transform="translate(-1 -4)"/>
                  </svg>
                </Navbar.Brand>
                <Navbar.Brand as={Link} to="contact">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 68.129 68.129">
                    <path id="contact-icon" d="M66.723,15.626H59.91V46.284H15.626V53.1A3.416,3.416,0,0,0,19.032,56.5H56.5L70.129,70.129v-51.1A3.416,3.416,0,0,0,66.723,15.626ZM53.1,36.064V5.406A3.416,3.416,0,0,0,49.69,2H5.406A3.416,3.416,0,0,0,2,5.406V53.1L15.626,39.471H49.69A3.416,3.416,0,0,0,53.1,36.064Z" transform="translate(-2 -2)"/>
                  </svg>
                </Navbar.Brand>
              </Navbar.Collapse>
            </div>
          </Navbar>
        </div>
        <div id="react-router-dom-switch">
          <Switch>
            <Route path="/" exact render={() => 'Homepage'} />
            <Route path="/music-videos" exact render={() => 'Music Videos'} />
            <Route path="/illustrations" exact render={() => 'Illustrations'} />
            <Route path="/paintings" exact render={() => 'Paintings'} />
            <Route path="/ux" exact render={() => 'UX'} />
            <Route path="/contact" exact render={() => 'Contact'} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  } 
}