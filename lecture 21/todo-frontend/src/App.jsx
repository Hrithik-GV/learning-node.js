import TodoName from "./components/TodoName";
import TodoAdd from "./components/TodoAdd";
import TodoItemsContainer from "./components/TodoItemsContainer";
import "./App.css";
import { useState,useRef, useEffect } from "react";
import { addItemToServer, getAllTodoItems, deleteTodoItem, updateTodoItem } from "../services/itemService";


function App() {
  const initialtodoitems=[]

  const[todoitems,setTodoItems]=useState(initialtodoitems);

  useEffect(()=>{
    getAllTodoItems().then(initialtodoitems=>{
      setTodoItems(initialtodoitems);
    });
  }, []);

 
  
  const handleNewItem= async (itemName,itemDueDate)=>{
    console.log(`new item added is ${itemName} and duedate is ${itemDueDate}`);

    const item=await addItemToServer({task:itemName,date:itemDueDate});
    const newTodoItems=[
      ...todoitems,
      item
    ];
    setTodoItems(newTodoItems);
  };


  const handleOnDelete= async(id)=>{
    const deletedItemId=await deleteTodoItem(id);
    const newTodoItems=todoitems.filter(items=>items.id!==deletedItemId);
    setTodoItems(newTodoItems);
    console.log(`item deleted is ${deletedItemId}`);
  }

  const handleOnComplete = async (id) => {
    const updatedItem = await updateTodoItem(id);
    const newTodoItems = todoitems.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setTodoItems(newTodoItems);
  };


  return (
    <center className="todo-container">
      <TodoName></TodoName>
      <TodoAdd onNewItem={handleNewItem}></TodoAdd>
      <TodoItemsContainer todoitems={todoitems} onDeleteClick={handleOnDelete} onCompleteClick={handleOnComplete}></TodoItemsContainer>
    </center>
  );


 }

export default App;
