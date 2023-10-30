import { Component } from "react";
import Posts from "./components/Posts";

class App extends Component<{}, IPosts> {
  constructor(props: {}) {
    super(props);
    this.state = {
      posts: [
        { id: 1, name: "ID1", cb: this.handleSmth },
        { id: 2, name: "ID2", cb: this.handleSmth },
        { id: 3, name: "ID3", cb: this.handleSmth },
      ],
    };
  }

  handleSmth = (id: number) => {
    this.setState({ posts: this.state.posts.filter((post) => post.id != id) });
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="result" style={{ margin: "auto", width: "300px" }}>
        <Posts posts={posts} />
      </div>
    );
  }
}

export default App;
