import React from "react";
import "./App.css";

function App() {
  const buttons = [
    {
      value: "C",
      content: "C",
      id: "clear",
      className: "number",
    },
    {
      value: "/",
      content: <i className="fas fa-divide"></i>,
      id: "divide",
      className: "operator",
    },
    {
      value: "7",
      content: "7",
      id: "seven",
      className: "number",
    },
    {
      value: "8",
      content: "8",
      id: "eight",
      className: "number",
    },
    {
      value: "9",
      content: "9",
      id: "nine",
      className: "number",
    },
    {
      value: "*",
      content: "X",
      id: "multiply",
      className: "operator",
    },
    {
      value: "4",
      content: "4",
      id: "four",
      className: "number",
    },
    {
      value: "5",
      content: "5",
      id: "five",
      className: "number",
    },
    {
      value: "6",
      content: "6",
      id: "six",
      className: "number",
    },
    {
      value: "-",
      content: "-",
      id: "subtract",
      className: "operator",
    },
    {
      value: "1",
      content: "1",
      id: "one",
      className: "number",
    },
    {
      value: "2",
      content: "2",
      id: "two",
      className: "number",
    },
    {
      value: "3",
      content: "3",
      id: "three",
      className: "number",
    },
    {
      value: "+",
      content: "+",
      id: "add",
      className: "operator",
    },
    {
      value: "0",
      content: "0",
      id: "zero",
      className: "number",
    },
    {
      value: ".",
      content: ".",
      id: "decimal",
      className: "number",
    },
    {
      value: "=",
      content: "=",
      id: "equals",
      className: "operator",
    },
  ];
  return (
    <>
      <h1>Calcleator</h1>
      <div id="calculator">
        <div id="display">
          <p id="equation">1 / 2 + 3 - 4</p>
          <p id="current">9</p>
        </div>
        {buttons.map((btn, idx) => (
          <button
            id={btn.id}
            className={btn.className}
            key={idx}
            value={btn.value}
          >
            {btn.content}
          </button>
        ))}
      </div>
    </>
  );
}

export default App;
