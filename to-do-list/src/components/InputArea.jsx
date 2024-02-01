import React, { useState } from "react";

export default function InputArea(props) {
  const [text, setToDoItem] = useState("");

  function addToDo(event) {
    const value = event.target.value;
    setToDoItem(value);
  
  }
  
  return (
    <div className="form"
      
    >
      <input onChange={addToDo} type="text" value={text}/>
      <button onClick={() => {
        props.onAppend(text);
        setToDoItem("");
      }}>Add</button>
    </div>
  );
}
