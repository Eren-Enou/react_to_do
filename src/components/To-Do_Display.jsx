import React from 'react';
import ToDoCard from './To-Do_Card';


const ToDoDisplay = ({ tasks }) => {
  return (
    <div className='card-list'>
      {tasks.map((task, index) => (
        <ToDoCard key={index} task={task} />
      ))}
    </div>
  );
};

export default ToDoDisplay;