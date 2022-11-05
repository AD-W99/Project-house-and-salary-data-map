import mapboxgl from "!mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import { useEffect, useRef } from "react"

export default function SearchMap({ mapCoordinates }) {
  mapboxgl.accessToken='pk.eyJ1IjoiYWxleC13b29kIiwiYSI6ImNsOHN1YXB0czAwa3Mzd21udTI0MGhkMTAifQ.LNlWCNJrzBkvswp_-IKCkg'
  const mapContainer = useRef(null)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [mapCoordinates.longitude, mapCoordinates.latitude],
      zoom: mapCoordinates.zoom
    })

    map.addControl(new mapboxgl.NavigationControl(), 'top-right')

    return () => map.remove()
  }, [mapCoordinates])

    return (
      <>
      <div
        ref={mapContainer}
        style={{width: '98vw', height: 400}}
      />
      </>
    )
}