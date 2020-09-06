import React,{useState} from 'react';

function Form(props) {

  const [latitude,setLatitude] = useState('')
  const [longitude,setLongitude] = useState('')

  return (
    <div> 
        <form>
  			<div class="form-group">
				<label for="formGroupExampleInput">Latitude</label><br></br>
				<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Latitude" value={latitude} onChange={(e)=>{setLatitude(e.target.value)}}></input><br></br>
				<label for="formGroupExampleInput">Longitude</label><br></br>
    			<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Longitude" value={longitude} onChange={(e)=>{setLongitude(e.target.value)}}></input><br></br>
                <button type="button" class="btn btn-info" onClick={()=>{props.handleChange(latitude,longitude)}}>Get Map location</button><br></br><br></br>
  			  </div>
		</form>
  </div>
  );
}

export default Form;
