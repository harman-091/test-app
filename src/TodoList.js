import React, { useState } from 'react';
import { Container, Form, Button, ListGroup, Row, Col } from 'react-bootstrap';

function TodoList() {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);

    const handleAdd = () => {
        if (task.trim()) {
            setTodos([...todos, task]);
            setTask('');
        }
    };

    const handleDelete = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <Container className="mt-4 p-3 border rounded" style={{ maxWidth: '500px' }}>
            <h3 className="text-center mb-3">To-Do List</h3>
            <Row className="mb-3">
                <Col xs={9}>
                    <Form.Control
                        type="text"
                        placeholder="Enter a task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
                    />
                </Col>
                <Col xs={3}>
                    <Button variant="primary" onClick={handleAdd} className="w-100">Add</Button>
                </Col>
            </Row>
            <ListGroup>
                {todos.map((todo, index) => (
                    <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                        {todo}
                        <Button variant="danger" size="sm" onClick={() => handleDelete(index)}>Delete</Button>
                    </ListGroup.Item>
                ))}
                {todos.length === 0 && <p className="text-center text-muted mt-2">No tasks yet!</p>}
            </ListGroup>
        </Container>
    );
}

export default TodoList;