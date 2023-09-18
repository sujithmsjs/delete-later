import { useState, useEffect } from "react";
import useLocalStore from "./useLocalStore";

const Box = () => {
  const [value, setValue] = useLocalStore("count", 0);

  const handleAdd = () => {
    setValue((prev) => prev + 1);
  };

  const handleSubtract = () => {
    setValue((prev) => prev - 1);
  };

  return (
    <div>
      <h1>{value}</h1>
      <button className="btn btn-warning" onClick={handleSubtract}>
        Subtract
      </button>
      <button className="btn btn-primary m-3" onClick={handleAdd}>
        Add
      </button>
      <button className="btn btn-danger" onClick={() => setValue(0)}>
        Clear
      </button>
    </div>
  );
};

export default Box;
