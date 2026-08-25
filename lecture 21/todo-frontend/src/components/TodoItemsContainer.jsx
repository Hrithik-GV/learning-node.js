import TodoItem from "./TodoItem";
function TodoItemsContainer({ todoitems,onDeleteClick }) {
  return (
    <>
      <div className="items-container">
        {todoitems.map((items) => {
          return <TodoItem key={items.name} tododate={items.date} todoname={items.name} onDeleteClick={onDeleteClick}></TodoItem>;
        })}

      </div>
    </>
  );
}
export default TodoItemsContainer;
