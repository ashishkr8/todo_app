import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import todolistReducer from '../features/todo/todolistSlice'

export default configureStore({
  reducer: {
    counter:counterReducer,
    todolist:todolistReducer,
  },
})