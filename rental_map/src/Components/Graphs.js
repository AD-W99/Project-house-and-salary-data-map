import React from 'react'
import './Graphs.css'


export default function Graphs() {

    return (
        <div className='graphs_wrapper'>
            <div> 
            {/* Turn this into carousel */}
                <h2>Example Rental</h2>
                <ul>
                    <li>Studio</li>
                    <li>Maximum Price: </li>
                    <li>Median Price: </li>
                    <li>Minimum Price: </li>
                </ul>
                <ul>
                    <li>1-Bedroom</li>
                    <li>Maximum Price: </li>
                    <li>Median Price: </li>
                    <li>Minimum Price: </li>
                </ul>
                <ul>
                    <li>2-Bedroom</li>
                    <li>Maximum Price: </li>
                    <li>Median Price: </li>
                    <li>Minimum Price: </li>
                </ul>
                <ul>
                    <li>3-Bedroom</li>
                    <li>Maximum Price: </li>
                    <li>Median Price: </li>
                    <li>Minimum Price: </li>
                </ul>
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