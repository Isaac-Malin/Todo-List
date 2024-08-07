import React, { useState } from 'react'

export default function TodoInput(props) {

  const { handleAddTodo } = props
  
  const [todoInput, setTodoInput] = useState('')

  return (
    <div className='input-container'>
      <input
        className='input-text'
        type="text"
        value={todoInput}
        onChange={(e) => {
          setTodoInput(e.target.value)
        }}
      />
      <button onClick={() => handleAddTodo(todoInput)}>Add</button>
    </div>
  )
}
