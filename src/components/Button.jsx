import { useEffect, useRef } from "react";

// Note: (useRef)
// 1. This will not trigger re-render
// 2. Dont use ref to display the value in the render
// 3. Dont read or write the values at render phase.

const Button = () => {
  // useRef is used to refer the value that is not rendered or ref the real DOM element
  const buttonRef = useRef(0);

  //  Use ref will not re-render
  console.log("%c Outside", "color:red");

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  const handleClickedTimes = () => {
    // Mutatting the value
    buttonRef.current = buttonRef.current + 1;

    console.log("Clicked times", buttonRef.current);
  };

  return (
    <>
      {/* <button onClick={handleClickedTimes}>Clicked {buttonRef.current}</button> */}
      <button ref={buttonRef}>Clicked</button>
    </>
  );
};

export default Button;
