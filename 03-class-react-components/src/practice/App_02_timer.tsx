import { Component } from "react";

interface IProps {
  // name: string;
}

interface IState {
  label: string;
  isTimerOn: boolean;
  count: number;
}

class App extends Component<IProps, IState> {
  timerId: NodeJS.Timer | undefined;
  constructor(props: IProps) {
    super(props);
    let currValue = 0;
    let localValue = localStorage.getItem("currValue");
    if (localValue) {
      currValue = +localValue;
    }
    this.state = {
      label: "Start",
      isTimerOn: false,
      count: currValue,
    };
    this.handleStart = this.handleStart.bind(this);
    // this.handleReset = this.handleReset.bind(this);
  }

  handleStart() {
    if (this.state.isTimerOn === true) {
      this.setState({ isTimerOn: false, label: "Start" });
      clearInterval(this.timerId);
      localStorage.setItem("currValue", JSON.stringify(this.state.count));
    } else {
      this.setState({ isTimerOn: true, label: "Stop" });
      this.timerId = setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000);
    }
  }

  handleReset = () => {
    this.setState({ isTimerOn: false, count: 0, label: "Start" });
    clearInterval(this.timerId);
    localStorage.setItem("currValue", JSON.stringify(0));
  };

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="result" style={{ margin: "auto", width: "300px" }}>
        <h1>React Timer</h1>
        <h3>{this.state.count}</h3>
        <button id="start" onClick={this.handleStart}>
          {this.state.label}
        </button>
        <button id="reset" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default App;
