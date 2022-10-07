import {useState, useEffect, useRef} from 'react'
// import Map, { NavigationControl } from 'react-map-gl'
import "mapbox-gl/dist/mapbox-gl.css"
import mapboxgl from 'mapbox-gl'


export default function SearchMap() {
  mapboxgl.accessToken='pk.eyJ1IjoiYWxleC13b29kIiwiYSI6ImNsOHN1YXB0czAwa3Mzd21udTI0MGhkMTAifQ.LNlWCNJrzBkvswp_-IKCkg'
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(-98.5795)
  const [lat, setLat] = useState(39.828175)
  const [zoom, setZoom] = useState(3)

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    })
  })

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
    setLng(map.current.getCenter().lng.toFixed(4));
    setLat(map.current.getCenter().lat.toFixed(4));
    setZoom(map.current.getZoom().toFixed(2));
    })
  })

    return (
      <>
      <div ref={mapContainer} style={{width: 600, height: 400}} />
      </>
    )
}

/* <>
<Map
  initialViewState={{
    longitude: -98.5795,
    latitude: 39.828175,
    zoom: 3
  }}
  mapStyle="mapbox://styles/mapbox/streets-v9"
  style={{width: 600, height: 400}}
  mapboxAccessToken={MAP_TOKEN}
>
  <NavigationControl />
</Map>
</> */