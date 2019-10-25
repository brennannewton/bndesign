// Components
import React from 'react';
import Navigation from './components/Navigation';

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}
