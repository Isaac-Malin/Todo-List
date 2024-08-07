import './App.css';
import { useState } from 'react';
import TodoList from './Components/TodoList';
import TodoCard from './Components/TodoCard';
import TodoInput from './Components/TodoInput';

function App() {

  
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
      <TodoCard />
    </div>
  );
}

export default App;
