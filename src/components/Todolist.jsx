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
    <div className='mt-4 bg-gray-700 text-white'>
        {todolist.map(item=>
            <div key={item.id} className='flex flex-row items-center justify-between gap-2 p-2'>
                <p>{item.value}</p>
                
                <MdOutlineDeleteForever onClick={()=>handleDelete(item.id)} className='text-red-500'/>
            </div>
        )}
    </div>
  )
}

export default Todolist