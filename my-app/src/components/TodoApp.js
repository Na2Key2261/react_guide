import React, { useState } from 'react';
import TodoList from './TodoList';

function TodoApp() {
    const [todos, setTodos] = useState([
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Build a Todo App', completed: false },
    ]);
  
    const handleToggleComplete = (id) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    };
  
    return (
      <div className="todo-app">
        <h1>Todo App</h1>
        <input type="text" />
        <button>Add Todo</button>
        <TodoList todos={todos} onToggleComplete={handleToggleComplete} />
      </div>
    );
  }
  

export default TodoApp;