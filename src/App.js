import React, { useState } from "react";
import axios from 'axios';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [marked, setMarked] = useState(false);

  const addItem = (e) => {
    setInput(e.target.value)
  }

  const addItems = () => {
    if (input.length > 0) {
      setList(oldItems => [...oldItems, input]);
      setInput('');
    }
  }

  const removeItem = (item) => {
    setList(items => items.filter(x => x !== item))
  }

  return (
    <div className="app">
      <div className="header">TODO LIST</div>
      <div className="body">
        <input className="input" type="text" value={input} onChange={e => { addItem(e) }}></input>
        <button className="addButton" onClick={addItems}>ADD</button>
      </div>
      <div className="counter">{list.length} TODOS</div>
      <ul className="container">
        {
          list.map(item => (
            <li className={marked ? "executedItem" : "item"}>
              {item}
              <button className="editButton" onClick={() => setMarked(!marked)}>Executed</button>
              <button className="deleteButton" onClick={() => { removeItem(item) }}>Delete</button>
            </li>
          ))
        }
      </ul>
    </div >
  );
}

export default App;
