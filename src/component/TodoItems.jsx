import TodoItem3 from "./TodoItem3";
function TodoItems({ todoitems ,onDeleteClick }) {
  return (
    <>
      <div className="items-container">
        {todoitems.map((item) => (
          <TodoItem3 Name={item.Name} Date={item.Date} onDeleteClick1={onDeleteClick}></TodoItem3>
        ))}
      </div>
    </>
  );
}
export default TodoItems;
