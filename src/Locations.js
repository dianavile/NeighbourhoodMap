import React, {Component} from 'react'
import './App.css';
const google = window.google;

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
                <div className='search-locations'>
                    <input
                        className="Searchbox"
                        ref={(c) => {
                            if (!c) {
                                return;
                            }
                            const searchBox = new google.maps.places.SearchBox(c, { types: ['geocode'] });
                            searchBox.addListener('places_changed', ()=> {
                                const places = searchBox.getPlaces();
                                if (places.length > 0) {
                                    const position = {lat: places[0].geometry.location.lat(), lng: places[0].geometry.location.lng()};
                                    this.props.getNewLocation(position)
                                }
                            })
                        }}
                        placeholder="Search a place..."
                        type="text"
                    />
                </div>
                <div className="menu">
                    <ul>
                        {this.props.venues.length && this.props.venues.map((place, index) => (
                            <li key={place.venue.id} onClick={() => {this.props.selectedVenue(place.venue)}}><a href='#Location1' >{place.venue.name} </a></li>
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
