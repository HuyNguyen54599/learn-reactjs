import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";

TodoForm.propTypes = {
  onTodoSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onTodoSubmit: null,
};

function TodoForm(props) {
  const { onTodoSubmit } = props;
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const inputValue = {
      title: value,
    };

    if (!onTodoSubmit) return;

    onTodoSubmit(inputValue);

    setValue("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" value={value} onChange={handleValueChange} />
    </form>
  );
}

export default TodoForm;
