import React,{useState} from 'react';

import MyMapComponent from './MapComponent';
import Form from './Form';

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

function App() {

  const [latitude,setLatitude] = useState('13.0827')

	const [longitude,setLongitude] = useState('80.2707')

  const handleChange = (lat,lng) =>{
    console.log(lat,lng,"Called")
    setLatitude(lat);
    setLongitude(lng);
  }

  return (
   
    <div className="App"> 
      <h3>Google Maps</h3>
      <MyMapComponent
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      latitude={latitude}
      longitude={longitude}
   />
   <Form handleChange={handleChange}></Form>
  </div>
  );
}

export default App;
