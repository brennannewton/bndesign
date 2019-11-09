// Components
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Styles
import './Illustrations.css';

// Images
import B from '../img/B.png';
import B_OC from '../img/B_OC_2.png';
import Cal_OC from '../img/Cal_OC_1.png';
import Mads_OC from '../img/Mads_OC_2.png';
import Bed from '../img/Bed.png';

export default class Illustrations extends React.Component {
    render() {
      return (
        <div className="Illustrations-Component">
          <Row className="justify-content-center w-100">
            <Col xs={8} lg={5} className="justify-content-center mr-5 mb-5 ml-5"> 
              <h1>Illustrations</h1>
              <p>I draw digital characters. The one in the pink is B. The other three are The Creep Beaters.</p>
            </Col>
            <Col xs={8} lg={5} className="justify-content-center mr-5 mb-5 ml-5">
              <div className="illustrations-container m-auto">
                <img src={B} alt="" />
                <img src={B_OC} alt="" />
                <img src={Cal_OC} alt="" />
                <img src={Mads_OC} alt="" />
                <img src={Bed} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      )
    }
}