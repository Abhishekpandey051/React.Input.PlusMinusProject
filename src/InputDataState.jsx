import React, { useState } from "react";

export default function InputDataState() {
  let [data1, setData1] = useState();
  let [data2, setData2] = useState();
  const input1 = (e) => {
    setData2(Number(e.target.value) + 1);
  };
  const input2 = (e) => {
    setData1(Number(e.target.value) - 1);
  };
  return (
    <>
      <input type="text" onChange={input1} value={data1} />
      <br />
      <br />
      <input type="text" onChange={input2} value={data2} />
    </>
  );
}
