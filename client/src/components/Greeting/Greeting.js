import './Greeting.css'
import Col from 'react-bootstrap/Col'



const Greeting = ({name}) =>{



  return (
     <Col
      md="auto"
      className='greeting'
    >
    
      <h1>Hello {name}</h1>


    </Col>
    
  )
}

export default Greeting