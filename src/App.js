import React, { useState } from 'react';
import Nav from './components/Nav';
import Form from './components/Form';
import ToDoDisplay from './components/To-Do_Display';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  let name = 'Eren';

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <Nav username={name} city={"Cotati"}/>
      
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col md={6}>
            <Form addTask={addTask} />
          </Col>
        </Row>
        <Row className="justify-content-center">
        <Col md={8}>
          <div><h1>Tasks!</h1></div>
          <ToDoDisplay tasks={tasks} />
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;