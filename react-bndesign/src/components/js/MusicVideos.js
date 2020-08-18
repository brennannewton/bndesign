// Components
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MVPagination from './MVPagination';

//Styles
import '../css/MusicVideos.css'

export default class MusicVideos extends React.Component {
  render () {
    return (
      <div className="MusicVideos-Component">
        <Row className="justify-content-center w-100">
          <Col xs={11} md={8} xl={5} className="justify-content-center mt-3 mr-5 mb-5 ml-5">
            <div className="mv-container m-auto">
              <MVPagination />
            </div>
          </Col>
          <Col xs={11} xl={5} className="justify-content-center mt-2 mr-5 ml-5">
            <h1 className="mb-3">Music Videos</h1>
            <p style={{ marginBottom:0 }}>
              My music videos convey a variety of emotions. Some follow
              transformation through loss, while others simply make you laugh.
              Click the video titles to learn more about each video.
            </p>
          </Col>
        </Row>
      </div>
    )
  }
}