import React from 'react'
import './landing.css'
import { Link } from 'react-router-dom'
import { HiArrowLongRight } from 'react-icons/hi2'
const LandingPage = () => {
  return (

    
<div className='container' >
        <div className=' title'>
            <h2 >Know when to expect a change in the weather conditions</h2>
            

        </div>
        <div className='img-container'>
            <img
            className='img'
            src="/static/images/cloud.png" alt="" />
        </div>

        <div className='btn'>
        <Link to='/weatherapp' className="">
                  <HiArrowLongRight className='icon'></HiArrowLongRight>

        </Link>
        </div>
    </div>

   
  )
}

export default LandingPage