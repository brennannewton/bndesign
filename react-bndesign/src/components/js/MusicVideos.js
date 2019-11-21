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
            <h1>Music Videos</h1>
            <p style={{ marginBottom:0 }}>
              Because they take up both time & space, videos can be used to convey complex ideas.
              Bring music into the mix, and now you have a way to portray complex emotions.
            </p>
            <Row className="mt-3">
              <Col xs={12} md={4} className="p-0">
                 <iframe id="30c936b7-b733-4ea9-9464-2fad0bf27a3a" src="https://www.vectary.com/viewer/v1/?model=30c936b7-b733-4ea9-9464-2fad0bf27a3a&env=redwall" frameBorder="0" width="100%" height="480"></iframe>
              </Col>
              <Col xs={12} md={4} className="p-0">
                <iframe id="30c936b7-b733-4ea9-9464-2fad0bf27a3a" src="https://www.vectary.com/viewer/v1/?model=30c936b7-b733-4ea9-9464-2fad0bf27a3a&env=redwall" frameBorder="0" width="100%" height="480"></iframe>
              </Col>
              <Col xs={12} md={4} className="p-0">
                <iframe id="30c936b7-b733-4ea9-9464-2fad0bf27a3a" src="https://www.vectary.com/viewer/v1/?model=30c936b7-b733-4ea9-9464-2fad0bf27a3a&env=redwall" frameBorder="0" width="100%" height="480"></iframe>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}