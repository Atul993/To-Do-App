import React from 'react'
import Todo from './Todo'

const TodoList = ({todos,setTodos,filterTodos}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodos.map(todo => (
          <Todo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
