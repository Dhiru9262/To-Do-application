import { useState } from "react";
import { MdAddCard } from "react-icons/md";

function AddToDo({ OnNewItem }) {
  const [todoName, settodoName] = useState();
  const [todoDate, settodoDate] = useState();
  const HandleNameChange = function HandleNameChangef(event) {
    settodoName(event.target.value);
  };

  const HandleDateChange = function HandleDateChangef(event) {
    settodoDate(event.target.value);
  };

  const HandleAddBtnClick = function HandleAddBtnClickf(event) {
    OnNewItem(todoName, todoDate);
  };

  return (
    <div class="container text-center">
      <div class="row myRow">
        <div class="col-6">
          <input
            type="text"
            placeholder="Enter TODO here"
            onChange={HandleNameChange}
          />
        </div>
        <div class="col-4">
          <input type="date" name="" id="" onChange={HandleDateChange} />
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn  myButton btn-success"
            onClick={HandleAddBtnClick}
          >
            <MdAddCard />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddToDo;
