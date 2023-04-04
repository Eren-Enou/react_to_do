import React, { useState } from 'react';
import Nav from './components/Nav';
import Form from './components/Form';
import ToDoCard from './components/To-Do_Card';
import ToDoDisplay from './components/To-Do_Display';


function App() {
  let name = 'Eren';

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <Nav username={name} city={"Cotati"}/>
      <Form addTask={addTask} />
      {tasks.map((task, index) => (
        <ToDoCard key={index} task={task} />
      ))}
    </div>
  );
}

export default App;