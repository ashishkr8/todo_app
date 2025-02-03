import {createSlice} from "@reduxjs/toolkit"

export const todolistSlice = createSlice({
    name:"todolist",
    initialState:{
        todolist:[]
    },

    reducers:{
        addItem:(state,action)=>{
            state.todolist.push(action.payload);
        },

        deleteItem:(state,action)=>{
            state.todolist = state.todolist.filter(item=>item.id != action.payload);
        }
    }
})

export const {addItem, deleteItem} = todolistSlice.actions
export default todolistSlice.reducer
