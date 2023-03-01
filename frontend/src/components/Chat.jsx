import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, message]);
    setMessage("");
  };

  return (
    <Container fluid>
      <Row>
        <Col md={4} className="border-right">
          <h4>ChatGPT</h4>
          <hr />
          <ul className="list-unstyled">
            {messages.map((msg, idx) => (
              <li key={idx}>{msg}</li>
            ))}
          </ul>
        </Col>
        <Col md={8}>
          <Form onSubmit={handleSendMessage}>
            <Form.Group controlId="message">
              <Form.Control
                type="text"
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Chat;
