import React, { useState } from 'react'
import useInput from './Hooks/useInput'
import './Searchbar.css'

export default function Searchbar() {
    const searchResults = useInput('')
    const [leftSearch, setLeftSearch] = useState(false)
    const [rightSearch, setRightSearch] = useState(false)

    function handleLeftSearch(e) {
        if (e.target.value) {
            setLeftSearch(true)
        } else {
            setLeftSearch(false)
        }
    }

    function handleRightSearch(e) {
        if (e.target.value) {
            setRightSearch(true)
        } else {
            setRightSearch(false)
        }
    }

    return (
        <div className='main_search_controls'>
            <div className='searchbars_wrapper'>
                <div className='left_searchbar'>
                    <input
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
                                        searchResults.setResults([])
                                    }}
                                    >{result.place_name}</li>
                        })}</div>
                    )}
                </div>
                <div className='right_searchbar'>
                    <input
                        onInput={handleRightSearch}
                        className={rightSearch ? 'current_search' : 'place_search'}
                        type='search'
                        placeholder='Search for job title'
                    />
                </div>
            </div>
            <button className='search_btn'>Search</button>
        </div>
    )
}