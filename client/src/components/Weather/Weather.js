import './Weather.css'
import WeatherApi from '../../utils/WeatherApi'
import { useState, useEffect } from 'react'
import Image from 'react-bootstrap/Image'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import { InputGroup, FormControl } from 'react-bootstrap/'
const Weather = () => {
  if(!localStorage.getItem('city')){
    localStorage.setItem('city', 'Anaheim')
  }
  const [card, setCard] = useState(false)
  let [city, setCity] = useState( localStorage.getItem('city') )
  const [name, setName] = useState(localStorage.getItem('city'));
  
  useEffect(() => {
    weather(city)
    console.log("Search message inside useEffect: ", name);
  }, [name])



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

const handleChange =(e)=>{
  e.persist()
  let name = e.target.value
  setName(name)
  changeCity(name)
  weather(name)
  console.log(name)
}


  return (
    <>

      <div className='weatherContainer'>
        
        <OverlayTrigger
          rootClose
        target
          trigger="click"
          key= 'bottom'
          placement='bottom'
             
          overlay={
            <Popover id={`popover-positioned'bottom`}>
              <Popover.Header as="h3">{`Change City`}</Popover.Header>
              <Popover.Body>
                
                <InputGroup className="mt-2">
                  <FormControl
                    placeholder="Add new task"
                    aria-label="task"
                    aria-describedby="task"
                    name='city'
                    value={name}
                    onChange={(e) => {
                      handleChange(e)

                    }}
                    
                  />
                  

                </InputGroup>


                
              </Popover.Body>
            </Popover>
          }
        >
          <h1 className='cityTitle'>{name}</h1>
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