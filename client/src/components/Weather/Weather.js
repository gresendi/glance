import './Weather.css'
import axios from 'axios'
import WeatherApi from '../../utils/WeatherApi'

const Weather = () => {

  const weather = {...WeatherApi.getLocalWeather()}
  console.log(weather)
  
  return (

    <h1>Weather</h1>
    
  )
}

export default Weather