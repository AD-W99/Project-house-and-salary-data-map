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
        setHomePage={setHomePage}
        setAboutPage={setAboutPage}
        setAccountPage={setAccountPage}
        setContactPage={setContactPage}
        homePage={homePage}
        aboutPage={aboutPage}
        accountPage={accountPage}
        contactPage={contactPage}
      />
      {homePage && <div className='main_container'>
        <Searchbar />
        <div className='secondary_container'>
          <SearchMap />
          <div className='graphs'>
            <Graphs />
          </div>
        </div>
      </div>}
      {aboutPage && <About />}
      {accountPage && <Account />}
      {contactPage && <Contact />}
    </>
  )
}