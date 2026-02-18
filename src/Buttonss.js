import Button from 'react-bootstrap/Button';

function Buttonss(){
    return (
        <div>
            <Button variant="primary" size='lg'>Click Me</Button>
            <Button variant="secondary" size='sm' disabled>Click Me</Button>
            <Button variant="success">Click Me</Button>
            <Button variant="danger" disabled>Click Me</Button>
            <Button variant="warning">Click Me</Button>
            <Button variant="info">Click Me</Button><br></br>
            <Button variant="outline-primary" size='lg'>Click Me</Button>
            <Button variant="outline-secondary" size='sm' disabled>Click Me</Button>
            <Button variant="outline-success">Click Me</Button>
            <Button variant="outline-danger" disabled>Click Me</Button>
            <Button variant="outline-warning">Click Me</Button>
            <Button variant="outline-info">Click Me</Button>
        </div>
    );
}
export default Buttonss;