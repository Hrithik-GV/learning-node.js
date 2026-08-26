import TodoItem from "./TodoItem";
function TodoItemsContainer({ todoitems, onDeleteClick }) {
  console.log(todoitems);
  return (
    <>
      <div className="items-container">
        {todoitems.map((items) => {
          return (
            <TodoItem
              key={items.id}
              tododate={items.duedate}
              todoname={items.name}
              onDeleteClick={onDeleteClick}
            ></TodoItem>
          );
        })}
      </div>
    </>
  );
}
export default TodoItemsContainer;
