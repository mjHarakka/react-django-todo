import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import taskService from './services/tasks'

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
        setNewTitle('')
      })



    setNewTitle('')
  }

  const handleTitleChange = (event) => {
    event.preventDefault()

    setNewTitle(event.target.value)
    console.log(event.target.value)
  }


  return (
    <div className="container">

      <div id="task-container">
        <div id="form-wrapper">
          <form onSubmit={addTask} id="form">
            <div className="flex-wrapper">
              <div style={{ flex: 6 }}>
                <input onChange={handleTitleChange} value={newTitle} className="form-control" id="title" type="text" name="title" placeholder="Add task.." />
              </div>

              <div style={{ flex: 1 }}>
                <input id="submit" className="btn btn-warning" type="submit" name="Add" />
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  )


}

export default App;
