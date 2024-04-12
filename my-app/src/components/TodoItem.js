import React from 'react';


function TodoItem({ todo, onToggleComplete }) {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
        />
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      </div>
    );
  }

export default TodoItem;
