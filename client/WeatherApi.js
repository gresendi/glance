import axios from 'axios'



const WeatherApi = {
  
  

  getLocalWeather: (city) => {

    let weatherData = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},us&units=imperial&appid=f0f53dca921e411cb0c59f4206e79a70`)
    .then(({data})=>{
     return data
    })
    return weatherData
  }
  
  
  



}

export default WeatherApi