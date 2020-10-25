import React, { useState } from 'react';
import '../App.css';
import Header from './Header'
import taskService from '../services/tasks'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => {

  const [newTitle, setNewTitle] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = (event) => {
    event.preventDefault()

    const taskObject = {
      title: newTitle
    }

    taskService
      .create(taskObject)
      .then(returnedTask => {
        setTasks(tasks.concat(returnedTask))
      })

    setNewTitle('')

  }

  const handleTitleChange = (event) => {
    event.preventDefault()

    setNewTitle(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <div className="ui grid">
          <div className="four column row">
            <div className="left floated column"></div>
            <div>
              <form onSubmit={addTask} id="form">
                <div className="ui input" style={{ flex: 6 }}>
                  <input onChange={handleTitleChange} value={newTitle} className="form-control" id="title" type="text" name="title" placeholder="Add task.." />
                </div>
                <button className="ui primary button" style={{ flex: 1 }} >
                  Add todo
            </button>
              </form>
            </div>
            <div className="right floated column"></div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )

}

export default App