import "./App.css";
import { useState, useEffect } from "react";
import TodoList from "./Components/TodoList";
import TodoInput from "./Components/TodoInput";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const persistData = (newList) => {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  const removeTodo = (index) => {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList)
    setTodos(newTodoList);
  };

  const editTodo = (index) => {
    if(todoInput) {
      return
    }
    const editedValue = todos[index];
    setTodoInput(editedValue);
    removeTodo(index);
  };

  const handleAddTodo = (newTodo) => {
    if(!todoInput) {
      return
    }
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList)
    setTodos(newTodoList);
  };

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <div className="App">
      <TodoInput todoInput={todoInput} setTodoInput={setTodoInput} handleAddTodo={handleAddTodo} />
      <TodoList editTodo={editTodo} removeTodo={removeTodo} todos={todos} />
    </div>
  );
}

export default App;
