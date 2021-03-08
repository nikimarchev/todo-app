import React, { useState, useEffect } from "react";
import './App.css';
import Item from './Components/Item'

function App() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const jsonList = localStorage.getItem('list');
    const loadedList = JSON.parse(jsonList);

    if (loadedList) {
      setList(loadedList)
    }
  }, [])

  useEffect(() => {
    const jsonList = JSON.stringify(list);
    localStorage.setItem('list', jsonList)
  }, [list])


  const addItem = () => {
    const newItem = {
      id: new Date().getTime(),
      text: input,
      completed: false
    }
    if (input.length > 0) {
      setList([...list, newItem]);
      setInput('');
    }
  }

  const removeItem = (id) => {
    setList([...list].filter(item => item.id !== id))
  }

  const completeItem = (id) => {
    const updatedList = [...list].map(item => {
      if (item.id === id) {
        item.completed = !item.completed
      }
      return item;
    })
    setList(updatedList);
  }

  return (
    <div className="app">
      <div className="header">TODO LIST</div>
      <div className="body">
        <input className="input" type="text" value={input} onChange={e => setInput(e.target.value)}></input>
        <button className="addButton" onClick={addItem}>ADD</button>
      </div>
      <div className="counter">{list.length} TODOS</div>
      <ul className="container">
        {
          list.map(item => (
            <Item
              item={item}
              key={item.id}
              onDelete={() => { removeItem(item.id) }}
              onComplete={() => { completeItem(item.id) }}
            />
          ))
        }
      </ul>
    </div >
  );
}

export default App;
