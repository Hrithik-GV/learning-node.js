import TodoItem from "./TodoItem";
function TodoItemsContainer({ todoitems, onDeleteClick, onCompleteClick }) {
  return (
    <>
      <div className="items-container">
        {todoitems.map((items) => {
          return (
            <TodoItem
              key={items.id}
              id={items.id}
              tododate={items.duedate}
              todoname={items.name}
              completed={items.completed}
              onDeleteClick={onDeleteClick}
              onCompleteClick={onCompleteClick}
            ></TodoItem>
          );
        })}
      </div>
    </>
  );
}
export default TodoItemsContainer;
