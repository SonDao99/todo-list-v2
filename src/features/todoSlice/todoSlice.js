import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers:{
    addTodo: (state, {payload}) => {
      state.push(payload);
    },
    toggleStatus: (state, {payload}) => {
      return state.map(item => {
        return (item.id === payload) ? {...item, status: !item.status} : item
      })
    },
    removeTodo: (state, {payload}) => {
      return state.filter(item => item.id !== payload);
    },
    editTodo: (state, {payload}) => {
      return state.map(item => {
        return (item.id === payload.id) ? {...item, name: payload.name} : item
      })
    },
  }
})

export const {addTodo, toggleStatus, removeTodo, editTodo} = todoSlice.actions

export default todoSlice.reducer;