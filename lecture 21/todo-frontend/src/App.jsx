import TodoName from "./components/TodoName";
import TodoAdd from "./components/TodoAdd";
import TodoItemsContainer from "./components/TodoItemsContainer";
import "./App.css";
import { useState,useRef } from "react";
import { addItemToServer } from "../services/itemService"


function App() {
  const initialtodoitems=[]

  const[todoitems,setTodoItems]=useState(initialtodoitems);
  
  const handleNewItem= async (itemName,itemDueDate)=>{
    console.log(`new item added is ${itemName} and duedate is ${itemDueDate}`);

    const item=await addItemToServer({task:itemName,date:itemDueDate});
    const newTodoItems=[
      ...todoitems,
      item
    ];
    setTodoItems(newTodoItems);
  };


  const handleOnDelete=(todoItemName)=>{
    const newTodoItems=todoitems.filter(items=>items.name!==todoItemName);
    setTodoItems(newTodoItems);
    console.log(` item deleted is ${todoItemName}`)
  }


  return (
    <center className="todo-container">
      <TodoName></TodoName>
      <TodoAdd onNewItem={handleNewItem}></TodoAdd>
      <TodoItemsContainer todoitems={todoitems} onDeleteClick={handleOnDelete}></TodoItemsContainer>
    </center>
  );
}



export default App;
