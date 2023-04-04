import React from 'react';
import Card from 'react-bootstrap/Card';

const ToDoCard = ({ task }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{task}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ToDoCard;