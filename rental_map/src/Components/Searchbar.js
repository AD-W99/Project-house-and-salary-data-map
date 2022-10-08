import React from 'react'
import useInput from './Hooks/useInput'

export default function Searchbar() {
    const searchResults = useInput('')
    return (
        <div className='searchbar_wrapper'>
            <input
                type='search'
                placeholder='Search for U.S. state or city...'
                {...searchResults}
            />
            {searchResults.results?.length > 0 && (
                <div>{searchResults.results.map((result, index) => {
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
    )
}