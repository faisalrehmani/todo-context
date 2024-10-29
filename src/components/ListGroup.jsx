import React, { useContext } from 'react'
import ListItem from './ListItem'
import TodoContext from '../providers/TodoContext'

const ListGroup = () => {

const {todos} = useContext(TodoContext)


if(todos.length === 0)
  return(
    <h3 className='display-4 text-center text-secondary mt-2'>No Todos Yet</h3>
)

  return (
    <>
      
      <div className="card p-3 my-3 border border-primary-subtle rounded-0">
      <ul className="list-group ">
       
       {
        todos.map(todo => <ListItem key={todo.id} todo={todo}/>)
       }
     
      
     </ul>

      </div>
      
    </>
  )
}

export default ListGroup
