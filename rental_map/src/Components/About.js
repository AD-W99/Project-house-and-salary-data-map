import React from 'react'
import './About.css'

export default function About() {
    return (
        <div className='about_wrapper'>
        <h2>About</h2>
        <div className='text_container'>
            <p>
                Hello! Welcome to my rental map project.
                I created this project because I wanted to
                search for the price of apartments in states
                or cities and search for the salary I can get
                in that area. So, if you search for a state or
                city and then type in a job title, my site will
                display the maximum, minimum, and median prices
                for apartments as well as the kind of salary you
                can expect from your chosen job title in that area.
            </p>
            <p>I plan on implementing the following features in the future:</p>
            <ul>
                <li>Create an account to save your search history</li>
                <li>Use the D3.js library to display searched data in graphics i.e bar chart</li>
                <li>Allow the user to search for rental prices by zipcode and neighborhood</li>
                <li>Display actual listings for apartments</li>
                <li><b>And many more!</b></li>
            </ul>
        </div>
        </div>
    )
}