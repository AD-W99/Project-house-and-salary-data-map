import React from 'react'
import Navbar from './Components/Navbar'
import SearchMap from './Components/SearchMap'
import Graph from './Components/Graph'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <div className='main_container'>
        <SearchMap />
        <Graph />
      </div>
    </>
  )
}