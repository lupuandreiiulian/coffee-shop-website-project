import React from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapInitialized: false,
    };
  }

  componentDidMount() {
    if (!this.state.mapInitialized) {
      this.map = L.map("map").setView([51.505, -0.09], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(this.map);

      this.setState({
        mapInitialized: true,
      });
    }
  }

  render() {
    return <div id="map">Location</div>;
  }
}

export default Location;
