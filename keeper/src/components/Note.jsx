import React from "react";


function Note(props){
    return (<div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button className="delete-btn" onClick={() => { props.onPassed(props.id)
 }}><span>delete</span></button>
    </div>)
}

export default Note;