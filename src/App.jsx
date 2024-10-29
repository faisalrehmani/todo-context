import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import ListGroup from './components/ListGroup'
import { TodoProvider } from './providers/TodoContext'

const App = () => {
  return (
    <TodoProvider>
      

      <Navbar />
      <div className="container p-5">
      < Form />
      <ListGroup />

      </div>

    </TodoProvider>
  )
}

export default App
