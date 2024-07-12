import AppName from "./component/AppName";
import AddToDo from "./component/AddToDo";
import "./App.css";
import WelcomeMsg from "./component/WelcomeMsg";
// import TodoItem3 from "./component/TodoItem3";

import TodoItems from "./component/TodoItems";
import { useState } from "react";
function App() {
  const todoItems = [
    {
      Name: "Buy Milk",
      Date: "5/02/2024",
    },
    {
      Name: "Go to collage ",
      Date: "4/02/2024",
    },
    {
      Name: "Clean your laptop",
      Date: "4/02/2024",
    },
  ];

  const [toDoItems, SettoDoItems] = useState(todoItems);

  const HandleOnNewItem = function OnNewItemf(itemName, itemDueDate) {
    console.log(`new item added:${itemName} Date: ${itemDueDate}`);
    // const newItems = [...todoItems, { Name: itemName, Date: itemDueDate }];
    SettoDoItems((current) => [
      ...current,
      { Name: itemName, Date: itemDueDate },
    ]);
  };
  function HandleDelete(todoItemName) {
    const newtodoItems = toDoItems.filter((item) => item.Name != todoItemName);
    SettoDoItems(newtodoItems);
    console.log("item deleted" + todoItemName);
  }

  return (
    <center class="todo-cotainer">
      <AppName></AppName>
      <AddToDo OnNewItem={HandleOnNewItem}></AddToDo>
      {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <WelcomeMsg></WelcomeMsg>
      <TodoItems todoitems={toDoItems} onDeleteClick={HandleDelete}></TodoItems>
    </center>
  );
}

export default App;
