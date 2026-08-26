import { useState, useRef } from "react";
import { MdOutlineAdd } from "react-icons/md";

function TodoAdd({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [duedate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();



  const handleTodoNewItem = (event) => {
    event.preventDefault();
     const todoName=todoNameElement.current.value;
    const dueDate=dueDateElement.current.value;
     console.log(`todoname:${todoName} and duedate:${dueDate}`);
     todoNameElement.current.value=""
      dueDateElement.current.value=""
    onNewItem(todoName, dueDate);
   
   
    
  };
  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleTodoNewItem}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="enter todo here"
          
           
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement}  />
        </div>
        <div id="butn" className="col-2">
          <button className="btn btn-success kg-butn">
            <MdOutlineAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default TodoAdd;
