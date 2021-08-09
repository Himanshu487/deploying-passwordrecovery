import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import Input from "./Input";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    alert("you have searched for - " + items);
    // or you can send data to backend
  };

  const handleKeypress = e => {
      //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Input onAdd={addItem}  onClick={handleSubmit} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
              onKeyPress={handleKeypress}
              value={items}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
