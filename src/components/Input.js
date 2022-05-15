import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice/todoSlice";

const Input = () => {
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    setNewTodo(e.target.value);
  } 

  const onClickAdd = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo({name: newTodo, status: false, id: (new Date()).toString()}));
      setNewTodo('');
    }
  }

  return(
    <>
      <input onChange={onChangeInput} value={newTodo} onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onClickAdd();
        }
      }}></input>
      <button onClick={onClickAdd}>Add</button>
    </>
  )
}

export default Input;