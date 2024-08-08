import React from "react";

export default function TodoCard(props) {
  const { children } = props;

  return (
    <li className="todo-item">
      {children}
      <div className="actions-container">
        <i class="fa-solid fa-pen-to-square"></i>
      </div>
    </li>
  );
}
