import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counter/counterSlice'
import Todoinput from './components/Todoinput'
import Todolist from './components/Todolist'


function App() {
  // const [count, setCount] = useState(0)?
  const count = useSelector(state=>state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Todoinput/>
      <Todolist/>
    </>
  )
}

export default App
