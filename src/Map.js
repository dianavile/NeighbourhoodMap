import React, {Component} from 'react';
import './App.css';
import mapStyle from "./mapStyle";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";
const google = window.google;


//Map Component
class Map extends Component {

        state = {
            mapstyle: mapStyle,
        }

    render() {
        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: 41.3851, lng: 2.1734}}
                defaultOptions={{ styles: this.state.mapstyle }}
                zoom={this.props.zoom}
                center={{ lat: this.props.lat, lng: this.props.lng}}
            >
                {this.props.venues.length && this.props.venues.map((place, index) => (
                    <Marker key={place.venue.id} position={{lat: place.venue.location.lat, lng: place.venue.location.lng}} animation={place.verified ? window.google.maps.Animation.BOUNCE : null} onClick={() => this.props.toggleInfoBox(place.venue.id)}>
                        <div>
                            <InfoBox options={{pixelOffset: new google.maps.Size(-120, -200) , closeBoxURL: '',boxStyle: {width: "200px"} }} visible={place.verified}>
                                <div>
                                    <h2>{place.venue.name}</h2>
                                    <p>{place.venue.location.formattedAddress[0]}</p>
                                </div>
                            </InfoBox>
                        </div>
                    </Marker>
                    )
                )
                }
            </GoogleMap>
        );
        }

}

export default withGoogleMap(Map);
