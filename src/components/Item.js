import React from "react";
import { useDispatch } from "react-redux";
import { toggleStatus, removeTodo, editTodo } from "../features/todoSlice/todoSlice";
import { useState } from "react";

const Item = ({id, name, status}) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(name)
  
  const onEditTask = (e) => {
    setEditTask(e.target.value);
  }

  const onClickDiv = (e) => {
    dispatch(toggleStatus(id))
    if (e.target.style.textDecoration === 'none') {
      e.target.style.textDecoration = 'line-through';
    } else {
      e.target.style.textDecoration = 'none';
    }
  }

  const onClickEdit = () => {
    setIsEditing(true);
  }

  const onClickUpdate = () => {
    dispatch(editTodo({id, name: editTask}));
    setIsEditing(false);
  }

  const onClickDelete = () => {
    dispatch(removeTodo(id));
  }

  return(
    <div draggable='true' style={{display:'flex', paddingTop:'10px', paddingBottom:'10px'}}>
      {isEditing ?
        <div display='flex' style={{display:'flex', gap:'10px'}}>
          <input value={editTask} onChange={onEditTask} onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onClickUpdate();
            }
          }}></input>
          <button onClick={onClickUpdate} >Update</button>
        </div>
        :
        <div display='flex' style={{display:'flex', gap:'10px'}}>
          <div 
            onClick={onClickDiv}
            style={{textDecoration:'none'}}
          >
            {name}
          </div>
          <button onClick={onClickEdit}>Edit</button>
        </div>
      }
      
      <button onClick={onClickDelete}>Delete</button>
    </div>
  )
}

export default Item;