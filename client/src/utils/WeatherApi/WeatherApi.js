import axios from 'axios'

let city = 'Anaheim'
let weather

const WeatherApi = {
  
  

  getLocalWeather: _ => {
    
    
    
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},us&units=imperial&appid=f0f53dca921e411cb0c59f4206e79a70`)
  .then(res=>{
    
    weather = res.data
    console.log(weather)
    return res.data
  })
 
}



}

export default WeatherApi