import React, { useState } from "react";

function Precount() {
  const [count, setCount] = useState(3);
  function decrementCount() {
    setCount(preCount => preCount - 1)
  }
  function incrementCount() {
    setCount(preCount => preCount + 1)
  }
  return (
    <div>
      <button onClick={decrementCount}> - </button>
      <span>  {count}  </span>
      <button onClick={incrementCount}> + </button>
    </div>
  );
}
export default Precount;