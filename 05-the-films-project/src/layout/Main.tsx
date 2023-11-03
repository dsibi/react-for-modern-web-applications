import { Component, ReactNode } from "react";
import MovieList from "../components/MovieList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component<{}, IMovieList> {
  constructor(props: any) {
    super(props);
    this.state = { movieList: [], loading: true };
  }

  componentDidMount(): void {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => this.setState({ movieList: data.Search, loading: false }))
      .catch((error) => {
        console.error(error);
        this.setState({ loading: false });
      });
  }

  searchMovie = (filter: ISearchState) => {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${filter.search}${
        filter.type !== "all" ? `&type=${filter.type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movieList: data.Search, loading: false }))
      .catch((error) => {
        console.error(error);
        this.setState({ loading: false });
      });
  };

  render(): ReactNode {
    const { loading } = this.state;

    return (
      <main className="container content">
        <Search searchMovie={this.searchMovie} />
        {!loading ? (
          <MovieList
            movieList={this.state.movieList}
            loading={this.state.loading}
          />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }
}

export default Main;
