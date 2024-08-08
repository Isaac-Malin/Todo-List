import React from 'react'
import TodoCard from './TodoCard'
import '../Styles/TodoList.css'

export default function TodoList(props) {

  const {todos, removeTodo } = props

  return (
    <ul className='item-list'>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}
