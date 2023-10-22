import { useState } from 'react'
import './App.css'
import WeatherApp from './components/WeatherApp'
import LandingPage from './components/LandingPage'
import {Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
 <Route path='/' element={<LandingPage />}/>
 <Route path='/weatherapp' element={<WeatherApp />}/>
    </Routes>
  )
}

export default App
