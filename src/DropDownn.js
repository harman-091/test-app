import {Button,Container, Dropdown} from 'react-bootstrap';

function DropDownn(){
    return (
        <div className='App'>
            <Container className='p-4'>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Places
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">India</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">UK</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">USA</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Canada</Dropdown.Item>
                        <Dropdown.Item href="#/action-5">Australia</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </div>
        
    );
}
export default DropDownn;