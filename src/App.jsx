import { useState } from "react";
import "./App.css";

function DisplayDate({ count }) {
  let todayDate = new Date();

  todayDate.setDate(todayDate.getDate() + count);

  return (
    <>
      {count === 0 && (
        <div>
          <p>Today is {todayDate.toDateString()}</p>
        </div>
      )}
      {count >= 1 && (
        <div>
          <p>
            {count} day(s) from Today is {todayDate.toDateString()}
          </p>
        </div>
      )}
      {count < 0 && (
        <div>
          <p>
            {Math.abs(count)} day(s) ago was {todayDate.toDateString()}
          </p>
        </div>
      )}
    </>
  );
}

function StepHandle({ step, handleStepDecrement, handleStepIncrement }) {
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

function CountHandle({ count, handleCountDecrement, handleCountIncrement }) {
  return (
    <>
      <div>
        <h3>Count</h3>
      </div>
      <div>
        <button onClick={handleCountDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleCountIncrement}>+</button>
      </div>
    </>
  );
}

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const handleCountDecrement = () => {
    setCount((currCount) => currCount - step);
  };

  const handleCountIncrement = () => {
    setCount((currCount) => currCount + step);
  };

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
      <h1>Date Counter Application</h1>
      <StepHandle
        step={step}
        handleStepDecrement={handleStepDecrement}
        handleStepIncrement={handleStepIncrement}
      ></StepHandle>
      <CountHandle
        count={count}
        handleCountDecrement={handleCountDecrement}
        handleCountIncrement={handleCountIncrement}
      ></CountHandle>
      <DisplayDate count={count} step={step}></DisplayDate>
    </>
  );
}

export default App;
