import React from 'react'
import Navbar from './Components/Navbar'
import SearchMap from './Components/SearchMap'
import Graphs from './Components/Graphs'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className='main_container'>
        <SearchMap />
        <Graphs />
      </div>
    </>
  )
}

export default App;

// https://blog.logrocket.com/using-mapbox-gl-js-react/
