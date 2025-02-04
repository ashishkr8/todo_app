import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem } from '../features/todo/todolistSlice'
import { decrement } from '../features/counter/counterSlice';
import { MdOutlineDeleteForever } from "react-icons/md";
import { GoChecklist } from "react-icons/go";

const Todolist = () => {
    const todolist = useSelector((state)=>(state.todolist.todolist));
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteItem(id));
        dispatch(decrement());
       
    }
  return (
    <div className=''>
        <p className='flex flex-row items-center justify-center m-2'>
        <GoChecklist />
        {count}
        </p>
        {todolist.map(item=>
            <div key={item.id} className='flex flex-row items-center justify-between gap-2 p-2 mt-4 bg-gray-700 text-white'>
                <p>{item.value}</p>    
                <MdOutlineDeleteForever onClick={()=>handleDelete(item.id)} className='text-red-500 hover:cursor-pointer'/>
            </div>
        )}
    </div>
  )
}

export default Todolist