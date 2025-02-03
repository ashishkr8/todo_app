import React from 'react'
import { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { addItem } from '../features/todo/todolistSlice';
import { useDispatch } from 'react-redux';

const Todoinput = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const handleTodoInput = (e) => {
      const todoInp = e.target.value;

      setInput(prev=>todoInp);
    }

    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleAddTodo = () => {
      const id = getRandomInt(1,100000);
      const todoObj = {
        id:id,
        value:input,
      }
      dispatch(addItem(todoObj))
      setInput(prev=>"");
    }
  return (
    <div className=''>
        <input type="text" onChange={handleTodoInput} value={input} className=''/>
     
        <IoMdAdd onClick={handleAddTodo} className='text-green-500'/>
      
    </div>
  )
}

export default Todoinput