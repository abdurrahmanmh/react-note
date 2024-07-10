import React, { useState } from 'react'

export default function NewTodoForm({onSubmit}) {
    const [newItem, setNewItem] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault(); //prevent refreshing
    
        // setTodos((currentTodos) => {
        //   return [
        //     ...currentTodos,
        //     { id: crypto.randomUUID(), title: newItem, completed: false },
        //   ];
        // });

        if (newItem === "") return

        onSubmit(newItem)
    
        setNewItem("");
      }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New item</label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          ></input>
        </div>
        <button className="btn">Add</button>
      </form>
  )
}
