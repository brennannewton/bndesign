// Components
import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Home from './components/Home';
import MusicVideos from './components/MusicVideos';
import Illustrations from './components/Illustrations';

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currPage: 'Home',
    };
  }

  setCurrPage = (curr) => {
    this.setState({currPage: curr});
  }

  render() {
    return (
      <div className={`App ${this.state.currPage}`}>
        <BrowserRouter>
        <Navigation setCurrPage={this.setCurrPage} currPage={this.state.currPage}/>
        <div id="react-router-dom-switch">
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route path="/" exact render={() => <Home />} />
            <Route path="/music-videos" render={() => <MusicVideos />} />
            <Route path="/illustrations" render={() => <Illustrations />} />
            <Route path="/paintings" render={() => 'Paintings'} />
            <Route path="/ux" render={() => 'UX'} />
            <Route path="/contact" render={() => 'Contact'} />
          </AnimatedSwitch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}
