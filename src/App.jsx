import { useState } from "react";
import "./App.css";

function DisplayDate() {
  const todayDate = new Date().toDateString();
  return (
    <>
      <div>
        <p>{todayDate}</p>
      </div>
    </>
  );
}

function StepHandle() {
  const [step, setStep] = useState(0);

  const handleStepIncrement = (e) => {
    e.preventDefault();

    setStep((currStep) => currStep + 1);
  };

  const handleStepDecrement = (e) => {
    e.preventDefault();

    setStep((currStep) => currStep - 1);
  };
  return (
    <>
      <div>
        <h3>Step(s)</h3>
      </div>
      <div>
        <button onClick={handleStepDecrement}>-</button>
        <span>{step}</span>
        <button onClick={handleStepIncrement}>+</button>
      </div>
    </>
  );
}

function CountHandle() {
  return (
    <>
      <div>
        <h3>Count</h3>
      </div>
      <div>
        <button>-</button>
        <span>{0}</span>
        <button>+</button>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <h1>Date Counter Application</h1>
      <StepHandle></StepHandle>
      <CountHandle></CountHandle>
      <DisplayDate></DisplayDate>
    </>
  );
}

export default App;
