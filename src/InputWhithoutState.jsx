import React, { useRef } from "react";

export default function InputWithoutState() {
  let input1 = useRef();
  let input2 = useRef();
  const input12 = () => {
    input2.current.value = +input1.current.value + 1;
  };
  const input13 = () => {
    input1.current.value = +input2.current.value - 1;
  };
  return (
    <>
      <input type="text" ref={input1} onChange={input12} />
      <br />
      <br />
      <input type="text" ref={input2} onChange={input13} />
    </>
  );
}
