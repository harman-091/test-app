import {Button,Container,Card,Row,Col} from 'react-bootstrap';
import img1 from './12.png';
function Cardd(){
    return (
        <div className='App'>
            <Container>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img1} style={{height:'400px',width:'1250px'}}/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    
                </Col>
            </Container>
        </div>
        
    );
}
export default Cardd;