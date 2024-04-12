import React, { useState } from 'react';
import TodoList from './TodoList';

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
  ]);
  const [filter, setFilter] = useState('all');

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleToggleAllComplete = () => {
    const allCompleted = todos.every(todo => todo.completed);
    const updatedTodos = todos.map(todo => ({ ...todo, completed: !allCompleted }));
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <input type="text" />
      <button>Add Todo</button>
      <button onClick={handleToggleAllComplete}>Toggle All Complete</button>
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleComplete={handleToggleComplete} />
      <div>
        <button onClick={() => handleFilterChange('all')}>All</button>
        <button onClick={() => handleFilterChange('active')}>Active</button>
        <button onClick={() => handleFilterChange('completed')}>Completed</button>
      </div>
    </div>
  );
}

export default TodoApp;