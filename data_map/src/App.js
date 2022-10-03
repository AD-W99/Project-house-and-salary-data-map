import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import SearchMap from './Components/SearchMap'
import Graph from './Components/Graph'
import './App.css'

export default function App() {
  const [searchInfo, setSearchInfo] = useState('')

  function mapDirections(info) {
      setSearchInfo(info)
  }

  return (
    <>
      <Navbar
        searchInfo={searchInfo}
        mapCoordinates={mapDirections}  
      />
      <div className='main_container'>
        <SearchMap searchInfo={searchInfo} />
        <Graph />
      </div>
    </>
  )
}