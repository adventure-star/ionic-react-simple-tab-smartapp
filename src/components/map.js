import React, { Component } from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";

class ContactMap extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const GoogleMapExample = withGoogleMap(() => (
            <GoogleMap
                defaultCenter={{ lat: 51.509865, lng: -0.118092 }} //London LatLan
                defaultZoom={13}
                defaultOptions={{ disableDefaultUI: true }}
            >
            </GoogleMap>
        ));

        return (
            <div>
                <GoogleMapExample
                    containerElement={
                        <div className="w-full" style={{height: "100px"}} />
                    }
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }

}
export default ContactMap;