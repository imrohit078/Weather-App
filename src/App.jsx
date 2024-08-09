import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Forcast_weather from './components/Forcast_weather'
import Navbaar from './components/Navbaar';
import { Route, Routes } from 'react-router-dom';
// import Footer from './components/Footer';
import Home from './components/Home';
// import Astronomy from './components/Astronomy';
function App() {
  return (
    <>
    <Navbaar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/forcast_weather_data' element={<Forcast_weather/>}/>
      {/* <Route path='/astronomy' element={<Astronomy/>}/> */}
    </Routes>

    
   

      
    </>
  )
}

export default App
