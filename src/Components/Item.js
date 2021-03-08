import React, { useState } from "react";
import './Item.css';

const Item = (props) => {

  const removeItem = (id) => {
    props.onDelete(id);
  }

  const completeItem = (id) => {
    props.onComplete(id);
  }

  return (
    <li className={props.item.completed ? "executedItem" : "item"}>
      {props.item.text}
      <button className="editButton" onClick={() => completeItem(props.item.id)}>Executed</button>
      <button className="deleteButton" onClick={() => removeItem(props.item.id)}>Delete</button>
    </li>
  )
}

export default Item
