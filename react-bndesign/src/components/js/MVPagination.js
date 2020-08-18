// Components
import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

export default class MVPagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPg: 1,
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
        <>
        <div>
          <iframe
            src="https://www.youtube.com/embed/Yd04u_iSzXs"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Ghost"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/G3rbz1-R8B0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Glass Box"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/wwpHld7C7A0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Matter"
          ></iframe>
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
    else {
      return (
        <>
        <div>
          <iframe
            src="https://www.youtube.com/embed/pjKZb9llaNQ"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Domestication"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/Hx60dvg0oFw"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="My Heart Will Go On"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/Jqyy7i3Asao"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Boyfriend"
          ></iframe>
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