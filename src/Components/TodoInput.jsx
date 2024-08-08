import React from 'react'
import '../Styles/TodoInput.css'

export default function TodoInput(props) {

  const { handleAddTodo, todoInput, setTodoInput } = props
  

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
      <button onClick={() => {
        handleAddTodo(todoInput)
        setTodoInput('')
      }}>Add</button>
    </div>
  )
}
