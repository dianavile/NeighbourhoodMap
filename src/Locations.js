import React, {Component} from 'react'
import './App.css';
let google = window.google;

/* Filter the list of locations
* This component contains all needed to filter the locations
*/
class Locations extends Component {

    state = {
        query: '',    
    }

     render() {
        return (
            <nav>
                <div className='search-locations' role='application'>
                    <input
                        className="Searchbox"
                        ref={(c) => {
                            if (!c) {
                                return;
                            }
                            const searchBox = new window.google.maps.places.SearchBox(c, { types: ['geocode'] });
                            console.log(google)
                            searchBox.addListener('places_changed', (event)=> {
                                event.preventDefault();
                                const places = searchBox.getPlaces();
                                if (places.length > 0) {
                                    const position = {lat: places[0].geometry.location.lat(), lng: places[0].geometry.location.lng()};
                                    this.props.getNewLocation(position)
                                }
                            }, {passive: true})
                        }}
                        type="text"
                        placeholder="Search"
                        aria-label='Search for Buenas Migas lunch place in Barcelona'
                    />
                </div>
                <div className="menu">
                    <ul aria-label='Lunch locations' role='menu'>
                        {this.props.venues.length && this.props.venues.map((place, index) => (
                            <li key={place.venue.id} 
                            tabIndex='0'
                            role='menuitem'
                            onClick={() => {this.props.selectedVenue(place.venue)}}>
                            <a href='#Location1' >{place.venue.name} </a></li>
                            )
                        )
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Locations;
