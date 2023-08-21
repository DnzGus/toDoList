import React, { useState } from 'react'

const Forms = ({newTodo}) => {
  const[value,setValue] = useState()
  const[category,setCategory] = useState()

  const handleForm = (e) => {
    e.preventDefault();
    if(!value || !category) return
    newTodo(value,category);
    setValue("")
    setCategory("")
  }
  return (
    <div className="todoForm">
      <h2>Create a new task</h2>
      <form className="forms" onSubmit={handleForm}>
        <input
        value={value}
        type="text" 
        placeholder="Title" 
        onChange={(e) => setValue(e.target.value)}>
        </input>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select the category</option>
          <option value="Study">Study</option>
          <option value="Work">Work</option>
          <option value="freeTime">Free Time</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default Forms