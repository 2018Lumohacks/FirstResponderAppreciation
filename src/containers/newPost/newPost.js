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
        if(geoLocation===null){
            navigator.geolocation.getCurrentPosition(this.GetLocation);
        }
        
    }

    OnMapClicked = (event) => {
        console.log(event)
        this.setState({selectedLocation : { 
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        }});
        event.label = {
            color: 'white',
            fontWeight: 'bold',
            text: 'Hello world',
        }
    };
  render() { 


    const coords = [
        [49.2757557879496, -123.089633564924, '900 Heatley Av'],
        [49.2833989343018, -123.100028850031, '199 Main St'],
        [49.2599716555727, -123.1034324331, '2801 Quebec St'],
        [49.2628710568171, -123.137578980719, '1475 W 10th Av'],
        [49.219883858393, -123.041750823072, '3090 E 54th Av'],
        [49.2864877423013, -123.134786345561, '1001 Nicola St'],
        [49.2835249047624, -123.125930803993, '1090 Haro St'],
        [49.2780606555938, -123.117639437094, '895 Hamilton St'],
        [49.2681117935618, -123.066183093448, '1805 Victoria Drive'],
        [49.2647927430118, -123.173614488597, '2460 Balaclava St'],
        [49.2488906817429, -123.088063456192, '4013 Prince Albert ST'],
        [49.2763886663577, -123.046353700482, '2804 Venables St'],
        [49.2508855516351, -123.041230454628, '3003 E 22nd Av'],
        [49.2198056785493, -123.076718029789, '7070 Knight St'],
        [49.2372716521754, -123.136612705885, '1375 W 38th Av'],
        [49.2616794433299, -123.205942401991, '4396 W 12th Av'],
        [49.2357791498382, -123.065052263309, '5402 Victoria Drive'],
        [49.2373032465887, -123.173281362176, '5425 Carnarvon St'],
        [49.2174253755325, -123.129770081888, '1005 W 59th Av'],
        [49.258019, -123.238169, '2992 Wesbrook Mall'],
    ]

    const EventMap = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={11}
        defaultCenter = {
            {
                lat: this.state.selectedLocation.lat,
                lng: this.state.selectedLocation.lng,
            }
        }
        onClick={(el) => this.OnMapClicked(el)}
    >
        < Marker position = {
            {
                lat: coords[0][0],
                lng: coords[0][1],
                label: { color: '#00aaff', fontWeight: 'bold', fontSize: '14px', text: 'Your text here' }
            }
        }/>
        < Marker position = {
            {
                lat: coords[1][0],
                lng : coords[1][1]
            }
        }/>
        < Marker position = {
            {
                lat: coords[2][0],
                lng : coords[2][1]
            }
        }/>
        < Marker position = {
            {
                lat: coords[3][0],
                lng : coords[3][1]
            }
        }/>
        < Marker position = {
            {
                lat: coords[4][0],
                lng : coords[4][1]
            }
        }/>
        < Marker position = {
            {
                lat: coords[5][0],
                lng : coords[5][1]
            }
        }/>
        < Marker position = {
            {
                lat: coords[6][0],
                lng : coords[6][1]
            }
        }/>
        < Marker position = {
            {
                lat: coords[7][0],
                lng : coords[7][1]
            }
        }/>
        < Marker position = {
            {
                lat: coords[8][0],
                lng : coords[8][1]
            }
        }/>
        < Marker position = {
            {
                lat: coords[9][0],
                lng : coords[9][1]
            }
        }/>
        < Marker position = {
            {
                lat: coords[10][0],
                lng : coords[10][1]
            }
        }/>
        < Marker position = {
            {
                lat: coords[11][0],
                lng : coords[11][1]
            }
        }/>
        < Marker position = {
            {
                lat: coords[12][0],
                lng : coords[12][1]
            }
        }/>
        < Marker position = {
            {
                lat: coords[13][0],
                lng : coords[13][1]
            }
        }/>
        < Marker position = {
            {
                lat: coords[14][0],
                lng : coords[14][1]
            }
        }/>
        < Marker position = {
            {
                lat: coords[15][0],
                lng : coords[15][1]
            }
        }/>
        < Marker position = {
            {
                lat: coords[16][0],
                lng : coords[16][1]
            }
        }/>
        < Marker position = {
            {
                lat: coords[17][0],
                lng : coords[17][1]
            }
        }/>
        < Marker position = {
            {
                lat: coords[18][0],
                lng : coords[18][1]
            }
        }/>
        < Marker position = {
            {
                lat: coords[19][0],
                lng : coords[19][1]
            }
        }/>
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
