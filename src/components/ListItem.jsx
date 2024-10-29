import React, { useContext } from 'react'
import TodoContext from '../providers/TodoContext'

const ListItem = ({ todo }) => {

const {removeTodo , editTodo} = useContext(TodoContext)

  return (
    <>
      <li className="list-group-item border border-primary-subtle mt-2">
         {todo.text}
          <span className='float-end mx-2'>
            <button className='btn btn-sm btn-warning'onClick={()=>editTodo(todo)}>Edit</button>
            <button className='mx-2 btn btn-sm btn-danger'onClick={()=> removeTodo(todo.id)}>Delete</button>
          </span>
        </li>
    </>
  )
}

export default ListItem
