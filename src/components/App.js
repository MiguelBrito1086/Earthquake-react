import React, { Component } from "react"
// import logo from './logo.svg';
import "../styles/App.css"
import EarthquakeList from "./EarthquakeList"
import EarthquakeInfo from "./EarthquakeInfo"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">"Earthquakes!"</div>
        </div>
        <div className="App-intro">
          <EarthquakeInfo />
          <EarthquakeList />
        </div>
      </div>
    )
  }
}

export default App
