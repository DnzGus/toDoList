import React from 'react'

const toDo = ({ todo, removeToDo, completeToDo }) => {
  return (
    <div className="todoBox">
      <div className="todoInfo" style={{textDecoration: todo.checked ? "line-through" : "",textDecorationColor: todo.checked ? "#fff" : "" , color: todo.checked ? "#8FB339" : ""}}>
          <h3>{todo.name}</h3>
          <p>{todo.category}</p>
      </div>
      <div className="todoButtons">
        <button className="complete" onClick={() => completeToDo(todo.id)}>
          Complete
        </button>
        <button className="delete" onClick={() => removeToDo(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default toDo