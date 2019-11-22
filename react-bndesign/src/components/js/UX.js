// Components
import React from 'react';
import Row from 'react-bootstrap/Row';
import UXPagination from './UXPagination';

// Styles
import '../css/UX.css';

export default class UX extends React.Component {
  render() {
    return (
      <div className="UX-Component ml-4">
        <h1 className="mr-4">UX</h1>
        <Row className="w-100 mb-0 pb-0">
          <div className="project-container w-100 m-5 p-4">
            <UXPagination />
          </div>
        </Row>
        <iframe id="4e56172c-830d-464b-93d9-878212c0763b" src="https://www.vectary.com/viewer/v1/?model=4e56172c-830d-464b-93d9-878212c0763b&env=skatepark" frameBorder="0" width="100%" height="480"></iframe>
      </div>
    )
  }
}