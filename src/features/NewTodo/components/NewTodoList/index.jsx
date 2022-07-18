import React from "react";
import PropTypes from "prop-types";

NewTodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

NewTodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function NewTodoList(props) {
  const { todoList, onTodoClick } = props;

  const handleNewTodoClick = (todo) => {
    onTodoClick(todo);
  };

  return (
    <ul className="todo-new-list">
      {todoList.map((todo, index) => (
        <li
          className="todo-new-item"
          key={index}
          onClick={() => handleNewTodoClick(todo)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default NewTodoList;
