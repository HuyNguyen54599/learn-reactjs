import React from "react";
import PropTypes from "prop-types";

HobbyList.propTypes = {
  list: PropTypes.array,
  activeId: PropTypes.number,
  onHobbyClick: PropTypes.func,
};

HobbyList.defaultProps = {
  list: [],
  activeId: null,
  onHobbyClick: null,
};

function HobbyList({ list, activeId, onHobbyClick }) {
  const handleClick = (hobby) => {
    if (!onHobbyClick) return;
    onHobbyClick(hobby);
  };
  return (
    <ul className="hobby-list">
      {list.map((item) => (
        <li
          key={item.id}
          className={
            item.id === activeId ? "hobby-item hobby-active" : "hobby-item"
          }
          onClick={() => {
            handleClick(item);
          }}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default HobbyList;
