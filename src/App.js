import './App.css';
import { useState } from 'react';
import TodoList from './Components/TodoList';
import TodoInput from './Components/TodoInput';

function App() {

  const [todos, setTodos] = useState([
    'Kiss Brooke',
    'Kiss kids',
    'go to gym'
  ])

  const removeTodo = (index) => {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodoList)
  }

  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  } 

  return (
    <div className="App">
      <TodoInput handleAddTodo={handleAddTodo}/>
      <TodoList removeTodo={removeTodo} todos={todos}/>
    </div>
  );
}

export default App;
