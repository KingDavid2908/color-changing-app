import React from "react";
import { useState } from "react";
import Box from "./Box";
import ColorInput from "./ColorInput";

const Main = () => {
  const [color, setColor] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <main className="main">
      <Box color={color} hexValue={hexValue} isDarkText={isDarkText} />
      <ColorInput
        color={color}
        setColor={setColor}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </main>
  );
};

export default Main;
