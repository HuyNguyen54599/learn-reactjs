import React, { useState } from "react";
import TodoList from "./components/TodoList";

function TodoFeatures(props) {
  const initTodoList = [
    { id: 1, title: "Eat", status: "new" },
    { id: 2, title: "Sleep", status: "completed" },
    { id: 3, title: "Code", status: "new" },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState("all");

  let handleTodoClick = (todo, index) => {
    const newTodoList = [...todoList];

    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "completed" ? "new" : "completed",
    };

    setTodoList(newTodoList);
  };

  let handleShowAll = () => {
    setFilterStatus("all");
  };

  let handleShowNew = () => {
    setFilterStatus("new");
  };

  let handleShowCompleted = () => {
    setFilterStatus("completed");
  };

  const renderedTodoList = todoList.filter(
    (todo) => filterStatus === "all" || filterStatus === todo.status
  );

  return (
    <>
      <h3>Todo Feature</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

      <div className="filter">
        <button className="filter-btn" onClick={handleShowAll}>
          Show All
        </button>
        <button className="filter-btn" onClick={handleShowNew}>
          Show New
        </button>
        <button className="filter-btn" onClick={handleShowCompleted}>
          Show Completed
        </button>
      </div>
    </>
  );
}

export default TodoFeatures;
