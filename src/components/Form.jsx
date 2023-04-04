import React, { useState } from 'react';

const Form = ({ addTask }) => {
    const [inputValue, setInputValue] = useState('');  

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(inputValue);
        setInputValue('');
};

return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;