import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';


export default function Login() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Card>
          <Card.Header>Login</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              <Dropdown>
                <Dropdown.Toggle variant="Info" id="dropdown-basic">
                  Choose Profile
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">One</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Two</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Three</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Text>
            <Button variant="primary">Login</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
