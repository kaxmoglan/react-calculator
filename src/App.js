import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // DATA
  const buttons = [
    {
      value: "init",
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
      content: <i className="fas fa-times"></i>,
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
      content: <i className="fas fa-minus"></i>,
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
      content: <i className="fas fa-plus"></i>,
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
      content: <i className="fas fa-equals"></i>,
      id: "equals",
      className: "operator",
    },
  ];

  // STATE
  const [input, setInput] = useState("0");
  const [prevInput, setPrevInput] = useState("");
  const [formula, setFormula] = useState("");
  const [equals, setEquals] = useState(false);
  const [result, setResult] = useState();

  // OPERATOR FUNCTIONS
  const operatorRegExp = /[*+/-]/;

  // HANDLERS

  useEffect(() => {
    if (equals) {
      const answer = eval(formula);
      setResult(answer);
      setFormula(formula.concat(` = ${answer}`));
      setInput(answer.toString());
      // setEquals(false);
    }
  }, [equals]);

  const handleClear = () => {
    setInput("0");
    setPrevInput("");
    setFormula("");
    setEquals(false);
  };

  const handleClick = (e) => {
    const value = e.currentTarget.value;
    // console.log(value);

    if (!Number.isNaN(Number(value))) {
      if (equals) {
        handleClear();
        setInput(value);
      } else if (input.match(operatorRegExp)) {
        setPrevInput(input);
        setFormula(formula.concat(` ${input}`));
        setInput(value);
      } else if (input === "0" && value === "0") {
        return;
      } else if (input === "0") {
        setInput(value);
      } else {
        setInput(input.concat(value));
      }
    } else if (value.match(operatorRegExp)) {
      if (equals) {
        setFormula(result.toString());
        setInput(value);
        setEquals(false);
      } else if (value === "-") {
        setFormula(input);

        if (formula === "0") {
          setFormula(value);
          return;
        } else {
          setPrevInput(input);
          setFormula(formula.concat(` ${input}`));
          setInput(value);
        }
      } else {
        setPrevInput(input);
        setFormula(formula.concat(` ${input}`));
        setInput(value);
      }
    } else {
      switch (value) {
        case "init":
          handleClear();
          break;
        case ".":
          if (!input.includes(".")) {
            setInput(input.concat(value));
          }
          break;
        case "=":
          if (!equals) {
            setFormula(formula.concat(` ${input}`));
            setEquals(true);
          }
          break;
        default:
          return;
      }
    }
    return;
  };

  return (
    <>
      <h1>Calcleator</h1>
      <div id="calculator">
        <div id="display">
          <p id="equation">{formula}</p>
          <p id="current">{input}</p>
        </div>
        {buttons.map((btn, idx) => (
          <button
            onClick={handleClick}
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
