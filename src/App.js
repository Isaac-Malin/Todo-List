import './App.css';
import { useState } from 'react';
import TodoList from './Components/TodoList';
import TodoCard from './Components/TodoCard';
import TodoInput from './Components/TodoInput';

function App() {

  const [todos, setTodos] = useState([
    'Go to the gym',
    'Take the kids to the park'
  ])

  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  } 

  return (
    <div className="App">
      <TodoInput handleAddTodo={handleAddTodo}/>
      <TodoList />
      <TodoCard />
    </div>
  );
}

export default App;
