import logo from './logo.svg';
import './App.css';
import React from "react";
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const App = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 1
  };

  return (
    <div style={{ height: '100vh', width: '100%'}}>
      <h1 style={{color:"red",textAlign:"center"}}>Cloud Integration Project:</h1>

      <GoogleMapReact 
      bootstrapURLKeys={{ key: "AIzaSyBB9B-Rk8go54u0Ty2z-gNS28IhIQbG_lg" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}>
      <AnyReactComponent
        lat={35.844117}
        lng={10.587955}
        text="My Marker"
      />
    </GoogleMapReact>
  </div>
  )
}

export default App
