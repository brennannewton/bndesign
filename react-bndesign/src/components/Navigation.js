import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default class Navigation extends React.Component {
  render() {
    return (
        <Router>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="music-videos">Music Videos</Link></li>
              <li><Link to="illustrations">Illustrations</Link></li>
              <li><Link to="paintings">Paintings</Link></li>
              <li><Link to="contact">Contact</Link></li>
            </ul>
          </nav>
          <Switch>
              <Route path="/" exact render={() => 'Homepage'} />
              <Route path="/music-videos" exact render={() => 'Music Videos'} />
              <Route path="/illustrations" exact render={() => 'Illustrations'} />
              <Route path="/paintings" exact render={() => 'Paintings'} />
              <Route path="/contact" exact render={() => 'Contact'} />
          </Switch>
        </Router>
    )
  } 
}