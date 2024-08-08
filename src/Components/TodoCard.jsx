import React from "react";
import '../Styles/TodoCard.css'

export default function TodoCard(props) {
  const { children, removeTodo, index } = props;



  return (
    <li className="todo-item">
      {children}
      <div className="actions-container">
        <i className="action fa-solid fa-pen-to-square"></i>
        <i onClick={() => {
          removeTodo(index)
        }} className="action fa-solid fa-trash-can"></i>
      </div>
    </li>
  );
}
