import axios from 'axios'

let city = 'Anaheim'
let weather

const WeatherApi = {
  
  

  getLocalWeather: (city) => axios.get(`/api/weather/city`,city)
  



}

export default WeatherApi