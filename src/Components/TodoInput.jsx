import React, { useState } from 'react'

export default function TodoInput() {

  const [todoInput, setTodoInput] = useState('')

  const handleTodoInput = (e) => {
    setTodoInput(e.target.value)
  }

  return (
    <div className='input-container'>
      <input
        className='input-text'
        type="text"
        value={todoInput}
        onChange={(e) => handleTodoInput(e)}
      />
    </div>
  )
}
