import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [todo, setTodo] = useState([{ text: "Python", completed: false }, { text: "Java", completed: true }])
  const [input, setInput] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)

  function add() {
    if (input.trim() === "") {
      alert("Please enter valid Todo..");
      setInput("")
      return;
    }
    setTodo([...todo, { text: input, completed: isCompleted }]);
    setInput("")
    setIsCompleted(false)
  }
  function remove(i) {
    const newarr = [...todo]
    newarr.splice(i, 1);
    setTodo(newarr)
  }
  function toggleTodo(i) {
    const newarr = [...todo]
    newarr[i].completed = !newarr[i].completed
    setTodo(newarr)
  }
  return (
    <div className='contain'>
      <h2>Todo List</h2>
      <div className='display'>
        <input type="text" className='input' value={input} placeholder='Enter your Todo...' onChange={(e) => setInput(e.target.value)} />
        <div><input type="checkbox" checked={isCompleted} onChange={() => setIsCompleted(!isCompleted)} /> <p>Completed?</p></div>
        <button onClick={add}>Add</button>
      </div>
      <div>
        {todo.map((val, i) => (
          <div key={i} className='list main'>
            <div className='data'>
              <h2 key={i}>{val.text}</h2>
            </div>
            <div className='buttons' key={i}>
              <button className={val.completed ? "btn1" : "btn2"} onClick={() => toggleTodo(i)}>{val.completed ? "Mark Not Done" : "Mark Done"}</button>
              <button className='delete' onClick={() => remove(i)}><img src="https://static.vecteezy.com/system/resources/previews/030/343/284/non_2x/delete-icon-symbol-design-illustration-vector.jpg" alt="" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App