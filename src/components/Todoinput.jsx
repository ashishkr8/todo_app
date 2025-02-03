import React from 'react'
import { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { addItem } from '../features/todo/todolistSlice';
import { increment } from '../features/counter/counterSlice';
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
      dispatch(addItem(todoObj));
      dispatch(increment());
      setInput(prev=>"");
    }
  return (
    <div className='flex flex-row items-center justify-center bg-gray-200 p-1'>
        <input type="text" onChange={handleTodoInput} value={input} className=''/>
     
        <IoMdAdd onClick={handleAddTodo} className='text-green-500 hover:cursor-pointer'/>
      
    </div>
  )
}

export default Todoinput