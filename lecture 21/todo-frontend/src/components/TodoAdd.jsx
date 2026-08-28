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
    <div className="container mx-auto px-4 max-w-4xl">
      <form className="grid grid-cols-12 gap-4 my-3 items-center text-left" onSubmit={handleTodoNewItem}>
        <div className="col-span-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="enter todo here"
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="col-span-4">
          <input 
            type="date" 
            ref={dueDateElement}
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500" 
          />
        </div>
        <div id="butn" className="col-span-2">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded w-full flex items-center justify-center transition-colors duration-200">
            <MdOutlineAdd className="text-xl" />
          </button>
        </div>
      </form>
    </div>
  );
}
export default TodoAdd;
