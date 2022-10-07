import React, { useState, useRef, useCallback } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"
import MapGL, { NavigationControl } from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'

const MAP_TOKEN = "pk.eyJ1IjoiYWxleC13b29kIiwiYSI6ImNsOHN1YXB0czAwa3Mzd21udTI0MGhkMTAifQ.LNlWCNJrzBkvswp_-IKCkg"

export default function SearchMap() {
    const [viewport, setViewport] = useState({
        latitude: 39.828175,
        longitude: -98.5795,
        zoom: 10
    })
    const mapRef = useRef()
    const handleViewportChange = useCallback(
        (newViewport) => setViewport(newViewport),
        []
    )
    const handleGeocoderViewportChange = useCallback(
        (newViewport) => {
          const geocoderDefaultOverrides = { transitionDuration: 1000 }
    
          return handleViewportChange({
            ...newViewport,
            ...geocoderDefaultOverrides
          })
        },
        [handleViewportChange]
      )

    return (
        <MapGL
            ref={mapRef}
            {...viewport}
            width="600px"
            height="400px"
            onViewportChange={handleViewportChange}
            mapboxApiAccessToken={MAP_TOKEN}
        >
            <Geocoder
                mapRef={mapRef}
                onViewportChange={handleGeocoderViewportChange}
                mapboxApiAccessToken={MAP_TOKEN}
                position="top-left"
            ></Geocoder>
            <NavigationControl position="bottom-right" />
        </MapGL>
    )
}