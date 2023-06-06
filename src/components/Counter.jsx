import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      className=""
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "100px 10px 140px",
        marginTop: "50px",
        backgroundColor: "lightgray",
        width: "300px",
        margin: "50px auto",
        borderRadius: "15px",
      }}
    >
      <div>
        <h1 style={{ marginBottom:"45px" }}>
          Counter: <span style={{ color: "red" }}>{count}</span>
        </h1>
      </div>
      <div style={{ display: "flex", gap: "15px" }}>
        <button
          onClick={() => setCount(count - 1)}
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "7px 10px",
            borderRadius: "5px",
            fontSize: ".7rem",
          }}
        >
          INCREMENT
        </button>

        <button
          onClick={() => setCount(0)}
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "7px 10px",
            borderRadius: "5px",
            fontSize: ".7rem",
          }}
        >
          RESET
        </button>

        <button
          onClick={() => setCount(count + 1)}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "7px 10px",
            borderRadius: "5px",
            fontSize: ".7rem",
          }}
        >
          DECREMENT
        </button>
      </div>
    </div>
  );
};

export default Counter;
