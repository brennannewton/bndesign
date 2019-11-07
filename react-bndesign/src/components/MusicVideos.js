// Components
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Pagination from 'react-bootstrap/Pagination';

//Styles
import './MusicVideos.css'

export default class MusicVideos extends React.Component {
  handleClick1 = () => {
    console.log("Page 1 clicked");
  }

  handleClick2 = () => {
    console.log("Page 2 clicked");
  }

  render () {
    return (
      <div className="MusicVideos-Component">
        <Row className="justify-content-center w-100">
          <Col xs={8} lg={5} className="justify-content-center mr-5 mb-5 ml-5">
            <div className="mv-container m-auto">
              <iframe src="https://www.youtube.com/embed/Yd04u_iSzXs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/G3rbz1-R8B0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/pjKZb9llaNQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <Pagination size="sm" className="justify-content-center">
                  {[
                    <Pagination.Item key={1} onClick={this.handleClick1}>1</Pagination.Item>,
                    <Pagination.Item key={2} onClick={this.handleClick2}>2</Pagination.Item>
                  ]}
              </Pagination>
            </div>
          </Col>
          <Col xs={8} lg={5} className="justify-content-center mr-5 ml-5">
            <h1>Music Videos</h1>
            <p>My videos investigate the relationship between music & emotion. Music makes us laugh. Music makes us cry. Music scares us.</p>
            <iframe id="30c936b7-b733-4ea9-9464-2fad0bf27a3a" src="https://www.vectary.com/viewer/v1/?model=30c936b7-b733-4ea9-9464-2fad0bf27a3a&env=studio1" frameborder="0" width="33%" height="480"></iframe>
            <iframe id="30c936b7-b733-4ea9-9464-2fad0bf27a3a" src="https://www.vectary.com/viewer/v1/?model=30c936b7-b733-4ea9-9464-2fad0bf27a3a&env=studio1" frameborder="0" width="33%" height="480"></iframe>
            <iframe id="30c936b7-b733-4ea9-9464-2fad0bf27a3a" src="https://www.vectary.com/viewer/v1/?model=30c936b7-b733-4ea9-9464-2fad0bf27a3a&env=studio1" frameborder="0" width="33%" height="480"></iframe>
          </Col>
        </Row>
      </div>
    )
  }
}