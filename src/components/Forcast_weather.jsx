import React, { useState } from 'react'
import './Styles/Forcast.css'
import axios from 'axios';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
// import Footer from './Footer';
function Forcast_weather() {

  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  // const [astronomyData, setAstronomyData] = useState([])

  const weatherHandle = async () => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
      params: {
        q: location,
        days: '3'
      },
      headers: {
        'x-rapidapi-key': '3d228e3e71msha620113ee3eb1bbp12d4cdjsnc76f93c2e363',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setWeatherData(await response.data);
    } catch (error) {
      console.error(error);
    }
  }
  

  return (
    <>
      {/* <div className="header"> */}
        {/* <h2 className={styles.h2}>WeatherWise</h2> */}
      {/* </div> */}
      <div className="container">

        <div className="search">
          <input placeholder="Enter location...."
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button type="submit" onClick={weatherHandle}>Go</button>
        </div>


        {/*                Fetching Data            */}
        {weatherData.length != 0 ?
          <>
            <div className='info'>
              <div className='sub-info'>
                <div className='header'>
                  <h3>{weatherData.location.name}  ({weatherData.location.region})</h3>
                </div>
                <hr />

                <div className='sub-info-cont'>
                  <div className='info-part-1'>
                    <div className='info-part-1-1'>
                      <img src={weatherData.current.condition.icon} alt="icon" height={80} />
                      <h4>{weatherData.current.condition.text}</h4>
                      <h5>{weatherData.current.temp_c}°C</h5>
                    </div>

                    <div className='info-part' style={{ padding: '1rem' }}>
                      <h6>Feels Like: {weatherData.current.feelslike_c} °C</h6>
                      <h6>Humidity: {weatherData.current.humidity} %</h6>
                      <h6>Updated: {weatherData.current.last_updated}</h6>
                    </div>
                  </div>

                  <div className='info-part'>
                    <h6>Heat Index: {weatherData.current.heatindex_c} °C</h6>
                    <h6>Wind Speed: {weatherData.current.wind_kph} km/h</h6>
                    <h6>Cloud: {weatherData.current.cloud} %</h6>
                    <h6>Wind Direction: {weatherData.current.wind_dir}</h6>
                  </div>
                </div>
              </div>

            </div>
            {/*       For getting forcasting details         */}
            <div className='forcast'>
              {weatherData.forecast.forecastday.map((values, index) => (
                <div key={index} className='forcast-cont'>
                  <div className='header'>
                    <h4 style={{ fontStyle: 'italic' }}>{values.date}</h4>
                  </div>
                  <hr />
                  <div className='forcast-cont-page'>
                    <div className='forcast-cont-page-left'>


                      <img src={values.day.condition.icon} height={80} />
                      <h4>{values.day.condition.text}</h4>
                      <h6>UV: {values.day.uv}</h6>
                      <h6>Max Temp: {values.day.maxtemp_c}</h6>
                      <h6>Min Temp: {values.day.mintemp_c}</h6>
                    </div>
                    <div className='forcast-cont-page-right'>

                      <h6>Rain: {values.day.daily_chance_of_rain}%</h6>
                      <h6>Wind: {values.day.maxwind_kph} kph</h6>
                      <h6>Sunrise: {values.astro.sunrise}</h6>
                      <h6>Sunset: {values.astro.sunset}</h6>
                      <h6>Moonrise: {values.astro.moonrise}</h6>
                      <h6>Moonset: {values.astro.moonset}</h6>
                    </div>
                  </div>


                  <hr />
                  <h4> Hourly Forcast</h4>
                  <hr />
                  {/*            For hourly forcasting           */}
                  {values.hour.map((value, index) => (
                    <div key={index}  >
                      <h4 style={{ fontStyle: 'italic' }}>{value.time}</h4>
                      <div className='hourly-forcast'>

                        <div>
                          <img src={value.condition.icon} height={60} />
                          <h5> {value.condition.text}</h5>
                          <h5> {value.temp_c} °C</h5>
                        </div>
                        <div>
                          <h6>Feels like: {value.feelslike_c} °C</h6>
                          <h6>Humidity: {value.humidity}</h6>
                          <h6>Wind: {value.wind_kph} kph</h6>
                          <h6>Rain: {value.chance_of_rain} %</h6>
                          <h6>Cloud: {value.cloud} %</h6>

                        </div>
                      </div>

                      <hr />
                    </div>
                  ))}

                </div>




              ))}
              <div>
              </div>
            </div>
          </>
          :

         
          // <div className="er">
          <div>
            {/* <p>Enter location for get info</p> */}
            <div className='info'>
              <div className='sub-info'>
                <div className='header'>
                  <h3> Enter location for get info </h3>
                </div>
                <hr />

                <div className='sub-info-cont'>
                  <div className='info-part-1'>
                    <div className='info-part-1-1'>
                    <Skeleton height={80} width={80} style={{opacity:'10%'}} />
                      {/* <img src="/" alt="icon" height={80} /> */}
                      <h4>----</h4>
                      <h5> -- °C</h5>
                    </div>

                    <div className='info-part' style={{ padding: '1rem' }}>
                      <h6>Feels Like:---- °C</h6>
                      <h6>Humidity: ---- %</h6>
                      <h6>Updated: ---- </h6>
                    </div>
                  </div>

                  <div className='info-part'>
                    <h6>Heat Index: ---- °C</h6>
                    <h6>Wind Speed: ---- km/h</h6>
                    <h6>Cloud: ---- %</h6>
                    <h6>Wind Direction: ----</h6>
                  </div>
                </div>
              </div>

            </div>
            {/* {weatherData.map((values, index) => {
              return <p key={index}>Enter location for get info</p>
            })} */}
            {/* <div>
              <Astronomy astronomyData = {getAstronomyData} />
            </div> */}

          </div>

        }

      </div>

      {/* <Footer/> */}
    </>
  )
}

export default Forcast_weather