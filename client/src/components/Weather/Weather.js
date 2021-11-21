import './Weather.css'
import axios from 'axios'
import WeatherApi from '../../utils/WeatherApi'
import { useState, useEffect } from 'react'
import moment from 'moment'
import Image from  'react-bootstrap/Image'

const Weather = () => {

  const [card, setCard] = useState(false)


  let city = 'Big Bear'
  useEffect(() => {


    weather()

  }, [])



  const weather = () => {
    console.log('getting weather info')
    WeatherApi.getLocalWeather(city)
      .then((res) => {
        setCard(res)
        console.log(card)
      })

  }




  return (
    <>

        <div className ='weatherContainer'>
        <h1 className='weatherHeader'>{city}</h1>
        <Image className="weatherIcon weather" src={card ? `http://openweathermap.org/img/w/${card.weather[0].icon}.png` : 'https://static.thenounproject.com/png/1103191-200.png'} />
          <p className=" weather">Temperature: {card ? card.main.temp : <></>}F
          </p>
          <p className="weather">Humidity: {card ? card.main.humidity : <></>}% </p>
        </div>

    </>
    

  )
}

export default Weather