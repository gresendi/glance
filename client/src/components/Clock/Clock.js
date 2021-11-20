import './Clock.css'
import Col from 'react-bootstrap/Col'
import { useState, useEffect } from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Clock = () =>{

  const [clock, setClock] = useState(moment().format('LT'));

  useEffect(() => {
    setInterval(() => {
      setClock(moment().format('LT'));
      console.log('getting time')
    }, 30000);
  }, []);




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