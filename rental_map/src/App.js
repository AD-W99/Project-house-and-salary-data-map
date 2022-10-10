import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import SearchMap from './Components/SearchMap'
import Graphs from './Components/Graphs'
import Searchbar from './Components/Searchbar'
import About from './Components/About'
import Account from './Components/Account'
import Contact from './Components/Contact'
import './App.css'

export default function App() {
  const [homePage, setHomePage] = useState(true)
  const [aboutPage, setAboutPage] = useState(false)
  const [accountPage, setAccountPage] = useState(false)
  const [contactPage, setContactPage] = useState(false)

  return (
    <>
      <Navbar
        homePage={homePage} 
        setHomePage={setHomePage}
        aboutPage={aboutPage}
        setAboutPage={setAboutPage}
        accountPage={accountPage}
        setAccountPage={setAccountPage}
        contactPage={contactPage}
        setContactPage={setContactPage}
      />
      {homePage && <div className='main_container'>
        <Searchbar />
        <div className='secondary_container'>
          <SearchMap />
          <Graphs />
        </div>
      </div>}
      {aboutPage && <About />}
      {accountPage && <Account />}
      {contactPage && <Contact />}
    </>
  )
}