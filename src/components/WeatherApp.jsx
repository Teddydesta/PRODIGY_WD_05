import React, { useState } from 'react'
// import {useFormik} from 'formik'

import './weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.jpg'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rainy.png'
import wind_icon from '../assets/wind.png'
import snow_icon from '../assets/snow.png'
const WeatherApp = () => {
  // const {handleChange,values,touched,isSubmitting,handleBlur,handleSubmit,errors}=useFormik({
  //   initialValues: {
  //     location: ""
  //   },
  //   onsubmit: values=>{
  //     console.log('wait a sec')
  //   }
  // });
  let api_key="11cc9a451a4a09da6a7929e404bae6d3 ";
  const [weatherIcon, setWeatherIcon] = useState(cloud_icon);
  // const [location, setLocation]=useState("Addis Ababa");
  // const [error, setError] =useState(null);

  const search=async ()=>{
    
   try{
    const element=document.getElementsByClassName("input");
    if (element[0].value===""){
      if(element[0].value!==element[0].value){
        return ()=>console.log("Input empty!");
      }

    }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data=await response.json();
    //
    const humidity=document.getElementsByClassName("humidity-percent")
    const wind=document.getElementsByClassName("humidity-rate")
    const temp=document.getElementsByClassName("wheather-temp")
    const location=document.getElementsByClassName("location")

//
    humidity[0].innerHTML=Math.floor(data.main.humidity)+ " %"
    wind[0].innerHTML=Math.floor(data.wind.speed)
    temp[0].innerHTML=Math.floor(data.main.temp)
    location[0].innerHTML=data.name

    //
    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
      setWeatherIcon(clear_icon)
    }else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
      setWeatherIcon(cloud_icon)
    }else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
      setWeatherIcon(drizzle_icon)
    }else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
      setWeatherIcon(drizzle_icon)
    } else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
      setWeatherIcon(rain_icon)
    }else if(data.weather[0].icon==="010d" || data.weather[0].icon==="010n"){
      setWeatherIcon(rain_icon)
    }else if(data.weather[0].icon==="013d" || data.weather[0].icon==="013n"){
      setWeatherIcon(snow_icon)
    }else{
      setWeatherIcon(clear_icon)
    }
    //
    console.log(humidity[0].innerHTML=data.main.humidity)
    console.log(wind[0].innerHTML=data.wind.speed)
    console.log( location[0].innerHTML=data.name)

    //
    console.log(data.weather[0].icon);

   }catch(e){
    // setError(err)
   return console.log(err)
   }


  }
  return (
    <div className='container'>
<center>      <h2 className='title'>Wheather Forecast</h2>
</center>      {/* Top search bar */}
        <div className='search-input'>
            <input 
            placeholder='search'
            type="text" className='input ' />

     
        <div className='search' onClick={()=>search()}>
            <img src={search_icon} alt="" className='search-icon'/>
            </div>
        </div>
        <div className='wheather-container'>
        
      <div className='temp-loc'>
        <h3 className='text'>Today</h3>
        <hr className='hr' />
          {/* weather Temprature */}
          <div className='wheather-temp'></div>
        {/* Location */}
        <div className='location'></div>
      </div>

        <div className='wheather-img'>
          <img
          className='wheather-icon'
          src={weatherIcon}alt="" />

        </div>
        </div>
        {/* wheather Information */}
       <div className='info-container'>
       <div className='info'>
        <img src={humidity_icon} alt="" className='humidity-icon'/>
       <div className='data'>
          <div className='humidity-percent'></div>
          <div className='text'>Humidity</div>
           
        </div>
       </div>
       <div className='info'>
        <img src={wind_icon} alt="" className='wind-icon' />
       <div className='data'>
          <div className='humidity-rate'></div>
          <div className='text'>Wind Speed</div>
           
        </div>
       </div>
       </div>
    </div>
  )
}

export default WeatherApp