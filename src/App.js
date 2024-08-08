import "./App.css";
import { useState } from "react";
import TodoList from "./Components/TodoList";
import TodoInput from "./Components/TodoInput";

function App() {
  const [todos, setTodos] = useState(["Kiss Brooke", "Kiss kids", "go to gym"]);
  const [todoInput, setTodoInput] = useState("");

  const removeTodo = (index) => {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
  };

  const editTodo = (index) => {
    const editedValue = todos[index];
    setTodoInput(editedValue);
    removeTodo(index);
  };

  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  };

  return (
    <div className="App">
      <TodoInput todoInput={todoInput} setTodoInput={setTodoInput} handleAddTodo={handleAddTodo} />
      <TodoList editTodo={editTodo} removeTodo={removeTodo} todos={todos} />
    </div>
  );
}

export default App;
