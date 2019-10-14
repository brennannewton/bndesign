import React from 'react';

import Navigation from './components/Navigation';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>Organic</h1>
      <p>These mushrooms are organic. That means humans haven't exerted their control over them... Or have they?</p>
      <p>Left click to rotate. Right click to pan. Scroll to zoom.</p>
      <iframe title="shrooms" id="8a99778b-92f7-485b-abf6-3e92f2a1c8d2" src="https://www.vectary.com/viewer/v1/?model=8a99778b-92f7-485b-abf6-3e92f2a1c8d2&env=piazzasanmarco" frameborder="0" width="50%" height="400"></iframe>
    </div>
  );
}

export default App;
