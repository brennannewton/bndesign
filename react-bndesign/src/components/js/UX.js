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
        <Row className="w-100">
          <div className="project-container w-100 m-5 p-4">
            <UXPagination />
          </div>
        </Row>
        
      </div>
    )
  }
}