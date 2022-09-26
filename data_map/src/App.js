import React from 'react'
import Navbar from './Components/Navbar'
import Map from './Components/Map'
import Graph from './Components/Graph'

export default function App() {
  return (
    <>
      <Navbar />
      <div>
        <Map />
        <Graph />
      </div>
    </>
  )
}