// Components
import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Viewer from 'react-viewer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Images
import bndesign from '../../img/bndesign_SS.png';
import bndesign_home from '../../img/bndesign_wireframes/Home.png';
import bndesign_mv from '../../img/bndesign_wireframes/MusicVideos.png';
import bndesign_illustrations from '../../img/bndesign_wireframes/Illustrations.png';
import bndesign_ux from '../../img/bndesign_wireframes/UX.png';
import bndesign_contact from '../../img/bndesign_wireframes/Contact.png';

// Styles
import '../css/UXPagination.css';

export default class MVPagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPg: 1,
      visible: false,
    };
  }

  setPage = (num) => {
    this.setState({
      showPg: num,
    });
  }

  render() {
    if(this.state.showPg === 1) {
      return (
        <div className="UX-project">
          <a href="https://bndesign.netlify.com/" target="_blank">
            <h2 className="title mb-4">bndesign</h2>
          </a>
          <Row>
              <Col>
                <div className="viewer_bndesign mb-4">
                  <button onClick={() => { this.setState({ visible: true }); }}>
                    <img className="w-100" src={ bndesign } alt="bndesign screenshot" />
                  </button>
                  <Viewer
                    visible={this.state.visible}
                    onClose={() => { this.setState({ visible: false }); }}
                    images={[
                      { src: bndesign_home, alt: "Home" },
                      { src: bndesign_mv, alt: "Music Videos" },
                      { src: bndesign_illustrations, alt: "Illustrations" },
                      { src: bndesign_ux, alt: "UX" },
                      { src: bndesign_contact, alt: "Contact" }
                    ]}
                    noImgDetails={true}
                  />
                </div>
              </Col>
              <Col className="mr-4 mb-4">
                <p className="call-to-action">
                  Click the screenshot to check out my wireframes!
                </p>
                <hr />
                <p className="description">
                  <b>bndesign</b> is both a portfolio for my work and a user
                  experience project. My goal is to create a welcoming space
                  where recruiters, hiring managers, and enthusiasts can
                  explore my digital content. Soft, minimal design gives the
                  site space, which allows the user to easily focus on the
                  content. Contrast that with metalic 3D objects to create
                  dimensionality that grabs the user's attention. These
                  elements come together to highlight my work.
                </p>
                <hr />
                <a href="https://github.com/brennannewton/bndesign" target="_blank">
                  <p className="repo-link">GitHub Repository</p>
                </a>
              </Col>
          </Row>
          <Pagination size="sm" className="justify-content-center">
            {[
              <Pagination.Item key={1} onClick={() => this.setPage(1)}>1</Pagination.Item>,
              <Pagination.Item key={2} onClick={() => this.setPage(2)}>2</Pagination.Item>
            ]}
          </Pagination>
        </div>
      )
    }
    else {
      return (
        <>
        <div>
          <iframe src="https://www.youtube.com/embed/Hx60dvg0oFw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/Jqyy7i3Asao" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <Pagination size="sm" className="justify-content-center">
          {[
            <Pagination.Item key={1} onClick={() => this.setPage(1)}>1</Pagination.Item>,
            <Pagination.Item key={2} onClick={() => this.setPage(2)}>2</Pagination.Item>
          ]}
        </Pagination>
        </>
      )
    }
  }
}