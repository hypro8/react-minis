import React, { useRef } from "react";

function CustomTextInput() {
  const textInput = useRef(null);
  console.log(textInput.current);

  const handleClick = () => {
    textInput.current.focus();
    console.log(textInput.current);
  };

  return (
    <div>
      <input type="text" ref={textInput} className="input field" />
      <input type="button" value="focus the text input" onClick={handleClick} />
    </div>
  );
}

export default CustomTextInput;
