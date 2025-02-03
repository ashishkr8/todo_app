import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem } from '../features/todo/todolistSlice'
import { MdOutlineDeleteForever } from "react-icons/md";

const Todolist = () => {
    const todolist = useSelector((state)=>(state.todolist.todolist));
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteItem(id));
       
    }
  return (
    <div>
        {todolist.map(item=>
            <div key={item.id}>
                <p>{item.value}</p>
                
                <MdOutlineDeleteForever onClick={()=>handleDelete(item.id)}/>
            </div>
        )}
    </div>
  )
}

export default Todolist