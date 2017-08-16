import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles/App.css';
import EarthquakeList from './EarthquakeList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">
            "Earthquakes!"
          </div>
        </div>
        <p className="App-intro">
          <EarthquakeList />
        </p>
      </div>
    );
  }
}

export default App;
