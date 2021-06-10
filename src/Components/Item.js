import React from "react";
import './Item.css';

const Item = (props) => {
  const removeItem = (id) => {
    props.onDelete(id);
  }

  const completeItem = (id) => {
    props.onComplete(id);
  }

  return (
    <li className={props.item.completed ? "executedItem" : "item"} >
      <div>{props.item.text}</div>
      {props.item.completed && <button className="deleteButton" onClick={() => removeItem(props.item.id)}>Delete</button>}
      <button className="editButton" onClick={() => completeItem(props.item.id)}>Executed</button>
    </li>
  )
}

export default Item
