import React from 'react'
import Navbar from './Components/Navbar'
import SearchMap from './Components/SearchMap'
import Graphs from './Components/Graphs'
import Searchbar from './Components/Searchbar'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className='main_container'>
        <Searchbar />
        <div className='secondary_container'>
          <SearchMap />
          <Graphs />
        </div>
      </div>
    </>
  )
}

export default App;

// https://blog.logrocket.com/using-mapbox-gl-js-react/
