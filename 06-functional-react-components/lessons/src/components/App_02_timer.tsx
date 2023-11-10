import { useEffect, useState, useRef } from "react";

function setDefValues() {
  const userCount = localStorage.getItem("count");
  return userCount ? +userCount : 0;
}

function Timer() {
  let timerIdRef = useRef<NodeJS.Timer | null>(null);
  let currValue = 0;
  const [count, setCount] = useState(setDefValues());
  const [isTimerOn, setTimer] = useState(false);
  const [label, setLabel] = useState("Start");
  console.log("render");

  function handleStart() {
    if (isTimerOn === true) {
      setTimer(false);
      setLabel("Start");
    } else {
      setTimer(true);
      setLabel("Stop");
    }
  }

  const handleReset = () => {
    setTimer(false);
    setLabel("Start");
    setCount(0);
    currValue = 0;
  };

  useEffect(() => {
    console.log("update");
    localStorage.setItem("count", count.toString());
  }, [count]);

  useEffect(() => {
    if (isTimerOn) {
      timerIdRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => {
      timerIdRef.current && clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    };
  }, [isTimerOn]);

  return (
    <div className="timer" style={{ margin: "auto", width: "300px" }}>
      <h1>React Timer</h1>
      <h3>{count}</h3>
      <button id="start" onClick={handleStart}>
        {label}
      </button>
      <button id="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Timer;
