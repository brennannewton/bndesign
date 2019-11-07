// Components
import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import MusicVideos from './components/MusicVideos';

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
        <Navigation setCurrPage={this.setCurrPage}/>
        <div id="react-router-dom-switch">
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/music-videos" exact render={() => <MusicVideos />} />
            <Route path="/illustrations" exact render={() => 'Illustrations'} />
            <Route path="/paintings" exact render={() => 'Paintings'} />
            <Route path="/ux" exact render={() => 'UX'} />
            <Route path="/contact" exact render={() => 'Contact'} />
          </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}
