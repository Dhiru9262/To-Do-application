import { RiDeleteBin5Line } from "react-icons/ri";
function TodoItem3({ Name, Date,onDeleteClick1 }) {
  return (
    <div class="container">
      <div class="row myRow">
        <div class="col-6"> {Name}</div>
        <div class="col-4">{Date}</div>
        <div class="col-2">
          <button type="button" class="btn myButton btn-danger" onClick={()=>onDeleteClick1(Name)}>
          <RiDeleteBin5Line />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem3;
