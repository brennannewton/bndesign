// Components
import React from 'react';

// Styles
import '../css/Paintings.css';

export default class Paintings extends React.Component {
  render() {
    return (
      <div className="Paintings-Component">
        <h1>Paintings</h1>
        <p>I don't really know what I'm doing with this page yet.</p>
        <div className="vectary-container">
          <iframe id="e8a16c2f-c62d-4abe-b376-35d0a26c2ba0" src="https://www.vectary.com/viewer/v1/?model=e8a16c2f-c62d-4abe-b376-35d0a26c2ba0&env=studio1" frameBorder="0" width="100%" height="480"></iframe>
        </div>
      </div>
    )
  }
}