import { map } from "d3"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import { useState, useEffect, useRef } from "react"

export default function SearchMap({ mapCoordinates }) {
  mapboxgl.accessToken='pk.eyJ1IjoiYWxleC13b29kIiwiYSI6ImNsOHN1YXB0czAwa3Mzd21udTI0MGhkMTAifQ.LNlWCNJrzBkvswp_-IKCkg'
  const mapContainer = useRef(null)
  // const map = useRef(null)
  // const [lng, setLng] = useState(mapCoordinates.longitude)
  // const [lat, setLat] = useState(mapCoordinates.latitude)
  // const [zoom, setZoom] = useState(mapCoordinates.zoom)

  useEffect(() => {

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [mapCoordinates.longitude, mapCoordinates.latitude],
      zoom: mapCoordinates.zoom
    })

    map.addControl(new mapboxgl.NavigationControl(), 'top-right')

    // map.on('move', () => {
    //   setLng(map.getCenter().lng.toFixed(4))
    //   setLat(map.getCenter().lat.toFixed(4))
    //   setZoom(map.getZoom().toFixed(2))
    // })

    return () => map.remove()
  }, [mapCoordinates])
  // useEffect(() => {
  //   if (map.current) return  // initialize map only once
  //     map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: 'mapbox://styles/mapbox/streets-v11',
  //     center: [lng, lat],
  //     zoom: zoom
  //   })
  // })

  // useEffect(() => {
  //   if (!map.current) return // wait for map to initialize
  //   map.current.on('move', () => {
  //   setLng(map.current.getCenter().lng.toFixed(4))
  //   setLat(map.current.getCenter().lat.toFixed(4))
  //   setZoom(map.current.getZoom().toFixed(2))
  //   console.log(map.current)
  //   })
  // })

    return (
      <>
      <div
        ref={mapContainer}
        style={{width: '100vw', height: 400}}
      />
      </>
    )
}

    // import Map, { Marker, NavigationControl } from 'react-map-gl'
    // const MAP_TOKEN = 'pk.eyJ1IjoiYWxleC13b29kIiwiYSI6ImNsOHN1YXB0czAwa3Mzd21udTI0MGhkMTAifQ.LNlWCNJrzBkvswp_-IKCkg'
    // <Map
    //   initialViewState={initialViewState}
    //   style={{width: '100vw', height: 400}}
    //   mapStyle='mapbox://styles/mapbox/streets-v11'
    //   mapboxAccessToken={MAP_TOKEN}
    // >
    // <NavigationControl />
    // </Map>