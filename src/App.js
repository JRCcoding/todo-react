import React, { useState } from 'react'
import data from './data.json'
import './App.css'
//components
import Header from './Components/Header'
import ToDoList from './Components/ToDoList'

const App = () => {
  //hook
  const [toDoList, setToDoList] = useState(data)
  return (
    <div className='app'>
      <Header />
      <ToDoList toDoList={toDoList} />
    </div>
  )
}

export default App
