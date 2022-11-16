import { Container, Row, Col, Button } from 'react-bootstrap';

const intro = () => {
    return(
        <div className='intro'>
        <Container className='text-white d-flex text-center justify-content-center
        align-items-center '>
          <Row>
            <Col>
            <div className='title'> FREE MOVIES </div>
            <div className='title'> WITHOUT PAY </div>
            <div className='introButton mt-4 text-center'></div>
            <Button variant='dark'> See All The List </Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default intro