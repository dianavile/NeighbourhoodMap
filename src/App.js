import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Locations from './Locations.js';
//import * as Data from './Data.json';
import Map from './Map.js';
//import mapStyle from './mapStyle.json';
import Footer from './Footer.js';

// Add error handling for app googlemap authFailure
window.gm_authFailure = (err) => {
    const mapWarning = document.querySelector('.map');
    mapWarning.innerHTML = `<div class='warning-dialog'>
    <h2 class='warning-title'>Warning</h2>
    <p class='warning-message'>The app failed to load properly. Please check more info in console<p></div>`;
}

class App extends Component {
  
  state = {
        venues: [],
        lat: 41.3851,
        lng: 2.1734,
        zoom: 12,
        error: false
    }
  
// Foursquare API Information  
  getPlaces =() => {
        fetch('https://api.foursquare.com/v2/venues/explore?client_id=T24PWGNQT33GTQ1ZVJYJVUFFIOXPZTKIGYIA0WD1D2NQDVSJ&client_secret=EGPDEHMSUVQUZZXBRLAWE4FZ3OOIXVEDSWPSXDD5UXCZVDP0&v=20180323&limit=10&ll='+this.state.lat+','+this.state.lng +'&query=buenas migas')
            .then(res => res.json())
            .then(res => {
                this.setState({venues: res.response.groups[0].items})
                console.log(res)
            })
            .catch(function(err) {
                // Code for handling errors
                console.log(err)
                alert("failed while fetching")
                this.setState({ error: true }); // Change state error to true to indicate the error 
            });
    }

    getNewLocation = (coords) => {
        this.setState({
            lat: coords.lat,
            lng: coords.lng,
        }, this.getPlaces)
    }

    selectedVenue = (venue) => {
        this.setState({
            lat: venue.location.lat,
            lng: venue.location.lng,
            zoom: 16
        })
        this.toggleInfobox(venue.id
        )
    }

    componentDidMount() {
        this.getPlaces();
    }

    toggleInfobox = (id) => {
        this.setState(() => ({
            venues: this.state.venues.map(venueCurrent => {
                venueCurrent.venue.id === id ? venueCurrent.verified = !venueCurrent.verified : venueCurrent.verified = false;
                return venueCurrent;
            })
        }))
    };  

  render() {
    return (
      <main>
      <div className="App">
         <Header />
         <Locations getNewLocation={this.getNewLocation}
                    venues={this.state.venues}
                    selectedVenue={this.selectedVenue}/>
        <section id='map-area' tabIndex='0'>
         <Map venues={this.state.venues}
                    containerElement={<div style={{height: `800px`}} />}
                    mapElement= {<div style={{height: `100%`}} />}
                    toggleInfoBox={this.toggleInfobox}
                    lat={this.state.lat}
                    lng={this.state.lng}
                    zoom={this.state.zoom}
          />
        </section>
         <Footer />
      </div>
      </main>  
    );
  }
}

export default App;
