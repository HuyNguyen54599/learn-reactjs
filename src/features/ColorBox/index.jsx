import React, { useState } from "react";

const getRandomColor = () => {
  const COLOR_LIST = ["deeppink", "tomato", "aqua", "lightgreen"];

  let randomColor = Math.trunc(Math.random() * 5);

  return COLOR_LIST[randomColor];
};

function ColorBox(props) {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("color") || "deeppink";

    return initColor;
  });

  const handleColorChange = () => {
    const color = getRandomColor();

    setColor(color);

    localStorage.setItem("color", color);
  };

  return (
    <div className="color">
      <h3>Color box</h3>
      <div
        className="color-box"
        style={{ backgroundColor: color }}
        onClick={handleColorChange}
      >
        Color Box
      </div>
    </div>
  );
}

export default ColorBox;
