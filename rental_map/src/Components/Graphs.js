import { useState, useEffect } from 'react'
import './Graphs.css'

export default function Graphs({address, job}) {
    const [slideIndex, setSlideIndex] = useState(1)

    console.log(address)
 
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '567cdadf71msh2c219447499877dp105458jsnc7213bf158b2',
    //         'X-RapidAPI-Host': 'mashvisor-api.p.rapidapi.com'
    //     }
    // }
    
    // useEffect(() => {
    //     fetch(`https://mashvisor-api.p.rapidapi.com/rental-rates?state=${}&source=traditional`, options)
    //         .then(response => response.json())
    //         .then(response => console.log(response))
    //         .catch(err => console.error(err))
    // }, [address])

    function changeSlide(num) {
        setSlideIndex(prevState => {
            if (prevState === 4 && num === 1) {
                return 1
            }
            if (prevState === 1 && num === -1) {
                return 4
            }

            return prevState + num
        })
    }

    return (
        <div className='graphs_wrapper'>
            <div className='slideShow'> 
                <h2>Rental Info</h2>
                <ul className={slideIndex === 1 ? 'currentSlide' : 'slide'}>
                    <li><b>Studio</b></li>
                    <li>Max Price: </li>
                    <li>Median Price: </li>
                    <li>Min Price: </li>
                </ul>
                <ul className={slideIndex === 2 ? 'currentSlide' : 'slide'}>
                    <li><b>1-Bedroom</b></li>
                    <li>Max Price: </li>
                    <li>Median Price: </li>
                    <li>Min Price: </li>
                </ul>
                <ul className={slideIndex === 3 ? 'currentSlide' : 'slide'}>
                    <li><b>2-Bedroom</b></li>
                    <li>Max Price: </li>
                    <li>Median Price: </li>
                    <li>Min Price: </li>
                </ul>
                <ul className={slideIndex === 4 ? 'currentSlide' : 'slide'}>
                    <li><b>3-Bedroom</b></li>
                    <li>Max Price: </li>
                    <li>Median Price: </li>
                    <li>Min Price: </li>
                </ul>
                <a className='prev' onClick={() => changeSlide(-1)}>&#10094;</a>
                <a className='next' onClick={() => changeSlide(1)}>&#10095;</a>
            </div>
            <div>
                <h2>Job Info</h2>
                <ul>
                    <li>Location: </li>
                    <li>Max Salary: </li>
                    <li>Median Salary: </li>
                    <li>Min Salary: </li>
                </ul>
            </div>
        </div>
    )
}