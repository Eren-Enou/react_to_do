import React, { useState } from 'react';
import Nav from './components/Nav';
import Form from './components/Form';
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
      <div>
        <h1>Tasks!</h1>
      </div>
      <ToDoDisplay tasks={tasks} />
    </div>
  );
}

export default App;