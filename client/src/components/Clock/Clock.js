import './Clock.css'
import Col from 'react-bootstrap/Col'
import { useState, useEffect } from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Clock = () =>{

  const [clock, setClock] = useState([]);

  useEffect(() => {

    setClock(moment().format('LT'))
    setInterval(update, 6000)
  });

  const update = () => {
    setClock(moment().format('LT'))
    console.log('updating')
  }


  return (
    <Col
      md="auto"
      className='clock'
    >
      {clock}
      <FontAwesomeIcon icon={faCoffee}/>
      


    </Col>
  )
}

export default Clock