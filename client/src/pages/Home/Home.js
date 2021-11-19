
import './Home.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Home.css'
const Home = () => {


  return (
    <Container fluid className='box'>
      <Row className='top-row'>
        <Col sm={4}>
          let-top
        </Col>
        <Col sm={4}>
          middle-top
        </Col>
        <Col sm={4}>
          right-top
        </Col>
      </Row>
      <Row className='top-center'>
        
      </Row>
      <Row className='center'>
        
        <Col md="auto">Clock goes here</Col>
      </Row>
      <Row className='bottom-center'>
        bottom-center
      </Row>
      <Row className='bottom-row'>
        bottom-row
      </Row>




    </Container>
  )
}

export default Home
