import React, { useState } from "react";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import "./Carrinho.css"

import { IconButton } from "@mui/material";

export function Counter() {
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <>
      <div className="Contador">

      {/* <button onClick={handleDecrement}>-</button> */}
      <IconButton onClick={handleDecrement}>
        <RemoveCircleOutline />
      </IconButton>
      <h5>{count}</h5>
      {/* <button onClick={handleIncrement}>: */}
      <IconButton onClick={handleIncrement}>
        <AddCircleOutline />
      </IconButton>
      
      {/* </button> */}
      </div>
    </>
  );
}

export default Counter;
