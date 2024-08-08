import React from "react";
import '../Styles/TodoCard.css'

export default function TodoCard(props) {
  const { children, removeTodo, index, editTodo } = props;



  return (
    <li className="todo-item">
      {children}
      <div className="actions-container">
        <i onClick={() => {
          editTodo(index)
        }} className="action fa-solid fa-pen-to-square"></i>
        <i onClick={() => {
          removeTodo(index)
        }} className="action fa-solid fa-trash-can"></i>
      </div>
    </li>
  );
}
