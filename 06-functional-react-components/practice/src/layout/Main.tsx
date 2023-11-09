import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
  const [movieList, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState(true);

  const searchMovie = (filter: ISearchState) => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${filter.search}${
        filter.type !== "all" ? `&type=${filter.type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data: APIResponse) => {
        setLoading(false);
        setMovies(data.Search);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data: APIResponse) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Search searchMovie={searchMovie} />
      {!loading ? (
        <MovieList movieList={movieList} loading={loading} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}

export default Main;
