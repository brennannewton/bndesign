// Components
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Viewer from 'react-viewer';

// Styles
import '../css/Illustrations.css';

// Images\
import B_OC from '../../img/B_OC_2.png';
import Cal_OC from '../../img/Cal_OC_1.png';
import Mads_OC from '../../img/Mads_OC_2.png';
import Lana_OC from '../../img/Lana_OC.png';
import Kate_OC from '../../img/Kate_OC.png';
import Maggie_OC from '../../img/Maggie_OC.png';
// import B from '../../img/B.png';
// import Bed from '../../img/Bed.png';

export default class Illustrations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible_B: false,
      visible_Mads: false,
      visible_Cal: false,
      visible_Lana: false,
      visible_Kate: false,
      visible_Maggie: false,
    }
  }

    render() {
      return (
        <div className="Illustrations-Component">
          <Row className="justify-content-center w-100">
            <Col xs={11} xl={5} className="justify-content-center mt-4 mr-4 mb-5 ml-5"> 
              <h1>Illustrations</h1>
              <p>
                Meet <b>The Creep Beaters</b>, best friends who protect the innocent.
                Each member has a unique power, such as being able to freeze time.
                My goal is to animate them or turn them into a comic.
              </p>
              <iframe id="5bb7fddc-528e-415d-a97a-22de24f930e0" src="https://www.vectary.com/viewer/v1/?model=5bb7fddc-528e-415d-a97a-22de24f930e0&env=sataranightnolights" frameBorder="0" width="100%" height="480"></iframe>
            </Col>
            <Col xs={11} xl={6} className="justify-content-center mt-2 mb-5">
              <div className="illustrations-container m-auto">
                <div className="viewer_B">
                  <button onClick={() => { this.setState({ visible_B: true }); }}>
                    <img src={ B_OC } alt="B" />
                  </button>
                  <Viewer
                    visible={this.state.visible_B}
                    onClose={() => { this.setState({ visible_B: false }); }}
                    images={[
                      { src: B_OC, alt: "B" },
                      { src: Mads_OC, alt:"Mads" },
                      { src: Cal_OC, alt:"Cal" },
                      { src: Lana_OC, alt:"Lana" },
                      { src: Kate_OC, alt:"Kate" },
                      { src: Maggie_OC, alt:"Maggie" }
                    ]}
                    activeIndex={0}
                    noImgDetails={true}
                  />
                </div>
                <div className="viewer_Mads">
                  <button onClick={() => { this.setState({ visible_Mads: true }); }}>
                    <img src={ Mads_OC } alt="Mads" />
                  </button>
                  <Viewer
                    visible={this.state.visible_Mads}
                    onClose={() => { this.setState({ visible_Mads: false }); }}
                    images={[
                      { src: B_OC, alt: "B" },
                      { src: Mads_OC, alt:"Mads" },
                      { src: Cal_OC, alt:"Cal" },
                      { src: Lana_OC, alt:"Lana" },
                      { src: Kate_OC, alt:"Kate" },
                      { src: Maggie_OC, alt:"Maggie" }
                    ]}
                    activeIndex={1}
                    noImgDetails={true}
                  />
                </div>
                <div className="viewer_Cal">
                  <button onClick={() => { this.setState({ visible_Cal: true }); }}>
                    <img src={ Cal_OC } alt="Cal" />
                  </button>
                  <Viewer
                    visible={this.state.visible_Cal}
                    onClose={() => { this.setState({ visible_Cal: false }); }}
                    images={[
                      { src: B_OC, alt: "B" },
                      { src: Mads_OC, alt:"Mads" },
                      { src: Cal_OC, alt:"Cal" },
                      { src: Lana_OC, alt:"Lana" },
                      { src: Kate_OC, alt:"Kate" },
                      { src: Maggie_OC, alt:"Maggie" }
                    ]}
                    activeIndex={2}
                    noImgDetails={true}
                  />
                </div>
                <div className="viewer_Lana">
                  <button onClick={() => { this.setState({ visible_Lana: true }); }}>
                    <img src={ Lana_OC } alt="Lana" />
                  </button>
                  <Viewer
                    visible={this.state.visible_Lana}
                    onClose={() => { this.setState({ visible_Lana: false }); }}
                    images={[
                      { src: B_OC, alt: "B" },
                      { src: Mads_OC, alt:"Mads" },
                      { src: Cal_OC, alt:"Cal" },
                      { src: Lana_OC, alt:"Lana" },
                      { src: Kate_OC, alt:"Kate" },
                      { src: Maggie_OC, alt:"Maggie" }
                    ]}
                    activeIndex={3}
                    noImgDetails={true}
                  />
                </div>
                <div className="viewer_Kate">
                  <button onClick={() => { this.setState({ visible_Kate: true }); }}>
                    <img src={ Kate_OC } alt="Kate" />
                  </button>
                  <Viewer
                    visible={this.state.visible_Kate}
                    onClose={() => { this.setState({ visible_Kate: false }); }}
                    images={[
                      { src: B_OC, alt: "B" },
                      { src: Mads_OC, alt:"Mads" },
                      { src: Cal_OC, alt:"Cal" },
                      { src: Lana_OC, alt:"Lana" },
                      { src: Kate_OC, alt:"Kate" },
                      { src: Maggie_OC, alt:"Maggie" }
                    ]}
                    activeIndex={4}
                    noImgDetails={true}
                  />
                </div>
                <div className="viewer_Maggie">
                  <button onClick={() => { this.setState({ visible_Maggie: true }); }}>
                    <img src={ Maggie_OC } alt="Maggie" />
                  </button>
                  <Viewer
                    visible={this.state.visible_Maggie}
                    onClose={() => { this.setState({ visible_Maggie: false }); }}
                    images={[
                      { src: B_OC, alt: "B" },
                      { src: Mads_OC, alt:"Mads" },
                      { src: Cal_OC, alt:"Cal" },
                      { src: Lana_OC, alt:"Lana" },
                      { src: Kate_OC, alt:"Kate" },
                      { src: Maggie_OC, alt:"Maggie" }
                    ]}
                    activeIndex={5}
                    noImgDetails={true}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      )
    }
}