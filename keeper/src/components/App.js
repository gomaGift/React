import React, { useState } from "react";
import Header from "./Heading";
import Footer from "./Footer";
import Note from "./Note";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isMouseOver,setMouseOver] = useState(false)
  const [isExpanded, setExpanded]  = useState(false)

  function handleInput(event) {
    const { value, name } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function addNote() {
    setNotes((prevValue) => {
        return (note.title !== "" && note.content != "")? [...prevValue, note]:[...prevValue];
    });

    setNote( {
       title: "",
       content: ""
    })
  }

  function Delete(id) {
    setNotes(
      notes.filter((note, index) => {
        return index !== id;
      })
    );
  }

  function changeBg (){
    setMouseOver(!isMouseOver)
  }
   
  function rowChange(){
    setExpanded(true)
  }
 
  

  return (
    <div  className="root-container">
      <Header />
      <div className="note-input"   >
        { isExpanded && <input
          onChange={handleInput}
          name="title"
          type="text"
          placeholder="Title"
          value={note.title}
        />}
       
       
        <textarea rows={isExpanded?3:1}  className="content" onClick={rowChange}
          name="content"
          type="text"
          placeholder="Take a note..."
          onChange={handleInput}
          value={note.content} ></textarea>
        {isExpanded && <button className="add" onClick={addNote} onMouseOver={changeBg} onMouseOut={changeBg} style={{backgroundColor : isMouseOver? "gray": "#f5ba13"}}>
          <span>Add</span>
        </button>}
      </div>
         <div className="content-container">
        {notes.map((noteObj, index) => {
          return (
            <Note
              title={noteObj.title}
              content={noteObj.content}
              onPassed={Delete}
              id={index}
            />
          );
        })}
         </div>
    
      <Footer />
    </div>
  );
}
