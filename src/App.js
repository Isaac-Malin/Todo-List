import './App.css';
import { useState } from 'react';
import TodoList from './Components/TodoList';
import TodoInput from './Components/TodoInput';

function App() {

  const [todos, setTodos] = useState([
    'Kiss Brooke'
  ])

  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  } 

  return (
    <div className="App">
      <TodoInput handleAddTodo={handleAddTodo}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
