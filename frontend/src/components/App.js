import React, { useState } from 'react';
import '../App.css';
import Header from './Header'
import Todos from './todos/Todos'
import taskService from '../services/tasks'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'

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
    <Provider store={store}>
      <div className="ui container">
        <BrowserRouter>
          <Header />
          <div className="ui grid">
            <div className="four column row">
              <div className="left floated column"></div>
              <div>

                Todos List
                <Todos />
                {/*
                <form onSubmit={addTask} id="form">
                  <div className="ui input" style={{ flex: 6 }}>
                    <input onChange={handleTitleChange} value={newTitle} className="form-control" id="title" type="text" name="title" placeholder="Add task.." />
                  </div>
                  <button className="ui primary button" style={{ flex: 1 }} >
                    Add todo
                  </button>
                </form>
                */}
              </div>
              <div className="right floated column"></div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  )

}

export default App