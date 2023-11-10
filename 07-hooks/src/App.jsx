import { useEffect, useReducer } from "react";

// type Actions = {
//   type: "START" | "STOP" | "RESET" | "TICK";
// };

// interface IState {
//   count: number;
//   isTimerOn: boolean;
// }

function setDefValues() {
  const userCount = localStorage.getItem("count");
  return userCount ? +userCount : 0;
}

const countReducer = (state, { type }) => {
  if (type === "START") {
    return {
      ...state,
      isTimerOn: true,
    };
  }
  if (type === "STOP") {
    return {
      ...state,
      isTimerOn: false,
    };
  }
  if (type === "RESET") {
    return {
      count: 0,
      isTimerOn: false,
    };
  }
  if (type === "TICK") {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  return state;
};

function Timer() {
  const [{ count, isTimerOn }, dispatch] = useReducer(countReducer, {
    count: setDefValues(),
    isTimerOn: false,
  });

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  useEffect(() => {
    let timerIdRef = null;
    if (isTimerOn) {
      timerIdRef = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);
    }
    return () => {
      timerIdRef && clearInterval(timerIdRef);
      timerIdRef = null;
    };
  }, [isTimerOn]);

  return (
    <div className="timer" style={{ margin: "auto", width: "300px" }}>
      <h1>React Timer</h1>
      <h3>{count}</h3>
      {!isTimerOn ? (
        <button id="start" onClick={() => dispatch({ type: "START" })}>
          Start
        </button>
      ) : (
        <button id="start" onClick={() => dispatch({ type: "STOP" })}>
          Stop
        </button>
      )}
      <button id="reset" onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </div>
  );
}

export default Timer;
