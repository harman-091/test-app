import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function Calculator() {

  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [operator, setOperator] = useState("");
  const [display, setDisplay] = useState("");

  // Number button clicked
  function handleNumber(value) {
    if (operator === "") {
      setFirstNum(firstNum + value);
      setDisplay(firstNum + value);
    } else {
      setSecondNum(secondNum + value);
      setDisplay(secondNum + value);
    }
  }

  // Operator button clicked
  function handleOperator(op) {
    if (firstNum !== "") {
      setOperator(op);
      setDisplay(op);
    }
  }

  // Calculate result
  function calculateResult() {
    let result = 0;

    const num1 = Number(firstNum);
    const num2 = Number(secondNum);

    if (operator === "+") result = num1 + num2;
    if (operator === "-") result = num1 - num2;
    if (operator === "*") result = num1 * num2;
    if (operator === "/") result = num2 !== 0 ? num1 / num2 : "Error";

    setDisplay(result.toString());

    // Reset for next calculation
    setFirstNum(result.toString());
    setSecondNum("");
    setOperator("");
  }

  // Clear all
  function clearAll() {
    setFirstNum("");
    setSecondNum("");
    setOperator("");
    setDisplay("");
  }

  return (
    <Container className="mt-4 p-3 border rounded" style={{ maxWidth: "300px" }}>
      <h3 className="text-center">Calculator</h3>

      <Form.Control
        value={display}
        readOnly
        className="mb-3 text-end"
        placeholder="0"
      />

      <Row className="g-2">
        {[1,2,3].map(n => (
          <Col xs={3} key={n}>
            <Button className="w-100" onClick={() => handleNumber(n.toString())}>{n}</Button>
          </Col>
        ))}
        <Col xs={3}><Button variant="warning" onClick={() => handleOperator("+")}>+</Button></Col>

        {[4,5,6].map(n => (
          <Col xs={3} key={n}>
            <Button className="w-100" onClick={() => handleNumber(n.toString())}>{n}</Button>
          </Col>
        ))}
        <Col xs={3}><Button variant="warning" onClick={() => handleOperator("-")}>-</Button></Col>

        {[7,8,9].map(n => (
          <Col xs={3} key={n}>
            <Button className="w-100" onClick={() => handleNumber(n.toString())}>{n}</Button>
          </Col>
        ))}
        <Col xs={3}><Button variant="warning" onClick={() => handleOperator("*")}>*</Button></Col>

        <Col xs={3}><Button variant="danger" onClick={clearAll}>C</Button></Col>
        <Col xs={3}><Button onClick={() => handleNumber("0")}>0</Button></Col>
        <Col xs={3}><Button variant="success" onClick={calculateResult}>=</Button></Col>
        <Col xs={3}><Button variant="warning" onClick={() => handleOperator("/")}>/</Button></Col>
      </Row>
    </Container>
  );
}

export default Calculator;