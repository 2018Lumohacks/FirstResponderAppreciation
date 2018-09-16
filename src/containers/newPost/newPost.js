import React, { Component } from 'react';
import './newPost.css';

import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker
} from "react-google-maps"

class NewPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            //set init to Vancouver
            initLocation : {
                lat : 49.28,
                lng : -123.12
            }
        }
    }

    GetLocation = (geoLocation) => {
        if(geoLocation!=null){
            //when the geolocation come back
            this.setState({initLocation : {
                lat: geoLocation.coords.latitude,
                lng: geoLocation.coords.longitude
            }})
        } else {
            navigator.geolocation.getCurrentPosition(this.GetLocation);
        }
        
    }
    
  render() { 
      
    const EventMap = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter = {
            {
                lat: this.state.initLocation.lat,
                lng: this.state.initLocation.lng
            }
        }
    >
        {props.isMarkerShown && <Marker position={{ lat: this.state.initLocation.lat, lng: this.state.initLocation.lng }} />}
    </GoogleMap>
    ))
    
    return (
      <div className="NewPost">
        {this.GetLocation()}
        < EventMap
            isMarkerShown
            googleMapURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA2BesvtAup0KertJB95K0u7OpBt0xvtZQ&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            position
        />
      </div>
    );
  }
}

export default NewPost;
