import React from 'react'
import './landing.css'
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (

    
<div className='container' >
        <div className=' '>
            <h2 className=''>Let's Predict the conditions of the atmosphere</h2>
            <p className=''>Know when to expect a change in the weather conditions</p>

        </div>
        <div className='img-container'>
            <img
            className='img'
            src="src/assets/weather.png" alt="" />
        </div>

        <div className='btn'>
        <Link to='/weatherapp' className="link">
                 <h3>NEXT</h3>

        </Link>
        </div>
    </div>

   
  )
}

export default LandingPage