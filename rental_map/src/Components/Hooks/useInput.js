import { useState } from "react";

export default function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)
    const [results, setResults] = useState([])
    const MAP_TOKEN = 'pk.eyJ1IjoiYWxleC13b29kIiwiYSI6ImNsOHN1YXB0czAwa3Mzd21udTI0MGhkMTAifQ.LNlWCNJrzBkvswp_-IKCkg'

    const handleChange = async (e) => {
        setValue(e.target.value)

        try {
            const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${e.target.value}.json?country=us&types=place%2Cregion&autocomplete=true&access_token=${MAP_TOKEN}`
            const response = await fetch(endpoint)
            const suggestions = await response.json()
            setResults(suggestions?.features)
        } catch (error) {
            console.log('Error fetching data', error)
        }
    }

    return {
        value,
        setValue,
        onChange: handleChange,
        results,
        setResults
    }
}