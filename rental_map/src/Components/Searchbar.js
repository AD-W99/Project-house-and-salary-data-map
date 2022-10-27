import React, { useState, useRef } from 'react'
import useInput from './Hooks/useInput'
import StateSelector from './StateSelector'
import './Searchbar.css'

export default function Searchbar({ setMapCoordinates, setAddress, setJob }) {
    const searchResults = useInput('')
    const [leftSearch, setLeftSearch] = useState(false)
    const leftInput = useRef(null)
    const rightInput = useRef([null, null])

    function handleLeftSearch(e) {
        if (e.target.value) {
            setLeftSearch(true)
        } else {
            setLeftSearch(false)
        }
    }

    function handleBtnClick() {
        if (leftInput.current.value === '' || rightInput.current.value === '') {
            alert("Please fill out both searchbars!")
        } else {
            setAddress(() => StateSelector(leftInput.current.value))
            setJob([rightInput.current.value, leftInput.current.value])
        }
    }

    return (
        <div className='main_search_controls'>
            <div className='searchbars_wrapper'>
                <div className='left_searchbar'>
                    <input
                        ref={leftInput}
                        onInput={handleLeftSearch}
                        className={leftSearch ? 'current_search' : 'place_search'}
                        type='search'
                        placeholder='Search for U.S. state or city'
                        {...searchResults}
                    />
                    {searchResults.results?.length > 0 && (
                        <div className='searchResults_wrapper'>{searchResults.results.map((result, index) => {
                            return <li
                                    key={index}
                                    onClick={() => {
                                        searchResults.setValue(result.place_name)
                                        setMapCoordinates({
                                            longitude: searchResults.results[index].center[0],
                                            latitude: searchResults.results[index].center[1],
                                            zoom: 9
                                        })
                                        searchResults.setResults([])
                                    }}
                                    >{result.place_name}</li>
                        })}</div>
                    )}
                </div>
                <div className='right_searchbar'>
                    <input
                        ref={rightInput}
                        className='place_search'
                        type='search'
                        placeholder='Search for job title'
                    />
                </div>
            </div>
            <button className='search_btn' onClick={handleBtnClick}>Search</button>
        </div>
    )
}