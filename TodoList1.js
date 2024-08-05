import React from 'react'

const TodoList1 = ({todos}) => {
  return (
    <div>
      {todos.map((todo,index) =>
      <div key={index}>
        <h5>{todo} &nbsp; <button>Delete</button></h5>
      </div>)}
    </div>
  )
}

export default TodoList1


