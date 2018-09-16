import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            selectedLocation : {
                lat : 49.28,
                lng : -123.12
            }
        }        
    }

    handleClick = (event) => {
        alert(event.latLng.lng())
    }
    GetLocation = (geoLocation) => {
        if(geoLocation!=null){
            //when the geolocation come back
            this.setState({selectedLocation : {
                lat: geoLocation.coords.latitude,
                lng: geoLocation.coords.longitude
            }})
        } else {
            navigator.geolocation.getCurrentPosition(this.GetLocation);
        }
        
    }

    OnMapClicked = (event) => {
        console.log(event)
        this.setState({selectedLocation : { 
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        }})};
  render() { 

    
    const EventMap = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter = {
            {
                lat: this.state.selectedLocation.lat,
                lng: this.state.selectedLocation.lng
            }
        }
        onClick={(el) => this.OnMapClicked(el)}
    >
        < Marker position = {
            {
                lat: this.state.selectedLocation.lat,
                lng: this.state.selectedLocation.lng
            }
        }
        />
        
    </GoogleMap>
    ))
    this.GetLocation()
    return (
        <div className="NewPost">
            <div className="container">
            <form className="newPostForm">
                <h2>New Post</h2>
                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="title" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="desc" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                       <textarea rows="6" placeholder="Tell us more details in your story..." className="form-control" name="desc" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="dateTime" className="col-sm-2 col-form-label">Date and Time</label>
                    <div className="col-sm-10">
                        <input type="datetime-local" className="form-control" name="dateTime" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="eventLocation" className="col-sm-2 col-form-label">Where the event occurred? </label>
                    <div className="col-sm-10">
                        <EventMap
                            googleMapURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA2BesvtAup0KertJB95K0u7OpBt0xvtZQ&v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `400px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                            
                        />
                    </div>
                    
                </div>
                <div className="form-group row">
                    <label htmlFor="type" className="col-sm-2 col-form-label">Type</label>
                    <div className="col-sm-10">
                       <select className="form-control" name="type">
                       <option value="Test">Test</option>
                       </select>
                    </div>
                </div>
                <Link type="submit" className="btn btn-primary" to="/thankyou" style={{ textDecoration: 'none'}}>
                   Submit
                </Link>
            </form>
            </div>
      </div>
    );
  }
}

export default NewPost;
