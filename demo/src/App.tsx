import { log } from "console";
import { Component } from "react";

interface IProps {
  // name: string;
}

interface IState {
  posts: string[];
  loading: boolean;
  comments: string[];
}

class App extends Component<IProps, IState> {
  timerId: NodeJS.Timer | undefined;
  constructor(props: IProps) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      comments: [],
    };
  }

  componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
      response
        .json()
        .then((data) => this.setState({ posts: data, loading: false }))
    );
    this.timerId = setInterval(() => {
      fetch("https://jsonplaceholder.typicode.com/comments").then((response) =>
        response.json().then((data) => this.setState({ comments: data }))
      );
    }, 3000);
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="result" style={{ margin: "auto", width: "300px" }}>
        {this.state.loading ? (
          <h3>Preloading...</h3>
        ) : (
          <h3>{this.state.posts.length} posts has been loaded</h3>
        )}
      </div>
    );
  }
}

export default App;
