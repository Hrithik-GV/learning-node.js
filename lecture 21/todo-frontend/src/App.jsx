import TodoName from "./components/TodoName";
import TodoAdd from "./components/TodoAdd";
import TodoItemsContainer from "./components/TodoItemsContainer";
import "./App.css";
import { useState,useRef } from "react";


function App() {
  const initialtodoitems=[]

  const[todoitems,setTodoItems]=useState(initialtodoitems);

  const handleNewItem=(itemName,itemDueDate)=>{
    //console.log(`the new item :${itemName} and due date :${itemDueDate}`)
    // const newTodo=[...todoitems,{ name:itemName,
    // date:itemDueDate,}]
    // setTodoItems(newTodo);

    setTodoItems((currentValue)=>
      [...currentValue,
      {name:itemName,date:itemDueDate},
    ]);
    
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
