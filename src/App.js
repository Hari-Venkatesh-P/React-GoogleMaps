import React,{useState} from 'react';

import MyMapComponent from './MapComponent';
import Form from './Form';

// function loadScript(src) {
// 	return new Promise((resolve) => {
// 		const script = document.createElement('script')
//     script.src = src
//     script.defer = true;
// 		script.onload = () => {
// 			resolve(true)
// 		}
// 		script.onerror = () => {
// 			resolve(false)
// 		}
// 		document.head.appendChild(script);
// 	})
//}

function App() {

  const [latitude,setLatitude] = useState('13.0827')

	const [longitude,setLongitude] = useState('80.2707')

  const handleChange = (lat,lng) =>{
    console.log(lat,lng,"Called")
    setLatitude(lat);
    setLongitude(lng);
  }

  // async function getGoogleMap() {
  //   const res = await loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyB5oBsuFpCeZu8sqT5cmhgL6inUtfRDhXI&callback=initMap')
  //   if (!res) {
	// 		alert('Unable to load Google Map')
	// 		return
	// 	}
  //   window.initMap = function() {
  //     var map = new google.maps.Map(document.getElementById("map"), {
  //       center: {
  //         lat: -34.397,
  //         lng: 150.644
  //       },
  //       zoom: 8
  //     });
  //   };
  // }

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
    {/* <div id="map"></div>
    <button type="button" class="btn btn-info" onClick={()=>{getGoogleMap()}}>Get Map </button><br></br><br></br> */}
  </div>
  );
}

export default App;
