import React, { useContext, useEffect, useState } from 'react'

import TodoContext from '../providers/TodoContext'

const Form = () => {

  const {addTodo , edit , updateTodo} = useContext(TodoContext)

  const [text , setText] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()

    edit.isEdit ? updateTodo({id : edit.todo.id , text}) : addTodo(text),

    setText("")
    
  };


  useEffect(()=> {
    setText(edit.todo.text)
  }, [edit])
  

  return (
    <>
         <div className="card p-4 border border-primary-subtle rounded-0" >
        <h3 className=' my-2 text-center display-5 text-primary-emphasis'>My Todos</h3>
       <form className='my-2'onSubmit={handleSubmit}>
        <input className='form-control my-2 rounded-0 border border-primary-subtle' 
        type="text" 
        placeholder='Enter Text Here...'
        onChange={(e)=> setText(e.target.value)}
        value={text}
        required
        />
       <button className='btn btn-success w-100 my-2'>Save</button>
       </form>
       
       
        </div>

    </>
  )
}

export default Form
