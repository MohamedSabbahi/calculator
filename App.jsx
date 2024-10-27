import React,{ useState } from "react";

function App() {
  const  [count, setCount] = useState("0");

  function handleClick(buttonLabel) {
    if (buttonLabel === "AC") {
      setCount("0");
    } else if (buttonLabel === "DEL") {
      setCount((prevCount) => (prevCount.length > 1? prevCount.slice(0, -1) : "0"));
    }
    else if (buttonLabel === "=") {
      calculateResult();
    } else {
      setCount((prevCount) => 
        prevCount === "0"
        ? buttonLabel.replace("x", "*").replace("÷", "/")
        : prevCount + buttonLabel.replace("x", "*").replace("÷", "/")
      );
      }
  }

  function calculateResult(){
    try {
      const evalResult = eval(count);
      setCount(evalResult.toString());
    } catch (error) {
      setCount("Error");
      }
  }


  const buttons = [
    ["AC", "DEL", "%", "÷"],
    ["7", "8", "9", "x"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="]
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-white to-orange-300">


      <div className = "relative bg-gray-600 w-96 h-24 rounded-t text-white text-4xl">
        <div className = "absolute right-4 bottom-2">
          {count}
        </div>
      </div>


      <div className="flex flex-col items-center bg-black w-96 rounded-b p-4">
        {buttons.map((row, index) => (
          <div key={index} className="flex flex-row space-x-4 mb-4">
            {row.map((buttonLabel) => (
              <button onClick ={() => handleClick(buttonLabel)} key={buttonLabel} className="flex justify-center items-center w-16 h-16 bg-slate-400 rounded text-3xl">
                {buttonLabel}
              </button>
            ))}
          </div>
        ))}
      </div>


    </div>
  );
}

export default App;
