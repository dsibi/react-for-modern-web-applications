import { Component } from "react";

interface IProps {
  // name: string;
}

interface IState {
  count: number;
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
  }

  handlePlus() {
    this.setState({ count: this.state.count + 1 });
  }

  handleMinus() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    console.log("render", this.state.count);
    return (
      <div className="result" style={{ margin: "auto", width: "300px" }}>
        {this.state.count}
        <br />
        <button id="plusBtn" onClick={this.handlePlus}>
          +
        </button>
        <button id="minusBtn" onClick={this.handleMinus}>
          -
        </button>
      </div>
    );
  }
}

export default App;
