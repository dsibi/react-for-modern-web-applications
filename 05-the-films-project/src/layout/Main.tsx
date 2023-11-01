import { Component, ReactNode } from "react";
import MovieList from "../components/MovieList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

class Main extends Component<{}, IMovieListProps> {
  state = {
    movieList: [],
  };

  componentDidMount(): void {
    fetch("http://www.omdbapi.com/?apikey=ea3ba9&s=matrix")
      .then((response) => response.json())
      .then((data) => this.setState({ movieList: data.Search }))
      .catch(console.error);
  }

  render(): ReactNode {
    const { movieList } = this.state;

    return (
      <main className="container content">
        <Search />
        {movieList.length ? (
          <MovieList movieList={this.state.movieList} />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }
}

export default Main;
