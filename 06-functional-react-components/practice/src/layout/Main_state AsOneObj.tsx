import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
  const [movies, setMovies] = useState<IMovieList>({
    movieList: [],
    loading: true,
  });

  // const searchMovie = (filter: ISearchState) => {
  //   movies.loading = true;
  //   setMovies(movies);
  //   fetch(
  //     `https://www.omdbapi.com/?apikey=${API_KEY}&s=${filter.search}${
  //       filter.type !== "all" ? `&type=${filter.type}` : ""
  //     }`
  //   )
  //     .then((response) => response.json())
  //     .then((data: APIResponse) => {
  //       movies.movieList = data.Search;
  //       movies.loading = false;
  //       setMovies(movies);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       movies.loading = false;
  //       setMovies(movies);
  //     });
  // };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data: APIResponse) => {
        console.log(movies);
        let c = { movieList: data.Search, loading: false };
        setMovies(movies);
        // setMovies({ ...movies, loading: false });
        // setMovies({ ...movies, movieList: data.Search });
        // movies.movieList = data.Search;
        // movies.loading = false;
        // setMovies(movies);
        console.log(movies);
      })
      .catch((error) => {
        console.error(error);
        movies.loading = false;
        // setMovies(movies);
      });
  }, []);

  return (
    <main className="container content">
      <Search searchMovie={() => {}} />
      {!movies.loading ? (
        <MovieList movieList={movies.movieList} loading={movies.loading} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}

export default Main;
