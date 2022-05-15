import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

const List = () => {
  const todoList = useSelector(store => store.todo);

  return(
    todoList.map(item => {
      return(
        <Item key={item.id} id={item.id} name={item.name} status={item.status} />
      )
    })
  )
}

export default List;