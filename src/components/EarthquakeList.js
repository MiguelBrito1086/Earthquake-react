import React, { Component } from "react"
import moment from "moment"
// import earthquakes from '../data/earthquakes';

class EarthquakeList extends Component {
  state = {
    quakes: [],
    loaded: false
  }

  componentDidMount() {
    fetch(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"
    )
      .then(r => r.json())
      .then(data => {
        this.setState({
          quakes: data.features,
          loaded: true
        })
      })
  }

  render() {
    const quakes = this.state.quakes.map(quake => {
      return (
        <div className="col-sm-6" key={quake.id}>
          <div className="card">
            <div className="card-block">
              <h4 className="card-title">
                {quake.properties.place}
              </h4>
              <h6 className="card-subtitle mb-2 text-muted">
                Magnitude: {quake.properties.mag}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Time: {moment(quake.properties.time).format("llll")}
              </h6>
              <p className="card-text">
                Coordinates: {quake.geometry.coordinates}
              </p>
              <a href={quake.properties.url} className="card-link">
                USGS Event Link
              </a>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="quake-list">
        <div className="row">
          {this.state.loaded ? quakes : <p>Loading...</p>}
        </div>
      </div>
    )
  }
}

export default EarthquakeList
