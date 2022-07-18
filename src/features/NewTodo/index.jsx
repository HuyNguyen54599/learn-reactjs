import React, { useState } from "react";
import NewTodoList from "./components/NewTodoList/index";
import TodoForm from "./components/TodoForm";

function NewTodo() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Going to the top" },
    { id: 2, title: "Going to the bottom" },
    { id: 3, title: "Going to the end" },
  ]);

  const handleTodoClick = (todo) => {
    const indexClicked = todoList.findIndex(
      (current) => current.id === todo.id
    );

    if (indexClicked < 0) return;

    const newTodo = [...todoList];

    newTodo.splice(indexClicked, 1);

    setTodoList(newTodo);
  };

  const handleFormSubmit = (formValue) => {
    const newTodoItem = {
      id: todoList.length + 1,
      ...formValue,
    };

    const newTodo = [...todoList];

    newTodo.push(newTodoItem);

    setTodoList(newTodo);
  };

  return (
    <div className="todo-new">
      <h3>New TodoList</h3>
      <TodoForm onTodoSubmit={handleFormSubmit} />
      <NewTodoList todoList={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default NewTodo;
