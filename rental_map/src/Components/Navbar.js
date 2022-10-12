import React, { useEffect, useState } from 'react'
import './Navbar.css'

export default function Navbar({
    setHomePage,
    setAboutPage,
    setAccountPage,
    setContactPage,
    homePage,
    aboutPage,
    accountPage,
    contactPage,
}) {
    const [mySidebar, setMySidebar] = useState(false)
    const [windowWidth, setWindowWidth] = useState({width: window.innerWidth})
    const styles = {
        width: mySidebar ? '250px' : '0'
    }

    useEffect(() => {
        function handleResize() {
            setWindowWidth({ width: window.innerWidth })
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    })

    function openMenu() {
        if (!mySidebar) {
            setMySidebar(prevState => !prevState)
        }
    }

    function closeMenu() {
        if (mySidebar) {
            setMySidebar(prevState => !prevState)
        }
    }

    function handleClick(e) {
        if (e.target.innerText === 'Home') {
            setHomePage(true)
            setAboutPage(false)
            setAccountPage(false)
            setContactPage(false)
        }
        if (e.target.innerText === 'About') {
            setAboutPage(true)
            setHomePage(false)
            setAccountPage(false)
            setContactPage(false)
        }
        if (e.target.innerText === 'Account') {
            setAccountPage(true)
            setHomePage(false)
            setAboutPage(false)
            setContactPage(false)
        }
        if (e.target.innerText === 'Contact') {
            setContactPage(true)
            setHomePage(false)
            setAboutPage(false)
            setAccountPage(false)
        }
    }

    return (
        <>
            <header>
                <nav className='nav'>
                    <div style={styles} className='sidebar'>
                        <a href="javascript:void(0)" className="closebtn" onClick={closeMenu}>&times;</a>
                        <a onClick={handleClick} href="#">Home</a>
                        <a onClick={handleClick} href="#">About</a>
                        <a onClick={handleClick} href="#">Account</a>
                        <a onClick={handleClick} href="#">Contact</a>
                    </div>
                    <div>
                        <li id='currentMenu'><a href="#">
                            {homePage && 'Home'}
                            {aboutPage && 'About'}
                            {accountPage && 'Account'}
                            {contactPage && 'Contact'}
                        </a></li>
                    </div>
                    <button className='Menu' onClick={openMenu}>
                        <svg
                            className='hamburgerMenu'
                            width={windowWidth.width < 340 ? '30' : '40'}
                            height={windowWidth.width < 340 ? '30' : '40'}
                        >
                            <rect
                                style={{fill: '#EFF2C0'}}
                                width={windowWidth.width < 340 ? '50' : '100'}
                                height={windowWidth.width < 340 ? '6' : '8'}
                            ></rect>
                            <rect
                                style={{fill: '#EFF2C0'}}
                                y={windowWidth.width < 340 ? '10' : '14'}
                                width={windowWidth.width < 340 ? '50' : '100'}
                                height={windowWidth.width < 340 ? '6' : '8'}
                            ></rect>
                            <rect
                                style={{fill: '#EFF2C0'}}
                                y={windowWidth.width < 340 ? '20' : '28'}
                                width={windowWidth.width < 340 ? '50' : '100'}
                                height={windowWidth.width < 340 ? '6' : '8'}
                            ></rect>
                        </svg>
                    </button>
                    <div className='menuList'>
                        <ul>
                            <li onClick={handleClick}><a href="#">Home</a></li>
                            <li onClick={handleClick}><a href="#">About</a></li>
                            <li onClick={handleClick}><a href="#">Account</a></li>
                            <li onClick={handleClick}><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}