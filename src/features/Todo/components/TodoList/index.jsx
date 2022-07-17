import PropTypes from "prop-types";
import React from "react";
import classnames from "classnames";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.deafultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
  let handleTodoClick = (todo, index) => {
    if (!onTodoClick) return;
    onTodoClick(todo, index);
  };
  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => (
        <li
          key={index}
          className={classnames({
            "todo-item": true,
            completed: todo.status === "completed",
          })}
          onClick={() => handleTodoClick(todo, index)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
