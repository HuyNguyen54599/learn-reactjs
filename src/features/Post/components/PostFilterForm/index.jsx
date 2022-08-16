import PropTypes from "prop-types";
import React, { useRef, useState } from "react";

PostFilterForm.propTypes = {
  onSubmitForm: PropTypes.func,
};

PostFilterForm.defaultProps = {
  onSubmitForm: null,
};

function PostFilterForm(props) {
  const { onSubmitForm } = props;
  const [formValue, setFormValue] = useState("");
  const typingTimeoutRef = useRef(null);

  let handleValueChange = (e) => {
    setFormValue(e.target.value);

    if (!onSubmitForm) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const inputValue = {
        formValue: e.target.value,
      };

      onSubmitForm(inputValue);
    }, 300);
  };

  return (
    <form>
      <input type="text" value={formValue} onChange={handleValueChange} />
    </form>
  );
}

export default PostFilterForm;
