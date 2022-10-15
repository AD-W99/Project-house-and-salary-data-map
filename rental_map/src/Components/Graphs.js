import React, { useEffect, useState } from 'react'
import './Graphs.css'

export default function Graphs() {
    const [slideIndex, setSlideIndex] = useState(1)

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
                <h2>Example Rental</h2>
                <ul className={slideIndex === 1 ? 'currentSlide' : 'slide'}>
                    <li>Studio</li>
                    <li>Maximum Price: </li>
                    <li>Median Price: </li>
                    <li>Minimum Price: </li>
                </ul>
                <ul className={slideIndex === 2 ? 'currentSlide' : 'slide'}>
                    <li>1-Bedroom</li>
                    <li>Maximum Price: </li>
                    <li>Median Price: </li>
                    <li>Minimum Price: </li>
                </ul>
                <ul className={slideIndex === 3 ? 'currentSlide' : 'slide'}>
                    <li>2-Bedroom</li>
                    <li>Maximum Price: </li>
                    <li>Median Price: </li>
                    <li>Minimum Price: </li>
                </ul>
                <ul className={slideIndex === 4 ? 'currentSlide' : 'slide'}>
                    <li>3-Bedroom</li>
                    <li>Maximum Price: </li>
                    <li>Median Price: </li>
                    <li>Minimum Price: </li>
                </ul>
                <a className='prev' onClick={() => changeSlide(-1)}>&#10094;</a>
                <a className='next' onClick={() => changeSlide(1)}>&#10095;</a>
            </div>
            <div>
                <h2>Example Job</h2>
                <ul>
                    <li>Location: </li>
                    <li>Maximum Salary: </li>
                    <li>Median Salary: </li>
                    <li>Minimum Salary: </li>
                </ul>
            </div>
        </div>
    )
}