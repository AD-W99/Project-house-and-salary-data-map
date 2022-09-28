import React from 'react'
import Navbar from './Components/Navbar'
import Map from './Components/Map'
import Graph from './Components/Graph'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <div className='main_container'>
        <Map />
        <Graph />
      </div>
    </>
  )
}