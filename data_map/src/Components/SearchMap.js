import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker, NavigationControl } from 'react-map-gl'


const MAP_TOKEN = "pk.eyJ1IjoiYWxleC13b29kIiwiYSI6ImNsOHN1YXB0czAwa3Mzd21udTI0MGhkMTAifQ.LNlWCNJrzBkvswp_-IKCkg"

export default function SearchMap() {

    return (
        <Map
            initialViewState={{
                latitude: 36.114647,
                longitude: -115.172813,
                zoom: 14
            }}
            style={{ width: 800, height: 600 }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={MAP_TOKEN}
        >
            <NavigationControl />
            <Marker longitude={-115.172813} latitude={36.114647} color="green" />
        </Map>
    )
}