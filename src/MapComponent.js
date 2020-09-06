import React from 'react';
import {  withScriptjs,withGoogleMap,GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: parseInt(props.latitude), lng: parseInt(props.longitude) }}
  >
    {props.isMarkerShown && <Marker position={{ lat:parseInt(props.latitude), lng: parseInt(props.longitude) }} />}
  </GoogleMap>
))

export default MyMapComponent;