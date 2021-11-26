import './Weather.css'
import axios from 'axios'
import WeatherApi from '../../utils/WeatherApi'
import { useState, useEffect } from 'react'
import moment from 'moment'
import Image from 'react-bootstrap/Image'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'

const Weather = () => {

  const [card, setCard] = useState(false)
  let [city, setCity] = useState('Big Bear')
  const [name, setName] = useState("Anaheim");
  
  useEffect(() => {


    weather(city)

  }, [])



  const weather = () => {
    let name = localStorage.getItem('city')
    
    WeatherApi.getLocalWeather(name)
      .then((res) => {
        setCard(res)
        console.log(res)
      })

  }


  const changeCity=(name)=> {
    
    localStorage.setItem('city',name)
    

}

  return (
    <>

      <div className='weatherContainer'>
        
        <OverlayTrigger
          trigger="click"
          key= 'bottom'
          placement='bottom'
          overlay={
            <Popover id={`popover-positioned'bottom`}>
              <Popover.Header as="h3">{`Popover bottom`}</Popover.Header>
              <Popover.Body>
                <form>

                  <input
                    type="text"
                    value={name}
                    className="cityContainer"
                    onChange={(e) => {
                      e.preventDefault()
                      setName(e.target.value)
                      changeCity(name)
                      weather(name)
                      console.log(name)

                    }}
                  />

                </form>
              </Popover.Body>
            </Popover>
          }
        >
          <h1>{name}</h1>
        </OverlayTrigger>


    
        <Image className="weatherIcon weather" src={card ? `http://openweathermap.org/img/w/${card.weather[0].icon}.png` : 'https://static.thenounproject.com/png/1103191-200.png'} />
        <p className=" weather">Temperature: {card ? card.main.temp : <></>}F
        </p>
        <p className="weather">Humidity: {card ? card.main.humidity : <></>}% </p>
      </div>

    </>


  )
}

export default Weather