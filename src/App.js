import React, { Component } from 'react';
import './App.css';
//Components
import Header from './Header.js';
import Locations from './Locations.js';
import Map from './Map.js';
import Footer from './Footer.js';

class App extends Component {
  
  state = {
        venues: [],
        lat: 41.3851,
        lng: 2.1734,
        zoom: 12,
        error: false,
        loadMap: ""
    }

 /* function Load GoogleMap with GoogleApi key */ 
 loadMap = () => {
    debugger;
    //window.google = {};
    return loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCv9lgikaoNYwuS1Wx7U-ucJOLxTu62rc4&libraries=,drawing,places&callback=initMap')
    
};

//Foursquare API Information  
getPlaces =() => {
    return fetch('https://api.foursquare.com/v2/venues/explore?client_id=T24PWGNQT33GTQ1ZVJYJVUFFIOXPZTKIGYIA0WD1D2NQDVSJ&client_secret=EGPDEHMSUVQUZZXBRLAWE4FZ3OOIXVEDSWPSXDD5UXCZVDP0&v=20180323&limit=10&ll='+this.state.lat+','+this.state.lng +'&query=buenas migas')
        .then(res => res.json())
        .then(res => {
            this.setState({venues: res.response.groups[0].items})
            console.log(res)
        })
        .catch(function(err) {
           // handle errors
            console.log(err)
            alert('Foursquare API error: failed while fetching' + err)
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

       componentDidMount() {window.initMap = this.initMap;
        this.getPlaces();
        debugger; 
        loadScript();
        window.gm_authFailure = function() {
            alert("Google Maps Authentication failed!");       
      };
}

    toggleInfobox = (id) => {
        this.setState(() => ({
            venues: this.state.venues.map(venueCurrent => {
                venueCurrent.venue.id === id ? venueCurrent.verified = !venueCurrent.verified : venueCurrent.verified = false;
                return venueCurrent;
            })
        }))
    };  

    initMap = () => {
    // Create A Map
    // eslint-disable-next-line 
       const map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 42.6413661, lng: 18.1075044},
            zoom: 14
       })     
    }

  render() {
    return (
      <main>
      <div className="App">
         <Header />
         <Locations getNewLocation={this.getNewLocation}
                    venues={this.state.venues}
                    selectedVenue={this.selectedVenue}/>
        <section id='map-area' tabIndex='0' aria-label="map">
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

//Load map in App.js with asynchronous script function loadScript() 
{
    let url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCv9lgikaoNYwuS1Wx7U-ucJOLxTu62rc4&,places&v=3&callback="initMap"';    
    const index = window.document.getElementsByTagName("script")[0];
    const script = window.document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
    console.log(index)
}

export default App;
