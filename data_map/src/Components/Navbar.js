import React, {useEffect, useState} from 'react'
import './Navbar.css'

export default function Navbar() {
    const [mySidebar, setMySidebar] = useState(false)
    const [windowWidth, setWindowWidth] = useState({width: window.innerWidth})
    const styles = {
        width: mySidebar ? '250px' : '0'
    }

    useEffect(() => {
        function handleResize() {
            setWindowWidth({width: window.innerWidth})
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

    return (
        <>
            <header>
                <nav className='nav'>
                    <form className='searchBar'>
                        <input 
                            type='search'
                            placeholder='Search for state or city...'
                        />
                        <button type='submit'></button>
                    </form>
                    <div style={styles} className='sidebar'>
                        <a href="javascript:void(0)" className="closebtn" onClick={closeMenu}>&times;</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Clients</a>
                        <a href="#">Contact</a>
                    </div>
                    <button className='Menu' onClick={openMenu}>
                        <svg 
                            className='hamburgerMenu'
                            width={windowWidth.width < 340 ? '30' : '40'}
                            height={windowWidth.width < 340 ? '30' : '40'}
                        >
                            <rect 
                                width={windowWidth.width < 340 ? '50' : '100'}
                                height={windowWidth.width < 340 ? '6' : '8'}
                            ></rect>
                            <rect
                                y={windowWidth.width < 340 ? '10' : '14'}
                                width={windowWidth.width < 340 ? '50' : '100'}
                                height={windowWidth.width < 340 ? '6' : '8'}
                                ></rect>
                            <rect
                                y={windowWidth.width < 340 ? '20' : '28'}
                                width={windowWidth.width < 340 ? '50' : '100'}
                                height={windowWidth.width < 340 ? '6' : '8'}
                            ></rect>
                        </svg>
                    </button>
                    <div className='menuList'>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Clients</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}