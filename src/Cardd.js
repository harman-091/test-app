import {Button,Container,Card,Col} from 'react-bootstrap';
function Cardd(){
    return (
        <div className='App'>
            <Container>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" style={{height:'400px',width:'1250px'}}/>
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