import Movie from "./Movie";

function MovieList(props: IMovieList) {
  const { movieList = [] } = props;

  return (
    <div className="movies">
      {movieList.length ? (
        movieList.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
}

export default MovieList;
