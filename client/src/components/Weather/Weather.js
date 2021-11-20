import './Weather.css'
import axios from 'axios'
import WeatherApi from '../../utils/WeatherApi'
import { useState, useEffect } from 'react'
import moment from 'moment'

const Weather = () => {

  const [card, setCard] = useState(false)


  let city = 'Anaheim'
  useEffect(() => {


    weather()

  }, [])



  const weather = () => {
    WeatherApi.getLocalWeather(city)
      .then((res) => {
        setCard(res)
        console.log(card)
      })

  }




  return (
    <>
      <h1 className = 'weather'>Weather</h1>
      <div className="card-body">

        <p className=" weather">Temperature: {card?card.main.temp:<></> }F
        </p>
        <p className="card-text weather">Humidity: {card ? card.main.humidity : <></> }% </p>

      </div>

    </>

  )
}

export default Weather