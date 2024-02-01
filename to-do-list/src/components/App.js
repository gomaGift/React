import React from "react";
import { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

export default function App(){
    const [toDoList, setToDoList] = useState([])
   
    

    function showToDoList( text){
        setToDoList(prevValue => {
            return [...prevValue, text]
        })
   
    }

    function Delete(id){
        setToDoList(prevValue => {
            return prevValue.filter((item,index) => {
                return index !== id
            } )
        })
    }
       
    

    return (
        <div className="container">
           <div className="dots"> </div>
           <h1>To-do-list</h1>
            <InputArea onAppend={showToDoList} />
            <ul>
            { toDoList.map((item, index) => {
              return (item !== "" && <ToDoItem toDoItem={item} onChecked={Delete} id={index}  />)
             })}
             </ul>
          
        </div>
    )
}