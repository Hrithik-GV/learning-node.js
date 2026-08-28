import { MdDeleteForever, MdCheckCircle } from "react-icons/md";

function TodoItem({ id, todoname, tododate, completed, onDeleteClick, onCompleteClick }) {
  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="grid grid-cols-12 gap-4 my-2 items-center text-left py-2 border-b border-gray-100">
        <div className={`col-span-6 font-medium ${completed ? "line-through text-gray-400" : "text-gray-800"}`}>
          {todoname}
        </div>
        <div className={`col-span-4 ${completed ? "line-through text-gray-400" : "text-gray-600"}`}>
          {tododate}
        </div>
        <div className="col-span-2 flex gap-2">
          <button
            type="button"
            className={`font-semibold py-2 px-3 rounded flex-1 flex items-center justify-center transition-colors duration-200 cursor-pointer ${
              completed ? "bg-green-100 text-green-600 cursor-default" : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
            onClick={() => !completed && onCompleteClick && onCompleteClick(id)}
            title={completed ? "Completed" : "Mark as completed"}
          >
            <MdCheckCircle className="text-xl" />
          </button>
          <button
            type="button"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-3 rounded flex-1 flex items-center justify-center transition-colors duration-200 cursor-pointer"
            onClick={() => onDeleteClick(id)}
            title="Delete todo"
          >
            <MdDeleteForever className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
