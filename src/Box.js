import React from "react";

const Box = ({ color, hexValue, isDarkText }) => {
  return (
    <div
      className="box"
      style={{
        backgroundColor: color.toLowerCase(),
        color: isDarkText ? "#000" : "#FFF",
      }}
    >
      <p id="color-value">{!color ? "Empty Value" : color.toUpperCase()}</p>
      <p id="hex-value">{!hexValue ? null : hexValue}</p>
    </div>
  );
};

Box.defaultProps = {
  color: "#FFFFFF",
};

export default Box;
