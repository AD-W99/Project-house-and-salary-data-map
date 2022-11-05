import { useState, useEffect, useRef } from 'react'
import './Graphs.css'

export default function Graphs({address, job}) {
    const [slideIndex, setSlideIndex] = useState(1)
    const didFirstRender_Adress = useRef(false)
    const didFirstRender_Job = useRef(false)
    const [rentalsArray, setRentalsArray] = useState([])
    const [hasRentals, setHasRentals] = useState(false)
    const [jobsArray, setJobsArray] = useState([])
    const [hasJob, setHasJob] = useState(false)
 
    const adressOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '567cdadf71msh2c219447499877dp105458jsnc7213bf158b2',
            'X-RapidAPI-Host': 'mashvisor-api.p.rapidapi.com'
        }
    }

    const jobOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '567cdadf71msh2c219447499877dp105458jsnc7213bf158b2',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    }
    useEffect(() => {
        if (didFirstRender_Adress.current) {
            console.log("made it - address")
            fetch(address, adressOptions)
            .then(response => response.json())
            .then(response => {
                setRentalsArray(response.content.detailed)
                setHasRentals(prevState => !prevState)
            })
            .catch(err => console.error(err))
        } else {
            didFirstRender_Adress.current = true
        }
    }, [address])

    useEffect(() => {
        if (didFirstRender_Job.current) {
            console.log("made it - job")
            let jobTitle = job[0]
            let location = job[1]

            if (location) {
                if (location.includes(' ')) {
                    location = location.replace(' ', '%20')
                }
    
                if (location.includes(',')) {
                    location = location.replace(',', '%2C')
                }
            }

            let endpoint = `https://jsearch.p.rapidapi.com/estimated-salary?job_title=${jobTitle}&location=${location}&radius=50`
            fetch(endpoint, jobOptions)
                .then(response => response.json())
                .then(response => {
                    setJobsArray(response.data)
                    setHasJob(prevState => !prevState)
                })
                .catch(err => console.error(err))
        } else {
            didFirstRender_Job.current = true
        }
    }, [job])

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
                    <li><b>Max Price:</b> ${hasRentals ? rentalsArray[0]?.max : rentalsArray[0]?.max}</li>
                    <li><b>Median Price:</b> ${hasRentals ? rentalsArray[0]?.median : rentalsArray[0]?.median}</li>
                    <li><b>Min Price:</b> ${hasRentals ? rentalsArray[0]?.min : rentalsArray[0]?.min}</li>
                </ul>
                <ul className={slideIndex === 2 ? 'currentSlide' : 'slide'}>
                    <li><b>1-Bedroom</b></li>
                    <li><b>Max Price:</b> ${hasRentals ? rentalsArray[1]?.max : rentalsArray[1]?.max}</li>
                    <li><b>Median Price:</b> ${hasRentals ? rentalsArray[1]?.median : rentalsArray[1]?.median}</li>
                    <li><b>Min Price:</b> ${hasRentals ? rentalsArray[1]?.min : rentalsArray[1]?.min}</li>
                </ul>
                <ul className={slideIndex === 3 ? 'currentSlide' : 'slide'}>
                    <li><b>2-Bedroom</b></li>
                    <li><b>Max Price:</b> ${hasRentals ? rentalsArray[2]?.max : rentalsArray[2]?.max}</li>
                    <li><b>Median Price:</b> ${hasRentals ? rentalsArray[2]?.median : rentalsArray[2]?.median}</li>
                    <li><b>Min Price:</b> ${hasRentals ? rentalsArray[2]?.min : rentalsArray[2]?.min}</li>
                </ul>
                <ul className={slideIndex === 4 ? 'currentSlide' : 'slide'}>
                    <li><b>3-Bedroom</b></li>
                    <li><b>Max Price:</b> ${hasRentals ? rentalsArray[3]?.max : rentalsArray[3]?.min} </li>
                    <li><b>Median Price:</b> ${hasRentals ? rentalsArray[3]?.median : rentalsArray[3]?.min}</li>
                    <li><b>Min Price:</b> ${hasRentals ? rentalsArray[3]?.min : rentalsArray[3]?.min}</li>
                </ul>
                <a className='prev' onClick={() => changeSlide(-1)}>&#10094;</a>
                <a className='next' onClick={() => changeSlide(1)}>&#10095;</a>
            </div>
            <div>
                <h2>Job Info</h2>
                <ul className='jobInfoList'>
                    <li><b>Job Title:</b> {hasJob ? jobsArray[0]?.job_title : jobsArray[0]?.job_title}</li>
                    <li><b>Location:</b> {hasJob ? jobsArray[0]?.location : jobsArray[0]?.location}</li>
                    <li><b>Max Salary:</b> ${hasJob ? jobsArray[0]?.max_salary : jobsArray[0]?.max_salary}</li>
                    <li><b>Median Salary:</b> ${hasJob ? jobsArray[0]?.median_salary : jobsArray[0]?.median_salary}</li>
                    <li><b>Min Salary:</b> ${hasJob ? jobsArray[0]?.min_salary : jobsArray[0]?.min_salary}</li>
                </ul>
            </div>
        </div>
    )
}