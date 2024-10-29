import { createContext, useReducer, useState } from "react";
import TodoReducer from "./TodoReducer";

const TodoContext = createContext();


export const TodoProvider = ({children}) => {


    const initialState = {
        todos : [{id : 1 , text : "I am from Reducer"}],
        edit : {todo : {}, isEdit : false},
    }

    
    
    const [state , dispatch] = useReducer(TodoReducer , initialState)

    const addTodo = (text) => {
       dispatch({
        type : "SAVE_TODO",
        payload : {id : crypto.randomUUID() , text}
       })
    }


    const removeTodo = (id) => {
        dispatch({
            type : "DELETE_TODO",
            payload : id ,
        })
    };
    
    const editTodo = (todo) => {
      
        dispatch({
            type : "EDIT_TODO",
            payload : todo,
        });

    };

    const updateTodo = (updatedTodo) => {
        dispatch({
            type : "UPDATE_TODO",
            payload : updatedTodo,
        });
    };


    return(

        <TodoContext.Provider value={{todos : state.todos , edit : state.edit , addTodo , removeTodo , editTodo , updateTodo}}>
            {children}
        </TodoContext.Provider>


    )
}


export default TodoContext;